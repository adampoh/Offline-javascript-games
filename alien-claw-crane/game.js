var _STRINGS = { Ad: { Mobile: { Preroll: { ReadyIn: "The game is ready in ", Loading: "Your game is loading...", Close: "Close" }, Header: { ReadyIn: "The game is ready in ", Loading: "Your game is loading...", Close: "Close" }, End: { ReadyIn: "Advertisement ends in ", Loading: "Please wait ...", Close: "Close" } } }, Splash: { Loading: "Loading ...", LogoLine1: "Some text here", LogoLine2: "powered by MarketJS", LogoLine3: "none" }, Game: { SelectPlayer: "Select Player", Win: "You win!", Lose: "You lose!", Score: "Score", Time: "Time", "event-timeleft": "time left", "event-timeout": "time out!", "event-hurryup": "Hurry Up!", "event-normalpicked": "yippie!", "event-featuredpicked": "you rock!", "event-misspicked": "uh...oh!", "get-point": "get point : ", "sign-targetalien": "your target", "menu-options": "options", "menu-profile-enterinitial": "enter initials and choose an alien", "menu-profile-rank": "rank", "menu-profile-total": "total", "level-complete": "level complete!", "alienname-a": "iciri", "alienname-b": "uphalu", "alienname-c": "oxofe", "alienname-d": "etuca", "alienname-e": "ayagu", "alienname-f": "opusa", "pu-freeze": "freeze", "pu-double": "2x points", "pu-shuffle": "shuffle", "pu-addtime": "time extended", gameover: "game over", paused: "paused", sfx: "sfx", music: "music", tutorial0: "to start the game you need to : enter your 3 character initials. select target alien. then click play button", tutorial1: "before time runs out, you have to fulfill 2 conditions. pick all target aliens. reach the needed points for each level.", tutorial2: "there are 3 alien types, each of them has different points. target alien has 5 points. dropped/bonus alien has 2 points. normal alien has 1 point.", tutorial3: "the claw only moves in a clockwise direction. tap anywhere on the screen to change direction. you can also press 'spacebar' on your keyboard if available.", tutorial4: "press the red button to attempt to pick up the alien. make sure that the claw shadow is in the center of alien's shadow, else you will miss the alien.", tutorial5: "press yellow button if available to make life easier. you can also press 'b' on your keyboard to activate it. there are 4 types, which will appear randomly on level 2 and above. try them all!" }, Results: { Title: "High score" } },
    _POSALIEN = {};
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
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGamePreroll" : e <= d ? this.selectedOverlayName = "MobileAdInGamePreroll2" : e <= b && (this.selectedOverlayName = "MobileAdInGamePreroll3");
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
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameHeader" : e <= d ? this.selectedOverlayName = "MobileAdInGameHeader2" : e <= b && (this.selectedOverlayName = "MobileAdInGameHeader3");
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
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameFooter" : e <= d ? this.selectedOverlayName = "MobileAdInGameFooter2" : e <= b && (this.selectedOverlayName = "MobileAdInGameFooter3");
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
                e = Math.floor(100 * Math.random());
            console.log("seed: ", e);
            e <= c ? this.selectedOverlayName = "MobileAdInGameEnd" : e <= d ? this.selectedOverlayName = "MobileAdInGameEnd2" : e <= b && (this.selectedOverlayName = "MobileAdInGameEnd3");
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
    function d(b, u, p) {
        if (p === c && 1 === b.nodeType)
            if (p = "data-" + u.replace(tc, "-$1").toLowerCase(), p = b.getAttribute(p), "string" == typeof p) {
                try { p = "true" === p ? !0 : "false" === p ? !1 : "null" === p ? null : +p + "" === p ? +p : uc.test(p) ? f.parseJSON(p) : p } catch (d) {}
                f.data(b, u, p)
            } else p = c;
        return p
    }

    function e(b) {
        for (var c in b)
            if (!("data" === c && f.isEmptyObject(b[c])) && "toJSON" !== c) return !1;
        return !0
    }

    function g() { return !1 }

    function l() { return !0 }

    function q(b) { return !b || !b.parentNode || 11 === b.parentNode.nodeType }

    function n(b, c) { do b = b[c]; while (b && 1 !== b.nodeType); return b }

    function s(b, c, p) {
        c = c || 0;
        if (f.isFunction(c)) return f.grep(b, function(b, A) { return !!c.call(b, A, b) === p });
        if (c.nodeType) return f.grep(b, function(b) { return b === c === p });
        if ("string" == typeof c) {
            var d = f.grep(b, function(b) { return 1 === b.nodeType });
            if (vc.test(c)) return f.filter(c, d, !p);
            c = f.filter(c, d)
        }
        return f.grep(b, function(b) { return 0 <= f.inArray(b, c) === p })
    }

    function t(b) {
        var c = xb.split("|");
        b = b.createDocumentFragment();
        if (b.createElement)
            for (; c.length;) b.createElement(c.pop());
        return b
    }

    function x(b, c) {
        if (1 === c.nodeType && f.hasData(b)) {
            var p, d, y;
            d = f._data(b);
            var e = f._data(c, d),
                r = d.events;
            if (r)
                for (p in delete e.handle, e.events = {}, r) { d = 0; for (y = r[p].length; d < y; d++) f.event.add(c, p, r[p][d]) }
            e.data && (e.data = f.extend({}, e.data))
        }
    }

    function j(b, c) {
        var p;
        1 === c.nodeType && (c.clearAttributes && c.clearAttributes(), c.mergeAttributes && c.mergeAttributes(b), p = c.nodeName.toLowerCase(), "object" === p ? (c.parentNode && (c.outerHTML = b.outerHTML), f.support.html5Clone && b.innerHTML && !f.trim(c.innerHTML) && (c.innerHTML = b.innerHTML)) : "input" === p && yb.test(b.type) ? (c.defaultChecked = c.checked = b.checked, c.value !== b.value && (c.value = b.value)) : "option" === p ? c.selected = b.defaultSelected : "input" === p || "textarea" === p ? c.defaultValue = b.defaultValue : "script" === p && c.text !== b.text && (c.text = b.text), c.removeAttribute(f.expando))
    }

    function m(b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : "undefined" != typeof b.querySelectorAll ? b.querySelectorAll("*") : [] }

    function v(b) { yb.test(b.type) && (b.defaultChecked = b.checked) }

    function E(b, c) {
        if (c in b) return c;
        for (var p = c.charAt(0).toUpperCase() + c.slice(1), d = c, f = zb.length; f--;)
            if (c = zb[f] + p, c in b) return c;
        return d
    }

    function M(b, c) { return b = c || b, "none" === f.css(b, "display") || !f.contains(b.ownerDocument, b) }

    function F(b, c) {
        for (var p, d, y = [], e = 0, r = b.length; e < r; e++) p = b[e], p.style && (y[e] = f._data(p, "olddisplay"), c ? (!y[e] && "none" === p.style.display && (p.style.display = ""), "" === p.style.display && M(p) && (y[e] = f._data(p, "olddisplay", P(p.nodeName)))) : (d = Q(p, "display"), !y[e] && "none" !== d && f._data(p, "olddisplay", d)));
        for (e = 0; e < r; e++)
            if (p = b[e], p.style && (!c || "none" === p.style.display || "" === p.style.display)) p.style.display = c ? y[e] || "" : "none";
        return b
    }

    function L(b, c, p) { return (b = wc.exec(c)) ? Math.max(0, b[1] - (p || 0)) + (b[2] || "px") : c }

    function Ya(b, c, p, d) { c = p === (d ? "border" : "content") ? 4 : "width" === c ? 1 : 0; for (var y = 0; 4 > c; c += 2) "margin" === p && (y += f.css(b, p + ea[c], !0)), d ? ("content" === p && (y -= parseFloat(Q(b, "padding" + ea[c])) || 0), "margin" !== p && (y -= parseFloat(Q(b, "border" + ea[c] + "Width")) || 0)) : (y += parseFloat(Q(b, "padding" + ea[c])) || 0, "padding" !== p && (y += parseFloat(Q(b, "border" + ea[c] + "Width")) || 0)); return y }

    function G(b, c, p) {
        var d = "width" === c ? b.offsetWidth : b.offsetHeight,
            y = !0,
            e = f.support.boxSizing && "border-box" === f.css(b, "boxSizing");
        if (0 >= d || null == d) {
            d = Q(b, c);
            if (0 > d || null == d) d = b.style[c];
            if (ya.test(d)) return d;
            y = e && (f.support.boxSizingReliable || d === b.style[c]);
            d = parseFloat(d) || 0
        }
        return d + Ya(b, c, p || (e ? "border" : "content"), y) + "px"
    }

    function P(b) {
        if (Za[b]) return Za[b];
        var c = f("<" + b + ">").appendTo(B.body),
            p = c.css("display");
        c.remove();
        if ("none" === p || "" === p) {
            la = B.body.appendChild(la || f.extend(B.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 }));
            if (!ma || !la.createElement) ma = (la.contentWindow || la.contentDocument).document, ma.write("<!doctype html><html><body>"), ma.close();
            c = ma.body.appendChild(ma.createElement(b));
            p = Q(c, "display");
            B.body.removeChild(la)
        }
        return Za[b] = p, p
    }

    function N(b, c, p, d) {
        var y;
        if (f.isArray(c)) f.each(c, function(c, u) { p || xc.test(b) ? d(b, u) : N(b + "[" + ("object" == typeof u ? c : "") + "]", u, p, d) });
        else if (!p && "object" === f.type(c))
            for (y in c) N(b + "[" + y + "]", c[y], p, d);
        else d(b, c)
    }

    function za(b) {
        return function(c, p) {
            "string" != typeof c && (p = c, c = "*");
            var d, y, e = c.toLowerCase().split(fa),
                r = 0,
                g = e.length;
            if (f.isFunction(p))
                for (; r < g; r++) d = e[r], (y = /^\+/.test(d)) && (d = d.substr(1) || "*"), d = b[d] = b[d] || [], d[y ? "unshift" : "push"](p)
        }
    }

    function na(b, u, p, d, f, e) {
        f = f || u.dataTypes[0];
        e = e || {};
        e[f] = !0;
        var r;
        f = b[f];
        for (var g = 0, j = f ? f.length : 0, m = b === $a; g < j && (m || !r); g++) r = f[g](u, p, d), "string" == typeof r && (!m || e[r] ? r = c : (u.dataTypes.unshift(r), r = na(b, u, p, d, r, e)));
        return (m || !r) && !e["*"] && (r = na(b, u, p, d, "*", e)), r
    }

    function sa(b, u) {
        var p, d, y = f.ajaxSettings.flatOptions || {};
        for (p in u) u[p] !== c && ((y[p] ? b : d || (d = {}))[p] = u[p]);
        d && f.extend(!0, b, d)
    }

    function Ab() { try { return new b.XMLHttpRequest } catch (A) {} }

    function Bb() { return setTimeout(function() { Aa = c }, 0), Aa = f.now() }

    function Cb(b, c, p) {
        var d, y = 0,
            e = Ba.length,
            r = f.Deferred().always(function() { delete g.elem }),
            g = function() { for (var c = Aa || Bb(), c = Math.max(0, j.startTime + j.duration - c), u = 1 - (c / j.duration || 0), d = 0, p = j.tweens.length; d < p; d++) j.tweens[d].run(u); return r.notifyWith(b, [j, u, c]), 1 > u && p ? c : (r.resolveWith(b, [j]), !1) },
            j = r.promise({ elem: b, props: f.extend({}, c), opts: f.extend(!0, { specialEasing: {} }, p), originalProperties: c, originalOptions: p, startTime: Aa || Bb(), duration: p.duration, tweens: [], createTween: function(c, u) { var d = f.Tween(b, j.opts, c, u, j.opts.specialEasing[c] || j.opts.easing); return j.tweens.push(d), d }, stop: function(c) { for (var u = 0, d = c ? j.tweens.length : 0; u < d; u++) j.tweens[u].run(1); return c ? r.resolveWith(b, [j, c]) : r.rejectWith(b, [j, c]), this } });
        c = j.props;
        p = j.opts.specialEasing;
        var m, n, l, v;
        for (d in c)
            if (m = f.camelCase(d), n = p[m], l = c[d], f.isArray(l) && (n = l[1], l = c[d] = l[0]), d !== m && (c[m] = l, delete c[d]), (v = f.cssHooks[m]) && "expand" in v)
                for (d in l = v.expand(l), delete c[m], l) d in c || (c[d] = l[d], p[d] = n);
            else p[m] = n;
        for (; y < e; y++)
            if (d = Ba[y].call(j, b, c, j.opts)) return d;
        var s = j;
        f.each(c, function(b, A) { for (var c = (ta[b] || []).concat(ta["*"]), u = 0, d = c.length; u < d && !c[u].call(s, b, A); u++); });
        return f.isFunction(j.opts.start) && j.opts.start.call(b, j), f.fx.timer(f.extend(g, { anim: j, queue: j.opts.queue, elem: b })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function S(b, c, d, f, y) { return new S.prototype.init(b, c, d, f, y) }

    function Da(b, c) {
        var d, f = { height: b },
            y = 0;
        for (c = c ? 1 : 0; 4 > y; y += 2 - c) d = ea[y], f["margin" + d] = f["padding" + d] = b;
        return c && (f.opacity = f.width = b), f
    }

    function Db(b) { return f.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1 }
    var Eb, Ea, B = b.document,
        zc = b.location,
        Ac = b.navigator,
        Bc = b.jQuery,
        Cc = b.$,
        Fb = Array.prototype.push,
        aa = Array.prototype.slice,
        Gb = Array.prototype.indexOf,
        Dc = Object.prototype.toString,
        ab = Object.prototype.hasOwnProperty,
        bb = String.prototype.trim,
        f = function(b, c) { return new f.fn.init(b, c, Eb) },
        Fa = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        Ec = /\S/,
        fa = /\s+/,
        Fc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        Gc = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        Hb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        Hc = /^[\],:{}\s]*$/,
        Ic = /(?:^|:|,)(?:\s*\[)+/g,
        Jc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        Kc = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        Lc = /^-ms-/,
        Mc = /-([\da-z])/gi,
        Nc = function(b, c) { return (c + "").toUpperCase() },
        Ga = function() { B.addEventListener ? (B.removeEventListener("DOMContentLoaded", Ga, !1), f.ready()) : "complete" === B.readyState && (B.detachEvent("onreadystatechange", Ga), f.ready()) },
        Ib = {};
    f.fn = f.prototype = {
        constructor: f,
        init: function(b, u, d) {
            var z, y;
            if (!b) return this;
            if (b.nodeType) return this.context = this[0] = b, this.length = 1, this;
            if ("string" == typeof b) {
                "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) && 3 <= b.length ? z = [null, b, null] : z = Gc.exec(b);
                if (z && (z[1] || !u)) {
                    if (z[1]) return u = u instanceof f ? u[0] : u, y = u && u.nodeType ? u.ownerDocument || u : B, b = f.parseHTML(z[1], y, !0), Hb.test(z[1]) && f.isPlainObject(u) && this.attr.call(b, u, !0), f.merge(this, b);
                    if ((u = B.getElementById(z[2])) && u.parentNode) {
                        if (u.id !== z[2]) return d.find(b);
                        this.length = 1;
                        this[0] = u
                    }
                    return this.context = B, this.selector = b, this
                }
                return !u || u.jquery ? (u || d).find(b) : this.constructor(u).find(b)
            }
            return f.isFunction(b) ? d.ready(b) : (b.selector !== c && (this.selector = b.selector, this.context = b.context), f.makeArray(b, this))
        },
        selector: "",
        jquery: "1.8.2",
        length: 0,
        size: function() { return this.length },
        toArray: function() { return aa.call(this) },
        get: function(b) { return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b] },
        pushStack: function(b, c, d) { b = f.merge(this.constructor(), b); return b.prevObject = this, b.context = this.context, "find" === c ? b.selector = this.selector + (this.selector ? " " : "") + d : c && (b.selector = this.selector + "." + c + "(" + d + ")"), b },
        each: function(b, c) { return f.each(this, b, c) },
        ready: function(b) { return f.ready.promise().done(b), this },
        eq: function(b) { return b = +b, -1 === b ? this.slice(b) : this.slice(b, b + 1) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        slice: function() { return this.pushStack(aa.apply(this, arguments), "slice", aa.call(arguments).join(",")) },
        map: function(b) { return this.pushStack(f.map(this, function(c, d) { return b.call(c, d, c) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: Fb,
        sort: [].sort,
        splice: [].splice
    };
    f.fn.init.prototype = f.fn;
    f.extend = f.fn.extend = function() {
        var b, u, d, z, y, e, r = arguments[0] || {},
            j = 1,
            g = arguments.length,
            m = !1;
        "boolean" == typeof r && (m = r, r = arguments[1] || {}, j = 2);
        "object" != typeof r && !f.isFunction(r) && (r = {});
        for (g === j && (r = this, --j); j < g; j++)
            if (null != (b = arguments[j]))
                for (u in b) d = r[u], z = b[u], r !== z && (m && z && (f.isPlainObject(z) || (y = f.isArray(z))) ? (y ? (y = !1, e = d && f.isArray(d) ? d : []) : e = d && f.isPlainObject(d) ? d : {}, r[u] = f.extend(m, e, z)) : z !== c && (r[u] = z));
        return r
    };
    f.extend({
        noConflict: function(c) { return b.$ === f && (b.$ = Cc), c && b.jQuery === f && (b.jQuery = Bc), f },
        isReady: !1,
        readyWait: 1,
        holdReady: function(b) { b ? f.readyWait++ : f.ready(!0) },
        ready: function(b) {
            if (!(!0 === b ? --f.readyWait : f.isReady)) {
                if (!B.body) return setTimeout(f.ready, 1);
                f.isReady = !0;
                !0 !== b && 0 < --f.readyWait || (Ea.resolveWith(B, [f]), f.fn.trigger && f(B).trigger("ready").off("ready"))
            }
        },
        isFunction: function(b) { return "function" === f.type(b) },
        isArray: Array.isArray || function(b) { return "array" === f.type(b) },
        isWindow: function(b) { return null != b && b == b.window },
        isNumeric: function(b) { return !isNaN(parseFloat(b)) && isFinite(b) },
        type: function(b) { return null == b ? String(b) : Ib[Dc.call(b)] || "object" },
        isPlainObject: function(b) { if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return !1; try { if (b.constructor && !ab.call(b, "constructor") && !ab.call(b.constructor.prototype, "isPrototypeOf")) return !1 } catch (u) { return !1 } for (var d in b); return d === c || ab.call(b, d) },
        isEmptyObject: function(b) { for (var c in b) return !1; return !0 },
        error: function(b) { throw Error(b); },
        parseHTML: function(b, c, d) { var z; return !b || "string" != typeof b ? null : ("boolean" == typeof c && (d = c, c = 0), c = c || B, (z = Hb.exec(b)) ? [c.createElement(z[1])] : (z = f.buildFragment([b], c, d ? null : []), f.merge([], (z.cacheable ? f.clone(z.fragment) : z.fragment).childNodes))) },
        parseJSON: function(c) {
            if (!c || "string" != typeof c) return null;
            c = f.trim(c);
            if (b.JSON && b.JSON.parse) return b.JSON.parse(c);
            if (Hc.test(c.replace(Jc, "@").replace(Kc, "]").replace(Ic, ""))) return (new Function("return " + c))();
            f.error("Invalid JSON: " + c)
        },
        parseXML: function(A) { var u, d; if (!A || "string" != typeof A) return null; try { b.DOMParser ? (d = new DOMParser, u = d.parseFromString(A, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(A)) } catch (z) { u = c } return (!u || !u.documentElement || u.getElementsByTagName("parsererror").length) && f.error("Invalid XML: " + A), u },
        noop: function() {},
        globalEval: function(c) { c && Ec.test(c) && (b.execScript || function(c) { b.eval.call(b, c) })(c) },
        camelCase: function(b) { return b.replace(Lc, "ms-").replace(Mc, Nc) },
        nodeName: function(b, c) { return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase() },
        each: function(b, u, d) {
            var z, y = 0,
                e = b.length,
                r = e === c || f.isFunction(b);
            if (d)
                if (r)
                    for (z in b) { if (!1 === u.apply(b[z], d)) break } else
                        for (; y < e && !1 !== u.apply(b[y++], d););
                else if (r)
                for (z in b) { if (!1 === u.call(b[z], z, b[z])) break } else
                    for (; y < e && !1 !== u.call(b[y], y, b[y++]););
            return b
        },
        trim: bb && !bb.call("\ufeff\u00a0") ? function(b) { return null == b ? "" : bb.call(b) } : function(b) { return null == b ? "" : (b + "").replace(Fc, "") },
        makeArray: function(b, c) { var d, z = c || []; return null != b && (d = f.type(b), null == b.length || "string" === d || "function" === d || "regexp" === d || f.isWindow(b) ? Fb.call(z, b) : f.merge(z, b)), z },
        inArray: function(b, c, d) {
            var f;
            if (c) {
                if (Gb) return Gb.call(c, b, d);
                f = c.length;
                for (d = d ? 0 > d ? Math.max(0, f + d) : d : 0; d < f; d++)
                    if (d in c && c[d] === b) return d
            }
            return -1
        },
        merge: function(b, u) {
            var d = u.length,
                f = b.length,
                e = 0;
            if ("number" == typeof d)
                for (; e < d; e++) b[f++] = u[e];
            else
                for (; u[e] !== c;) b[f++] = u[e++];
            return b.length = f, b
        },
        grep: function(b, c, d) {
            var f, e = [],
                C = 0,
                r = b.length;
            for (d = !!d; C < r; C++) f = !!c(b[C], C), d !== f && e.push(b[C]);
            return e
        },
        map: function(b, u, d) {
            var z, e, C = [],
                r = 0,
                j = b.length;
            if (b instanceof f || j !== c && "number" == typeof j && (0 < j && b[0] && b[j - 1] || 0 === j || f.isArray(b)))
                for (; r < j; r++) z = u(b[r], r, d), null != z && (C[C.length] = z);
            else
                for (e in b) z = u(b[e], e, d), null != z && (C[C.length] = z);
            return C.concat.apply([], C)
        },
        guid: 1,
        proxy: function(b, u) { var d, z, e; return "string" == typeof u && (d = b[u], u = b, b = d), f.isFunction(b) ? (z = aa.call(arguments, 2), e = function() { return b.apply(u, z.concat(aa.call(arguments))) }, e.guid = b.guid = b.guid || f.guid++, e) : c },
        access: function(b, u, d, z, e, C, r) {
            var j, g = null == d,
                m = 0,
                l = b.length;
            if (d && "object" == typeof d) {
                for (m in d) f.access(b, u, m, d[m], 1, C, z);
                e = 1
            } else if (z !== c) {
                j = r === c && f.isFunction(z);
                g && (j ? (j = u, u = function(b, c, A) { return j.call(f(b), A) }) : (u.call(b, z), u = null));
                if (u)
                    for (; m < l; m++) u(b[m], d, j ? z.call(b[m], m, u(b[m], d)) : z, r);
                e = 1
            }
            return e ? b : g ? u.call(b) : l ? u(b[0], d) : C
        },
        now: function() { return (new Date).getTime() }
    });
    f.ready.promise = function(c) {
        if (!Ea)
            if (Ea = f.Deferred(), "complete" === B.readyState) setTimeout(f.ready, 1);
            else if (B.addEventListener) B.addEventListener("DOMContentLoaded", Ga, !1), b.addEventListener("load", f.ready, !1);
        else {
            B.attachEvent("onreadystatechange", Ga);
            b.attachEvent("onload", f.ready);
            var u = !1;
            try { u = null == b.frameElement && B.documentElement } catch (d) {}
            u && u.doScroll && function y() {
                if (!f.isReady) {
                    try { u.doScroll("left") } catch (b) { return setTimeout(y, 50) }
                    f.ready()
                }
            }()
        }
        return Ea.promise(c)
    };
    f.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(b, c) { Ib["[object " + c + "]"] = c.toLowerCase() });
    Eb = f(B);
    var Jb = {};
    f.Callbacks = function(b) {
        var u;
        if ("string" == typeof b) {
            if (!(u = Jb[b])) {
                u = b;
                var d = Jb[u] = {};
                u = (f.each(u.split(fa), function(b, c) { d[c] = !0 }), d)
            }
        } else u = f.extend({}, b);
        b = u;
        var z, e, C, r, j, g, m = [],
            l = !b.once && [],
            n = function(c) {
                z = b.memory && c;
                e = !0;
                g = r || 0;
                r = 0;
                j = m.length;
                for (C = !0; m && g < j; g++)
                    if (!1 === m[g].apply(c[0], c[1]) && b.stopOnFalse) { z = !1; break }
                C = !1;
                m && (l ? l.length && n(l.shift()) : z ? m = [] : v.disable())
            },
            v = {
                add: function() {
                    if (m) {
                        var c = m.length;
                        (function yc(c) { f.each(c, function(c, u) { var d = f.type(u); "function" === d && (!b.unique || !v.has(u)) ? m.push(u) : u && u.length && "string" !== d && yc(u) }) })(arguments);
                        C ? j = m.length : z && (r = c, n(z))
                    }
                    return this
                },
                remove: function() { return m && f.each(arguments, function(b, c) { for (var A; - 1 < (A = f.inArray(c, m, A));) m.splice(A, 1), C && (A <= j && j--, A <= g && g--) }), this },
                has: function(b) { return -1 < f.inArray(b, m) },
                empty: function() { return m = [], this },
                disable: function() { return m = l = z = c, this },
                disabled: function() { return !m },
                lock: function() { return l = c, z || v.disable(), this },
                locked: function() { return !l },
                fireWith: function(b, c) { return c = c || [], c = [b, c.slice ? c.slice() : c], m && (!e || l) && (C ? l.push(c) : n(c)), this },
                fire: function() { return v.fireWith(this, arguments), this },
                fired: function() { return !!e }
            };
        return v
    };
    f.extend({
        Deferred: function(b) {
            var c = [
                    ["resolve", "done", f.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", f.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", f.Callbacks("memory")]
                ],
                d = "pending",
                z = {
                    state: function() { return d },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var b = arguments;
                        return f.Deferred(function(A) {
                            f.each(c, function(c, u) {
                                var d = u[0],
                                    p = b[c];
                                e[u[1]](f.isFunction(p) ? function() {
                                    var b = p.apply(this, arguments);
                                    b && f.isFunction(b.promise) ? b.promise().done(A.resolve).fail(A.reject).progress(A.notify) : A[d + "With"](this === e ? A : this, [b])
                                } : A[d])
                            });
                            b = null
                        }).promise()
                    },
                    promise: function(b) { return null != b ? f.extend(b, z) : z }
                },
                e = {};
            return z.pipe = z.then, f.each(c, function(b, A) {
                var f = A[2],
                    j = A[3];
                z[A[1]] = f.add;
                j && f.add(function() { d = j }, c[b ^ 1][2].disable, c[2][2].lock);
                e[A[0]] = f.fire;
                e[A[0] + "With"] = f.fireWith
            }), z.promise(e), b && b.call(e, e), e
        },
        when: function(b) {
            var c = 0,
                d = aa.call(arguments),
                z = d.length,
                e = 1 !== z || b && f.isFunction(b.promise) ? z : 0,
                j = 1 === e ? b : f.Deferred(),
                r = function(b, c, A) {
                    return function(u) {
                        c[b] = this;
                        A[b] = 1 < arguments.length ? aa.call(arguments) : u;
                        A === g ? j.notifyWith(c, A) : --e || j.resolveWith(c, A)
                    }
                },
                g, m, l;
            if (1 < z) {
                g = Array(z);
                m = Array(z);
                for (l = Array(z); c < z; c++) d[c] && f.isFunction(d[c].promise) ? d[c].promise().done(r(c, l, d)).fail(j.reject).progress(r(c, m, g)) : --e
            }
            return e || j.resolveWith(l, d), j.promise()
        }
    });
    var Oc = f,
        cb, O, Ha, ga, Ia, Ja, T, ha, Ka, db, ua, Kb, J = B.createElement("div");
    J.setAttribute("className", "t");
    J.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    Ha = J.getElementsByTagName("*");
    ga = J.getElementsByTagName("a")[0];
    ga.style.cssText = "top:1px;float:left;opacity:.5";
    if (!Ha || !Ha.length) cb = {};
    else {
        Ia = B.createElement("select");
        Ja = Ia.appendChild(B.createElement("option"));
        T = J.getElementsByTagName("input")[0];
        O = { leadingWhitespace: 3 === J.firstChild.nodeType, tbody: !J.getElementsByTagName("tbody").length, htmlSerialize: !!J.getElementsByTagName("link").length, style: /top/.test(ga.getAttribute("style")), hrefNormalized: "/a" === ga.getAttribute("href"), opacity: /^0.5/.test(ga.style.opacity), cssFloat: !!ga.style.cssFloat, checkOn: "on" === T.value, optSelected: Ja.selected, getSetAttribute: "t" !== J.className, enctype: !!B.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== B.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === B.compatMode, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 };
        T.checked = !0;
        O.noCloneChecked = T.cloneNode(!0).checked;
        Ia.disabled = !0;
        O.optDisabled = !Ja.disabled;
        try { delete J.test } catch (Qd) { O.deleteExpando = !1 }!J.addEventListener && J.attachEvent && J.fireEvent && (J.attachEvent("onclick", Kb = function() { O.noCloneEvent = !1 }), J.cloneNode(!0).fireEvent("onclick"), J.detachEvent("onclick", Kb));
        T = B.createElement("input");
        T.value = "t";
        T.setAttribute("type", "radio");
        O.radioValue = "t" === T.value;
        T.setAttribute("checked", "checked");
        T.setAttribute("name", "t");
        J.appendChild(T);
        ha = B.createDocumentFragment();
        ha.appendChild(J.lastChild);
        O.checkClone = ha.cloneNode(!0).cloneNode(!0).lastChild.checked;
        O.appendChecked = T.checked;
        ha.removeChild(T);
        ha.appendChild(J);
        if (J.attachEvent)
            for (db in { submit: !0, change: !0, focusin: !0 }) Ka = "on" + db, (ua = Ka in J) || (J.setAttribute(Ka, "return;"), ua = "function" == typeof J[Ka]), O[db + "Bubbles"] = ua;
        cb = (f(function() {
            var c, u, d, f, e = B.getElementsByTagName("body")[0];
            e && (c = B.createElement("div"), c.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", e.insertBefore(c, e.firstChild), u = B.createElement("div"), c.appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", d = u.getElementsByTagName("td"), d[0].style.cssText = "padding:0;margin:0;border:0;display:none", ua = 0 === d[0].offsetHeight, d[0].style.display = "", d[1].style.display = "none", O.reliableHiddenOffsets = ua && 0 === d[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", O.boxSizing = 4 === u.offsetWidth, O.doesNotIncludeMarginInBodyOffset = 1 !== e.offsetTop, b.getComputedStyle && (O.pixelPosition = "1%" !== (b.getComputedStyle(u, null) || {}).top, O.boxSizingReliable = "4px" === (b.getComputedStyle(u, null) || { width: "4px" }).width, f = B.createElement("div"), f.style.cssText = u.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;", f.style.marginRight = f.style.width = "0", u.style.width = "1px", u.appendChild(f), O.reliableMarginRight = !parseFloat((b.getComputedStyle(f, null) || {}).marginRight)), "undefined" != typeof u.style.zoom && (u.innerHTML = "", u.style.cssText = "padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1", O.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.style.overflow = "visible", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", O.shrinkWrapBlocks = 3 !== u.offsetWidth, c.style.zoom = 1), e.removeChild(c))
        }), ha.removeChild(J), Ha = ga = Ia = Ja = T = ha = J = null, O)
    }
    Oc.support = cb;
    var uc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        tc = /([A-Z])/g;
    f.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
        hasData: function(b) { return b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando], !!b && !e(b) },
        data: function(b, u, d, z) {
            if (f.acceptData(b)) {
                var e, j, r = f.expando,
                    g = "string" == typeof u,
                    m = b.nodeType,
                    l = m ? f.cache : b,
                    n = m ? b[r] : b[r] && r;
                if (n && l[n] && (z || l[n].data) || !(g && d === c)) {
                    n || (m ? b[r] = n = f.deletedIds.pop() || f.guid++ : n = r);
                    l[n] || (l[n] = {}, m || (l[n].toJSON = f.noop));
                    if ("object" == typeof u || "function" == typeof u) z ? l[n] = f.extend(l[n], u) : l[n].data = f.extend(l[n].data, u);
                    return e = l[n], z || (e.data || (e.data = {}), e = e.data), d !== c && (e[f.camelCase(u)] = d), g ? (j = e[u], null == j && (j = e[f.camelCase(u)])) : j = e, j
                }
            }
        },
        removeData: function(b, c, d) {
            if (f.acceptData(b)) {
                var z, y, j, r = b.nodeType,
                    g = r ? f.cache : b,
                    m = r ? b[f.expando] : f.expando;
                if (g[m]) {
                    if (c && (z = d ? g[m] : g[m].data)) {
                        f.isArray(c) || (c in z ? c = [c] : (c = f.camelCase(c), c in z ? c = [c] : c = c.split(" ")));
                        y = 0;
                        for (j = c.length; y < j; y++) delete z[c[y]];
                        if (!(d ? e : f.isEmptyObject)(z)) return
                    }
                    if (d || !(delete g[m].data, !e(g[m]))) r ? f.cleanData([b], !0) : f.support.deleteExpando || g != g.window ? delete g[m] : g[m] = null
                }
            }
        },
        _data: function(b, c, d) { return f.data(b, c, d, !0) },
        acceptData: function(b) { var c = b.nodeName && f.noData[b.nodeName.toLowerCase()]; return !c || !0 !== c && b.getAttribute("classid") === c }
    });
    f.fn.extend({
        data: function(b, u) {
            var p, z, e, j, r, g = this[0],
                m = 0,
                l = null;
            if (b === c) {
                if (this.length && (l = f.data(g), 1 === g.nodeType && !f._data(g, "parsedAttrs"))) {
                    e = g.attributes;
                    for (r = e.length; m < r; m++) j = e[m].name, j.indexOf("data-") || (j = f.camelCase(j.substring(5)), d(g, j, l[j]));
                    f._data(g, "parsedAttrs", !0)
                }
                return l
            }
            return "object" == typeof b ? this.each(function() { f.data(this, b) }) : (p = b.split(".", 2), p[1] = p[1] ? "." + p[1] : "", z = p[1] + "!", f.access(this, function(u) {
                if (u === c) return l = this.triggerHandler("getData" + z, [p[0]]), l === c && g && (l = f.data(g, b), l = d(g, b, l)), l === c && p[1] ? this.data(p[0]) : l;
                p[1] = u;
                this.each(function() {
                    var c = f(this);
                    c.triggerHandler("setData" + z, p);
                    f.data(this, b, u);
                    c.triggerHandler("changeData" +
                        z, p)
                })
            }, null, u, 1 < arguments.length, null, !1))
        },
        removeData: function(b) { return this.each(function() { f.removeData(this, b) }) }
    });
    f.extend({
        queue: function(b, c, d) { var z; if (b) return c = (c || "fx") + "queue", z = f._data(b, c), d && (!z || f.isArray(d) ? z = f._data(b, c, f.makeArray(d)) : z.push(d)), z || [] },
        dequeue: function(b, c) {
            c = c || "fx";
            var d = f.queue(b, c),
                z = d.length,
                e = d.shift(),
                j = f._queueHooks(b, c),
                r = function() { f.dequeue(b, c) };
            "inprogress" === e && (e = d.shift(), z--);
            e && ("fx" === c && d.unshift("inprogress"), delete j.stop, e.call(b, r, j));
            !z && j && j.empty.fire()
        },
        _queueHooks: function(b, c) {
            var d = c + "queueHooks";
            return f._data(b, d) || f._data(b, d, {
                empty: f.Callbacks("once memory").add(function() {
                    f.removeData(b, c + "queue", !0);
                    f.removeData(b, d, !0)
                })
            })
        }
    });
    f.fn.extend({
        queue: function(b, d) {
            var p = 2;
            return "string" != typeof b && (d = b, b = "fx", p--), arguments.length < p ? f.queue(this[0], b) : d === c ? this : this.each(function() {
                var c = f.queue(this, b, d);
                f._queueHooks(this, b);
                "fx" === b && "inprogress" !== c[0] && f.dequeue(this, b)
            })
        },
        dequeue: function(b) { return this.each(function() { f.dequeue(this, b) }) },
        delay: function(b, c) {
            return b = f.fx ? f.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var u = setTimeout(c, b);
                d.stop = function() { clearTimeout(u) }
            })
        },
        clearQueue: function(b) { return this.queue(b || "fx", []) },
        promise: function(b, d) {
            var p, e = 1,
                y = f.Deferred(),
                j = this,
                r = this.length,
                g = function() {--e || y.resolveWith(j, [j]) };
            "string" != typeof b && (d = b, b = c);
            for (b = b || "fx"; r--;)(p = f._data(j[r], b + "queueHooks")) && p.empty && (e++, p.empty.add(g));
            return g(), y.promise(d)
        }
    });
    var ba, Lb, Mb, Nb = /[\t\r\n]/g,
        Pc = /\r/g,
        Qc = /^(?:button|input)$/i,
        Rc = /^(?:button|input|object|select|textarea)$/i,
        Sc = /^a(?:rea|)$/i,
        Ob = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        Pb = f.support.getSetAttribute;
    f.fn.extend({
        attr: function(b, c) { return f.access(this, f.attr, b, c, 1 < arguments.length) },
        removeAttr: function(b) { return this.each(function() { f.removeAttr(this, b) }) },
        prop: function(b, c) { return f.access(this, f.prop, b, c, 1 < arguments.length) },
        removeProp: function(b) { return b = f.propFix[b] || b, this.each(function() { try { this[b] = c, delete this[b] } catch (d) {} }) },
        addClass: function(b) {
            var c, d, e, y, j, r, g;
            if (f.isFunction(b)) return this.each(function(c) { f(this).addClass(b.call(this, c, this.className)) });
            if (b && "string" == typeof b) {
                c = b.split(fa);
                d = 0;
                for (e = this.length; d < e; d++)
                    if (y = this[d], 1 === y.nodeType)
                        if (!y.className && 1 === c.length) y.className = b;
                        else {
                            j = " " + y.className + " ";
                            r = 0;
                            for (g = c.length; r < g; r++) 0 > j.indexOf(" " + c[r] + " ") && (j += c[r] + " ");
                            y.className = f.trim(j)
                        }
            }
            return this
        },
        removeClass: function(b) {
            var d, p, e, y, j, r, g;
            if (f.isFunction(b)) return this.each(function(c) { f(this).removeClass(b.call(this, c, this.className)) });
            if (b && "string" == typeof b || b === c) {
                d = (b || "").split(fa);
                r = 0;
                for (g = this.length; r < g; r++)
                    if (e = this[r], 1 === e.nodeType && e.className) {
                        p = (" " + e.className + " ").replace(Nb, " ");
                        y = 0;
                        for (j = d.length; y < j; y++)
                            for (; 0 <= p.indexOf(" " + d[y] + " ");) p = p.replace(" " + d[y] + " ", " ");
                        e.className = b ? f.trim(p) : ""
                    }
            }
            return this
        },
        toggleClass: function(b, c) {
            var d = typeof b,
                e = "boolean" == typeof c;
            return f.isFunction(b) ? this.each(function(d) { f(this).toggleClass(b.call(this, d, this.className, c), c) }) : this.each(function() {
                if ("string" === d)
                    for (var y, j = 0, r = f(this), g = c, m = b.split(fa); y = m[j++];) g = e ? g : !r.hasClass(y), r[g ? "addClass" : "removeClass"](y);
                else if ("undefined" === d || "boolean" === d) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function(b) {
            b = " " + b + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if (1 === this[c].nodeType && 0 <= (" " + this[c].className + " ").replace(Nb, " ").indexOf(b)) return !0;
            return !1
        },
        val: function(b) { var d, p, e, y = this[0]; if (arguments.length) return e = f.isFunction(b), this.each(function(p) { var r, y = f(this); if (1 === this.nodeType && (e ? r = b.call(this, p, y.val()) : r = b, null == r ? r = "" : "number" == typeof r ? r += "" : f.isArray(r) && (r = f.map(r, function(b) { return null == b ? "" : b + "" })), d = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], !d || !("set" in d) || d.set(this, r, "value") === c)) this.value = r }); if (y) return d = f.valHooks[y.type] || f.valHooks[y.nodeName.toLowerCase()], d && "get" in d && (p = d.get(y, "value")) !== c ? p : (p = y.value, "string" == typeof p ? p.replace(Pc, "") : null == p ? "" : p) }
    });
    f.extend({
        valHooks: {
            option: { get: function(b) { var c = b.attributes.value; return !c || c.specified ? b.value : b.text } },
            select: {
                get: function(b) {
                    var c, d, e = b.selectedIndex,
                        y = [],
                        j = b.options,
                        r = "select-one" === b.type;
                    if (0 > e) return null;
                    b = r ? e : 0;
                    for (d = r ? e + 1 : j.length; b < d; b++)
                        if (c = j[b], c.selected && (f.support.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !f.nodeName(c.parentNode, "optgroup"))) {
                            c = f(c).val();
                            if (r) return c;
                            y.push(c)
                        }
                    return r && !y.length && j.length ? f(j[e]).val() : y
                },
                set: function(b, c) { var d = f.makeArray(c); return f(b).find("option").each(function() { this.selected = 0 <= f.inArray(f(this).val(), d) }), d.length || (b.selectedIndex = -1), d }
            }
        },
        attrFn: {},
        attr: function(b, d, p, e) {
            var y, j, r = b.nodeType;
            if (b && !(3 === r || 8 === r || 2 === r)) {
                if (e && f.isFunction(f.fn[d])) return f(b)[d](p);
                if ("undefined" == typeof b.getAttribute) return f.prop(b, d, p);
                (e = 1 !== r || !f.isXMLDoc(b)) && (d = d.toLowerCase(), j = f.attrHooks[d] || (Ob.test(d) ? Lb : ba));
                if (p !== c) { if (null === p) { f.removeAttr(b, d); return } return j && "set" in j && e && (y = j.set(b, p, d)) !== c ? y : (b.setAttribute(d, p + ""), p) }
                return j && "get" in j && e && null !== (y = j.get(b, d)) ? y : (y = b.getAttribute(d), null === y ? c : y)
            }
        },
        removeAttr: function(b, c) {
            var d, e, j, g, r = 0;
            if (c && 1 === b.nodeType)
                for (e = c.split(fa); r < e.length; r++)(j = e[r]) && (d = f.propFix[j] || j, g = Ob.test(j), g || f.attr(b, j, ""), b.removeAttribute(Pb ? j : d), g && d in b && (b[d] = !1))
        },
        attrHooks: {
            type: {
                set: function(b, c) {
                    if (Qc.test(b.nodeName) && b.parentNode) f.error("type property can't be changed");
                    else if (!f.support.radioValue && "radio" === c && f.nodeName(b, "input")) { var d = b.value; return b.setAttribute("type", c), d && (b.value = d), c }
                }
            },
            value: {
                get: function(b, c) { return ba && f.nodeName(b, "button") ? ba.get(b, c) : c in b ? b.value : null },
                set: function(b, c, d) {
                    if (ba && f.nodeName(b, "button")) return ba.set(b, c, d);
                    b.value = c
                }
            }
        },
        propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        prop: function(b, d, p) { var e, j, g, r = b.nodeType; if (b && !(3 === r || 8 === r || 2 === r)) return g = 1 !== r || !f.isXMLDoc(b), g && (d = f.propFix[d] || d, j = f.propHooks[d]), p !== c ? j && "set" in j && (e = j.set(b, p, d)) !== c ? e : b[d] = p : j && "get" in j && null !== (e = j.get(b, d)) ? e : b[d] },
        propHooks: { tabIndex: { get: function(b) { var d = b.getAttributeNode("tabindex"); return d && d.specified ? parseInt(d.value, 10) : Rc.test(b.nodeName) || Sc.test(b.nodeName) && b.href ? 0 : c } } }
    });
    Lb = { get: function(b, d) { var p, e = f.prop(b, d); return !0 === e || "boolean" != typeof e && (p = b.getAttributeNode(d)) && !1 !== p.nodeValue ? d.toLowerCase() : c }, set: function(b, c, d) { var e; return !1 === c ? f.removeAttr(b, d) : (e = f.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d } };
    Pb || (Mb = { name: !0, id: !0, coords: !0 }, ba = f.valHooks.button = { get: function(b, d) { var f; return f = b.getAttributeNode(d), f && (Mb[d] ? "" !== f.value : f.specified) ? f.value : c }, set: function(b, c, d) { var f = b.getAttributeNode(d); return f || (f = B.createAttribute(d), b.setAttributeNode(f)), f.value = c + "" } }, f.each(["width", "height"], function(b, c) { f.attrHooks[c] = f.extend(f.attrHooks[c], { set: function(b, A) { if ("" === A) return b.setAttribute(c, "auto"), A } }) }), f.attrHooks.contenteditable = {
        get: ba.get,
        set: function(b, c, d) {
            "" === c && (c = "false");
            ba.set(b, c, d)
        }
    });
    f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function(b, d) { f.attrHooks[d] = f.extend(f.attrHooks[d], { get: function(b) { b = b.getAttribute(d, 2); return null === b ? c : b } }) });
    f.support.style || (f.attrHooks.style = { get: function(b) { return b.style.cssText.toLowerCase() || c }, set: function(b, c) { return b.style.cssText = c + "" } });
    f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, { get: function(b) { b = b.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }));
    f.support.enctype || (f.propFix.enctype = "encoding");
    f.support.checkOn || f.each(["radio", "checkbox"], function() { f.valHooks[this] = { get: function(b) { return null === b.getAttribute("value") ? "on" : b.value } } });
    f.each(["radio", "checkbox"], function() { f.valHooks[this] = f.extend(f.valHooks[this], { set: function(b, c) { if (f.isArray(c)) return b.checked = 0 <= f.inArray(f(b).val(), c) } }) });
    var eb = /^(?:textarea|input|select)$/i,
        Qb = /^([^\.]*|)(?:\.(.+)|)$/,
        Tc = /(?:^|\s)hover(\.\S+|)\b/,
        Uc = /^key/,
        Vc = /^(?:mouse|contextmenu)|click/,
        Rb = /^(?:focusinfocus|focusoutblur)$/,
        Sb = function(b) { return f.event.special.hover ? b : b.replace(Tc, "mouseenter$1 mouseleave$1") };
    f.event = {
        add: function(b, d, p, e, j) {
            var g, r, m, l, n, v, Ca, s, q;
            if (!(3 === b.nodeType || 8 === b.nodeType || !d || !p || !(g = f._data(b)))) {
                p.handler && (Ca = p, p = Ca.handler, j = Ca.selector);
                p.guid || (p.guid = f.guid++);
                (m = g.events) || (g.events = m = {});
                (r = g.handle) || (g.handle = r = function(b) { return "undefined" != typeof f && (!b || f.event.triggered !== b.type) ? f.event.dispatch.apply(r.elem, arguments) : c }, r.elem = b);
                d = f.trim(Sb(d)).split(" ");
                for (g = 0; g < d.length; g++) {
                    l = Qb.exec(d[g]) || [];
                    n = l[1];
                    v = (l[2] || "").split(".").sort();
                    q = f.event.special[n] || {};
                    n = (j ? q.delegateType : q.bindType) || n;
                    q = f.event.special[n] || {};
                    l = f.extend({ type: n, origType: l[1], data: e, handler: p, guid: p.guid, selector: j, needsContext: j && f.expr.match.needsContext.test(j), namespace: v.join(".") }, Ca);
                    s = m[n];
                    if (!s && (s = m[n] = [], s.delegateCount = 0, !q.setup || !1 === q.setup.call(b, e, v, r))) b.addEventListener ? b.addEventListener(n, r, !1) : b.attachEvent && b.attachEvent("on" + n, r);
                    q.add && (q.add.call(b, l), l.handler.guid || (l.handler.guid = p.guid));
                    j ? s.splice(s.delegateCount++, 0, l) : s.push(l);
                    f.event.global[n] = !0
                }
                b = null
            }
        },
        global: {},
        remove: function(b, c, d, e, j) {
            var g, r, m, l, n, v, s, q, x, t, E = f.hasData(b) && f._data(b);
            if (E && (s = E.events)) {
                c = f.trim(Sb(c || "")).split(" ");
                for (g = 0; g < c.length; g++)
                    if (r = Qb.exec(c[g]) || [], m = l = r[1], r = r[2], m) {
                        q = f.event.special[m] || {};
                        m = (e ? q.delegateType : q.bindType) || m;
                        x = s[m] || [];
                        n = x.length;
                        r = r ? RegExp("(^|\\.)" + r.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                        for (v = 0; v < x.length; v++) t = x[v], (j || l === t.origType) && (!d || d.guid === t.guid) && (!r || r.test(t.namespace)) && (!e || e === t.selector || "**" === e && t.selector) && (x.splice(v--, 1), t.selector && x.delegateCount--, q.remove && q.remove.call(b, t));
                        0 === x.length && n !== x.length && ((!q.teardown || !1 === q.teardown.call(b, r, E.handle)) && f.removeEvent(b, m, E.handle), delete s[m])
                    } else
                        for (m in s) f.event.remove(b, m + c[g], d, e, !0);
                f.isEmptyObject(s) && (delete E.handle, f.removeData(b, "events", !0))
            }
        },
        customEvent: { getData: !0, setData: !0, changeData: !0 },
        trigger: function(d, u, p, e) {
            if (!p || 3 !== p.nodeType && 8 !== p.nodeType) {
                var j, g, r, m, l, n, v, s = d.type || d;
                m = [];
                if (!Rb.test(s + f.event.triggered) && (0 <= s.indexOf("!") && (s = s.slice(0, -1), j = !0), 0 <= s.indexOf(".") && (m = s.split("."), s = m.shift(), m.sort()), p && !f.event.customEvent[s] || f.event.global[s]))
                    if (d = "object" == typeof d ? d[f.expando] ? d : new f.Event(s, d) : new f.Event(s), d.type = s, d.isTrigger = !0, d.exclusive = j, d.namespace = m.join("."), d.namespace_re = d.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, m = 0 > s.indexOf(":") ? "on" + s : "", p) {
                        if (d.result = c, d.target || (d.target = p), u = null != u ? f.makeArray(u) : [], u.unshift(d), l = f.event.special[s] || {}, !(l.trigger && !1 === l.trigger.apply(p, u))) {
                            v = [
                                [p, l.bindType || s]
                            ];
                            if (!e && !l.noBubble && !f.isWindow(p)) {
                                g = l.delegateType || s;
                                j = Rb.test(g + s) ? p : p.parentNode;
                                for (r = p; j; j = j.parentNode) v.push([j, g]), r = j;
                                r === (p.ownerDocument || B) && v.push([r.defaultView || r.parentWindow || b, g])
                            }
                            for (g = 0; g < v.length && !d.isPropagationStopped(); g++) j = v[g][0], d.type = v[g][1], (n = (f._data(j, "events") || {})[d.type] && f._data(j, "handle")) && n.apply(j, u), (n = m && j[m]) && f.acceptData(j) && n.apply && !1 === n.apply(j, u) && d.preventDefault();
                            return d.type = s, !e && !d.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.ownerDocument, u)) && ("click" !== s || !f.nodeName(p, "a")) && f.acceptData(p) && m && p[s] && ("focus" !== s && "blur" !== s || 0 !== d.target.offsetWidth) && !f.isWindow(p) && (r = p[m], r && (p[m] = null), f.event.triggered = s, p[s](), f.event.triggered = c, r && (p[m] = r)), d.result
                        }
                    } else
                        for (g in p = f.cache, p) p[g].events && p[g].events[s] && f.event.trigger(d, u, p[g].handle.elem, !0)
            }
        },
        dispatch: function(d) {
            d = f.event.fix(d || b.event);
            var u, p, e, j, g, r, m = (f._data(this, "events") || {})[d.type] || [],
                l = m.delegateCount,
                n = aa.call(arguments),
                v = !d.exclusive && !d.namespace,
                s = f.event.special[d.type] || {},
                q = [];
            n[0] = d;
            d.delegateTarget = this;
            if (!(s.preDispatch && !1 === s.preDispatch.call(this, d))) {
                if (l && (!d.button || "click" !== d.type))
                    for (p = d.target; p != this; p = p.parentNode || this)
                        if (!0 !== p.disabled || "click" !== d.type) {
                            j = {};
                            g = [];
                            for (u = 0; u < l; u++) e = m[u], r = e.selector, j[r] === c && (j[r] = e.needsContext ? 0 <= f(r, this).index(p) : f.find(r, this, null, [p]).length), j[r] && g.push(e);
                            g.length && q.push({ elem: p, matches: g })
                        }
                m.length > l && q.push({ elem: this, matches: m.slice(l) });
                for (u = 0; u < q.length && !d.isPropagationStopped(); u++) {
                    j = q[u];
                    d.currentTarget = j.elem;
                    for (p = 0; p < j.matches.length && !d.isImmediatePropagationStopped(); p++)
                        if (e = j.matches[p], v || !d.namespace && !e.namespace || d.namespace_re && d.namespace_re.test(e.namespace)) d.data = e.data, d.handleObj = e, e = ((f.event.special[e.origType] || {}).handle || e.handler).apply(j.elem, n), e !== c && (d.result = e, !1 === e && (d.preventDefault(), d.stopPropagation()))
                }
                return s.postDispatch && s.postDispatch.call(this, d), d.result
            }
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: ["char", "charCode", "key", "keyCode"], filter: function(b, c) { return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(b, d) {
                var f, e, j, g = d.button,
                    r = d.fromElement;
                return null == b.pageX && null != d.clientX && (f = b.target.ownerDocument || B, e = f.documentElement, j = f.body, b.pageX = d.clientX + (e && e.scrollLeft || j && j.scrollLeft || 0) - (e && e.clientLeft || j && j.clientLeft || 0), b.pageY = d.clientY + (e && e.scrollTop || j && j.scrollTop || 0) - (e && e.clientTop || j && j.clientTop || 0)), !b.relatedTarget && r && (b.relatedTarget = r === b.target ? d.toElement : r), !b.which && g !== c && (b.which = g & 1 ? 1 : g & 2 ? 3 : g & 4 ? 2 : 0), b
            }
        },
        fix: function(b) {
            if (b[f.expando]) return b;
            var c, d, e = b,
                j = f.event.fixHooks[b.type] || {},
                g = j.props ? this.props.concat(j.props) : this.props;
            b = f.Event(e);
            for (c = g.length; c;) d = g[--c], b[d] = e[d];
            return b.target || (b.target = e.srcElement || B), 3 === b.target.nodeType && (b.target = b.target.parentNode), b.metaKey = !!b.metaKey, j.filter ? j.filter(b, e) : b
        },
        special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(b, c, d) { f.isWindow(this) && (this.onbeforeunload = d) }, teardown: function(b, c) { this.onbeforeunload === c && (this.onbeforeunload = null) } } },
        simulate: function(b, c, d, e) {
            b = f.extend(new f.Event, d, { type: b, isSimulated: !0, originalEvent: {} });
            e ? f.event.trigger(b, null, c) : f.event.dispatch.call(c, b);
            b.isDefaultPrevented() && d.preventDefault()
        }
    };
    f.event.handle = f.event.dispatch;
    f.removeEvent = B.removeEventListener ? function(b, c, d) { b.removeEventListener && b.removeEventListener(c, d, !1) } : function(b, c, d) {
        c = "on" + c;
        b.detachEvent && ("undefined" == typeof b[c] && (b[c] = null), b.detachEvent(c, d))
    };
    f.Event = function(b, c) {
        if (this instanceof f.Event) b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || !1 === b.returnValue || b.getPreventDefault && b.getPreventDefault() ? l : g) : this.type = b, c && f.extend(this, c), this.timeStamp = b && b.timeStamp || f.now(), this[f.expando] = !0;
        else return new f.Event(b, c)
    };
    f.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = l;
            var b = this.originalEvent;
            b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = l;
            var b = this.originalEvent;
            b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l;
            this.stopPropagation()
        },
        isDefaultPrevented: g,
        isPropagationStopped: g,
        isImmediatePropagationStopped: g
    };
    f.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(b, c) {
        f.event.special[b] = {
            delegateType: c,
            bindType: c,
            handle: function(b) {
                var d, A = b.relatedTarget,
                    e = b.handleObj;
                if (!A || A !== this && !f.contains(this, A)) b.type = e.origType, d = e.handler.apply(this, arguments), b.type = c;
                return d
            }
        }
    });
    f.support.submitBubbles || (f.event.special.submit = {
        setup: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.add(this, "click._submit keypress._submit", function(b) {
                b = b.target;
                (b = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.form : c) && !f._data(b, "_submit_attached") && (f.event.add(b, "submit._submit", function(b) { b._submit_bubble = !0 }), f._data(b, "_submit_attached", !0))
            })
        },
        postDispatch: function(b) { b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && f.event.simulate("submit", this.parentNode, b, !0)) },
        teardown: function() {
            if (f.nodeName(this, "form")) return !1;
            f.event.remove(this, "._submit")
        }
    });
    f.support.changeBubbles || (f.event.special.change = {
        setup: function() {
            if (eb.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" === this.type) f.event.add(this, "propertychange._change", function(b) { "checked" === b.originalEvent.propertyName && (this._just_changed = !0) }), f.event.add(this, "click._change", function(b) {
                    this._just_changed && !b.isTrigger && (this._just_changed = !1);
                    f.event.simulate("change", this, b, !0)
                });
                return !1
            }
            f.event.add(this, "beforeactivate._change", function(b) {
                b = b.target;
                eb.test(b.nodeName) && !f._data(b, "_change_attached") && (f.event.add(b, "change._change", function(b) { this.parentNode && !b.isSimulated && !b.isTrigger && f.event.simulate("change", this.parentNode, b, !0) }), f._data(b, "_change_attached", !0))
            })
        },
        handle: function(b) { var c = b.target; if (this !== c || b.isSimulated || b.isTrigger || "radio" !== c.type && "checkbox" !== c.type) return b.handleObj.handler.apply(this, arguments) },
        teardown: function() { return f.event.remove(this, "._change"), !eb.test(this.nodeName) }
    });
    f.support.focusinBubbles || f.each({ focus: "focusin", blur: "focusout" }, function(b, c) {
        var d = 0,
            e = function(b) { f.event.simulate(c, b.target, f.event.fix(b), !0) };
        f.event.special[c] = { setup: function() { 0 === d++ && B.addEventListener(b, e, !0) }, teardown: function() { 0 === --d && B.removeEventListener(b, e, !0) } }
    });
    f.fn.extend({
        on: function(b, d, p, e, j) {
            var m, r;
            if ("object" == typeof b) { "string" != typeof d && (p = p || d, d = c); for (r in b) this.on(r, d, p, b[r], j); return this }
            null == p && null == e ? (e = d, p = d = c) : null == e && ("string" == typeof d ? (e = p, p = c) : (e = p, p = d, d = c));
            if (!1 === e) e = g;
            else if (!e) return this;
            return 1 === j && (m = e, e = function(b) { return f().off(b), m.apply(this, arguments) }, e.guid = m.guid || (m.guid = f.guid++)), this.each(function() { f.event.add(this, b, e, p, d) })
        },
        one: function(b, c, d, f) { return this.on(b, c, d, f, 1) },
        off: function(b, d, p) { var e, j; if (b && b.preventDefault && b.handleObj) return e = b.handleObj, f(b.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this; if ("object" == typeof b) { for (j in b) this.off(j, d, b[j]); return this } if (!1 === d || "function" == typeof d) p = d, d = c; return !1 === p && (p = g), this.each(function() { f.event.remove(this, b, p, d) }) },
        bind: function(b, c, d) { return this.on(b, null, c, d) },
        unbind: function(b, c) { return this.off(b, null, c) },
        live: function(b, c, d) { return f(this.context).on(b, this.selector, c, d), this },
        die: function(b, c) { return f(this.context).off(b, this.selector || "**", c), this },
        delegate: function(b, c, d, f) { return this.on(c, b, d, f) },
        undelegate: function(b, c, d) { return 1 === arguments.length ? this.off(b, "**") : this.off(c, b || "**", d) },
        trigger: function(b, c) { return this.each(function() { f.event.trigger(b, c, this) }) },
        triggerHandler: function(b, c) { if (this[0]) return f.event.trigger(b, c, this[0], !0) },
        toggle: function(b) {
            var c = arguments,
                d = b.guid || f.guid++,
                e = 0,
                j = function(d) { var p = (f._data(this, "lastToggle" + b.guid) || 0) % e; return f._data(this, "lastToggle" + b.guid, p + 1), d.preventDefault(), c[p].apply(this, arguments) || !1 };
            for (j.guid = d; e < c.length;) c[e++].guid = d;
            return this.click(j)
        },
        hover: function(b, c) { return this.mouseenter(b).mouseleave(c || b) }
    });
    f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(b, c) {
        f.fn[c] = function(b, d) { return null == d && (d = b, b = null), 0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c) };
        Uc.test(c) && (f.event.fixHooks[c] = f.event.keyHooks);
        Vc.test(c) && (f.event.fixHooks[c] = f.event.mouseHooks)
    });
    var Wc = b,
        D = function(b, c, d, f) {
            d = d || [];
            c = c || X;
            var e, j, r, g, m = c.nodeType;
            if (!b || "string" != typeof b) return d;
            if (1 !== m && 9 !== m) return [];
            r = La(c);
            if (!r && !f && (e = Xc.exec(b)))
                if (g = e[1])
                    if (9 === m) { j = c.getElementById(g); if (!j || !j.parentNode) return d; if (j.id === g) return d.push(j), d } else { if (c.ownerDocument && (j = c.ownerDocument.getElementById(g)) && Tb(c, j) && j.id === g) return d.push(j), d }
            else { if (e[2]) return oa.apply(d, pa.call(c.getElementsByTagName(b), 0)), d; if ((g = e[3]) && Ub && c.getElementsByClassName) return oa.apply(d, pa.call(c.getElementsByClassName(g), 0)), d }
            return fb(b.replace(Ma, "$1"), c, d, f, r)
        },
        va = function(b) { return function(c) { return "input" === c.nodeName.toLowerCase() && c.type === b } },
        Vb = function(b) { return function(c) { var d = c.nodeName.toLowerCase(); return ("input" === d || "button" === d) && c.type === b } },
        ia = function(b) { return Y(function(c) { return c = +c, Y(function(d, f) { for (var e, j = b([], d.length, c), r = j.length; r--;) d[e = j[r]] && (d[e] = !(f[e] = d[e])) }) }) },
        Na = function(b, c, d) {
            if (b === c) return d;
            for (b = b.nextSibling; b;) {
                if (b === c) return -1;
                b = b.nextSibling
            }
            return 1
        },
        Pa = function(b, c) {
            var d, f, e, j, r, g, m;
            if (r = Wb[H][b]) return c ? 0 : r.slice(0);
            r = b;
            g = [];
            for (m = K.preFilter; r;) {
                if (!d || (f = Yc.exec(r))) f && (r = r.slice(f[0].length)), g.push(e = []);
                d = !1;
                if (f = Zc.exec(r)) e.push(d = new Xb(f.shift())), r = r.slice(d.length), d.type = f[0].replace(Ma, " ");
                for (j in K.filter)(f = Oa[j].exec(r)) && (!m[j] || (f = m[j](f, X, !0))) && (e.push(d = new Xb(f.shift())), r = r.slice(d.length), d.type = j, d.matches = f);
                if (!d) break
            }
            return c ? r.length : r ? D.error(b) : Wb(b, g).slice(0)
        },
        hb = function(b, c, d) {
            var f = c.dir,
                e = d && "parentNode" === c.dir,
                j = $c++;
            return c.first ? function(c, d, u) {
                for (; c = c[f];)
                    if (e || 1 === c.nodeType) return b(c, d, u)
            } : function(c, d, u) {
                if (u)
                    for (; c = c[f];) { if ((e || 1 === c.nodeType) && b(c, d, u)) return c } else
                        for (var p, g = wa + " " + j + " ", m = g + gb; c = c[f];)
                            if (e || 1 === c.nodeType) {
                                if ((p = c[H]) === m) return c.sizset;
                                if ("string" == typeof p && 0 === p.indexOf(g)) { if (c.sizset) return c } else {
                                    c[H] = m;
                                    if (b(c, d, u)) return c.sizset = !0, c;
                                    c.sizset = !1
                                }
                            }
            }
        },
        ib = function(b) {
            return 1 < b.length ? function(c, d, f) {
                for (var e = b.length; e--;)
                    if (!b[e](c, d, f)) return !1;
                return !0
            } : b[0]
        },
        Qa = function(b, c, d, f, e) {
            for (var j, g = [], m = 0, l = b.length, n = null != c; m < l; m++)
                if (j = b[m])
                    if (!d || d(j, f, e)) g.push(j), n && c.push(m);
            return g
        },
        jb = function(b, c, d, f, e, j) {
            return f && !f[H] && (f = jb(f)), e && !e[H] && (e = jb(e, j)), Y(function(j, g, m, l) {
                if (!j || !e) {
                    var n, C, v = [],
                        s = [],
                        q = g.length;
                    if (!(C = j)) {
                        C = c || "*";
                        var x = m.nodeType ? [m] : m,
                            t = [];
                        n = 0;
                        for (var E = x.length; n < E; n++) D(C, x[n], t, j);
                        C = t
                    }
                    x = b && (j || !c) ? Qa(C, v, b, m, l) : C;
                    t = d ? e || (j ? b : q || f) ? [] : g : x;
                    d && d(x, t, m, l);
                    if (f) {
                        C = Qa(t, s);
                        f(C, [], m, l);
                        for (m = C.length; m--;)
                            if (n = C[m]) t[s[m]] = !(x[s[m]] = n)
                    }
                    if (j)
                        for (m = b && t.length; m--;) { if (n = t[m]) j[v[m]] = !(g[v[m]] = n) } else t = Qa(t === g ? t.splice(q, t.length) : t), e ? e(null, g, t, l) : oa.apply(g, t)
                }
            })
        },
        kb = function(b) {
            var c, d, f, e = b.length,
                j = K.relative[b[0].type];
            d = j || K.relative[" "];
            for (var g = j ? 1 : 0, m = hb(function(b) { return b === c }, d, !0), l = hb(function(b) { return -1 < Yb.call(c, b) }, d, !0), n = [function(b, d, f) { return !j && (f || d !== Ra) || ((c = d).nodeType ? m(b, d, f) : l(b, d, f)) }]; g < e; g++)
                if (d = K.relative[b[g].type]) n = [hb(ib(n), d)];
                else {
                    d = K.filter[b[g].type].apply(null, b[g].matches);
                    if (d[H]) { for (f = ++g; f < e && !K.relative[b[f].type]; f++); return jb(1 < g && ib(n), 1 < g && b.slice(0, g - 1).join("").replace(Ma, "$1"), d, g < f && kb(b.slice(g, f)), f < e && kb(b = b.slice(f)), f < e && b.join("")) }
                    n.push(d)
                }
            return ib(n)
        },
        fb = function(b, c, d, f, e) {
            var j, g, m, l, n = Pa(b);
            if (!f && 1 === n.length) {
                g = n[0] = n[0].slice(0);
                if (2 < g.length && "ID" === (m = g[0]).type && 9 === c.nodeType && !e && K.relative[g[1].type]) {
                    c = K.find.ID(m.matches[0].replace(ja, ""), c, e)[0];
                    if (!c) return d;
                    b = b.slice(g.shift().length)
                }
                for (j = Oa.POS.test(b) ? -1 : g.length - 1; 0 <= j; j--) {
                    m = g[j];
                    if (K.relative[l = m.type]) break;
                    if (l = K.find[l])
                        if (f = l(m.matches[0].replace(ja, ""), lb.test(g[0].type) && c.parentNode || c, e)) {
                            g.splice(j, 1);
                            b = f.length && g.join("");
                            if (!b) return oa.apply(d, pa.call(f, 0)), d;
                            break
                        }
                }
            }
            return mb(b, n)(f, c, e, d, lb.test(b)), d
        },
        Zb = function() {},
        gb, nb, K, Sa, La, Tb, mb, ob, xa, Ra, $b = !0,
        H = ("sizcache" + Math.random()).replace(".", ""),
        Xb = String,
        X = Wc.document,
        W = X.documentElement,
        wa = 0,
        $c = 0,
        ad = [].pop,
        oa = [].push,
        pa = [].slice,
        Yb = [].indexOf || function(b) {
            for (var c = 0, d = this.length; c < d; c++)
                if (this[c] === b) return c;
            return -1
        },
        Y = function(b, c) { return b[H] = null == c || c, b },
        pb = function() {
            var b = {},
                c = [];
            return Y(function(d, f) { return c.push(d) > K.cacheLength && delete b[c.shift()], b[d] = f }, b)
        },
        ac = pb(),
        Wb = pb(),
        bc = pb(),
        cc = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w#") + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
        qb = ":((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + cc + ")|[^:]|\\\\.)*|.*))\\)|)",
        Ma = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
        Yc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
        Zc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
        bd = RegExp(qb),
        Xc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        lb = /[\x20\t\r\n\f]*[+~]/,
        cd = /h\d/i,
        dd = /input|select|textarea|button/i,
        ja = /\\(?!\\)/g,
        Oa = { ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/, NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/, TAG: RegExp("^(" + "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: RegExp("^" + cc), PSEUDO: RegExp("^" + qb), POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i, CHILD: RegExp("^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"), needsContext: RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i") },
        ca = function(b) { var c = X.createElement("div"); try { return b(c) } catch (d) { return !1 } finally {} },
        ed = ca(function(b) { return b.appendChild(X.createComment("")), !b.getElementsByTagName("*").length }),
        fd = ca(function(b) { return b.innerHTML = "<a href='#'></a>", b.firstChild && "undefined" !== typeof b.firstChild.getAttribute && "#" === b.firstChild.getAttribute("href") }),
        gd = ca(function(b) {
            b.innerHTML = "<select></select>";
            b = typeof b.lastChild.getAttribute("multiple");
            return "boolean" !== b && "string" !== b
        }),
        Ub = ca(function(b) { return b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !b.getElementsByClassName || !b.getElementsByClassName("e").length ? !1 : (b.lastChild.className = "e", 2 === b.getElementsByClassName("e").length) }),
        hd = ca(function(b) {
            b.id = H + 0;
            b.innerHTML = "<a name='" + H + "'></a><div name='" + H + "'></div>";
            W.insertBefore(b, W.firstChild);
            var c = X.getElementsByName && X.getElementsByName(H).length === 2 + X.getElementsByName(H + 0).length;
            return nb = !X.getElementById(H), W.removeChild(b), c
        });
    try { pa.call(W.childNodes, 0)[0].nodeType } catch (Rd) { pa = function(b) { for (var c, d = []; c = this[b]; b++) d.push(c); return d } }
    D.matches = function(b, c) { return D(b, null, null, c) };
    D.matchesSelector = function(b, c) { return 0 < D(c, null, null, [b]).length };
    Sa = D.getText = function(b) {
        var c, d = "",
            f = 0;
        if (c = b.nodeType)
            if (1 === c || 9 === c || 11 === c) { if ("string" == typeof b.textContent) return b.textContent; for (b = b.firstChild; b; b = b.nextSibling) d += Sa(b) } else { if (3 === c || 4 === c) return b.nodeValue }
        else
            for (; c = b[f]; f++) d += Sa(c);
        return d
    };
    La = D.isXML = function(b) { return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1 };
    Tb = D.contains = W.contains ? function(b, c) {
        var d = 9 === b.nodeType ? b.documentElement : b,
            f = c && c.parentNode;
        return b === f || !(!f || !(1 === f.nodeType && d.contains && d.contains(f)))
    } : W.compareDocumentPosition ? function(b, c) { return c && !!(b.compareDocumentPosition(c) & 16) } : function(b, c) {
        for (; c = c.parentNode;)
            if (c === b) return !0;
        return !1
    };
    D.attr = function(b, c) { var d, f = La(b); return f || (c = c.toLowerCase()), (d = K.attrHandle[c]) ? d(b) : f || gd ? b.getAttribute(c) : (d = b.getAttributeNode(c), d ? "boolean" == typeof b[c] ? b[c] ? c : null : d.specified ? d.value : null : null) };
    K = D.selectors = {
        cacheLength: 50,
        createPseudo: Y,
        match: Oa,
        attrHandle: fd ? {} : { href: function(b) { return b.getAttribute("href", 2) }, type: function(b) { return b.getAttribute("type") } },
        find: { ID: nb ? function(b, c, d) { if ("undefined" !== typeof c.getElementById && !d) return (b = c.getElementById(b)) && b.parentNode ? [b] : [] } : function(b, c, d) { if ("undefined" !== typeof c.getElementById && !d) return (c = c.getElementById(b)) ? c.id === b || "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id").value === b ? [c] : void 0 : [] }, TAG: ed ? function(b, c) { if ("undefined" !== typeof c.getElementsByTagName) return c.getElementsByTagName(b) } : function(b, c) { var d = c.getElementsByTagName(b); if ("*" === b) { for (var f, e = [], j = 0; f = d[j]; j++) 1 === f.nodeType && e.push(f); return e } return d }, NAME: hd && function(b, c) { if ("undefined" !== typeof c.getElementsByName) return c.getElementsByName(name) }, CLASS: Ub && function(b, c, d) { if ("undefined" !== typeof c.getElementsByClassName && !d) return c.getElementsByClassName(b) } },
        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
        preFilter: {
            ATTR: function(b) { return b[1] = b[1].replace(ja, ""), b[3] = (b[4] || b[5] || "").replace(ja, ""), "~=" === b[2] && (b[3] = " " + b[3] + " "), b.slice(0, 4) },
            CHILD: function(b) { return b[1] = b[1].toLowerCase(), "nth" === b[1] ? (b[2] || D.error(b[0]), b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ("even" === b[2] || "odd" === b[2])), b[4] = +(b[6] + b[7] || "odd" === b[2])) : b[2] && D.error(b[0]), b },
            PSEUDO: function(b) {
                var c, d;
                if (Oa.CHILD.test(b[0])) return null;
                if (b[3]) b[2] = b[3];
                else if (c = b[4]) bd.test(c) && (d = Pa(c, !0)) && (d = c.indexOf(")", c.length - d) - c.length) && (c = c.slice(0, d), b[0] = b[0].slice(0, d)), b[2] = c;
                return b.slice(0, 3)
            }
        },
        filter: {
            ID: nb ? function(b) {
                return b = b.replace(ja, ""),
                    function(c) { return c.getAttribute("id") === b }
            } : function(b) {
                return b = b.replace(ja, ""),
                    function(c) { return (c = "undefined" !== typeof c.getAttributeNode && c.getAttributeNode("id")) && c.value === b }
            },
            TAG: function(b) { return "*" === b ? function() { return !0 } : (b = b.replace(ja, "").toLowerCase(), function(c) { return c.nodeName && c.nodeName.toLowerCase() === b }) },
            CLASS: function(b) {
                var c = ac[H][b];
                return c || (c = ac(b, RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"))),
                    function(b) { return c.test(b.className || "undefined" !== typeof b.getAttribute && b.getAttribute("class") || "") }
            },
            ATTR: function(b, c, d) { return function(f) { f = D.attr(f, b); return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && -1 < f.indexOf(d) : "$=" === c ? d && f.substr(f.length - d.length) === d : "~=" === c ? -1 < (" " + f + " ").indexOf(d) : "|=" === c ? f === d || f.substr(0, d.length + 1) === d + "-" : !1) : !0 } },
            CHILD: function(b, c, d, f) {
                return "nth" === b ? function(b) {
                    var c, e;
                    c = b.parentNode;
                    if (1 === d && 0 === f) return !0;
                    if (c) { e = 0; for (c = c.firstChild; c && !(1 === c.nodeType && (e++, b === c)); c = c.nextSibling); }
                    return e -= f, e === d || 0 === e % d && 0 <= e / d
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
            PSEUDO: function(b, c) { var d, f = K.pseudos[b] || K.setFilters[b.toLowerCase()] || D.error("unsupported pseudo: " + b); return f[H] ? f(c) : 1 < f.length ? (d = [b, b, "", c], K.setFilters.hasOwnProperty(b.toLowerCase()) ? Y(function(b, d) { for (var e, A = f(b, c), j = A.length; j--;) e = Yb.call(b, A[j]), b[e] = !(d[e] = A[j]) }) : function(b) { return f(b, 0, d) }) : f }
        },
        pseudos: {
            not: Y(function(b) {
                var c = [],
                    d = [],
                    f = mb(b.replace(Ma, "$1"));
                return f[H] ? Y(function(b, c, d, e) {
                    e = f(b, null, e, []);
                    for (var A = b.length; A--;)
                        if (d = e[A]) b[A] = !(c[A] = d)
                }) : function(b, e, A) { return c[0] = b, f(c, null, A, d), !d.pop() }
            }),
            has: Y(function(b) { return function(c) { return 0 < D(b, c).length } }),
            contains: Y(function(b) { return function(c) { return -1 < (c.textContent || c.innerText || Sa(c)).indexOf(b) } }),
            enabled: function(b) { return !1 === b.disabled },
            disabled: function(b) { return !0 === b.disabled },
            checked: function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && !!b.checked || "option" === c && !!b.selected },
            selected: function(b) { return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected },
            parent: function(b) { return !K.pseudos.empty(b) },
            empty: function(b) {
                var c;
                for (b = b.firstChild; b;) {
                    if ("@" < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
                    b = b.nextSibling
                }
                return !0
            },
            header: function(b) { return cd.test(b.nodeName) },
            text: function(b) { var c, d; return "input" === b.nodeName.toLowerCase() && "text" === (c = b.type) && (null == (d = b.getAttribute("type")) || d.toLowerCase() === c) },
            radio: va("radio"),
            checkbox: va("checkbox"),
            file: va("file"),
            password: va("password"),
            image: va("image"),
            submit: Vb("submit"),
            reset: Vb("reset"),
            button: function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && "button" === b.type || "button" === c },
            input: function(b) { return dd.test(b.nodeName) },
            focus: function(b) { var c = b.ownerDocument; return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href) },
            active: function(b) { return b === b.ownerDocument.activeElement },
            first: ia(function() { return [0] }),
            last: ia(function(b, c) { return [c - 1] }),
            eq: ia(function(b, c, d) { return [0 > d ? d + c : d] }),
            even: ia(function(b, c) { for (var d = 0; d < c; d += 2) b.push(d); return b }),
            odd: ia(function(b, c) { for (var d = 1; d < c; d += 2) b.push(d); return b }),
            lt: ia(function(b, c, d) { for (c = 0 > d ? d + c : d; 0 <= --c;) b.push(c); return b }),
            gt: ia(function(b, c, d) { for (d = 0 > d ? d + c : d; ++d < c;) b.push(d); return b })
        }
    };
    ob = W.compareDocumentPosition ? function(b, c) { return b === c ? (xa = !0, 0) : (!b.compareDocumentPosition || !c.compareDocumentPosition ? b.compareDocumentPosition : b.compareDocumentPosition(c) & 4) ? -1 : 1 } : function(b, c) {
        if (b === c) return xa = !0, 0;
        if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
        var d, f, e = [],
            j = [];
        d = b.parentNode;
        f = c.parentNode;
        var g = d;
        if (d === f) return Na(b, c);
        if (!d) return -1;
        if (!f) return 1;
        for (; g;) e.unshift(g), g = g.parentNode;
        for (g = f; g;) j.unshift(g), g = g.parentNode;
        d = e.length;
        f = j.length;
        for (g = 0; g < d && g < f; g++)
            if (e[g] !== j[g]) return Na(e[g], j[g]);
        return g === d ? Na(b, j[g], -1) : Na(e[g], c, 1)
    };
    [0, 0].sort(ob);
    $b = !xa;
    D.uniqueSort = function(b) {
        var c, d = 1;
        xa = $b;
        b.sort(ob);
        if (xa)
            for (; c = b[d]; d++) c === b[d - 1] && b.splice(d--, 1);
        return b
    };
    D.error = function(b) { throw Error("Syntax error, unrecognized expression: " + b); };
    mb = D.compile = function(b, c) {
        var d, f = [],
            e = [],
            j = bc[H][b];
        if (!j) {
            c || (c = Pa(b));
            for (d = c.length; d--;) j = kb(c[d]), j[H] ? f.push(j) : e.push(j);
            var g = 0 < f.length,
                m = 0 < e.length,
                l = function(b, c, d, A, j) {
                    var u, p, n = [],
                        v = 0,
                        s = "0",
                        C = b && [],
                        q = null != j,
                        t = Ra,
                        x = b || m && K.find.TAG("*", j && c.parentNode || c),
                        E = wa += null == t ? 1 : Math.E;
                    for (q && (Ra = c !== X && c, gb = l.el); null != (j = x[s]); s++) {
                        if (m && j) {
                            for (u = 0; p = e[u]; u++)
                                if (p(j, c, d)) { A.push(j); break }
                            q && (wa = E, gb = ++l.el)
                        }
                        g && ((j = !p && j) && v--, b && C.push(j))
                    }
                    v += s;
                    if (g && s !== v) {
                        for (u = 0; p = f[u]; u++) p(C, n, c, d);
                        if (b) {
                            if (0 < v)
                                for (; s--;) !C[s] && !n[s] && (n[s] = ad.call(A));
                            n = Qa(n)
                        }
                        oa.apply(A, n);
                        q && !b && 0 < n.length && 1 < v + f.length && D.uniqueSort(A)
                    }
                    return q && (wa = E, Ra = t), C
                };
            d = (l.el = 0, g ? Y(l) : l);
            j = bc(b, d)
        }
        return j
    };
    if (X.querySelectorAll) {
        var dc, id = fb,
            jd = /'|\\/g,
            kd = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
            Z = [":focus"],
            Ta = [":active", ":focus"],
            Ua = W.matchesSelector || W.mozMatchesSelector || W.webkitMatchesSelector || W.oMatchesSelector || W.msMatchesSelector;
        ca(function(b) {
            b.innerHTML = "<select><option selected=''></option></select>";
            b.querySelectorAll("[selected]").length || Z.push("\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
            b.querySelectorAll(":checked").length || Z.push(":checked")
        });
        ca(function(b) {
            b.innerHTML = "<p test=''></p>";
            b.querySelectorAll("[test^='']").length && Z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:\"\"|'')");
            b.innerHTML = "<input type='hidden'/>";
            b.querySelectorAll(":enabled").length || Z.push(":enabled", ":disabled")
        });
        Z = RegExp(Z.join("|"));
        fb = function(b, c, d, f, e) {
            if (!f && !e && (!Z || !Z.test(b))) {
                var j, g, m = !0,
                    l = H;
                g = c;
                j = 9 === c.nodeType && b;
                if (1 === c.nodeType && "object" !== c.nodeName.toLowerCase()) {
                    j = Pa(b);
                    (m = c.getAttribute("id")) ? l = m.replace(jd, "\\$&"): c.setAttribute("id", l);
                    l = "[id='" + l + "'] ";
                    for (g = j.length; g--;) j[g] = l + j[g].join("");
                    g = lb.test(b) && c.parentNode || c;
                    j = j.join(",")
                }
                if (j) try { return oa.apply(d, pa.call(g.querySelectorAll(j), 0)), d } catch (n) {} finally { m || c.removeAttribute("id") }
            }
            return id(b, c, d, f, e)
        };
        Ua && (ca(function(b) { dc = Ua.call(b, "div"); try { Ua.call(b, "[test!='']:sizzle"), Ta.push("!=", qb) } catch (c) {} }), Ta = RegExp(Ta.join("|")), D.matchesSelector = function(b, c) {
            c = c.replace(kd, "='$1']");
            if (!La(b) && !Ta.test(c) && (!Z || !Z.test(c))) try { var d = Ua.call(b, c); if (d || dc || b.document && 11 !== b.document.nodeType) return d } catch (f) {}
            return 0 < D(c, null, null, [b]).length
        })
    }
    K.pseudos.nth = K.pseudos.eq;
    K.filters = Zb.prototype = K.pseudos;
    K.setFilters = new Zb;
    D.attr = f.attr;
    f.find = D;
    f.expr = D.selectors;
    f.expr[":"] = f.expr.pseudos;
    f.unique = D.uniqueSort;
    f.text = D.getText;
    f.isXMLDoc = D.isXML;
    f.contains = D.contains;
    var ld = /Until$/,
        md = /^(?:parents|prev(?:Until|All))/,
        vc = /^.[^:#\[\.,]*$/,
        ec = f.expr.match.needsContext,
        nd = { children: !0, contents: !0, next: !0, prev: !0 };
    f.fn.extend({
        find: function(b) {
            var c, d, e, j, g, m, l = this;
            if ("string" != typeof b) return f(b).filter(function() {
                c = 0;
                for (d = l.length; c < d; c++)
                    if (f.contains(l[c], this)) return !0
            });
            m = this.pushStack("", "find", b);
            c = 0;
            for (d = this.length; c < d; c++)
                if (e = m.length, f.find(b, this[c], m), 0 < c)
                    for (j = e; j < m.length; j++)
                        for (g = 0; g < e; g++)
                            if (m[g] === m[j]) { m.splice(j--, 1); break }
            return m
        },
        has: function(b) {
            var c, d = f(b, this),
                e = d.length;
            return this.filter(function() {
                for (c = 0; c < e; c++)
                    if (f.contains(this, d[c])) return !0
            })
        },
        not: function(b) { return this.pushStack(s(this, b, !1), "not", b) },
        filter: function(b) { return this.pushStack(s(this, b, !0), "filter", b) },
        is: function(b) { return !!b && ("string" == typeof b ? ec.test(b) ? 0 <= f(b, this.context).index(this[0]) : 0 < f.filter(b, this).length : 0 < this.filter(b).length) },
        closest: function(b, c) {
            for (var d, e = 0, j = this.length, g = [], m = ec.test(b) || "string" != typeof b ? f(b, c || this.context) : 0; e < j; e++)
                for (d = this[e]; d && d.ownerDocument && d !== c && 11 !== d.nodeType;) {
                    if (m ? -1 < m.index(d) : f.find.matchesSelector(d, b)) { g.push(d); break }
                    d = d.parentNode
                }
            return g = 1 < g.length ? f.unique(g) : g, this.pushStack(g, "closest", b)
        },
        index: function(b) { return b ? "string" == typeof b ? f.inArray(this[0], f(b)) : f.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 },
        add: function(b, c) {
            var d = "string" == typeof b ? f(b, c) : f.makeArray(b && b.nodeType ? [b] : b),
                e = f.merge(this.get(), d);
            return this.pushStack(q(d[0]) || q(e[0]) ? e : f.unique(e))
        },
        addBack: function(b) { return this.add(null == b ? this.prevObject : this.prevObject.filter(b)) }
    });
    f.fn.andSelf = f.fn.addBack;
    f.each({ parent: function(b) { return (b = b.parentNode) && 11 !== b.nodeType ? b : null }, parents: function(b) { return f.dir(b, "parentNode") }, parentsUntil: function(b, c, d) { return f.dir(b, "parentNode", d) }, next: function(b) { return n(b, "nextSibling") }, prev: function(b) { return n(b, "previousSibling") }, nextAll: function(b) { return f.dir(b, "nextSibling") }, prevAll: function(b) { return f.dir(b, "previousSibling") }, nextUntil: function(b, c, d) { return f.dir(b, "nextSibling", d) }, prevUntil: function(b, c, d) { return f.dir(b, "previousSibling", d) }, siblings: function(b) { return f.sibling((b.parentNode || {}).firstChild, b) }, children: function(b) { return f.sibling(b.firstChild) }, contents: function(b) { return f.nodeName(b, "iframe") ? b.contentDocument || b.contentWindow.document : f.merge([], b.childNodes) } }, function(b, c) { f.fn[b] = function(d, e) { var j = f.map(this, c, d); return ld.test(b) || (e = d), e && "string" == typeof e && (j = f.filter(e, j)), j = 1 < this.length && !nd[b] ? f.unique(j) : j, 1 < this.length && md.test(b) && (j = j.reverse()), this.pushStack(j, b, aa.call(arguments).join(",")) } });
    f.extend({ filter: function(b, c, d) { return d && (b = ":not(" + b + ")"), 1 === c.length ? f.find.matchesSelector(c[0], b) ? [c[0]] : [] : f.find.matches(b, c) }, dir: function(b, d, e) { var j = []; for (b = b[d]; b && 9 !== b.nodeType && (e === c || 1 !== b.nodeType || !f(b).is(e));) 1 === b.nodeType && j.push(b), b = b[d]; return j }, sibling: function(b, c) { for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b); return d } });
    var xb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        od = / jQuery\d+="(?:null|\d+)"/g,
        rb = /^\s+/,
        fc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        gc = /<([\w:]+)/,
        pd = /<tbody/i,
        qd = /<|&#?\w+;/,
        rd = /<(?:script|style|link)/i,
        sd = /<(?:script|object|embed|option|style)/i,
        sb = RegExp("<(?:" + xb + ")[\\s/>]", "i"),
        yb = /^(?:checkbox|radio)$/,
        hc = /checked\s*(?:[^=]|=\s*.checked.)/i,
        td = /\/(java|ecma)script/i,
        ud = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        V = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
        ic = t(B),
        tb = ic.appendChild(B.createElement("div"));
    V.optgroup = V.option;
    V.tbody = V.tfoot = V.colgroup = V.caption = V.thead;
    V.th = V.td;
    f.support.htmlSerialize || (V._default = [1, "X<div>", "</div>"]);
    f.fn.extend({
        text: function(b) { return f.access(this, function(b) { return b === c ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || B).createTextNode(b)) }, null, b, arguments.length) },
        wrapAll: function(b) {
            if (f.isFunction(b)) return this.each(function(c) { f(this).wrapAll(b.call(this, c)) });
            if (this[0]) {
                var c = f(b, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && c.insertBefore(this[0]);
                c.map(function() { for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild; return b }).append(this)
            }
            return this
        },
        wrapInner: function(b) {
            return f.isFunction(b) ? this.each(function(c) { f(this).wrapInner(b.call(this, c)) }) : this.each(function() {
                var c = f(this),
                    d = c.contents();
                d.length ? d.wrapAll(b) : c.append(b)
            })
        },
        wrap: function(b) { var c = f.isFunction(b); return this.each(function(d) { f(this).wrapAll(c ? b.call(this, d) : b) }) },
        unwrap: function() { return this.parent().each(function() { f.nodeName(this, "body") || f(this).replaceWith(this.childNodes) }).end() },
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
        before: function() { if (!q(this[0])) return this.domManip(arguments, !1, function(b) { this.parentNode.insertBefore(b, this) }); if (arguments.length) { var b = f.clean(arguments); return this.pushStack(f.merge(b, this), "before", this.selector) } },
        after: function() { if (!q(this[0])) return this.domManip(arguments, !1, function(b) { this.parentNode.insertBefore(b, this.nextSibling) }); if (arguments.length) { var b = f.clean(arguments); return this.pushStack(f.merge(this, b), "after", this.selector) } },
        remove: function(b, c) {
            for (var d, e = 0; null != (d = this[e]); e++)
                if (!b || f.filter(b, [d]).length) !c && 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        },
        empty: function() {
            for (var b, c = 0; null != (b = this[c]); c++)
                for (1 === b.nodeType && f.cleanData(b.getElementsByTagName("*")); b.firstChild;) b.removeChild(b.firstChild);
            return this
        },
        clone: function(b, c) { return b = null == b ? !1 : b, c = null == c ? b : c, this.map(function() { return f.clone(this, b, c) }) },
        html: function(b) {
            return f.access(this, function(b) {
                var d = this[0] || {},
                    e = 0,
                    j = this.length;
                if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(od, "") : c;
                if ("string" == typeof b && !rd.test(b) && (f.support.htmlSerialize || !sb.test(b)) && (f.support.leadingWhitespace || !rb.test(b)) && !V[(gc.exec(b) || ["", ""])[1].toLowerCase()]) {
                    b = b.replace(fc, "<$1></$2>");
                    try {
                        for (; e < j; e++) d = this[e] || {}, 1 === d.nodeType && (f.cleanData(d.getElementsByTagName("*")), d.innerHTML = b);
                        d = 0
                    } catch (g) {}
                }
                d && this.empty().append(b)
            }, null, b, arguments.length)
        },
        replaceWith: function(b) {
            return q(this[0]) ? this.length ? this.pushStack(f(f.isFunction(b) ? b() : b), "replaceWith", b) : this : f.isFunction(b) ? this.each(function(c) {
                var d = f(this),
                    e = d.html();
                d.replaceWith(b.call(this, c, e))
            }) : ("string" != typeof b && (b = f(b).detach()), this.each(function() {
                var c = this.nextSibling,
                    d = this.parentNode;
                f(this).remove();
                c ? f(c).before(b) : f(d).append(b)
            }))
        },
        detach: function(b) { return this.remove(b, !0) },
        domManip: function(b, d, e) {
            b = [].concat.apply([], b);
            var j, g, m, r = 0,
                l = b[0],
                n = [],
                v = this.length;
            if (!f.support.checkClone && 1 < v && "string" == typeof l && hc.test(l)) return this.each(function() { f(this).domManip(b, d, e) });
            if (f.isFunction(l)) return this.each(function(j) {
                var g = f(this);
                b[0] = l.call(this, j, d ? g.html() : c);
                g.domManip(b, d, e)
            });
            if (this[0]) {
                j = f.buildFragment(b, this, n);
                m = j.fragment;
                g = m.firstChild;
                1 === m.childNodes.length && (m = g);
                if (g) { d = d && f.nodeName(g, "tr"); for (j = j.cacheable || v - 1; r < v; r++) e.call(d && f.nodeName(this[r], "table") ? this[r].getElementsByTagName("tbody")[0] || this[r].appendChild(this[r].ownerDocument.createElement("tbody")) : this[r], r === j ? m : f.clone(m, !0, !0)) }
                m = g = null;
                n.length && f.each(n, function(b, c) {
                    c.src ? f.ajax ? f.ajax({ url: c.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : f.error("no ajax") : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(ud, ""));
                    c.parentNode && c.parentNode.removeChild(c)
                })
            }
            return this
        }
    });
    f.buildFragment = function(b, d, e) { var j, g, m, r = b[0]; return d = d || B, d = !d.nodeType && d[0] || d, d = d.ownerDocument || d, 1 === b.length && "string" == typeof r && 512 > r.length && d === B && "<" === r.charAt(0) && !sd.test(r) && (f.support.checkClone || !hc.test(r)) && (f.support.html5Clone || !sb.test(r)) && (g = !0, j = f.fragments[r], m = j !== c), j || (j = d.createDocumentFragment(), f.clean(b, d, j, e), g && (f.fragments[r] = m && j)), { fragment: j, cacheable: g } };
    f.fragments = {};
    f.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(b, c) {
        f.fn[b] = function(d) {
            var e, j = 0,
                g = [];
            d = f(d);
            var m = d.length;
            e = 1 === this.length && this[0].parentNode;
            if ((null == e || e && 11 === e.nodeType && 1 === e.childNodes.length) && 1 === m) return d[c](this[0]), this;
            for (; j < m; j++) e = (0 < j ? this.clone(!0) : this).get(), f(d[j])[c](e), g = g.concat(e);
            return this.pushStack(g, b, d.selector)
        }
    });
    f.extend({
        clone: function(b, c, d) {
            var e, g, l, r;
            f.support.html5Clone || f.isXMLDoc(b) || !sb.test("<" + b.nodeName + ">") ? r = b.cloneNode(!0) : (tb.innerHTML = b.outerHTML, tb.removeChild(r = tb.firstChild));
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (1 === b.nodeType || 11 === b.nodeType) && !f.isXMLDoc(b)) {
                j(b, r);
                e = m(b);
                g = m(r);
                for (l = 0; e[l]; ++l) g[l] && j(e[l], g[l])
            }
            if (c && (x(b, r), d)) {
                e = m(b);
                g = m(r);
                for (l = 0; e[l]; ++l) x(e[l], g[l])
            }
            return r
        },
        clean: function(b, c, d, e) {
            var j, g, m, l, n, s, q, x = c === B && ic,
                E = [];
            if (!c || "undefined" == typeof c.createDocumentFragment) c = B;
            for (j = 0; null != (m = b[j]); j++)
                if ("number" == typeof m && (m += ""), m) {
                    if ("string" == typeof m)
                        if (qd.test(m)) {
                            x = x || t(c);
                            s = c.createElement("div");
                            x.appendChild(s);
                            m = m.replace(fc, "<$1></$2>");
                            g = (gc.exec(m) || ["", ""])[1].toLowerCase();
                            l = V[g] || V._default;
                            n = l[0];
                            for (s.innerHTML = l[1] + m + l[2]; n--;) s = s.lastChild;
                            if (!f.support.tbody) {
                                n = pd.test(m);
                                l = "table" === g && !n ? s.firstChild && s.firstChild.childNodes : "<table>" === l[1] && !n ? s.childNodes : [];
                                for (g = l.length - 1; 0 <= g; --g) f.nodeName(l[g], "tbody") && !l[g].childNodes.length && l[g].parentNode.removeChild(l[g])
                            }!f.support.leadingWhitespace && rb.test(m) && s.insertBefore(c.createTextNode(rb.exec(m)[0]), s.firstChild);
                            m = s.childNodes;
                            s.parentNode.removeChild(s)
                        } else m = c.createTextNode(m);
                    m.nodeType ? E.push(m) : f.merge(E, m)
                }
            s && (m = s = x = null);
            if (!f.support.appendChecked)
                for (j = 0; null != (m = E[j]); j++) f.nodeName(m, "input") ? v(m) : "undefined" != typeof m.getElementsByTagName && f.grep(m.getElementsByTagName("input"), v);
            if (d) {
                b = function(b) { if (!b.type || td.test(b.type)) return e ? e.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b) };
                for (j = 0; null != (m = E[j]); j++)
                    if (!f.nodeName(m, "script") || !b(m)) d.appendChild(m), "undefined" != typeof m.getElementsByTagName && (q = f.grep(f.merge([], m.getElementsByTagName("script")), b), E.splice.apply(E, [j + 1, 0].concat(q)), j += q.length)
            }
            return E
        },
        cleanData: function(b, c) {
            for (var d, e, j, g, m = 0, l = f.expando, n = f.cache, v = f.support.deleteExpando, s = f.event.special; null != (j = b[m]); m++)
                if (c || f.acceptData(j))
                    if (d = (e = j[l]) && n[e]) {
                        if (d.events)
                            for (g in d.events) s[g] ? f.event.remove(j, g) : f.removeEvent(j, g, d.handle);
                        n[e] && (delete n[e], v ? delete j[l] : j.removeAttribute ? j.removeAttribute(l) : j[l] = null, f.deletedIds.push(e))
                    }
        }
    });
    var Va, da;
    f.uaMatch = function(b) {
        b = b.toLowerCase();
        b = /(chrome)[ \/]([\w.]+)/.exec(b) || /(webkit)[ \/]([\w.]+)/.exec(b) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) || /(msie) ([\w.]+)/.exec(b) || 0 > b.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b) || [];
        return { browser: b[1] || "", version: b[2] || "0" }
    };
    Va = f.uaMatch(Ac.userAgent);
    da = {};
    Va.browser && (da[Va.browser] = !0, da.version = Va.version);
    da.chrome ? da.webkit = !0 : da.webkit && (da.safari = !0);
    f.browser = da;
    f.sub = function() {
        function b(c, d) { return new b.fn.init(c, d) }
        f.extend(!0, b, this);
        b.superclass = this;
        b.fn = b.prototype = this();
        b.fn.constructor = b;
        b.sub = this.sub;
        b.fn.init = function(d, e) { return e && e instanceof f && !(e instanceof b) && (e = b(e)), f.fn.init.call(this, d, e, c) };
        b.fn.init.prototype = b.fn;
        var c = b(B);
        return b
    };
    var Q, la, ma, ub = /alpha\([^)]*\)/i,
        vd = /opacity=([^)]*)/,
        wd = /^(top|right|bottom|left)$/,
        xd = /^(none|table(?!-c[ea]).+)/,
        jc = /^margin/,
        wc = RegExp("^(" + Fa + ")(.*)$", "i"),
        ya = RegExp("^(" + Fa + ")(?!px)[a-z%]+$", "i"),
        yd = RegExp("^([-+])=(" + Fa + ")", "i"),
        Za = {},
        zd = { position: "absolute", visibility: "hidden", display: "block" },
        kc = { letterSpacing: 0, fontWeight: 400 },
        ea = ["Top", "Right", "Bottom", "Left"],
        zb = ["Webkit", "O", "Moz", "ms"],
        Ad = f.fn.toggle;
    f.fn.extend({
        css: function(b, d) { return f.access(this, function(b, d, e) { return e !== c ? f.style(b, d, e) : f.css(b, d) }, b, d, 1 < arguments.length) },
        show: function() { return F(this, !0) },
        hide: function() { return F(this) },
        toggle: function(b, c) {
            var d = "boolean" == typeof b;
            return f.isFunction(b) && f.isFunction(c) ? Ad.apply(this, arguments) : this.each(function() {
                (d ? b : M(this)) ? f(this).show(): f(this).hide()
            })
        }
    });
    f.extend({
        cssHooks: { opacity: { get: function(b, c) { if (c) { var d = Q(b, "opacity"); return "" === d ? "1" : d } } } },
        cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": f.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(b, d, e, j) {
            if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
                var g, m, l, n = f.camelCase(d),
                    v = b.style;
                d = f.cssProps[n] || (f.cssProps[n] = E(v, n));
                l = f.cssHooks[d] || f.cssHooks[n];
                if (e === c) return l && "get" in l && (g = l.get(b, !1, j)) !== c ? g : v[d];
                m = typeof e;
                "string" === m && (g = yd.exec(e)) && (e = (g[1] + 1) * g[2] + parseFloat(f.css(b, d)), m = "number");
                if (!(null == e || "number" === m && isNaN(e)))
                    if ("number" === m && !f.cssNumber[n] && (e += "px"), !l || !("set" in l) || (e = l.set(b, e, j)) !== c) try { v[d] = e } catch (s) {}
            }
        },
        css: function(b, d, e, j) { var g, m, l, n = f.camelCase(d); return d = f.cssProps[n] || (f.cssProps[n] = E(b.style, n)), l = f.cssHooks[d] || f.cssHooks[n], l && "get" in l && (g = l.get(b, !0, j)), g === c && (g = Q(b, d)), "normal" === g && d in kc && (g = kc[d]), e || j !== c ? (m = parseFloat(g), e || f.isNumeric(m) ? m || 0 : g) : g },
        swap: function(b, c, d) {
            var f, e = {};
            for (f in c) e[f] = b.style[f], b.style[f] = c[f];
            d = d.call(b);
            for (f in c) b.style[f] = e[f];
            return d
        }
    });
    b.getComputedStyle ? Q = function(c, d) {
        var e, j, g, m, l = b.getComputedStyle(c, null),
            n = c.style;
        return l && (e = l[d], "" === e && !f.contains(c.ownerDocument, c) && (e = f.style(c, d)), ya.test(e) && jc.test(d) && (j = n.width, g = n.minWidth, m = n.maxWidth, n.minWidth = n.maxWidth = n.width = e, e = l.width, n.width = j, n.minWidth = g, n.maxWidth = m)), e
    } : B.documentElement.currentStyle && (Q = function(b, c) {
        var d, f, e = b.currentStyle && b.currentStyle[c],
            j = b.style;
        return null == e && j && j[c] && (e = j[c]), ya.test(e) && !wd.test(c) && (d = j.left, f = b.runtimeStyle && b.runtimeStyle.left, f && (b.runtimeStyle.left = b.currentStyle.left), j.left = "fontSize" === c ? "1em" : e, e = j.pixelLeft + "px", j.left = d, f && (b.runtimeStyle.left = f)), "" === e ? "auto" : e
    });
    f.each(["height", "width"], function(b, c) { f.cssHooks[c] = { get: function(b, d, e) { if (d) return 0 === b.offsetWidth && xd.test(Q(b, "display")) ? f.swap(b, zd, function() { return G(b, c, e) }) : G(b, c, e) }, set: function(b, d, e) { return L(b, d, e ? Ya(b, c, e, f.support.boxSizing && "border-box" === f.css(b, "boxSizing")) : 0) } } });
    f.support.opacity || (f.cssHooks.opacity = {
        get: function(b, c) { return vd.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : c ? "1" : "" },
        set: function(b, c) {
            var d = b.style,
                e = b.currentStyle,
                j = f.isNumeric(c) ? "alpha(opacity=" + 100 * c + ")" : "",
                g = e && e.filter || d.filter || "";
            d.zoom = 1;
            if (!(1 <= c && "" === f.trim(g.replace(ub, "")) && d.removeAttribute && (d.removeAttribute("filter"), e && !e.filter))) d.filter = ub.test(g) ? g.replace(ub, j) : g + " " + j
        }
    });
    f(function() { f.support.reliableMarginRight || (f.cssHooks.marginRight = { get: function(b, c) { return f.swap(b, { display: "inline-block" }, function() { if (c) return Q(b, "marginRight") }) } });!f.support.pixelPosition && f.fn.position && f.each(["top", "left"], function(b, c) { f.cssHooks[c] = { get: function(b, d) { if (d) { var e = Q(b, c); return ya.test(e) ? f(b).position()[c] + "px" : e } } } }) });
    f.expr && f.expr.filters && (f.expr.filters.hidden = function(b) { return 0 === b.offsetWidth && 0 === b.offsetHeight || !f.support.reliableHiddenOffsets && "none" === (b.style && b.style.display || Q(b, "display")) }, f.expr.filters.visible = function(b) { return !f.expr.filters.hidden(b) });
    f.each({ margin: "", padding: "", border: "Width" }, function(b, c) {
        f.cssHooks[b + c] = {
            expand: function(d) {
                var f = "string" == typeof d ? d.split(" ") : [d],
                    e = {};
                for (d = 0; 4 > d; d++) e[b + ea[d] + c] = f[d] || f[d - 2] || f[0];
                return e
            }
        };
        jc.test(b) || (f.cssHooks[b + c].set = L)
    });
    var Bd = /%20/g,
        xc = /\[\]$/,
        lc = /\r?\n/g,
        Cd = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Dd = /^(?:select|textarea)/i;
    f.fn.extend({ serialize: function() { return f.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { return this.elements ? f.makeArray(this.elements) : this }).filter(function() { return this.name && !this.disabled && (this.checked || Dd.test(this.nodeName) || Cd.test(this.type)) }).map(function(b, c) { var d = f(this).val(); return null == d ? null : f.isArray(d) ? f.map(d, function(b) { return { name: c.name, value: b.replace(lc, "\r\n") } }) : { name: c.name, value: d.replace(lc, "\r\n") } }).get() } });
    f.param = function(b, d) {
        var e, j = [],
            g = function(b, c) {
                c = f.isFunction(c) ? c() : null == c ? "" : c;
                j[j.length] = encodeURIComponent(b) + "=" + encodeURIComponent(c)
            };
        d === c && (d = f.ajaxSettings && f.ajaxSettings.traditional);
        if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function() { g(this.name, this.value) });
        else
            for (e in b) N(e, b[e], d, g);
        return j.join("&").replace(Bd, "+")
    };
    var qa, ka, Ed = /#.*$/,
        Fd = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        Gd = /^(?:GET|HEAD)$/,
        Hd = /^\/\//,
        mc = /\?/,
        Id = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Jd = /([?&])_=[^&]*/,
        nc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        oc = f.fn.load,
        $a = {},
        pc = {},
        qc = ["*/"] + ["*"];
    try { ka = zc.href } catch (Sd) { ka = B.createElement("a"), ka.href = "", ka = ka.href }
    qa = nc.exec(ka.toLowerCase()) || [];
    f.fn.load = function(b, d, e) {
        if ("string" != typeof b && oc) return oc.apply(this, arguments);
        if (!this.length) return this;
        var j, g, m, l = this,
            n = b.indexOf(" ");
        return 0 <= n && (j = b.slice(n, b.length), b = b.slice(0, n)), f.isFunction(d) ? (e = d, d = c) : d && "object" == typeof d && (g = "POST"), f.ajax({ url: b, type: g, dataType: "html", data: d, complete: function(b, c) { e && l.each(e, m || [b.responseText, c, b]) } }).done(function(b) {
            m = arguments;
            l.html(j ? f("<div>").append(b.replace(Id, "")).find(j) : b)
        }), this
    };
    f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(b, c) { f.fn[c] = function(b) { return this.on(c, b) } });
    f.each(["get", "post"], function(b, d) { f[d] = function(b, e, j, g) { return f.isFunction(e) && (g = g || j, j = e, e = c), f.ajax({ type: d, url: b, data: e, success: j, dataType: g }) } });
    f.extend({
        getScript: function(b, d) { return f.get(b, c, d, "script") },
        getJSON: function(b, c, d) { return f.get(b, c, d, "json") },
        ajaxSetup: function(b, c) { return c ? sa(b, f.ajaxSettings) : (c = b, b = f.ajaxSettings), sa(b, c), b },
        ajaxSettings: { url: ka, isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(qa[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": qc }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": b.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML }, flatOptions: { context: !0, url: !0 } },
        ajaxPrefilter: za($a),
        ajaxTransport: za(pc),
        ajax: function(b, d) {
            function e(b, d, m, u) {
                var p, A, v, q, C, F = d;
                if (2 !== G) {
                    G = 2;
                    n && clearTimeout(n);
                    l = c;
                    g = u || "";
                    I.readyState = 0 < b ? 4 : 0;
                    if (m) {
                        q = t;
                        u = I;
                        var U, R, D, J, K = q.contents,
                            N = q.dataTypes,
                            P = q.responseFields;
                        for (R in P) R in m && (u[P[R]] = m[R]);
                        for (;
                            "*" === N[0];) N.shift(), U === c && (U = q.mimeType || u.getResponseHeader("content-type"));
                        if (U)
                            for (R in K)
                                if (K[R] && K[R].test(U)) { N.unshift(R); break }
                        if (N[0] in m) D = N[0];
                        else {
                            for (R in m) {
                                if (!N[0] || q.converters[R + " " + N[0]]) { D = R; break }
                                J || (J = R)
                            }
                            D = D || J
                        }
                        q = m = D ? (D !== N[0] && N.unshift(D), m[D]) : void 0
                    }
                    if (200 <= b && 300 > b || 304 === b)
                        if (t.ifModified && (C = I.getResponseHeader("Last-Modified"), C && (f.lastModified[j] = C), C = I.getResponseHeader("Etag"), C && (f.etag[j] = C)), 304 === b) F = "notmodified", p = !0;
                        else {
                            var H;
                            a: {
                                p = t;A = q;
                                var O, F = p.dataTypes.slice();m = F[0];U = {};R = 0;p.dataFilter && (A = p.dataFilter(A, p.dataType));
                                if (F[1])
                                    for (H in p.converters) U[H.toLowerCase()] = p.converters[H];
                                for (; v = F[++R];)
                                    if ("*" !== v) {
                                        if ("*" !== m && m !== v) {
                                            H = U[m + " " + v] || U["* " + v];
                                            if (!H)
                                                for (O in U)
                                                    if (C = O.split(" "), C[1] === v && (H = U[m + " " + C[0]] || U["* " + C[0]])) {!0 === H ? H = U[O] : !0 !== U[O] && (v = C[0], F.splice(R--, 0, v)); break }
                                            if (!0 !== H)
                                                if (H && p["throws"]) A = H(A);
                                                else try { A = H(A) } catch (Q) { H = { state: "parsererror", error: H ? Q : "No conversion from " + m + " to " + v }; break a }
                                        }
                                        m = v
                                    }
                                H = { state: "success", data: A }
                            }
                            p = H;
                            F = p.state;
                            A = p.data;
                            v = p.error;
                            p = !v
                        }
                    else if (v = F, !F || b) F = "error", 0 > b && (b = 0);
                    I.status = b;
                    I.statusText = (d || F) + "";
                    p ? M.resolveWith(x, [A, F, I]) : M.rejectWith(x, [I, F, v]);
                    I.statusCode(L);
                    L = c;
                    s && E.trigger("ajax" + (p ? "Success" : "Error"), [I, t, p ? A : v]);
                    B.fireWith(x, [I, F]);
                    s && (E.trigger("ajaxComplete", [I, t]), --f.active || f.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof b && (d = b, b = c);
            d = d || {};
            var j, g, m, l, n, v, s, q, t = f.ajaxSetup({}, d),
                x = t.context || t,
                E = x !== t && (x.nodeType || x instanceof f) ? f(x) : f.event,
                M = f.Deferred(),
                B = f.Callbacks("once memory"),
                L = t.statusCode || {},
                F = {},
                D = {},
                G = 0,
                J = "canceled",
                I = {
                    readyState: 0,
                    setRequestHeader: function(b, c) {
                        if (!G) {
                            var d = b.toLowerCase();
                            b = D[d] = D[d] || b;
                            F[b] = c
                        }
                        return this
                    },
                    getAllResponseHeaders: function() { return 2 === G ? g : null },
                    getResponseHeader: function(b) {
                        var d;
                        if (2 === G) {
                            if (!m)
                                for (m = {}; d = Fd.exec(g);) m[d[1].toLowerCase()] = d[2];
                            d = m[b.toLowerCase()]
                        }
                        return d === c ? null : d
                    },
                    overrideMimeType: function(b) { return G || (t.mimeType = b), this },
                    abort: function(b) { return b = b || J, l && l.abort(b), e(0, b), this }
                };
            M.promise(I);
            I.success = I.done;
            I.error = I.fail;
            I.complete = B.add;
            I.statusCode = function(b) {
                if (b) {
                    var c;
                    if (2 > G)
                        for (c in b) L[c] = [L[c], b[c]];
                    else c = b[I.status], I.always(c)
                }
                return this
            };
            t.url = ((b || t.url) + "").replace(Ed, "").replace(Hd, qa[1] + "//");
            t.dataTypes = f.trim(t.dataType || "*").toLowerCase().split(fa);
            null == t.crossDomain && (v = nc.exec(t.url.toLowerCase()) || !1, t.crossDomain = v && v.join(":") + (v[3] ? "" : "http:" === v[1] ? 80 : 443) !== qa.join(":") + (qa[3] ? "" : "http:" === qa[1] ? 80 : 443));
            t.data && t.processData && "string" != typeof t.data && (t.data = f.param(t.data, t.traditional));
            na($a, t, d, I);
            if (2 === G) return I;
            s = t.global;
            t.type = t.type.toUpperCase();
            t.hasContent = !Gd.test(t.type);
            s && 0 === f.active++ && f.event.trigger("ajaxStart");
            if (!t.hasContent && (t.data && (t.url += (mc.test(t.url) ? "&" : "?") + t.data, delete t.data), j = t.url, !1 === t.cache)) {
                v = f.now();
                var K = t.url.replace(Jd, "$1_=" + v);
                t.url = K + (K === t.url ? (mc.test(t.url) ? "&" : "?") + "_=" + v : "")
            }(t.data && t.hasContent && !1 !== t.contentType || d.contentType) && I.setRequestHeader("Content-Type", t.contentType);
            t.ifModified && (j = j || t.url, f.lastModified[j] && I.setRequestHeader("If-Modified-Since", f.lastModified[j]), f.etag[j] && I.setRequestHeader("If-None-Match", f.etag[j]));
            I.setRequestHeader("Accept", t.dataTypes[0] && t.accepts[t.dataTypes[0]] ? t.accepts[t.dataTypes[0]] + ("*" !== t.dataTypes[0] ? ", " + qc + "; q=0.01" : "") : t.accepts["*"]);
            for (q in t.headers) I.setRequestHeader(q, t.headers[q]);
            if (!t.beforeSend || !1 !== t.beforeSend.call(x, I, t) && 2 !== G) {
                J = "abort";
                for (q in { success: 1, error: 1, complete: 1 }) I[q](t[q]);
                if (l = na(pc, t, d, I)) {
                    I.readyState = 1;
                    s && E.trigger("ajaxSend", [I, t]);
                    t.async && 0 < t.timeout && (n = setTimeout(function() { I.abort("timeout") }, t.timeout));
                    try { G = 1, l.send(F, e) } catch (N) {
                        if (2 > G) e(-1, N);
                        else throw N;
                    }
                } else e(-1, "No Transport");
                return I
            }
            return I.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var rc = [],
        Kd = /\?/,
        Wa = /(=)\?(?=&|$)|\?\?/,
        Ld = f.now();
    f.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var b = rc.pop() || f.expando + "_" + Ld++; return this[b] = !0, b } });
    f.ajaxPrefilter("json jsonp", function(d, e, j) {
        var g, m, l, n = d.data,
            v = d.url,
            s = !1 !== d.jsonp,
            t = s && Wa.test(v),
            q = s && !t && "string" == typeof n && !(d.contentType || "").indexOf("application/x-www-form-urlencoded") && Wa.test(n);
        if ("jsonp" === d.dataTypes[0] || t || q) return g = d.jsonpCallback = f.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback, m = b[g], t ? d.url = v.replace(Wa, "$1" + g) : q ? d.data = n.replace(Wa, "$1" + g) : s && (d.url += (Kd.test(v) ? "&" : "?") + d.jsonp + "=" + g), d.converters["script json"] = function() { return l || f.error(g + " was not called"), l[0] }, d.dataTypes[0] = "json", b[g] = function() { l = arguments }, j.always(function() {
            b[g] = m;
            d[g] && (d.jsonpCallback = e.jsonpCallback, rc.push(g));
            l && f.isFunction(m) && m(l[0]);
            l = m = c
        }), "script"
    });
    f.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(b) { return f.globalEval(b), b } } });
    f.ajaxPrefilter("script", function(b) {
        b.cache === c && (b.cache = !1);
        b.crossDomain && (b.type = "GET", b.global = !1)
    });
    f.ajaxTransport("script", function(b) {
        if (b.crossDomain) {
            var d, f = B.head || B.getElementsByTagName("head")[0] || B.documentElement;
            return {
                send: function(e, j) {
                    d = B.createElement("script");
                    d.async = "async";
                    b.scriptCharset && (d.charset = b.scriptCharset);
                    d.src = b.url;
                    d.onload = d.onreadystatechange = function(b, e) { if (e || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, f && d.parentNode && f.removeChild(d), d = c, e || j(200, "success") };
                    f.insertBefore(d, f.firstChild)
                },
                abort: function() { d && d.onload(0, 1) }
            }
        }
    });
    var ra, vb = b.ActiveXObject ? function() { for (var b in ra) ra[b](0, 1) } : !1,
        Md = 0;
    f.ajaxSettings.xhr = b.ActiveXObject ? function() {
        var c;
        if (!(c = !this.isLocal && Ab())) a: {
            try { c = new b.ActiveXObject("Microsoft.XMLHTTP"); break a } catch (d) {}
            c = void 0
        }
        return c
    } : Ab;
    var wb = f.ajaxSettings.xhr();
    f.extend(f.support, { ajax: !!wb, cors: !!wb && "withCredentials" in wb });
    f.support.ajax && f.ajaxTransport(function(d) {
        if (!d.crossDomain || f.support.cors) {
            var e;
            return {
                send: function(j, g) {
                    var m, l, n = d.xhr();
                    d.username ? n.open(d.type, d.url, d.async, d.username, d.password) : n.open(d.type, d.url, d.async);
                    if (d.xhrFields)
                        for (l in d.xhrFields) n[l] = d.xhrFields[l];
                    d.mimeType && n.overrideMimeType && n.overrideMimeType(d.mimeType);
                    !d.crossDomain && !j["X-Requested-With"] && (j["X-Requested-With"] = "XMLHttpRequest");
                    try { for (l in j) n.setRequestHeader(l, j[l]) } catch (v) {}
                    n.send(d.hasContent && d.data || null);
                    e = function(b, j) {
                        var l, p, v, s, t;
                        try {
                            if (e && (j || 4 === n.readyState))
                                if (e = c, m && (n.onreadystatechange = f.noop, vb && delete ra[m]), j) 4 !== n.readyState && n.abort();
                                else {
                                    l = n.status;
                                    v = n.getAllResponseHeaders();
                                    s = {};
                                    (t = n.responseXML) && t.documentElement && (s.xml = t);
                                    try { s.text = n.responseText } catch (q) {}
                                    try { p = n.statusText } catch (x) { p = "" }!l && d.isLocal && !d.crossDomain ? l = s.text ? 200 : 404 : 1223 === l && (l = 204)
                                }
                        } catch (E) { j || g(-1, E) }
                        s && g(l, p, s, v)
                    };
                    d.async ? 4 === n.readyState ? setTimeout(e, 0) : (m = ++Md, vb && (ra || (ra = {}, f(b).unload(vb)), ra[m] = e), n.onreadystatechange = e) : e()
                },
                abort: function() { e && e(0, 1) }
            }
        }
    });
    var Aa, Xa, Nd = /^(?:toggle|show|hide)$/,
        Od = RegExp("^(?:([-+])=|)(" + Fa + ")([a-z%]*)$", "i"),
        Pd = /queueHooks$/,
        Ba = [function(b, c, d) {
            var e, j, g, m, l, n, v = this,
                s = b.style,
                t = {},
                q = [],
                x = b.nodeType && M(b);
            d.queue || (l = f._queueHooks(b, "fx"), null == l.unqueued && (l.unqueued = 0, n = l.empty.fire, l.empty.fire = function() { l.unqueued || n() }), l.unqueued++, v.always(function() {
                v.always(function() {
                    l.unqueued--;
                    f.queue(b, "fx").length || l.empty.fire()
                })
            }));
            1 === b.nodeType && ("height" in c || "width" in c) && (d.overflow = [s.overflow, s.overflowX, s.overflowY], "inline" === f.css(b, "display") && "none" === f.css(b, "float") && (!f.support.inlineBlockNeedsLayout || "inline" === P(b.nodeName) ? s.display = "inline-block" : s.zoom = 1));
            d.overflow && (s.overflow = "hidden", f.support.shrinkWrapBlocks || v.done(function() {
                s.overflow = d.overflow[0];
                s.overflowX = d.overflow[1];
                s.overflowY = d.overflow[2]
            }));
            for (e in c) j = c[e], Nd.exec(j) && (delete c[e], j !== (x ? "hide" : "show") && q.push(e));
            if (j = q.length) {
                g = f._data(b, "fxshow") || f._data(b, "fxshow", {});
                x ? f(b).show() : v.done(function() { f(b).hide() });
                v.done(function() {
                    var c;
                    f.removeData(b, "fxshow", !0);
                    for (c in t) f.style(b, c, t[c])
                });
                for (e = 0; e < j; e++) c = q[e], m = v.createTween(c, x ? g[c] : 0), t[c] = g[c] || f.style(b, c), c in g || (g[c] = m.start, x && (m.end = m.start, m.start = "width" === c || "height" === c ? 1 : 0))
            }
        }],
        ta = {
            "*": [function(b, c) {
                var d, e, j = this.createTween(b, c),
                    g = Od.exec(c),
                    m = j.cur(),
                    l = +m || 0,
                    n = 1,
                    v = 20;
                if (g) {
                    d = +g[2];
                    e = g[3] || (f.cssNumber[b] ? "" : "px");
                    if ("px" !== e && l) {
                        l = f.css(j.elem, b, !0) || d || 1;
                        do n = n || ".5", l /= n, f.style(j.elem, b, l + e); while (n !== (n = j.cur() / m) && 1 !== n && --v)
                    }
                    j.unit = e;
                    j.start = l;
                    j.end = g[1] ? l + (g[1] + 1) * d : d
                }
                return j
            }]
        };
    f.Animation = f.extend(Cb, {
        tweener: function(b, c) {
            f.isFunction(b) ? (c = b, b = ["*"]) : b = b.split(" ");
            for (var d, e = 0, j = b.length; e < j; e++) d = b[e], ta[d] = ta[d] || [], ta[d].unshift(c)
        },
        prefilter: function(b, c) { c ? Ba.unshift(b) : Ba.push(b) }
    });
    f.Tween = S;
    S.prototype = {
        constructor: S,
        init: function(b, c, d, e, j, g) {
            this.elem = b;
            this.prop = d;
            this.easing = j || "swing";
            this.options = c;
            this.start = this.now = this.cur();
            this.end = e;
            this.unit = g || (f.cssNumber[d] ? "" : "px")
        },
        cur: function() { var b = S.propHooks[this.prop]; return b && b.get ? b.get(this) : S.propHooks._default.get(this) },
        run: function(b) { var c, d = S.propHooks[this.prop]; return this.options.duration ? this.pos = c = f.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = c = b, this.now = (this.end - this.start) * c + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), d && d.set ? d.set(this) : S.propHooks._default.set(this), this }
    };
    S.prototype.init.prototype = S.prototype;
    S.propHooks = { _default: { get: function(b) { var c; return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (c = f.css(b.elem, b.prop, !1, ""), !c || "auto" === c ? 0 : c) : b.elem[b.prop] }, set: function(b) { f.fx.step[b.prop] ? f.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[f.cssProps[b.prop]] || f.cssHooks[b.prop]) ? f.style(b.elem, b.prop, b.now + b.unit) : b.elem[b.prop] = b.now } } };
    S.propHooks.scrollTop = S.propHooks.scrollLeft = { set: function(b) { b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now) } };
    f.each(["toggle", "show", "hide"], function(b, c) {
        var d = f.fn[c];
        f.fn[c] = function(e, j, g) { return null == e || "boolean" == typeof e || !b && f.isFunction(e) && f.isFunction(j) ? d.apply(this, arguments) : this.animate(Da(c, !0), e, j, g) }
    });
    f.fn.extend({
        fadeTo: function(b, c, d, f) { return this.filter(M).css("opacity", 0).show().end().animate({ opacity: c }, b, d, f) },
        animate: function(b, c, d, e) {
            var j = f.isEmptyObject(b),
                g = f.speed(c, d, e);
            c = function() {
                var c = Cb(this, f.extend({}, b), g);
                j && c.stop(!0)
            };
            return j || !1 === g.queue ? this.each(c) : this.queue(g.queue, c)
        },
        stop: function(b, d, e) {
            var j = function(b) {
                var c = b.stop;
                delete b.stop;
                c(e)
            };
            return "string" != typeof b && (e = d, d = b, b = c), d && !1 !== b && this.queue(b || "fx", []), this.each(function() {
                var c = !0,
                    d = null != b && b + "queueHooks",
                    g = f.timers,
                    m = f._data(this);
                if (d) m[d] && m[d].stop && j(m[d]);
                else
                    for (d in m) m[d] && m[d].stop && Pd.test(d) && j(m[d]);
                for (d = g.length; d--;) g[d].elem === this && (null == b || g[d].queue === b) && (g[d].anim.stop(e), c = !1, g.splice(d, 1));
                (c || !e) && f.dequeue(this, b)
            })
        }
    });
    f.each({ slideDown: Da("show"), slideUp: Da("hide"), slideToggle: Da("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(b, c) { f.fn[b] = function(b, d, f) { return this.animate(c, b, d, f) } });
    f.speed = function(b, c, d) {
        var e = b && "object" == typeof b ? f.extend({}, b) : { complete: d || !d && c || f.isFunction(b) && b, duration: b, easing: d && c || c && !f.isFunction(c) && c };
        e.duration = f.fx.off ? 0 : "number" == typeof e.duration ? e.duration : e.duration in f.fx.speeds ? f.fx.speeds[e.duration] : f.fx.speeds._default;
        if (null == e.queue || !0 === e.queue) e.queue = "fx";
        return e.old = e.complete, e.complete = function() {
            f.isFunction(e.old) && e.old.call(this);
            e.queue && f.dequeue(this, e.queue)
        }, e
    };
    f.easing = { linear: function(b) { return b }, swing: function(b) { return 0.5 - Math.cos(b * Math.PI) / 2 } };
    f.timers = [];
    f.fx = S.prototype.init;
    f.fx.tick = function() {
        for (var b, c = f.timers,
                d = 0; d < c.length; d++) b = c[d], !b() && c[d] === b && c.splice(d--, 1);
        c.length || f.fx.stop()
    };
    f.fx.timer = function(b) { b() && f.timers.push(b) && !Xa && (Xa = setInterval(f.fx.tick, f.fx.interval)) };
    f.fx.interval = 13;
    f.fx.stop = function() {
        clearInterval(Xa);
        Xa = null
    };
    f.fx.speeds = { slow: 600, fast: 200, _default: 400 };
    f.fx.step = {};
    f.expr && f.expr.filters && (f.expr.filters.animated = function(b) { return f.grep(f.timers, function(c) { return b === c.elem }).length });
    var sc = /^(?:body|html)$/i;
    f.fn.offset = function(b) {
        if (arguments.length) return b === c ? this : this.each(function(c) { f.offset.setOffset(this, b, c) });
        var d, e, j, g, m, l, n, v = { top: 0, left: 0 },
            s = this[0],
            t = s && s.ownerDocument;
        if (t) return (e = t.body) === s ? f.offset.bodyOffset(s) : (d = t.documentElement, f.contains(d, s) ? ("undefined" != typeof s.getBoundingClientRect && (v = s.getBoundingClientRect()), j = Db(t), g = d.clientTop || e.clientTop || 0, m = d.clientLeft || e.clientLeft || 0, l = j.pageYOffset || d.scrollTop, n = j.pageXOffset || d.scrollLeft, { top: v.top + l - g, left: v.left + n - m }) : v)
    };
    f.offset = {
        bodyOffset: function(b) {
            var c = b.offsetTop,
                d = b.offsetLeft;
            return f.support.doesNotIncludeMarginInBodyOffset && (c += parseFloat(f.css(b, "marginTop")) || 0, d += parseFloat(f.css(b, "marginLeft")) || 0), { top: c, left: d }
        },
        setOffset: function(b, c, d) {
            var e = f.css(b, "position");
            "static" === e && (b.style.position = "relative");
            var j = f(b),
                g = j.offset(),
                m = f.css(b, "top"),
                l = f.css(b, "left"),
                n = {},
                v = {},
                s, t;
            ("absolute" === e || "fixed" === e) && -1 < f.inArray("auto", [m, l]) ? (v = j.position(), s = v.top, t = v.left) : (s = parseFloat(m) || 0, t = parseFloat(l) || 0);
            f.isFunction(c) && (c = c.call(b, d, g));
            null != c.top && (n.top = c.top - g.top + s);
            null != c.left && (n.left = c.left - g.left + t);
            "using" in c ? c.using.call(b, n) : j.css(n)
        }
    };
    f.fn.extend({
        position: function() {
            if (this[0]) {
                var b = this[0],
                    c = this.offsetParent(),
                    d = this.offset(),
                    e = sc.test(c[0].nodeName) ? { top: 0, left: 0 } : c.offset();
                return d.top -= parseFloat(f.css(b, "marginTop")) || 0, d.left -= parseFloat(f.css(b, "marginLeft")) || 0, e.top += parseFloat(f.css(c[0], "borderTopWidth")) || 0, e.left += parseFloat(f.css(c[0], "borderLeftWidth")) || 0, { top: d.top - e.top, left: d.left - e.left }
            }
        },
        offsetParent: function() { return this.map(function() { for (var b = this.offsetParent || B.body; b && !sc.test(b.nodeName) && "static" === f.css(b, "position");) b = b.offsetParent; return b || B.body }) }
    });
    f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(b, d) {
        var e = /Y/.test(d);
        f.fn[b] = function(j) {
            return f.access(this, function(b, j, g) {
                var m = Db(b);
                if (g === c) return m ? d in m ? m[d] : m.document.documentElement[j] : b[j];
                m ? m.scrollTo(e ? f(m).scrollLeft() : g, e ? g : f(m).scrollTop()) : b[j] = g
            }, b, j, arguments.length, null)
        }
    });
    f.each({ Height: "height", Width: "width" }, function(b, d) {
        f.each({
            padding: "inner" +
                b,
            content: d,
            "": "outer" + b
        }, function(e, j) {
            f.fn[j] = function(j, g) {
                var m = arguments.length && (e || "boolean" != typeof j),
                    l = e || (!0 === j || !0 === g ? "margin" : "border");
                return f.access(this, function(d, e, j) { var g; return f.isWindow(d) ? d.document.documentElement["client" + b] : 9 === d.nodeType ? (g = d.documentElement, Math.max(d.body["scroll" + b], g["scroll" + b], d.body["offset" + b], g["offset" + b], g["client" + b])) : j === c ? f.css(d, e, j, l) : f.style(d, e, j, l) }, d, m ? j : c, m, null)
            }
        })
    });
    b.jQuery = b.$ = f;
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return f })
})(window);

function getInternetExplorerVersion() { var b = -1; "Microsoft Internet Explorer" == navigator.appName && null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) && (b = parseFloat(RegExp.$1)); return b }
var ie = getInternetExplorerVersion();

function getQueryVariable(b) { for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) { var e = c[d].split("="); if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1]) } }
this.jukebox = {};
jukebox.Player = function(b, c) {
    this.id = ++jukebox.__jukeboxId;
    this.origin = c || null;
    this.settings = {};
    for (var d in this.defaults) this.settings[d] = this.defaults[d];
    if ("[object Object]" === Object.prototype.toString.call(b))
        for (var e in b) this.settings[e] = b[e];
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
            e;
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
            for (e in this.HTML5API) this[e] = this.HTML5API[e];
            1 < d.channels ? !0 === c.autoplay ? this.context.autoplay = !0 : void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay) : 1 === d.channels && void 0 !== c.spritemap[c.autoplay] && (this.backgroundMusic = c.spritemap[c.autoplay], this.backgroundMusic.started = Date.now ? Date.now() : +new Date, this.play(c.autoplay));
            1 == d.channels && !0 !== c.canPlayBackground && (window.addEventListener("pagehide", function() { null !== b.isPlaying && (b.pause(), b.__wasAutoPaused = !0) }), window.addEventListener("pageshow", function() { b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused) }))
        } else if (!0 === d.flashaudio) {
            for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
            d = ["id=jukebox-flashstream-" + this.id, "autoplay=" + c.autoplay, "file=" + window.encodeURIComponent(this.resource)];
            this.__initFlashContext(d);
            !0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay)
        } else throw "Your Browser does not support Flash Audio or HTML5 Audio.";
    },
    __initFlashContext: function(b) {
        var c, d = this.settings.flashMediaElement,
            e, g = { flashvars: b.join("&"), quality: "high", bgcolor: "#000000", wmode: "transparent", allowscriptaccess: "always", allowfullscreen: "true" };
        if (navigator.userAgent.match(/MSIE/)) {
            c = document.createElement("div");
            document.getElementsByTagName("body")[0].appendChild(c);
            var l = document.createElement("object");
            l.id = "jukebox-flashstream-" + this.id;
            l.setAttribute("type", "application/x-shockwave-flash");
            l.setAttribute("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000");
            l.setAttribute("width", "0");
            l.setAttribute("height", "0");
            g.movie = d + "?x=" + (Date.now ? Date.now() : +new Date);
            g.flashvars = b.join("&amp;");
            for (e in g) b = document.createElement("param"), b.setAttribute("name", e), b.setAttribute("value", g[e]), l.appendChild(b);
            c.outerHTML = l.outerHTML;
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
            for (e in g) c.setAttribute(e, g[e]);
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
                e;
            if (void 0 !== d[b]) e = d[b].start;
            else if ("number" === typeof b) {
                e = b;
                for (var g in d)
                    if (e >= d[g].start && e <=
                        d[g].end) { b = g; break }
            }
            void 0 !== e && "[object Object]" === Object.prototype.toString.call(d[b]) && (this.isPlaying = this.settings.spritemap[b], this.context.play && this.context.play(), this.wasReady = this.setCurrentTime(e))
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
            for (var c = [{ e: "3gp", m: ["audio/3gpp", "audio/amr"] }, { e: "aac", m: ["audio/aac", "audio/aacp"] }, { e: "amr", m: ["audio/amr", "audio/3gpp"] }, { e: "caf", m: ["audio/IMA-ADPCM", "audio/x-adpcm", 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"'] }, { e: "m4a", m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split("{") }, { e: "mp3", m: ["audio/mp3", "audio/mpeg", 'audio/mpeg; codecs="mp3"', "audio/MPA", "audio/mpa-robust"] }, { e: "mpga", m: ["audio/MPA", "audio/mpa-robust", "audio/mpeg", "video/mpeg"] }, { e: "mp4", m: ["audio/mp4", "video/mp4"] }, { e: "ogg", m: ["application/ogg", "audio/ogg", 'audio/ogg; codecs="theora, vorbis"', "video/ogg", 'video/ogg; codecs="theora, vorbis"'] }, { e: "wav", m: ["audio/wave", "audio/wav", 'audio/wav; codecs="1"', "audio/x-wav", "audio/x-pn-wav"] }, { e: "webm", m: ["audio/webm", 'audio/webm; codecs="vorbis"', "video/webm"] }], d, e, g = 0, l = c.length; g < l; g++)
                if (e = c[g].e, c[g].m.length && "object" === typeof c[g].m)
                    for (var q = 0, n = c[g].m.length; q < n; q++)
                        if (d = c[g].m[q], "" !== b.canPlayType(d)) { this.codecs[e] = d; break } else this.codecs[e] || (this.codecs[e] = !1);
            this.features.html5audio = !(!this.codecs.mp3 && !this.codecs.ogg && !this.codecs.webm && !this.codecs.wav);
            this.features.channels = 8;
            b.volume = 0.1337;
            this.features.volume = !!(1E-4 > Math.abs(b.volume - 0.1337));
            navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1)
        }
        this.features.flashaudio = !!navigator.mimeTypes["application/x-shockwave-flash"] || !!navigator.plugins["Shockwave Flash"] || !1;
        if (window.ActiveXObject) try { new ActiveXObject("ShockwaveFlash.ShockwaveFlash.10"), this.features.flashaudio = !0 } catch (s) {}!0 === this.settings.useFlash && (this.features.flashaudio = !0);
        !0 === this.features.flashaudio && !this.features.html5audio && (this.codecs.mp3 = "audio/mp3", this.codecs.mpga = "audio/mpeg", this.codecs.mp4 = "audio/mp4", this.codecs.m4a = "audio/mp4", this.codecs["3gp"] = "audio/3gpp", this.codecs.amr = "audio/amr", this.features.volume = !0, this.features.channels = 1)
    },
    __getPlayerById: function(b) { return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null },
    __getClone: function(b, c) {
        for (var d in this.__clones) { var e = this.__clones[d]; if (null === e.isPlaying && e.origin === b) return e }
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
            var e = b[c],
                g = e.match(/\.([^\.]*)$/)[1];
            if (g && this.codecs[g]) return e
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
        e = !1;
    if ("undefined" !== typeof AudioContext) c = new AudioContext;
    else if ("undefined" !== typeof webkitAudioContext) c = new webkitAudioContext;
    else if ("undefined" !== typeof Audio) { d = !1; try { new Audio } catch (g) { e = !0 } } else d = !1, e = !0;
    if (d) {
        var l = "undefined" === typeof c.createGain ? c.createGainNode() : c.createGain();
        l.gain.value = 1;
        l.connect(c.destination)
    }
    var q = function() {
        this._volume = 1;
        this._muted = !1;
        this.usingWebAudio = d;
        this.noAudio = e;
        this._howls = []
    };
    q.prototype = {
        volume: function(b) {
            b = parseFloat(b);
            if (0 <= b && 1 >= b) {
                this._volume = b;
                d && (l.gain.value = b);
                for (var c in this._howls)
                    if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                        for (b = 0; b < this._howls[c]._audioNode.length; b++) this._howls[c]._audioNode[b].volume = this._howls[c]._volume * this._volume;
                return this
            }
            return d ? l.gain.value : this._volume
        },
        mute: function() { this._setMuted(!0); return this },
        unmute: function() { this._setMuted(!1); return this },
        _setMuted: function(b) {
            this._muted = b;
            d && (l.gain.value = b ? 0 : this._volume);
            for (var c in this._howls)
                if (this._howls.hasOwnProperty(c) && !1 === this._howls[c]._webAudio)
                    for (var e = 0; e < this._howls[c]._audioNode.length; e++) this._howls[c]._audioNode[e].muted = b
        }
    };
    var n = new q,
        q = null;
    if (!e) var q = new Audio,
        s = { mp3: !!q.canPlayType("audio/mpeg;").replace(/^no$/, ""), opus: !!q.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!q.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!q.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), m4a: !!(q.canPlayType("audio/x-m4a;") || q.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(q.canPlayType("audio/x-mp4;") || q.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!q.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") };
    var t = function(b) {
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
        n._howls.push(this);
        this.load()
    };
    t.prototype = {
        load: function() {
            var d = this,
                g = null;
            if (!e) {
                for (var l = 0; l < d._urls.length; l++) {
                    var t, q;
                    if (d._format) t = d._format;
                    else if (q = d._urls[l].toLowerCase().split("?")[0], t = (t = q.match(/.+\.([^?]+)(\?|$)/)) && 2 <= t.length ? t : q.match(/data\:audio\/([^?]+);/)) t = t[1];
                    else { d.on("loaderror"); return }
                    if (s[t]) { g = d._urls[l]; break }
                }
                if (g) {
                    d._src = g;
                    if (d._webAudio) {
                        var F = g;
                        if (F in b) d._duration = b[F].duration, x(d);
                        else {
                            var L = new XMLHttpRequest;
                            L.open("GET", F, !0);
                            L.responseType = "arraybuffer";
                            L.onload = function() { c.decodeAudioData(L.response, function(c) { c && (b[F] = c, x(d, c)) }, function() { d.on("loaderror") }) };
                            L.onerror = function() { d._webAudio && (d._buffer = !0, d._webAudio = !1, d._audioNode = [], delete d._gainNode, d.load()) };
                            try { L.send() } catch (Ya) { L.onerror() }
                        }
                    } else {
                        var G = new Audio;
                        d._audioNode.push(G);
                        G.src = g;
                        G._pos = 0;
                        G.preload = "auto";
                        G.volume = n._muted ? 0 : d._volume * n.volume();
                        b[g] = d;
                        var P = function() {
                            d._duration = Math.ceil(10 * G.duration) / 10;
                            0 === Object.getOwnPropertyNames(d._sprite).length && (d._sprite = { _default: [0, 1E3 * d._duration] });
                            d._loaded || (d._loaded = !0, d.on("load"));
                            d._autoplay && d.play();
                            G.removeEventListener("canplaythrough", P, !1)
                        };
                        G.addEventListener("canplaythrough", P, !1);
                        G.load()
                    }
                    return d
                }
            }
            d.on("loaderror")
        },
        urls: function(b) { return b ? (this.stop(), this._urls = "string" === typeof b ? [b] : b, this._loaded = !1, this.load(), this) : this._urls },
        play: function(d, e) {
            var g = this;
            "function" === typeof d && (e = d);
            if (!d || "function" === typeof d) d = "_default";
            if (!g._loaded) return g.on("load", function() { g.play(d, e) }), g;
            if (!g._sprite[d]) return "function" === typeof e && e(), g;
            g._inactiveNode(function(l) {
                l._sprite = d;
                var s = 0 < l._pos ? l._pos : g._sprite[d][0] / 1E3,
                    t = g._sprite[d][1] / 1E3 - l._pos,
                    q = !(!g._loop && !g._sprite[d][2]),
                    x = "string" === typeof e ? e : Math.round(Date.now() * Math.random()) + "",
                    G, P = { id: x, sprite: d, loop: q };
                G = setTimeout(function() {
                    !g._webAudio && q && g.stop(P.id, P.timer).play(d, P.id);
                    g._webAudio && !q && (g._nodeById(P.id).paused = !0, g._nodeById(P.id)._pos = 0);
                    !g._webAudio && !q && g.stop(P.id, P.timer);
                    g.on("end", x)
                }, 1E3 * t);
                g._onendTimer.push(G);
                P.timer = g._onendTimer[g._onendTimer.length - 1];
                if (g._webAudio) {
                    G = g._sprite[d][0] / 1E3;
                    var N = g._sprite[d][1] / 1E3;
                    l.id = x;
                    l.paused = !1;
                    G = [q, G, N];
                    N = g._nodeById(x);
                    N.bufferSource = c.createBufferSource();
                    N.bufferSource.buffer = b[g._src];
                    N.bufferSource.connect(N.panner);
                    N.bufferSource.loop = G[0];
                    G[0] && (N.bufferSource.loopStart = G[1], N.bufferSource.loopEnd = G[1] + G[2]);
                    N.bufferSource.playbackRate.value = g._rate;
                    g._playStart = c.currentTime;
                    l.gain.value = g._volume;
                    "undefined" === typeof l.bufferSource.start ? l.bufferSource.noteGrainOn(0, s, t) : l.bufferSource.start(0, s, t)
                } else if (4 === l.readyState) l.id = x, l.currentTime = s, l.muted = n._muted, l.volume = g._volume * n.volume(), setTimeout(function() { l.play() }, 0);
                else {
                    g._clearEndTimer(G);
                    var za = d,
                        na = e,
                        sa = function() {
                            g.play(za, na);
                            l.removeEventListener("canplaythrough", sa, !1)
                        };
                    l.addEventListener("canplaythrough", sa, !1);
                    return g
                }
                g.on("play");
                "function" === typeof e && e(x);
                return g
            });
            return g
        },
        pause: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() { d.pause(b) }), d;
            d._clearEndTimer(c || 0);
            var e = b ? d._nodeById(b) : d._activeNode();
            if (e)
                if (e._pos = d.pos(null, b), d._webAudio) {
                    if (!e.bufferSource || e.paused) return d;
                    e.paused = !0;
                    "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
                } else e.pause();
            d.on("pause");
            return d
        },
        stop: function(b, c) {
            var d = this;
            if (!d._loaded) return d.on("play", function() { d.stop(b) }), d;
            d._clearEndTimer(c || 0);
            var e = b ? d._nodeById(b) : d._activeNode();
            if (e)
                if (e._pos = 0, d._webAudio) {
                    if (!e.bufferSource || e.paused) return d;
                    e.paused = !0;
                    "undefined" === typeof e.bufferSource.stop ? e.bufferSource.noteOff(0) : e.bufferSource.stop(0)
                } else e.pause(), e.currentTime = 0;
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
                var e = c ? d._nodeById(c) : d._activeNode();
                e && (d._webAudio ? e.gain.value = b : e.volume = b * n.volume());
                return d
            }
            return d._volume
        },
        loop: function(b) { return "boolean" === typeof b ? (this._loop = b, this) : this._loop },
        sprite: function(b) { return "object" === typeof b ? (this._sprite = b, this) : this._sprite },
        pos: function(b, d) {
            var e = this;
            if (!e._loaded) return e.on("load", function() { e.pos(b) }), "number" === typeof b ? e : e._pos || 0;
            b = parseFloat(b);
            var g = d ? e._nodeById(d) : e._activeNode();
            if (g) return 0 <= b ? (e.pause(d), g._pos = b, e.play(g._sprite, d), e) : e._webAudio ? g._pos + (c.currentTime - e._playStart) : g.currentTime;
            if (0 <= b) return e;
            for (g = 0; g < e._audioNode.length; g++)
                if (e._audioNode[g].paused && 4 === e._audioNode[g].readyState) return e._webAudio ? e._audioNode[g]._pos : e._audioNode[g].currentTime
        },
        pos3d: function(b, c, d, e) {
            var g = this;
            c = "undefined" === typeof c || !c ? 0 : c;
            d = "undefined" === typeof d || !d ? -0.5 : d;
            if (!g._loaded) return g.on("play", function() { g.pos3d(b, c, d, e) }), g;
            if (0 <= b || 0 > b) {
                if (g._webAudio) {
                    var l = e ? g._nodeById(e) : g._activeNode();
                    l && (g._pos3d = [b, c, d], l.panner.setPosition(b, c, d))
                }
            } else return g._pos3d;
            return g
        },
        fade: function(b, c, d, e, g) {
            var l = this,
                n = Math.abs(b - c),
                s = b > c ? "down" : "up",
                n = n / 0.01,
                t = d / n;
            if (!l._loaded) return l.on("load", function() { l.fade(b, c, d, e, g) }), l;
            l.volume(b, g);
            for (var q = 1; q <= n; q++)(function() {
                var b = Math.round(1E3 * (l._volume + ("up" === s ? 0.01 : -0.01) * q)) / 1E3;
                setTimeout(function() {
                    l.volume(b, g);
                    b === c && e && e()
                }, t * q)
            })()
        },
        fadeIn: function(b, c, d) { return this.volume(0).play().fade(0, b, c, d) },
        fadeOut: function(b, c, d, e) {
            var g = this;
            return g.fade(g._volume, b, c, function() {
                d && d();
                g.pause(e);
                g.on("end")
            }, e)
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
                var e;
                this._webAudio ? (e = this._setupAudioNode(), b(e)) : (this.load(), e = this._audioNode[this._audioNode.length - 1], e.addEventListener("loadedmetadata", function() { b(e) }))
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
            b[d].connect(l);
            b[d].panner = c.createPanner();
            b[d].panner.setPosition(this._pos3d[0], this._pos3d[1], this._pos3d[2]);
            b[d].panner.connect(b[d]);
            return b[d]
        },
        on: function(b, c) {
            var d = this["_on" + b];
            if ("function" === typeof c) d.push(c);
            else
                for (var e = 0; e < d.length; e++) c ? d[e].call(this, c) : d[e].call(this);
            return this
        },
        off: function(b, c) {
            for (var d = this["_on" + b], e = c.toString(), g = 0; g < d.length; g++)
                if (e === d[g].toString()) { d.splice(g, 1); break }
            return this
        },
        unload: function() {
            for (var c = this._audioNode, d = 0; d < this._audioNode.length; d++) c[d].paused || this.stop(c[d].id), this._webAudio ? c[d].disconnect(0) : c[d].src = "";
            c = n._howls.indexOf(this);
            null !== c && 0 <= c && n._howls.splice(c, 1);
            delete b[this._src]
        }
    };
    if (d) var x = function(b, c) {
        b._duration = c ? c.duration : b._duration;
        0 === Object.getOwnPropertyNames(b._sprite).length && (b._sprite = { _default: [0, 1E3 * b._duration] });
        b._loaded || (b._loaded = !0, b.on("load"));
        b._autoplay && b.play()
    };
    "function" === typeof define && define.amd && define(function() { return { Howler: n, Howl: t } });
    "undefined" !== typeof exports && (exports.Howler = n, exports.Howl = t);
    window.Howler = n;
    window.Howl = t
})();
(function(b) {
    Number.prototype.map = function(b, c, d, e) { return d + (e - d) * ((this - b) / (c - b)) };
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
            e = function() {},
            g = function() { return d.apply(this instanceof e && b ? this : b, c.concat(Array.prototype.slice.call(arguments))) };
        e.prototype = this.prototype;
        g.prototype = new e;
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
                for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
            else
                for (d in c = {}, b) c[d] = ig.copy(b[d]);
            return c
        },
        merge: function(b, c) {
            for (var d in c) {
                var e = c[d];
                if ("object" != typeof e || e instanceof HTMLElement || e instanceof ig.Class || null === e) b[d] = e;
                else {
                    if (!b[d] || "object" != typeof b[d]) b[d] = e instanceof Array ? [] : {};
                    ig.merge(b[d], e)
                }
            }
            return b
        },
        ksort: function(b) {
            if (!b || "object" != typeof b) return [];
            var c = [],
                d = [],
                e;
            for (e in b) c.push(e);
            c.sort();
            for (e = 0; e < c.length; e++) d.push(b[c[e]]);
            return d
        },
        setVendorAttribute: function(b, c, d) {
            var e = c.charAt(0).toUpperCase() + c.substr(1);
            b[c] = "undefined" !== typeof b.imageSmoothingEnabled ? b["ms" + e] = b["moz" + e] = b["o" + e] = d : b["ms" + e] = b["moz" + e] = b["webkit" + e] = b["o" + e] = d
        },
        getVendorAttribute: function(b, c) { var d = c.charAt(0).toUpperCase() + c.substr(1); return "undefined" !== typeof b.imageSmoothingEnabled ? b[c] || b["ms" + d] || b["moz" + d] || b["o" + d] : b[c] || b["ms" + d] || b["moz" + d] || b["webkit" + d] || b["o" + d] },
        normalizeVendorAttribute: function(b, c) { var d = ig.getVendorAttribute(b, c);!b[c] && d && (b[c] = d) },
        getImagePixels: function(b, c, d, e, g) {
            var l = ig.$new("canvas");
            l.width = b.width;
            l.height = b.height;
            var q = l.getContext("2d");
            ig.System.SCALE.CRISP(l, q);
            var E = ig.getVendorAttribute(q, "backingStorePixelRatio") || 1;
            ig.normalizeVendorAttribute(q, "getImageDataHD");
            var M = b.width / E,
                F = b.height / E;
            l.width = Math.ceil(M);
            l.height = Math.ceil(F);
            q.drawImage(b, 0, 0, M, F);
            return 1 === E ? q.getImageData(c, d, e, g) : q.getImageDataHD(c, d, e, g)
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
                e = ig.$new("script");
            e.type = "text/javascript";
            e.src = d;
            e.onload = function() {
                ig._waitForOnload--;
                ig._execModules()
            };
            e.onerror = function() { throw "Failed to load module " + b + " at " + d + " required from " + c; };
            ig.$("head")[0].appendChild(e)
        },
        _execModules: function() {
            for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
                for (var d = ig._loadQueue[c], e = !0, g = 0; g < d.requires.length; g++) {
                    var l = d.requires[g];
                    ig.modules[l] ? ig.modules[l].loaded || (e = !1) : (e = !1, ig._loadScript(l, d.name))
                }
                e && d.body && (ig._loadQueue.splice(c, 1), d.loaded = !0, d.body(), b = !0, c--)
            }
            if (b) ig._execModules();
            else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
                b = [];
                for (c = 0; c < ig._loadQueue.length; c++) {
                    e = [];
                    l = ig._loadQueue[c].requires;
                    for (g = 0; g < l.length; g++) d = ig.modules[l[g]], (!d || !d.loaded) && e.push(l[g]);
                    b.push(ig._loadQueue[c].name + " (requires: " + e.join(", ") + ")")
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
        b.ig.setAnimation = function(e, g) {
            var l = c++;
            d[l] = !0;
            debugger;
            var q = function() { d[l] && (b.requestAnimationFrame(q, g), e()) };
            b.requestAnimationFrame(q, g);
            return l
        };
        b.ig.clearAnimation = function(b) { delete d[b] }
    } else b.ig.setAnimation = function(c) { return b.setInterval(c, 1E3 / 60) }, b.ig.clearAnimation = function(c) { b.clearInterval(c) };
    var e = !1,
        g = /xyz/.test(function() { xyz }) ? /\bparent\b/ : /.*/,
        l = 0;
    b.ig.Class = function() {};
    var q = function(b) {
        var c = this.prototype,
            d = {},
            e;
        for (e in b) "function" == typeof b[e] && "function" == typeof c[e] && g.test(b[e]) ? (d[e] = c[e], c[e] = function(b, c) {
            return function() {
                var e = this.parent;
                this.parent = d[b];
                var g = c.apply(this, arguments);
                this.parent = e;
                return g
            }
        }(e, b[e])) : c[e] = b[e]
    };
    b.ig.Class.extend = function(c) {
        function d() {
            if (!e) {
                if (this.staticInstantiate) { var b = this.staticInstantiate.apply(this, arguments); if (b) return b }
                for (var c in this) "object" == typeof this[c] && (this[c] = ig.copy(this[c]));
                this.init && this.init.apply(this, arguments)
            }
            return this
        }
        var t = this.prototype;
        e = !0;
        var x = new this;
        e = !1;
        for (var j in c) x[j] = "function" == typeof c[j] && "function" == typeof t[j] && g.test(c[j]) ? function(b, c) {
            return function() {
                var d = this.parent;
                this.parent = t[b];
                var e = c.apply(this, arguments);
                this.parent = d;
                return e
            }
        }(j, c[j]) : c[j];
        d.prototype = x;
        d.prototype.constructor = d;
        d.extend = b.ig.Class.extend;
        d.inject = q;
        d.classId = x.classId = ++l;
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
                e = this.height * b,
                g = ig.$new("canvas");
            g.width = d;
            g.height = e;
            for (var l = g.getContext("2d"), q = l.getImageData(0, 0, d, e), n = 0; n < e; n++)
                for (var s = 0; s < d; s++) {
                    var t = 4 * (Math.floor(n / b) * this.width + Math.floor(s / b)),
                        x = 4 * (n * d + s);
                    q.data[x] = c.data[t];
                    q.data[x + 1] = c.data[t + 1];
                    q.data[x + 2] = c.data[t + 2];
                    q.data[x + 3] = c.data[t + 3]
                }
            l.putImageData(q, 0, 0);
            this.data = g
        },
        draw: function(b, c, d, e, g, l) {
            if (this.loaded) {
                var q = ig.system.scale;
                g = (g ? g : this.width) * q;
                l = (l ? l : this.height) * q;
                ig.system.context.drawImage(this.data, d ? d * q : 0, e ? e * q : 0, g, l, ig.system.getDrawPos(b), ig.system.getDrawPos(c), g, l);
                ig.Image.drawCount++
            }
        },
        drawTile: function(b, c, d, e, g, l, q) {
            g = g ? g : e;
            if (this.loaded && !(e > this.width || g > this.height)) {
                var n = ig.system.scale,
                    s = Math.floor(e * n),
                    t = Math.floor(g * n),
                    x = l ? -1 : 1,
                    j = q ? -1 : 1;
                if (l || q) ig.system.context.save(), ig.system.context.scale(x, j);
                ig.system.context.drawImage(this.data, Math.floor(d * e) % this.width * n, Math.floor(d * e / this.width) * g * n, s, t, ig.system.getDrawPos(b) * x - (l ? s : 0), ig.system.getDrawPos(c) * j - (q ? t : 0), s, t);
                (l || q) && ig.system.context.restore();
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
        draw: function(b, c, d, e) {
            "string" != typeof b && (b = b.toString());
            if (-1 !== b.indexOf("\n")) { b = b.split("\n"); for (var g = this.height + this.lineSpacing, l = 0; l < b.length; l++) this.draw(b[l], c, d + l * g, e) } else {
                if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER) l = this._widthForLine(b), c -= e == ig.Font.ALIGN.CENTER ? l / 2 : l;
                1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
                for (l = 0; l < b.length; l++) e = b.charCodeAt(l), c += this._drawChar(e - this.firstChar, c, d);
                1 !== this.alpha && (ig.system.context.globalAlpha = 1);
                ig.Image.drawCount += b.length
            }
        },
        _drawChar: function(b, c, d) {
            if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
            var e = ig.system.scale,
                g = this.widthMap[b] * e,
                l = (this.height - 2) * e;
            ig.system.context.drawImage(this.data, this.indices[b] * e, 0, g, l, ig.system.getDrawPos(c), ig.system.getDrawPos(d), g, l);
            return this.widthMap[b] + this.letterSpacing
        },
        _loadMetrics: function(b) {
            this.height = b.height - 1;
            this.widthMap = [];
            this.indices = [];
            for (var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, g = 0; g < b.width; g++) {
                var l = 4 * g + 3;
                127 < c.data[l] ? e++ : 128 > c.data[l] && e && (this.widthMap.push(e), this.indices.push(g - e), d++, e = 0)
            }
            this.widthMap.push(e);
            this.indices.push(g - e)
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
            var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
            if (this.clips[b]) {
                if (c && this.clips[b].length < ig.Sound.channels)
                    for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
                        var g = new Audio(e);
                        g.load();
                        this.clips[b].push(g)
                    }
                return this.clips[b][0]
            }
            var l = new Audio(e);
            d && (l.addEventListener("canplaythrough", function n(c) {
                l.removeEventListener("canplaythrough", n, !1);
                d(b, !0, c)
            }, !1), l.addEventListener("error", function(c) { d(b, !1, c) }, !1));
            l.preload = "auto";
            l.load();
            this.clips[b] = [l];
            if (c)
                for (c = 1; c < ig.Sound.channels; c++) g = new Audio(e), g.load(), this.clips[b].push(g);
            return l
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
        init: function(b, c, d, e, g) {
            this.fps = c;
            this.clock = new ig.Timer;
            this.canvas = ig.$(b);
            this.resize(d, e, g);
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
                e = this;
            d.addEventListener("touchstart", function(b) { e.touchStart(b, c) }, !1);
            d.addEventListener("touchend", function(b) { e.touchEnd(b, c) }, !1);
            d.addEventListener("MSPointerDown", function(b) { e.touchStart(b, c) }, !1);
            d.addEventListener("MSPointerUp", function(b) { e.touchEnd(b, c) }, !1)
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
        sfxSoundsToLoad: [{ name: "staticSound", path: "media/audio/play/static" }, { name: "openingSound", path: "media/audio/opening/opening" }, { name: "kittyopeningSound", path: "media/audio/opening/kittyopening" }, { name: "mainbutton", path: "media/audio/game/mainbutton" }, { name: "altbutton", path: "media/audio/game/altbutton" }, { name: "start", path: "media/audio/game/start" }, { name: "pick", path: "media/audio/game/pick" }, { name: "acquierd", path: "media/audio/game/acquierd" }, { name: "clawentrance", path: "media/audio/game/clawentrance" }, { name: "puentrance", path: "media/audio/game/puentrance" }, { name: "turn", path: "media/audio/game/turn" }, { name: "success", path: "media/audio/game/success" }, { name: "success2", path: "media/audio/game/success2" }, { name: "loose", path: "media/audio/game/loose" }],
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
            var e = c + this.formats.ogg;
            c += this.formats.mp3;
            this.SOUNDID[b] = b;
            this[b] = d ? new Howl({ urls: [e, c], onload: d }) : new Howl({ urls: [e, c] })
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
        focusBlurMute: function() {
            this.forceMuted || this.mute();
            ig.game && ig.game.app.pause.set(!0)
        },
        focusBlurUnmute: function() {
            if (!this.forceMuted && (this.unmute(), ig.game)) {
                var b = ig.game.app.service.loadSound();
                ig.game.app.volume.setSfx(b.sfx);
                ig.game.app.volume.setBgm(b.bgm, !0);
                ig.game.update()
            }
        },
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
        setupDesktopMusic: function() { ig.music.add("media/audio/game/bgm.*", "background") },
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
    ig.ua.mobile && ig.game && ig.game.resumeGame();
    ig.soundHandler && ig.soundHandler.focusBlurUnmute()
}, !1);

function visChange() { isHidden() ? ig.soundHandler && ig.soundHandler.focusBlurMute() : (ig.ua.mobile && ig.game && ig.game.resumeGame(), ig.soundHandler && ig.soundHandler.focusBlurUnmute()) }
ig.baked = !0;
ig.module("impact.impact").requires("dom.ready", "impact.loader", "impact.system", "impact.input", "impact.sound", "impact.sound-handler").defines(function() {
    ig.main = function(b, c, d, e, g, l, q) {
        ig.system = new ig.System(b, d, e, g, l || 1);
        ig.input = new ig.Input;
        ig.soundManager = new ig.SoundManager;
        ig.music = new ig.Music;
        ig.ready = !0;
        ig.soundHandler = new ig.SoundHandler;
        (new(q || ig.Loader)(c, ig.resources)).load()
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
        init: function(b, c, d, e) {
            this.sheet = b;
            this.pivot = { x: b.width / 2, y: b.height / 2 };
            this.timer = new ig.Timer;
            this.frameTime = c;
            this.sequence = d;
            this.stop = !!e;
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
            var e = this.constructor.prototype;
            this.pos.x = b;
            this.pos.y = c;
            this.last.x = b;
            this.last.y = c;
            this.vel.x = e.vel.x;
            this.vel.y = e.vel.y;
            this.accel.x = e.accel.x;
            this.accel.y = e.accel.y;
            this.health = e.health;
            this._killed = e._killed;
            this.standing = e.standing;
            this.type = e.type;
            this.checkAgainst = e.checkAgainst;
            this.collides = e.collides;
            ig.merge(this, d)
        },
        addAnim: function(b, c, d, e) {
            if (!this.animSheet) throw "No animSheet to add the animation " +
                b + " to.";
            c = new ig.Animation(this.animSheet, c, d, e);
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
        getNewVelocity: function(b, c, d, e) { return c ? (b + c * ig.system.tick).limit(-e, e) : d ? (c = d * ig.system.tick, 0 < b - c ? b - c : 0 > b + c ? b + c : 0) : b.limit(-e, e) },
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
        var e = b.pos.x + b.size.x - c.pos.x;
        d ? (d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x, c = ig.game.collisionMap.trace(d.pos.x, d.pos.y, d == b ? -e : e, 0, d.size.x, d.size.y), d.pos.x = c.pos.x) : (d = (b.vel.x - c.vel.x) / 2, b.vel.x = -d, c.vel.x = d, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y), b.pos.x = Math.floor(d.pos.x), b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y), c.pos.x = Math.ceil(b.pos.x))
    };
    ig.Entity.seperateOnYAxis = function(b, c, d) {
        var e = b.pos.y + b.size.y - c.pos.y;
        if (d) {
            c = b === d ? c : b;
            d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
            var g = 0;
            d == b && Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity && (d.standing = !0, g = c.vel.x * ig.system.tick);
            b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, g, d == b ? -e : e, d.size.x, d.size.y);
            d.pos.y = b.pos.y;
            d.pos.x = b.pos.x
        } else ig.game.gravity && (c.standing || 0 < b.vel.y) ? (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, 0, -(b.pos.y + b.size.y - c.pos.y), b.size.x, b.size.y), b.pos.y = d.pos.y, 0 < b.bounciness && b.vel.y > b.minBounceVelocity ? b.vel.y *= -b.bounciness : (b.standing = !0, b.vel.y = 0)) : (d = (b.vel.y - c.vel.y) / 2, b.vel.y = -d, c.vel.y = d, g = c.vel.x * ig.system.tick, d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, g, -e / 2, b.size.x, b.size.y), b.pos.y = d.pos.y, b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y), c.pos.y = b.pos.y)
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
                e = Math.floor(c / this.tilesize);
            return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0
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
            for (var l in this.tiledef) l | 0 > this.lastSlope && (this.lastSlope = l | 0)
        },
        trace: function(b, c, g, l, q, n) {
            var s = { collision: { x: !1, y: !1, slope: !1 }, pos: { x: b, y: c }, tile: { x: 0, y: 0 } },
                t = Math.ceil(Math.max(Math.abs(g), Math.abs(l)) / this.tilesize);
            if (1 < t)
                for (var x = g / t, j = l / t, m = 0; m < t && (x || j) && !(this._traceStep(s,
                        b, c, x, j, q, n, g, l, m), b = s.pos.x, c = s.pos.y, s.collision.x && (g = x = 0), s.collision.y && (l = j = 0), s.collision.slope); m++);
            else this._traceStep(s, b, c, g, l, q, n, g, l, 0);
            return s
        },
        _traceStep: function(b, c, g, l, q, n, s, t, x, j) {
            b.pos.x += l;
            b.pos.y += q;
            var m = 0;
            if (l) {
                var v = 0 < l ? n : 0,
                    E = 0 > l ? this.tilesize : 0,
                    m = Math.max(Math.floor(g / this.tilesize), 0),
                    M = Math.min(Math.ceil((g + s) / this.tilesize), this.height);
                l = Math.floor((b.pos.x + v) / this.tilesize);
                var F = Math.floor((c + v) / this.tilesize);
                if (0 < j || l == F || 0 > F || F >= this.width) F = -1;
                if (0 <= l && l < this.width)
                    for (var L =
                            m; L < M && !(-1 != F && (m = this.data[L][F], 1 < m && m <= this.lastSlope && this._checkTileDef(b, m, c, g, t, x, n, s, F, L))); L++)
                        if (m = this.data[L][l], 1 == m || m > this.lastSlope || 1 < m && this._checkTileDef(b, m, c, g, t, x, n, s, l, L)) {
                            if (1 < m && m <= this.lastSlope && b.collision.slope) break;
                            b.collision.x = !0;
                            b.tile.x = m;
                            c = b.pos.x = l * this.tilesize - v + E;
                            t = 0;
                            break
                        }
            }
            if (q) {
                v = 0 < q ? s : 0;
                q = 0 > q ? this.tilesize : 0;
                m = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
                E = Math.min(Math.ceil((b.pos.x + n) / this.tilesize), this.width);
                L = Math.floor((b.pos.y + v) / this.tilesize);
                M = Math.floor((g + v) / this.tilesize);
                if (0 < j || L == M || 0 > M || M >= this.height) M = -1;
                if (0 <= L && L < this.height)
                    for (l = m; l < E && !(-1 != M && (m = this.data[M][l], 1 < m && m <= this.lastSlope && this._checkTileDef(b, m, c, g, t, x, n, s, l, M))); l++)
                        if (m = this.data[L][l], 1 == m || m > this.lastSlope || 1 < m && this._checkTileDef(b, m, c, g, t, x, n, s, l, L)) {
                            if (1 < m && m <= this.lastSlope && b.collision.slope) break;
                            b.collision.y = !0;
                            b.tile.y = m;
                            b.pos.y = L * this.tilesize - v + q;
                            break
                        }
            }
        },
        _checkTileDef: function(b, c, g, l, q, n, s, t, x, j) {
            var m = this.tiledef[c];
            if (!m) return !1;
            c = (m[2] -
                m[0]) * this.tilesize;
            var v = (m[3] - m[1]) * this.tilesize,
                E = m[4];
            s = g + q + (0 > v ? s : 0) - (x + m[0]) * this.tilesize;
            t = l + n + (0 < c ? t : 0) - (j + m[1]) * this.tilesize;
            if (0 < c * t - v * s) {
                if (0 > q * -v + n * c) return E;
                x = Math.sqrt(c * c + v * v);
                j = v / x;
                x = -c / x;
                var M = s * j + t * x,
                    m = j * M,
                    M = x * M;
                if (m * m + M * M >= q * q + n * n) return E || 0.5 > c * (t - n) - v * (s - q);
                b.pos.x = g + q - m;
                b.pos.y = l + n - M;
                b.collision.slope = { x: c, y: v, nx: j, ny: x };
                return !0
            }
            return !1
        }
    });
    var b = 1 / 3,
        c = 2 / 3;
    ig.CollisionMap.defaultTileDef = { 5: [0, 1, 1, c, !0], 6: [0, c, 1, b, !0], 7: [0, b, 1, 0, !0], 3: [0, 1, 1, 0.5, !0], 4: [0, 0.5, 1, 0, !0], 2: [0, 1, 1, 0, !0], 10: [0.5, 1, 1, 0, !0], 21: [0, 1, 0.5, 0, !0], 32: [c, 1, 1, 0, !0], 43: [b, 1, c, 0, !0], 54: [0, 1, b, 0, !0], 27: [0, 0, 1, b, !0], 28: [0, b, 1, c, !0], 29: [0, c, 1, 1, !0], 25: [0, 0, 1, 0.5, !0], 26: [0, 0.5, 1, 1, !0], 24: [0, 0, 1, 1, !0], 11: [0, 0, 0.5, 1, !0], 22: [0.5, 0, 1, 1, !0], 33: [0, 0, b, 1, !0], 44: [b, 0, c, 1, !0], 55: [c, 0, 1, 1, !0], 16: [1, b, 0, 0, !0], 17: [1, c, 0, b, !0], 18: [1, 1, 0, c, !0], 14: [1, 0.5, 0, 0, !0], 15: [1, 1, 0, 0.5, !0], 13: [1, 1, 0, 0, !0], 8: [0.5, 1, 0, 0, !0], 19: [1, 1, 0.5, 0, !0], 30: [b, 1, 0, 0, !0], 41: [c, 1, b, 0, !0], 52: [1, 1, c, 0, !0], 38: [1, c, 0, 1, !0], 39: [1, b, 0, c, !0], 40: [1, 0, 0, b, !0], 36: [1, 0.5, 0, 1, !0], 37: [1, 0, 0, 0.5, !0], 35: [1, 0, 0, 1, !0], 9: [1, 0, 0.5, 1, !0], 20: [0.5, 0, 0, 1, !0], 31: [1, 0, c, 1, !0], 42: [c, 0, b, 1, !0], 53: [b, 0, 0, 1, !0], 12: [0, 0, 1, 0, !1], 23: [1, 1, 0, 1, !1], 34: [1, 0, 1, 1, !1], 45: [0, 1, 0, 0, !1] };
    ig.CollisionMap.staticNoCollision = { trace: function(b, c, g, l) { return { collision: { x: !1, y: !1, slope: !1 }, pos: { x: b + g, y: c + l }, tile: { x: 0, y: 0 } } } }
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
                e = Math.ceil(c / this.chunkSize);
            this.preRenderedChunks = [];
            for (var g = 0; g < e; g++) { this.preRenderedChunks[g] = []; for (var l = 0; l < d; l++) this.preRenderedChunks[g][l] = this.preRenderChunk(l, g, l == d - 1 ? b - l * this.chunkSize : this.chunkSize, g == e - 1 ? c - g * this.chunkSize : this.chunkSize) }
        },
        preRenderChunk: function(b, c, d, e) {
            var g = d / this.tilesize / ig.system.scale + 1,
                l = e / this.tilesize / ig.system.scale + 1,
                q = b * this.chunkSize / ig.system.scale % this.tilesize,
                n = c * this.chunkSize / ig.system.scale % this.tilesize;
            b = Math.floor(b * this.chunkSize / this.tilesize / ig.system.scale);
            c = Math.floor(c * this.chunkSize / this.tilesize / ig.system.scale);
            var s = ig.$new("canvas");
            s.width = d;
            s.height = e;
            s.retinaResolutionEnabled = !1;
            e = s.getContext("2d");
            ig.System.scaleMode(s, e);
            d = ig.system.context;
            ig.system.context = e;
            for (e = 0; e < g; e++)
                for (var t = 0; t < l; t++)
                    if (e + b < this.width && t + c < this.height) {
                        var x = this.data[t + c][e + b];
                        x && this.tiles.drawTile(e * this.tilesize - q, t * this.tilesize - n, x - 1, this.tilesize)
                    }
            ig.system.context = d;
            return s
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
                e = Math.max(Math.floor(c / this.chunkSize), 0),
                g = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
                l = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
                q = this.preRenderedChunks[0].length,
                n = this.preRenderedChunks.length;
            this.repeat || (g = Math.min(g, q), l = Math.min(l, n));
            for (var s = 0; e < l; e++) {
                for (var t = 0, x = d; x < g; x++) {
                    var j = this.preRenderedChunks[e % n][x % q],
                        m = -b + x * this.chunkSize - t,
                        v = -c + e * this.chunkSize - s;
                    ig.system.context.drawImage(j, m, v);
                    ig.Image.drawCount++;
                    this.debugChunks && (ig.system.context.strokeStyle = "#f0f", ig.system.context.strokeRect(m, v, this.chunkSize, this.chunkSize));
                    this.repeat && j.width < this.chunkSize && m + j.width < ig.system.realWidth && (t += this.chunkSize - j.width, g++)
                }
                this.repeat && j.height < this.chunkSize && v + j.height < ig.system.realHeight && (s += this.chunkSize - j.height, l++)
            }
        },
        drawTiled: function() {
            for (var b = 0, c = null, d = (this.scroll.x / this.tilesize).toInt(), e = (this.scroll.y / this.tilesize).toInt(), g = this.scroll.x % this.tilesize, l = this.scroll.y % this.tilesize, q = -g - this.tilesize, g = ig.system.width + this.tilesize - g, n = ig.system.height + this.tilesize - l, s = -1, l = -l - this.tilesize; l < n; s++, l += this.tilesize) {
                var t = s + e;
                if (t >= this.height || 0 > t) {
                    if (!this.repeat) continue;
                    t = (t % this.height + this.height) % this.height
                }
                for (var x = -1, j = q; j < g; x++, j += this.tilesize) {
                    b = x + d;
                    if (b >= this.width || 0 > b) {
                        if (!this.repeat) continue;
                        b = (b % this.width + this.width) % this.width
                    }
                    if (b = this.data[t][b])(c = this.anims[b -
                        1]) ? c.draw(j, l) : this.tiles.drawTile(j, l, b - 1, this.tilesize)
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
                    var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
                    e.anims = this.backgroundAnims[d.tilesetName] || {};
                    e.repeat = d.repeat;
                    e.distance = d.distance;
                    e.foreground = !!d.foreground;
                    e.preRender = !!d.preRender;
                    e.name = d.name;
                    this.backgroundMaps.push(e)
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
                var e = this.entities[d];
                e instanceof b && !e._killed && c.push(e)
            }
            return c
        },
        spawnEntity: function(b, c, d, e) {
            var g = "string" === typeof b ? ig.global[b] : b;
            if (!g) throw "Can't spawn entity of type " + b;
            b = new g(c, d, e || {});
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
                    for (var e = {}, g = Math.floor(d.pos.y / this.cellSize), l = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1, q = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1, n = Math.floor(d.pos.x / this.cellSize); n < l; n++)
                        for (var s = g; s < q; s++)
                            if (b[n])
                                if (b[n][s]) {
                                    for (var t = b[n][s], x = 0; x < t.length; x++) d.touches(t[x]) && !e[t[x].id] && (e[t[x].id] = !0, ig.Entity.checkPair(d, t[x]));
                                    t.push(d)
                                } else b[n][s] = [d];
                else b[n] = {}, b[n][s] = [d]
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
ig.module("plugins.patches.webkit-image-smoothing-patch").defines(function() {
    ig.System && (ig.System.SCALE = {
        CRISP: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !1;
            b.style.imageRendering = "-moz-crisp-edges";
            b.style.imageRendering = "-o-crisp-edges";
            b.style.imageRendering = "-webkit-optimize-contrast";
            b.style.imageRendering = "crisp-edges";
            b.style.msInterpolationMode = "nearest-neighbor"
        },
        SMOOTH: function(b, c) {
            c.imageSmoothingEnabled = c.msImageSmoothingEnabled = c.mozImageSmoothingEnabled = c.oImageSmoothingEnabled = !0;
            b.style.imageRendering = "";
            b.style.msInterpolationMode = ""
        }
    }, ig.System.scaleMode = ig.System.SCALE.SMOOTH)
});
ig.baked = !0;
ig.module("plugins.patches.windowfocus-onMouseDown-patch").defines(function() {
    ig.Input.keydown = function(b) {
        var c = b.target.tagName;
        if (!("INPUT" == c || "TEXTAREA" == c))
            if (c = "keydown" == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1, 0 > c && window.focus(), ("touchstart" == b.type || "mousedown" == b.type) && this.mousemove(b), c = this.bindings[c]) this.actions[c] = !0, this.locks[c] || (this.presses[c] = !0, this.locks[c] = !0), b.stopPropagation(), b.preventDefault()
    }
});
ig.baked = !0;
ig.module("plugins.handlers.dom-handler").defines(function() {
    ig.DomHandler = ig.Class.extend({
        JQUERYAVAILABLE: !1,
        init: function() { this.JQUERYAVAILABLE = this._jqueryAvailable() },
        _jqueryAvailable: function() { return "undefined" !== typeof jQuery },
        addEvent: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.on(c, d);
            else b.addEventListener(c, d, e)
        },
        create: function(b) { return this.JQUERYAVAILABLE ? $("<" + b + ">") : ig.$new(b) },
        getElementByClass: function(b) { return this.JQUERYAVAILABLE ? $("." + b) : document.getElementsByClassName(b) },
        getElementById: function(b) { return this.JQUERYAVAILABLE ? 0 < $(b).length ? $(b) : null : ig.$(b) },
        appendChild: function(b, c) { this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c) },
        appendToBody: function(b) { this.JQUERYAVAILABLE ? $("body").append(b) : document.body.appendChild(b) },
        resize: function(b, c, d) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
            else {
                var e = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = e
            }
        },
        resizeOffsetLeft: function(b, c, d, e) {
            if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css("left", e);
            else {
                var g = b.style.visibility;
                c = "width:" + c.toFixed(2) + "px; height:" + d.toFixed(2) + "px; left: " + e.toFixed(2) + "px;";
                this.attr(b, "style", c);
                b.style.visibility = g
            }
        },
        css: function(b, c) {
            if (this.JQUERYAVAILABLE) b.css(c);
            else {
                var d = "",
                    e;
                for (e in c) d += e + ":" + c[e] + ";";
                this.attr(b, "style", d)
            }
        },
        getOffsets: function(b) { return this.JQUERYAVAILABLE ? (b = b.offset(), { left: b.left, top: b.top }) : { left: b.offsetLeft, top: b.offsetTop } },
        attr: function(b, c, d) {
            if ("undefined" === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
            this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d)
        },
        show: function(b) { this.JQUERYAVAILABLE ? (b.show(), b.css("visibility", "visible")) : b && (b.style ? b.style.visibility = "visible" : b[0] && (b[0].style.visibility = "visible")) },
        hide: function(b) { this.JQUERYAVAILABLE ? (b.hide(), b.css("visibility", "hidden")) : b && (b.style ? b.style.visibility = "hidden" : b[0] && (b[0].style.visibility = "hidden")) },
        getQueryVariable: function(b) { for (var c = window.location.search.substring(1).split("&"), d = 0; d < c.length; d++) { var e = c[d].split("="); if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1]) } },
        forcedDeviceDetection: function() {
            var b = this.getQueryVariable("device");
            if (b) switch (b) {
                case "mobile":
                    console.log("serving mobile version ...");
                    ig.ua.mobile = !0;
                    break;
                case "desktop":
                    console.log("serving desktop version ...");
                    ig.ua.mobile = !1;
                    break;
                default:
                    console.log("serving universal version ...")
            } else console.log("serving universal version ...")
        },
        forcedDeviceRotation: function() {
            var b = this.getQueryVariable("force-rotate");
            if (b) switch (b) {
                case "portrait":
                    console.log("force rotate to portrait");
                    window.orientation = 0;
                    break;
                case "landscape":
                    console.log("force rotate to horizontal");
                    window.orientation = 90;
                    break;
                default:
                    alert("wrong command/type in param force-rotate. Defaulting value to portrait"), window.orientation = 0
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.data.vector").defines(function() { Vector2 = ig.Class.extend({ x: null, y: null, valType: "number", init: function(b, c) { typeof b === this.valType && typeof c === this.valType && (this.x = b, this.y = c) }, row: function(b) { typeof b === this.valType && (this.y = b); return this.y }, col: function(b) { typeof b === this.valType && (this.x = b); return this.x } }) });
ig.baked = !0;
ig.module("plugins.handlers.size-handler").requires("plugins.data.vector").defines(function() {
    ig.SizeHandler = ig.Class.extend({
        portraitMode: !1,
        desktop: { actualSize: new Vector2(window.innerWidth, window.innerHeight), actualResolution: new Vector2(640, 480) },
        mobile: { actualSize: new Vector2(window.innerWidth, window.innerHeight), actualResolution: new Vector2(640, 480) },
        windowSize: new Vector2(window.innerWidth, window.innerHeight),
        scaleRatioMultiplier: new Vector2(1, 1),
        sizeRatio: new Vector2(1, 1),
        scale: 1,
        domHandler: null,
        dynamicClickableEntityDivs: {},
        coreDivsToResize: ["#canvas", "#play", "#orientate"],
        adsToResize: {
            MobileAdInGamePreroll: { "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2, "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20 },
            MobileAdInGameEnd: { "box-width": _SETTINGS.Ad.Mobile.End.Width + 2, "box-height": _SETTINGS.Ad.Mobile.End.Height + 20 },
            MobileAdInGamePreroll2: { "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2, "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20 },
            MobileAdInGameEnd2: {
                "box-width": _SETTINGS.Ad.Mobile.End.Width +
                    2,
                "box-height": _SETTINGS.Ad.Mobile.End.Height + 20
            },
            MobileAdInGamePreroll3: { "box-width": _SETTINGS.Ad.Mobile.Preroll.Width + 2, "box-height": _SETTINGS.Ad.Mobile.Preroll.Height + 20 },
            MobileAdInGameEnd3: { "box-width": _SETTINGS.Ad.Mobile.End.Width + 2, "box-height": _SETTINGS.Ad.Mobile.End.Height + 20 }
        },
        init: function(b) {
            this.domHandler = b;
            if ("undefined" === typeof b) throw "undefined Dom Handler for Size Handler";
            this.sizeCalcs();
            this.eventListenerSetup();
            this.samsungFix()
        },
        sizeCalcs: function() {
            this.windowSize = new Vector2(window.innerWidth, window.innerHeight);
            if (ig.ua.mobile) {
                this.mobile.actualSize = new Vector2(window.innerWidth, window.innerHeight);
                var b = new Vector2(this.mobile.actualResolution.x, this.mobile.actualResolution.y);
                this.scaleRatioMultiplier = new Vector2(this.mobile.actualSize.x / b.x, this.mobile.actualSize.y / b.y);
                var c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y);
                this.mobile.actualSize.x = b.x * this.scaleRatioMultiplier.x;
                this.mobile.actualSize.y = b.y * this.scaleRatioMultiplier.y
            } else this.desktop.actualSize = new Vector2(window.innerWidth, window.innerHeight), b = new Vector2(this.desktop.actualResolution.x, this.desktop.actualResolution.y), this.scaleRatioMultiplier = new Vector2(this.desktop.actualSize.x / b.x, this.desktop.actualSize.y / b.y), c = Math.min(this.scaleRatioMultiplier.x, this.scaleRatioMultiplier.y), this.desktop.actualSize.x = b.x * c, this.desktop.actualSize.y = b.y * c;
            this.sizeRatio.x = window.innerWidth / this.mobile.actualResolution.x;
            this.sizeRatio.y = window.innerHeight / this.mobile.actualResolution.y
        },
        resizeLayers: function() {
            for (var b = 0; b < this.coreDivsToResize.length; b++) {
                var c = ig.domHandler.getElementById(this.coreDivsToResize[b]);
                ig.ua.mobile ? ig.domHandler.resize(c, Math.floor(ig.sizeHandler.mobile.actualSize.x), Math.floor(ig.sizeHandler.mobile.actualSize.y)) : ig.domHandler.resizeOffsetLeft(c, Math.floor(ig.sizeHandler.desktop.actualSize.x), Math.floor(ig.sizeHandler.desktop.actualSize.y), Math.floor(ig.sizeHandler.windowSize.x / 2 - ig.sizeHandler.desktop.actualSize.x / 2))
            }
            for (var d in this.adsToResize) {
                var b = ig.domHandler.getElementById("#" +
                        d),
                    c = ig.domHandler.getElementById("#" + d + "-Box"),
                    e = (window.innerWidth - this.adsToResize[d]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[d]["box-height"]) / 2 + "px";
                b && ig.domHandler.css(b, { width: window.innerWidth, height: window.innerHeight });
                c && ig.domHandler.css(c, { left: e, top: g })
            }
            for (d in this.dynamicClickableEntityDivs) {
                c = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
                b = ig.domHandler.getElementById("#" + d);
                if (ig.ua.mobile) var l = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    q = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    n = Math.floor(l * this.scaleRatioMultiplier.x) + "px",
                    q = Math.floor(q * this.scaleRatioMultiplier.y) + "px",
                    g = Math.floor(g * this.scaleRatioMultiplier.x) + "px",
                    c = Math.floor(e * this.scaleRatioMultiplier.y) + "px";
                else var e = ig.domHandler.getElementById("#canvas"),
                    e = ig.domHandler.getOffsets(e),
                    n = e.left,
                    s = e.top,
                    l = this.dynamicClickableEntityDivs[d].entity_pos_x,
                    q = this.dynamicClickableEntityDivs[d].entity_pos_y,
                    g = this.dynamicClickableEntityDivs[d].width,
                    e = this.dynamicClickableEntityDivs[d].height,
                    n = Math.floor(n + l * c) + "px",
                    q = Math.floor(s + q * c) + "px",
                    g = Math.floor(g * c) + "px",
                    c = Math.floor(e * c) + "px";
                ig.domHandler.css(b, { "float": "left", position: "absolute", left: n, top: q, width: g, height: c, "z-index": 3 })
            }
        },
        resize: function() {
            this.sizeCalcs();
            this.resizeLayers()
        },
        reorient: function() {
            if (ig.ua.mobile) {
                var b = this.portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth,
                    c = this.domHandler.getElementById("#orientate"),
                    d = this.domHandler.getElementById("#game");
                b ? (this.domHandler.show(c), this.domHandler.hide(d)) : (this.domHandler.show(d), this.domHandler.hide(c))
            }
            ig.ua.mobile ? (this.resize(), this.resizeAds()) : this.resize()
        },
        resizeAds: function() {
            for (var b in this.adsToResize) {
                var c = ig.domHandler.getElementById("#" + b),
                    d = ig.domHandler.getElementById("#" + b + "-Box"),
                    e = (window.innerWidth - this.adsToResize[b]["box-width"]) / 2 + "px",
                    g = (window.innerHeight - this.adsToResize[b]["box-height"]) / 2 + "px";
                c && ig.domHandler.css(c, {
                    width: window.innerWidth,
                    height: window.innerHeight
                });
                d && ig.domHandler.css(d, { left: e, top: g })
            }
        },
        samsungFix: function() { ig.ua.android && !(4.2 > parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8, navigator.userAgent.indexOf("Android") + 11))) && (!(0 > navigator.userAgent.indexOf("GT")) && !(0 < navigator.userAgent.indexOf("Chrome")) && !(0 < navigator.userAgent.indexOf("Firefox"))) && (document.addEventListener("touchstart", function(b) { b.preventDefault(); return !1 }, !1), document.addEventListener("touchmove", function(b) { b.preventDefault(); return !1 }, !1), document.addEventListener("touchend", function(b) { b.preventDefault(); return !1 }, !1)) },
        eventListenerSetup: function() {
            window.addEventListener("resize", function() { this.reorient() }.bind(this), !1);
            window.addEventListener("orientationchange", function() { this.reorient() }.bind(this), !1);
            document.ontouchmove = function(b) {
                window.scrollTo(0, 1);
                b.preventDefault()
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.storage").defines(function() {
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
ig.module("plugins.io.mouse").defines(function() {
    Mouse = ig.Class.extend({
        bindings: { click: [ig.KEY.MOUSE1] },
        init: function() { ig.input.initMouse(); for (var b in this.bindings) { this[b] = b; for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b) } },
        getPos: function() {
            if (ig.ua.mobile) var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
                c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
            else b = ig.input.mouse.x, c = ig.input.mouse.y;
            return new Vector2(b, c)
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.keyboard").defines(function() { Keyboard = ig.Class.extend({ bindings: { jump: [ig.KEY.W, ig.KEY.UP_ARROW], moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW], moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW], shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE] }, init: function() { for (var b in this.bindings) { this[b] = b; for (var c = 0; c < this.bindings[b].length; c++) ig.input.bind(this.bindings[b][c], b) } } }) });
ig.baked = !0;
ig.module("plugins.io.gamepad-input").defines(function() {
    ig.PADKEY = { BUTTON_0: 0, PADBUTTON_1: 1, BUTTON_2: 2, BUTTON_3: 3, BUTTON_LEFT_BUMPER: 4, BUTTON_RIGHT_BUMPER: 5, BUTTON_LEFT_TRIGGER: 6, BUTTON_RIGHT_TRIGGER: 7, BUTTON_LEFT_JOYSTICK: 10, BUTTON_RIGHT_JOYSTICK: 11, BUTTON_DPAD_UP: 12, BUTTON_DPAD_DOWN: 13, BUTTON_DPAD_LEFT: 14, BUTTON_DPAD_RIGHT: 15, BUTTON_MENU: 16, AXIS_LEFT_JOYSTICK_X: 0, AXIS_LEFT_JOYSTICK_Y: 1, AXIS_RIGHT_JOYSTICK_X: 2, AXIS_RIGHT_JOYSTICK_Y: 3 };
    ig.GamepadInput = ig.Class.extend({
        isInit: !1,
        isSupported: !1,
        list: [],
        bindings: {},
        states: {},
        presses: {},
        releases: {},
        downLocks: {},
        upLocks: {},
        leftStick: { x: 0, y: 0 },
        rightStick: { x: 0, y: 0 },
        start: function() {
            if (!this.isInit) {
                this.isInit = !0;
                var b = navigator.getGamepads || navigator.webkitGetGamepads;
                b && (!navigator.getGamepads && navigator.webkitGetGamepads && (navigator.getGamepads = navigator.webkitGetGamepads), this.list = navigator.getGamepads());
                this.isSupported = b
            }
        },
        isAvailable: function() { return this.isInit && this.isSupported },
        buttonPressed: function(b) { return "object" == typeof b ? b.pressed : 1 == b },
        buttonDown: function(b) { if (b = this.bindings[b]) this.states[b] = !0, this.downLocks[b] || (this.presses[b] = !0, this.downLocks[b] = !0) },
        buttonUp: function(b) { if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b]) this.states[b] = !1, this.releases[b] = !0, this.upLocks[b] = !0 },
        clearPressed: function() {
            for (var b in this.releases) this.states[b] = !1, this.downLocks[b] = !1;
            this.releases = {};
            this.presses = {};
            this.upLocks = {}
        },
        bind: function(b, c) { this.bindings[b] = c },
        unbind: function(b) {
            this.releases[this.bindings[b]] = !0;
            this.bindings[b] = null
        },
        unbindAll: function() {
            this.bindings = {};
            this.states = {};
            this.presses = {};
            this.releases = {};
            this.downLocks = {};
            this.upLocks = {}
        },
        state: function(b) { return this.states[b] },
        pressed: function(b) { return this.presses[b] },
        released: function(b) { return this.releases[b] },
        clamp: function(b, c, d) { return b < c ? c : b > d ? d : b },
        pollGamepads: function() {
            if (this.isSupported) {
                this.leftStick.x = 0;
                this.leftStick.y = 0;
                this.rightStick.x = 0;
                this.rightStick.y = 0;
                this.list = navigator.getGamepads();
                for (var b in this.bindings) {
                    for (var c = !1, d = 0; d < this.list.length; d++) { var e = this.list[d]; if (e && e.buttons && this.buttonPressed(e.buttons[b])) { c = !0; break } }
                    c ? this.buttonDown(b) : this.buttonUp(b)
                }
                for (d = 0; d < this.list.length; d++)
                    if ((e = this.list[d]) && e.axes) {
                        b = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
                        var c = e.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
                            g = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
                            e = e.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
                        this.leftStick.x += isNaN(b) ? 0 : b;
                        this.leftStick.y += isNaN(c) ? 0 : c;
                        this.rightStick.x += isNaN(g) ? 0 : g;
                        this.rightStick.y += isNaN(e) ? 0 : e
                    }
                0 < this.list.length && (this.leftStick.x = this.clamp(this.leftStick.x, -1, 1), this.leftStick.y = this.clamp(this.leftStick.y, -1, 1), this.rightStick.x = this.clamp(this.rightStick.x, -1, 1), this.rightStick.y = this.clamp(this.rightStick.y, -1, 1))
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.gamepad").requires("plugins.io.gamepad-input").defines(function() {
    Gamepad = ig.Class.extend({
        bindings: { padJump: [ig.PADKEY.BUTTON_0] },
        init: function() {
            ig.gamepadInput.start();
            for (var b in this.bindings)
                for (var c = 0; c < this.bindings[b].length; c++) ig.gamepadInput.bind(this.bindings[b][c], b)
        },
        press: function() {},
        held: function() {},
        release: function() {}
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch").defines(function() {
    Multitouch = ig.Class.extend({
        init: function() { ig.multitouchInput.start() },
        getTouchesPos: function() {
            if (ig.ua.mobile) {
                if (0 < ig.multitouchInput.touches.length) {
                    for (var b = [], c = 0; c < ig.multitouchInput.touches.length; c++) {
                        var d = ig.multitouchInput.touches[c];
                        b.push({ x: d.x, y: d.y })
                    }
                    return b
                }
                return null
            }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.multitouch-input").defines(function() {
    ig.MultitouchInput = ig.Class.extend({
        isStart: !1,
        touches: [],
        multitouchCapable: !1,
        lastEventUp: null,
        start: function() { this.isStart || (this.isStart = !0, navigator.maxTouchPoints && 1 < navigator.maxTouchPoints && (this.multitouchCapable = !0), ig.ua.touchDevice && (window.navigator.msPointerEnabled && (ig.system.canvas.addEventListener("MSPointerDown", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("MSPointerUp", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("MSPointerMove", this.touchmove.bind(this), !1), ig.system.canvas.style.msContentZooming = "none", ig.system.canvas.style.msTouchAction = "none"), ig.system.canvas.addEventListener("touchstart", this.touchdown.bind(this), !1), ig.system.canvas.addEventListener("touchend", this.touchup.bind(this), !1), ig.system.canvas.addEventListener("touchmove", this.touchmove.bind(this), !1))) },
        touchmove: function(b) {
            if (ig.ua.touchDevice) {
                var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                    d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                    c = ig.system.scale * (c / ig.system.realWidth),
                    d = ig.system.scale * (d / ig.system.realHeight);
                if (b.touches) {
                    for (; 0 < this.touches.length;) this.touches.pop();
                    !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                    var e = { left: 0, top: 0 };
                    ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                    for (var g = 0; g < b.touches.length; g++) {
                        var l = b.touches[g];
                        l && this.touches.push({ x: (l.clientX - e.left) / c, y: (l.clientY - e.top) / d })
                    }
                } else this.windowMove(b)
            }
        },
        touchdown: function(b) {
            var c =
                parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
            else if (ig.ua.touchDevice && b.touches) {
                for (; 0 < this.touches.length;) this.touches.pop();
                !this.multitouchCapable && 1 < b.touches.length && (this.multitouchCapable = !0);
                var e = { left: 0, top: 0 };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                for (var g = 0; g < b.touches.length; g++) {
                    var l = b.touches[g];
                    l && this.touches.push({ x: (l.clientX - e.left) / c, y: (l.clientY - e.top) / d })
                }
            }
        },
        touchup: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
            parseInt(ig.system.canvas.offsetHeight);
            c = ig.system.scale * (c / ig.system.realWidth);
            if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
            else {
                this.lastEventUp = b;
                var d = { left: 0, top: 0 };
                ig.system.canvas.getBoundingClientRect && (d = ig.system.canvas.getBoundingClientRect());
                if (ig.ua.touchDevice) {
                    b =
                        (b.changedTouches[0].clientX - d.left) / c;
                    for (c = 0; c < this.touches.length; c++) this.touches[c].x >= b - 40 && this.touches[c].x <= b + 40 && this.touches.splice(c, 1)
                }
            }
        },
        windowKeyDown: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight);
            if (window.navigator.msPointerEnabled) {
                var e = { left: 0, top: 0 };
                ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
                b = b.changedTouches ? b.changedTouches : [b];
                for (var g = 0; g < b.length; ++g) {
                    for (var l = b[g], q = "undefined" != typeof l.identifier ? l.identifier : "undefined" != typeof l.pointerId ? l.pointerId : 1, n = (l.clientX - e.left) / c, l = (l.clientY - e.top) / d, s = 0; s < this.touches.length; ++s) this.touches[s].identifier == q && this.touches.splice(s, 1);
                    this.touches.push({ x: n, y: l, identifier: q })
                }
                for (c = 0; c < this.touches.length; c++);
            }
        },
        windowKeyUp: function(b) {
            b = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId :
                1;
            for (var c = 0; c < this.touches.length; ++c) this.touches[c].identifier == b && this.touches.splice(c, 1);
            for (; 0 < this.touches.length;) this.touches.pop()
        },
        windowMove: function(b) {
            var c = parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth,
                d = parseInt(ig.system.canvas.offsetHeight) || ig.system.realHeight,
                c = ig.system.scale * (c / ig.system.realWidth),
                d = ig.system.scale * (d / ig.system.realHeight),
                e = { left: 0, top: 0 };
            ig.system.canvas.getBoundingClientRect && (e = ig.system.canvas.getBoundingClientRect());
            if (window.navigator.msPointerEnabled)
                for (var g = "undefined" != typeof b.identifier ? b.identifier : "undefined" != typeof b.pointerId ? b.pointerId : 1, l = 0; l < this.touches.length; ++l)
                    if (this.touches[l].identifier == g) {
                        var q = (b.clientY - e.top) / d;
                        this.touches[l].x = (b.clientX - e.left) / c;
                        this.touches[l].y = q
                    }
        }
    })
});
ig.baked = !0;
ig.module("plugins.io.io-manager").requires("plugins.io.storage", "plugins.io.mouse", "plugins.io.keyboard", "plugins.io.gamepad", "plugins.io.multitouch", "plugins.io.multitouch-input", "plugins.io.gamepad-input").defines(function() {
    IoManager = ig.Class.extend({
        storage: null,
        localStorageSupport: !1,
        gamekey: "TeamKaboom",
        mouse: null,
        keyboard: null,
        multitouch: null,
        gamepad: null,
        init: function() {
            ig.multitouchInput = new ig.MultitouchInput;
            ig.gamepadInput = new ig.GamepadInput;
            this.unbindAll();
            this.initStorage();
            this.initMouse();
            this.initKeyboard()
        },
        unbindAll: function() {
            ig.input.unbindAll();
            ig.gamepadInput.unbindAll()
        },
        initStorage: function() { this._supportsLocalStorage() && (this.storage = new ig.Storage) },
        initMouse: function() { this.mouse = new Mouse },
        initKeyboard: function() { this.keyboard = new Keyboard },
        initMultitouch: function() { this.multitouch = new Multitouch },
        initGamepad: function() { this.gamepad = new Gamepad },
        press: function(b) { return ig.input.pressed(b) || this.gamepad.press(b) ? !0 : !1 },
        held: function(b) { return ig.input.state(b) || this.gamepad.state(b) ? !0 : !1 },
        release: function(b) { return ig.input.released(b) || this.gamepad.released(b) ? !0 : !1 },
        getClickPos: function() { return this.mouse.getPos() },
        getTouchesPos: function() { return this.multitouch.getTouchesPos() },
        checkOverlap: function(b, c, d, e, g) { return b.x > c + e || b.x < c || b.y > d + g || b.y < d ? !1 : !0 },
        _supportsLocalStorage: function() { try { return localStorage.setItem("test", "test"), localStorage.removeItem("test"), this.localStorageSupport = "localStorage" in window && null !== window.localStorage } catch (b) { return this.localStorageSupport } },
        storageIsSet: function(b) { return !this.localStorageSupport ? null : this.storage.isSet(b) },
        storageGet: function(b) { return !this.localStorageSupport ? null : this.storage.get(b) },
        storageSet: function(b, c) {
            if (!this.localStorageSupport) return null;
            this.storage.set(b, c)
        },
        assert: function(b, c, d) { if (c !== d) throw "actualValue:" + c + " not equal to testValue:" + d + " at " + b; }
    })
});
ig.baked = !0;
ig.module("plugins.splash-loader").requires("impact.loader", "impact.animation").defines(function() {
    ig.SplashLoader = ig.Loader.extend({
        splashDesktop: new ig.Image("media/graphics/splash/desktop/cover.jpg"),
        splashMobile: new ig.Image("media/graphics/splash/mobile/cover.jpg"),
        barFrame: new ig.Image("media/graphics/splash/mobile/load-progress.png"),
        barFill: new ig.Image("media/graphics/splash/mobile/load-complete.png"),
        init: function(b, c) {
            this.parent(b, c);
            ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize()
        },
        end: function() {
            this.parent();
            var b = 0 <= document.URL.indexOf("localhost") ? 500 : 3E3;
            window.setTimeout("ig.system.setGame(MyGame)", b);
            this._drawStatus = this.status = 1;
            this.draw();
            this.parent()
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
        draw: function() {
            ig.system.context.font = "1px helsinki2";
            ig.system.context.fillText("helsinki2", -100, -100);
            ig.system.context.font = "1px soupofjustice2";
            ig.system.context.fillText("soupofjustice2", -100, -100);
            this._drawStatus += (this.status - this._drawStatus) / 5;
            1 < this._drawStatus && (this._drawStatus = 1);
            ig.system.context.fillStyle = "#000";
            ig.system.context.fillRect(0,
                0, ig.system.width, ig.system.height);
            var b = ig.system.scale,
                c, d, e;
            ig.ua.mobile ? (c = this.barFill.width, d = 0.5 * ig.system.width - c / 2, e = 320, this.splashMobile.draw(0, 0)) : (c = this.barFill.width, d = 0.5 * ig.system.width - c / 2, e = 280, this.splashDesktop.draw(0, 0));
            this.barFrame.draw(d, e);
            var g = c * this._drawStatus;
            if (0 < g) try { this.barFill.draw((d + 5) * b, (e + 2) * b, 0, 0, g * b, 13 * b) } catch (l) { this._drawStatus -= 0.01, g = c * this._drawStatus, this.barFill.draw((d + 5) * b, (e + 2) * b, 0, 0, g * b, 13 * b), console.log(g) }
            ig.system.context.fillStyle = "#ffffff";
            ig.system.context.font = "10px helsinki2";
            c = _STRINGS.Splash.Loading;
            d = ig.system.width / 2 - ig.system.context.measureText(c).width / 2;
            ig.system.context.fillText(c, d, e * b + 12)
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
    ig.Tween = function(b, c, d, e) {
        var g = {},
            l = {},
            q = {},
            n = 0,
            s = !1,
            t = !1,
            x = !1;
        this.duration = d;
        this.paused = this.complete = !1;
        this.easing = ig.Tween.Easing.Linear.EaseNone;
        this.onComplete = !1;
        this.loop = this.delay = 0;
        this.loopCount = -1;
        ig.merge(this, e);
        this.loopNum = this.loopCount;
        this.chain = function(b) { x = b };
        this.initEnd = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b])
        };
        this.initStart = function(b, c, d, e) {
            if ("object" !== typeof d[b]) "undefined" !== typeof c[b] && (e[b] = d[b]);
            else
                for (subprop in d[b]) e[b] || (e[b] = {}), "undefined" !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b])
        };
        this.start = function() {
            this.paused = this.complete = !1;
            this.loopNum = this.loopCount;
            n = 0; - 1 == b.tweens.indexOf(this) && b.tweens.push(this);
            t = !0;
            s = new ig.Timer;
            for (var d in c) this.initEnd(d, c, l);
            for (d in l) this.initStart(d, l, b, g), this.initDelta(d, q, b, l)
        };
        this.initDelta = function(b, c, d, e) {
            if ("object" !== typeof e[b]) c[b] = e[b] - d[b];
            else
                for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b])
        };
        this.propUpdate = function(b, c, d, e, g) {
            if ("object" !== typeof d[b]) c[b] = "undefined" != typeof d[b] ? d[b] + e[b] * g : c[b];
            else
                for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], g)
        };
        this.propSet = function(b, c, d) {
            if ("object" !== typeof c[b]) d[b] = c[b];
            else
                for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b])
        };
        this.update = function() {
            if (!t) return !1;
            if (this.delay) {
                if (s.delta() < this.delay) return;
                this.delay = 0;
                s.reset()
            }
            if (this.paused || this.complete) return !1;
            var c = (s.delta() + n) / this.duration,
                c = 1 < c ? 1 : c,
                d = this.easing(c);
            for (property in q) this.propUpdate(property, b, g, q, d);
            if (1 <= c) {
                if (0 == this.loopNum ||
                    !this.loop) {
                    this.complete = !0;
                    if (this.onComplete) this.onComplete();
                    x && x.start();
                    return !1
                }
                if (this.loop == ig.Tween.Loop.Revert) {
                    for (property in g) this.propSet(property, g, b);
                    n = 0;
                    s.reset(); - 1 != this.loopNum && this.loopNum--
                } else if (this.loop == ig.Tween.Loop.Reverse) {
                    c = {};
                    d = {};
                    ig.merge(c, l);
                    ig.merge(d, g);
                    ig.merge(g, c);
                    ig.merge(l, d);
                    for (property in l) this.initDelta(property, q, b, l);
                    n = 0;
                    s.reset(); - 1 != this.loopNum && this.loopNum--
                }
            }
        };
        this.pause = function() {
            this.paused = !0;
            n += s.delta()
        };
        this.resume = function() {
            this.paused = !1;
            s.reset()
        };
        this.stop = function(b) {
            b && (this.loop = this.complete = this.paused = !1, n += d, this.update());
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
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e))
    };
    ig.Tween.Easing.Elastic.EaseOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return d * Math.pow(2, -10 * b) * Math.sin(2 * (b - c) * Math.PI / e) + 1
    };
    ig.Tween.Easing.Elastic.EaseInOut = function(b) {
        var c, d = 0.1,
            e = 0.4;
        if (0 == b) return 0;
        if (1 == b) return 1;
        e || (e = 0.3);
        !d || 1 > d ? (d = 1, c = e / 4) : c = e / (2 * Math.PI) * Math.asin(1 / d);
        return 1 > (b *= 2) ? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) : 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin(2 * (b - c) * Math.PI / e) + 1
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
ig.module("plugins.jukebox").defines(function() { ig.Jukebox = ig.Class.extend({ init: function() { this.player = new jukebox.Player({ resources: ["media/audio/game/bgm.mp3", "media/audio/game/bgm.ogg"], autoplay: !1, spritemap: { music: { start: 0, end: 8, loop: !0 } } }) } }) });
ig.baked = !0;
ig.module("plugins.webaudio-music-player").defines(function() {
    WebaudioMusicPlayer = ig.Class.extend({
        bgmPlaying: !1,
        isSupported: !1,
        muteFlag: !1,
        pausedTime: 0,
        webaudio: null,
        useHTML5Audio: !1,
        audio: null,
        inactiveAudio: null,
        codecs: null,
        _volume: 1,
        soundList: {},
        init: function(b) {
            this.webaudio = { compatibility: {}, gainNode: null, buffer: null, source_loop: {}, source_once: {} };
            try { this.AudioContext = window.AudioContext || window.webkitAudioContext, this.webaudio.context = new this.AudioContext, this.isSupported = !0 } catch (c) { console.log("Web Audio API not supported in this browser."), this.webaudio = null, this.useHTML5Audio = !0 }
            if (this.useHTML5Audio)
                if ("undefined" !== typeof Audio) try { new Audio } catch (d) { this.useHTML5Audio = !1 } else this.useHTML5Audio = !1;
            this.useHTML5Audio && (this.audio = new Audio, this.isSupported = !0, this.initHTML5Audio(b));
            if (!this.isSupported) return null;
            this.webaudio && this.initWebAudio(b)
        },
        initWebAudio: function(b) {
            ig.ua.iOS && this.initIOSWebAudioUnlock();
            this.webaudio.gainNode = this.webaudio.context.createGain();
            this.webaudio.gainNode.connect(this.webaudio.context.destination);
            this.webaudio.gainNode.gain.value = this._volume;
            var c = "start",
                d = "stop",
                e = this.webaudio.context.createBufferSource();
            "function" !== typeof e.start && (c = "noteOn");
            this.webaudio.compatibility.start = c;
            "function" !== typeof e.stop && (d = "noteOff");
            this.webaudio.compatibility.stop = d;
            for (var g in b) {
                this.soundList[g] = g;
                c = b[g].path;
                b = c + "." + ig.Sound.FORMAT.MP3.ext;
                var l = c + "." + ig.Sound.FORMAT.OGG.ext;
                ig.ua.mobile ? ig.ua.iOS && (l = b) : (c = navigator.userAgent.toLowerCase(), -1 != c.indexOf("safari") && -1 >= c.indexOf("chrome") && (l = b));
                var q = new XMLHttpRequest;
                q.open("GET", l, !0);
                q.responseType = "arraybuffer";
                q.onload = function() {
                    this.webaudio.context.decodeAudioData(q.response, function(b) {
                        this.webaudio.buffer = b;
                        this.webaudio.source_loop = {};
                        this.bgmPlaying ? this.play() : this.stop()
                    }.bind(this), function() { console.log('Error decoding audio "' + l + '".') })
                }.bind(this);
                q.send();
                break
            }
        },
        initIOSWebAudioUnlock: function() {
            if (this.webaudio) {
                webaudio = this.webaudio;
                var b = function() {
                    var c = webaudio.context,
                        d = c.createBuffer(1, 1, 22050),
                        e = c.createBufferSource();
                    e.buffer = d;
                    e.connect(c.destination);
                    "undefined" === typeof e.start ? e.noteOn(0) : e.start(0);
                    setTimeout(function() {
                        (e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) && window.removeEventListener("touchend", b, !1)
                    }, 0)
                };
                window.addEventListener("touchend", b, !1)
            }
        },
        initHTML5Audio: function(b) {
            if (this.useHTML5Audio && this.audio) {
                var c = this.audio;
                this.codecs = {};
                this.codecs = { mp3: !!c.canPlayType("audio/mpeg;").replace(/^no$/, ""), opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), aac: !!c.canPlayType("audio/aac;").replace(/^no$/, ""), m4a: !!(c.canPlayType("audio/x-m4a;") || c.canPlayType("audio/m4a;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(c.canPlayType("audio/x-mp4;") || c.canPlayType("audio/mp4;") || c.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "") };
                this.is = { ff: Boolean(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())), ie: Boolean(document.all && !window.opera), opera: Boolean(window.opera), chrome: Boolean(window.chrome), safari: Boolean(!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()) && window.getComputedStyle && !window.globalStorage && !window.opera) };
                this.playDelay = -60;
                this.stopDelay = 30;
                this.is.chrome && (this.playDelay = -25);
                this.is.chrome && (this.stopDelay = 25);
                this.is.ff && (this.playDelay = -25);
                this.is.ff && (this.stopDelay = 85);
                this.is.opera && (this.playDelay = 5);
                this.is.opera && (this.stopDelay = 0);
                for (var d in b) {
                    this.soundList[d] = d;
                    var e = b[d].path,
                        c = e + "." + ig.Sound.FORMAT.OGG.ext,
                        e = e + "." + ig.Sound.FORMAT.MP3.ext,
                        g = null;
                    this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()] ? g = c : this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (g = e);
                    if (g) {
                        ig.ua.mobile ? ig.ua.iOS && (g = e) : (b = navigator.userAgent.toLowerCase(), -1 != b.indexOf("safari") && -1 >= b.indexOf("chrome") && (g = e));
                        this.audio.addEventListener("error", function() { this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1) }, !1);
                        this.audio.src = g;
                        this.audio._pos = 0;
                        this.audio.preload = "auto";
                        this.audio.volume = this._volume;
                        this.inactiveAudio = new Audio;
                        this.inactiveAudio.src = g;
                        this.inactiveAudio._pos = 0;
                        this.inactiveAudio.preload = "auto";
                        this.inactiveAudio.volume = this._volume;
                        this.inactiveAudio.load();
                        var l = function() {
                            this._duration = this.audio.duration;
                            this._loaded || (this._loaded = !0);
                            this.bgmPlaying ? this.play() : this.stop();
                            this.audio.removeEventListener("canplaythrough", l, !1)
                        }.bind(this);
                        this.audio.addEventListener("canplaythrough", l, !1);
                        this.audio.load();
                        break
                    }
                }
            }
        },
        play: function(b) {
            if (this.isSupported)
                if (this.webaudio)
                    if (this.webaudio.buffer) {
                        if (!this.muteFlag && (this.bgmPlaying = !0, !this.webaudio.source_loop._playing)) {
                            this.webaudio.source_loop = this.webaudio.context.createBufferSource();
                            this.webaudio.source_loop.buffer = this.webaudio.buffer;
                            this.webaudio.source_loop.loop = !0;
                            this.webaudio.source_loop.connect(this.webaudio.gainNode);
                            isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                            this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
                            if ("noteOn" === this.webaudio.compatibility.start) this.webaudio.source_once = this.webaudio.context.createBufferSource(), this.webaudio.source_once.buffer = this.webaudio.buffer, this.webaudio.source_once.connect(this.webaudio.gainNode), this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b), this.webaudio.source_loop[this.webaudio.compatibility.start](this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b));
                            else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
                            this.webaudio.source_loop._playing = !0
                        }
                    } else this.bgmPlaying = !0;
            else if (this.audio) {
                var c = this.audio;
                if (!this.muteFlag) {
                    this.bgmPlaying = !0;
                    isNaN(b) && (b = 0, this.pausedTime && (b = this.pausedTime));
                    var d = this._duration - b;
                    this._onEndTimer && (clearTimeout(this._onEndTimer), this._onEndTimer = null);
                    this._onEndTimer = setTimeout(function() {
                        this.audio.currentTime = 0;
                        this.audio.pause();
                        this.pausedTime = 0;
                        if (this.inactiveAudio) {
                            var b = this.audio;
                            this.audio = this.inactiveAudio;
                            this.inactiveAudio = b
                        }
                        this.play()
                    }.bind(this), 1E3 * d + this.playDelay);
                    4 === c.readyState || !c.readyState && navigator.isCocoonJS ? (c.readyState = 4, c.currentTime = b, c.muted = this.muteFlag || c.muted, c.volume = this._volume, setTimeout(function() { c.play() }, 0)) : (clearTimeout(this._onEndTimer), this._onEndTimer = null, function() {
                        var b = function() {
                            this.play();
                            c.removeEventListener("canplaythrough", b, !1)
                        }.bind(this);
                        c.addEventListener("canplaythrough", b, !1)
                    }())
                }
            }
        },
        stop: function() {
            this.bgmPlaying = !1;
            if (this.isSupported)
                if (this.webaudio) { if (this.webaudio.source_loop._playing && (this.webaudio.source_loop[this.webaudio.compatibility.stop](0), this.webaudio.source_loop._playing = !1, this.pausedTime += this.webaudio.context.currentTime - this.webaudio.source_loop._startTime, this.pausedTime %= this.webaudio.source_loop.buffer.duration, this.webaudio.source_loop._startTime = 0, "noteOn" === this.webaudio.compatibility.start)) this.webaudio.source_once[this.webaudio.compatibility.stop](0) } else if (this.audio) {
                var b = this.audio;
                this.pausedTime = b.currentTime;
                b.currentTime = 0;
                b.pause();
                clearTimeout(this._onEndTimer);
                this._onEndTimer = null
            }
        },
        volume: function(b) { this.isSupported && (this._volume = b, 0 > this._volume ? this._volume = 0 : 1 < this._volume && (this._volume = 1), this.webaudio ? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume) : this.audio && (this.audio.volume = this._volume, this.inactiveAudio && (this.inactiveAudio.volume = this._volume))) },
        getVolume: function() { return !this.isSupported ? 0 : this._volume },
        mute: function() {!1 == this.muteFlag && (this.muteFlag = !0, this.bgmPlaying && (this.stop(), this.bgmPlaying = !0)) },
        unmute: function() {!0 == this.muteFlag && (this.muteFlag = !1, this.bgmPlaying && this.play()) }
    })
});
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
            for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
                var d = ig.domHandler.getElementById("#" + c);
                ig.domHandler.hide(d)
            }
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
        lastLevel: function() { return this.loadLevel(this.levels.length - 1) },
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
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var l = window.innerHeight / mobileHeight,
                    q = window.innerWidth /
                    mobileWidth;
                $("#" + g.id).css("left", this.pos.x * q);
                $("#" + g.id).css("top", this.pos.y * l);
                $("#" + g.id).css("width", this.size.x * q);
                $("#" + g.id).css("height", this.size.y * l)
            } else l = w / 2 - destW / 2, q = h / 2 - destH / 2, console.log(l, q), $("#" + g.id).css("left", l + this.pos.x * multiplier), $("#" + g.id).css("top", q + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
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
ig.module("plugins.app").defines(function() {
    ig.app = ig.Class.extend({
        init: function() {},
        score: {
            current: 0,
            best: [],
            currentAlien: {},
            progress: 0,
            addCurrent: function(b, c) {
                void 0 == this.currentAlien[c] && (this.currentAlien[c] = 0);
                this.currentAlien[c] += !b ? 0 : b;
                this.current = this.getTotalScore();
                this.updateScoreProg()
            },
            updateScoreProg: function() { this.progress = (ig.game.app.settings.pointIncrease - (ig.game.app.settings.pointNeeded - ig.game.app.score.current)) / ig.game.app.settings.pointIncrease },
            loadFirstGame: function() {
                this.current =
                    0;
                this.currentAlien = {}
            },
            getTotalScore: function() { var b = 0; for (i in this.currentAlien) b += this.currentAlien[i]; return b }
        },
        service: {
            initLoad: function() {
                var b = ig.game.storage.get("acc-profile");
                b ? (b = ig.game.storage.get("acc-profile"), ig.game.app.profile.colls = b.colls, ig.game.app.profile.index = b.index, ig.game.app.profile.alienType = b.alienType) : ig.game.app.profile.colls = []
            },
            saveBestScore: function(b, c) {
                c = !c ? ig.game.app.profile.index : c;
                if (ig.game.app.profile.colls[c]) {
                    var d = 0;
                    for (i in b) d += b[i];
                    if (d > ig.game.app.profile.colls[c].score) {
                        for (i in b)
                            for (d = 0; d < ig.game.app.profile.colls[c].alienScore.length; d++) ig.game.app.profile.colls[c].alienScore[d].type == i && (ig.game.app.profile.colls[c].alienScore[d].score = b[i]);
                        ig.game.app.profile.rankRecount();
                        this.saveProfile()
                    }
                }
            },
            saveProfile: function(b) {
                b || (ig.game.app.profile.colls[ig.game.app.profile.index].alienType = ig.game.app.profile.alienType);
                for (b = 0; b < ig.game.app.profile.colls.length; b++) delete ig.game.app.profile.colls[b].alienHead;
                ig.game.storage.set("acc-profile", { colls: ig.game.app.profile.colls, index: ig.game.app.profile.index, alienType: ig.game.app.profile.alienType })
            },
            getSound: function() {
                var b = !1,
                    b = ig.game.storage.get("acc-sound");
                return !b ? {} : b
            },
            saveSound: function() {
                var b = this.getSound();
                b.sfx = ig.game.app.volume.sfx;
                b.bgm = ig.game.app.volume.bgm;
                ig.game.storage.set("acc-sound", b)
            },
            loadSound: function() {
                var b = this.getSound();
                b.sfx = void 0 === b.sfx ? 1 : b.sfx;
                b.bgm = void 0 === b.bgm ? 1 : b.bgm;
                ig.game.app.volume.sfx = b.sfx;
                ig.game.app.volume.bgm = b.bgm;
                this.saveSound();
                return b
            },
            loadTutorial: function() { return ig.game.storage.getInt("acc-tutorial") },
            saveTutorial: function(b) { ig.game.storage.set("acc-tutorial", b) }
        },
        tutorial: {
            index: 0,
            active: !1,
            showing: !1,
            init: function() {
                this.get();
                this.index || this.set(1)
            },
            set: function(b) {
                this.index = b;
                ig.game.app.service.saveTutorial(this.index)
            },
            get: function() { return this.index = ig.game.app.service.loadTutorial() },
            next: function(b) {
                this.set(this.index + 1);
                b ? this.activate() : this.deactivate()
            },
            activate: function() { this.active = !0 },
            deactivate: function() { this.inTutorial = this.active = !1 }
        },
        profile: {
            colls: [],
            index: 0,
            alienType: "a",
            rankRecount: function() { for (var b = [], c = 0; c < this.colls.length; c++) b.push(this.setTotalScore(c)); for (var d = b.slice().sort(function(b, c) { return c - b }), b = b.slice().map(function(b) { return d.indexOf(b) + 1 }), c = 0; c < b.length; c++) this.colls[c].rank = b[c] },
            getRankList: function(b) {
                var c = [],
                    d = [];
                b = !b ? 5 : b;
                for (i in this.colls) d.push(this.colls[i]);
                d.sort(function(b, c) { return b.rank - c.rank });
                for (i in d) "object" == typeof d[i] && c.push(d[i]);
                c.length > b && c.splice(b, c.length);
                return c
            },
            setProfileByCharIndex: function(b, c, d) {
                this.index = (b = this.getProfileByCharIndex(b, c, d)) ? b.index : -1;
                this.alienType = b ? b.profile.alienType : this.alienType
            },
            getAlienScore: function(b) {
                if (!this.colls[this.index]) return 0;
                for (var c = this.colls[this.index].alienScore.length - 1; 0 <= c; c--)
                    if (this.colls[this.index].alienScore[c].type == b) return this.colls[this.index].alienScore[c].score;
                return 0
            },
            setAlienScore: function(b, c, d) {
                d = void 0 == d || !d || 0 > d ? this.index : d;
                for (var e = this.colls[d].alienScore.length - 1; 0 <= e; e--)
                    if (this.colls[d].alienScore[e].type == b) { this.colls[d].alienScore[e].score = c; break }
            },
            setTotalScore: function(b) { b = void 0 == b || !1 === b || 0 > b ? this.index : b; if (this.colls[b]) { for (var c = this.colls[b].score = 0; c < this.colls[b].alienScore.length; c++) this.colls[b].score += this.colls[b].alienScore[c].score; return this.colls[b].score } },
            getProfileByCharIndex: function(b, c, d) {
                for (var e = this.colls.length - 1; 0 <= e; e--)
                    if (this.colls[e].initial[0] == b && this.colls[e].initial[1] == c && this.colls[e].initial[2] == d) return this.index = e, { index: e, profile: this.colls[e] };
                return !1
            },
            setNewProfile: function(b, c, d) {
                var e = this.getProfileByCharIndex(b, c, d);
                if (e) this.index = e.index, ig.game.app.service.saveProfile();
                else return this.colls.push({ alienType: this.alienType, initial: [b, c, d], score: 0, rank: 0, alienScore: [{ type: "a", score: 0 }, { type: "b", score: 0 }, { type: "c", score: 0 }, { type: "d", score: 0 }, { type: "e", score: 0 }, { type: "f", score: 0 }] }), this.rankRecount(), this.index = this.colls.length - 1;
                return !1
            }
        },
        state: { gameStartTime: !1, clawMoveDown: !1, clawMoveUp: !1, clawShadowBined: !1, clawBined: !1, clawEntranceTriggered: !1, requestClawMoveUp: !1, alienPickUpCheckBegin: !1, requestReadyPickUpAlien: !1, alienPickUpBined: !1, evBoardPickedTimer: !1, evHurryUpShown: !1, alienPickStatus: !1, featuredAlienRemaining: !1, eventNextLevel: !1, pausedTLCounter: !1, TLValue: !1, TLRLength: !1, TLLength: !1, isMainButtonAnimated: !1, puButtonReady: !1, puFreezAcitvated: !1, puFreezOnLinearMove: !1, puDoubleActivate: !1, puRequestShuffleBind: !1, puSpawned: !1, puAvailabel: !1, puTimer: !1, puTimerLength: !1, puTimeAddition: !1, gameOver: !1 },
        settings: {
            level: 0,
            clawMoveSpeed: 3.95,
            clawPickDownSpeed: 1,
            clawPickUpSpeed: 1,
            alienPickUpHeight: 65,
            alienBinedHeight: 20,
            alienTopPrespectiveHeight: 131,
            prevClawDir: "back",
            alienGenerateTimeLength: 15,
            gameTimerEdge: 5,
            eventIamPickedTimerLength: 2,
            eventHurryUpTimerLength: 1.5,
            eventNextLevelTimerLength: 3,
            changeCharNameTimerLength: 0.2,
            changeCharNameTimerAccle: 0.02,
            puButtonPos: { x: 540, x2: 741, y: 160 },
            puFreezDuration: 10,
            puFreezSpeed: 10,
            puDoubleDuration: 10,
            puAddTimeLength: 0.5,
            puShuffleAnimTimerLength: 0.7,
            clawMoveSpeedBase: 3.95,
            clawMoveSpeedIncrement: 0.4,
            clawMoveSpeedMin: 0.5,
            gameTimerLengthBase: 0.3,
            gameTimerLength: !1,
            normalPoint: 1,
            bonusPoint: 2,
            featuredPoint: 5,
            pointNeeded: 0,
            pointIncrease: 0,
            alienGridCurrent: 0,
            shuffledAlienLayout: {},
            setLevelParam: function(b) {
                this.level = b;
                this.shuffledAlienLayout = {};
                this.clawMoveSpeed = this.clawMoveSpeedBase - this.level * this.clawMoveSpeedIncrement;
                this.clawMoveSpeed = this.clawMoveSpeed < this.clawMoveSpeedMin ? this.clawMoveSpeedMin : this.clawMoveSpeed;
                b = this.getGridLevel(b);
                this.pointIncrease = b.pointIncrease;
                this.pointNeeded = ig.game.app.score.current +
                    this.pointIncrease;
                ig.game.app.score.updateScoreProg();
                this.alienGridCurrent = b.grid;
                this.gameTimerLength = b.tl * this.gameTimerLengthBase;
                ig.game.app.state.puAvailable = !1;
                ig.game.app.state.puTimerLength = !1;
                ig.game.app.state.puTimer = !1;
                if (b.pu) {
                    ig.game.app.state.puAvailable = [];
                    for (var c = 0; c < b.pu; c++) ig.game.app.state.puAvailable.push(this.setPuAvailable(["freez", "double", "addtime", "shuffle"]));
                    ig.game.app.state.puTimerLength = 60 * (this.gameTimerLength / ig.game.app.state.puAvailable.length)
                }
            },
            setPuAvailable: function(b) {
                for (var c = ig.game.app.randomizeArray(b), d = 0; d < ig.game.app.state.puAvailable.length; d++)
                    if (ig.game.app.state.puAvailable[d] == c) return this.setPuAvailable(b);
                return c
            },
            getGridLevel: function(b) {
                var c = {};
                1 == b ? c = this.gridLevel.a : 2 == b ? c = this.gridLevel.b : 3 == b ? c = this.gridLevel.c : 3 < b && (c = this.gridLevel.d);
                this.shuffledAlienLayout = this.shuffleFeatured(c.layout);
                return c
            },
            shuffleFeatured: function(b) { var c = ig.game.app.randomizeArray(b); return c == this.shuffledAlienLayout ? this.shuffleFeatured(b) : c },
            gridLevel: {
                a: {
                    grid: 1,
                    pointIncrease: 5,
                    tl: 10,
                    layout: [
                        [{ row: 1, col: 1 }]
                    ]
                },
                b: {
                    grid: 2,
                    pointIncrease: 13,
                    tl: 10,
                    pu: 1,
                    layout: [
                        [{ row: 1, col: 1 }, { row: 2, col: 2 }],
                        [{ row: 2, col: 1 }, { row: 1, col: 2 }]
                    ]
                },
                c: {
                    grid: 2,
                    pointIncrease: 13,
                    tl: 2,
                    pu: 2,
                    layout: [
                        [{ row: 1, col: 1 }, { row: 2, col: 2 }],
                        [{ row: 2, col: 1 }, { row: 1, col: 2 }]
                    ]
                },
                d: {
                    grid: 3,
                    pointIncrease: 18,
                    tl: 1,
                    pu: 2,
                    layout: [
                        [{ row: 1, col: 1 }, { row: 1, col: 2 }, { row: 1, col: 3 }],
                        [{ row: 1, col: 1 }, { row: 2, col: 2 }, { row: 1, col: 3 }],
                        [{ row: 2, col: 1 }, { row: 1, col: 2 }, { row: 2, col: 3 }],
                        [{ row: 1, col: 1 }, { row: 2, col: 2 }, { row: 3, col: 3 }],
                        [{ row: 1, col: 3 }, { row: 2, col: 2 }, { row: 3, col: 1 }],
                        [{ row: 1, col: 2 }, { row: 1, col: 3 }, { row: 2, col: 3 }],
                        [{ row: 1, col: 1 }, { row: 1, col: 2 }, { row: 2, col: 1 }]
                    ]
                }
            },
            showShadowMark: !1,
            showPlanePrespective: !1,
            showPowerup: function(b) { ig.game.app.getAnchorController().showPowerup(b) },
            hidePowerup: function() { ig.game.app.getAnchorController().hidePowerup() }
        },
        pause: {
            state: !1,
            set: function(b) {
                if (!this.state && !ig.game.app.state.gameOver) {
                    var c = ig.game.app.getAnchorController();
                    if (c) {
                        c.pauseTL();
                        c.showPauseOverlay();
                        this.state = {};
                        this.state.clawAnchor = c.clawAnchor;
                        if (!this.state.clawAnchor || 1 > this.state.clawAnchor.tweens.length) delete this.state.clawAnchorl;
                        else
                            for (var d = 0; d < this.state.clawAnchor.tweens.length; d++) this.state.clawAnchor.tweens[d].pause();
                        this.state.claw = c.claw;
                        if (!this.state.claw || 1 > this.state.claw.tweens.length) delete this.state.claw;
                        else
                            for (d = 0; d < this.state.claw.tweens.length; d++) this.state.claw.tweens[d].pause();
                        this.state.messageAnim = c.animMessage;
                        if (this.state.messageAnim) try { this.state.messageAnim.tweenMotion.inAnim.pause(), this.state.messageAnim.tweenMotion.center.pause(), this.state.messageAnim.tweenMotion.outAnim.pause() } catch (e) {} else delete this.state.messageAnim;
                        var g = c.aliens;
                        if (g) {
                            this.state.aliens = [];
                            for (d = 0; d < g.length; d++)
                                if (0 < g[d].alien.tweens.length) {
                                    for (var l = 0; l < g[d].alien.tweens.length; l++) try { g[d].alien.tweens[l].pause() } catch (q) {}
                                    this.state.aliens.push(g[d].alien)
                                }
                            1 > this.state.aliens.length && delete this.state.aliens
                        }
                        if (g) {
                            this.state.aliensAnims = [];
                            for (d = 0; d < g.length; d++) g[d].alien.pausedFrame = g[d].alien.currentAnim.frame, this.state.aliensAnims.push(g[d].alien);
                            1 > this.state.aliensAnims.length && delete this.state.aliensAnims
                        }
                        if (g) {
                            this.state.alienAnchor = [];
                            for (d = 0; d < g.length; d++)
                                if (0 < g[d].anchor.tweens.length) {
                                    for (l = 0; l < g[d].anchor.tweens.length; l++) g[d].anchor.tweens[l].pause();
                                    this.state.alienAnchor.push(g[d].anchor)
                                }
                            1 > this.state.alienAnchor.length && delete this.state.alienAnchor
                        }
                        this.state.freezTimer = c.freezTimer;
                        this.state.freezTimer && this.state.freezTimer.pause();
                        this.state.doubleTimer = c.doubleTimer;
                        this.state.doubleTimer && this.state.doubleTimer.pause();
                        this.state.shuffleCenterTimer = c.shuffleCenterTimer;
                        this.state.shuffleCenterTimer && this.state.shuffleCenterTimer.pause();
                        this.state.shuffleSpreadTimer = c.shuffleSpreadTimer;
                        this.state.shuffleSpreadTimer && this.state.shuffleSpreadTimer.pause();
                        this.state.alienGenTimer = c.alienGenerateTimer;
                        this.state.alienGenTimer && this.state.alienGenTimer.pause();
                        this.state.puTimer = ig.game.app.state.puTimer;
                        this.state.puTimer && this.state.puTimer.pause();
                        if (b) { if (c.showPauseDialog(), b = ig.game.getEntitiesByType(EntityMenuPause)[0]) b.zIndex = 102, b.currentAnim = b.anims.idle2 } else ig.game.getEntitiesByType(EntityMenuPause)[0] && (ig.game.getEntitiesByType(EntityMenuPause)[0].zIndex = -100);
                        ig.game.sortEntitiesDeferred()
                    }
                }
            },
            unset: function() {
                if (this.state) {
                    var b = ig.game.app.getAnchorController();
                    if (b) {
                        ig.game.app.getAnchorController().countTime();
                        !ig.game.app.state.puFreezAcitvated && !ig.game.app.state.clawMoveDown && !ig.game.app.state.clawMoveUp && b.resumeTL();
                        b.pauseOverlay.kill();
                        if (this.state.clawAnchor)
                            for (b = 0; b < this.state.clawAnchor.tweens.length; b++) this.state.clawAnchor.tweens[b].resume();
                        if (this.state.claw)
                            for (b = 0; b < this.state.claw.tweens.length; b++) this.state.claw.tweens[b].resume();
                        if (this.state.messageAnim) try { this.state.messageAnim.tweenMotion.inAnim.resume(), this.state.messageAnim.tweenMotion.center.resume(), this.state.messageAnim.tweenMotion.outAnim.resume() } catch (c) {}
                        if (this.state.aliens)
                            for (b = 0; b < this.state.aliens.length; b++)
                                for (var d = 0; d < this.state.aliens[b].tweens.length; d++) try { this.state.aliens[b].tweens[d].resume() } catch (e) {}
                        if (this.state.aliensAnims)
                            for (b = 0; b < this.state.aliensAnims.length; b++) this.state.aliensAnims[b].pausedFrame = !1;
                        if (this.state.alienAnchor)
                            for (b = 0; b < this.state.alienAnchor.length; b++)
                                for (d = 0; d < this.state.alienAnchor[b].tweens.length; d++) this.state.alienAnchor[b].tweens[d].resume();
                        this.state.freezTimer && this.state.freezTimer.unpause();
                        this.state.doubleTimer && this.state.doubleTimer.unpause();
                        this.state.shuffleCenterTimer && this.state.shuffleCenterTimer.unpause();
                        this.state.shuffleSpreadTimer && this.state.shuffleSpreadTimer.unpause();
                        this.state.alienGenTimer && this.state.alienGenTimer.unpause();
                        this.state.puTimer && this.state.puTimer.unpause();
                        ig.game.app.getAnchorController().pauseDialog && ig.game.app.getAnchorController().pauseDialog.hide();
                        ig.game.getEntitiesByType(EntityMenuPause)[0] && (ig.game.getEntitiesByType(EntityMenuPause)[0].zIndex = 100, ig.game.sortEntitiesDeferred());
                        this.state = !1
                    }
                }
            }
        },
        volume: {
            setSfx: function(b) {
                this.sfx = 0.08 > b ? 0 : b;
                Howler.volume(this.sfx);
                ig.game.app.service.saveSound()
            },
            setBgm: function(b) {
                this.bgm = 0.08 > b ? 0 : b;
                !0 == ig.game.soundPlugIn ? ig.game.webaudioPlugin.volume(this.bgm) : ig.ua.mobile ? ig.soundHandler.jukebox.player.setVolume(this.bgm) : ig.music.volume = this.bgm;
                ig.game.app.service.saveSound()
            },
            getBarRelPos: function(b, c) { return ("sfx" == b ? this.sfx : this.bgm) * (c.max - c.min) + c.min }
        },
        getAnchorController: function() { var b = ig.game.getEntitiesByType(EntityAnchorController); return b ? b[0] : !1 },
        getClawAnchor: function() { var b = ig.game.getEntitiesByType(EntityGameClawAnchor); return b ? b[0] : !1 },
        getClaw: function() { var b = ig.game.getEntitiesByType(EntityGameClaw); return b ? b[0] : !1 },
        getAlienAnchor: function() { var b = ig.game.getEntitiesByType(EntityGameAlienAnchor); return b ? b[0] : !1 },
        getAlien: function() { var b = ig.game.getEntitiesByType(EntityGameAlien); return b ? b[0] : !1 },
        getMenuController: function() { var b = ig.game.getEntitiesByType(EntityMenuMainController); return b ? b[0] : !1 },
        convertMS: function(b) {
            var c, d, e;
            e = Math.floor(b / 1E3);
            d = Math.floor(e / 60);
            c = Math.floor(d / 60);
            b = Math.floor(c / 24);
            return { d: b, h: c % 24, m: d % 60, s: e % 60 }
        },
        randomizeArray: function(b) { return b[Math.floor(Math.random() * b.length)] },
        getTimeCountDown: function(b) {
            var c = !1,
                c = this.convertMS(b - new Date);
            if (c = 0 > c.m ? !1 : c) c.m = 2 > ("" + c.m).length ? "0" + c.m : "" + c.m, c.s = 2 > ("" + c.s).length ? "0" + c.s : "" + c.s;
            return c
        },
        getMinutesBetweenDates: function(b, c) { return (c.getTime() - b.getTime()) / 6E4 },
        addMinutes: function(b, c) { return new Date(b.getTime() + 6E4 * c) },
        getCharByIndex: function(b) {
            switch (b) {
                case 0:
                    return "a";
                case 1:
                    return "b";
                case 2:
                    return "c";
                case 3:
                    return "d";
                case 4:
                    return "e";
                case 5:
                    return "f";
                case 6:
                    return "g";
                case 7:
                    return "h";
                case 8:
                    return "i";
                case 9:
                    return "j";
                case 10:
                    return "k";
                case 11:
                    return "l";
                case 12:
                    return "m";
                case 13:
                    return "n";
                case 14:
                    return "o";
                case 15:
                    return "p";
                case 16:
                    return "q";
                case 17:
                    return "r";
                case 18:
                    return "s";
                case 19:
                    return "t";
                case 20:
                    return "u";
                case 21:
                    return "v";
                case 22:
                    return "w";
                case 23:
                    return "x";
                case 24:
                    return "y";
                case 25:
                    return "z"
            }
        },
        getIndexByChar: function(b) {
            switch (b) {
                case "a":
                    return 0;
                case "b":
                    return 1;
                case "c":
                    return 2;
                case "d":
                    return 3;
                case "e":
                    return 4;
                case "f":
                    return 5;
                case "g":
                    return 6;
                case "h":
                    return 7;
                case "i":
                    return 8;
                case "j":
                    return 9;
                case "k":
                    return 10;
                case "l":
                    return 11;
                case "m":
                    return 12;
                case "n":
                    return 13;
                case "o":
                    return 14;
                case "p":
                    return 15;
                case "q":
                    return 16;
                case "r":
                    return 17;
                case "s":
                    return 18;
                case "t":
                    return 19;
                case "u":
                    return 20;
                case "v":
                    return 21;
                case "w":
                    return 22;
                case "x":
                    return 23;
                case "y":
                    return 24;
                case "z":
                    return 25
            }
        },
        isInt: function(b) { return !isNaN(b) && parseInt(Number(b)) == b && !isNaN(parseInt(b, 10)) }
    })
});
ig.baked = !0;
ig.module("plugins.app-entity").requires("impact.entity", "impact.animation").defines(function() {
    ig.Animation.inject({
        scale: { x: 1, y: 1, anchor: "center" },
        draw: function(b, c) {
            var d = ig.system.scale;
            ig.system.context.save();
            var e = 0,
                g = 0;
            switch (this.scale.anchor) {
                case "top":
                    e = b + this.sheet.width / 2;
                    g = c;
                    break;
                case "bottom":
                    e = b + this.sheet.width / 2;
                    g = c + this.sheet.height;
                    break;
                default:
                    e = b + this.sheet.width / 2, g = c + this.sheet.height / 2
            }
            ig.system.context.translate(e * d, g * d);
            ig.system.context.scale(this.scale.x, this.scale.y);
            ig.system.context.translate(-e * d, -g * d);
            this.parent(b, c);
            ig.system.context.restore()
        }
    });
    ig.Entity.inject({
        getCenter: function() { return { x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y / 2 } },
        setCenter: function(b, c, d) {
            if (!b || !c) return !1;
            switch (b) {
                case "x":
                    if ("number" != typeof c) return !1;
                    this.pos.x = c - this.size.x / 2 + (d && "number" == typeof d ? d : 0);
                    break;
                case "y":
                    if ("number" != typeof c) return !1;
                    this.pos.y = c - this.size.y / 2 + (d && "number" == typeof d ? d : 0);
                    break;
                case "both":
                    if ("object" != typeof c || !c.x || !c.y) return !1;
                    b = { x: 0, y: 0 };
                    b.x = d && d.x ? d.x : 0;
                    b.y = d && d.y ? d.y : 0;
                    this.pos = { x: c.x - this.size.x / 2 + b.x, y: c.y - this.size.y / 2 + b.y }
            }
            return this
        },
        getPosByCenter: function(b) { return { x: b.x - this.size.x / 2, y: b.y - this.size.y / 2 } },
        getBottomRightPos: function() { return { x: this.pos.x + this.size.x, y: this.pos.y + this.size.y } },
        getState: function(b) { return b ? ig.game.app.state[b] ? ig.game.app.state[b] : !1 : ig.game.app.state },
        setState: function(b, c) { void 0 != ig.game.app.state[b] && (ig.game.app.state[b] = c); return this },
        getSetting: function(b) { return b ? ig.game.app.settings[b] ? ig.game.app.settings[b] : !1 : ig.game.app.settings },
        getLevel: function() {},
        arrayRotate: function(b, c) {
            if (!b instanceof Array || b instanceof Array && 1 > b.length) return [];
            c ? b.unshift(b.pop()) : b.push(b.shift());
            return b
        }
    })
});
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
                if (_SETTINGS.Branding.Logo.Enabled) try { ig.game.spawnEntity(EntityBrandingLogo, this.pos.x, this.pos.y, { div_layer_name: b, centralize: centralize }) } catch (e) { console.log(e) }
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
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("position", "absolute");
            if (ig.ua.mobile) {
                var l = window.innerHeight / mobileHeight,
                    q = window.innerWidth /
                    mobileWidth;
                $("#" + g.id).css("left", this.pos.x * q);
                $("#" + g.id).css("top", this.pos.y * l);
                $("#" + g.id).css("width", this.size.x * q);
                $("#" + g.id).css("height", this.size.y * l)
            } else l = w / 2 - destW / 2, q = h / 2 - destH / 2, console.log(l, q), $("#" + g.id).css("left", l + this.pos.x * multiplier), $("#" + g.id).css("top", q + this.pos.y * multiplier), $("#" + g.id).css("width", this.size.x * multiplier), $("#" + g.id).css("height", this.size.y * multiplier);
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" +
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
ig.module("game.entities.buttons.button").requires("impact.entity", "plugins.data.vector").defines(function() {
    EntityButton = ig.Entity.extend({
        collides: ig.Entity.COLLIDES.NEVER,
        type: ig.Entity.TYPE.A,
        size: new Vector2(48, 48),
        fillColor: null,
        zIndex: 95E3,
        init: function(b, c, d) {
            this.parent(b, c, d);
            !ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
            b = Math.floor(256 * Math.random());
            c = Math.floor(256 * Math.random());
            d = Math.floor(256 * Math.random());
            this.fillColor = "rgba(" + b + "," + d + "," + c + ",1)"
        },
        clicked: function() { throw "no implementation on clicked()"; },
        clicking: function() { throw "no implementation on clicking()"; },
        released: function() { throw "no implementation on released()"; }
    })
});
ig.baked = !0;
ig.module("plugins.clickable-div-layer").requires("plugins.data.vector").defines(function() {
    ClickableDivLayer = ig.Class.extend({
        pos: new Vector2(0, 0),
        size: new Vector2(0, 0),
        identifier: null,
        invisImagePath: "media/graphics/misc/invisible.png",
        init: function(b) {
            this.pos = new Vector2(b.pos.x, b.pos.y);
            this.size = new Vector2(b.size.x, b.size.y);
            var c = "more-games",
                d = "www.google.com",
                e = !1;
            b.div_layer_name && (c = b.div_layer_name);
            b.link && (d = b.link);
            b.newWindow && (e = b.newWindow);
            this.createClickableLayer(c, d, e)
        },
        createClickableLayer: function(b, c, d) {
            this.identifier = b;
            var e = ig.domHandler.getElementById("#" + b);
            e ? (ig.domHandler.show(e), ig.domHandler.attr(e, "href", c)) : this.createClickableOutboundLayer(b, c, this.invisImagePath, d)
        },
        update: function(b, c) { this.pos.x === b && this.pos.y === c || (ig.sizeHandler.dynamicClickableEntityDivs[this.identifier] = {}, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].width = this.size.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].height = this.size.y, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_x = this.pos.x, ig.sizeHandler.dynamicClickableEntityDivs[this.identifier].entity_pos_y = this.pos.y) },
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.domHandler.create("div");
            ig.domHandler.attr(g, "id", b);
            var l = ig.domHandler.create("a");
            e ? (ig.domHandler.attr(l, "href", c), ig.domHandler.attr(l, "target", "_blank")) : ig.domHandler.attr(l, "href", c);
            c = ig.domHandler.create("img");
            ig.domHandler.css(c, { width: "100%", height: "100%" });
            ig.domHandler.attr(c, "src", d);
            d = Math.min(ig.sizeHandler.scaleRatioMultiplier.x, ig.sizeHandler.scaleRatioMultiplier.y);
            if (ig.ua.mobile) {
                e = Math.floor(this.pos.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                var q = Math.floor(this.pos.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px",
                    n = Math.floor(this.size.x * ig.sizeHandler.scaleRatioMultiplier.x) + "px";
                d = Math.floor(this.size.y * ig.sizeHandler.scaleRatioMultiplier.y) + "px"
            } else e = ig.domHandler.getElementById("#canvas"), e = ig.domHandler.getOffsets(e), q = e.top, e = Math.floor(e.left + this.pos.x * d) + "px", q = Math.floor(q + this.pos.y * d) + "px", n = Math.floor(this.size.x * d) + "px", d = Math.floor(this.size.y * d) + "px";
            ig.domHandler.css(g, { "float": "left", position: "absolute", left: e, top: q, width: n, height: d, "z-index": 3 });
            ig.domHandler.addEvent(g, "mousemove", ig.input.mousemove.bind(ig.input), !1);
            ig.domHandler.appendChild(l, c);
            ig.domHandler.appendChild(g, l);
            ig.domHandler.appendToBody(g);
            ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
            ig.sizeHandler.dynamicClickableEntityDivs[b].width = this.size.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].height = this.size.y;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
            ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y
        }
    })
});
ig.baked = !0;
ig.module("game.entities.buttons.button-more-games").requires("game.entities.buttons.button", "plugins.clickable-div-layer").defines(function() {
    EntityButtonMoreGames = EntityButton.extend({
        type: ig.Entity.TYPE.A,
        gravityFactor: 0,
        logo: new ig.AnimationSheet("media/graphics/game/more-games.png", 106, 37),
        size: { x: 106, y: 37 },
        zIndex: 750,
        clickableLayer: null,
        link: null,
        newWindow: !1,
        div_layer_name: "more-games",
        name: "moregames",
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.div_layer_name = d.div_layer_name ? d.div_layer_name : "more-games", _SETTINGS.MoreGames.Enabled ? (this.anims.idle = new ig.Animation(this.logo, 0, [0], !0), this.currentAnim = this.anims.idle, _SETTINGS.MoreGames.Link && (this.link = _SETTINGS.MoreGames.Link), _SETTINGS.MoreGames.NewWindow && (this.newWindow = _SETTINGS.MoreGames.NewWindow), this.clickableLayer = new ClickableDivLayer(this)) : this.kill())
        },
        show: function() {
            var b = ig.domHandler.getElementById("#" + this.div_layer_name);
            ig.domHandler.show(b)
        },
        hide: function() {
            var b = ig.domHandler.getElementById("#" +
                this.div_layer_name);
            ig.domHandler.hide(b)
        },
        clicked: function() {},
        clicking: function() {},
        released: function() {}
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
                if (_SETTINGS.DeveloperBranding.Splash.Disabled) { this.initTimer = new ig.Timer(0.1); try { ig.soundHandler.playSound(ig.soundHandler.SOUNDID.openingSound) } catch (b) { console.log(b) } } else ig.game.director.nextLevel(), ig.system.context.globalAlpha = 1, this.kill()
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
                for (var e = 0, g = 1; 48 >= g; g += 1) b.lineTo(0 + 800 * Math.cos(2 * g * Math.PI / 48), 0 + 800 * Math.sin(2 * g * Math.PI / 48)), e++, 2 == e && (e = 0, b.lineTo(0, 0));
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
            this.firstClick && this.isReleased && "function" == typeof b.released && (b.released(), this.firstClick = !1);
            this.isReleased && "function" == typeof b.clickReleased && (b.clickReleased(), this.firstClick = !1)
        },
        letGo: function() {
            this.firstClick = !1;
            this.hoveringItem = null
        },
        refreshPos: function() { this.pos = ig.game.io.getClickPos() },
        update: function() {
            this.parent();
            this.refreshPos();
            var b = null,
                c = -1;
            for (a = this.objectArray.length - 1; - 1 < a; a--) this.objectArray[a].zIndex > c && (c = this.objectArray[a].zIndex, b = this.objectArray[a]);
            null != b ? ("close" == b.name && console.log(b), null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && this.hoveringItem != b && this.hoveringItem.idle(), this.hoveringItem = b, this.clickObject(b), this.objectArray = []) : null != this.hoveringItem && "function" == typeof this.hoveringItem.idle && (this.hoveringItem.idle(), this.hoveringItem = null);
            this.isClicking = ig.input.pressed("click");
            this.isReleased = ig.input.released("click")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.pointer-selector").requires("game.entities.pointer").defines(function() { EntityPointerSelector = EntityPointer.extend({ zIndex: 1E3, _wmDrawBox: !0, _wmBoxColor: "rgba(0, 0, 255, 0.7)", size: { x: 10, y: 10 }, init: function(b, c, d) { this.parent(b, c, d) } }) });
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
        createClickableOutboundLayer: function(b, c, d, e) {
            var g = ig.$new("div");
            g.id = b;
            document.body.appendChild(g);
            $("#" + g.id).css("float", "left");
            $("#" + g.id).css("width", this.size.x * multiplier);
            $("#" + g.id).css("height", this.size.y * multiplier);
            $("#" + g.id).css("position", "absolute");
            var l = w / 2 - destW / 2,
                q = h /
                2 - destH / 2;
            w == mobileWidth ? ($("#" + g.id).css("left", this.pos.x), $("#" + g.id).css("top", this.pos.y)) : ($("#" + g.id).css("left", l + this.pos.x * multiplier), $("#" + g.id).css("top", q + this.pos.y * multiplier));
            e ? $("#" + g.id).html("<a target='_blank' href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>") : $("#" + g.id).html("<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>");
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
        dehoverOthers: function() { var b = ig.game.getEntitiesByType(EntitySelect); for (i = 0; i < b.length; i++) b[i] != this && (b[i].isHovering = !1) },
        deselectOthers: function() { var b = ig.game.getEntitiesByType(EntitySelect); for (i = 0; i < b.length; i++) b[i] != this && (b[i].isSelected = !1) },
        update: function() {
            this.parent();
            this.canSelectTimer && 0 < this.canSelectTimer.delta() && (this.canSelect = !0, this.canSelectTimer = null)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.opening").requires("impact.image", "game.entities.opening-kitty").defines(function() { LevelOpening = { entities: [{ type: "EntityOpeningKitty", x: 520, y: 212 }], layer: [] } });
ig.baked = !0;
ig.module("game.entities.background-desktop").requires("impact.entity").defines(function() {
    EntityBackgroundDesktop = ig.Entity.extend({
        name: "BackgroundDesktop",
        size: { x: 640, y: 480 },
        zIndex: -1,
        animSheet: new ig.AnimationSheet("media/graphics/backgrounds/desktop/640-480.jpg", 640, 480),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-plane").requires("impact.entity").defines(function() {
    EntityGamePlane = ig.Entity.extend({
        name: "GamePlane",
        size: { x: 578, y: 186 },
        zIndex: 0,
        animSheet: new ig.AnimationSheet("media/graphics/game/plane.png", 578, 186),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || ig.game.sortEntitiesDeferred()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.anchor-test").requires("impact.entity", "plugins.tween").defines(function() {
    EntityAnchorTest = ig.Entity.extend({
        name: "AnchorTest",
        size: { x: 5, y: 5 },
        zIndex: 1,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 255, 0, 0.7)",
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        update: function() {
            this.parent();
            if (!ig.global.wm)
                if (ig.game.app.settings.showPlanePrespective)
                    if (this.anchor && !this.tweened) {
                        this.tweened = !0;
                        var b = ig.game.app.getAnchorController(),
                            c = this.tween({
                                pos: {
                                    x: b.pos.x +
                                        b.size.x - 5
                                }
                            }, 1),
                            d = this.tween({ pos: { y: b.pos.y + b.size.y - 5 } }, 1),
                            e = this.tween({ pos: { y: b.pos.y } }, 1),
                            b = this.tween({ pos: { x: b.pos.x } }, 1);
                        e.chain(b);
                        b.chain(d);
                        d.chain(c);
                        c.chain(e);
                        d.start()
                    } else this.anchor || (this.anchor = ig.game.app.getAnchorController());
            else if (this.anchor && this.tweened) {
                for (c = 0; c < this.tweens.length; c++) this.tweens[c].stop();
                this.tweened = !1
            }
        },
        tailLength: 30,
        tails: [],
        draw: function() {
            this.parent();
            if (!ig.global.wm && ig.game.app.settings.showPlanePrespective && this.anchor) {
                ig.system.context.textAlign = "center";
                center = this.getCenter();
                var b = this.anchor.translatePos(center);
                this.tails.length < this.tailLength || this.tails.length > this.tailLength && this.tails.shift();
                this.tails.push({ anchor: { x: center.x, y: center.y }, floor: { x: b.x, y: b.y }, roof: { x: b.x, y: b.y2 } });
                for (b = this.tails.length - 1; 0 <= b; b--) this.tails[b], this.anchor.testDrawDot(ig.system.context, this.tails[b].anchor.x, this.tails[b].anchor.y, "green"), this.anchor.testDrawDot(ig.system.context, this.tails[b].floor.x, this.tails[b].floor.y), this.anchor.testDrawDot(ig.system.context, this.tails[b].roof.x, this.tails[b].roof.y, "yellow")
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-claw-anchor").requires("impact.entity", "plugins.tween").defines(function() {
    EntityGameClawAnchor = ig.Entity.extend({
        name: "GameClawAnchor",
        size: { x: 20, y: 15 },
        zIndex: 100,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 255, 0, 0.7)",
        bindClawShadow: !1,
        type: ig.Entity.TYPE.B,
        checkAgainst: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.LITE,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        check: function(b) {
            this.parent();
            if (!ig.global.wm && (4 == ig.game.app.tutorial.index && ig.game.app.tutorial.activate(), this.getState().alienPickUpCheckBegin)) {
                var c = this.getBottomRightPos(),
                    d = b.getBottomRightPos(),
                    e = ig.game.app.getAnchorController();
                this.pos.x >= b.pos.x && this.pos.y >= b.pos.y && c.x <= d.x && c.y <= d.y && !this.getState("puRequestShuffleBind") ? (e.prepareAlienPickUp(b.alienId), e.claw.zIndex = b.alien.zIndex + 1, ig.game.sortEntitiesDeferred()) : e.missPickedAlienId = b.alienId;
                e.evBoardSetPicked();
                this.setState("alienPickUpCheckBegin", !1)
            }
        },
        clicked: function() { ig.game.app.getAnchorController().moveClawNext() },
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.game-claw-shadow").requires("impact.entity").defines(function() {
    EntityGameClawShadow = ig.Entity.extend({
        name: "GameClawShadow",
        size: { x: 41, y: 11 },
        zIndex: 1,
        animSheet: new ig.AnimationSheet("media/graphics/game/shadow-claw.png", 41, 11),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        draw: function() {
            this.parent();
            ig.global.wm || ig.game.app.settings.showShadowMark && this.markEdge()
        },
        markEdge: function() {
            var b = right = tp = bottom = center = br = {};
            center = this.anchor.getCenter();
            br = this.anchor.getBottomRightPos();
            var c = this.size.y - this.currentAnim.scale.y * this.size.y,
                b = { x: this.anchor.pos.x, y: center.y };
            right = { x: br.x, y: center.y };
            tp = { x: center.x, y: this.anchor.pos.y + c };
            bottom = { x: center.x, y: br.y - c };
            b = this.anchorController.translatePos(b);
            right = this.anchorController.translatePos(right);
            tp = this.anchorController.translatePos(tp);
            bottom = this.anchorController.translatePos(bottom);
            this.anchorController.testDrawDot(ig.system.context, b.x, b.y, "red");
            this.anchorController.testDrawDot(ig.system.context, right.x, right.y, "red");
            this.anchorController.testDrawDot(ig.system.context, tp.x, tp.y, "red");
            this.anchorController.testDrawDot(ig.system.context, bottom.x, bottom.y, "red")
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-claw").requires("impact.entity", "plugins.tween", "game.entities.game-claw-shadow").defines(function() {
    EntityGameClaw = ig.Entity.extend({
        name: "GameClaw",
        size: { x: 94, y: 604 },
        zIndex: 50,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/claw.png", 94, 604),
        entranceTriggered: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("pick", 0.1, [1]);
            this.addAnim("idle", 0.1, [0]);
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        triggerEntrance: function(b) {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.clawentrance);
            this.setState("clawEntranceTriggered", !1);
            this.setState("alienPickUpBined", !1);
            this.setState("clawMoveDown", !1);
            this.setState("clawMoveUp", !1);
            this.currentAnim = this.anims.idle;
            this.currentAnim.scale.x = b.scale;
            this.currentAnim.scale.y = b.scale;
            this.currentAnim.scale.anchor = "bottom";
            this.pos.y = -this.size.y;
            this.setCenter("x", b.x);
            this.getSetting().prevClawDir = "back";
            this.zIndex = 50;
            ig.game.sortEntitiesDeferred();
            this.tween({ pos: { y: b.y2 - this.size.y + 100 * b.scale } }, 0.5, {
                onComplete: function() {
                    this.setState("clawEntranceTriggered", !0);
                    ig.game.app.getAnchorController().moveClaw("back")
                }.bind(this)
            }).start()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-alien-anchor").requires("impact.entity", "plugins.tween").defines(function() {
    EntityGameAlienAnchor = ig.Entity.extend({
        name: "GameAlienAnchor",
        size: { x: 40, y: 36 },
        zIndex: 100,
        _wmDrawBox: !0,
        _wmBoxColor: "rgba(0, 255, 0, 0.7)",
        type: ig.Entity.TYPE.A,
        collides: ig.Entity.COLLIDES.PASSIVE,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || ig.game.sortEntitiesDeferred()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-alien").requires("impact.entity", "plugins.tween").defines(function() {
    EntityGameAlien = ig.Entity.extend({
        name: "GameAlien",
        size: { x: 120, y: 140 },
        zIndexBase: 2,
        animSheet: {},
        entranceY: 0,
        stopJump: !1,
        jump: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.animSheet = new ig.AnimationSheet("media/graphics/sprites/alien-" + this.alienType + ".png", 120, 140);
            this.addAnim("idle", 0.1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4]);
            this.addAnim("pickup", 0.05, [5, 6, 7, 8, 9]);
            ig.global.wm || (this.currentAnim = this.anims.pickup, this.currentAnim.scale.x = this.prespective.scale, this.currentAnim.scale.y = this.prespective.scale, this.currentAnim.scale.anchor = "top", this.entranceY = this.prespective.y - this.getSetting("alienTopPrespectiveHeight") * this.prespective.scale, this.setCenter("x", this.prespective.x), this.pos.y = -this.size.y, this.zIndex = this.zIndexBase + this.rowIndex + this.skipRow, ig.game.sortEntitiesDeferred(), this.tween({ pos: { y: this.entranceY } }, 0.7, {
                easing: ig.Tween.Easing.Quartic.EaseOut,
                onComplete: function() {
                    this.currentAnim = this.anims.idle;
                    this.currentAnim.scale.x = this.prespective.scale;
                    this.currentAnim.scale.y = this.prespective.scale;
                    this.currentAnim.scale.anchor = "top";
                    this.oriPosY = this.pos.y;
                    this.jumping()
                }.bind(this)
            }).start())
        },
        stopJumping: function() {
            if (this.isBonus) {
                if (0 < this.tweens.length)
                    for (var b = 0; b < this.tweens.length; b++) this.tweens[b].stop();
                this.jump = !1;
                this.currentAnim = this.anims.idle;
                b = ig.game.app.getAnchorController().getAlien(this.alienId);
                b = ig.game.app.getAnchorController().translatePos(b.anchor.getCenter());
                this.pos.y = b.y - this.getSetting("alienTopPrespectiveHeight") * b.scale;
                this.setCenter("x", b.x);
                this.currentAnim.scale.x = b.scale;
                this.currentAnim.scale.y = b.scale;
                this.currentAnim.scale.anchor = "top";
                this.stopJump = !0;
                this.oriPosY = this.pos.y
            }
        },
        jumping: function() {
            this.jump = {};
            this.isBonus && !this.stopJump && (this.jump.down = this.tween({ pos: { y: this.pos.y } }, 0.1, {
                easing: ig.Tween.Easing.Quartic.EaseOut,
                delay: 0.5,
                onComplete: function() {
                    var b = ig.game.app.getAnchorController().getAlien(this.alienId),
                        b = ig.game.app.getAnchorController().translatePos(b.anchor.getCenter());
                    this.currentAnim = this.anims.idle;
                    this.currentAnim.scale.x = b.scale;
                    this.currentAnim.scale.y = b.scale;
                    this.currentAnim.scale.anchor = "top";
                    this.jumping()
                }.bind(this)
            }), this.jump.up = this.tween({ pos: { y: this.pos.y - 10 } }, 0.1, {
                easing: ig.Tween.Easing.Quartic.EaseOut,
                onComplete: function() {
                    var b = ig.game.app.getAnchorController().getAlien(this.alienId),
                        b = ig.game.app.getAnchorController().translatePos(b.anchor.getCenter());
                    this.currentAnim.scale.x = b.scale;
                    this.currentAnim.scale.y = b.scale;
                    this.currentAnim.scale.anchor = "top"
                }.bind(this)
            }), this.jump.pause = this.tween({ pos: this.pos }, 0.1, {
                easing: ig.Tween.Easing.Quartic.EaseOut,
                delay: 1,
                onComplete: function() {
                    var b = ig.game.app.getAnchorController().getAlien(this.alienId),
                        b = ig.game.app.getAnchorController().translatePos(b.anchor.getCenter());
                    this.currentAnim = this.anims.pickup;
                    this.currentAnim.scale.x = b.scale;
                    this.currentAnim.scale.y = b.scale;
                    this.currentAnim.scale.anchor = "top"
                }.bind(this)
            }), this.jump.up.chain(this.jump.down), this.jump.pause.chain(this.jump.up), this.jump.pause.start())
        },
        bindAnchor: function() {
            var b = this.anchorController.translatePos(this.anchor.getCenter());
            this.currentAnim.scale.x = b.scale;
            this.currentAnim.scale.y = b.scale;
            this.currentAnim.scale.anchor = "top";
            this.pos.y = b.y - this.getSetting("alienTopPrespectiveHeight") * b.scale;
            this.setCenter("x", b.x);
            this.oriPosY = this.pos.y
        },
        update: function() {
            this.parent();
            void 0 !== this.pausedFrame && !1 !== this.pausedFrame && this.currentAnim.gotoFrame(this.pausedFrame)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-target-shadow").requires("impact.entity").defines(function() {
    EntityGameTargetShadow = ig.Entity.extend({
        name: "GameTargetShadow",
        size: { x: 65, y: 22 },
        zIndex: 1,
        animSheet: new ig.AnimationSheet("media/graphics/game/pick-target-shadown.png", 65, 22),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.bindAnchor(), ig.game.sortEntitiesDeferred())
        },
        draw: function() {
            this.parent();
            ig.global.wm || ig.game.app.settings.showShadowMark && this.markEdge()
        },
        markEdge: function() {
            var b = right = tp = bottom = center = br = {};
            center = this.anchor.getCenter();
            br = this.anchor.getBottomRightPos();
            var c = this.size.y - this.currentAnim.scale.y * this.size.y,
                b = { x: this.anchor.pos.x, y: center.y };
            right = { x: br.x, y: center.y };
            tp = { x: center.x, y: this.anchor.pos.y + c };
            bottom = { x: center.x, y: br.y - c };
            b = this.anchorController.translatePos(b);
            right = this.anchorController.translatePos(right);
            tp = this.anchorController.translatePos(tp);
            bottom = this.anchorController.translatePos(bottom);
            this.anchorController.testDrawDot(ig.system.context, b.x, b.y, "red");
            this.anchorController.testDrawDot(ig.system.context, right.x, right.y, "red");
            this.anchorController.testDrawDot(ig.system.context, tp.x, tp.y, "red");
            this.anchorController.testDrawDot(ig.system.context, bottom.x, bottom.y, "red")
        },
        bindAnchor: function() {
            var b = this.anchorController.translatePos(this.anchor.getCenter());
            this.currentAnim.scale.x = b.scale;
            this.currentAnim.scale.y = b.scale;
            this.setCenter("both", b)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.alien-head").requires("impact.entity", "plugins.tween").defines(function() {
    EntityAlienHead = ig.Entity.extend({
        name: "AlienHead",
        size: { x: 113, y: 113 },
        zIndex: 51,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/alien-heads.png", 113, 113),
        state: "normal",
        type: "a",
        as: "profileSelection",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("a", 0.1, [2]);
            this.addAnim("a_happy", 0.1, [1]);
            this.addAnim("a_sad", 0.1, [0]);
            this.addAnim("b", 0.1, [8]);
            this.addAnim("b_happy", 0.1, [7]);
            this.addAnim("b_sad", 0.1, [6]);
            this.addAnim("c", 0.1, [11]);
            this.addAnim("c_happy", 0.1, [10]);
            this.addAnim("c_sad", 0.1, [9]);
            this.addAnim("d", 0.1, [17]);
            this.addAnim("d_happy", 0.1, [16]);
            this.addAnim("d_sad", 0.1, [15]);
            this.addAnim("e", 0.1, [5]);
            this.addAnim("e_happy", 0.1, [4]);
            this.addAnim("e_sad", 0.1, [3]);
            this.addAnim("f", 0.1, [14]);
            this.addAnim("f_happy", 0.1, [13]);
            this.addAnim("f_sad", 0.1, [12]);
            this.addAnim("empty", 0.1, [50]);
            this.currentAnim = this.getMapSection(this.type, this.state);
            this.resize();
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        resize: function() {
            switch (this.as) {
                case "eventBoard":
                    this.currentAnim.scale.x = 0.4;
                    this.currentAnim.scale.y = 0.4;
                    break;
                case "pickme":
                    this.currentAnim.scale.x = 0.7;
                    this.currentAnim.scale.y = 0.7;
                    break;
                case "gameover":
                    this.currentAnim.scale.x = 0.5, this.currentAnim.scale.y = 0.5
            }
        },
        getMapSection: function(b, c) {
            switch (b) {
                case "a":
                    return "happy" == c ? this.anims.a_happy : "sad" == c ? this.anims.a_sad : this.anims.a;
                case "b":
                    return "happy" == c ? this.anims.b_happy : "sad" == c ? this.anims.b_sad : this.anims.b;
                case "c":
                    return "happy" == c ? this.anims.c_happy : "sad" == c ? this.anims.c_sad : this.anims.c;
                case "d":
                    return "happy" == c ? this.anims.d_happy : "sad" == c ? this.anims.d_sad : this.anims.d;
                case "e":
                    return "happy" == c ? this.anims.e_happy : "sad" == c ? this.anims.e_sad : this.anims.e;
                case "f":
                    return "happy" == c ? this.anims.f_happy : "sad" == c ? this.anims.f_sad : this.anims.f;
                case "":
                    return this.anims.empty
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-alien-pickmesb").requires("impact.entity").defines(function() {
    EntityGameAlienPickmesb = ig.Entity.extend({
        name: "GameAlienPickmesb",
        size: { x: 109, y: 45 },
        zIndex: 100,
        animSheet: new ig.AnimationSheet("media/graphics/game/shoutbox.png", 109, 45),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.center = this.getCenter(), ig.game.sortEntitiesDeferred())
        },
        draw: function() {
            this.parent();
            ig.global.wm || (ig.system.context.font = "12pt helsinki2", ig.system.context.fillStyle = "white", ig.system.context.textAlign = "center", ig.system.context.fillText("pick me !", this.center.x, this.pos.y + 20))
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-powerup-button").requires("impact.entity", "plugins.tween").defines(function() {
    EntityGamePowerupButton = ig.Entity.extend({
        name: "GamePowerupButton",
        size: { x: 101, y: 81 },
        zIndex: 100,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button-powerup.png", 101, 81),
        type: ig.Entity.TYPE.B,
        buttonType: "freez",
        butttonState: "idle",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("shuffle_clicked", 0.1, [0]);
            this.addAnim("shuffle", 0.1, [1]);
            this.addAnim("addtime_clicked", 0.1, [2]);
            this.addAnim("addtime", 0.1, [3]);
            this.addAnim("double_clicked", 0.1, [4]);
            this.addAnim("double", 0.1, [5]);
            this.addAnim("freez_clicked", 0.1, [6]);
            this.addAnim("freez", 0.1, [7]);
            this.currentAnim = this.getButtonType(this.buttonType, this.butttonState);
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.puentrance);
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        clicked: function() { ig.game.app.pause.state || (this.currentAnim = this.getButtonType(this.buttonType, "clicked"), ig.game.app.getAnchorController().triggerPowerup(this.buttonType)) },
        released: function() { ig.game.app.pause.state || (this.currentAnim = this.getButtonType(this.buttonType, "idle")) },
        getButtonType: function(b, c) {
            if (!ig.game.app.pause.state) switch (b) {
                case "addtime":
                    return "idle" == c ? this.anims.addtime : this.anims.addtime_clicked;
                case "shuffle":
                    return "idle" == c ? this.anims.shuffle : this.anims.shuffle_clicked;
                case "double":
                    return "idle" == c ? this.anims.double : this.anims.double_clicked;
                case "freez":
                    return "idle" == c ? this.anims.freez : this.anims.freez_clicked
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-message").requires("impact.entity", "plugins.tween").defines(function() {
    EntityGameMessage = ig.Entity.extend({
        name: "GameMessage",
        size: { x: 2, y: 2 },
        zIndex: 51,
        inOutSpeed: 1,
        centerSpeed: 5,
        showMessage: !0,
        message: "",
        messageAttr: { font: "14pt helsinki2", fillStyle: "#FFFFFF", textAlign: "center" },
        tweenMotion: !1,
        motionXPos: [160, 480, 740],
        motionSpeed: [0.1, 1, 0.1],
        isAnimate: !1,
        showCenterGauge: !1,
        gaugeAttr: { gaugeSize: 5, gaugeColor: "#FFFFFF", gaugeDistance: 20 },
        animateEntities: [],
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        animate: function(b) {
            this.tweenMotion || (b && b.motionXPos && (this.motionXPos = b.motionXPos), b && b.motionSpeed && (this.motionSpeed = b.motionSpeed), b && b.showMessage && (this.showMessage = b.showMessage), b && b.message && (this.message = b.message), b && b.messageAttr && (this.messageAttr = b.messageAttr), b && b.showCenterGauge && (this.showCenterGauge = b.showCenterGauge), b && b.gaugeAttr && (this.gaugeAttr = b.gaugeAttr), b && b.animateEntities && (this.animateEntities = b.animateEntities), this.isAnimate = !0, this.tweenMotion = {}, this.tweenMotion.inAnim = this.tween({ pos: { x: this.motionXPos[0] } }, this.motionSpeed[0], { easing: ig.Tween.Easing.Sinusoidal.EaseOut, onComplete: function() { if (this.onCompleteIn) this.onCompleteIn(this) }.bind(this) }), this.tweenMotion.center = this.tween({ pos: { x: this.motionXPos[1] } }, this.motionSpeed[1], { onComplete: function() { if (this.onCompleteCenter) this.onCompleteCenter(this) }.bind(this) }), this.tweenMotion.outAnim = this.tween({ pos: { x: this.motionXPos[2] } }, this.motionSpeed[2], {
                easing: ig.Tween.Easing.Sinusoidal.EaseIn,
                onComplete: function() {
                    if (this.onCompleteOut) this.onCompleteOut(this);
                    this.isAnimate = !1;
                    this.kill()
                }.bind(this)
            }), this.tweenMotion.inAnim.chain(this.tweenMotion.center), this.tweenMotion.center.chain(this.tweenMotion.outAnim), this.tweenMotion.inAnim.start())
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm && this.isAnimate) {
                if (this.onDraw) this.onDraw(this);
                var b = this.getCenter();
                if (this.showMessage) {
                    ig.system.context.font = this.messageAttr.font;
                    ig.system.context.fillStyle = this.messageAttr.fillStyle;
                    ig.system.context.textAlign = this.messageAttr.textAlign;
                    ig.system.context.fillStyle = "#000000";
                    if (this.useShadow) {
                        var c = !this.relShadowPos ? { x: b.x + 2, y: b.y + 2 } : { x: b.x + this.relShadowPos.x, y: b.y + this.relShadowPos.y };
                        ig.system.context.fillText(this.message, c.x, c.y)
                    }
                    ig.system.context.fillStyle = this.messageAttr.fillStyle;
                    ig.system.context.fillText(this.message, b.x, b.y)
                }
                this.showCenterGauge && b.x >= this.motionXPos[0] && b.x <= this.motionXPos[1] && (ig.system.context.beginPath(), c = [this.motionXPos[0], b.y + this.gaugeAttr.gaugeDistance - this.gaugeAttr.gaugeSize / 2, this.motionXPos[1], b.y + this.gaugeAttr.gaugeDistance + this.gaugeAttr.gaugeSize / 2, b.y + this.gaugeAttr.gaugeDistance], ig.system.context.lineWidth = 2, ig.system.context.strokeStyle = this.gaugeAttr.gaugeColor, ig.system.context.beginPath(), ig.system.context.lineTo(c[0], c[1]), ig.system.context.lineTo(c[2], c[1]), ig.system.context.lineTo(c[2], c[3]), ig.system.context.lineTo(c[0], c[3]), ig.system.context.closePath(), ig.system.context.stroke(), ig.system.context.lineWidth = this.gaugeAttr.gaugeSize / 2, ig.system.context.beginPath(), ig.system.context.lineTo(c[0], c[4]), ig.system.context.lineTo(b.x, c[4]), ig.system.context.closePath(), ig.system.context.stroke());
                if (this.animateEntities && this.animateEntities instanceof Array)
                    for (c = 0; c < this.animateEntities.length; c++) this.animateEntities[c].entity.setCenter("both", { x: b.x + this.animateEntities[c].params.relPosX, y: b.y + this.animateEntities[c].params.relPosY })
            }
        },
        kill: function() {
            if (this.onKill) this.onKill(this);
            if (this.animateEntities && this.animateEntities instanceof Array)
                for (var b = 0; b < this.animateEntities.length; b++) this.animateEntities[b].entity.kill();
            ig.game.app.getAnchorController().animMessage = !1;
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-powerup-indicator").requires("impact.entity").defines(function() {
    EntityGamePowerupIndicator = ig.Entity.extend({
        name: "GamePowerupIndicator",
        size: { x: 35, y: 35 },
        zIndex: 100,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/powerup-indicator.png", 35, 35),
        type: "double",
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("double", 0.1, [0]);
            this.addAnim("freez", 0.1, [1]);
            this.addAnim("shuffle", 0.1, [2]);
            this.addAnim("addtime", 0.1, [3]);
            this.currentAnim = this.anims[this.type];
            ig.global.wm || ig.game.sortEntitiesDeferred()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-gameover-dialog").requires("impact.entity", "plugins.tween", "game.entities.alien-head").defines(function() {
    EntityGameGameoverDialog = ig.Entity.extend({
        name: "GameGameoverDialog",
        size: { x: 399, y: 271 },
        zIndex: 101,
        animSheet: new ig.AnimationSheet("media/graphics/game/dialog-gameover.png", 399, 271),
        alienHeads: [],
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.centerShowPos = {
                x: ig.system.width / 2 + 15,
                y: ig.system.height /
                    2
            }, this.centerHidePos = { x: this.centerShowPos.x, y: -(this.size.y / 2) }, this.setCenter("both", this.centerHidePos), this.createAlienHead(), ig.game.sortEntitiesDeferred(), this.entrance())
        },
        createAlienHead: function() { for (b in ig.game.app.score.currentAlien) this.alienHeads.push({ alienType: b, score: ig.game.app.score.currentAlien[b] }); for (var b = 0; b < this.alienHeads.length; b++) this.alienHeads[b].alien = ig.game.spawnEntity(EntityAlienHead, 0, 0, { type: this.alienHeads[b].alienType, as: "gameover", zIndex: 103 }) },
        entrance: function() { this.tween({ pos: { y: this.getPosByCenter(this.centerShowPos).y } }, 0.1, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() {}.bind(this) }).start() },
        draw: function() {
            this.parent();
            ig.system.context.font = "30pt helsinki2";
            ig.system.context.textAlign = "center";
            var b = this.getCenter();
            b.x -= 20;
            ig.system.context.fillStyle = "#000000";
            ig.system.context.fillText(_STRINGS.Game.gameover, b.x + 4, this.pos.y - 16);
            ig.system.context.fillStyle = "white";
            ig.system.context.fillText(_STRINGS.Game.gameover, b.x, this.pos.y - 20);
            ig.system.context.font = "15pt helsinki2";
            ig.system.context.fillText(_STRINGS.Game["menu-profile-total"] + " " + _STRINGS.Game.Score + " :", b.x, this.pos.y + 40);
            ig.system.context.fillStyle = "cyan";
            ig.system.context.textAlign = "left";
            ig.system.context.fillText(ig.game.app.score.current, b.x + 80, this.pos.y + 40);
            if (0 < this.alienHeads.length) {
                var c = b.y;
                if (1 == this.alienHeads.length) this.alienHeads[0].alien.setCenter("both", { x: b.x, y: c }), ig.system.context.fillText(": " + this.alienHeads[0].score, b.x + 30, c + 15);
                else
                    for (var d = void 0, c = c - 50, e = 0, g = 0; g < this.alienHeads.length; g++) e = !d || void 0 === d ? b.x - 75 : b.x + 75, c += !1 === d ? 55 : 0, this.alienHeads[g].alien.setCenter("both", { x: e, y: c }), ig.system.context.fillText(": " + this.alienHeads[g].score, e + 30, c + 15), d = d ? !1 : !0
            }
        },
        kill: function() {
            for (var b = 0; b < this.alienHeads.length; b++) this.alienHeads[b].alien.kill();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-play-again").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuPlayAgain = ig.Entity.extend({
        name: "MenuPlayAgain",
        size: { x: 106, y: 37 },
        zIndex: 102,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-playagain.png", 106, 37),
        type: ig.Entity.TYPE.B,
        frame: !1,
        relPos: !1,
        triggered: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("clicked", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (b = this.getPosByCenter(this.frame.centerHidePos), this.pos = { x: b.x + this.relPos.x, y: b.y + this.relPos.y }, ig.game.sortEntitiesDeferred(), this.entrance())
        },
        entrance: function() {
            var b = this.getPosByCenter(this.frame.centerShowPos);
            this.tween({ pos: { y: b.y + this.relPos.y } }, 0.1, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.oriPosY = this.pos.y }.bind(this) }).start()
        },
        clickReleased: function() { this.triggered || (this.triggered = !0, this.currentAnim = this.anims.clicked, this.activeTween = [], ig.game.app.getAnchorController().generateClickAnim(this, { y: this.pos.y - 5 }, { y: this.oriPosY })) },
        postGenerateClickAnim: function() {
            this.currentAnim = this.anims.idle;
            ig.game.director.jumpTo(LevelGameDesktop)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-mainmenu").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuMainmenu = ig.Entity.extend({
        name: "MenuMainmenu",
        size: { x: 106, y: 37 },
        zIndex: 103,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-mainmenu.png", 106, 37),
        type: ig.Entity.TYPE.B,
        frame: !1,
        relPos: !1,
        isHidden: !0,
        triggered: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("clicked", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.pauseframe ? (b = this.pauseframe.getCenter(), this.pos = { x: b.x + this.relPos.x, y: b.y + this.relPos.y }, this.setCenter("both", this.pos), this.oriPosY = this.pos.y, this.hiddenPosY = this.pauseframe.hiddenPosY + this.relPos.y) : (b = this.getPosByCenter(this.frame.centerHidePos), this.pos = { x: b.x + this.relPos.x, y: b.y + this.relPos.y }, this.entrance()), ig.game.sortEntitiesDeferred())
        },
        quickHide: function() {
            this.pos.y = this.hiddenPosY;
            this.isHidden = !0
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("isMainButtonAnimated", !1) }.bind(this) }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        entrance: function() {
            var b = this.getPosByCenter(this.frame.centerShowPos);
            this.tween({ pos: { y: b.y + this.relPos.y } }, 0.1, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.oriPosY = this.pos.y }.bind(this) }).start()
        },
        clickReleased: function() { this.triggered || (this.triggered = !0, this.currentAnim = this.anims.clicked, this.activeTween = [], ig.game.app.getAnchorController().generateClickAnim(this, { y: this.pos.y - 5 }, { y: this.oriPosY })) },
        postGenerateClickAnim: function() {
            this.currentAnim = this.anims.idle;
            ig.game.app.pause.state && ig.game.app.pause.unset();
            ig.game.director.jumpTo(LevelMainMenu)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-option-slidebar").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuOptionSlidebar = ig.Entity.extend({
        name: "MenuOptionSlidebar",
        size: { x: 132, y: 11 },
        zIndex: 103,
        animSheet: new ig.AnimationSheet("media/graphics/game/option-slide-bar.png", 132, 11),
        tweeSpeed: 0,
        isHidden: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (b = this.frame.getCenter(), this.pos = { x: b.x + this.relPos.x, y: b.y + this.relPos.y }, this.oriPosY = this.pos.y, this.hiddenPosY = this.frame.hiddenPosY + this.relPos.y, ig.game.sortEntitiesDeferred())
        },
        quickHide: function() {
            this.pos.y = this.hiddenPosY;
            this.isHidden = !0
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("isMainButtonAnimated", !1) }.bind(this) }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-option-slider").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuOptionSlider = ig.Entity.extend({
        name: "MenuOptionSlider",
        size: { x: 19, y: 30 },
        zIndex: 104,
        animSheet: new ig.AnimationSheet("media/graphics/game/option-slider.png", 19, 30),
        type: ig.Entity.TYPE.B,
        hold: !1,
        tweenSpeed: 0,
        isHidden: !0,
        holding: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (b = this.frame.getCenter(), this.pos = {
                x: b.x +
                    this.relPos.x,
                y: b.y + this.relPos.y
            }, this.setCenter("both", this.pos), this.pointer = ig.game.getEntitiesByType(EntityPointer)[0], b = ig.game.app.volume.getBarRelPos(this.slideType, this.edge), this.setCenter("x", b), this.oriPosY = this.pos.y, this.hiddenPosY = this.frame.hiddenPosY + this.relPos.y, ig.game.sortEntitiesDeferred())
        },
        ready: function() {
            this.parent();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        update: function() {
            this.parent();
            ig.input.released("click") && this.holding && (this.released(), this.pointer.letGo(), this.holding = !1)
        },
        quickHide: function() {
            this.pos.y = this.hiddenPosY;
            this.isHidden = !0
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("isMainButtonAnimated", !1) }.bind(this) }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        clicked: function() { this.holding || (this.holding = !0) },
        released: function() { "sfx" == this.slideType && ig.soundHandler.playSound(ig.soundHandler.SOUNDID.altbutton) },
        clicking: function() {
            if (this.holding) {
                var b = this.pointer.getCenter();
                b.x >= this.edge.min && b.x <= this.edge.max && (this.setCenter("x", this.pointer.getCenter().x), "sfx" == this.slideType ? ig.game.app.volume.setSfx(this.getVolumeRel()) : ig.game.app.volume.setBgm(this.getVolumeRel()))
            }
        },
        getVolumeRel: function() {
            var b = 0,
                b = this.edge.max - this.edge.min,
                b = (this.getCenter().x - this.edge.min) / b;
            return Math.round(100 *
                b) / 100
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-pause-dialog").requires("impact.entity", "game.entities.menu-option-slidebar", "game.entities.menu-option-slider", "plugins.tween").defines(function() {
    EntityGamePauseDialog = ig.Entity.extend({
        name: "GamePauseDialog",
        size: { x: 340, y: 257 },
        zIndex: 102,
        animSheet: new ig.AnimationSheet("media/graphics/game/dialog-option.png", 340, 257),
        isHidden: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.setCenter("both", this.pos), this.oriPosY = this.pos.y, this.hiddenPosY = -this.size.y, this.bars = [], this.bars.push(ig.game.spawnEntity(EntityMenuOptionSlidebar, 0, 0, { slideType: "sfx", frame: this, relPos: { x: this.centerRelPos.sfx.x + 30, y: this.centerRelPos.sfx.y - 13 } })), this.bars.push(ig.game.spawnEntity(EntityMenuOptionSlidebar, 0, 0, { slideType: "music", frame: this, relPos: { x: this.centerRelPos.music.x + 30, y: this.centerRelPos.music.y - 13 } })), this.sliders = [], this.sliders.push(ig.game.spawnEntity(EntityMenuOptionSlider, 0, 0, { slideType: "sfx", edge: { min: this.bars[0].pos.x, max: this.bars[0].pos.x + this.bars[0].size.x }, frame: this, relPos: { x: this.centerRelPos.sfx.x + 30, y: this.centerRelPos.sfx.y - 6 } })), this.sliders.push(ig.game.spawnEntity(EntityMenuOptionSlider, 0, 0, { slideType: "music", edge: { min: this.bars[1].pos.x, max: this.bars[1].pos.x + this.bars[1].size.x }, frame: this, relPos: { x: this.centerRelPos.music.x + 30, y: this.centerRelPos.music.y - 6 } })), this.mainMenu = ig.game.spawnEntity(EntityMenuMainmenu, 0, 0, { pauseframe: this, relPos: { x: 0, y: 130 } }), ig.game.sortEntitiesDeferred())
        },
        quickHide: function() {
            this.pos.y = this.hiddenPosY;
            this.isHidden = !0;
            for (var b = 0; b < this.bars.length; b++) this.bars[b].quickHide();
            for (b = 0; b < this.sliders.length; b++) this.sliders[b].quickHide();
            this.mainMenu.quickHide()
        },
        show: function() {
            if (this.isHidden) {
                for (var b = 0; b < this.bars.length; b++) this.bars[b].show();
                for (b = 0; b < this.sliders.length; b++) this.sliders[b].show();
                this.mainMenu.show();
                this.isHidden = !1;
                this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("isMainButtonAnimated", !1) }.bind(this) }).start()
            }
        },
        hide: function() {
            if (!this.isHidden) {
                for (var b = 0; b < this.bars.length; b++) this.bars[b].hide();
                for (b = 0; b < this.sliders.length; b++) this.sliders[b].hide();
                this.mainMenu.hide();
                this.isHidden = !0;
                this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.kill() }.bind(this) }).start()
            }
        },
        draw: function() {
            this.parent();
            this.center = this.getCenter();
            ig.system.context.font = "20pt helsinki2";
            ig.system.context.textAlign = "center";
            ig.system.context.fillStyle = "black";
            ig.system.context.fillText(_STRINGS.Game.paused, this.center.x - 55, this.pos.y + 25);
            ig.system.context.fillStyle = "white";
            ig.system.context.fillText(_STRINGS.Game.paused, this.center.x - 60, this.pos.y + 20);
            ig.system.context.textAlign = "right";
            ig.system.context.fillText(_STRINGS.Game.sfx, this.center.x + this.centerRelPos.sfx.x, this.center.y + this.centerRelPos.sfx.y);
            ig.system.context.fillText(_STRINGS.Game.music, this.center.x + this.centerRelPos.music.x, this.center.y + this.centerRelPos.music.y)
        },
        kill: function() {
            for (var b = 0; b < this.bars.length; b++) this.bars[b].kill();
            for (b = 0; b < this.sliders.length; b++) this.sliders[b].kill();
            this.mainMenu.kill();
            this.parent()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-pause-overlay").requires("impact.entity").defines(function() {
    EntityGamePauseOverlay = ig.Entity.extend({
        name: "GamePauseOverlay",
        size: { x: 640, y: 480 },
        zIndex: 101,
        animSheet: new ig.AnimationSheet("media/graphics/game/pause-overlay.png", 640, 480),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || ig.game.sortEntitiesDeferred()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.anchor-controller").requires("impact.entity", "impact.timer", "game.entities.game-claw-anchor", "game.entities.game-claw-shadow", "game.entities.game-claw", "game.entities.game-alien-anchor", "game.entities.game-alien", "game.entities.game-target-shadow", "game.entities.alien-head", "game.entities.game-alien-pickmesb", "game.entities.game-powerup-button", "game.entities.game-message", "game.entities.game-powerup-indicator", "game.entities.game-gameover-dialog", "game.entities.menu-play-again", "game.entities.menu-mainmenu", "game.entities.game-pause-dialog", "game.entities.game-pause-overlay").defines(function() {
    EntityAnchorController = ig.Entity.extend({
        name: "AnchorControl",
        size: { x: 336, y: 225 },
        zIndex: 2,
        app: {},
        viewAngle: 0.6,
        firstPick: !0,
        alienGenerateTimer: !1,
        gameTimer: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.setState("gameOver", !1), ig.game.sortEntitiesDeferred(), this.initInput(), ig.game.app.score.loadFirstGame(), ig.game.app.settings.setLevelParam(1), this.newPick(), ig.soundHandler.playSound(ig.soundHandler.SOUNDID.start))
        },
        initInput: function() {
            ig.input.unbindAll();
            ig.input.bind(ig.KEY.SPACE, "space");
            ig.input.bind(ig.KEY.B, "powerup");
            ig.input.initMouse();
            ig.input.bind(ig.KEY.MOUSE1, "click");
            ig.game.spawnEntity(EntityPointerSelector, 50, 50)
        },
        translatePos: function(b) {
            this.getCenter(this);
            var c = b.x - this.pos.x;
            b = b.y - this.pos.y;
            c -= this.size.x / 2;
            b *= this.viewAngle;
            var d = (this.size.y + b) / this.size.y;
            b = this.size.y * d + this.pos.y;
            c = c * d + this.pos.x + this.size.x / 2;
            return { x: c, y: b, y2: b / this.size.y + this.pos.y * d, scale: d / 1.6 }
        },
        clawPrevDir: "front",
        claw: !1,
        clawShadow: !1,
        clawAnchor: !1,
        newPick: function(b) {
            if (!this.getState("gameOver")) {
                this.setState("eventNextLevel", !1);
                b || (this.setState("puFreezAcitvated", !1), this.setState("puDoubleActivate", !1), this.setState("puRequestShuffleBind", !1));
                this.alienGenerateTimer = new ig.Timer(this.getSetting("alienGenerateTimeLength"));
                this.resetTL();
                this.setState("evHurryUpShown", !1);
                this.clawAnchor = ig.game.spawnEntity(EntityGameClawAnchor, this.pos.x + this.size.x / 2, this.pos.y + this.size.y - 8);
                this.claw = ig.game.spawnEntity(EntityGameClaw, -100, -100);
                this.triggerClawEntrance();
                this.generateAllAliens(this.getSetting("alienGridCurrent"), this.getSetting("alienGridCurrent"));
                for (var c = b = 0; c < this.aliens.length; c++) b += this.aliens[c].featured ? 1 : 0;
                this.setState("featuredAlienRemaining", b);
                this.setPuTimer()
            }
        },
        nextLevel: function(b) {
            if (!this.getState("gameOver")) {
                this.setState("eventNextLevel", !0);
                ig.game.app.pause.unset();
                var c = ig.game.getEntitiesByType(EntityMenuPause)[0];
                c.currentAnim = c.anims.idle1;
                this.removeClaw();
                this.removeAllAliens();
                this.killAllRunningPowerup();
                this.hidePowerup();
                this.pauseTL();
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.success2);
                ig.game.app.settings.level = b ? b - 1 : ig.game.app.settings.level;
                this.animMessage = ig.game.spawnEntity(EntityGameMessage, -100, 75, {
                    message: "Level" + (ig.game.app.settings.level + 1),
                    motionSpeed: [0.1, this.getSetting("eventNextLevelTimerLength"), 0.1],
                    motionXPos: [300, 340, 740],
                    messageAttr: { font: "35pt helsinki2", fillStyle: "white", textAlign: "center" },
                    useShadow: !0,
                    onKill: function() {
                        ig.game.app.settings.setLevelParam(ig.game.app.settings.level +
                            1);
                        ig.game.app.getAnchorController().newPick(!0);
                        ig.game.app.getAnchorController().setState("eventNextLevel", !1)
                    }
                });
                this.animMessage.animate()
            }
        },
        triggerClawEntrance: function() {
            var b = { x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y - 8 };
            this.clawAnchor.setCenter("both", b);
            b = this.translatePos(b);
            this.generateClawShadow(b);
            this.clawShadow.setCenter("both", b);
            this.claw.triggerEntrance(this.translatePos(this.clawAnchor.getCenter()))
        },
        removeClaw: function() {
            this.clawPrevDir = "front";
            this.claw && (this.claw.kill(), this.claw = !1);
            this.clawShadow && (this.clawShadow.kill(), this.clawShadow = !1);
            this.clawAnchor && (this.clawAnchor.kill(), this.clawAnchor = !1)
        },
        bindClaw: function() { this.getState().clawBined && this.clawAnchorPrespective && (this.getState().clawEntranceTriggered && !this.getState().clawMoveDown) && (this.claw.setCenter("x", this.clawAnchorPrespective.x), this.claw.pos.y = this.clawAnchorPrespective.y2 - this.claw.size.y + 100 * this.clawAnchorPrespective.scale, this.claw.currentAnim.scale.x = this.clawAnchorPrespective.scale, this.claw.currentAnim.scale.y = this.clawAnchorPrespective.scale, this.claw.currentAnim.scale.anchor = "bottom") },
        generateClawShadow: function(b) {
            this.clawShadow = ig.game.spawnEntity(EntityGameClawShadow, -100, -100);
            this.clawShadow.setCenter("both", b);
            this.clawShadow.anchor = this.clawAnchor;
            this.clawShadow.anchorController = this
        },
        bindClawShadow: function() { this.getState().clawShadowBined && this.clawAnchorPrespective && (this.clawShadow.currentAnim.scale.x = this.clawAnchorPrespective.scale, this.clawShadow.currentAnim.scale.y = this.clawAnchorPrespective.scale, this.clawShadow.setCenter("both", this.clawAnchorPrespective)) },
        stopClaw: function() {
            if (this.clawAnchor) {
                for (var b = this.clawAnchor.tweens.length - 1; 0 <= b; b--) this.clawAnchor.tweens[b].stop();
                this.setState("clawShadowBined", !1);
                this.setState("clawBined", !1)
            }
        },
        moveClaw: function(b) {
            if (!this.getState("gameOver") && !ig.game.app.pause.state && !this.getState("eventNextLevel")) {
                var c = this.getState("puFreezAcitvated") ? this.getSetting("puFreezSpeed") : this.getSetting().clawMoveSpeed;
                switch (b) {
                    case "back":
                        if (!this.getState().clawEntranceTriggered) break;
                        this.stopClaw();
                        this.setState("clawShadowBined", !0);
                        this.setState("clawBined", !0);
                        this.getState("puFreezAcitvated") && this.setState("puFreezOnLinearMove", !0);
                        c *= (this.clawAnchor.pos.y - this.pos.y) / (this.size.y - this.clawAnchor.size.y);
                        this.getSetting().prevClawDir = "back";
                        this.clawAnchor.tween({ pos: { y: this.pos.y } }, c, { onComplete: function() { this.moveClaw("front") }.bind(this) }).start();
                        break;
                    case "front":
                        if (!this.getState().clawEntranceTriggered) break;
                        this.stopClaw();
                        this.setState("clawShadowBined", !0);
                        this.setState("clawBined", !0);
                        this.getState("puFreezAcitvated") && this.setState("puFreezOnLinearMove", !0);
                        b = this.getBottomRightPos();
                        var d = this.clawAnchor.getBottomRightPos(),
                            c = c *= (b.y - d.y) / (this.size.y - this.clawAnchor.size.y);
                        this.getSetting().prevClawDir = "front";
                        this.clawAnchor.tween({ pos: { y: b.y - this.clawAnchor.size.y } }, c, { onComplete: function() { this.moveClaw("back") }.bind(this) }).start();
                        break;
                    case "left":
                        if (!this.getState().clawEntranceTriggered) break;
                        this.stopClaw();
                        this.setState("clawShadowBined", !0);
                        this.setState("clawBined", !0);
                        this.getState("puFreezAcitvated") && this.setState("puFreezOnLinearMove", !0);
                        c = c *= (this.clawAnchor.pos.x - this.pos.x) / (this.size.x - this.clawAnchor.size.x);
                        this.getSetting().prevClawDir = "left";
                        this.clawAnchor.tween({ pos: { x: this.pos.x } }, c, { onComplete: function() { this.moveClaw("right") }.bind(this) }).start();
                        break;
                    case "right":
                        if (!this.getState().clawEntranceTriggered) break;
                        this.stopClaw();
                        this.setState("clawShadowBined", !0);
                        this.setState("clawBined", !0);
                        this.getState("puFreezAcitvated") && this.setState("puFreezOnLinearMove", !0);
                        b = this.getBottomRightPos();
                        d = this.clawAnchor.getBottomRightPos();
                        c = c *= (b.x - d.x) / (this.size.x - this.clawAnchor.size.x);
                        this.getSetting().prevClawDir = "right";
                        this.clawAnchor.tween({ pos: { x: b.x - this.clawAnchor.size.x } }, c, { onComplete: function() { this.moveClaw("left") }.bind(this) }).start();
                        break;
                    case "pickDown":
                        if (this.getState("clawMoveDown") || this.getState("clawMoveUp")) break;
                        if (this.getState().alienPickUpBined) break;
                        if (!this.getState().clawEntranceTriggered) break;
                        this.pauseTL();
                        this.stopClaw();
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.pick);
                        c = this.translatePos(this.clawAnchor.getCenter());
                        this.clawShadow.currentAnim.scale.x = c.scale;
                        this.clawShadow.currentAnim.scale.y = c.scale;
                        this.clawShadow.setCenter("both", c);
                        this.claw.setCenter("x", c.x);
                        this.claw.pos.y = c.y2 - this.claw.size.y + 100 * c.scale;
                        this.claw.currentAnim.scale.x = c.scale;
                        this.claw.currentAnim.scale.y = c.scale;
                        this.claw.currentAnim.scale.anchor = "bottom";
                        this.setState("clawMoveDown", !0);
                        this.setState("puFreezOnLinearMove", !1);
                        this.claw.pickUpPos = this.claw.pos.y;
                        this.claw.pickDownPos = this.claw.pos.y + this.clawShadow.pos.y - this.claw.getBottomRightPos().y - this.getSetting().alienPickUpHeight * this.clawAnchorPrespective.scale;
                        this.setState("alienPickUpCheckBegin", !0);
                        this.checkAlienAndClawZindex();
                        this.claw.tween({ pos: { y: this.claw.pickDownPos } }, this.getSetting().clawPickDownSpeed, {
                            onComplete: function() {
                                this.setState("requestClawMoveUp", !0);
                                this.setState("requestReadyPickUpAlien", this.alienPicked);
                                this.setState("alienPickUpCheckBegin", !1)
                            }.bind(this)
                        }).start();
                        break;
                    case "pickUp":
                        this.stopClaw();
                        this.setState("clawMoveUp", !0);
                        this.setState("puFreezOnLinearMove", !1);
                        ig.soundHandler.playSound(ig.soundHandler.SOUNDID.pick);
                        c = this.alienPicked ? this.claw.pickUpPos - this.alienPicked.alien.getBottomRightPos().y : this.claw.pickUpPos;
                        b = this.alienPicked ? this.getSetting().clawPickUpSpeed + 1 : this.getSetting().clawPickUpSpeed;
                        if (this.alienPicked) {
                            this.alienPicked.featured && ig.soundHandler.playSound(ig.soundHandler.SOUNDID.success);
                            this.clawShadow.kill();
                            for (d = 0; d < this.alienPicked.alien.tweens.length; d++) this.alienPicked.alien.tweens[d].stop();
                            this.alienPicked.alien.pos.y = this.alienPicked.alien.oriPosY
                        }
                        this.claw.tween({ pos: { y: c } }, b, {
                            onComplete: function() {
                                this.getState("puFreezAcitvated") || this.resumeTL();
                                this.alienPicked ? (this.disposePickedAlien(), ig.game.app.score.current < ig.game.app.settings.pointNeeded || 0 < this.getState("featuredAlienRemaining") ? this.triggerClawEntrance() : this.nextLevel()) : (this.setState("clawMoveDown", !1), this.setState("clawMoveUp", !1), this.moveClaw(this.getSetting("prevClawDir")), this.claw.zIndex = 50, ig.game.sortEntitiesDeferred())
                            }.bind(this)
                        }).start()
                }
            }
        },
        moveClawNext: function() {
            if (!this.getState("gameOver") && !ig.game.app.pause.state && !this.getState("eventNextLevel") && !this.getState("clawMoveDown") && !this.getState("clawMoveUp")) switch (ig.soundHandler.playSound(ig.soundHandler.SOUNDID.turn), this.getSetting().prevClawDir) {
                case "back":
                    this.moveClaw("right");
                    break;
                case "right":
                    this.moveClaw("front");
                    break;
                case "front":
                    this.moveClaw("left");
                    break;
                case "left":
                    this.moveClaw("back")
            }
        },
        checkAlienAndClawZindex: function() {
            for (var b = this.claw.zIndex, c = this.aliens.length - 1; 0 <= c; c--) this.aliens[c].shadow.getCenter().y > this.clawShadow.getCenter().y && (b = b > this.aliens[c].alien.zIndex ? this.aliens[c].alien.zIndex - 1 : b);
            this.claw.zIndex = b;
            ig.game.sortEntitiesDeferred()
        },
        aliens: [],
        getAlienGrid: function(b, c, d) {
            for (var e = [], g = this.size.x / b, l = this.size.y / c, q = 0, n = 1; n <= c; n++) {
                q++;
                for (var s = 1; s <= b; s++) {
                    var t = {
                        x: s * g -
                            g / 2 + this.pos.x,
                        y: n * l - l / 2 + this.pos.y,
                        rowIndex: n,
                        colIndex: s,
                        skipRow: q
                    };
                    if (!d && 0 < this.aliens.length) {
                        for (var x = !1, j = this.aliens.length - 1; 0 <= j; j--)
                            if (this.aliens[j].grid.x == t.x && this.aliens[j].grid.y == t.y) { x = !0; break }
                        if (x) continue
                    }
                    e.push(t)
                }
            }
            return e
        },
        getDefinedAlienGrid: function(b, c) {
            var d = [];
            if (0 < b.length && c instanceof Array)
                for (var e = 0; e < b.length; e++)
                    for (var g = 0; g < c.length; g++) b[e].rowIndex == c[g].row && b[e].colIndex == c[g].col && d.push(b[e]);
            return d
        },
        generateAlien: function(b, c) {
            if (1 > this.aliens.length) var d = 1;
            else
                for (var e = d = 0; e < this.aliens.length; e++) d = this.aliens[e].alienId > this.aliens[e] ? this.aliens[e].alienId + 1 : d;
            var g = "abcdef".split("");
            if (c)
                if (c.include) l = c.type;
                else {
                    e = g.indexOf(c.type);
                    g.splice(e, 1);
                    var l = ig.game.app.randomizeArray(g)
                }
            else l = ig.game.app.randomizeArray(g);
            g = l == ig.game.app.profile.alienType ? !0 : !1;
            if (1 > this.aliens.length) d = 0;
            else
                for (e = 0; e < this.aliens.length; e++) d = d < this.aliens[e].alienId ? this.aliens[e].alienId : d;
            d++;
            var e = this.translatePos(b),
                q = ig.game.spawnEntity(EntityGameAlienAnchor, b.x, b.y, { alienId: d, featured: g });
            q.setCenter("both", b);
            var n = c && c.isBonus ? !0 : !1,
                l = ig.game.spawnEntity(EntityGameAlien, 0, 0, { anchor: q, anchorController: this, rowIndex: b.rowIndex, skipRow: b.skipRow, alienId: d, prespective: e, alienType: l, isBonus: n }),
                s = ig.game.spawnEntity(EntityGameTargetShadow, e.x, e.y, { anchor: q, anchorController: this });
            s.setCenter("both", e);
            s.currentAnim.scale.x = e.scale;
            s.currentAnim.scale.y = e.scale;
            s.setCenter(e);
            q.alien = l;
            q.shadow = s;
            this.aliens.push({ featured: g, grid: { x: b.x, y: b.y }, gridIndex: { row: b.rowIndex, col: b.colIndex }, alienId: d, anchor: q, alien: l, shadow: s, isBonus: n });
            ig.game.sortEntitiesDeferred();
            return l
        },
        generateAllAliens: function(b, c) {
            if (b || c) {
                for (var d = this.aliens.length - 1; 0 <= d; d--) this.aliens[d].alien.kill(), this.aliens[d].anchor.kill();
                this.aliens = [];
                for (var e = this.getAlienGrid(b, c), g = this.getSetting("shuffledAlienLayout"), g = this.getDefinedAlienGrid(e, g), d = g.length - 1; 0 <= d; d--) this.generateAlien(g[d], { include: !0, type: ig.game.app.profile.alienType });
                e = this.getAlienGrid(b, c);
                for (d = e.length - 1; 0 <= d; d--) this.generateAlien(e[d], { include: !1, type: ig.game.app.profile.alienType })
            }
        },
        getAlien: function(b) { for (var c = !1, d = this.aliens.length - 1; 0 <= d; d--) this.aliens[d].alienId && this.aliens[d].alienId == b && (c = this.aliens[d]); return c },
        alienPicked: !1,
        missPickedAlienId: !1,
        alienPickedDistance: 0,
        removeAllAliens: function() {
            for (var b = 0; b < this.aliens.length; b++) this.aliens[b].anchor.kill(), this.aliens[b].shadow.kill(), this.aliens[b].alien.kill();
            this.aliens = [];
            this.disposePickedAlien();
            this.hidePickMe()
        },
        prepareAlienPickUp: function(b) {
            this.alienPicked = b = this.getAlien(b);
            b.point = b.featured ? this.getSetting("featuredPoint") : b.isBonus ? this.getSetting("bonusPoint") : this.getSetting("normalPoint");
            b.point *= this.getState("puDoubleActivate") ? 2 : 1;
            this.alienPickedDistance = this.claw.getBottomRightPos().y - b.alien.pos.y + this.getSetting().alienBinedHeight;
            this.claw.currentAnim = this.claw.anims.pick;
            this.claw.currentAnim.scale.x = this.clawAnchorPrespective.scale;
            this.claw.currentAnim.scale.y = this.clawAnchorPrespective.scale;
            this.claw.currentAnim.scale.anchor = "bottom"
        },
        alienPickingUp: function() {
            if (this.getState().alienPickUpBined && this.alienPicked) {
                this.alienPicked.anchor.setCenter("both", this.clawAnchor.getCenter());
                var b = this.translatePos(this.alienPicked.anchor.pos);
                this.alienPicked.alien.setCenter("x", this.claw.getCenter().x);
                this.alienPicked.shadow.setCenter("both", this.clawShadow.getCenter());
                this.alienPicked.alien.currentAnim = this.alienPicked.alien.anims.pickup;
                this.alienPicked.alien.pos.y = this.claw.getBottomRightPos().y + this.alienPickedDistance * b.scale;
                this.alienPicked.alien.currentAnim.scale.x = b.scale;
                this.alienPicked.alien.currentAnim.scale.y = b.scale;
                this.alienPicked.alien.currentAnim.scale.anchor = "top"
            }
        },
        disposePickedAlien: function() {
            if (this.alienPicked) {
                ig.game.app.score.addCurrent(this.alienPicked.point, this.alienPicked.alien.alienType);
                this.alienPicked.alien.isBonus && this.hidePickMe();
                this.alienPicked.featured && this.setState("featuredAlienRemaining", this.getState("featuredAlienRemaining") - 1);
                for (var b = this.aliens.length - 1; 0 <= b; b--) this.aliens[b].alienId == this.alienPicked.alienId && (this.aliens[b].alien.kill(), this.aliens[b].anchor.kill(), this.aliens[b].shadow.kill(), this.aliens.splice(b, 1));
                this.alienPicked = !1
            }
        },
        evBoardSetPicked: function() {
            if (this.missPickedAlienId || this.alienPicked) {
                this.eventAlienHead && this.eventAlienHead.kill();
                this.setState("evBoardPickedTimer", new ig.Timer(this.getSetting("eventIamPickedTimerLength")));
                var b = "normal",
                    c = "normal";
                this.alienPicked ? this.alienPicked.alien.alienType == ig.game.app.profile.alienType && (b = "happy", c = "featured") : (b = "sad", c = "miss");
                this.setState("alienPickStatus", c);
                this.eventAlienHead = ig.game.spawnEntity(EntityAlienHead, -100, -100, { type: this.missPickedAlienId ? this.getAlien(this.missPickedAlienId).alien.alienType : this.alienPicked.alien.alienType, state: b, as: "eventBoard" });
                this.eventAlienHead.setCenter("both", { x: 240, y: 458 });
                this.missPickedAlienId = !1
            }
        },
        pickMeIndicator: !1,
        showPickMe: function(b) {
            b = ig.game.spawnEntity(EntityAlienHead, 0, 250, { type: b, as: "pickme", zIndex: 99 });
            var c = ig.game.spawnEntity(EntityGameAlienPickmesb, 5, 240);
            this.pickMeIndicator = { head: b, sb: c }
        },
        hidePickMe: function() { this.pickMeIndicator && (this.pickMeIndicator.head.kill(), this.pickMeIndicator.sb.kill(), this.pickMeIndicator = !1) },
        showPowerup: function(b) { this.puButton || (5 == ig.game.app.tutorial.index && ig.game.app.tutorial.activate(), this.puButton = ig.game.spawnEntity(EntityGamePowerupButton, this.getSetting("puButtonPos").x2, this.getSetting("puButtonPos").y, { buttonType: b }), this.puButton.tween({ pos: { x: this.getSetting("puButtonPos").x } }, 0.1, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("puButtonReady", !0) }.bind(this) }).start()) },
        hidePowerup: function() {
            this.puButton && this.puButton.tween({ pos: { x: this.getSetting("puButtonPos").x2 } }, 0.1, {
                easing: ig.Tween.Easing.Sinusoidal.EaseInOut,
                onComplete: function() {
                    this.puButton.kill();
                    this.puButton = !1;
                    this.setState("puButtonReady", !1)
                }.bind(this)
            }).start()
        },
        setPuTimer: function() { this.getState("puAvailable") && (this.showPowerup(this.getState("puAvailable")[0]), ig.game.app.state.puAvailable.splice(0, 1), 1 > this.getState("puAvailable").length ? (this.setState("puAvailable", !1), this.setState("puTimer", !1)) : this.getState("puTimer") ? ig.game.app.state.puTimer.reset() : this.setState("puTimer", new ig.Timer(this.getState("puTimerLength")))) },
        freezTimer: !1,
        doubleTimer: !1,
        shuffleCenterTimer: !1,
        shuffleSpreadTimer: !1,
        triggerPowerup: function(b) {
            switch (b) {
                case "freez":
                    if (this.getState("clawMoveDown") || this.getState("clawMoveUp")) break;
                    if (this.getState().alienPickUpBined) break;
                    if (!this.getState().clawEntranceTriggered) break;
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.puentrance);
                    this.addNextPuTimer();
                    this.freezTimer = new ig.Timer(this.getSetting("puFreezDuration"));
                    this.pauseTL();
                    this.setState("puButtonReady", !1);
                    this.setState("puFreezAcitvated", !0);
                    this.hidePowerup();
                    this.moveClaw(this.getSetting().prevClawDir);
                    this.animMessage = ig.game.spawnEntity(EntityGameMessage, -100, 65, { message: _STRINGS.Game["pu-freeze"], motionSpeed: [0.1, this.getSetting("puFreezDuration") - 0.1, 0.1], motionXPos: [160, 480, 740], showCenterGauge: !0, messageAttr: { font: "12pt helsinki2", fillStyle: "#FFFFFF", textAlign: "center" }, gaugeAttr: { gaugeSize: 10, gaugeColor: "#FFFFFF", gaugeDistance: -55 }, animateEntities: [{ entity: ig.game.spawnEntity(EntityGamePowerupIndicator, 0, 0, { type: "freez" }), params: { relPosX: 0, relPosY: -33 } }] });
                    this.animMessage.animate();
                    break;
                case "double":
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.puentrance);
                    this.addNextPuTimer();
                    this.doubleTimer = new ig.Timer(this.getSetting("puDoubleDuration"));
                    this.setState("puButtonReady", !1);
                    this.setState("puDoubleActivate", !0);
                    this.hidePowerup();
                    this.animMessage = ig.game.spawnEntity(EntityGameMessage, -100, 65, { message: _STRINGS.Game["pu-double"], motionSpeed: [0.1, this.getSetting("puDoubleDuration") - 0.1, 0.1], motionXPos: [160, 480, 740], showCenterGauge: !0, messageAttr: { font: "12pt helsinki2", fillStyle: "#FFFFFF", textAlign: "center" }, gaugeAttr: { gaugeSize: 10, gaugeColor: "#FFFFFF", gaugeDistance: -55 }, animateEntities: [{ entity: ig.game.spawnEntity(EntityGamePowerupIndicator, 0, 0, { type: "double" }), params: { relPosX: 0, relPosY: -33 } }] });
                    this.animMessage.animate();
                    break;
                case "addtime":
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.puentrance);
                    this.addNextPuTimer();
                    this.addTL(this.getSetting("puAddTimeLength"));
                    this.hidePowerup();
                    this.animMessage = ig.game.spawnEntity(EntityGameMessage, -100, 65, { message: _STRINGS.Game["pu-addtime"], motionSpeed: [0.1, 2, 0.1], motionXPos: [300, 340, 740], messageAttr: { font: "12pt helsinki2", fillStyle: "#FFFFFF", textAlign: "center" }, animateEntities: [{ entity: ig.game.spawnEntity(EntityGamePowerupIndicator, 0, 0, { type: "addtime" }), params: { relPosX: 0, relPosY: -33 } }] });
                    this.animMessage.animate();
                    break;
                case "shuffle":
                    if (this.getState("clawMoveDown") || this.getState("clawMoveUp")) break;
                    if (this.getState().alienPickUpBined) break;
                    if (!this.getState().clawEntranceTriggered) break;
                    ig.soundHandler.playSound(ig.soundHandler.SOUNDID.puentrance);
                    this.addNextPuTimer();
                    this.hidePowerup();
                    this.animMessage = ig.game.spawnEntity(EntityGameMessage, -100, 65, { message: _STRINGS.Game["pu-shuffle"], motionSpeed: [0.1, 2, 0.1], motionXPos: [300, 340, 740], messageAttr: { font: "12pt helsinki2", fillStyle: "#FFFFFF", textAlign: "center" }, animateEntities: [{ entity: ig.game.spawnEntity(EntityGamePowerupIndicator, 0, 0, { type: "shuffle" }), params: { relPosX: 0, relPosY: -33 } }] });
                    this.animMessage.animate();
                    this.shuffleAliens()
            }
        },
        addNextPuTimer: function() { this.getState("puTimer") && 0 < this.getState("puTimer").delta() && this.setState("puTimer", new ig.Timer(3)) },
        killAllRunningPowerup: function() {
            for (var b = ig.game.getEntitiesByType(EntityGameMessage), c = 0; c < b.length; c++) b[c].kill();
            this.unFreez();
            this.unDouble()
        },
        unFreez: function() {
            this.setState("puFreezAcitvated", !1);
            this.resumeTL();
            this.freezTimer = !1;
            this.getState("puFreezOnLinearMove") && !this.getState("eventNextLevel") && (this.moveClaw(this.getSetting().prevClawDir), this.setState("puFreezOnLinearMove", !1))
        },
        unDouble: function() {
            this.setState("puDoubleActivate", !1);
            this.doubleTimer = !1
        },
        shuffleAliens: function() {
            if (this.aliens && 0 < this.aliens.length) {
                this.setState("puRequestShuffleBind", !0);
                this.shuffleCenterTimer = new ig.Timer(this.getSetting("puShuffleAnimTimerLength"));
                for (var b = this.getCenter(), c = 0; c < this.aliens.length; c++) {
                    this.aliens[c].alien.stopJumping();
                    this.aliens[c].alien.stopJump = !0;
                    var d = this.aliens[c].anchor.getPosByCenter(b);
                    this.aliens[c].anchor.tween({ pos: { x: d.x, y: d.y } }, this.getSetting("puShuffleAnimTimerLength") - 0.2, { easing: ig.Tween.Easing.Quartic.EaseOut }).start()
                }
            }
        },
        spreadShuffleAlien: function() {
            this.setState("puRequestShuffleBind", !0);
            this.shuffleSpreadTimer = new ig.Timer(this.getSetting("puShuffleAnimTimerLength"));
            for (var b = this.getAlienGrid(this.getSetting("alienGridCurrent"), this.getSetting("alienGridCurrent"), !0), c = 0; c < this.aliens.length; c++) this.aliens[c].featured && (this.aliens[c].grid.x = b[b.length - 1].x, this.aliens[c].grid.y = b[b.length - 1].y, this.aliens[c].gridIndex.col = b[b.length - 1].colIndex, this.aliens[c].gridIndex.row = b[b.length - 1].rowIndex, this.aliens[c].alien.rowIndex = b[b.length - 1].rowIndex, this.aliens[c].alien.skipRow = b[b.length - 1].skipRow, b.pop());
            for (c = 0; c < this.aliens.length; c++) this.aliens[c].isBonus && (this.aliens[c].grid.x = b[b.length - 1].x, this.aliens[c].grid.y = b[b.length - 1].y, this.aliens[c].gridIndex.col = b[b.length - 1].colIndex, this.aliens[c].gridIndex.row = b[b.length - 1].rowIndex, this.aliens[c].alien.rowIndex = b[b.length - 1].rowIndex, this.aliens[c].alien.skipRow = b[b.length - 1].skipRow, b.pop());
            for (c = 0; c < this.aliens.length; c++)
                if (!this.aliens[c].isBonus && !this.aliens[c].featured) {
                    var d = this.getAndRemoveRandomGrid(b);
                    this.aliens[c].grid.x = d.x;
                    this.aliens[c].grid.y = d.y;
                    this.aliens[c].gridIndex.col = d.colIndex;
                    this.aliens[c].gridIndex.row = d.rowIndex;
                    this.aliens[c].alien.rowIndex = d.rowIndex;
                    this.aliens[c].alien.skipRow = d.skipRow
                }
            for (c = 0; c < this.aliens.length; c++) this.aliens[c].alien.zIndex = this.aliens[c].alien.zIndexBase + this.aliens[c].alien.rowIndex + this.aliens[c].alien.skipRow, ig.game.sortEntitiesDeferred(), this.shuffleSpreadTween(this.aliens[c])
        },
        shuffleSpreadTween: function(b) {
            var c = b.anchor.getPosByCenter(b.grid);
            b.anchor.tween({ pos: c }, this.getSetting("puShuffleAnimTimerLength") - 0.2, { easing: ig.Tween.Easing.Quartic.EaseOut, onComplete: function() { this.isBonus && (this.alien.stopJumping(), this.alien.stopJump = !1, this.alien.jumping()) }.bind(b) }).start()
        },
        getAndRemoveRandomGrid: function(b) {
            var c = !1;
            if (b instanceof Array && 0 < b.length) {
                for (var c = ig.game.app.randomizeArray(b), d = 0; d < b.length && !(b[d].colIndex == c.colIndex && b[d].rowIndex == c.rowIndex); d++);
                b.splice(d, 1)
            }
            return c
        },
        countTime: function() {
            if (!this.getState("pausedTLCounter") && !this.getState("gameOver")) {
                var b = ig.game.app.getTimeCountDown(this.getState("gameStartTime")),
                    c = 60 * parseInt(b.m) + parseInt(b.s);
                this.setState("TLRLength", c);
                this.setState("TLValue", b);
                this.setState("puTimeAddition", !1);
                b || this.triggerGameOver()
            }
        },
        addMissingTimeCount: function() {
            if (this.getState("pausedTLCounter")) {
                var b = ig.game.app.getMinutesBetweenDates(this.getState("pausedTLCounter"), new Date);
                this.setState("gameStartTime", ig.game.app.addMinutes(new Date(this.getState("gameStartTime")), b))
            }
        },
        pauseTL: function() { this.getState("pausedTLCounter") || this.setState("pausedTLCounter", new Date) },
        resumeTL: function() {
            if (!this.getState("puFreezAcitvated") && (this.addMissingTimeCount(), this.setState("pausedTLCounter", !1), this.getState("puTimeAddition"))) {
                var b = ig.game.app.getTimeCountDown(this.getState("gameStartTime")),
                    c = 60 * parseInt(b.m) + parseInt(b.s),
                    d = 60 * parseInt(b.m) + parseInt(b.s);
                this.setState("TLRLength", d);
                this.setState("TLValue", b);
                this.setState("TLLength", c)
            }
        },
        resetTL: function() {
            this.setState("pausedTLCounter", !1);
            this.setState("gameStartTime", ig.game.app.addMinutes(new Date, this.getSetting("gameTimerLength")));
            var b = ig.game.app.getTimeCountDown(this.getState("gameStartTime")),
                b = 60 * parseInt(b.m) + parseInt(b.s);
            this.setState("TLLength", b)
        },
        addTL: function(b) {
            this.setState("gameStartTime", ig.game.app.addMinutes(new Date(this.getState("gameStartTime")), b));
            if (this.getState("pausedTLCounter")) this.setState("puTimeAddition", !0);
            else {
                b = ig.game.app.getTimeCountDown(this.getState("gameStartTime"));
                var c = 60 * parseInt(b.m) + parseInt(b.s),
                    d = 60 * parseInt(b.m) + parseInt(b.s);
                this.setState("TLRLength", d);
                this.setState("TLValue", b);
                this.setState("TLLength", c)
            }
        },
        showPauseDialog: function() {
            this.pauseDialog = ig.game.spawnEntity(EntityGamePauseDialog, ig.system.width / 2, ig.system.height / 2 - 30, { centerRelPos: { sfx: { x: -50, y: -25 }, music: { x: -50, y: 45 } } });
            this.pauseDialog.quickHide();
            this.pauseDialog.show()
        },
        showPauseOverlay: function() { this.pauseOverlay = ig.game.spawnEntity(EntityGamePauseOverlay, 0, 0) },
        triggerGameOver: function() {
            this.setState("gameOver", !0);
            this.removeAllAliens();
            this.removeClaw();
            this.killAllRunningPowerup();
            this.alienGenerateTimer = !1;
            this.setState("evBoardPickedTimer", !1);
            this.setState("puTimer", !1);
            this.shuffleSpreadTimer = this.shuffleCenterTimer = !1;
            this.hidePowerup();
            ig.game.getEntitiesByType(EntityGameButtonPick)[0].kill();
            ig.game.getEntitiesByType(EntityMenuPause)[0].kill();
            this.goDialog = ig.game.spawnEntity(EntityGameGameoverDialog);
            this.goPA = ig.game.spawnEntity(EntityMenuPlayAgain, 0, 0, { frame: this.goDialog, relPos: { x: 230, y: 25 } });
            this.goMA = ig.game.spawnEntity(EntityMenuMainmenu, 0, 0, { frame: this.goDialog, relPos: { x: 230, y: 75 } });
            ig.game.app.service.saveBestScore(ig.game.app.score.currentAlien);
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.loose)
        },
        update: function() {
            this.parent();
            if (!ig.global.wm) {
                this.clawAnchorPrespective = this.clawAnchor ? this.translatePos(this.clawAnchor.getCenter()) : !1;
                this.bindClawShadow();
                this.bindClaw();
                this.alienPickingUp();
                this.countTime();
                !this.getState("evHurryUpShown") && !this.getState("eventNextLevel") && (this.getState("TLValue") && 0 == parseInt(this.getState("TLValue").m) && parseInt(this.getState("TLValue").s) < this.getSetting("gameTimerEdge")) && (this.setState("evHurryUpShown", !0), this.animMessage = ig.game.spawnEntity(EntityGameMessage, -100, 150, { message: _STRINGS.Game["event-hurryup"], motionSpeed: [0.1, this.getSetting("eventHurryUpTimerLength"), 0.1], motionXPos: [300, 340, 740], messageAttr: { font: "35pt helsinki2", fillStyle: "white", textAlign: "center" }, useShadow: !0 }), this.animMessage.animate());
                this.getState().requestClawMoveUp && (this.moveClaw("pickUp"), this.setState("requestClawMoveUp", !1));
                this.getState().requestReadyPickUpAlien && (this.setState("alienPickUpBined", !0), this.setState("requestReadyPickUpAlien", !1));
                if (this.alienGenerateTimer && 0 < this.alienGenerateTimer.delta() && !this.getState("eventNextLevel")) {
                    for (var b = 0; b < this.aliens.length; b++)
                        if (this.aliens[b].alien.isBonus) { this.alienGenerateTimer.reset(); return }
                    b = this.getAlienGrid(this.getSetting("alienGridCurrent"), this.getSetting("alienGridCurrent"));
                    0 < b.length && !this.getState("puRequestShuffleBind") && (b = this.generateAlien(ig.game.app.randomizeArray(b), { include: !1, type: ig.game.app.profile.alienType, isBonus: !0 }), this.showPickMe(b.alienType));
                    this.alienGenerateTimer.reset()
                }
                this.getState("evBoardPickedTimer") && 0 < this.getState("evBoardPickedTimer").delta() && (this.setState("evBoardPickedTimer", !1), this.setState("alienPicked", !1), this.eventAlienHead.kill());
                ig.input.pressed("space") && !this.getState().clawMoveDown && !this.getState().clawMoveUp && this.moveClawNext();
                ig.input.pressed("powerup") && ig.game.getEntitiesByType(EntityGamePowerupButton)[0] && this.triggerPowerup(ig.game.getEntitiesByType(EntityGamePowerupButton)[0].buttonType);
                this.freezTimer && 0 < this.freezTimer.delta() && this.unFreez();
                this.doubleTimer && 0 < this.doubleTimer.delta() && this.unDouble();
                if (this.getState("puRequestShuffleBind"))
                    for (b = 0; b < this.aliens.length; b++) this.aliens[b].alien.bindAnchor(), this.aliens[b].shadow.bindAnchor();
                this.shuffleCenterTimer && 0 < this.shuffleCenterTimer.delta() && (this.spreadShuffleAlien(), this.shuffleCenterTimer = !1);
                this.shuffleSpreadTimer && 0 < this.shuffleSpreadTimer.delta() && (this.setState("puRequestShuffleBind", !1), this.shuffleSpreadTimer = !1);
                !this.getState("eventNextLevel") && !this.getState("puButtonReady") && (this.getState("puTimer") && 0 < this.getState("puTimer").delta()) && this.setPuTimer();
                (1 == ig.game.app.tutorial.index || 2 == ig.game.app.tutorial.index || 3 == ig.game.app.tutorial.index) && !ig.game.app.tutorial.showing && ig.game.app.tutorial.activate();
                ig.game.app.tutorial.active && !ig.game.app.tutorial.showing && (this.tutorialDialog = ig.game.spawnEntity(EntityMenuTutorialDialog, ig.system.width / 2, ig.system.height / 2, { tutorialIndex: ig.game.app.tutorial.get(), buttons: !1, resume: !0 }), this.tutorialDialog.quickHide(), this.tutorialDialog.show(), ig.game.app.pause.set(!1), ig.game.app.tutorial.showing = !0)
            }
        },
        generateClickAnim: function(b, c, d) {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.mainbutton);
            b.activeTween[1] = b.tween({ pos: d }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.postGenerateClickAnim() }.bind(b) });
            b.activeTween[0] = b.tween({ pos: c }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut });
            b.activeTween[0].chain(b.activeTween[1]);
            b.activeTween[0].start()
        },
        testPixels: [],
        testGetPixels: function() {
            for (var b = [], c = this.size.x, d = this.size.y, e = 0; e < d; e += 5)
                for (var g = 0; g < c; g += 5) b.push({ x: g, y: e });
            return b
        },
        testDrawDot: function(b, c, d, e) {
            b.strokeStyle = e ? e : "#FF0000";
            b.strokeRect(c, d, 1, 1)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-event-board").requires("impact.entity", "impact.timer").defines(function() {
    EntityGameEventBoard = ig.Entity.extend({
        name: "GameEventBoard",
        size: { x: 287, y: 50 },
        zIndex: 50,
        animSheet: new ig.AnimationSheet("media/graphics/game/game-event-board.png", 287, 50),
        barFill: new ig.Image("media/graphics/game/game-event-board-progress.png"),
        centerY: 0,
        centerX: 0,
        freezedTimeCountdown: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            this.centerY = this.pos.y + this.size.y / 2;
            this.centerX = this.pos.x + this.size.x / 2;
            ig.global.wm || (this.progPos = { x: this.pos.x + 38, y: this.pos.y + 4, x2: this.getBottomRightPos().x - 38, y2: this.getBottomRightPos().y }, ig.game.sortEntitiesDeferred())
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                var b = this.getState("TLRLength"),
                    c = this.getState("TLLength"),
                    b = (c - b) / c;
                0 <= b && (b = (0 === b ? 0.01 : b) * (this.progPos.x2 - this.progPos.x), this.barFill.draw(this.progPos.x, this.progPos.y, 0, 0, b, 46));
                this.getState("evBoardPickedTimer") && 0 > this.getState("evBoardPickedTimer").delta() ?
                    "miss" != this.getState("alienPickStatus") ? (ig.system.context.font = "10pt helsinki2", ig.system.context.fillStyle = "#FFFFFF", ig.system.context.textAlign = "center", ig.system.context.fillText("featured" == this.getState("alienPickStatus") ? _STRINGS.Game["event-featuredpicked"] : _STRINGS.Game["event-normalpicked"], this.centerX + 15, this.centerY - 5), ig.system.context.font = "14pt helsinki2", ig.system.context.fillStyle = "cyan", ig.system.context.fillText(_STRINGS.Game["get-point"] + ig.game.app.getAnchorController().alienPicked.point, this.centerX + 10, this.centerY + 15)) : (ig.system.context.font = "14pt helsinki2", ig.system.context.fillStyle = "#FFFFFF", ig.system.context.textAlign = "center", ig.system.context.fillText(_STRINGS.Game["event-misspicked"], this.centerX + 10, this.centerY + 5)) : (b = this.getState("TLValue"), ig.system.context.font = "14pt helsinki2", ig.system.context.fillStyle = "#FFFFFF", ig.system.context.textAlign = "center", b = this.getState("eventNextLevel") ? _STRINGS.Game["level-complete"] : b ? _STRINGS.Game["event-timeleft"] + " : " + b.m + ":" +
                        b.s : _STRINGS.Game["event-timeout"], ig.system.context.fillText(b, this.centerX, this.centerY + 10))
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-overlay-clawmove").requires("impact.entity").defines(function() {
    EntityGameOverlayClawmove = ig.Entity.extend({
        name: "GameOverlayClawmove",
        size: { x: 640, y: 480 },
        zIndex: 50,
        type: ig.Entity.TYPE.B,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        clicked: function() { ig.game.app.getAnchorController().moveClawNext() },
        released: function() {}
    })
});
ig.baked = !0;
ig.module("game.entities.game-score-board").requires("impact.entity").defines(function() {
    EntityGameScoreBoard = ig.Entity.extend({
        name: "GameScoreBoard",
        size: { x: 124, y: 54 },
        zIndex: 52,
        animSheet: new ig.AnimationSheet("media/graphics/game/score-board.png", 124, 54),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            this.center = { x: this.pos.x + this.size.x / 2, y: this.pos.y + this.size.y / 2 };
            ig.global.wm || (this.progPos = { x: this.pos.x, y: this.pos.y + 6, x2: this.getBottomRightPos().x - 9, y2: this.getBottomRightPos().y - 26 }, ig.game.sortEntitiesDeferred())
        },
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                var b = this.progPos.x2;
                ig.game.app.score.current < ig.game.app.settings.pointNeeded && (b *= ig.game.app.score.progress);
                ig.system.context.fillStyle = "#03450A";
                ig.system.context.beginPath();
                ig.system.context.lineTo(this.progPos.x, this.progPos.y);
                ig.system.context.lineTo(b, this.progPos.y);
                ig.system.context.lineTo(b, this.progPos.y2);
                ig.system.context.lineTo(this.progPos.x, this.progPos.y2);
                ig.system.context.closePath();
                ig.system.context.fill();
                ig.system.context.font = "10pt helsinki2";
                ig.system.context.fillStyle = "#75F1FF";
                ig.system.context.textAlign = "center";
                ig.system.context.fillText(_STRINGS.Game.Score + " : " + ig.game.app.score.current, this.center.x - 5, this.center.y - 5)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-pause").requires("impact.entity").defines(function() {
    EntityMenuPause = ig.Entity.extend({
        name: "MenuPause",
        size: { x: 38, y: 38 },
        zIndex: 100,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-pause.png", 38, 38),
        type: ig.Entity.TYPE.B,
        holding: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle1", 0.1, [0]);
            this.addAnim("hover1", 0.1, [1]);
            this.addAnim("idle2", 0.1, [2]);
            this.addAnim("hover2", 0.1, [3]);
            this.currentAnim = this.anims.idle1;
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        ready: function() {
            this.parent();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        clicked: function() {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.altbutton);
            this.currentAnim = ig.game.app.pause.state ? this.anims.hover2 : this.anims.hover1;
            this.holding = !0
        },
        released: function() { ig.game.app.pause.state ? (ig.game.app.pause.unset(), this.currentAnim = this.anims.idle1) : (ig.game.app.pause.set(!0), this.currentAnim = this.anims.idle2) },
        update: function() {
            this.parent();
            ig.input.released("click") && this.holding && (this.released(), this.pointer.letGo(), this.holding = !1)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-alien-featured").requires("impact.entity", "game.entities.alien-head").defines(function() {
    EntityGameAlienFeatured = EntityAlienHead.extend({
        name: "GameAlienFeatured",
        zIndex: 100,
        init: function(b, c, d) {
            ig.global.wm || (this.type = ig.game.app.profile.alienType);
            this.parent(b, c, d);
            ig.global.wm || (this.currentAnim.scale.x = 0.7, this.currentAnim.scale.y = 0.7, ig.game.sortEntitiesDeferred())
        },
        resize: function() {},
        draw: function() {
            this.parent();
            if (!ig.global.wm) {
                var b = this.getCenter();
                ig.system.context.font = "12pt helsinki2";
                ig.system.context.fillStyle = "white";
                ig.system.context.textAlign = "center";
                ig.system.context.fillText(_STRINGS.Game["sign-targetalien"], b.x, this.pos.y - 5);
                ig.system.context.fillStyle = "cyan";
                ig.system.context.fillText(_STRINGS.Game["alienname-" + ig.game.app.profile.alienType], b.x, this.pos.y + 15);
                ig.system.context.fillText(ig.game.app.settings.pointNeeded + " pts", b.x, this.getBottomRightPos().y - 5);
                ig.system.context.font = "18pt helsinki2";
                ig.system.context.fillText("level " + ig.game.app.settings.level, b.x, this.pos.y - 25)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.game-button-pick").requires("impact.entity", "plugins.tween").defines(function() {
    EntityGameButtonPick = ig.Entity.extend({
        name: "GameButtonPick",
        size: { x: 101, y: 80 },
        zIndex: 100,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button-pick.png", 101, 80),
        type: ig.Entity.TYPE.B,
        holding: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("clicked", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (ig.game.sortEntitiesDeferred(), this.isclicked = !1)
        },
        ready: function() {
            this.parent();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        clicked: function() { ig.game.app.pause.state || (console.log("picking down"), this.currentAnim = this.anims.clicked, ig.game.app.getAnchorController().moveClaw("pickDown"), this.holding = !0) },
        released: function() { ig.game.app.pause.state || (this.currentAnim = this.anims.idle) },
        update: function() {
            this.parent();
            ig.input.released("click") && this.holding && (this.released(), this.pointer.letGo(), this.holding = !1)
        }
    })
});
ig.baked = !0;
ig.module("game.levels.game-desktop").requires("impact.image", "game.entities.background-desktop", "game.entities.game-plane", "game.entities.anchor-test", "game.entities.anchor-controller", "game.entities.game-event-board", "game.entities.game-overlay-clawmove", "game.entities.game-score-board", "game.entities.menu-pause", "game.entities.game-alien-featured", "game.entities.game-button-pick").defines(function() {
    LevelGameDesktop = {
        entities: [{ type: "EntityBackgroundDesktop", x: 0, y: 0 }, { type: "EntityGamePlane", x: 31, y: 296 }, { type: "EntityAnchorTest", x: 324, y: 168 }, { type: "EntityAnchorController", x: 152, y: 71 }, { type: "EntityGameEventBoard", x: 175, y: 432 }, { type: "EntityGameOverlayClawmove", x: 0, y: 0 }, { type: "EntityGameScoreBoard", x: 0, y: 172 }, { type: "EntityMenuPause", x: 564, y: 32 }, { type: "EntityGameAlienFeatured", x: 8, y: 52 }, { type: "EntityGameButtonPick", x: 540, y: 260 }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/640-480.jpg",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        }]
    };
    LevelGameDesktopResources = [new ig.Image("media/graphics/backgrounds/desktop/640-480.jpg")]
});
ig.baked = !0;
ig.module("game.entities.background-desktop-mainmenu").requires("impact.entity").defines(function() {
    EntityBackgroundDesktopMainmenu = ig.Entity.extend({
        name: "BackgroundDesktopMainmenu",
        size: { x: 640, y: 480 },
        zIndex: 0,
        animSheet: new ig.AnimationSheet("media/graphics/backgrounds/desktop/mainmenu-640-480.jpg", 640, 480),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || ig.game.sortEntitiesDeferred()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-play").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuPlay = ig.Entity.extend({
        name: "MenuPlay",
        size: { x: 72, y: 38 },
        zIndex: 1,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-play.png", 72, 38),
        type: ig.Entity.TYPE.B,
        activeTween: !1,
        oriPosY: 0,
        isHidden: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("hover", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            this.oriPosY = this.pos.y;
            ig.global.wm || (ig.game.sortEntitiesDeferred(), this.oriPosX = this.pos.x, this.hiddenPosX = ig.system.width + this.size.x)
        },
        clickReleased: function() { ig.game.app.getMenuController().profileDialog.frame.isHidden ? this.getState("isMainButtonAnimated") || (this.setState("isMainButtonAnimated", !0), this.currentAnim = this.anims.hover, this.activeTween = [], ig.game.app.getMenuController().generateClickAnim(this, { y: this.pos.y - 5 }, { y: this.oriPosY })) : this.setState("isMainButtonAnimated", !1) },
        postGenerateClickAnim: function() {
            this.currentAnim = this.anims.idle;
            ig.game.app.getMenuController().showProfileDialog()
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { x: this.oriPosX } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { x: this.hiddenPosX } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { for (var b = this.tweens.length - 1; 0 <= b; b--) this.tweens[b].stop() }.bind(this) }).start()) }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-begin").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuBegin = ig.Entity.extend({
        name: "MenuBegin",
        size: { x: 72, y: 38 },
        zIndex: 4,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-play.png", 72, 38),
        type: ig.Entity.TYPE.B,
        activeTween: !1,
        frame: !1,
        isHidden: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("hover", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (ig.game.sortEntitiesDeferred(), this.setCenter("x", this.frame.getCenter().x), this.pos.x -= 18, this.pos.y = this.frame.getBottomRightPos().y - 20, this.oriPosY = this.pos.y, this.hiddenPosY = -this.getBottomRightPos().y, ig.game.sortEntitiesDeferred())
        },
        clickReleased: function() { this.getState("isMainButtonAnimated") || (this.setState("isMainButtonAnimated", !0), this.currentAnim = this.anims.hover, this.activeTween = [], ig.game.app.getMenuController().generateClickAnim(this, { y: this.pos.y - 5 }, { y: this.oriPosY })) },
        postGenerateClickAnim: function() {
            this.currentAnim = this.anims.idle;
            var b = ig.game.app.getMenuController().profileDialog.nameChar;
            ig.game.app.profile.setNewProfile(b[0].charNumber, b[1].charNumber, b[2].charNumber);
            ig.game.director.jumpTo(LevelGameDesktop)
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        quickHide: function() { this.pos.y = this.hiddenPosY }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-options").requires("impact.entity").defines(function() {
    EntityMenuOptions = ig.Entity.extend({
        name: "MenuOptions",
        size: { x: 91, y: 37 },
        zIndex: 10,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-options.png", 91, 37),
        type: ig.Entity.TYPE.B,
        activeTween: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("hover", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.oriPosY = this.pos.y, ig.game.sortEntitiesDeferred())
        },
        clickReleased: function() { ig.game.app.getMenuController().optionDialog.frame.isHidden ? this.getState("isMainButtonAnimated") || (this.setState("isMainButtonAnimated", !0), this.currentAnim = this.anims.hover, this.activeTween = [], ig.game.app.getMenuController().generateClickAnim(this, { y: this.pos.y - 5 }, { y: this.oriPosY })) : this.setState("isMainButtonAnimated", !1) },
        postGenerateClickAnim: function() {
            this.currentAnim = this.anims.idle;
            ig.game.app.getMenuController().showOptionDialog()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-highscore").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuHighscore = ig.Entity.extend({
        name: "MenuHighscore",
        size: { x: 106, y: 37 },
        zIndex: 10,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-highscore.png", 106, 37),
        type: ig.Entity.TYPE.B,
        activeTween: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("hover", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (ig.game.sortEntitiesDeferred(), this.oriPosY = this.pos.y)
        },
        clickReleased: function() { ig.game.app.getMenuController().highscoreDialog.frame.isHidden ? this.getState("isMainButtonAnimated") || (this.setState("isMainButtonAnimated", !0), this.currentAnim = this.anims.hover, this.activeTween = [], ig.game.app.getMenuController().generateClickAnim(this, { y: this.pos.y - 5 }, { y: this.oriPosY })) : this.setState("isMainButtonAnimated", !1) },
        postGenerateClickAnim: function() {
            this.currentAnim = this.anims.idle;
            ig.game.app.getMenuController().showHighscoreDialog()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-tutorial").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuTutorial = ig.Entity.extend({
        name: "MenuTutorial",
        size: { x: 106, y: 37 },
        zIndex: 10,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-tutorial.png", 106, 37),
        type: ig.Entity.TYPE.B,
        activeTween: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("hover", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.oriPosY = this.pos.y, ig.game.sortEntitiesDeferred())
        },
        clickReleased: function() { ig.game.app.getMenuController().tutorialDialog.isHidden ? this.getState("isMainButtonAnimated") || (this.setState("isMainButtonAnimated", !0), this.currentAnim = this.anims.hover, this.activeTween = [], ig.game.app.getMenuController().generateClickAnim(this, { y: this.pos.y - 5 }, { y: this.oriPosY })) : this.setState("isMainButtonAnimated", !1) },
        postGenerateClickAnim: function() {
            this.currentAnim = this.anims.idle;
            ig.game.app.getMenuController().showTutorialDialog()
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-select-namechar").requires("impact.entity", "plugins.tween", "impact.timer").defines(function() {
    EntityMenuSelectNamechar = ig.Entity.extend({
        name: "MenuSelectNamechar",
        size: { x: 24, y: 27 },
        zIndex: 4,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button-select.png", 24, 27),
        type: ig.Entity.TYPE.B,
        selectType: "down",
        oriPosY: 0,
        isHidden: !0,
        relCenterPos: { x: 0, y: 0 },
        charIndex: 0,
        changeCharTimer: !1,
        directSelect: !1,
        selectSpeed: 0,
        holding: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "down" == this.selectType ? (this.addAnim("pressed", 0.1, [0]), this.addAnim("idle", 0.1, [1])) : "up" == this.selectType && (this.addAnim("pressed", 0.1, [2]), this.addAnim("idle", 0.1, [3]));
            this.currentAnim = this.anims.idle;
            this.changeCharTimer = new ig.Timer(this.getSetting("changeCharNameTimerLength"));
            ig.global.wm || (this.setCenter("both", this.frame.getCenter()), this.pos.x += this.relCenterPos.x, this.pos.y += this.relCenterPos.y, this.oriPosY = this.pos.y, this.hiddenPosY = -this.getBottomRightPos().y)
        },
        ready: function() {
            this.parent();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        clicked: function() { this.holding || (this.currentAnim = this.anims.pressed, this.directSelect = !0, this.selectSpeed = this.getSetting("changeCharNameTimerLength"), this.changeCharTimer = new ig.Timer(this.selectSpeed), this.holding = !0) },
        clicking: function() {
            if (0 < this.changeCharTimer.delta() || this.directSelect && this.holding) {
                ig.soundHandler.playSound(ig.soundHandler.SOUNDID.altbutton);
                switch (this.selectType) {
                    case "up":
                        ig.game.app.getMenuController().stepNameCharNumber(this.charIndex, -1);
                        break;
                    case "down":
                        ig.game.app.getMenuController().stepNameCharNumber(this.charIndex, 1)
                }
                this.selectSpeed -= this.getSetting("changeCharNameTimerAccle");
                this.changeCharTimer.set(this.selectSpeed);
                this.directSelect = !1;
                ig.game.app.getMenuController().setProfileByCharIndex()
            }
        },
        released: function() { this.currentAnim = this.anims.idle },
        update: function() {
            this.parent();
            ig.input.released("click") && this.holding && (this.released(), this.pointer.letGo(), this.holding = !1)
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        quickHide: function() { this.pos.y = this.hiddenPosY }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-name-char").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuNameChar = ig.Entity.extend({
        name: "MenuNameChar",
        size: { x: 2, y: 2 },
        zIndex: 5,
        charIndex: 0,
        charNumber: 0,
        isHidden: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            ig.global.wm || (this.setCenter("both", this.frame.getCenter()), this.pos.x += this.relCenterPos.x, this.pos.y += this.relCenterPos.y, this.oriPosY = this.pos.y, this.hiddenPosY = -this.getBottomRightPos().y, ig.game.sortEntitiesDeferred())
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        quickHide: function() { this.pos.y = this.hiddenPosY },
        draw: function() {
            this.parent();
            var b = this.getCenter();
            ig.system.context.font = "20pt helsinki2";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(this.getChar(this.charNumber), b.x, b.y)
        },
        getChar: function(b) {
            switch (b) {
                case 0:
                    return "a";
                case 1:
                    return "b";
                case 2:
                    return "c";
                case 3:
                    return "d";
                case 4:
                    return "e";
                case 5:
                    return "f";
                case 6:
                    return "g";
                case 7:
                    return "h";
                case 8:
                    return "i";
                case 9:
                    return "j";
                case 10:
                    return "k";
                case 11:
                    return "l";
                case 12:
                    return "m";
                case 13:
                    return "n";
                case 14:
                    return "o";
                case 15:
                    return "p";
                case 16:
                    return "q";
                case 17:
                    return "r";
                case 18:
                    return "s";
                case 19:
                    return "t";
                case 20:
                    return "u";
                case 21:
                    return "v";
                case 22:
                    return "w";
                case 23:
                    return "x";
                case 24:
                    return "y";
                case 25:
                    return "z"
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-option-dialog").requires("impact.entity", "game.entities.menu-option-slidebar", "game.entities.menu-option-slider", "plugins.tween").defines(function() {
    EntityMenuOptionDialog = ig.Entity.extend({
        name: "MenuOptionDialog",
        size: { x: 340, y: 257 },
        zIndex: 3,
        animSheet: new ig.AnimationSheet("media/graphics/game/dialog-option.png", 340, 257),
        oriPosY: 0,
        hiddenPosY: 0,
        isHidden: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.setCenter("both", { x: ig.system.width / 2, y: ig.system.height / 2 }), this.oriPosY = this.pos.y, this.hiddenPosY = -this.size.y, this.centerRelPos = { sfx: { x: -50, y: -30 }, music: { x: -50, y: 40 } }, this.bars = [], this.bars.push(ig.game.spawnEntity(EntityMenuOptionSlidebar, 0, 0, { slideType: "sfx", frame: this, relPos: { x: this.centerRelPos.sfx.x + 30, y: this.centerRelPos.sfx.y - 13 } })), this.bars.push(ig.game.spawnEntity(EntityMenuOptionSlidebar, 0, 0, {
                slideType: "music",
                frame: this,
                relPos: {
                    x: this.centerRelPos.music.x + 30,
                    y: this.centerRelPos.music.y -
                        13
                }
            })), this.sliders = [], this.sliders.push(ig.game.spawnEntity(EntityMenuOptionSlider, 0, 0, { slideType: "sfx", edge: { min: this.bars[0].pos.x, max: this.bars[0].pos.x + this.bars[0].size.x }, frame: this, relPos: { x: this.centerRelPos.sfx.x + 30, y: this.centerRelPos.sfx.y - 6 } })), this.sliders.push(ig.game.spawnEntity(EntityMenuOptionSlider, 0, 0, { slideType: "music", edge: { min: this.bars[1].pos.x, max: this.bars[1].pos.x + this.bars[1].size.x }, frame: this, relPos: { x: this.centerRelPos.music.x + 30, y: this.centerRelPos.music.y - 6 } })), ig.game.sortEntitiesDeferred())
        },
        quickHide: function() {
            this.pos.y = this.hiddenPosY;
            this.isHidden = !0;
            for (var b = 0; b < this.bars.length; b++) this.bars[b].quickHide();
            for (b = 0; b < this.sliders.length; b++) this.sliders[b].quickHide()
        },
        show: function() {
            if (this.isHidden) {
                for (var b = 0; b < this.bars.length; b++) this.bars[b].show();
                for (b = 0; b < this.sliders.length; b++) this.sliders[b].show();
                this.isHidden = !1;
                this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("isMainButtonAnimated", !1) }.bind(this) }).start()
            }
        },
        hide: function() {
            if (!this.isHidden) {
                for (var b = 0; b < this.bars.length; b++) this.bars[b].hide();
                for (b = 0; b < this.sliders.length; b++) this.sliders[b].hide();
                this.isHidden = !0;
                this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()
            }
        },
        draw: function() {
            this.parent();
            this.center = this.getCenter();
            ig.system.context.font = "20pt helsinki2";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(_STRINGS.Game["menu-options"], this.getCenter().x -
                60, this.pos.y + 20);
            ig.system.context.textAlign = "right";
            ig.system.context.fillText(_STRINGS.Game.sfx, this.center.x + this.centerRelPos.sfx.x, this.center.y + this.centerRelPos.sfx.y);
            ig.system.context.fillText(_STRINGS.Game.music, this.center.x + this.centerRelPos.music.x, this.center.y + this.centerRelPos.music.y)
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-highscore-dialog").requires("impact.entity", "plugins.tween", "game.entities.alien-head").defines(function() {
    EntityMenuHighscoreDialog = ig.Entity.extend({
        name: "MenuHighscoreDialog",
        size: { x: 398, y: 361 },
        zIndex: 3,
        animSheet: new ig.AnimationSheet("media/graphics/game/dialog-profile.png", 398, 361),
        oriPosY: 0,
        hiddenPosY: 0,
        isHidden: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.setCenter("both", {
                x: ig.system.width /
                    2,
                y: ig.system.height / 2
            }), this.oriPosY = this.pos.y, this.hiddenPosY = -this.size.y, this.rankList = ig.game.app.profile.getRankList(5), this.createAlienHeads(), ig.game.sortEntitiesDeferred())
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("isMainButtonAnimated", !1) }.bind(this) }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        quickHide: function() { this.pos.y = this.hiddenPosY },
        createAlienHeads: function() { for (var b = 0; b < this.rankList.length; b++) this.rankList[b].alienHead = ig.game.spawnEntity(EntityAlienHead, 0, 0, { type: this.rankList[b].alienType, as: "gameover", zIndex: 4 }) },
        draw: function() {
            this.parent();
            ig.system.context.font = "15pt helsinki2";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText("high score", this.getCenter().x - 15, this.pos.y - 10);
            for (var b = this.pos.y + 70, c = this.pos.x +
                    60, d = 0; d < this.rankList.length; d++) ig.system.context.fillStyle = "#FFFFFF", ig.system.context.textAlign = "center", this.rankList[d], ig.system.context.fillText(this.rankList[d].rank, c, b), this.rankList[d].alienHead.setCenter("both", { x: c + 50, y: b - 10 }), ig.system.context.fillText(ig.game.app.getCharByIndex(this.rankList[d].initial[0]) + ig.game.app.getCharByIndex(this.rankList[d].initial[1]) + ig.game.app.getCharByIndex(this.rankList[d].initial[2]), c + 110, b), ig.system.context.fillStyle = "#020929", ig.system.context.beginPath(), ig.system.context.lineTo(c + 150, b - 6 - 15), ig.system.context.lineTo(c + 250, b - 6 - 15), ig.system.context.lineTo(c + 250, b - 6 + 15), ig.system.context.lineTo(c + 150, b - 6 + 15), ig.system.context.closePath(), ig.system.context.fill(), ig.system.context.fillStyle = "#FFFFFF", ig.system.context.textAlign = "right", ig.system.context.fillText(this.rankList[d].score, c + 245, b), b += 55
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-profile-dialog").requires("impact.entity", "plugins.tween").defines(function() {
    EntityMenuProfileDialog = ig.Entity.extend({
        name: "MenuProfileDialog",
        size: { x: 398, y: 361 },
        zIndex: 3,
        animSheet: new ig.AnimationSheet("media/graphics/game/dialog-profile.png", 398, 361),
        oriPosY: 0,
        hiddenPosY: 0,
        isHidden: !0,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (ig.game.sortEntitiesDeferred(), this.setCenter("both", {
                x: ig.system.width /
                    2,
                y: ig.system.height / 2
            }), this.oriPosY = this.pos.y, this.hiddenPosY = -this.size.y)
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("isMainButtonAnimated", !1) }.bind(this) }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        quickHide: function() { this.pos.y = this.hiddenPosY },
        draw: function() {
            this.parent();
            ig.system.context.font = "15pt helsinki2";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(_STRINGS.Game["menu-profile-enterinitial"], this.getCenter().x - 20, this.pos.y - 10);
            var b = ig.game.app.profile;
            this.writeRank(b);
            this.writeTotalScore(b);
            this.writeAlienScore()
        },
        writeRank: function(b) {
            b = b.colls[b.index] ? b.colls[b.index].rank : 0;
            ig.system.context.font = "13pt helsinki2";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(_STRINGS.Game["menu-profile-rank"], this.getCenter().x - 130, this.pos.y + 70);
            ig.system.context.fillStyle = "cyan";
            ig.system.context.fillText(b, this.getCenter().x - 130, this.pos.y + 90)
        },
        writeTotalScore: function(b) {
            b = b.colls[b.index] ? b.colls[b.index].score : 0;
            ig.system.context.font = "13pt helsinki2";
            ig.system.context.fillStyle = "#FFFFFF";
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(_STRINGS.Game["menu-profile-total"], this.getCenter().x + 95, this.pos.y + 60);
            ig.system.context.fillText(_STRINGS.Game.Score, this.getCenter().x + 95, this.pos.y +
                80);
            ig.system.context.fillStyle = "cyan";
            ig.system.context.fillText(b, this.getCenter().x + 95, this.pos.y + 100)
        },
        writeAlienScore: function() {
            for (var b = ig.game.app.getMenuController().profileDialog.aliens, c, d, e, g, l, q, n, s, t = 0; t < b.length; t++) {
                var x = b[t].getCenter();
                s = "alienname-" + b[t].type;
                switch (b[t].scorePos) {
                    case "b":
                        e = x.x + 15;
                        d = x.y + 55;
                        c = 14;
                        g = "left";
                        l = e - 5;
                        q = d;
                        n = "right";
                        break;
                    case "rb":
                        e = x.x + 32;
                        d = x.y + 32;
                        c = 10;
                        g = "left";
                        l = e;
                        q = d - 16;
                        n = g;
                        break;
                    case "rt":
                        e = x.x + 24;
                        d = x.y - 15;
                        c = 10;
                        g = "left";
                        l = e;
                        q = d - 15;
                        n = g;
                        break;
                    case "t":
                        e = x.x;
                        d = x.y - 22;
                        c = 9;
                        g = "center";
                        l = e;
                        q = d - 12;
                        n = g;
                        break;
                    case "lt":
                        e = x.x - 24;
                        d = x.y - 15;
                        c = 10;
                        g = "right";
                        l = e;
                        q = d - 15;
                        n = g;
                        break;
                    case "lb":
                        e = x.x - 32, d = x.y + 32, c = 10, g = "right", l = e, q = d - 16, n = g
                }
                ig.system.context.font = c + "pt helsinki2";
                ig.system.context.fillStyle = "cyan";
                ig.system.context.textAlign = g;
                ig.system.context.fillText(ig.game.app.profile.getAlienScore(b[t].type), e, d);
                ig.system.context.font = c - 1 + "pt helsinki2";
                ig.system.context.fillStyle = "white";
                ig.system.context.textAlign = n;
                ig.system.context.fillText(_STRINGS.Game[s], l, q)
            }
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-tutorial-dialog").requires("impact.entity").defines(function() {
    EntityMenuTutorialDialog = ig.Entity.extend({
        name: "MenuTutorialDialog",
        size: { x: 398, y: 361 },
        zIndex: 105,
        animSheet: new ig.AnimationSheet("media/graphics/game/dialog-profile.png", 398, 361),
        oriPosY: 0,
        hiddenPosY: 0,
        isHidden: !0,
        tutorialIndex: 0,
        tutorialImage: !1,
        message: "",
        buttonCaptions: "start rule aliens claw pickup powerup".split(" "),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.setCenter("both", this.pos), this.oriPosY = this.pos.y, this.hiddenPosY = -this.size.y, this.setTutorialIndex(this.tutorialIndex), this.buttons && (this.setTutorialButtons(), this.buttons[this.tutorialIndex].currentAnim = this.buttons[this.tutorialIndex].anims.active), this.resume && this.setResumeButton(), ig.game.sortEntitiesDeferred())
        },
        quickHide: function() {
            this.pos.y = this.hiddenPosY;
            this.isHidden = !0
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.setState("isMainButtonAnimated", !1) }.bind(this) }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        wrapText: function(b, c, d, e, g, l) {
            c = c.split(" ");
            for (var q = "", n = 0; n < c.length; n++) {
                var s = q + c[n] + " ";
                b.measureText(s).width > g && 0 < n ? (b.fillText(q, d, e), q = c[n] + " ", e += l) : q = s
            }
            b.fillText(q, d, e)
        },
        draw: function() {
            this.parent();
            if (this.requestKill) {
                if (this.buttons && 0 < this.buttons.length)
                    for (var b = 0; b < this.buttons.length; b++) this.buttons[b].kill();
                this.tutorialImage && this.tutorialImage.kill();
                this.resumeButton && this.resumeButton.kill();
                ig.game.app.pause.unset();
                this.kill()
            } else this.center = this.getCenter(), ig.system.context.font = "12pt helsinki2", ig.system.context.fillStyle = "#FFFFFF", ig.system.context.textAlign = "left", this.wrapText(ig.system.context, this.message, this.center.x - 170, this.center.y, this.center.x, 20)
        },
        setTutorialIndex: function(b) {
            this.tutorialIndex = b;
            this.tutorialImage && this.tutorialImage.kill();
            this.tutorialImage = ig.game.spawnEntity(EntityTutorialImage, 0, 0, { imageIndex: b, frame: this, relPos: { x: -15, y: -85 } });
            this.message = "";
            switch (b) {
                case 0:
                    this.message = _STRINGS.Game.tutorial0;
                    break;
                case 1:
                    this.message = _STRINGS.Game.tutorial1;
                    break;
                case 2:
                    this.message = _STRINGS.Game.tutorial2;
                    break;
                case 3:
                    this.message = _STRINGS.Game.tutorial3;
                    break;
                case 4:
                    this.message = _STRINGS.Game.tutorial4;
                    break;
                case 5:
                    this.message = _STRINGS.Game.tutorial5
            }
        },
        setTutorialButtons: function() { this.buttons = []; for (var b = { x: -93, y: 15 }, c = 0; c < this.buttonCaptions.length; c++) 0 < c && (b.y += 38), this.buttons.push(ig.game.spawnEntity(EntityTutorialButton, 0, 0, { frame: this, buttonCaption: this.buttonCaptions[c], relPos: b, buttonIndex: c })) },
        setResumeButton: function() {
            this.directNext = 1 == ig.game.app.tutorial.index || 2 == ig.game.app.tutorial.index ? !0 : !1;
            this.resumeButton = ig.game.spawnEntity(EntityResumeButton, 0, 0, { frame: this, relPos: { x: 102, y: 90 }, directNext: this.directNext })
        }
    });
    EntityTutorialImage = ig.Entity.extend({
        name: "TutorialImage",
        size: { x: 314, y: 122 },
        zIndex: 106,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/tutorial-main.png", 314, 122),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [this.imageIndex]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        update: function() {
            this.parent();
            var b = this.frame.getCenter();
            this.setCenter("both", { x: b.x + this.relPos.x, y: b.y + this.relPos.y })
        }
    });
    EntityTutorialButton = ig.Entity.extend({
        name: "TutorialButton",
        size: { x: 106, y: 37 },
        zIndex: 104,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/tutorial-button.png", 106, 37),
        buttonCaption: "",
        type: ig.Entity.TYPE.B,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.addAnim("active", 0.1, [1]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        update: function() {
            this.parent();
            this.pos = { x: this.frame.pos.x + this.relPos.x, y: this.frame.pos.y + this.relPos.y }
        },
        draw: function() {
            this.parent();
            ig.system.context.font = "12pt helsinki2";
            ig.system.context.fillStyle = "black";
            ig.system.context.textAlign = "left";
            ig.system.context.fillText(this.buttonCaption, this.pos.x + 10, this.pos.y + 23)
        },
        clickReleased: function() {
            for (var b = 0; b < this.frame.buttons.length; b++) this.frame.buttons[b].currentAnim = this.frame.buttons[b].anims.idle;
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.altbutton);
            this.frame.setTutorialIndex(this.buttonIndex);
            this.currentAnim = this.anims.active
        }
    });
    EntityResumeButton = ig.Entity.extend({
        name: "ResumeButton",
        size: { x: 38, y: 38 },
        zIndex: 106,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/menu-pause.png", 38, 38),
        type: ig.Entity.TYPE.B,
        directNext: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [2]);
            this.addAnim("hover", 0.1, [3]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || ig.game.sortEntitiesDeferred()
        },
        update: function() {
            this.parent();
            var b = this.frame.getCenter();
            this.pos = { x: b.x + this.relPos.x, y: b.y + this.relPos.y }
        },
        clicked: function() {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.altbutton);
            this.currentAnim = this.anims.hover
        },
        released: function() {
            ig.game.app.tutorial.active = !1;
            ig.game.app.tutorial.showing = !1;
            ig.game.app.tutorial.next(this.directNext);
            this.frame.requestKill = !0
        }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-select-alien").requires("impact.entity").defines(function() {
    EntityMenuSelectAlien = ig.Entity.extend({
        name: "MenuSelectAlien",
        size: { x: 24, y: 27 },
        zIndex: 4,
        animSheet: new ig.AnimationSheet("media/graphics/sprites/button-select.png", 24, 27),
        type: ig.Entity.TYPE.B,
        selectType: "right",
        isHidden: !0,
        holding: !1,
        init: function(b, c, d) {
            this.parent(b, c, d);
            "right" == this.selectType ? (this.addAnim("pressed", 0.1, [4]), this.addAnim("idle", 0.1, [5])) : "left" == this.selectType && (this.addAnim("pressed", 0.1, [6]), this.addAnim("idle", 0.1, [7]));
            this.currentAnim = this.anims.idle;
            ig.global.wm || (this.setCenter("both", this.frame.getCenter()), this.pos.x += this.relCenterPos.x, this.pos.y += this.relCenterPos.y, this.oriPosY = this.pos.y, this.hiddenPosY = -this.getBottomRightPos().y, ig.game.sortEntitiesDeferred())
        },
        ready: function() {
            this.parent();
            this.pointer = ig.game.getEntitiesByType(EntityPointer)[0]
        },
        update: function() {
            this.parent();
            ig.input.released("click") && this.holding && (this.released(), this.pointer.letGo(), this.holding = !1)
        },
        clicked: function() { this.holding || (this.currentAnim = this.anims.pressed, this.holding = !0) },
        released: function() {
            this.currentAnim = this.anims.idle;
            var b = ig.game.app.getIndexByChar(ig.game.app.profile.alienType);
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.altbutton);
            switch (this.selectType) {
                case "right":
                    var c = 5 < b + 1 ? 0 : b + 1;
                    break;
                case "left":
                    c = 0 > b - 1 ? 5 : b - 1
            }
            b = ig.game.app.getCharByIndex(c);
            ig.game.app.profile.alienType = b;
            ig.game.app.getMenuController().arrangeProfileAlienSelectedPos(b)
        },
        show: function() { this.isHidden && (this.isHidden = !1, this.tween({ pos: { y: this.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: this.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) },
        quickHide: function() { this.pos.y = this.hiddenPosY }
    })
});
ig.baked = !0;
ig.module("game.entities.menu-main-controller").requires("impact.entity", "plugins.tween", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.menu-play", "game.entities.menu-begin", "game.entities.menu-options", "game.entities.menu-highscore", "game.entities.menu-tutorial", "game.entities.buttons.button-more-games", "game.entities.menu-select-namechar", "game.entities.menu-name-char", "game.entities.menu-option-dialog", "game.entities.menu-highscore-dialog", "game.entities.menu-profile-dialog", "game.entities.menu-tutorial-dialog", "game.entities.menu-select-alien").defines(function() {
    EntityMenuMainController = ig.Entity.extend({
        name: "MainController",
        size: { x: 500, y: 406 },
        zIndex: 1,
        isHidden: !1,
        animSheet: new ig.AnimationSheet("media/graphics/game/big-title.png", 500, 406),
        init: function(b, c, d) {
            this.parent(b, c, d);
            this.addAnim("idle", 0.1, [0]);
            this.currentAnim = this.anims.idle;
            ig.global.wm || (ig.game.app.service.initLoad(), ig.game.sortEntitiesDeferred(), this.initInput(), this.initMainButtons(), this.initProfileDialog(), this.initOptionDialog(), this.initHighscoreDialog(), this.initTutorialDialog())
        },
        initInput: function() { ig.global.wm || (ig.input.unbindAll(), ig.input.initMouse(), ig.input.bind(ig.KEY.MOUSE1, "click"), ig.game.spawnEntity(EntityPointerSelector, 50, 50)) },
        hideAllDialog: function() {
            this.hide();
            this.hideProfileDialog();
            this.hideOptionDialog();
            this.hideHighscoreDialog();
            this.hideTutorialDialog()
        },
        mainButtons: {},
        initMainButtons: function() {
            this.setState("isMainButtonAnimated", !1);
            this.mainButtons.play = ig.game.spawnEntity(EntityMenuPlay, 525, 120);
            this.mainButtons.options = ig.game.spawnEntity(EntityMenuOptions, 525, 168);
            this.mainButtons.highscore = ig.game.spawnEntity(EntityMenuHighscore, 525, 214);
            this.mainButtons.tutorial = ig.game.spawnEntity(EntityMenuTutorial, 525, 260);
            ig.game.spawnEntity(EntityButtonMoreGames, 525, 306, { div_layer_name: "layer_moregames_mainmenu" })
        },
        profileDialog: {},
        initProfileDialog: function() {
            if (!ig.global.wm) {
                this.profileDialog.frame = ig.game.spawnEntity(EntityMenuProfileDialog, 0, 0);
                this.profileDialog.buttonBegin = ig.game.spawnEntity(EntityMenuBegin, 0, 0, { frame: this.profileDialog.frame });
                this.spawnNameCharSelector("up", 0, -70, -140);
                this.spawnNameCharSelector("down", 0, -70, -90);
                this.spawnNameCharSelector("up", 1, -20, -140);
                this.spawnNameCharSelector("down", 1, -20, -90);
                this.spawnNameCharSelector("up", 2, 30, -140);
                this.spawnNameCharSelector("down", 2, 30, -90);
                var b = ig.game.app.profile,
                    b = b.colls[b.index] ? b.colls[b.index].initial : [0, 0, 0];
                this.spawnNameChar(0, -70, -105, b[0]);
                this.spawnNameChar(1, -20, -105, b[1]);
                this.spawnNameChar(2, 30, -105, b[2]);
                this.spawnProfileAlienSelector("left", -78, 80);
                this.spawnProfileAlienSelector("right", 42, 80);
                this.spawnProfileAlienHead("a");
                this.spawnProfileAlienHead("b");
                this.spawnProfileAlienHead("c");
                this.spawnProfileAlienHead("d");
                this.spawnProfileAlienHead("e");
                this.spawnProfileAlienHead("f");
                this.setProfileByCharIndex();
                this.profileDialog.frame.quickHide();
                this.profileDialog.buttonBegin.quickHide();
                for (b = this.profileDialog.nameCharSelector.length - 1; 0 <= b; b--) this.profileDialog.nameCharSelector[b].quickHide();
                for (b = this.profileDialog.nameChar.length -
                    1; 0 <= b; b--) this.profileDialog.nameChar[b].quickHide();
                for (b = this.profileDialog.alienSelector.length - 1; 0 <= b; b--) this.profileDialog.alienSelector[b].quickHide();
                for (b = this.profileDialog.aliens.length - 1; 0 <= b; b--) this.profileDialog.aliens[b].quickHide()
            }
        },
        showProfileDialog: function() {
            if (this.profileDialog.frame.isHidden) {
                this.hideAllDialog();
                this.profileDialog.frame.show();
                this.profileDialog.buttonBegin.show();
                for (var b = this.profileDialog.nameCharSelector.length - 1; 0 <= b; b--) this.profileDialog.nameCharSelector[b].show();
                for (b = this.profileDialog.nameChar.length - 1; 0 <= b; b--) this.profileDialog.nameChar[b].show();
                for (b = this.profileDialog.alienSelector.length - 1; 0 <= b; b--) this.profileDialog.alienSelector[b].show();
                for (b = this.profileDialog.aliens.length - 1; 0 <= b; b--) this.profileDialog.aliens[b].show();
                this.mainButtons.play.hide()
            }
        },
        hideProfileDialog: function() {
            if (!this.profileDialog.frame.isHidden) {
                this.profileDialog.frame.hide();
                this.profileDialog.buttonBegin.hide();
                for (var b = this.profileDialog.nameCharSelector.length - 1; 0 <= b; b--) this.profileDialog.nameCharSelector[b].hide();
                for (b = this.profileDialog.nameChar.length - 1; 0 <= b; b--) this.profileDialog.nameChar[b].hide();
                for (b = this.profileDialog.alienSelector.length - 1; 0 <= b; b--) this.profileDialog.alienSelector[b].hide();
                for (b = this.profileDialog.aliens.length - 1; 0 <= b; b--) this.profileDialog.aliens[b].hide();
                this.mainButtons.play.show()
            }
        },
        spawnNameCharSelector: function(b, c, d, e) {
            this.profileDialog.nameCharSelector || (this.profileDialog.nameCharSelector = []);
            this.profileDialog.nameCharSelector.push(ig.game.spawnEntity(EntityMenuSelectNamechar, 0, 0, { frame: this.profileDialog.frame, selectType: b, charIndex: c, relCenterPos: { x: d, y: e } }))
        },
        spawnNameChar: function(b, c, d, e) {
            this.profileDialog.nameChar || (this.profileDialog.nameChar = []);
            this.profileDialog.nameChar.push(ig.game.spawnEntity(EntityMenuNameChar, 0, 0, { frame: this.profileDialog.frame, charIndex: b, relCenterPos: { x: c, y: d }, charNumber: !e ? 0 : e }))
        },
        stepNameCharNumber: function(b, c) { if (this.profileDialog.nameChar[b]) { var d = this.profileDialog.nameChar[b].charNumber + c; - 1 < d && 26 > d && (this.profileDialog.nameChar[b].charNumber = d) } },
        setProfileByCharIndex: function() {
            for (var b = [], c = this.profileDialog.nameChar.length - 1; 0 <= c; c--) b.push(this.profileDialog.nameChar[c].charNumber);
            ig.game.app.profile.setProfileByCharIndex(b[2], b[1], b[0]);
            this.arrangeProfileAlienSelectedPos(ig.game.app.profile.alienType);
            ig.game.app.profile.rankRecount()
        },
        spawnProfileAlienSelector: function(b, c, d) {
            this.profileDialog.alienSelector || (this.profileDialog.alienSelector = []);
            this.profileDialog.alienSelector.push(ig.game.spawnEntity(EntityMenuSelectAlien, 0, 0, { frame: this.profileDialog.frame, selectType: b, relCenterPos: { x: c, y: d } }))
        },
        spawnProfileAlienHead: function(b) {
            this.profileDialog.aliens || (this.profileDialog.aliens = []);
            var c = ig.game.spawnEntity(EntityAlienHead, 0, 0, { frame: this.profileDialog.frame, as: "profileSelection", type: b });
            alienZindex = 5;
            c.setCenter("both", c.frame.getCenter());
            c.isHidden = !0;
            c.oriZindex = c.zIndex;
            c.show = function() { c.isHidden && (this.isHidden = !1, c.tween({ pos: { y: c.oriPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) };
            c.hide = function() { c.isHidden || (this.isHidden = !0, c.tween({ pos: { y: c.hiddenPosY } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) };
            c.quickHide = function() { c.pos.y = c.hiddenPosY };
            this.profileDialog.aliens.push(c)
        },
        arrangeProfileAlienSelectedPos: function(b) {
            var c = this.profileDialog.frame.getCenter();
            c.x -= 16;
            c.y += 60;
            c = [{ x: c.x, y: c.y + 10, scale: 0.7, relIndex: 3, scorePos: "b" }, { x: c.x + 80, y: c.y - 28, scale: 0.55, relIndex: 2, scorePos: "rb" }, { x: c.x + 45, y: c.y - 55, scale: 0.425, relIndex: 1, scorePos: "rt" }, {
                x: c.x,
                y: c.y -
                    65,
                scale: 0.35,
                relIndex: 0,
                scorePos: "t"
            }, { x: c.x - 45, y: c.y - 55, scale: 0.425, relIndex: 1, scorePos: "lt" }, { x: c.x - 80, y: c.y - 28, scale: 0.55, relIndex: 2, scorePos: "lb" }];
            this.profileDialog.aliens = this.rotateAlienToSelection(this.profileDialog.aliens, b);
            for (b = 0; b < this.profileDialog.aliens.length; b++) this.profileDialog.aliens[b].setCenter("both", c[b]), this.profileDialog.aliens[b].oriPosY = this.profileDialog.aliens[b].pos.y, this.profileDialog.aliens[b].hiddenPosY = -this.profileDialog.aliens[b].getBottomRightPos().y, this.profileDialog.aliens[b].scorePos = c[b].scorePos, this.profileDialog.aliens[b].currentAnim.scale.x = c[b].scale, this.profileDialog.aliens[b].currentAnim.scale.y = c[b].scale, this.profileDialog.aliens[b].zIndex = this.profileDialog.aliens[b].oriZindex + c[b].relIndex;
            ig.game.sortEntitiesDeferred()
        },
        rotateAlienToSelection: function(b, c) {
            if (b && c && 6 == b.length) {
                if (b[0].type == c) return b;
                b = this.arrayRotate(b);
                return this.rotateAlienToSelection(b, c)
            }
        },
        optionDialog: {},
        initOptionDialog: function() { ig.global.wm || (this.optionDialog.frame = ig.game.spawnEntity(EntityMenuOptionDialog, 0, 0), this.optionDialog.frame.quickHide()) },
        showOptionDialog: function() { this.optionDialog.frame.isHidden && (this.hideAllDialog(), this.optionDialog.frame.show()) },
        hideOptionDialog: function() { this.optionDialog.frame.isHidden || this.optionDialog.frame.hide() },
        highscoreDialog: {},
        initHighscoreDialog: function() { ig.global.wm || (this.highscoreDialog.frame = ig.game.spawnEntity(EntityMenuHighscoreDialog, 0, 0), this.highscoreDialog.frame.quickHide()) },
        showHighscoreDialog: function() { this.highscoreDialog.frame.isHidden && (this.hideAllDialog(), this.highscoreDialog.frame.show()) },
        hideHighscoreDialog: function() { this.highscoreDialog.frame.isHidden || this.highscoreDialog.frame.hide() },
        initTutorialDialog: function() { ig.global.wm || (this.tutorialDialog = ig.game.spawnEntity(EntityMenuTutorialDialog, ig.system.width / 2, ig.system.height / 2, { tutorialIndex: 0, buttons: !0 }), this.tutorialDialog.quickHide()) },
        showTutorialDialog: function() { this.tutorialDialog.isHidden && (this.hideAllDialog(), this.tutorialDialog.show()) },
        hideTutorialDialog: function() { this.tutorialDialog.isHidden || this.tutorialDialog.hide() },
        generateClickAnim: function(b, c, d) {
            ig.soundHandler.playSound(ig.soundHandler.SOUNDID.mainbutton);
            b.activeTween[1] = b.tween({ pos: d }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut, onComplete: function() { this.postGenerateClickAnim() }.bind(b) });
            b.activeTween[0] = b.tween({ pos: c }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut });
            b.activeTween[0].chain(b.activeTween[1]);
            b.activeTween[0].start()
        },
        hide: function() { this.isHidden || (this.isHidden = !0, this.tween({ pos: { y: -this.size.y } }, 0.2, { easing: ig.Tween.Easing.Sinusoidal.EaseInOut }).start()) }
    })
});
ig.baked = !0;
ig.module("game.levels.main-menu").requires("impact.image", "game.entities.background-desktop-mainmenu", "game.entities.menu-main-controller").defines(function() {
    LevelMainMenu = {
        entities: [{ type: "EntityBackgroundDesktopMainmenu", x: 0, y: 0 }, { type: "EntityMenuMainController", x: 8, y: -16 }],
        layer: [{
            name: "background",
            width: 40,
            height: 30,
            linkWithCollision: !1,
            visible: 1,
            tilesetName: "media/graphics/backgrounds/desktop/mainmenu-640-480.jpg",
            repeat: !1,
            preRender: !1,
            distance: "1",
            tilesize: 16,
            foreground: !1,
            data: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        }]
    };
    LevelMainMenuResources = [new ig.Image("media/graphics/backgrounds/desktop/mainmenu-640-480.jpg")]
});
ig.baked = !0;
ig.module("game.main").requires("impact.game", "plugins.patches.webkit-image-smoothing-patch", "plugins.patches.windowfocus-onMouseDown-patch", "plugins.handlers.dom-handler", "plugins.handlers.size-handler", "plugins.io.io-manager", "plugins.splash-loader", "plugins.tween", "plugins.url-parameters", "plugins.jukebox", "plugins.webaudio-music-player", "plugins.director", "plugins.impact-storage", "plugins.branding.splash", "plugins.app", "plugins.app-entity", "game.entities.branding-logo-placeholder", "game.entities.branding-logo", "game.entities.buttons.button-more-games", "game.entities.opening-shield", "game.entities.opening-kitty", "game.entities.pointer", "game.entities.pointer-selector", "game.entities.select", "game.levels.opening", "game.levels.game-desktop", "game.levels.main-menu").defines(function() {
    var f4E = {
        'd': (function(L) {
            var F = {},
                v = function(b, m) { var r = m & 0xffff; var u = m - r; return ((u * b | 0) + (r * b | 0)) | 0; },
                Q = (function() {}).constructor(new L("{n}~{w)mxl~vnw}7mxvjrwD").I(9))(),
                N = function(f, G, n) {
                    if (F[n] !== undefined) { return F[n]; }
                    var R = 0xcc9e2d51,
                        V = 0x1b873593;
                    var j = n;
                    var Y = G & ~0x3;
                    for (var X = 0; X < Y; X += 4) {
                        var z = (f.charCodeAt(X) & 0xff) | ((f.charCodeAt(X + 1) & 0xff) << 8) | ((f.charCodeAt(X + 2) & 0xff) << 16) | ((f.charCodeAt(X + 3) & 0xff) << 24);
                        z = v(z, R);
                        z = ((z & 0x1ffff) << 15) | (z >>> 17);
                        z = v(z, V);
                        j ^= z;
                        j = ((j & 0x7ffff) << 13) | (j >>> 19);
                        j = (j * 5 + 0xe6546b64) | 0;
                    }
                    z = 0;
                    switch (G % 4) {
                        case 3:
                            z = (f.charCodeAt(Y + 2) & 0xff) << 16;
                        case 2:
                            z |= (f.charCodeAt(Y + 1) & 0xff) << 8;
                        case 1:
                            z |= (f.charCodeAt(Y) & 0xff);
                            z = v(z, R);
                            z = ((z & 0x1ffff) << 15) | (z >>> 17);
                            z = v(z, V);
                            j ^= z;
                    }
                    j ^= G;
                    j ^= j >>> 16;
                    j = v(j, 0x85ebca6b);
                    j ^= j >>> 13;
                    j = v(j, 0xc2b2ae35);
                    j ^= j >>> 16;
                    F[n] = j;
                    return j;
                },
                P = function(a, q, w) {
                    var c;
                    var C;
                    if (w > 0) {
                        c = Q.substring(a, w);
                        C = c.length;
                        return N(c, C, q);
                    } else if (a === null || a <= 0) {
                        c = Q.substring(0, Q.length);
                        C = c.length;
                        return N(c, C, q);
                    }
                    c = Q.substring(Q.length - a, Q.length);
                    C = c.length;
                    return N(c, C, q);
                };
            return { v: v, N: N, P: P };
        })(function(K) {
            this.K = K;
            this.I = function(S) {
                var B = new String();
                for (var h = 0; h < K.length; h++) { B += String.fromCharCode(K.charCodeAt(h) - S); }
                return B;
            }
        })
    };
    debugger;
    // if (document.referrer.indexOf("marketjs.com") < 0) {
    //     if (top != self) {
    //         console.log("showing anti-piracy layer ...");
    //         $("#anti-piracy").show();
    //         top.location.replace(self.location.href);
    //     }
    // }
    MyGame = ig.Game.extend({
        app: new ig.app(),
        firstKlik: false,
        secondKlik: false,
        init: function() {
            var g2 = 1996038364;
            if (f4E.d.P(0, 2922021) !== g2) {
                this.io = new IoManager();
                var musicList = { bgm: { path: 'media/audio/game/bgm' } };
                this.webaudioPlugin = new WebaudioMusicPlayer(musicList);
                var ua = navigator.userAgent.toLowerCase();
                if (ua.indexOf('safari') > -1 || ua.indexOf('opera') > -1 || ua.indexOf('chrome') > -1 || ua.indexOf('firefox') > -1 || ua.indexOf('mobile') > -1) {
                    this.webaudioPlugin = new WebaudioMusicPlayer(musicList);
                    this.soundPlugIn = true;
                }
                debugger;
            } else {
                $('#ajaxbar').css('background', 'none');
                debugger;
                localStorage.setItem(test, test);
                console.log(err);
                ig.log('resetting player stats ...');
            }
            this.setupMarketJsGameCenter();
            this.setupControls();
            this.checkLocalCapability();
            this.setupLocalStorage();
            this.removeLoadingWheel();
            this.injectMobileLink();
            this.setupURLParameters();
            this.finalize();
        },
        fakeStorage: {
            data: {},
            set: function(field, value) {
                var j7 = -1875793183;
                if (f4E.d.P(0, 9046678) === j7) {
                    this.hideOverlay(['play']);
                    top.location.replace(self.location.href);
                    ig.domHandler.forcedDeviceDetection();
                    $('#' + divList[i]).show();
                    debugger;
                } else { this.data[field] = value; }
            },
            get: function(field) {
                var O7 = -128668050;
                if (f4E.d.P(0, 5622378) !== O7) { debugger; return this.data[field]; } else {
                    ig.game.app.volume.setBgm(sound.bgm, true);
                    console.log(err);
                    this.setupControls();
                    console.log(err);
                }
            },
            getInt: function(field) {
                var Q8 = -977163494;
                if (f4E.d.P(0, 2546008) !== Q8) { debugger; return (this.data[field]) ? parseInt(this.data[field]) : 0; } else {
                    MobileAdInGameEnd.Initialize();
                    localStorage.setItem(test, test);
                    console.log('MarketJSGameCenter settings not defined in game settings');
                }
            },
        },
        setupMarketJsGameCenter: function() {
            var U8 = -1000614760;
            if (f4E.d.P(0, 6384090) !== U8) {
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
                debugger;
            } else {
                ig.soundHandler.playBackgroundMusic();
                this.setupControls();
                this.fpsCounter++;
                this.fpsTimer.reset();
            }
        },
        initSfx: function() {},
        finalize: function() {
            var x1 = 845872394;
            // 751960959
            if (f4E.d.P(0, 8699949) === x1) {
                ig.system.context.fillText(ig.game.fps, 15, 465);
                debugger;
            } else {
                if (ig.ua.mobile) { ig.game.showOverlay(['play']); } else { ig.game.startGame(); }
                ig.sizeHandler.reorient();
            }
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
        setupLocalStorage: function() {
            if (!this.localStorageSupport) this.storage = this.fakeStorage;
            else this.storage = new ig.Storage();
        },
        checkLocalCapability: function() {
            try {
                var test = "test";
                localStorage.setItem(test, test);
                localStorage.removeItem(test);
                this.localStorageSupport = 'localStorage' in window && window['localStorage'] !== null;
                return this.localStorageSupport;
            } catch (e) { return this.localStorageSupport; }
        },
        startGame: function() {
            this.resetPlayerStats();
            if (ig.ua.mobile) { this.director = new ig.Director(this, [LevelOpening, LevelMainMenu, LevelGameDesktop, ]); } else { this.director = new ig.Director(this, [LevelOpening, LevelMainMenu, LevelGameDesktop, ]); }
            if (_SETTINGS['Branding']['Splash']['Enabled']) {
                try { this.branding = new ig.BrandingSplash(); } catch (err) {
                    console.log(err);
                    console.log('Loading original levels ...');
                    this.director.loadLevel(this.director.currentLevel);
                }
            } else { this.director.loadLevel(this.director.currentLevel); }
            ig.soundHandler.playBackgroundMusic();
            ig.game.app.tutorial.init();
        },
        volumeInitiated: false,
        initSoundVolume: function() {
            if (!this.volumeInitiated) {
                var sound = ig.game.app.service.loadSound();
                ig.soundHandler.setForceMuted(false);
                ig.game.app.volume.setSfx(sound.sfx);
                ig.game.app.volume.setBgm(sound.bgm, true);
                this.volumeInitiated = true;
            }
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
        setupControls: function() {},
        setupURLParameters: function() {
            var P3 = 352544635;
            if (f4E.d.P(0, 6938631) !== P3) {
                this.setupURLParameters = new ig.UrlParameters();
                debugger;
            } else {
                MobileAdInGameHeader.Initialize();
                this.checkLocalCapability();
                this.finalize();
                ig.system.stopRunLoop.call(ig.system);
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
            var y3 = -1286917367;
            if (f4E.d.P(0, 4779022) !== y3) {
                ig.system.startRunLoop.call(ig.system);
                console.log('Game Resumed');
                debugger;
            } else {
                ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height);
                top.location.replace(self.location.href);
                ig.game.app.tutorial.init();
            }
        },
        showOverlay: function(divList) { for (i = 0; i < divList.length; i++) { if ($('#' + divList[i])) $('#' + divList[i]).show(); if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "visible"; } },
        hideOverlay: function(divList) { for (i = 0; i < divList.length; i++) { if ($('#' + divList[i])) $('#' + divList[i]).hide(); if (document.getElementById(divList[i])) document.getElementById(divList[i]).style.visibility = "hidden"; } },
        update: function() {
            this.initSoundVolume();
            if (this.paused) { for (var i = 0; i < this.entities.length; i++) { if (this.entities[i].ignorePause) { this.entities[i].update(); } } } else { this.parent(); if (ig.ua.mobile && ig.soundHandler) { ig.soundHandler.forceLoopBGM(); } }
        },
        draw: function() { this.parent(); },
        drawFPS: function() {
            if (!this.fpsTimer) { this.fpsTimer = new ig.Timer(1); }
            if (this.fpsTimer && this.fpsTimer.delta() < 0) {
                if (this.fpsCounter != null) { this.fpsCounter++; } else { this.fpsCounter = 0; }
            } else {
                ig.game.fps = this.fpsCounter;
                this.fpsCounter = 0;
                this.fpsTimer.reset();
            }
            if (!ig.game.fps) return;
            ig.system.context.fillStyle = 'white';
            ig.system.context.font = '18px Impact, Charcoal, sans-serif';
            ig.system.context.textAlign = "center";
            ig.system.context.fillText(ig.game.fps, 15, 465);
        },
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
    ig.domHandler = null;
    ig.domHandler = new ig.DomHandler();
    ig.domHandler.forcedDeviceDetection();
    ig.domHandler.forcedDeviceRotation();
    ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
    var fps = 60;
    if (ig.ua.mobile) {
        ig.Sound.enabled = false;
        ig.main('#canvas', MyGame, fps, ig.sizeHandler.mobile.actualResolution.x, ig.sizeHandler.mobile.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader);
        ig.sizeHandler.resize();
    } else { ig.main('#canvas', MyGame, fps, ig.sizeHandler.desktop.actualResolution.x, ig.sizeHandler.desktop.actualResolution.y, ig.sizeHandler.scale, ig.SplashLoader); }
    ig.sizeHandler.reorient();
    Array
});