function renderWidgetTemplate(a, b, c) {
    try {
        dust.renderSource(widgetTemplates[a], b, function(a, b) {
            return a ? void c(new Error("Problem while loading template: " + JSON.stringify(a))) : void c(null, b)
        })
    } catch (d) {
        c(d)
    }
}

function preloadMedia(a, b) {
    var c = a.length,
        d = 0,
        e = [],
        f = [];
    try {
        if (!c) return void b(null, []);
        a.forEach(function(a) {
            if (a) {
                var g, h, i, j = 3e3;
                /\.(mp4|webm|ogv)$/i.test(a) ? (i = document.createElement("video"), g = "onloadedmetadata", h = "video", i.src = a, i.load()) : (i = new Image, g = "onload", h = "image", i.src = a);
                var k = setTimeout(function() {
                    i.onload = i.onloadedmetadata = i.onerror = void 0, b(new Error("Asset loading timedout: " + a))
                }, j);
                i[g] = function() {
                    clearInterval(k), d++;
                    var e;
                    e = "video" === h ? {
                        width: this.videoWidth,
                        height: this.videoHeight
                    } : {
                        width: this.width,
                        height: this.height
                    }, f[a] = e, d === c && b(null, f)
                }, i.onerror = function(a) {
                    clearInterval(k), b(a)
                }, e.push(i)
            } else d++
        })
    } catch (g) {
        b(g)
    }
}

function scaleToFit(a, b, c, d) {
    if (a && b && !d.ignoreResize) {
        var e = a.get(0);
        if (!e) throw new Error("No widget box given");
        c || (c = b), d.fullScreen || (b = Math.min(Number(d.maxWidth), b), c = Math.min(Number(d.maxHeight), c));
        var f = 1;
        e.style.transform && (f = Number(e.style.transform.split("scale(")[1].split(")")[0]) || 1);
        for (var g = .001;
            (e.getBoundingClientRect().width > b || e.getBoundingClientRect().height > c) && (f -= g, a.css("transform", "scale(" + f + ")"), !(0 > f)););
        for (; e.getBoundingClientRect().width < b && e.getBoundingClientRect().height < c && (f += g, a.css("transform", "scale(" + f + ")"), !(f > 1)););
    }
}

function fitWidget(a) {
    var b = {
        value: 0
    }, c = jQuery(a.widgetRoot),
        d = 0;
    jQuery(".cpi-fixed-height").each(function() {
        d += jQuery(this).height()
    }), -1 !== a.maxWidth.toString().indexOf("%") ? a.calcMaxWidth = Number(a.maxWidth.slice(0, a.maxWidth.length - 1)) * jQuery(window).width() / 100 : a.calcMaxWidth = a.maxWidth, -1 !== a.maxHeight.toString().indexOf("%") ? a.calcMaxHeight = Number(a.maxHeight.slice(0, a.maxHeight.length - 1)) * jQuery(window).height() / 100 - d : a.calcMaxHeight = a.maxHeight - d, removeAllCustomHeight(c), setWidgetDimensions(a, c), traverseFromLeafNodes(c, reduceParentToChild, b), traverseFromLeafNodes(c, reduceChildToParent, b), fitWidgetFontSize(jQuery(".widget-text-node")), minimizeWidgetHeight(c)
}

function fitWidgetFontSize(a) {
    a.each(function() {
        reduceFontSizeToHeight(jQuery(this)), increaseFontSizeToHeight(jQuery(this))
    })
}

function minimizeWidgetHeight(a) {
    var b = 0;
    jQuery(".widget-vertical-section").each(function() {
        jQuery(this).height(jQuery(this).height()), b += jQuery(this).outerHeight()
    }), a.height(b)
}

function traverseFromLeafNodes(a, b, c) {
    var d = getLeafNodes(a.get(0));
    d.forEach(function(d) {
        var e = jQuery(d);
        b(e, c), e.parentsUntil(a).each(function() {
            b(jQuery(this), c)
        })
    })
}

function removeAllCustomHeight(a) {
    a.find("*").each(function() {
        removeInlineProperty(jQuery(this), "height")
    })
}

function setWidgetDimensions(a, b) {
    b.css({
        height: Math.min(a.calcMaxHeight, .75 * jQuery(window).height()),
        "max-width": Math.min(a.calcMaxWidth, .75 * jQuery(window).width())
    })
}

function reduceParentToChild(a, b) {
    if (!a.is("video")) {
        var c = getContentHeight(a);
        !a.is(":empty") && c < a.height() && (a.hasClass("widget-vertical-section") && (b.value += a.height() - c), a.height(c))
    }
}

function reduceChildToParent(a, b) {
    if (isTextContainer(a)) a.addClass("widget-text-node");
    else if (a.height() > a.parent().height()) {
        var c = a.height() - a.parent().height();
        c < b.value ? (a.parent().height(a.parent().height() + c), b.value -= c) : (a.parent().height(a.parent().height() + b.value), b.value = 0), a.height(a.parent().height())
    }
}

function getLeafNodes(a) {
    for (var b = a.getElementsByTagName("*"), c = [], d = 0; d < b.length; d++) 0 === b[d].children.length && ("SOURCE" === b[d].tagName ? c.push(b[d].parentNode) : c.push(b[d]));
    return c
}

function reduceFontSizeToHeight(a) {
    if (!a.is(".fixed-font-size")) {
        if (a.innerHeight() < getContentHeight(a)) {
            removeInlineProperty(a, "font-size");
            var b = Number(a.css("font-size").slice(0, a.css("font-size").length - 2))
        }
        for (; a.innerHeight() < getContentHeight(a) && b > 4;) a.css("font-size", --b + "px")
    }
}

function increaseFontSizeToHeight(a) {
    for (var b = Number(a.css("font-size").slice(0, a.css("font-size").length - 2)), c = !1; getContentHeight(a) < a.innerHeight() && 24 > b;) a.css("font-size", b+++"px"), c = !0;
    c && (b -= 2, a.css("font-size", b + "px"))
}

function removeInlineProperty(a, b) {
    a.attr("style") && -1 !== a.attr("style").indexOf(b) && a.attr("style", function(a, c) {
        return c.replace(new RegExp(b + "[^;]+;?", "g"), "")
    })
}

function getContentHeight(a) {
    var b = wrapContentInDiv(a),
        c = jQuery('<div class="cpi-widget-clear"></div>');
    b.append(c);
    var d = jQuery(b).height();
    return c.remove(), a.html(b.html()), d
}

function wrapContentInDiv(a, b) {
    var c = jQuery("<div>" + a.html() + "</div>");
    return b && c.addClass(b), a.empty().append(c), c
}

function isTextContainer(a) {
    return !(a.children().length || a.filter(":empty").length)
}

function removeWidget(a) {
    cleanUpEvents(a);
    var b = jQuery("." + a).parent(),
        c = jQuery(".widget-user-popup"),
        d = jQuery(".cpi-widget-overlay");
    b.length && b.remove(), c.length && c.remove(), d.length && d.remove(), jQuery("body").removeClass("noscroll")
}

function cleanUpEvents(a) {
    a && (jQuery(window).off("." + a), jQuery("*").off("." + a))
}

function getTimePassed(a) {
    var b = (new Date).getTime();
    return (b - a) / 1e3
}

function runInlineVideoIfAvailable(a) {
    var b = jQuery("." + a.nameSpace),
        c = b.find(".inline-video"),
        d = c.get(0),
        e = b.find(".inline-video-canvas"),
        f = b.find(".inline-countdown"),
        g = b.find("header img");
    if (c.length && e.length) {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            var h = new CanvasVideoPlayer({
                videoSelector: "." + a.nameSpace + " .inline-video",
                canvasSelector: "." + a.nameSpace + " .inline-video-canvas",
                autoplay: !0,
                audio: !1,
                framesPerSecond: 15,
                timelineSelector: ".video-progress-bar",
                resetOnLastFrame: !1
            });
            b.find(".play-screen").remove(), g.click(function() {
                jQuery(".pause-btn").trigger("click")
            }), jQuery(".pause-btn").click(function(a) {
                a.stopPropagation(), inlinePlayCanvas(this, g, h, d)
            })
        } else g.click(function() {
            g.remove(), d.play()
        }), jQuery(".pause-btn").click(function() {
            d.paused ? d.play() : d.pause()
        }), d.addEventListener("timeupdate", function() {
            jQuery(".video-progress-bar div").width(100 * d.currentTime / d.duration + "%")
        });
        return -1 === a.layout.indexOf("-single-layout") && "cpi-fullscreen-alt-d" !== a.layout || (c.get(0).trackVideoProgress = !0), d.addEventListener("ended", function() {
            jQuery(".cpi-fullscreen-widget-close-button").show()
        }), d.addEventListener("timeupdate", function() {
            f.text(Math.round(d.duration - d.currentTime)), d.currentTime >= 90 * d.duration / 100 && jQuery(".cpi-fullscreen-widget-close-button").show()
        }), !0
    }
}

function inlinePlayCanvas(a, b, c, d) {
    b.remove(), jQuery(".video-on-top").removeClass("video-on-top"), jQuery(a).children("i").hasClass("fa-pause") ? (c.pause(), jQuery(d).trigger("customPause")) : (c.play(), jQuery(d).trigger("customPlay"))
}

function toggleGlowyPlayButton(a) {
    var b = a.find(".glow-button");
    b.removeClass("bluePulse"), b.hasClass("fa-pause") ? b.removeClass("fa-pause").addClass("fa-play") : b.removeClass("fa-play").addClass("fa-pause")
}

function inlinePlayVideo(a, b, c) {
    b.remove(), jQuery(".video-on-top").removeClass("video-on-top"), jQuery(this).children(".bluePulse").removeClass("bluePulse"), jQuery(this).children("i").hasClass("fa-pause") ? (c.pause(), jQuery(this).children("i").removeClass("fa-pause").addClass("fa-play")) : (c.play(), jQuery(this).children("i").removeClass("fa-play").addClass("fa-pause"))
}

function openTab(a) {
    console.log("opening link applift way");
    var b = window.document.createElement("a");
    b.target = "_blank", b.href = a;
    var c = window.document.createEvent("MouseEvents");
    c.initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), b.dispatchEvent(c)
}

function askUserToOpenWidget(a, b, c, d) {
    renderWidgetTemplate("widget-popup", {}, function(e, f) {
        e && c(new Error("failed to render widget popup")), Object.keys(b).forEach(function(a) {
            b[a] = encodeURI(b[a])
        }), jQuery("body").append(f), jQuery(".widget-user-popup #open-widget").on("click", function() {
            function e() {
                console.log(f.reason);
                var a = f.reason,
                    b = f.videoWatchedCheck;
                f.closed && (clearInterval(g), d(null, a, b))
            }
            var f = window.open("https://s3.amazonaws.com/embedder.softgames.de/widget-assets/windows/" + a + ".html?" + jQuery.param(b), "_blank"),
                g = setInterval(e, 500);
            f.onload = function() {
                c()
            }, f.onerror = function(a) {
                c(a)
            }
        }), jQuery(".widget-user-popup #close-widget").on("click", function() {
            jQuery(".widget-user-popup, .cpi-widget-overlay").remove()
        })
    })
}

function loadAllRequirements(a) {
    "undefined" == typeof jQuery ? loadJs("//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js", function() {
        jQuery = window.jQuery, loadRequirementsAfterJQuery(a)
    }) : loadRequirementsAfterJQuery(a)
}

function loadRequirementsAfterJQuery(a) {
    jQuery.ui ? loadRequirementsAfterJQueryUI(a) : loadJs("//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js", function() {
        loadRequirementsAfterJQueryUI(a)
    })
}

function loadRequirementsAfterJQueryUI(a) {
    function b() {
        f++, f === c.length + d.length && a()
    }
    var c = [],
        d = [],
        e = window.jQuery || window.SG_jQuery;
    e && "undefined" != typeof e.fn.rcarousel || c.push("//dop3jnx8my3ym.cloudfront.net/jquery.ui.rcarousel.min.js"), "undefined" == typeof window.sgTrackSdk && c.push("//s3.amazonaws.com/embedder-container/sg-track-sdk.js?_v=2.1.1"), "undefined" == typeof embed && c.push("//dop3jnx8my3ym.cloudfront.net/embedder.js"), e && "undefined" != typeof e.fn.isotope || c.push("//cdnjs.cloudflare.com/ajax/libs/masonry/3.3.0/masonry.pkgd.js"), e && "undefined" != typeof e.fn.unveil || c.push("//cdnjs.cloudflare.com/ajax/libs/unveil/1.3.0/jquery.unveil.min.js"), e && "undefined" != typeof e().modal || c.push("//d1bjj4kazoovdg.cloudfront.net/assets/libs/bootstrap/3.3.1/bootstrap.min.js"), d.push("//embedder.softgames.de/widgets.css"), d.push("//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css"), d.push("//dop3jnx8my3ym.cloudfront.net/rcarousel.css"), d.push("//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css");
    var f = 0;
    c.forEach(function(a) {
        loadJs(a, b)
    }), console.log("loading css..."), d.forEach(function(a) {
        console.log("loading " + a), loadCss(a, b)
    }), addJQueryPlugins()
}

function addJQueryPlugins() {
    jQuery.fn.resizeText = function(a) {
        function b(a, c, d) {
            d > c || (a.style.fontSize = c + "px", a.scrollHeight > a.offsetHeight && b(a, c - 1, d))
        }
        var c = $.extend({
            maxfont: 40,
            minfont: 4
        }, a),
            d = $("<style>").html(".nodelays { -moz-transition: none !important; -webkit-transition: none !important;-o-transition: none !important; transition: none !important;}");
        $("head").append(d), $(this).each(function(a, d) {
            var e = $(d);
            e.addClass("nodelays"), b(d, c.maxfont, c.minfont), e.removeClass("nodelays")
        }), d.remove()
    }
}

function loadJs(a, b) {
    var c = document.createElement("script");
    c.src = a, c.async = !0, c.type = "text/javascript", c.onreadystatechange = c.onload = function() {
        this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (c.onreadystatechange = c.onload = null, b && b())
    }, document.getElementsByTagName("head")[0].appendChild(c)
}

function loadCss(a, b) {
    console.log("loading " + a);
    var c = document.styleSheets.length,
        d = document.createElement("link");
    d.rel = "stylesheet", d.type = "text/css", d.async = !0, d.href = a;
    var e = setInterval(function() {
        document.styleSheets.length > c && (clearInterval(e), b())
    }, 10);
    document.getElementsByTagName("head")[0].appendChild(d)
}

function checkNativeAndroidBrowser(a) {
    var b = navigator.userAgent,
        c = b.indexOf("Android") > -1 && b.indexOf("Mozilla/5.0") > -1 && b.indexOf("AppleWebKit") > -1,
        d = new RegExp(/AppleWebKit\/([\d.]+)/),
        e = d.exec(b),
        f = null === e ? null : parseFloat(d.exec(b)[1]),
        g = new RegExp(/Chrome\/([\d.]+)/),
        h = g.exec(b),
        i = null === h ? null : parseFloat(g.exec(b)[1]);
    a = c && null !== f && 537 > f || null !== i && 37 > i
}

function loadJs(a, b) {
    var c, d = document.createElement("script");
    d.setAttribute("src", a), b && (d.onreadystatechange = d.onload = function() {
        c || b(), c = !0
    }), document.getElementsByTagName("head")[0].appendChild(d)
}

function loadNewWidget(a, b, c, d) {
    try {
        var e = a.options;
        switch (a.options.layout) {
            case "cpi-fullscreen-alt-d":
                e.template = "cpi-fullscreen-alt-d";
                break;
            case "cpi-fullscreen-alt-a":
            case "modCpiWidget":
                e.template = "cpi-fullscreen-alt-a"
        }
        e.startedCallback = b, e.finishedCallback = c, e.containerSelector = "#sg-game-" + d, window.cw.createCpiWidget(e);
        try {
            window.sgTrackSdk.trackEvent("TempTrackWidgetCallOptions", "newFlow", {
                widgetId: d,
                data: e
            })
        } catch (f) {}
    } catch (g) {
        c(g)
    }
}

function postMessageToParent(a, b, c) {
    var d = window.parent || window;
    d.postMessage({
        system: a,
        action: b,
        data: c
    }, "*"), console.log("Posting Message with data:", c)
}

function cutDescription(a, b) {
    if ("string" == typeof a) return "";
    var c = a.substring(0, b),
        d = Math.max(c.lastIndexOf("."), c.lastIndexOf("!"), c.lastIndexOf("?"));
    return -1 != d ? c = c.substr(0, d + 1) : c += "...", c
}

function gameOpensInTab(a, b, c) {
    jQuery("#sg-game-" + a + " .sg-play-trigger").each(function() {
        var a = jQuery("<a>").attr("href", "//games.softgames.de/" + b + "/?p=" + c).attr("target", "_blank");
        jQuery(this).removeClass("sg-play-trigger").wrap(a)
    })
}

function createAccordionContainer(a) {
    var b = jQuery("<div>").addClass("sg-accordion-widget-wrapper").attr("id", "sg-accordion-widget-wrapper-" + a.widgetId).css("width", a.widgetWidth),
        c = jQuery("<div>").addClass("sg-accordion-container").attr("id", "sg-accordion-container-" + a.widgetId).css("width", a.widgetWidth);
    b.append(c), jQuery("#sg-game-" + a.widgetId).append(b), a.mobileDevice && (jQuery("#sg-game-" + a.widgetId).css("width", "100%"), b.css("width", "100%"), c.css("width", "100%"), jQuery("#sg-game-" + a.widgetId).css("max-width", a.screenWidth), b.css("max-width", a.screenWidth), c.css("max-width", a.screenWidth))
}

function accordionHtml(a, b, c) {
    var d = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("sg-game-container sg-accordion-game-wrapper"),
        e = jQuery("<div>").addClass("sg-play-trigger"),
        f = jQuery("<div>").addClass("sg-accordion-game-container"),
        g = jQuery("<div>").addClass("sg-accordion-game-rank").text(b.gameNumber),
        h = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("data-src", a.thumb).attr("src", "//s3.amazonaws.com/embedder-container/loader.gif").addClass("sg-accordion-img sg-lazy-loaded"),
        i = a.gameTitle,
        j = jQuery("<div>").addClass("sg-accordion-title").append(jQuery("<span>").text(i));
    f.append(g).append(h).append(j).append('<div class="sg-accordion-button"><div class="sg-indicator fa fa-angle-right" ></div></div>'), e.append(f), d.append(e), jQuery("#sg-accordion-section-" + b.widgetId + "-" + c).append(d), jQuery(".sg-accordion-play-button").hover(function(a) {
        jQuery(this).css("background-color", "mouseenter" === a.type ? b.sectionHeaderColor : "white"), jQuery(this).css("color", "mouseenter" === a.type ? "white" : "black")
    })
}

function accordionCss(a) {
    var b = jQuery("#sg-game-" + a.widgetId + " .sg-accordion-game-wrapper"),
        c = jQuery("#sg-game-" + a.widgetId + " .sg-accordion-img"),
        d = jQuery("#sg-game-" + a.widgetId + " .sg-accordion-title");
    c.css("height", .9 * a.imageHeight).css("width", .9 * a.imageHeight), d.css("height", a.imageHeight).css("line-height", "19px"), b.css("height", a.imageHeight)
}

function createCarouselButtonsTopContainer(a) {
    var b = jQuery("<div>").addClass("sg-carousel-widget-wrapper").attr("id", "sg-carousel-widget-wrapper-" + a.widgetId),
        c = jQuery("<div>");
    if (a.showWidgetTitle) {
        var d = jQuery("<div>").addClass("sg-carousel-buttons-top-widget-title").append(a.widgetTitle);
        a.mobileDevice, c.append(d)
    }
    var e = jQuery("<div>").css("width", "50%"),
        f = jQuery("<div>").addClass("sg-carousel-nav").css("margin-bottom", "-10px"),
        g = jQuery("<div>").addClass("sg-icon-carousel-nav-icon fa fa-angle-left").css("color", a.buttonColor),
        h = jQuery("<a>").attr("href", "#").attr("id", "ui-carousel-prev-" + a.widgetId).addClass("sg-carousel-prev sg-carousel-nav-" + a.widgetId).css("width", "50px");
    f.append(g), h.append(f);
    var i = jQuery("<div>").addClass("sg-carousel-nav").css("margin-bottom", "-10px"),
        j = jQuery("<div>").addClass("sg-icon-carousel-nav-icon fa fa-angle-right").css("color", a.buttonColor),
        k = jQuery("<a>").attr("href", "#").attr("id", "ui-carousel-next-" + a.widgetId).addClass("sg-carousel-next sg-carousel-nav-" + a.widgetId).css("width", "50px");
    i.append(j), k.append(i), e.append(h).append(k), c.append(e);
    var l = jQuery("<div>").addClass("sg-carousel-container").css("width", a.widgetWidth).css("position", "relative"),
        m = jQuery("<div>").attr("id", "carousel-games-wrapper-" + a.widgetId).addClass("sg-carousel-wrapper").css("width", a.carouselWidth - 100);
    l.append(m).append(k).append(h), b.append(c).append(l), jQuery("#sg-game-" + a.widgetId).append(b), a.mobileDevice && (b.css("width", "100%"), l.css("width", "100%"))
}

function carouselButtonsTopHtml(a, b) {}

function createCarouselWithDetailsContainer(a) {
    var b = jQuery("<div>").addClass("sg-carousel-widget-wrapper").attr("id", "sg-carousel-widget-wrapper-" + a.widgetId).css("width", a.widgetWidth).css("position", "relative");
    if (a.showWidgetTitle) var c = jQuery("<div>").addClass("sg-carousel-with-details-widget-title").attr("id", "sg-carousel-with-details-widget-title-" + a.widgetId).append(jQuery("<span>").append(a.widgetTitle)).css("color", a.buttonTextColor).css("height", .07 * a.widgetHeight).css("line-height", .07 * a.widgetHeight + "px").css("background", "-webkit-linear-gradient(" + a.gradientTop + "," + a.gradientBottom + ")").css("background", "-o-linear-gradient(" + a.gradientTop + "," + a.gradientBottom + ")").css("background", "-moz-linear-gradient(" + a.gradientTop + "," + a.gradientBottom + ")").css("background", "linear-gradient(" + a.gradientTop + "," + a.gradientBottom + ")"),
    d = jQuery("<div>").addClass("sg-carousel-with-details-after-title").css("margin-bottom", .03 * a.widgetHeight);
    var e = jQuery("<div>").addClass("sg-carousel-container").css("width", a.widgetWidth).css("border", "1px solid #DDDADD"),
        f = jQuery("<div>").attr("id", "carousel-games-wrapper-" + a.widgetId).css("width", a.carouselWidth),
        g = jQuery("<a>").attr("href", "#").attr("id", "ui-carousel-prev-" + a.widgetId).addClass("sg-carousel-with-details-nav sg-carousel-with-details-prev sg-carousel-nav-" + a.widgetId).css("width", .1 * a.widgetWidthPx).css("height", a.imageHeight).css("line-height", a.imageHeight + 45 + "px").append('<img src="//dop3jnx8my3ym.cloudfront.net/rsz_prevwhite.png" class="sg-carousel-nav"/>'),
        h = jQuery("<a>").attr("href", "#").attr("id", "ui-carousel-next-" + a.widgetId).addClass("sg-carousel-with-details-nav sg-carousel-with-details-next sg-carousel-nav-" + a.widgetId).css("width", .1 * a.widgetWidthPx).css("height", a.imageHeight).css("line-height", a.imageHeight + 45 + "px").append('<img src="//dop3jnx8my3ym.cloudfront.net/rsz_nextwhite.png" class="sg-carousel-nav"/>');
    e.append(g).append(f).append(h), a.showWidgetTitle ? b.append(c).append(d).append(e) : b.append(e), jQuery("#sg-game-" + a.widgetId).append(b)
}

function carouselWithDetailsHtml(a, b) {
    var c = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("sg-carousel-game-container sg-game-container").css("background", b.backgroundColor),
        d = jQuery("<div>").addClass("sg-carousel-image-container sg-play-trigger").css("width", b.imageWidth).css("height", b.imageHeight).css("margin-bottom", "6%"),
        e = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.imgTeaser).addClass("sg-carousel-image").css("width", b.imageWidth).css("height", b.imageHeight),
        f = jQuery('<img class="sg-carousel-with-details-play-overlay">').attr("src", "//dop3jnx8my3ym.cloudfront.net/play-classic.png"),
        g = jQuery("<div>").addClass("sg-carousel-with-details-play-button").append(b.buttonText).css("height", .15 * b.imageHeight).css("width", .15 * b.imageWidth).css("line-height", .15 * b.imageHeight + "px").css("color", b.buttonTextColor).css("bottom", b.imageHeight * -.15 / 2).css("background", "-webkit-linear-gradient(" + b.gradientTop + "," + b.gradientBottom + ")").css("background", "-o-linear-gradient(" + b.gradientTop + "," + b.gradientBottom + ")").css("background", "-moz-linear-gradient(" + b.gradientTop + "," + b.gradientBottom + ")").css("background", "linear-gradient(" + b.gradientTop + "," + b.gradientBottom + ")");
    jQuery(d).append(e).append(f).append(g);
    var h = a.gameType.split(","),
        i = h[h.length - 1],
        j = jQuery("<div>").addClass("sg-carousel-with-details-type").append(i).css("color", b.mainColor),
        k = jQuery("<div>").addClass("sg-carousel-with-details-after-title").css("margin-bottom", .03 * b.widgetHeight),
        l = jQuery("<div>").addClass("sg-carousel-with-details-title sg-carousel-title-" + b.widgetId).append(jQuery("<span>").text(a.gameTitle)),
        m = jQuery("<div>").addClass("sg-main-description sg-carousel-with-details-desc").append(a.desc).css("height", 26 * Math.floor(b.imageHeight / 2 / 26));
    c.append(d).append(j).append(k).append(l).append(m), jQuery("#carousel-games-wrapper-" + b.widgetId).append(c)
}

function createCarouselWithIconsContainer(a) {
    var b = jQuery("<div>").addClass("sg-carousel-widget-wrapper").attr("id", "sg-carousel-widget-wrapper-" + a.widgetId);
    if (a.showWidgetTitle) {
        var c = jQuery("<span>").addClass("main-title-line main-before-title"),
            d = jQuery("<span>").addClass("main-title-line main-after-title"),
            e = jQuery("<div>").addClass("sg-main-widget-title").append(c).append(a.widgetTitle).append(d);
        a.mobileDevice
    }
    var f = jQuery("<div>").addClass("sg-carousel-container").css("width", a.widgetWidth).css("position", "relative"),
        g = jQuery("<div>").attr("id", "carousel-games-wrapper-" + a.widgetId).addClass("sg-carousel-wrapper").css("width", a.carouselWidth - 100),
        h = jQuery("<div>").addClass("sg-carousel-nav").css("position", "relative"),
        i = jQuery("<div>").addClass("sg-icon-carousel-nav-icon fa fa-angle-left").css("color", a.buttonColor),
        j = jQuery("<a>").attr("href", "#").attr("id", "ui-carousel-prev-" + a.widgetId).addClass("sg-carousel-prev sg-carousel-nav-" + a.widgetId).css("width", "50px");
    h.append(i), j.append(h);
    var k = jQuery("<div>").addClass("sg-carousel-nav").css("position", "relative"),
        l = jQuery("<div>").addClass("sg-icon-carousel-nav-icon fa fa-angle-right").css("color", a.buttonColor),
        m = jQuery("<a>").attr("href", "#").attr("id", "ui-carousel-next-" + a.widgetId).addClass("sg-carousel-next sg-carousel-nav-" + a.widgetId).css("width", "50px");
    k.append(l), m.append(k);
    var n = jQuery("<div>").addClass("sg-main-title-top-line").css("width", a.widgetWidthPx).css("height", "20px");
    b.append(n), f.append(g).append(m).append(j), a.showWidgetTitle ? b.append(e).append(f) : b.append(f), jQuery("#sg-game-" + a.widgetId).append(b), a.showWidgetTitle && (a.maxWidth > 767 && a.maxWidth < 992 || e.width() > 767 && e.width() < 992 ? (c.css("width", "33%"), d.css("width", "33%")) : (a.maxWidth < 768 || e.width() < 768) && (c.css("width", "25%"), d.css("width", "25%"))), a.mobileDevice && (b.css("width", "100%"), f.css("width", "100%"))
}

function carouselWithIconsHtml(a, b) {
    var c = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("sg-carousel-game-container sg-game-container"),
        d = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.thumb).addClass("sg-grid-image sg-play-trigger").css("width", b.elementWidth - 4).css("height", b.elementHeight - 4).css("border-radius", "5px").css("border", "2px solid " + b.buttonColor);
    c.append(d), jQuery("#carousel-games-wrapper-" + b.widgetId).append(c)
}

function carouselWithIconsCss(a) {
    var b = jQuery("#sg-game-" + a.widgetId),
        c = jQuery("#sg-game-" + a.widgetId + " .sg-carousel-widget-wrapper"),
        d = jQuery("#sg-game-" + a.widgetId + " .sg-carousel-wrapper").height(),
        e = jQuery("#sg-game-" + a.widgetId + " .sg-main-title-top-line").outerHeight();
    b.css("height", d + e), c.css("height", d + e).css("padding-bottom", "21px")
}

function createCarouselContainer(a) {
    var b = jQuery("<div>").addClass("sg-carousel-widget-wrapper").attr("id", "sg-carousel-widget-wrapper-" + a.widgetId);
    if (a.showWidgetTitle) var c = jQuery("<span>").addClass("main-title-line main-before-title"),
    d = jQuery("<span>").addClass("main-title-line main-after-title"), e = jQuery("<div>").addClass("sg-main-widget-title").append(c).append(a.widgetTitle).append(d);
    var f = jQuery("<div>").addClass("sg-carousel-container").css("width", a.widgetWidth),
        g = jQuery("<div>").attr("id", "carousel-games-wrapper-" + a.widgetId).addClass("sg-carousel-wrapper").css("width", "100%"),
        h = jQuery("<a>").attr("href", "#").attr("id", "ui-carousel-prev-" + a.widgetId).addClass("sg-carousel-prev sg-carousel-nav-" + a.widgetId).css("width", "50px").append('<div class="sg-carousel-nav"><div class="sg-indicator fa fa-angle-left" ></div></div>'),
        i = jQuery("<a>").attr("href", "#").attr("id", "ui-carousel-next-" + a.widgetId).addClass("sg-carousel-next sg-carousel-nav-" + a.widgetId).css("width", "50px").append('<div class="sg-carousel-nav"><div class="sg-indicator fa fa-angle-right" ></div></div>');
    f.append(g).append(i).append(h), a.showWidgetTitle ? b.append(e).append(f) : b.append(f), jQuery("#sg-game-" + a.widgetId).append(b), a.showWidgetTitle && (a.maxWidth > 767 && a.maxWidth < 992 || e.width() > 767 && e.width() < 992 ? (c.css("width", "33%"), d.css("width", "33%")) : (a.maxWidth < 768 || e.width() < 768) && (c.css("width", "25%"), d.css("width", "25%"))), "info-right" === a.layout ? (h.css("height", "65%"), i.css("height", "65%")) : "info-under" == a.layout && (h.css("height", "61%"), i.css("height", "61%")), a.mobileDevice && (b.css("width", "100%"), f.css("width", "100%")), a.screenWidth <= 768 && "info-under" === a.layout && jQuery("#sg-game-" + a.widgetId + " .sg-carousel-container").hide()
}

function carouselHtml(a, b) {
    var c = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("sg-carousel-game-container sg-game-container"),
        d = jQuery("<div>").addClass("sg-play-trigger-container  sg-play-trigger"),
        e = jQuery("<div>").addClass("sg-carousel-image-container").css("width", "100%").css("height", "100%").css("margin-bottom", "1%"),
        f = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.imgTeaser).addClass("sg-carousel-image").css("width", "100%").css("height", "100%"),
        g = jQuery('<img class="sg-play-overlay">').attr("src", "//dop3jnx8my3ym.cloudfront.net/play.png");
    jQuery(e).append(f).append(g);
    var h = jQuery("<div>").addClass("sg-carousel-title regular-title-wrapper sg-carousel-title-" + b.widgetId).append(jQuery("<span>").text(a.gameTitle));
    if (d.append(e).append(h), c.append(d), b.mobileDevice, jQuery("#carousel-games-wrapper-" + b.widgetId).append(c), "info-right" === b.layout)
        if (b.mobileDevice) h.css("width", "100%").css("font-size", "20px").css("line-height", "24px"), b.widgetWidthPx <= 670 && h.hide(), e.css("width", "100%");
        else {
            h.css("width", .4 * b.elementWidth).css("padding-left", "1%").css("padding-top", "3%").css("padding-bottom", "3%").css("text-align", "left").css("font-size", "20px").css("font-weight", "400").css("line-height", "24px");
            var i = a.gameType.split(","),
                j = i[i.length - 1],
                k = jQuery("<div>").addClass("sg-carousel-type").append(j).css("width", .4 * b.elementWidth).css("font-size", "12px");
            h.before(k), e.css("width", "50%"), jQuery(".sg-carousel-play-button-info-right").hover(function(a) {
                jQuery(this).css("background-color", "mouseenter" === a.type ? b.buttonTextColor : b.buttonColor), jQuery(this).css("color", "mouseenter" === a.type ? b.buttonColor : b.buttonTextColor)
            })
        } else h.css("width", b.elementWidth), jQuery(".sg-carousel-play-button").hover(function(a) {
            jQuery(this).css("background-color", "mouseenter" === a.type ? b.buttonTextColor : b.buttonColor), jQuery(this).css("color", "mouseenter" === a.type ? b.buttonColor : b.buttonTextColor)
        })
}

function carouselCss(a) {
    jQuery("#sg-game-" + a.widgetId + " .sg-carousel-widget-wrapper").css("height", "100%"), jQuery("#sg-game-" + a.widgetId + " .sg-carousel-container").css("height", "100%"), jQuery("#carousel-games-wrapper-" + a.widgetId).css("height", "100%"), jQuery("#sg-game-" + a.widgetId).css("height", "100%")
}

function createCpiCall2actionDeal(a, b, c, d) {
    try {
        if (a.length > 0) jQuery("body").addClass("noscroll"), a = a[0], b.video = !! a.video, a.video && -1 === b.layout.indexOf("-single-layout") && "cpi-fullscreen-alt-d" !== b.layout ? showCall2ActionVideo(a, b, c, d) : showFullScreenCpiDeal(a, b, !1, c, d);
        else {
            var e = {
                transactionId: String(b.transaction_id)
            };
            postMessageToParent(b.type, "empty", e), c(new Error("No cpi deal"))
        }
    } catch (f) {
        c(f)
    }
}

function hideCpiFirstScreen(a, b, c) {
    try {
        jQuery(".cpi-call2action-widget-container").fadeOut(500, function() {
            jQuery(".cpi-call2action-widget-container *").hide(), exitVideoFullScreen(b), jQuery(".cpi-second-screen-widget").show(function() {
                runInlineVideoIfAvailable(b)
            }), jQuery(window).trigger("resize." + b.nameSpace), jQuery(".cpi-fullscreen-widget-close-button").hide(), setTimeout(function() {
                jQuery(".cpi-fullscreen-widget-close-button").show()
            }, 5e3)
        })
    } catch (d) {
        c(d)
    }
}

function showCall2ActionVideo(a, b, c, d) {
    try {
        var e = "cpi-call2action",
            f = {
                poster: a.banner,
                mediaSrc: a.video,
                widgetId: b.widgetId,
                trackingPixel: a.trackingPixel
            };
        f.playButton = "true", loadCall2ActionPartials(), showFullScreenCpiDeal(a, b, !1, function(a) {
            a && d(a)
        }, d, !0), renderWidgetTemplate(e, f, function(e, f) {
            try {
                if (e) throw e;
                var g = jQuery("#sg-game-" + b.widgetId);
                if (!g.length) throw new Error("No widget container for id: " + b.widgetId);
                g.append(f), jQuery(g).find(".widget-root").addClass(b.nameSpace), jQuery(".cpi-call2action-widget-container").fadeIn(), jQuery(".cpi-fullscreen-widget-close-button").hide(), setTimeout(function() {
                    jQuery(".cpi-fullscreen-widget-close-button").show()
                }, 5e3), bindCall2ActionWidgetEvents(a, b, d), c()
            } catch (e) {
                c(e)
            }
        })
    } catch (g) {
        c(g)
    }
}

function bindCall2ActionWidgetEvents(a, b, c) {
    var d = jQuery("." + b.nameSpace),
        e = d.find("#" + b.widgetId + "-video-player"),
        f = d.find(".cpi-fullscreen-widget-video-play-button");
    f.on("click." + b.nameSpace, function() {
        e.get(0).play(), f.hide()
    });
    var g, h = 0;
    e.on("play." + b.nameSpace, function() {
        f.hide(), g = (new Date).getTime()
    }), e.on("ended." + b.nameSpace, function() {
        h += getTimePassed(g), b.watchingPercentage = h / e.get(0).duration * 100, hideCpiFirstScreen(a, b, c), f.hide()
    }), e.on("pause." + b.nameSpace, function() {
        h += getTimePassed(g), f.show()
    }), e.get(0).ontimeupdate = function() {
        d.find(".cpi-call2action-video-timer").text(Math.round(e.get(0).duration - e.get(0).currentTime))
    }
}

function exitVideoFullScreen(a) {
    try {
        var b = jQuery("." + a.nameSpace),
            c = b.find("#" + a.widgetId + "-video-player").get(0);
        c.webkitExitFullscreen && c.webkitExitFullscreen()
    } catch (d) {
        console.log("couldn't exit full screen mode" + JSON.stringify(d))
    }
}

function loadCall2ActionPartials() {
    var a = dust.compile(widgetTemplates["play-button"], "play-button");
    dust.loadSource(a)
}

function createCpiFullscreenDeal(a, b, c, d) {
    try {
        if (a.length > 0) jQuery("body").addClass("noscroll"), a = a[0], showFullScreenCpiDeal(a, b, !0, c, d);
        else {
            var e = {
                transactionId: String(b.transaction_id)
            };
            postMessageToParent(b.type, "empty", e), c(new Error("No cpi deal"))
        }
    } catch (f) {
        c(f)
    }
}

function showFullScreenCpiDeal(a, b, c, d, e, f) {
    try {
        if (!b || !a) throw new Error("no options passed");
        if (getParameterByName("forceLayout") && (b.layout = getParameterByName("forceLayout")), "cpi-fullscreen-alt-c-single-layout" === b.layout && !a.video) throw new Error("this layout requires a video");
        a.icon || (a.icon = "http://placehold.it/300X300");
        var g = b.layout.split("-single-layout")[0];
        g && widgetTemplates[g] || (g = "cpi-fullscreen-alt-a");
        var h = {
            maxWidth: b.maxSize,
            maxHeight: b.maxSize,
            widgetRoot: ".cpi-fullscreen-widget-container"
        };
        b.widgetSettings = h, "cpi-fullscreen-alt-b" === g && (h.fullScreen = !0), "cpi-fullscreen-alt-a" === g && (g = "Desktop" === b.platform ? "cpi-fullscreen-alt-a-desktop" : "cpi-fullscreen-alt-a-mobile"), -1 !== ["cpi-fullscreen-alt-a-desktop", "cpi-fullscreen-alt-b-responsive", "cpi-fullscreen-alt-c", "cpi-fullscreen-alt-d", "cross-promotions-alt-a"].indexOf(g) && (h.ignoreResize = !0);
        var i = [a.banner, a.icon, "https://s3.amazonaws.com/embedder-container/star.png"];
        "cpi-fullscreen-alt-d" === g && i.push("https://s3.amazonaws.com/embedder-container/images/play_screen.png"), f || i.push(a.video), console.log("preload is set to: " + b.preloadMedia), b.preloadMedia ? (console.log("preloading enabled"), preloadMedia(i, function(h, i) {
            try {
                if (h) throw h;
                (!a.banner || 5 < i[a.banner].width / i[a.banner].height) && (a.banner = a.icon), renderWidget(g, b, a, c, f, d, e, i)
            } catch (h) {
                d(h)
            }
        })) : (console.log("escaping preload"), renderWidget(g, b, a, c, f, d, e))
    } catch (j) {
        d(j)
    }
}

function renderWidget(a, b, c, d, e, f, g, h) {
    var i = 100;
    h = h || {};
    var j = {
        widgetTitle: b.widgetTitle,
        widgetId: b.widgetId,
        title: c.title,
        icon: c.icon,
        description: c.description.length > i ? c.description.slice(0, i) + "..." : c.description,
        mediaType: "banner",
        mediaSrc: c.banner,
        buttonText: b.buttonText,
        trackingPixel: c.trackingPixel,
        mobileDevice: b.mobileDevice,
        url: c.url,
        video: c.video,
        closeButtonText: b.closeButtonText || "No. thanks",
        isApplift: "Applift" === c.advertiserName ? "true" : "false"
    };
    d && c.video && (j.mediaType = "video", j.mediaSrc = c.video, j.mediaHeight = h[c.video].height, j.playButton = "true"), j.testApplift = "no";
    try {
        var k = window.location != window.parent.location ? document.referrer : document.location;
        "yes" === getParameterByName("testApplift", k) && (j.testApplift = "yes")
    } catch (l) {
        console.log(l)
    }
    loadFullscreenPartials(), renderWidgetTemplate(a, j, function(a, h) {
        try {
            if (a) throw a;
            e && (h = '<div class="cpi-second-screen-widget" style="display:none">' + h + "</div>");
            var i = jQuery("#sg-game-" + b.widgetId);
            if (!i.length) throw new Error("No widget container for id: " + b.widgetId);
            i.append(h), setTimeout(function() {
                bindFullScreenWidgetEvents(c, b, d, g),
                e || runInlineVideoIfAvailable(b)
            }, 500), i.find(".widget-root").addClass(b.nameSpace);
            var j = !1;
            jQuery(".no-show-delay").show(), jQuery(".cpi-fullscreen-widget-close-button").not(".no-show-delay").hide(), j || setTimeout(function() {
                jQuery(".cpi-fullscreen-widget-close-button").show()
            }, 5e3)
        } catch (a) {
            f(a)
        }
    })
}

function callFitWidget(a) {
    fitWidget(a)
}

function isUserWatchedEnough(a) {
    var b = !0;
    return a.video && " undefined" != typeof a.watchingPercentage && a.watchingPercentage < 90 && (b = !1), b
}

function bindFullScreenWidgetEvents(a, b, c, d, e) {
    var f = e || jQuery("." + b.nameSpace),
        g = e || jQuery(window);
    g.on("beforeunload." + b.nameSpace, function() {}), f.find(".widget-window-link").on("click." + b.nameSpace, function() {
        try {
            var a = {
                transactionId: String(b.transaction_id)
            };
            c ? postMessageToParent("cpiFullscreenWidget", "clicked", a) : postMessageToParent("cpiCall2ActionWidget", "clicked", a), trackInlineVideoProgress(b), (!b.incentivise && !b.refillLives || b.incentivise && isUserWatchedEnough(b) || b.refillLives && isUserWatchedEnough(b)) && d(null, "click", isUserWatchedEnough(b))
        } catch (e) {
            d(e)
        }
    }), f.find(".cpi-fullscreen-get").on("click." + b.nameSpace, function() {
        try {
            openTab(a.url);
            var e = {
                transactionId: String(b.transaction_id)
            };
            c ? postMessageToParent("cpiFullscreenWidget", "clicked", e) : postMessageToParent("cpiCall2ActionWidget", "clicked", e), trackInlineVideoProgress(b), (!b.incentivise || b.incentivise && isUserWatchedEnough(b)) && d(null, "click", isUserWatchedEnough(b))
        } catch (f) {
            d(f)
        }
    });
    var h = f.find("video"),
        i = f.find("video").get(0),
        j = f.find(".cpi-fullscreen-widget-video-play-button-container");
    h.on("play." + b.nameSpace, function() {
        j.hide(), h.trigger("customPlay")
    }), h.on("customPlay", function() {
        toggleGlowyPlayButton(f), f.find(".hide-on-play").hide()
    }), h.on("customPause", function() {
        toggleGlowyPlayButton(f), i.currentTime === i.duration && h.trigger("customEnd")
    }), h.on("customEnd", function() {
        if (h.off("customEnd"), "cpi-fullscreen-alt-d" === b.layout) {
            var a = $(".widget-root");
            $(window).on("resize." + b.nameSpace, function() {
                if ($(window).width() / $(window).height() > 1) {
                    a.find(".section:first").animate({
                        width: 0
                    });
                    var b = a.find(".section:last").outerWidth();
                    a.find(".section:last").removeAttr("style").css({
                        "float": "right"
                    }).animate({
                        "margin-right": ($(window).width() - b) / 2 + "px"
                    }, 400, function() {
                        a.find(".animated").addClass("pulse")
                    })
                } else {
                    a.find(".section:first").slideUp();
                    a.find(".section:last").height();
                    a.find(".section:last").removeAttr("style").animate({
                        height: "100%"
                    }, 400, function() {
                        a.find(".animated").addClass("pulse")
                    })
                }
            }).trigger("resize." + b.nameSpace), a.addClass("widget-animation-completed")
        }
    }), h.on("pause." + b.nameSpace, function() {
        j.show(), h.trigger("customPause")
    }), h.on("ended." + b.nameSpace, function() {
        f.find(".cpi-fullscreen-widget-banner").addClass("cpi-fullscreen-get"), j.hide(), h.trigger("customEnd")
    }), h.on("timeupdate." + b.nameSpace, function() {
        i.currentTime / i.duration >= .25 || Number(f.find(".video-progress-bar").children("div")[0].style.width.slice(0, -1)) >= 25, i.currentTime / i.duration >= .5 || Number(f.find(".video-progress-bar").children("div")[0].style.width.slice(0, -1)) >= 50, i.currentTime / i.duration >= .75 || Number(f.find(".video-progress-bar").children("div")[0].style.width.slice(0, -1)) >= 75, i.currentTime / i.duration >= .9 || Number(f.find(".video-progress-bar").children("div")[0].style.width.slice(0, -1)) >= 90, i.currentTime !== i.duration && "1" !== f.find(".inline-countdown").text().trim() || h.trigger("customEnd")
    }), j.on("click." + b.nameSpace, function(a) {
        a.stopPropagation(), h.get(0).play(), j.hide()
    }), f.find(".cpi-fullscreen-widget-close-button").on("click." + b.nameSpace, function(a) {
        a.stopPropagation();
        try {
            var e = {
                transactionId: String(b.transaction_id)
            };
            c ? postMessageToParent("cpiFullscreenWidget", "closed", e) : postMessageToParent("cpiCall2ActionWidget", "closed", e), trackInlineVideoProgress(b), d(null, "close", isUserWatchedEnough(b))
        } catch (f) {
            d(f)
        }
    }), jQuery(window).off("resize." + b.nameSpace).on("resize." + b.nameSpace, function() {
        try {
            scaleToFit(jQuery(b.widgetSettings.widgetRoot), jQuery(window).width(), jQuery(window).height(), b.widgetSettings)
        } catch (a) {
            d(a)
        }
    }).trigger("resize." + b.nameSpace)
}

function getParameterByName(a, b) {
    b || (b = window.location.href), a = a.replace(/[\[\]]/g, "\\$&");
    var c = new RegExp("[?&]" + a + "(=([^&#]*)|&|#|$)"),
        d = c.exec(b);
    return d ? d[2] ? decodeURIComponent(d[2].replace(/\+/g, " ")) : "" : null
}

function trackInlineVideoProgress(a) {
    var b = jQuery("." + a.nameSpace),
        c = b.find(".inline-video"),
        d = b.find(".inline-video-canvas");
    if (c.length && d.length && c.get(0).trackVideoProgress) {
        var e = b.find(".video-progress-bar");
        a.watchingPercentage = e.children("div").width() / e.width() * 100
    }
}

function loadFullscreenPartials() {
    var a = dust.compile(widgetTemplates["play-button"], "play-button");
    dust.loadSource(a)
}

function getMobileOperatingSystem() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return a.match(/iPad/i) || a.match(/iPhone/i) || a.match(/iPod/i) ? "iOS" : a.match(/Android/i) ? "Android" : "unknown"
}

function roundTime(a) {
    if (isNaN(a)) return "invalid";
    var b = a / 1e3;
    return 1 >= b ? "lte 1 second" : b > 1 && 3 >= b ? "1 to 3 seconds" : b > 3 && 5 >= b ? "3 to 5 seconds" : b > 5 && 10 >= b ? "5 to 10 seconds" : b > 10 ? "mt 10 seconds" : void 0
}

function createModCpiContainer(a) {
    "object" != typeof a && (a = {});
    var b = jQuery("<div>").addClass("cpi-widget-container mod-cpi-widget-container");
    jQuery("#sg-game-" + a.widgetId).append(b)
}

function createCpiBannerDescriptionContainer(a) {
    "object" != typeof a && (a = {});
    var b = jQuery("<div>").addClass("cpi-widget-container cpi-banner-description-container");
    jQuery("#sg-game-" + a.widgetId).append(b)
}

function modCpiCss(a) {
    var b = jQuery("#sg-game-" + a.widgetId + " .mod-cpi-widget-container"),
        c = getCpiFullscreenWidgetSize(a.maxSize);
    b.css("width", c).css("height", c)
}

function createCpiContainer(a) {
    var b = jQuery("<div>").addClass("sg-cpi-wrapper").attr("id", "cpi-wrapper-" + a.widgetId);
    b.css("width", a.widgetWidth + "px").css("height", a.widgetHeight + "px");
    var c = jQuery("<div>").addClass("sg-cpi-container").attr("id", "sg-cpi-container-" + a.widgetId).css("height", a.widgetHeight + "px").css("width", a.widgetWidth + "px");
    if ("gifts" === a.layout) {
        var d = jQuery("<div>").addClass("cpi-deal-header-container"),
            e = jQuery("<div>").addClass("cpi-deal-gift-image-container"),
            f = jQuery("<img>").addClass("cpi-deal-gift-image").attr("src", "https://s3.amazonaws.com/embedder-container/gift_icon.jpg");
        e.append(f);
        var g = jQuery("<div>").addClass("cpi-title-header").append(a.cpiTitle);
        d.append(e).append(g), c.append(d), g.css("width", a.widgetWidth - e.outerWidth() + "px")
    }
    b.append(c), setCpiDealPosition(b, a.widgetWidth, a.widgetHeight);
    var h = jQuery("#sg-game-" + a.widgetId);
    h.append(b), h.css("width", a.widgetWidth), jQuery(window).on("resize", function() {
        setCpiDealPosition(b, a.widgetWidth, a.widgetHeight)
    })
}

function setCpiDealPosition(a, b, c) {
    a.css("top", jQuery(window).height() / 2 - c / 2 + "px"), a.css("left", jQuery(window).width() / 2 - b / 2 + "px")
}

function createCpiDeal(a, b) {
    "object" != typeof b && (b = {}), "object" != typeof a[0] && (a = []), console.log("response: ", a, "widgetOtions;: ", b);
    var c = jQuery("<div>").addClass("cpi-deal-content");
    if (0 === a.length) {
        console.log("response from CPI Service empty: ");
        var d = jQuery("<div>").addClass("cpi-deal-no-gift-title").append("Empty gift!"),
            e = jQuery("<div>").addClass("cpi-deal-no-gift").append("Better luck next time!");
        c.css("margin-top", "40%"), c.append(d).append(e);
        var f = {
            transactionId: String(b.transaction_id)
        };
        postMessageToParent("cpiWidget", "empty", f)
    } else {
        a = a[0];
        var g = jQuery("<div>").addClass("cpi-deal-title").append(a.title),
            h = jQuery("<div>").addClass("cpi-deal-image-container"),
            i = jQuery("<img>").addClass("cpi-deal-image").attr("src", a.icon);
        h.append(i);
        var j = jQuery("<div>").addClass("cpi-deal-description").append(a.description),
            k = jQuery("<div>").addClass("cpi-deal-get-it").append("Take it!");
        k.on("click", function() {
            var c = a.url;
            console.log("Opening tab: ", c), window.open(c, "_blank");
            var d = {
                transactionId: String(b.transaction_id)
            };
            postMessageToParent("cpiWidget", "clicked", d)
        });
        var l = jQuery("<div>").addClass("sg-widget-tracking-pixel").css("width", "1px").css("height", "1px").append(a.trackingPixel);
        c.append(h).append(g).append(j).append(k).append(l)
    }
    jQuery("#sg-cpi-container-" + b.widgetId).append(c), 0 !== a.length && k.css("left", b.widgetWidth / 2 - k.outerWidth(!0) / 2)
}

function getDiv(a) {
    var b = jQuery("<div>");
    return a && b.addClass(a), b
}

function getCell(a) {
    var b = getDiv("row"),
        c = getDiv("col-md-12");
    return a && c.append(a), b.append(c)
}

function createCpiBannerDescriptionWidget(a, b) {
    if (!b || !a) return void console.error("Missing data", {
        options: a,
        widgetOptions: b
    });
    b = b || {}, a = a || [], a = a[0] || {};
    var c = getDiv("cpi-banner-description-content"),
        d = jQuery("<img>").addClass("cpi-deal-image").attr("src", a.icon),
        e = getCell(d),
        f = jQuery("<h1>").addClass("h1 cpi-deal-title").append(a.title),
        g = getCell(f),
        h = jQuery("<p>").addClass("cpi-deal-description").append(a.description),
        i = getCell(h),
        j = jQuery("<button>").addClass("col-md-10 col-md-offset-1 btn cpi-deal-button").append("Play now"),
        k = getCell(j);
    c.on("click", function() {
        var c = a.url;
        console.log("Opening tab: ", c), window.open(c, "_blank");
        var d = {
            transactionId: String(b.transaction_id)
        };
        postMessageToParent("cpiWidget", "clicked", d)
    });
    var l = jQuery("<div>").addClass("sg-widget-tracking-pixel").css("width", "1px").css("height", "1px").append(a.trackingPixel);
    c.append(e).append(g).append(i).append(k).append(l), jQuery("#sg-game-" + b.widgetId + " .cpi-banner-description-container").append(c)
}

function createCpiDealForPubNative(a) {
    var b = jQuery("<div>").addClass("cpi-deal-content"),
        c = jQuery("<div>").attr("id", "widget-9cd431908dcafb848762015ab6f10bb1f2cbff85cebbbd78d70070fd73e59b2d");
    b.append(c), jQuery("#sg-cpi-container-" + a.widgetId).append(b),
    function() {
        var a = document.createElement("script");
        a.type = "text/javascript", a.async = !0, a.src = ("https:" == location.protocol ? "https" : "http") + "://cdn.pubnative.net/widget/html5.js";
        var b = document.getElementsByTagName("script")[0];
        b.parentNode.insertBefore(a, b)
    }();
    var d = setInterval(function() {
        if (jQuery(".al-img-wrapper").length > 0 && (clearInterval(d), 0 == jQuery(".al-img-wrapper").find("img").length)) {
            c.hide();
            var a = jQuery("<div>").addClass("cpi-deal-no-gift-title").append("Empty gift!"),
                b = jQuery("<div>").addClass("cpi-deal-no-gift").append("Better luck next time!");
            a.css("margin-top", "25%"), a.insertAfter(c), b.insertAfter(a)
        }
    }, 200)
}

function createCrossPromotions(a, b, c) {
    try {
        trackXPromo("requested"), jQuery("body").addClass("noscroll"), showCrossPromotion(a, b, c)
    } catch (d) {
        b(d)
    }
}

function showCrossPromotion(a, b, c) {
    try {
        if (!a) throw new Error("no options passed");
        getParameterByName("forceLayout") && (a.layout = getParameterByName("forceLayout")), a.layout && widgetTemplates[a.layout] || (a.layout = "cross-promotions-alt-a");
        var d = {
            widgetRoot: ".cpi-fullscreen-widget-container"
        };
        a.widgetSettings = d;
        var e = {};
        a.crossPromoLink && a.crossPromoImage ? (e.href = a.crossPromoLink, e.iconPath = a.crossPromoImage) : (e.href = "http://games.softgames.de/" + a.crossPromoGameSlug + "/", e.iconPath = "//d1bjj4kazoovdg.cloudfront.net/assets/games/" + a.crossPromoGameSlug + "/icon.jpg"), renderWidgetTemplate(a.layout, e, function(d, e) {
            try {
                if (d) throw d;
                var f = jQuery("#sg-game-" + a.widgetId);
                if (!f.length) throw new Error("No widget container for id: " + a.widgetId);
                f.append(e), setTimeout(function() {
                    bindCrossPromotionsEvents(a, b, c)
                }, 500), f.find(".widget-root").addClass(a.nameSpace), jQuery(".no-show-delay").show(), jQuery(".cpi-fullscreen-widget-close-button").not(".no-show-delay").hide(), trackXPromo("displayed")
            } catch (g) {
                b(g)
            }
        })
    } catch (f) {
        b(f)
    }
}

function bindCrossPromotionsEvents(a, b, c) {
    var d = jQuery("." + a.nameSpace);
    d.find(".cpi-fullscreen-widget-close-button").on("click." + a.nameSpace, function(b) {
        b.stopPropagation(), trackXPromo("canceled"), closeCrossPromo(a, c)
    }), d.find(".open-cross-promotion").on("click", function() {
        setTimeout(function() {
            trackXPromo("accepted"), closeCrossPromo(a, c)
        }, 100)
    }), b()
}

function trackXPromo(a) {
    try {
        window.sgTrackSdk.trackEvent("crossPromotionWidget", a)
    } catch (b) {
        console.log("tracking failed due to error", b)
    }
}

function closeCrossPromo(a, b) {
    try {
        var c = {
            transactionId: String(a.transaction_id)
        };
        postMessageToParent("crossPromotions", "closed", c), b(null, "close")
    } catch (d) {
        b(d)
    }
}

function createDFPAd(a, b, c) {
    googletag.cmd.push(function() {
        googletag.defineSlot(a, b, c).addService(googletag.pubads()), googletag.pubads().enableSingleRequest(), googletag.enableServices()
    }), googletag.cmd.push(function() {
        googletag.display(c)
    })
}

function createDfpFullscreenDeal(a, b, c) {
    try {
        if (!a) throw new Error("widgetOptions not supplied");
        var d = "dfp-ad-container-" + a.widgetId,
            e = {
                containerID: d,
                width: parseInt(a.widgetWidth) + 6 || "306"
            };
        renderWidgetTemplate(dfpWidgetTemplateName, e, function(e, f) {
            if (e) throw e;
            var g = jQuery("#sg-game-" + a.widgetId);
            if (!g.length) throw new Error("No widget container for id: " + a.widgetId);
            if (g.append(f), !jQuery("#" + d).length) throw new Error("No container for id: " + d);
            jQuery(g).find(".widget-root").addClass(a.nameSpace), createDFPAd(a.adUnitId, [a.widgetWidth, a.widgetHeight], d), bindDfpFullScreenWidgetEvents(a, c), jQuery(".fullscreen-widget-close-button").hide(), setTimeout(function() {
                jQuery(".fullscreen-widget-close-button").show()
            }, 2e3), b()
        })
    } catch (f) {
        console.error(f), b(f)
    }
}

function bindDfpFullScreenWidgetEvents(a, b) {
    var c = jQuery("." + a.nameSpace);
    c.find(".fullscreen-widget-close-button").on("click." + a.nameSpace, function(c) {
        c.stopPropagation();
        try {
            var d = {
                transactionId: String(a.transaction_id)
            };
            postMessageToParent("dfpFullscreenWidget", "closed", d), b(null, "close")
        } catch (e) {
            b(e)
        }
    })
}

function createGameBoxWithDetailsContainer(a) {
    var b = jQuery("<div>").addClass("sg-auto-game-wrapper game-box-with-details-wrapper").attr("id", "game-box-games-wrapper-" + a.widgetId);
    jQuery("#sg-game-" + a.widgetId).append(b)
}

function gameBoxWithDetailsHtml(a, b) {
    var c = jQuery("<div>").addClass("sg-game sg-game-box-with-details-game-container sg-game-wrapper sg-game-container").attr("id", "sg-game-" + a.gameid).css("background-color", b.backgroundColor).css("width", b.elementWidth).css("border", "1px solid #DDDADD"),
        d = jQuery("<div>").addClass("sg-game-box-with-details-image-container sg-play-trigger").css("width", b.imageWidth).css("height", b.imageHeight).css("margin-bottom", "6%"),
        e = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.imgTeaser).css("width", b.imageWidth).css("height", b.imageHeight),
        f = jQuery('<img class="sg-play-overlay">').attr("src", "//dop3jnx8my3ym.cloudfront.net/play-classic.png"),
        g = jQuery("<div>").addClass("sg-game-box-with-details-play-button").append(b.buttonText).css("height", .15 * b.imageHeight).css("width", .5 * b.imageWidth).css("line-height", .15 * b.imageHeight + "px").css("color", b.buttonTextColor).css("bottom", b.imageHeight * -.15 / 2).css("background", "-webkit-linear-gradient(" + b.gradientTop + "," + b.gradientBottom + ")").css("background", "-o-linear-gradient(" + b.gradientTop + "," + b.gradientBottom + ")").css("background", "-moz-linear-gradient(" + b.gradientTop + "," + b.gradientBottom + ")").css("background", "linear-gradient(" + b.gradientTop + "," + b.gradientBottom + ")");
    jQuery(d).append(e).append(f).append(g);
    var h = a.gameType.split(","),
        i = h[h.length - 1],
        j = jQuery("<div>").addClass("sg-game-box-with-details-type").append(i).css("color", b.mainColor),
        k = jQuery("<div>").addClass("sg-game-box-with-details-after-type").css("margin-bottom", .03 * b.widgetHeight),
        l = jQuery("<div>").addClass("sg-game-box-with-details-title").append(jQuery("<span>").text(a.gameTitle)),
        m = jQuery("<div>").addClass("sg-main-description sg-game-box-with-details-description").append(a.desc).css("height", 19 * Math.floor(b.imageHeight / 2 / 19));
    jQuery(c).append(d).append(j).append(k).append(l).append(m), jQuery("#game-box-games-wrapper-" + b.widgetId).append(c), jQuery(".sg-game-play-btn").hover(function(a) {
        jQuery(this).css("background-color", "mouseenter" === a.type ? b.buttonHoverColor : b.buttonColor)
    })
}

function createVerticalGameBoxContainer(a) {
    var b = jQuery("<div>").addClass("sg-auto-game-wrapper").attr("id", "game-box-games-wrapper-" + a.widgetId).css("width", "310px");
    if (a.showWidgetTitle) {
        var c = jQuery("<div>").addClass("sg-main-widget-title sg-vertical-game-box-title").append(a.widgetTitle).css("border-top", "1px solid " + a.buttonColor).css("color", a.buttonColor);
        b.append(c)
    }
    jQuery("#sg-game-" + a.widgetId).append(b)
}

function createGameBoxContainer(a) {
    var b = jQuery("<div>").addClass("sg-auto-game-wrapper").attr("id", "game-box-games-wrapper-" + a.widgetId);
    jQuery("#sg-game-" + a.widgetId).append(b)
}

function gameBoxHtml(a, b) {
    var c = jQuery("<div>").addClass("sg-game custom-widget-game sg-game-wrapper sg-game-container").attr("id", "sg-game-" + a.gameid).css("background-color", b.backgroundColor).css("border", b.borderStyle),
        d = jQuery("<div>"),
        e = jQuery("<div>").addClass("sg-game-thumbnail sg-play-trigger"),
        f = jQuery("<img>").attr("alt", a.gameTitle).attr("src", a.imgTeaser);
    jQuery(e).append(f);
    var g = jQuery("<h5>").addClass("sg-game-title"),
        h = jQuery("<a>").css("font-family", b.titleFont).css("color", b.titleColor).attr("href", a.publisherLink).append(a.gameTitle);
    if (jQuery(g).append(h), b.showRating) {
        for (var i = jQuery("<div>").addClass("sg-game-rating"), j = 0; j < a.gameRating; j++) {
            var k = jQuery("<span>").addClass("star-on");
            jQuery(i).append(k)
        }
        for (var l = 0; l < 5 - a.gameRating; l++) {
            var m = jQuery("<span>").addClass("star-off");
            jQuery(i).append(m)
        }
    }
    var n = jQuery("<div>").addClass("sg-play-trigger sg-game-play-btn play-game-btn").css("font-family", b.buttonTextFont).css("background-color", b.buttonColor).css("color", b.buttonTextColor).append(b.buttonText);
    jQuery(d).append(e).append(g).append(i).append(n), jQuery(c).append(d), jQuery("#game-box-games-wrapper-" + b.widgetId).append(c), jQuery(".sg-game-play-btn").hover(function(a) {
        jQuery(this).css("background-color", "mouseenter" === a.type ? b.buttonHoverColor : b.buttonColor)
    }), "vertical-game-box" === b.type && (jQuery(".custom-widget-game").css("margin-right", "5px"), d.addClass("sg-play-trigger"), n.removeClass("sg-play-trigger"), e.removeClass("sg-play-trigger"), h.css("pointer-events", "none")), b.openGameInTab && gameOpensInTab(b.widgetId, a.gamename, a.agent), b.gameOnPage === a.gamename && (n.text(b.gameOnPagePlayButton).removeClass("sg-play-trigger").css("font-size", "smaller").addClass("main-game-play-trigger"), e.removeClass("sg-play-trigger").addClass("main-game-play-trigger"), jQuery(".main-game-play-trigger").click(function(a) {
        jQuery(".voyager-success-btn").click()
    }))
}

function createGridContainer(a) {
    var b;
    b = a.screenWidth < a.gridMaxWidth ? a.screenWidth : a.gridMaxWidth;
    var c = jQuery("<div>").addClass("sg-widget-container sg-grid-widget-container").attr("id", "sg-widget-games-" + a.widgetId).css("max-width", b + "px"),
        d = jQuery("<div>").addClass("sg-grid-widget-row").attr("id", "sg-grid-widget-row-" + rowCounter);
    c.append(d), jQuery("#sg-game-" + a.widgetId).append(c)
}

function gridHtml(a, b) {
    if (gameCounter == b.gamesPerRow) {
        rowCounter++, gameCounter = 0;
        var c = jQuery("<div>").addClass("sg-grid-widget-row").attr("id", "sg-grid-widget-row-" + rowCounter);
        jQuery("#sg-widget-games-" + b.widgetId).append(c)
    }
    var d;
    d = b.screenWidth < b.gridMaxWidth ? b.screenWidth / b.gamesPerRow + "px" : 100 / b.gamesPerRow + "%";
    var e = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("sg-grid-game-container sg-game-container").css("width", d),
        f = jQuery("<div>").addClass("sg-grid-image-container sg-play-trigger");
    b.isInIframe && f.attr("target", "sgiframeplayer");
    var g = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.thumbBig).addClass("sg-grid-image");
    f.append(g), e.append(f), gameCounter++, jQuery("#sg-grid-widget-row-" + rowCounter).append(e)
}

function iconHtml(a, b) {
    var c = jQuery("<div>").addClass("banner-s-widget-game sg-game-wrapper sg-game-container").attr("id", "sg-game-" + a.gameid),
        d = jQuery("<div>").addClass("banner-s-game-thumbnail"),
        e = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.thumbBig).addClass("sg-play-trigger");
    jQuery(d).append(e), jQuery(c).append(d), jQuery("#sg-game-" + b.widgetId).append(c)
}

function createListEntrypointContainer(a) {
    var b = jQuery("<div>").addClass("sg-accordion-widget-wrapper sg-list-entrypoint").attr("id", "sg-accordion-widget-wrapper-" + a.widgetId).css("width", a.widgetWidth),
        c = jQuery("<a>").addClass("sg-accordion-container").attr("id", "sg-accordion-container-" + a.widgetId).css("width", a.widgetWidth).attr("href", a.targetLink);
    a.isInIframe && c.attr("target", "sgiframeplayer"), b.append(c), jQuery("#sg-game-" + a.widgetId).append(b)
}

function listEntrypointHtml(a, b) {
    var c = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("sg-game-container sg-accordion-game-wrapper").css("height", b.imageHeight),
        d = jQuery("<div>").addClass("sg-accordion-game-container"),
        e = jQuery("<div>").addClass("sg-accordion-game-rank").text(b.gameNumber),
        f = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.thumb).addClass("sg-accordion-img").css("height", .9 * b.imageHeight),
        g = jQuery("<div>").addClass("sg-accordion-title").css("line-height", b.imageHeight + "px").append(jQuery("<span>").text(a.gameTitle)),
        h = jQuery("<div>").addClass("sg-accordion-play-button").text(">").css("height", .6 * b.imageHeight).css("width", .6 * b.imageWidth).css("color", b.sectionHeaderColor);
    h.css("line-height", h.height() + "px"), d.append(e).append(f).append(g).append(h), c.append(d), jQuery("#sg-accordion-section-" + b.widgetId + "-" + b.sectionId).append(c), jQuery(".sg-accordion-play-button").hover(function(a) {
        jQuery(this).css("background-color", "mouseenter" === a.type ? b.sectionHeaderColor : "white"), jQuery(this).css("color", "mouseenter" === a.type ? "white" : b.sectionHeaderColor)
    })
}

function createMainContainer(a) {
    var b = jQuery("<div>").addClass("sg-widget-container sg-pub-" + a.pubCssClassName);
    if (a.showWidgetTitle) {
        var c = jQuery("<span>").addClass("main-title-line main-before-title"),
            d = jQuery("<span>").addClass("main-title-line main-after-title");
        a.widgetWidth > 767 && a.widgetWidth < 992 ? (c.css("width", "33%"), d.css("width", "33%")) : a.widgetWidth < 768 && (c.css("width", "25%"), d.css("width", "25%"));
        var e = jQuery("<div>").addClass("sg-main-widget-title").append(c).append(a.widgetTitle).append(d)
    }
    var f = jQuery("<div>").addClass("sg-main-widget-games").attr("id", "sg-widget-games-" + a.widgetId),
        g = jQuery("<div>").addClass("sg-logo-link");
    if (a.showLogo) {
        var h = jQuery("<a>").attr("href", "//www.softgames.com/").attr("target", "_blank").append(jQuery("<img>").attr("src", "//dop3jnx8my3ym.cloudfront.net/logo.png"));
        g.append(h)
    }
    if (a.moreGamesLink) {
        var i = jQuery("<a>").attr("href", a.moreGamesLink).attr("target", "_blank").addClass("sg-more-games-link").text("Mehr Spiele >>");
        g.append(i)
    }
    if ("title-top" === a.layout) {
        var j = jQuery("<div>").addClass("sg-main-title-top-line").css("width", a.widgetWidthPx).css("height", "20px");
        b.append(j)
    }
    a.showWidgetTitle && b.append(e), a.showLogo || a.moreGamesLink ? b.append(f).append(g) : b.append(f), jQuery("#sg-game-" + a.widgetId).append(b), "vertical" === a.orientation && (jQuery("#sg-game-" + a.widgetId).css("width", a.widgetWidth), jQuery("#sg-game-" + a.widgetId).css("height", a.widgetHeight), f.css("height", a.widgetHeight), f.css("width", a.widgetWidth), b.css("width", a.widgetWidth), b.css("height", a.widgetHeight), a.mobileDevice && (jQuery("#sg-game-" + a.widgetId).css("width", "100%"), f.css("width", "100%"), b.css("width", "100%"), jQuery("#sg-game-" + a.widgetId).css("max-width", a.screenWidth), f.css("max-width", a.screenWidth), b.css("max-width", a.screenWidth))), a.mobileDevice && a.screenWidth < 700 && ("thumbnail-large" == a.layout ? a.widgetHeight *= 2 * a.numberOfGames : a.widgetHeight *= 1.2)
}

function mainHtml(a, b) {
    var c = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("sg-main-game-container sg-game-container").css("width", b.elementWidth + "%"),
        d = jQuery("<div>").addClass("sg-play-trigger play-trigger-container").css("height", "100%"),
        e = jQuery("<div>").addClass("sg-main-image-container"),
        f = jQuery("<div>").addClass("sg-main-text-container"),
        g = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).addClass("sg-main-image sg-lazy-loaded").attr("src", "//s3.amazonaws.com/embedder-container/loader.gif").attr("data-src", a.imgTeaser),
        h = jQuery('<img class="sg-play-overlay">').attr("src", "//dop3jnx8my3ym.cloudfront.net/play.png");
    if (jQuery(e).append(g).append(h), b.showType) var i = a.gameType.split(","),
    j = i[i.length - 1], k = jQuery("<div>").addClass("sg-main-type").append(j);
    var l = jQuery("<div>").addClass("sg-main-title").append(jQuery("<span>").text(a.gameTitle)),
        m = jQuery("<div>").addClass("sg-main-description").append(a.desc),
        n = jQuery("<div>").addClass("sg-main-play-button sg-play-trigger").append(b.buttonText).css("background-color", b.buttonColor).css("color", b.buttonTextColor);
    if (d.append(e), "vertical" === b.orientation && c.css("height", b.elementHeight).css("overflow", "hidden").addClass("sg-vertical-game-container"), "thumbnail-large" === b.layout && b.mobileDevice && b.screenWidth < 700 && c.css("width", "100%"), "thumbnail-large" === b.layout && (b.showType ? f.append(k).append(l) : f.append(l), d.append(f), c.append(d), jQuery("#sg-widget-games-" + b.widgetId).append(c)), "thumbnail-small" === b.layout && (b.showType ? f.append(k).append(l) : f.append(l), d.append(f), c.append(d), l.after(m), m.text(cutDescription(a.desc, 300)), jQuery("#sg-widget-games-" + b.widgetId).append(c)), "thumbnail-medium" === b.layout) {
        b.showType ? f.append(k).append(l) : f.append(l), d.append(f), c.append(d), c.css("width", b.mobileDevice ? "100%" : b.widgetWidth), e.css("width", "50%").css("margin-right", "5%"), f.addClass("sg-main-thumbnail-medium-right-col"), m.text(cutDescription(a.desc, 125)), l.after(m);
        var o = b.imageHeight - (l.height() + k.height() - n.height());
        o = 26 * Math.floor(o / 26), m.css("height", o).css("float", "left").css("overflow", "hidden"), f.css("height", b.imageHeight), jQuery("#sg-widget-games-" + b.widgetId).append(c)
    }
    "title-top" === b.layout && (e.addClass("sg-play-trigger").css("margin-bottom", "3%"), l.addClass("sg-main-title-top-title sg-play-trigger").removeClass("sg-main-title"), m.text(cutDescription(a.desc, 150)).css("width", "100%").css("float", "left"), h.attr("src", "//dop3jnx8my3ym.cloudfront.net/play-classic.png").addClass("sg-main-title-top-play-overlay").removeClass("sg-play-overlay"), n.addClass("sg-main-title-top-play-button").removeClass("sg-main-play-button"), c.append(l).append(e).append(m).append(n), jQuery("#sg-widget-games-" + b.widgetId).append(c), jQuery(".sg-main-title-top-title").hover(function(a) {
        jQuery(this).css("color", "mouseenter" === a.type ? b.buttonColor : "black")
    }), jQuery(".sg-main-title-top-play-button").hover(function(a) {
        jQuery(this).css("background-color", "mouseenter" === a.type ? b.buttonHoverColor : b.buttonColor)
    }))
}

function mainCss(a) {
    if (jQuery("#sg-game-" + a.widgetId).css("height", "auto"), "thumbnail-medium" === a.layout) {
        var b, c, d = (jQuery("#sg-game-" + a.widgetId + " .sg-main-game-container").height(), jQuery("#sg-game-" + a.widgetId + " .sg-main-type")),
            e = jQuery("#sg-game-" + a.widgetId + " .sg-main-play-button"),
            f = jQuery("#sg-game-" + a.widgetId + " .sg-main-title"),
            g = jQuery("#sg-game-" + a.widgetId + " .sg-main-description"),
            h = jQuery("#sg-game-" + a.widgetId + " .sg-main-image-container").width() * a.thumbRatio,
            i = f.outerHeight(),
            j = d.outerHeight(),
            k = e.outerHeight();
        a.screenWidth <= 768 ? (e.css("display", "none"), d.css("display", "none"), f.css("min-height", "0"), b = h - i) : (e.css("display", "block"), d.css("display", "block"), b = h - (i + j + k), b = 26 * Math.floor(b / 26)), c = b + i + j, a.widgetWidthPx < 550 ? g.hide() : g.show(), jQuery("#sg-game-" + a.widgetId + " .sg-main-description").css("height", b), jQuery(".sg-main-thumbnail-medium-right-col").css("height", c).css("overflow", "hidden"), jQuery("#sg-game-" + a.widgetId + " .sg-main-game-container").css("height", h), jQuery(".sg-main-play-button-thumbnail-medium").css("float", "left"), jQuery("#sg-game-" + a.widgetId + " .sg-main-widget-games").css("height", "auto"), jQuery("#sg-game-" + a.widgetId + " .sg-widget-container").css("height", "auto"), jQuery("#sg-game-" + a.widgetId).css("height", "auto")
    }
    if ("thumbnail-small" === a.layout) {
        var l = jQuery("#sg-game-" + a.widgetId + " .sg-main-image-container"),
            e = (jQuery("#sg-game-" + a.widgetId + " .sg-main-image"), jQuery("#sg-game-" + a.widgetId + " .sg-main-play-button")),
            f = jQuery("#sg-game-" + a.widgetId + " .sg-main-title"),
            d = jQuery("#sg-game-" + a.widgetId + " .sg-main-type"),
            m = jQuery("#sg-game-" + a.widgetId + " .sg-main-description"),
            n = jQuery("#sg-game-" + a.widgetId + " .sg-main-game-container"),
            o = jQuery("#sg-game-" + a.widgetId + " .sg-main-text-container"),
            p = (jQuery("#sg-game-" + a.widgetId + " .sg-main-widget-games"), jQuery("#sg-game-" + a.widgetId)),
            k = e.outerHeight(!0),
            i = f.outerHeight(!0),
            j = d.outerHeight(!0),
            h = n.width() / a.numberOfGames * 2 * a.thumbRatio,
            q = k + i + j,
            b = 200;
        a.screenWidth <= 768 ? (l.css("width", "100%"), o.css("width", "100%"), f.css("width", "100%"), d.css("width", "100%"), m.css("width", "100%").show(), e.css("display", "none"), q += h + k, a.screenWidth < 768 && m.hide()) : (m.show(), l.css("width", "50%").css("margin-right", "5%"), d.css("width", "45%").css("float", "right"), f.css("width", "45%").css("float", "right"), q = b + 2 * k, e.css("display", "block"), m.css("width", "100%")), e.css("padding-top", 0).css("padding-bottom", 0), n.css("height", "100%"), o.css("height", "100%"), p.css("height", "100%")
    }
    if ("title-top" === a.layout) {
        var m = jQuery("#sg-game-" + a.widgetId + " .sg-main-description"),
            r = 0;
        m.each(function() {
            var a = jQuery(this).height();
            a > r && (r = a)
        }), m.css("height", r)
    }
}

function mainAdContainer(a) {
    var b = jQuery("<div>").css("width", a.elementWidth + "%").addClass("sg-main-game-container sg-game-container sg-main-ad-container").attr("id", "sg-main-ad-container-" + a.widgetId);
    jQuery("#sg-widget-games-" + a.widgetId).append(b)
}

function adConfig(a) {
    jQuery("#sg-game-" + a.widgetId + " .sg-main-image").load(function() {
        jQuery(".sg-main-ad-container").css("height", jQuery("#sg-game-" + a.widgetId + " .sg-main-game-container").not(".sg-main-ad-container").height())
    });
    var b = "sg-main-ad-container-" + a.widgetId,
        c = [];
    googletag.cmd.push(function() {
        var a = googletag.sizeMapping().addSize([320, 480], [300, 250]).addSize([480, 320], [300, 250]).addSize([640, 480], [300, 250]).addSize([980, 690], [300, 250]).addSize([1024, 768], [300, 250]).addSize([0, 0], [250, 250]).build();
        c[0] = googletag.defineSlot("/418149392/S_GAME_DETAIL_W", [
            [250, 250],
            [300, 250],
            [200, 200]
        ], b).defineSizeMapping(a).addService(googletag.pubads()), googletag.pubads().enableSingleRequest(), googletag.enableServices()
    }), googletag.cmd.push(function() {
        googletag.display(b)
    })
}

function packedGridEntrypointHtml(a, b) {
    var c = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("packed-item sg-game-container");
    1 === gameCounter ? (c.css("width", (b.widgetWidth - 40) / 2 + "px"), c.css("height", (b.widgetWidth - 38) / 2 + "px")) : (c.css("width", (b.widgetWidth - 46) / 4 + "px"), c.css("height", (b.widgetWidth - 46) / 4 + "px"));
    var d = jQuery("<div>").addClass("sg-grid-image-container");
    b.isInIframe && d.attr("target", "sgiframeplayer");
    var e = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.thumb).addClass("sg-grid-image");
    d.append(e);
    var f = jQuery("<a>").attr("href", b.targetLink);
    f.append(d), c.append(f), gameCounter++, jQuery("#sg-widget-games-" + b.widgetId).append(c)
}

function createPackedGridContainer(a) {
    var b;
    b = a.screenWidth < a.gridMaxWidth ? a.screenWidth : a.gridMaxWidth;
    var c = jQuery("<div>").addClass("sg-packed-grid-wrapper").css("width", a.widgetWidth);
    if (a.showWidgetTitle) var d = jQuery("<span>").addClass("main-title-line main-before-title"),
    e = jQuery("<span>").addClass("main-title-line main-after-title"), f = jQuery("<div>").addClass("sg-main-widget-title").append(d).append(a.widgetTitle).append(e);
    var g = jQuery("<div>").addClass("masonry-enabled sg-widget-container sg-packed-grid-widget-container").attr("id", "sg-widget-games-" + a.widgetId);
    a.showWidgetTitle && c.append(f), c.append(g), jQuery("#sg-game-" + a.widgetId).append(c), a.mobileDevice ? (c.css("width", "100%"), c.css("max-width", a.screenWidth), g.css("width", "100%"), g.css("max-width", a.screenWidth), a.showWidgetTitle && a.screenWidth <= 1280 && (d.css("width", "3%"), e.css("width", "3%"))) : a.showWidgetTitle && (d.css("width", "6%"), e.css("width", "6%"))
}

function injectPackedGridGame(a, b) {
    var c = jQuery("<div>").attr("id", "sg-game-" + a.gameid).addClass("packed-item sg-game-container"),
        d = b.highlightedGames.indexOf(a.gamename) >= 0;
    d ? (c.css("width", (b.widgetWidthPx - 20) / 2 + "px"), c.css("height", (b.widgetWidthPx - 20) / 2 + "px"), c.addClass("large-game")) : (c.css("width", (b.widgetWidthPx - 20) / 4 + "px"), c.css("height", (b.widgetWidthPx - 20) / 4 + "px"));
    var e = jQuery("<div>").addClass("sg-grid-image-container sg-play-trigger");
    b.isInIframe && e.attr("target", "sgiframeplayer");
    var f = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).addClass("sg-grid-image sg-lazy-loaded").attr("src", "//s3.amazonaws.com/embedder-container/loader.gif");
    d ? f.attr("data-src", a.thumbBig) : f.attr("data-src", a.thumbBig), e.append(f), c.append(e), gameCounter++, jQuery("#sg-widget-games-" + b.widgetId).append(c)
}

function renderPackedGridWidget(a, b) {
    if (b) {
        var c = $(".sg-packed-grid-wrapper").width();
        $(".packed-item").css("width", (c - 20) / 4 + "px").css("height", (c - 20) / 4 + "px"), $(".packed-item.large-game").css("width", (c - 20) / 2 + "px").css("height", (c - 20) / 2 + "px")
    }
    $(".masonry-enabled").masonry({
        itemSelector: ".packed-item"
    })
}

function createTeaserAdContainer(a) {
    var b = jQuery("#sg-game-" + a.widgetId),
        c = jQuery("<div>").addClass("teaser-ad-game-container");
    b.css("width", a.widgetWidth);
    var d = jQuery("<div>").addClass("sg-auto-game-wrapper teaser-ad-measurements sg-pub-" + a.pubCssClassName).attr("id", "game-teaser-games-wrapper-" + a.widgetId).css("width", a.widgetWidth),
        e = jQuery("<div>").addClass("teaser-ad-label").text("Advertisement");
    c.append(e), d.append(c), b.append(d)
}

function teaserAdHtml(a, b) {
    var c = jQuery('<div id="sg-game-' + a.gameid + '">').addClass("teaser-ad-widget-game").data("game-project", a.gamename),
        d = jQuery("<div>").addClass("sg-game-wrapper sg-game-container"),
        e = jQuery("<img>").addClass("teaser-ad-measurements").attr("src", a.thumbBig),
        f = jQuery("<div>").addClass("teaser-ad-overlay-play-button sg-play-trigger").text(b.buttonText).css("font-family", b.buttonTextFont).css("background-color", b.buttonColor).css("color", b.buttonTextColor).css("border", "2px solid " + b.buttonTextColor);
    if (b.showCloseButton) {
        var g = jQuery("<div>").addClass("teaser-ad-close-button sg-play-trigger"),
            h = jQuery("<img>").addClass("teaser-ad-close-image").attr("src", "https://s3.amazonaws.com/assets.sgc.io/assets/exit-closed-symbol-hi.png");
        g.append(h), d.append(e).append(f).append(g)
    } else d.append(e).append(f);
    c.append(d), jQuery("#sg-game-" + b.widgetId + " .teaser-ad-game-container").append(c), b.gameOnPage === a.gamename && (f.removeClass("sg-play-trigger").css("font-size", "smaller").addClass("main-game-play-trigger"), g && g.removeClass("sg-play-trigger").css("font-size", "smaller").addClass("main-game-play-trigger"), jQuery(".main-game-play-trigger").click(function(a) {
        jQuery(".voyager-success-btn").click()
    }))
}

function teaserAdCss(a) {
    jQuery("#sg-game-" + a.widgetId).addClass("teaser-ad-wrapper")
}

function createTeaserContainer(a) {
    var b = jQuery("#sg-game-" + a.widgetId),
        c = jQuery("<div>").addClass("std-game-container");
    b.css("width", a.widgetWidth);
    var d = jQuery("<div>").addClass("sg-auto-game-wrapper sg-pub-" + a.pubCssClassName).attr("id", "game-teaser-games-wrapper-" + a.widgetId).css("width", a.widgetWidth);
    d.append(c), b.append(d)
}

function teaserHtml(a, b) {
    var c = jQuery('<div id="sg-game-' + a.gameid + '">').addClass("std-widget-game"),
        d = jQuery("<div>").addClass("sg-game-wrapper sg-game-container sg-play-trigger"),
        e = jQuery("<div>").addClass("std-game-thumbnail"),
        f = jQuery("<img>").attr("alt", a.gameTitle).attr("title", "Play " + a.gameTitle).attr("src", a.imgTeaser);
    jQuery(e).append(f);
    var g = jQuery("<h5>").addClass("std-game-title"),
        h = jQuery("<span>").css("font-family", b.titleFont).css("color", b.titleColor).attr("href", a.publisherLink).append(a.gameTitle);
    jQuery(g).append(h), jQuery(d).append(e).append(g), c.append(d), jQuery("#sg-game-" + b.widgetId + " .std-game-container").append(c), b.openGameInTab && gameOpensInTab(b.widgetId, a.gamename, a.agent)
}
var cvpHandlers = {
    canvasClickHandler: null,
    videoTimeUpdateHandler: null,
    videoCanPlayHandler: null,
    windowResizeHandler: null
}, CanvasVideoPlayer = function(a) {
        var b;
        this.options = {
            framesPerSecond: 25,
            hideVideo: !0,
            autoplay: !1,
            audio: !1,
            timelineSelector: !1,
            resetOnLastFrame: !0,
            loop: !1
        };
        for (b in a) this.options[b] = a[b];
        if (this.video = document.querySelector(this.options.videoSelector), this.canvas = document.querySelector(this.options.canvasSelector), this.timeline = document.querySelector(this.options.timelineSelector), this.timelinePassed = document.querySelector(this.options.timelineSelector + "> div"), !this.options.videoSelector || !this.video) return void console.error('No "videoSelector" property, or the element is not found');
        if (!this.options.canvasSelector || !this.canvas) return void console.error('No "canvasSelector" property, or the element is not found');
        if (this.options.timelineSelector && !this.timeline) return void console.error('Element for the "timelineSelector" selector not found');
        if (this.options.timelineSelector && !this.timelinePassed) return void console.error('Element for the "timelinePassed" not found');
        if (this.options.audio) {
            if ("string" == typeof this.options.audio) {
                if (this.audio = document.querySelectorAll(this.options.audio)[0], !this.audio) return void console.error('Element for the "audio" not found')
            } else this.audio = document.createElement("audio"), this.audio.innerHTML = this.video.innerHTML, this.video.parentNode.insertBefore(this.audio, this.video), this.audio.load();
            var c = /iPad|iPhone|iPod/.test(navigator.platform);
            c && (this.options.autoplay = !1)
        }
        this.ctx = this.canvas.getContext("2d"), this.playing = !1, this.resizeTimeoutReference = !1, this.RESIZE_TIMEOUT = 1e3, this.init(), this.bind()
    };
CanvasVideoPlayer.prototype.init = function() {
    this.video.load(), this.setCanvasSize(), this.options.hideVideo && (this.video.style.display = "none")
}, CanvasVideoPlayer.prototype.getOffset = function(a) {
    var b, c, d;
    if (a) return c = a.getBoundingClientRect(), c.width || c.height || a.getClientRects().length ? (d = a.ownerDocument, b = d.documentElement, {
        top: c.top + window.pageYOffset - b.clientTop,
        left: c.left + window.pageXOffset - b.clientLeft
    }) : void 0
}, CanvasVideoPlayer.prototype.jumpTo = function(a) {
    this.video.currentTime = this.video.duration * a, this.options.audio && (this.audio.currentTime = this.audio.duration * a)
}, CanvasVideoPlayer.prototype.bind = function() {
    var a = this;
    this.canvas.addEventListener("click", cvpHandlers.canvasClickHandler = function() {
        a.playPause()
    }), this.video.addEventListener("timeupdate", cvpHandlers.videoTimeUpdateHandler = function() {
        a.drawFrame(), a.options.timelineSelector && a.updateTimeline()
    }), this.video.addEventListener("canplay", cvpHandlers.videoCanPlayHandler = function() {
        a.drawFrame()
    }), this.video.readyState >= 2 && a.drawFrame(), a.options.autoplay && a.play(), a.options.timelineSelector && this.timeline.addEventListener("click", function(b) {
        var c = b.clientX - a.getOffset(a.canvas).left,
            d = c / a.timeline.offsetWidth;
        a.jumpTo(d)
    }), window.addEventListener("resize", cvpHandlers.windowResizeHandler = function() {
        clearTimeout(a.resizeTimeoutReference), a.resizeTimeoutReference = setTimeout(function() {
            a.setCanvasSize(), a.drawFrame()
        }, a.RESIZE_TIMEOUT)
    }), this.unbind = function() {
        this.canvas.removeEventListener("click", cvpHandlers.canvasClickHandler), this.video.removeEventListener("timeupdate", cvpHandlers.videoTimeUpdateHandler), this.video.removeEventListener("canplay", cvpHandlers.videoCanPlayHandler), window.removeEventListener("resize", cvpHandlers.windowResizeHandler), this.options.audio && this.audio.parentNode.removeChild(this.audio)
    }
}, CanvasVideoPlayer.prototype.updateTimeline = function() {
    var a = (100 * this.video.currentTime / this.video.duration).toFixed(2);
    this.timelinePassed.style.width = a + "%"
}, CanvasVideoPlayer.prototype.setCanvasSize = function() {
    this.width = this.canvas.clientWidth, this.height = this.canvas.clientHeight, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height)
}, CanvasVideoPlayer.prototype.play = function() {
    this.lastTime = Date.now(), this.playing = !0, this.loop(), this.options.audio && (this.audio.currentTime = this.video.currentTime, this.audio.play())
}, CanvasVideoPlayer.prototype.pause = function() {
    this.playing = !1, this.options.audio && this.audio.pause()
}, CanvasVideoPlayer.prototype.playPause = function() {
    this.playing ? this.pause() : this.play()
}, CanvasVideoPlayer.prototype.loop = function() {
    var a = this,
        b = Date.now(),
        c = (b - this.lastTime) / 1e3;
    c >= 1 / this.options.framesPerSecond && (this.video.currentTime = this.video.currentTime + c, this.lastTime = b, this.audio && Math.abs(this.audio.currentTime - this.video.currentTime) > .3 && (this.audio.currentTime = this.video.currentTime)), this.video.currentTime >= this.video.duration && (this.playing = !1, this.options.resetOnLastFrame === !0 && (this.video.currentTime = 0), this.options.loop === !0 && (this.video.currentTime = 0, this.play())), this.playing ? this.animationFrame = requestAnimationFrame(function() {
        a.loop()
    }) : cancelAnimationFrame(this.animationFrame)
}, CanvasVideoPlayer.prototype.drawFrame = function() {
    this.ctx.drawImage(this.video, 0, 0, this.width, this.height)
}, ! function(a, b) {
    "function" == typeof define && define.amd && define.amd.dust === !0 ? define("dust.core", [], b) : "object" == typeof exports ? module.exports = b() : a.dust = b()
}(this, function() {
    function getTemplate(a, b) {
        return a ? "function" == typeof a && a.template ? a.template : dust.isTemplateFn(a) ? a : b !== !1 ? dust.cache[a] : void 0 : void 0
    }

    function load(a, b, c) {
        if (!a) return b.setError(new Error("No template or template name provided to render"));
        var d = getTemplate(a, dust.config.cache);
        return d ? d(b, Context.wrap(c, d.templateName)) : dust.onLoad ? b.map(function(b) {
            function d(a, d) {
                var f;
                if (a) return b.setError(a);
                if (f = getTemplate(d, !1) || getTemplate(e, dust.config.cache), !f) {
                    if (!dust.compile) return b.setError(new Error("Dust compiler not available"));
                    f = dust.loadSource(dust.compile(d, e))
                }
                f(b, Context.wrap(c, f.templateName)).end()
            }
            var e = a;
            3 === dust.onLoad.length ? dust.onLoad(e, c.options, d) : dust.onLoad(e, d)
        }) : b.setError(new Error("Template Not Found: " + a))
    }

    function Context(a, b, c, d, e) {
        void 0 === a || a instanceof Stack || (a = new Stack(a)), this.stack = a, this.global = b, this.options = c, this.blocks = d, this.templateName = e
    }

    function getWithResolvedData(a, b, c) {
        return function(d) {
            return a.push(d)._get(b, c)
        }
    }

    function Stack(a, b, c, d) {
        this.tail = b, this.isObject = a && "object" == typeof a, this.head = a, this.index = c, this.of = d
    }

    function Stub(a) {
        this.head = new Chunk(this), this.callback = a, this.out = ""
    }

    function Stream() {
        this.head = new Chunk(this)
    }

    function Chunk(a, b, c) {
        this.root = a, this.next = b, this.data = [], this.flushable = !1, this.taps = c
    }

    function Tap(a, b) {
        this.head = a, this.tail = b
    }
    var dust = {
        version: "2.7.2"
    }, NONE = "NONE",
        ERROR = "ERROR",
        WARN = "WARN",
        INFO = "INFO",
        DEBUG = "DEBUG",
        EMPTY_FUNC = function() {};
    dust.config = {
        whitespace: !1,
        amd: !1,
        cjs: !1,
        cache: !0
    }, dust._aliases = {
        write: "w",
        end: "e",
        map: "m",
        render: "r",
        reference: "f",
        section: "s",
        exists: "x",
        notexists: "nx",
        block: "b",
        partial: "p",
        helper: "h"
    },
    function() {
        var a, b, c = {
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                NONE: 4
            };
        "undefined" != typeof console && console.log ? (a = console.log, b = "function" == typeof a ? function() {
            a.apply(console, arguments)
        } : function() {
            a(Array.prototype.slice.apply(arguments).join(" "))
        }) : b = EMPTY_FUNC, dust.log = function(a, d) {
            d = d || INFO, c[d] >= c[dust.debugLevel] && b("[DUST:" + d + "]", a)
        }, dust.debugLevel = NONE, "undefined" != typeof process && process.env && /\bdust\b/.test(process.env.DEBUG) && (dust.debugLevel = DEBUG)
    }(), dust.helpers = {}, dust.cache = {}, dust.register = function(a, b) {
        a && (b.templateName = a, dust.config.cache !== !1 && (dust.cache[a] = b))
    }, dust.render = function(a, b, c) {
        var d = new Stub(c).head;
        try {
            load(a, d, b).end()
        } catch (e) {
            d.setError(e)
        }
    }, dust.stream = function(a, b) {
        var c = new Stream,
            d = c.head;
        return dust.nextTick(function() {
            try {
                load(a, d, b).end()
            } catch (c) {
                d.setError(c)
            }
        }), c
    }, dust.loadSource = function(source) {
        return eval(source)
    }, dust.isArray = Array.isArray ? Array.isArray : function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
    }, dust.nextTick = function() {
        return function(a) {
            setTimeout(a, 0)
        }
    }(), dust.isEmpty = function(a) {
        return 0 === a ? !1 : dust.isArray(a) && !a.length ? !0 : !a
    }, dust.isEmptyObject = function(a) {
        var b;
        if (null === a) return !1;
        if (void 0 === a) return !1;
        if (a.length > 0) return !1;
        for (b in a)
            if (Object.prototype.hasOwnProperty.call(a, b)) return !1;
        return !0
    }, dust.isTemplateFn = function(a) {
        return "function" == typeof a && a.__dustBody
    }, dust.isThenable = function(a) {
        return a && "object" == typeof a && "function" == typeof a.then
    }, dust.isStreamable = function(a) {
        return a && "function" == typeof a.on && "function" == typeof a.pipe
    }, dust.filter = function(a, b, c, d) {
        var e, f, g, h;
        if (c)
            for (e = 0, f = c.length; f > e; e++) g = c[e], g.length && (h = dust.filters[g], "s" === g ? b = null : "function" == typeof h ? a = h(a, d) : dust.log("Invalid filter `" + g + "`", WARN));
        return b && (a = dust.filters[b](a, d)), a
    }, dust.filters = {
        h: function(a) {
            return dust.escapeHtml(a)
        },
        j: function(a) {
            return dust.escapeJs(a)
        },
        u: encodeURI,
        uc: encodeURIComponent,
        js: function(a) {
            return dust.escapeJSON(a)
        },
        jp: function(a) {
            return JSON ? JSON.parse(a) : (dust.log("JSON is undefined; could not parse `" + a + "`", WARN), a)
        }
    }, dust.makeBase = dust.context = function(a, b) {
        return new Context(void 0, a, b)
    }, Context.wrap = function(a, b) {
        return a instanceof Context ? a : new Context(a, {}, {}, null, b)
    }, Context.prototype.get = function(a, b) {
        return "string" == typeof a && ("." === a[0] && (b = !0, a = a.substr(1)), a = a.split(".")), this._get(b, a)
    }, Context.prototype._get = function(a, b) {
        var c, d, e, f, g, h = this.stack || {}, i = 1;
        if (d = b[0], e = b.length, a && 0 === e) f = h, h = h.head;
        else {
            if (a) h && (h = h.head ? h.head[d] : void 0);
            else {
                for (; h && (!h.isObject || (f = h.head, c = h.head[d], void 0 === c));) h = h.tail;
                h = void 0 !== c ? c : this.global && this.global[d]
            }
            for (; h && e > i;) {
                if (dust.isThenable(h)) return h.then(getWithResolvedData(this, a, b.slice(i)));
                f = h, h = h[b[i]], i++
            }
        }
        return "function" == typeof h ? (g = function() {
            try {
                return h.apply(f, arguments)
            } catch (a) {
                throw dust.log(a, ERROR), a
            }
        }, g.__dustBody = !! h.__dustBody, g) : (void 0 === h && dust.log("Cannot find reference `{" + b.join(".") + "}` in template `" + this.getTemplateName() + "`", INFO), h)
    }, Context.prototype.getPath = function(a, b) {
        return this._get(a, b)
    }, Context.prototype.push = function(a, b, c) {
        return void 0 === a ? (dust.log("Not pushing an undefined variable onto the context", INFO), this) : this.rebase(new Stack(a, this.stack, b, c))
    }, Context.prototype.pop = function() {
        var a = this.current();
        return this.stack = this.stack && this.stack.tail, a
    }, Context.prototype.rebase = function(a) {
        return new Context(a, this.global, this.options, this.blocks, this.getTemplateName())
    }, Context.prototype.clone = function() {
        var a = this.rebase();
        return a.stack = this.stack, a
    }, Context.prototype.current = function() {
        return this.stack && this.stack.head
    }, Context.prototype.getBlock = function(a) {
        var b, c, d;
        if ("function" == typeof a && (a = a(new Chunk, this).data.join("")), b = this.blocks, !b) return dust.log("No blocks for context `" + a + "` in template `" + this.getTemplateName() + "`", DEBUG), !1;
        for (c = b.length; c--;)
            if (d = b[c][a]) return d;
        return dust.log("Malformed template `" + this.getTemplateName() + "` was missing one or more blocks."), !1
    }, Context.prototype.shiftBlocks = function(a) {
        var b, c = this.blocks;
        return a ? (b = c ? c.concat([a]) : [a], new Context(this.stack, this.global, this.options, b, this.getTemplateName())) : this
    }, Context.prototype.resolve = function(a) {
        var b;
        return "function" != typeof a ? a : (b = (new Chunk).render(a, this), b instanceof Chunk ? b.data.join("") : b)
    }, Context.prototype.getTemplateName = function() {
        return this.templateName
    }, Stub.prototype.flush = function() {
        for (var a = this.head; a;) {
            if (!a.flushable) return a.error ? (this.callback(a.error), dust.log("Rendering failed with error `" + a.error + "`", ERROR), void(this.flush = EMPTY_FUNC)) : void 0;
            this.out += a.data.join(""), a = a.next, this.head = a
        }
        this.callback(null, this.out)
    }, Stream.prototype.flush = function() {
        for (var a = this.head; a;) {
            if (!a.flushable) return a.error ? (this.emit("error", a.error), this.emit("end"), dust.log("Streaming failed with error `" + a.error + "`", ERROR), void(this.flush = EMPTY_FUNC)) : void 0;
            this.emit("data", a.data.join("")), a = a.next, this.head = a
        }
        this.emit("end")
    }, Stream.prototype.emit = function(a, b) {
        var c, d, e = this.events || {}, f = e[a] || [];
        if (!f.length) return dust.log("Stream broadcasting, but no listeners for `" + a + "`", DEBUG), !1;
        for (f = f.slice(0), c = 0, d = f.length; d > c; c++) f[c](b);
        return !0
    }, Stream.prototype.on = function(a, b) {
        var c = this.events = this.events || {}, d = c[a] = c[a] || [];
        return "function" != typeof b ? dust.log("No callback function provided for `" + a + "` event listener", WARN) : d.push(b), this
    }, Stream.prototype.pipe = function(a) {
        if ("function" != typeof a.write || "function" != typeof a.end) return dust.log("Incompatible stream passed to `pipe`", WARN), this;
        var b = !1;
        return "function" == typeof a.emit && a.emit("pipe", this), "function" == typeof a.on && a.on("error", function() {
            b = !0
        }), this.on("data", function(c) {
            if (!b) try {
                a.write(c, "utf8")
            } catch (d) {
                dust.log(d, ERROR)
            }
        }).on("end", function() {
            if (!b) try {
                a.end(), b = !0
            } catch (c) {
                dust.log(c, ERROR)
            }
        })
    }, Chunk.prototype.write = function(a) {
        var b = this.taps;
        return b && (a = b.go(a)), this.data.push(a), this
    }, Chunk.prototype.end = function(a) {
        return a && this.write(a), this.flushable = !0, this.root.flush(), this
    }, Chunk.prototype.map = function(a) {
        var b = new Chunk(this.root, this.next, this.taps),
            c = new Chunk(this.root, b, this.taps);
        this.next = c, this.flushable = !0;
        try {
            a(c)
        } catch (d) {
            dust.log(d, ERROR), c.setError(d)
        }
        return b
    }, Chunk.prototype.tap = function(a) {
        var b = this.taps;
        return this.taps = b ? b.push(a) : new Tap(a), this
    }, Chunk.prototype.untap = function() {
        return this.taps = this.taps.tail, this
    }, Chunk.prototype.render = function(a, b) {
        return a(this, b)
    }, Chunk.prototype.reference = function(a, b, c, d) {
        return "function" == typeof a ? (a = a.apply(b.current(), [this, b, null, {
            auto: c,
            filters: d
        }]), a instanceof Chunk ? a : this.reference(a, b, c, d)) : dust.isThenable(a) ? this.await(a, b, null, c, d) : dust.isStreamable(a) ? this.stream(a, b, null, c, d) : dust.isEmpty(a) ? this : this.write(dust.filter(a, c, d, b))
    }, Chunk.prototype.section = function(a, b, c, d) {
        var e, f, g, h = c.block,
            i = c["else"],
            j = this;
        if ("function" == typeof a && !dust.isTemplateFn(a)) {
            try {
                a = a.apply(b.current(), [this, b, c, d])
            } catch (k) {
                return dust.log(k, ERROR), this.setError(k)
            }
            if (a instanceof Chunk) return a
        }
        if (dust.isEmptyObject(c)) return j;
        if (dust.isEmptyObject(d) || (b = b.push(d)), dust.isArray(a)) {
            if (h) {
                if (f = a.length, f > 0) {
                    for (g = b.stack && b.stack.head || {}, g.$len = f, e = 0; f > e; e++) g.$idx = e, j = h(j, b.push(a[e], e, f));
                    return g.$idx = void 0, g.$len = void 0, j
                }
                if (i) return i(this, b)
            }
        } else {
            if (dust.isThenable(a)) return this.await(a, b, c);
            if (dust.isStreamable(a)) return this.stream(a, b, c);
            if (a === !0) {
                if (h) return h(this, b)
            } else if (a || 0 === a) {
                if (h) return h(this, b.push(a))
            } else if (i) return i(this, b)
        }
        return dust.log("Section without corresponding key in template `" + b.getTemplateName() + "`", DEBUG), this
    }, Chunk.prototype.exists = function(a, b, c) {
        var d = c.block,
            e = c["else"];
        if (dust.isEmpty(a)) {
            if (e) return e(this, b)
        } else {
            if (d) return d(this, b);
            dust.log("No block for exists check in template `" + b.getTemplateName() + "`", DEBUG)
        }
        return this
    }, Chunk.prototype.notexists = function(a, b, c) {
        var d = c.block,
            e = c["else"];
        if (dust.isEmpty(a)) {
            if (d) return d(this, b);
            dust.log("No block for not-exists check in template `" + b.getTemplateName() + "`", DEBUG)
        } else if (e) return e(this, b);
        return this
    }, Chunk.prototype.block = function(a, b, c) {
        var d = a || c.block;
        return d ? d(this, b) : this
    }, Chunk.prototype.partial = function(a, b, c, d) {
        var e;
        return void 0 === d && (d = c, c = b), dust.isEmptyObject(d) || (c = c.clone(), e = c.pop(), c = c.push(d).push(e)), dust.isTemplateFn(a) ? this.capture(a, b, function(a, b) {
            c.templateName = a, load(a, b, c).end()
        }) : (c.templateName = a, load(a, this, c))
    }, Chunk.prototype.helper = function(a, b, c, d, e) {
        var f, g = this,
            h = d.filters;
        if (void 0 === e && (e = "h"), !dust.helpers[a]) return dust.log("Helper `" + a + "` does not exist", WARN), g;
        try {
            return f = dust.helpers[a](g, b, c, d), f instanceof Chunk ? f : ("string" == typeof h && (h = h.split("|")), dust.isEmptyObject(c) ? g.reference(f, b, e, h) : g.section(f, b, c, d))
        } catch (i) {
            return dust.log("Error in helper `" + a + "`: " + i.message, ERROR), g.setError(i)
        }
    }, Chunk.prototype.await = function(a, b, c, d, e) {
        return this.map(function(f) {
            a.then(function(a) {
                f = c ? f.section(a, b, c) : f.reference(a, b, d, e), f.end()
            }, function(a) {
                var d = c && c.error;
                d ? f.render(d, b.push(a)).end() : (dust.log("Unhandled promise rejection in `" + b.getTemplateName() + "`", INFO), f.end())
            })
        })
    }, Chunk.prototype.stream = function(a, b, c, d, e) {
        var f = c && c.block,
            g = c && c.error;
        return this.map(function(h) {
            var i = !1;
            a.on("data", function(a) {
                i || (f ? h = h.map(function(c) {
                    c.render(f, b.push(a)).end()
                }) : c || (h = h.reference(a, b, d, e)))
            }).on("error", function(a) {
                i || (g ? h.render(g, b.push(a)) : dust.log("Unhandled stream error in `" + b.getTemplateName() + "`", INFO), i || (i = !0, h.end()))
            }).on("end", function() {
                i || (i = !0, h.end())
            })
        })
    }, Chunk.prototype.capture = function(a, b, c) {
        return this.map(function(d) {
            var e = new Stub(function(a, b) {
                a ? d.setError(a) : c(b, d)
            });
            a(e.head, b).end()
        })
    }, Chunk.prototype.setError = function(a) {
        return this.error = a, this.root.flush(), this
    };
    for (var f in Chunk.prototype) dust._aliases[f] && (Chunk.prototype[dust._aliases[f]] = Chunk.prototype[f]);
    Tap.prototype.push = function(a) {
        return new Tap(a, this)
    }, Tap.prototype.go = function(a) {
        for (var b = this; b;) a = b.head(a), b = b.tail;
        return a
    };
    var HCHARS = /[&<>"']/,
        AMP = /&/g,
        LT = /</g,
        GT = />/g,
        QUOT = /\"/g,
        SQUOT = /\'/g;
    dust.escapeHtml = function(a) {
        return "string" == typeof a || a && "function" == typeof a.toString ? ("string" != typeof a && (a = a.toString()), HCHARS.test(a) ? a.replace(AMP, "&amp;").replace(LT, "&lt;").replace(GT, "&gt;").replace(QUOT, "&quot;").replace(SQUOT, "&#39;") : a) : a
    };
    var BS = /\\/g,
        FS = /\//g,
        CR = /\r/g,
        LS = /\u2028/g,
        PS = /\u2029/g,
        NL = /\n/g,
        LF = /\f/g,
        SQ = /'/g,
        DQ = /"/g,
        TB = /\t/g;
    return dust.escapeJs = function(a) {
        return "string" == typeof a ? a.replace(BS, "\\\\").replace(FS, "\\/").replace(DQ, '\\"').replace(SQ, "\\'").replace(CR, "\\r").replace(LS, "\\u2028").replace(PS, "\\u2029").replace(NL, "\\n").replace(LF, "\\f").replace(TB, "\\t") : a
    }, dust.escapeJSON = function(a) {
        return JSON ? JSON.stringify(a).replace(LS, "\\u2028").replace(PS, "\\u2029").replace(LT, "\\u003c") : (dust.log("JSON is undefined; could not escape `" + a + "`", WARN), a)
    }, dust
}),
function(a, b) {
    "function" == typeof define && define.amd && define.amd.dust === !0 ? define("dust.parse", ["dust.core"], function(a) {
        return b(a).parse
    }) : "object" == typeof exports ? module.exports = b(require("./dust")) : b(a.dust)
}(this, function(a) {
    var b = function() {
        function a(a, b) {
            function c() {
                this.constructor = a
            }
            c.prototype = b.prototype, a.prototype = new c
        }

        function b(a, b, c, d, e, f) {
            this.message = a, this.expected = b, this.found = c, this.offset = d, this.line = e, this.column = f, this.name = "SyntaxError"
        }

        function c(a) {
            function c() {
                return f(wc).line
            }

            function d() {
                return f(wc).column
            }

            function e(a) {
                throw h(a, null, wc)
            }

            function f(b) {
                function c(b, c, d) {
                    var e, f;
                    for (e = c; d > e; e++) f = a.charAt(e), "\n" === f ? (b.seenCR || b.line++, b.column = 1, b.seenCR = !1) : "\r" === f || "\u2028" === f || "\u2029" === f ? (b.line++, b.column = 1, b.seenCR = !0) : (b.column++, b.seenCR = !1)
                }
                return xc !== b && (xc > b && (xc = 0, yc = {
                    line: 1,
                    column: 1,
                    seenCR: !1
                }), c(yc, xc, b), xc = b), yc
            }

            function g(a) {
                zc > vc || (vc > zc && (zc = vc, Ac = []), Ac.push(a))
            }

            function h(c, d, e) {
                function g(a) {
                    var b = 1;
                    for (a.sort(function(a, b) {
                        return a.description < b.description ? -1 : a.description > b.description ? 1 : 0
                    }); b < a.length;) a[b - 1] === a[b] ? a.splice(b, 1) : b++
                }

                function h(a, b) {
                    function c(a) {
                        function b(a) {
                            return a.charCodeAt(0).toString(16).toUpperCase()
                        }
                        return a.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(a) {
                            return "\\x0" + b(a)
                        }).replace(/[\x10-\x1F\x80-\xFF]/g, function(a) {
                            return "\\x" + b(a)
                        }).replace(/[\u0180-\u0FFF]/g, function(a) {
                            return "\\u0" + b(a)
                        }).replace(/[\u1080-\uFFFF]/g, function(a) {
                            return "\\u" + b(a)
                        })
                    }
                    var d, e, f, g = new Array(a.length);
                    for (f = 0; f < a.length; f++) g[f] = a[f].description;
                    return d = a.length > 1 ? g.slice(0, -1).join(", ") + " or " + g[a.length - 1] : g[0], e = b ? '"' + c(b) + '"' : "end of input", "Expected " + d + " but " + e + " found."
                }
                var i = f(e),
                    j = e < a.length ? a.charAt(e) : null;
                return null !== d && g(d), new b(null !== c ? c : h(d, j), d, j, e, i.line, i.column)
            }

            function i() {
                var a;
                return a = j()
            }

            function j() {
                var a, b, c;
                for (a = vc, b = [], c = k(); c !== X;) b.push(c), c = k();
                return b !== X && (wc = a, b = $(b)), a = b
            }

            function k() {
                var a;
                return a = K(), a === X && (a = L(), a === X && (a = l(), a === X && (a = s(), a === X && (a = u(), a === X && (a = r(), a === X && (a = H())))))), a
            }

            function l() {
                var b, c, d, e, f, h, i, k;
                if (Bc++, b = vc, c = m(), c !== X) {
                    for (d = [], e = S(); e !== X;) d.push(e), e = S();
                    d !== X ? (e = O(), e !== X ? (f = j(), f !== X ? (h = q(), h !== X ? (i = n(), i === X && (i = ba), i !== X ? (wc = vc, k = ca(c, f, h, i), k = k ? da : aa, k !== X ? (wc = b, c = ea(c, f, h, i), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)
                } else vc = b, b = aa; if (b === X)
                    if (b = vc, c = m(), c !== X) {
                        for (d = [], e = S(); e !== X;) d.push(e), e = S();
                        d !== X ? (47 === a.charCodeAt(vc) ? (e = fa, vc++) : (e = X, 0 === Bc && g(ga)), e !== X ? (f = O(), f !== X ? (wc = b, c = ha(c), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)
                    } else vc = b, b = aa;
                return Bc--, b === X && (c = X, 0 === Bc && g(_)), b
            }

            function m() {
                var b, c, d, e, f, h, i;
                if (b = vc, c = N(), c !== X)
                    if (ia.test(a.charAt(vc)) ? (d = a.charAt(vc), vc++) : (d = X, 0 === Bc && g(ja)), d !== X) {
                        for (e = [], f = S(); f !== X;) e.push(f), f = S();
                        e !== X ? (f = v(), f !== X ? (h = o(), h !== X ? (i = p(), i !== X ? (wc = b, c = ka(d, f, h, i), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)
                    } else vc = b, b = aa;
                    else vc = b, b = aa;
                return b
            }

            function n() {
                var b, c, d, e, f, h, i;
                if (Bc++, b = vc, c = N(), c !== X)
                    if (47 === a.charCodeAt(vc) ? (d = fa, vc++) : (d = X, 0 === Bc && g(ga)), d !== X) {
                        for (e = [], f = S(); f !== X;) e.push(f), f = S();
                        if (e !== X)
                            if (f = v(), f !== X) {
                                for (h = [], i = S(); i !== X;) h.push(i), i = S();
                                h !== X ? (i = O(), i !== X ? (wc = b, c = ma(f), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)
                            } else vc = b, b = aa;
                            else vc = b, b = aa
                    } else vc = b, b = aa;
                    else vc = b, b = aa;
                return Bc--, b === X && (c = X, 0 === Bc && g(la)), b
            }

            function o() {
                var b, c, d, e;
                return b = vc, c = vc, 58 === a.charCodeAt(vc) ? (d = na, vc++) : (d = X, 0 === Bc && g(oa)), d !== X ? (e = v(), e !== X ? (wc = c, d = pa(e), c = d) : (vc = c, c = aa)) : (vc = c, c = aa), c === X && (c = ba), c !== X && (wc = b, c = qa(c)), b = c
            }

            function p() {
                var b, c, d, e, f, h, i;
                if (Bc++, b = vc, c = [], d = vc, e = [], f = S(), f !== X)
                    for (; f !== X;) e.push(f), f = S();
                else e = aa;
                for (e !== X ? (f = C(), f !== X ? (61 === a.charCodeAt(vc) ? (h = sa, vc++) : (h = X, 0 === Bc && g(ta)), h !== X ? (i = w(), i === X && (i = v(), i === X && (i = F())), i !== X ? (wc = d, e = ua(f, i), d = e) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa); d !== X;) {
                    if (c.push(d), d = vc, e = [], f = S(), f !== X)
                        for (; f !== X;) e.push(f), f = S();
                    else e = aa;
                    e !== X ? (f = C(), f !== X ? (61 === a.charCodeAt(vc) ? (h = sa, vc++) : (h = X, 0 === Bc && g(ta)), h !== X ? (i = w(), i === X && (i = v(), i === X && (i = F())), i !== X ? (wc = d, e = ua(f, i), d = e) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)
                }
                return c !== X && (wc = b, c = va(c)), b = c, Bc--, b === X && (c = X, 0 === Bc && g(ra)), b
            }

            function q() {
                var b, c, d, e, f, h, i, k;
                for (Bc++, b = vc, c = [], d = vc, e = N(), e !== X ? (58 === a.charCodeAt(vc) ? (f = na, vc++) : (f = X, 0 === Bc && g(oa)), f !== X ? (h = C(), h !== X ? (i = O(), i !== X ? (k = j(), k !== X ? (wc = d, e = ua(h, k), d = e) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa); d !== X;) c.push(d), d = vc, e = N(), e !== X ? (58 === a.charCodeAt(vc) ? (f = na, vc++) : (f = X, 0 === Bc && g(oa)), f !== X ? (h = C(), h !== X ? (i = O(), i !== X ? (k = j(), k !== X ? (wc = d, e = ua(h, k), d = e) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa);
                return c !== X && (wc = b, c = xa(c)), b = c, Bc--, b === X && (c = X, 0 === Bc && g(wa)), b
            }

            function r() {
                var a, b, c, d, e;
                return Bc++, a = vc, b = N(), b !== X ? (c = v(), c !== X ? (d = t(), d !== X ? (e = O(), e !== X ? (wc = a, b = za(c, d), a = b) : (vc = a, a = aa)) : (vc = a, a = aa)) : (vc = a, a = aa)) : (vc = a, a = aa), Bc--, a === X && (b = X, 0 === Bc && g(ya)), a
            }

            function s() {
                var b, c, d, e, f, h, i, j, k, l;
                if (Bc++, b = vc, c = N(), c !== X)
                    if (62 === a.charCodeAt(vc) ? (d = Ba, vc++) : (d = X, 0 === Bc && g(Ca)), d === X && (43 === a.charCodeAt(vc) ? (d = Da, vc++) : (d = X, 0 === Bc && g(Ea))), d !== X) {
                        for (e = [], f = S(); f !== X;) e.push(f), f = S();
                        if (e !== X)
                            if (f = vc, h = C(), h !== X && (wc = f, h = Fa(h)), f = h, f === X && (f = F()), f !== X)
                                if (h = o(), h !== X)
                                    if (i = p(), i !== X) {
                                        for (j = [], k = S(); k !== X;) j.push(k), k = S();
                                        j !== X ? (47 === a.charCodeAt(vc) ? (k = fa, vc++) : (k = X, 0 === Bc && g(ga)), k !== X ? (l = O(), l !== X ? (wc = b, c = Ga(d, f, h, i), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)
                                    } else vc = b, b = aa;
                                    else vc = b, b = aa;
                                    else vc = b, b = aa;
                                    else vc = b, b = aa
                    } else vc = b, b = aa;
                    else vc = b, b = aa;
                return Bc--, b === X && (c = X, 0 === Bc && g(Aa)), b
            }

            function t() {
                var b, c, d, e, f;
                for (Bc++, b = vc, c = [], d = vc, 124 === a.charCodeAt(vc) ? (e = Ia, vc++) : (e = X, 0 === Bc && g(Ja)), e !== X ? (f = C(), f !== X ? (wc = d, e = pa(f), d = e) : (vc = d, d = aa)) : (vc = d, d = aa); d !== X;) c.push(d), d = vc, 124 === a.charCodeAt(vc) ? (e = Ia, vc++) : (e = X, 0 === Bc && g(Ja)), e !== X ? (f = C(), f !== X ? (wc = d, e = pa(f), d = e) : (vc = d, d = aa)) : (vc = d, d = aa);
                return c !== X && (wc = b, c = Ka(c)), b = c, Bc--, b === X && (c = X, 0 === Bc && g(Ha)), b
            }

            function u() {
                var b, c, d, e, f;
                return Bc++, b = vc, c = N(), c !== X ? (126 === a.charCodeAt(vc) ? (d = Ma, vc++) : (d = X, 0 === Bc && g(Na)), d !== X ? (e = C(), e !== X ? (f = O(), f !== X ? (wc = b, c = Oa(e), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa), Bc--, b === X && (c = X, 0 === Bc && g(La)), b
            }

            function v() {
                var a, b;
                return Bc++, a = vc, b = B(), b !== X && (wc = a, b = Qa(b)), a = b, a === X && (a = vc, b = C(), b !== X && (wc = a, b = Ra(b)), a = b), Bc--, a === X && (b = X, 0 === Bc && g(Pa)), a
            }

            function w() {
                var a, b;
                return Bc++, a = vc, b = x(), b === X && (b = A()), b !== X && (wc = a, b = Ta(b)), a = b, Bc--, a === X && (b = X, 0 === Bc && g(Sa)), a
            }

            function x() {
                var b, c, d, e;
                return Bc++, b = vc, c = A(), c !== X ? (46 === a.charCodeAt(vc) ? (d = Va, vc++) : (d = X, 0 === Bc && g(Wa)), d !== X ? (e = y(), e !== X ? (wc = b, c = Xa(c, e), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa), Bc--, b === X && (c = X, 0 === Bc && g(Ua)), b
            }

            function y() {
                var b, c, d;
                if (Bc++, b = vc, c = [], Za.test(a.charAt(vc)) ? (d = a.charAt(vc), vc++) : (d = X, 0 === Bc && g($a)), d !== X)
                    for (; d !== X;) c.push(d), Za.test(a.charAt(vc)) ? (d = a.charAt(vc), vc++) : (d = X, 0 === Bc && g($a));
                else c = aa;
                return c !== X && (wc = b, c = _a(c)), b = c, Bc--, b === X && (c = X, 0 === Bc && g(Ya)), b
            }

            function z() {
                var b, c, d;
                return Bc++, b = vc, 45 === a.charCodeAt(vc) ? (c = bb, vc++) : (c = X, 0 === Bc && g(cb)), c !== X ? (d = y(), d !== X ? (wc = b, c = db(c, d), b = c) : (vc = b, b = aa)) : (vc = b, b = aa), Bc--, b === X && (c = X, 0 === Bc && g(ab)), b
            }

            function A() {
                var a, b;
                return Bc++, a = z(), a === X && (a = y()), Bc--, a === X && (b = X, 0 === Bc && g(eb)), a
            }

            function B() {
                var b, c, d, e;
                if (Bc++, b = vc, c = C(), c === X && (c = ba), c !== X) {
                    if (d = [], e = E(), e === X && (e = D()), e !== X)
                        for (; e !== X;) d.push(e), e = E(), e === X && (e = D());
                    else d = aa;
                    d !== X ? (wc = b, c = gb(c, d), b = c) : (vc = b, b = aa)
                } else vc = b, b = aa; if (b === X)
                    if (b = vc, 46 === a.charCodeAt(vc) ? (c = Va, vc++) : (c = X, 0 === Bc && g(Wa)), c !== X) {
                        for (d = [], e = E(), e === X && (e = D()); e !== X;) d.push(e), e = E(), e === X && (e = D());
                        d !== X ? (wc = b, c = hb(d), b = c) : (vc = b, b = aa)
                    } else vc = b, b = aa;
                return Bc--, b === X && (c = X, 0 === Bc && g(fb)), b
            }

            function C() {
                var b, c, d, e;
                if (Bc++, b = vc, jb.test(a.charAt(vc)) ? (c = a.charAt(vc), vc++) : (c = X, 0 === Bc && g(kb)), c !== X) {
                    for (d = [], lb.test(a.charAt(vc)) ? (e = a.charAt(vc), vc++) : (e = X, 0 === Bc && g(mb)); e !== X;) d.push(e), lb.test(a.charAt(vc)) ? (e = a.charAt(vc), vc++) : (e = X, 0 === Bc && g(mb));
                    d !== X ? (wc = b, c = nb(c, d), b = c) : (vc = b, b = aa)
                } else vc = b, b = aa;
                return Bc--, b === X && (c = X, 0 === Bc && g(ib)), b
            }

            function D() {
                var b, c, d, e, f, h;
                if (Bc++, b = vc, c = vc, d = P(), d !== X) {
                    if (e = vc, f = [], Za.test(a.charAt(vc)) ? (h = a.charAt(vc), vc++) : (h = X, 0 === Bc && g($a)), h !== X)
                        for (; h !== X;) f.push(h), Za.test(a.charAt(vc)) ? (h = a.charAt(vc), vc++) : (h = X, 0 === Bc && g($a));
                    else f = aa;
                    f !== X && (wc = e, f = pb(f)), e = f, e === X && (e = v()), e !== X ? (f = Q(), f !== X ? (wc = c, d = qb(e), c = d) : (vc = c, c = aa)) : (vc = c, c = aa)
                } else vc = c, c = aa;
                return c !== X ? (d = E(), d === X && (d = ba), d !== X ? (wc = b, c = rb(c, d), b = c) : (vc = b, b = aa)) : (vc = b, b = aa), Bc--, b === X && (c = X, 0 === Bc && g(ob)), b
            }

            function E() {
                var b, c, d, e, f;
                if (Bc++, b = vc, c = [], d = vc, 46 === a.charCodeAt(vc) ? (e = Va, vc++) : (e = X, 0 === Bc && g(Wa)), e !== X ? (f = C(), f !== X ? (wc = d, e = tb(f), d = e) : (vc = d, d = aa)) : (vc = d, d = aa), d !== X)
                    for (; d !== X;) c.push(d), d = vc, 46 === a.charCodeAt(vc) ? (e = Va, vc++) : (e = X, 0 === Bc && g(Wa)), e !== X ? (f = C(), f !== X ? (wc = d, e = tb(f), d = e) : (vc = d, d = aa)) : (vc = d, d = aa);
                else c = aa;
                return c !== X ? (d = D(), d === X && (d = ba), d !== X ? (wc = b, c = ub(c, d), b = c) : (vc = b, b = aa)) : (vc = b, b = aa), Bc--, b === X && (c = X, 0 === Bc && g(sb)), b
            }

            function F() {
                var b, c, d, e;
                if (Bc++, b = vc, 34 === a.charCodeAt(vc) ? (c = wb, vc++) : (c = X, 0 === Bc && g(xb)), c !== X ? (34 === a.charCodeAt(vc) ? (d = wb, vc++) : (d = X, 0 === Bc && g(xb)), d !== X ? (wc = b, c = yb(), b = c) : (vc = b, b = aa)) : (vc = b, b = aa), b === X && (b = vc, 34 === a.charCodeAt(vc) ? (c = wb, vc++) : (c = X, 0 === Bc && g(xb)), c !== X ? (d = I(), d !== X ? (34 === a.charCodeAt(vc) ? (e = wb, vc++) : (e = X, 0 === Bc && g(xb)), e !== X ? (wc = b, c = zb(d), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)) : (vc = b, b = aa), b === X))
                    if (b = vc, 34 === a.charCodeAt(vc) ? (c = wb, vc++) : (c = X, 0 === Bc && g(xb)), c !== X) {
                        if (d = [], e = G(), e !== X)
                            for (; e !== X;) d.push(e), e = G();
                        else d = aa;
                        d !== X ? (34 === a.charCodeAt(vc) ? (e = wb, vc++) : (e = X, 0 === Bc && g(xb)), e !== X ? (wc = b, c = Ab(d), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)
                    } else vc = b, b = aa;
                return Bc--, b === X && (c = X, 0 === Bc && g(vb)), b
            }

            function G() {
                var a, b;
                return a = u(), a === X && (a = r(), a === X && (a = vc, b = I(), b !== X && (wc = a, b = Bb(b)), a = b)), a
            }

            function H() {
                var b, c, d, e, f, h, i, j;
                if (Bc++, b = vc, c = R(), c !== X) {
                    for (d = [], e = S(); e !== X;) d.push(e), e = S();
                    d !== X ? (wc = b, c = Db(c, d), b = c) : (vc = b, b = aa)
                } else vc = b, b = aa; if (b === X) {
                    if (b = vc, c = [], d = vc, e = vc, Bc++, f = M(), Bc--, f === X ? e = da : (vc = e, e = aa), e !== X ? (f = vc, Bc++, h = K(), Bc--, h === X ? f = da : (vc = f, f = aa), f !== X ? (h = vc, Bc++, i = L(), Bc--, i === X ? h = da : (vc = h, h = aa), h !== X ? (i = vc, Bc++, j = R(), Bc--, j === X ? i = da : (vc = i, i = aa), i !== X ? (a.length > vc ? (j = a.charAt(vc), vc++) : (j = X, 0 === Bc && g(Eb)), j !== X ? (wc = d, e = Fb(j), d = e) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa), d !== X)
                        for (; d !== X;) c.push(d), d = vc, e = vc, Bc++, f = M(), Bc--, f === X ? e = da : (vc = e, e = aa), e !== X ? (f = vc, Bc++, h = K(), Bc--, h === X ? f = da : (vc = f, f = aa), f !== X ? (h = vc, Bc++, i = L(), Bc--, i === X ? h = da : (vc = h, h = aa), h !== X ? (i = vc, Bc++, j = R(), Bc--, j === X ? i = da : (vc = i, i = aa), i !== X ? (a.length > vc ? (j = a.charAt(vc), vc++) : (j = X, 0 === Bc && g(Eb)), j !== X ? (wc = d, e = Fb(j), d = e) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa)) : (vc = d, d = aa);
                    else c = aa;
                    c !== X && (wc = b, c = Gb(c)), b = c
                }
                return Bc--, b === X && (c = X, 0 === Bc && g(Cb)), b
            }

            function I() {
                var b, c, d, e, f;
                if (Bc++, b = vc, c = [], d = vc, e = vc, Bc++, f = M(), Bc--, f === X ? e = da : (vc = e, e = aa), e !== X ? (f = J(), f === X && (Ib.test(a.charAt(vc)) ? (f = a.charAt(vc), vc++) : (f = X, 0 === Bc && g(Jb))), f !== X ? (wc = d, e = Fb(f), d = e) : (vc = d, d = aa)) : (vc = d, d = aa), d !== X)
                    for (; d !== X;) c.push(d),
                d = vc, e = vc, Bc++, f = M(), Bc--, f === X ? e = da : (vc = e, e = aa), e !== X ? (f = J(), f === X && (Ib.test(a.charAt(vc)) ? (f = a.charAt(vc), vc++) : (f = X, 0 === Bc && g(Jb))), f !== X ? (wc = d, e = Fb(f), d = e) : (vc = d, d = aa)) : (vc = d, d = aa);
                else c = aa;
                return c !== X && (wc = b, c = Kb(c)), b = c, Bc--, b === X && (c = X, 0 === Bc && g(Hb)), b
            }

            function J() {
                var b, c;
                return b = vc, a.substr(vc, 2) === Lb ? (c = Lb, vc += 2) : (c = X, 0 === Bc && g(Mb)), c !== X && (wc = b, c = Nb()), b = c
            }

            function K() {
                var b, c, d, e, f, h;
                if (Bc++, b = vc, a.substr(vc, 2) === Pb ? (c = Pb, vc += 2) : (c = X, 0 === Bc && g(Qb)), c !== X) {
                    for (d = [], e = vc, f = vc, Bc++, a.substr(vc, 2) === Rb ? (h = Rb, vc += 2) : (h = X, 0 === Bc && g(Sb)), Bc--, h === X ? f = da : (vc = f, f = aa), f !== X ? (a.length > vc ? (h = a.charAt(vc), vc++) : (h = X, 0 === Bc && g(Eb)), h !== X ? (wc = e, f = Tb(h), e = f) : (vc = e, e = aa)) : (vc = e, e = aa); e !== X;) d.push(e), e = vc, f = vc, Bc++, a.substr(vc, 2) === Rb ? (h = Rb, vc += 2) : (h = X, 0 === Bc && g(Sb)), Bc--, h === X ? f = da : (vc = f, f = aa), f !== X ? (a.length > vc ? (h = a.charAt(vc), vc++) : (h = X, 0 === Bc && g(Eb)), h !== X ? (wc = e, f = Tb(h), e = f) : (vc = e, e = aa)) : (vc = e, e = aa);
                    d !== X ? (a.substr(vc, 2) === Rb ? (e = Rb, vc += 2) : (e = X, 0 === Bc && g(Sb)), e !== X ? (wc = b, c = Ub(d), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)
                } else vc = b, b = aa;
                return Bc--, b === X && (c = X, 0 === Bc && g(Ob)), b
            }

            function L() {
                var b, c, d, e, f, h;
                if (Bc++, b = vc, a.substr(vc, 2) === Wb ? (c = Wb, vc += 2) : (c = X, 0 === Bc && g(Xb)), c !== X) {
                    for (d = [], e = vc, f = vc, Bc++, a.substr(vc, 2) === Yb ? (h = Yb, vc += 2) : (h = X, 0 === Bc && g(Zb)), Bc--, h === X ? f = da : (vc = f, f = aa), f !== X ? (a.length > vc ? (h = a.charAt(vc), vc++) : (h = X, 0 === Bc && g(Eb)), h !== X ? (wc = e, f = Fb(h), e = f) : (vc = e, e = aa)) : (vc = e, e = aa); e !== X;) d.push(e), e = vc, f = vc, Bc++, a.substr(vc, 2) === Yb ? (h = Yb, vc += 2) : (h = X, 0 === Bc && g(Zb)), Bc--, h === X ? f = da : (vc = f, f = aa), f !== X ? (a.length > vc ? (h = a.charAt(vc), vc++) : (h = X, 0 === Bc && g(Eb)), h !== X ? (wc = e, f = Fb(h), e = f) : (vc = e, e = aa)) : (vc = e, e = aa);
                    d !== X ? (a.substr(vc, 2) === Yb ? (e = Yb, vc += 2) : (e = X, 0 === Bc && g(Zb)), e !== X ? (wc = b, c = $b(d), b = c) : (vc = b, b = aa)) : (vc = b, b = aa)
                } else vc = b, b = aa;
                return Bc--, b === X && (c = X, 0 === Bc && g(Vb)), b
            }

            function M() {
                var b, c, d, e, f, h, i, j, k, l;
                if (b = vc, c = N(), c !== X) {
                    for (d = [], e = S(); e !== X;) d.push(e), e = S();
                    if (d !== X)
                        if (_b.test(a.charAt(vc)) ? (e = a.charAt(vc), vc++) : (e = X, 0 === Bc && g(ac)), e !== X) {
                            for (f = [], h = S(); h !== X;) f.push(h), h = S();
                            if (f !== X) {
                                if (h = [], i = vc, j = vc, Bc++, k = O(), Bc--, k === X ? j = da : (vc = j, j = aa), j !== X ? (k = vc, Bc++, l = R(), Bc--, l === X ? k = da : (vc = k, k = aa), k !== X ? (a.length > vc ? (l = a.charAt(vc), vc++) : (l = X, 0 === Bc && g(Eb)), l !== X ? (j = [j, k, l], i = j) : (vc = i, i = aa)) : (vc = i, i = aa)) : (vc = i, i = aa), i !== X)
                                    for (; i !== X;) h.push(i), i = vc, j = vc, Bc++, k = O(), Bc--, k === X ? j = da : (vc = j, j = aa), j !== X ? (k = vc, Bc++, l = R(), Bc--, l === X ? k = da : (vc = k, k = aa), k !== X ? (a.length > vc ? (l = a.charAt(vc), vc++) : (l = X, 0 === Bc && g(Eb)), l !== X ? (j = [j, k, l], i = j) : (vc = i, i = aa)) : (vc = i, i = aa)) : (vc = i, i = aa);
                                else h = aa; if (h !== X) {
                                    for (i = [], j = S(); j !== X;) i.push(j), j = S();
                                    i !== X ? (j = O(), j !== X ? (c = [c, d, e, f, h, i, j], b = c) : (vc = b, b = aa)) : (vc = b, b = aa)
                                } else vc = b, b = aa
                            } else vc = b, b = aa
                        } else vc = b, b = aa;
                        else vc = b, b = aa
                } else vc = b, b = aa;
                return b === X && (b = r()), b
            }

            function N() {
                var b;
                return 123 === a.charCodeAt(vc) ? (b = bc, vc++) : (b = X, 0 === Bc && g(cc)), b
            }

            function O() {
                var b;
                return 125 === a.charCodeAt(vc) ? (b = dc, vc++) : (b = X, 0 === Bc && g(ec)), b
            }

            function P() {
                var b;
                return 91 === a.charCodeAt(vc) ? (b = fc, vc++) : (b = X, 0 === Bc && g(gc)), b
            }

            function Q() {
                var b;
                return 93 === a.charCodeAt(vc) ? (b = hc, vc++) : (b = X, 0 === Bc && g(ic)), b
            }

            function R() {
                var b;
                return 10 === a.charCodeAt(vc) ? (b = jc, vc++) : (b = X, 0 === Bc && g(kc)), b === X && (a.substr(vc, 2) === lc ? (b = lc, vc += 2) : (b = X, 0 === Bc && g(mc)), b === X && (13 === a.charCodeAt(vc) ? (b = nc, vc++) : (b = X, 0 === Bc && g(oc)), b === X && (8232 === a.charCodeAt(vc) ? (b = pc, vc++) : (b = X, 0 === Bc && g(qc)), b === X && (8233 === a.charCodeAt(vc) ? (b = rc, vc++) : (b = X, 0 === Bc && g(sc)))))), b
            }

            function S() {
                var b;
                return tc.test(a.charAt(vc)) ? (b = a.charAt(vc), vc++) : (b = X, 0 === Bc && g(uc)), b === X && (b = R()), b
            }

            function T(a) {
                return parseInt(a.join(""), 10)
            }

            function U(a) {
                return a.concat([
                    ["line", c()],
                    ["col", d()]
                ])
            }
            var V, W = arguments.length > 1 ? arguments[1] : {}, X = {}, Y = {
                    start: i
                }, Z = i,
                $ = function(a) {
                    var b = ["body"].concat(a);
                    return U(b)
                }, _ = {
                    type: "other",
                    description: "section"
                }, aa = X,
                ba = null,
                ca = function(a, b, c, d) {
                    return d && a[1].text === d.text || e("Expected end tag for " + a[1].text + " but it was not found."), !0
                }, da = void 0,
                ea = function(a, b, c) {
                    return c.push(["param", ["literal", "block"], b]), a.push(c, ["filters"]), U(a)
                }, fa = "/",
                ga = {
                    type: "literal",
                    value: "/",
                    description: '"/"'
                }, ha = function(a) {
                    return a.push(["bodies"], ["filters"]), U(a)
                }, ia = /^[#?\^<+@%]/,
                ja = {
                    type: "class",
                    value: "[#?\\^<+@%]",
                    description: "[#?\\^<+@%]"
                }, ka = function(a, b, c, d) {
                    return [a, b, c, d]
                }, la = {
                    type: "other",
                    description: "end tag"
                }, ma = function(a) {
                    return a
                }, na = ":",
                oa = {
                    type: "literal",
                    value: ":",
                    description: '":"'
                }, pa = function(a) {
                    return a
                }, qa = function(a) {
                    return a ? ["context", a] : ["context"]
                }, ra = {
                    type: "other",
                    description: "params"
                }, sa = "=",
                ta = {
                    type: "literal",
                    value: "=",
                    description: '"="'
                }, ua = function(a, b) {
                    return ["param", ["literal", a], b]
                }, va = function(a) {
                    return ["params"].concat(a)
                }, wa = {
                    type: "other",
                    description: "bodies"
                }, xa = function(a) {
                    return ["bodies"].concat(a)
                }, ya = {
                    type: "other",
                    description: "reference"
                }, za = function(a, b) {
                    return U(["reference", a, b])
                }, Aa = {
                    type: "other",
                    description: "partial"
                }, Ba = ">",
                Ca = {
                    type: "literal",
                    value: ">",
                    description: '">"'
                }, Da = "+",
                Ea = {
                    type: "literal",
                    value: "+",
                    description: '"+"'
                }, Fa = function(a) {
                    return ["literal", a]
                }, Ga = function(a, b, c, d) {
                    var e = ">" === a ? "partial" : a;
                    return U([e, b, c, d])
                }, Ha = {
                    type: "other",
                    description: "filters"
                }, Ia = "|",
                Ja = {
                    type: "literal",
                    value: "|",
                    description: '"|"'
                }, Ka = function(a) {
                    return ["filters"].concat(a)
                }, La = {
                    type: "other",
                    description: "special"
                }, Ma = "~",
                Na = {
                    type: "literal",
                    value: "~",
                    description: '"~"'
                }, Oa = function(a) {
                    return U(["special", a])
                }, Pa = {
                    type: "other",
                    description: "identifier"
                }, Qa = function(a) {
                    var b = ["path"].concat(a);
                    return b.text = a[1].join(".").replace(/,line,\d+,col,\d+/g, ""), b
                }, Ra = function(a) {
                    var b = ["key", a];
                    return b.text = a, b
                }, Sa = {
                    type: "other",
                    description: "number"
                }, Ta = function(a) {
                    return ["literal", a]
                }, Ua = {
                    type: "other",
                    description: "float"
                }, Va = ".",
                Wa = {
                    type: "literal",
                    value: ".",
                    description: '"."'
                }, Xa = function(a, b) {
                    return parseFloat(a + "." + b)
                }, Ya = {
                    type: "other",
                    description: "unsigned_integer"
                }, Za = /^[0-9]/,
                $a = {
                    type: "class",
                    value: "[0-9]",
                    description: "[0-9]"
                }, _a = function(a) {
                    return T(a)
                }, ab = {
                    type: "other",
                    description: "signed_integer"
                }, bb = "-",
                cb = {
                    type: "literal",
                    value: "-",
                    description: '"-"'
                }, db = function(a, b) {
                    return -1 * b
                }, eb = {
                    type: "other",
                    description: "integer"
                }, fb = {
                    type: "other",
                    description: "path"
                }, gb = function(a, b) {
                    return b = b[0], a && b ? (b.unshift(a), U([!1, b])) : U([!0, b])
                }, hb = function(a) {
                    return U(a.length > 0 ? [!0, a[0]] : [!0, []])
                }, ib = {
                    type: "other",
                    description: "key"
                }, jb = /^[a-zA-Z_$]/,
                kb = {
                    type: "class",
                    value: "[a-zA-Z_$]",
                    description: "[a-zA-Z_$]"
                }, lb = /^[0-9a-zA-Z_$\-]/,
                mb = {
                    type: "class",
                    value: "[0-9a-zA-Z_$\\-]",
                    description: "[0-9a-zA-Z_$\\-]"
                }, nb = function(a, b) {
                    return a + b.join("")
                }, ob = {
                    type: "other",
                    description: "array"
                }, pb = function(a) {
                    return a.join("")
                }, qb = function(a) {
                    return a
                }, rb = function(a, b) {
                    return b ? b.unshift(a) : b = [a], b
                }, sb = {
                    type: "other",
                    description: "array_part"
                }, tb = function(a) {
                    return a
                }, ub = function(a, b) {
                    return b ? a.concat(b) : a
                }, vb = {
                    type: "other",
                    description: "inline"
                }, wb = '"',
                xb = {
                    type: "literal",
                    value: '"',
                    description: '"\\""'
                }, yb = function() {
                    return U(["literal", ""])
                }, zb = function(a) {
                    return U(["literal", a])
                }, Ab = function(a) {
                    return U(["body"].concat(a))
                }, Bb = function(a) {
                    return ["buffer", a]
                }, Cb = {
                    type: "other",
                    description: "buffer"
                }, Db = function(a, b) {
                    return U(["format", a, b.join("")])
                }, Eb = {
                    type: "any",
                    description: "any character"
                }, Fb = function(a) {
                    return a
                }, Gb = function(a) {
                    return U(["buffer", a.join("")])
                }, Hb = {
                    type: "other",
                    description: "literal"
                }, Ib = /^[^"]/,
                Jb = {
                    type: "class",
                    value: '[^"]',
                    description: '[^"]'
                }, Kb = function(a) {
                    return a.join("")
                }, Lb = '\\"',
                Mb = {
                    type: "literal",
                    value: '\\"',
                    description: '"\\\\\\""'
                }, Nb = function() {
                    return '"'
                }, Ob = {
                    type: "other",
                    description: "raw"
                }, Pb = "{`",
                Qb = {
                    type: "literal",
                    value: "{`",
                    description: '"{`"'
                }, Rb = "`}",
                Sb = {
                    type: "literal",
                    value: "`}",
                    description: '"`}"'
                }, Tb = function(a) {
                    return a
                }, Ub = function(a) {
                    return U(["raw", a.join("")])
                }, Vb = {
                    type: "other",
                    description: "comment"
                }, Wb = "{!",
                Xb = {
                    type: "literal",
                    value: "{!",
                    description: '"{!"'
                }, Yb = "!}",
                Zb = {
                    type: "literal",
                    value: "!}",
                    description: '"!}"'
                }, $b = function(a) {
                    return U(["comment", a.join("")])
                }, _b = /^[#?\^><+%:@\/~%]/,
                ac = {
                    type: "class",
                    value: "[#?\\^><+%:@\\/~%]",
                    description: "[#?\\^><+%:@\\/~%]"
                }, bc = "{",
                cc = {
                    type: "literal",
                    value: "{",
                    description: '"{"'
                }, dc = "}",
                ec = {
                    type: "literal",
                    value: "}",
                    description: '"}"'
                }, fc = "[",
                gc = {
                    type: "literal",
                    value: "[",
                    description: '"["'
                }, hc = "]",
                ic = {
                    type: "literal",
                    value: "]",
                    description: '"]"'
                }, jc = "\n",
                kc = {
                    type: "literal",
                    value: "\n",
                    description: '"\\n"'
                }, lc = "\r\n",
                mc = {
                    type: "literal",
                    value: "\r\n",
                    description: '"\\r\\n"'
                }, nc = "\r",
                oc = {
                    type: "literal",
                    value: "\r",
                    description: '"\\r"'
                }, pc = "\u2028",
                qc = {
                    type: "literal",
                    value: "\u2028",
                    description: '"\\u2028"'
                }, rc = "\u2029",
                sc = {
                    type: "literal",
                    value: "\u2029",
                    description: '"\\u2029"'
                }, tc = /^[\t\x0B\f \xA0\uFEFF]/,
                uc = {
                    type: "class",
                    value: "[\\t\\x0B\\f \\xA0\\uFEFF]",
                    description: "[\\t\\x0B\\f \\xA0\\uFEFF]"
                }, vc = 0,
                wc = 0,
                xc = 0,
                yc = {
                    line: 1,
                    column: 1,
                    seenCR: !1
                }, zc = 0,
                Ac = [],
                Bc = 0;
            if ("startRule" in W) {
                if (!(W.startRule in Y)) throw new Error("Can't start parsing from rule \"" + W.startRule + '".');
                Z = Y[W.startRule]
            }
            if (V = Z(), V !== X && vc === a.length) return V;
            throw V !== X && vc < a.length && g({
                type: "end",
                description: "end of input"
            }), h(null, Ac, zc)
        }
        return a(b, Error), {
            SyntaxError: b,
            parse: c
        }
    }();
    return a.parse = b.parse, b
}),
function(a, b) {
    "function" == typeof define && define.amd && define.amd.dust === !0 ? define("dust.compile", ["dust.core", "dust.parse"], function(a, c) {
        return b(c, a).compile
    }) : "object" == typeof exports ? module.exports = b(require("./parser").parse, require("./dust")) : b(a.dust.parse, a.dust)
}(this, function(a, b) {
    function c(a) {
        var b = {};
        return s.filterNode(b, a)
    }

    function d(a, b) {
        var c, d, e, f = [b[0]];
        for (c = 1, d = b.length; d > c; c++) e = s.filterNode(a, b[c]), e && f.push(e);
        return f
    }

    function e(a, b) {
        var c, d, e, f, g = [b[0]];
        for (d = 1, e = b.length; e > d; d++) f = s.filterNode(a, b[d]), f && ("buffer" === f[0] || "format" === f[0] ? c ? (c[0] = "buffer" === f[0] ? "buffer" : c[0], c[1] += f.slice(1, -2).join("")) : (c = f, g.push(f)) : (c = null, g.push(f)));
        return g
    }

    function f(a, b) {
        return ["buffer", u[b[1]], b[2], b[3]]
    }

    function g(a, b) {
        return b
    }

    function h() {}

    function i(a, c) {
        return b.config.whitespace ? (c.splice(1, 2, c.slice(1, -2).join("")), c) : null
    }

    function j(a, c) {
        var d, e = {
                name: c,
                bodies: [],
                blocks: {},
                index: 0,
                auto: "h"
            }, f = b.escapeJs(c),
            g = c ? '"' + f + '",' : "",
            h = "function(dust){",
            i = s.compileNode(e, a);
        return c && (h += 'dust.register("' + f + '",' + i + ");"), h += k(e) + l(e) + "return " + i + "}", d = "(" + h + "(dust));", b.config.amd ? "define(" + g + '["dust.core"],' + h + ");" : b.config.cjs ? "module.exports=function(dust){var tmpl=" + d + "var f=" + r().toString() + ";f.template=tmpl;return f}" : d
    }

    function k(a) {
        var b, c = [],
            d = a.blocks;
        for (b in d) c.push('"' + b + '":' + d[b]);
        return c.length ? (a.blocks = "ctx=ctx.shiftBlocks(blocks);", "var blocks={" + c.join(",") + "};") : (a.blocks = "", a.blocks)
    }

    function l(a) {
        var b, c, d = [],
            e = a.bodies,
            f = a.blocks;
        for (b = 0, c = e.length; c > b; b++) d[b] = "function body_" + b + "(chk,ctx){" + f + "return chk" + e[b] + ";}body_" + b + ".__dustBody=!0;";
        return d.join("")
    }

    function m(a, b) {
        var c, d, e = "";
        for (c = 1, d = b.length; d > c; c++) e += s.compileNode(a, b[c]);
        return e
    }

    function n(a, c, d) {
        return "." + (b._aliases[d] || d) + "(" + s.compileNode(a, c[1]) + "," + s.compileNode(a, c[2]) + "," + s.compileNode(a, c[4]) + "," + s.compileNode(a, c[3]) + ")"
    }

    function o(a) {
        return a.replace(v, "\\\\").replace(w, '\\"').replace(x, "\\f").replace(y, "\\n").replace(z, "\\r").replace(A, "\\t")
    }

    function p(a, c, d) {
        var e = b.loadSource(b.compile(a));
        return r(e)(c, d)
    }

    function q(a, c) {
        var d = b.loadSource(b.compile(a, c));
        return r(d)
    }

    function r(a) {
        return function(c, d) {
            var e = d ? "render" : "stream";
            return b[e](a, c, d)
        }
    }
    var s = {}, t = b.isArray;
    s.compile = function(b, d) {
        try {
            var e = c(a(b));
            return j(e, d)
        } catch (f) {
            if (!f.line || !f.column) throw f;
            throw new SyntaxError(f.message + " At line : " + f.line + ", column : " + f.column)
        }
    }, s.filterNode = function(a, b) {
        return s.optimizers[b[0]](a, b)
    }, s.optimizers = {
        body: e,
        buffer: g,
        special: f,
        format: i,
        reference: d,
        "#": d,
        "?": d,
        "^": d,
        "<": d,
        "+": d,
        "@": d,
        "%": d,
        partial: d,
        context: d,
        params: d,
        bodies: d,
        param: d,
        filters: g,
        key: g,
        path: g,
        literal: g,
        raw: g,
        comment: h,
        line: h,
        col: h
    }, s.pragmas = {
        esc: function(a, b, c) {
            var d, e = a.auto;
            return b || (b = "h"), a.auto = "s" === b ? "" : b, d = m(a, c.block), a.auto = e, d
        }
    };
    var u = {
        s: " ",
        n: "\n",
        r: "\r",
        lb: "{",
        rb: "}"
    };
    s.compileNode = function(a, b) {
        return s.nodes[b[0]](a, b)
    }, s.nodes = {
        body: function(a, b) {
            var c = a.index++,
                d = "body_" + c;
            return a.bodies[c] = m(a, b), d
        },
        buffer: function(a, b) {
            return ".w(" + B(b[1]) + ")"
        },
        format: function(a, b) {
            return ".w(" + B(b[1]) + ")"
        },
        reference: function(a, b) {
            return ".f(" + s.compileNode(a, b[1]) + ",ctx," + s.compileNode(a, b[2]) + ")"
        },
        "#": function(a, b) {
            return n(a, b, "section")
        },
        "?": function(a, b) {
            return n(a, b, "exists")
        },
        "^": function(a, b) {
            return n(a, b, "notexists")
        },
        "<": function(a, b) {
            for (var c = b[4], d = 1, e = c.length; e > d; d++) {
                var f = c[d],
                    g = f[1][1];
                if ("block" === g) return a.blocks[b[1].text] = s.compileNode(a, f[2]), ""
            }
            return ""
        },
        "+": function(a, b) {
            return "undefined" == typeof b[1].text && "undefined" == typeof b[4] ? ".b(ctx.getBlock(" + s.compileNode(a, b[1]) + ",chk, ctx)," + s.compileNode(a, b[2]) + ", {}," + s.compileNode(a, b[3]) + ")" : ".b(ctx.getBlock(" + B(b[1].text) + ")," + s.compileNode(a, b[2]) + "," + s.compileNode(a, b[4]) + "," + s.compileNode(a, b[3]) + ")"
        },
        "@": function(a, b) {
            return ".h(" + B(b[1].text) + "," + s.compileNode(a, b[2]) + "," + s.compileNode(a, b[4]) + "," + s.compileNode(a, b[3]) + "," + s.compileNode(a, b[5]) + ")"
        },
        "%": function(a, b) {
            var c, d, e, f, g, h, i, j, k, l = b[1][1];
            if (!s.pragmas[l]) return "";
            for (c = b[4], d = {}, j = 1, k = c.length; k > j; j++) h = c[j], d[h[1][1]] = h[2];
            for (e = b[3], f = {}, j = 1, k = e.length; k > j; j++) i = e[j], f[i[1][1]] = i[2][1];
            return g = b[2][1] ? b[2][1].text : null, s.pragmas[l](a, g, d, f)
        },
        partial: function(a, b) {
            return ".p(" + s.compileNode(a, b[1]) + ",ctx," + s.compileNode(a, b[2]) + "," + s.compileNode(a, b[3]) + ")"
        },
        context: function(a, b) {
            return b[1] ? "ctx.rebase(" + s.compileNode(a, b[1]) + ")" : "ctx"
        },
        params: function(a, b) {
            for (var c = [], d = 1, e = b.length; e > d; d++) c.push(s.compileNode(a, b[d]));
            return c.length ? "{" + c.join(",") + "}" : "{}"
        },
        bodies: function(a, b) {
            for (var c = [], d = 1, e = b.length; e > d; d++) c.push(s.compileNode(a, b[d]));
            return "{" + c.join(",") + "}"
        },
        param: function(a, b) {
            return s.compileNode(a, b[1]) + ":" + s.compileNode(a, b[2])
        },
        filters: function(a, b) {
            for (var c = [], d = 1, e = b.length; e > d; d++) {
                var f = b[d];
                c.push('"' + f + '"')
            }
            return '"' + a.auto + '"' + (c.length ? ",[" + c.join(",") + "]" : "")
        },
        key: function(a, b) {
            return 'ctx.get(["' + b[1] + '"], false)'
        },
        path: function(a, b) {
            for (var c = b[1], d = b[2], e = [], f = 0, g = d.length; g > f; f++) e.push(t(d[f]) ? s.compileNode(a, d[f]) : '"' + d[f] + '"');
            return "ctx.getPath(" + c + ", [" + e.join(",") + "])"
        },
        literal: function(a, b) {
            return B(b[1])
        },
        raw: function(a, b) {
            return ".w(" + B(b[1]) + ")"
        }
    };
    var v = /\\/g,
        w = /"/g,
        x = /\f/g,
        y = /\n/g,
        z = /\r/g,
        A = /\t/g,
        B = "undefined" == typeof JSON ? function(a) {
            return '"' + o(a) + '"'
        } : JSON.stringify;
    return b.compiler = s, b.compile = b.compiler.compile, b.renderSource = p, b.compileFn = q, b.filterNode = s.filterNode, b.optimizers = s.optimizers, b.pragmas = s.pragmas, b.compileNode = s.compileNode, b.nodes = s.nodes, s
}), "function" == typeof define && define.amd && define.amd.dust === !0 && define(["require", "dust.core", "dust.compile"], function(a, b) {
    return b.onLoad = function(b, c) {
        a([b], function() {
            c()
        })
    }, b
}), ! function(a, b) {
    "function" == typeof define && define.amd && define.amd.dust === !0 ? define(["dust.core"], b) : "object" == typeof exports ? module.exports = b(require("dustjs-linkedin")) : b(a.dust)
}(this, function(a) {
    function b(b, c, d) {
        d = d || "INFO", b = b ? "{@" + b + "}: " : "", a.log(b + c, d)
    }

    function c(a) {
        l[a] || (b(a, "Deprecation warning: " + a + " is deprecated and will be removed in a future version of dustjs-helpers", "WARN"), b(null, "For help and a deprecation timeline, see https://github.com/linkedin/dustjs-helpers/wiki/Deprecated-Features#" + a.replace(/\W+/g, ""), "WARN"), l[a] = !0)
    }

    function d(a) {
        return a.stack.tail && a.stack.tail.head && "undefined" != typeof a.stack.tail.head.__select__
    }

    function e(a) {
        return d(a) && a.get("__select__")
    }

    function f(a, b) {
        var c, d = a.stack.head,
            e = a.rebase();
        a.stack && a.stack.tail && (e.stack = a.stack.tail);
        var f = {
            isPending: !1,
            isResolved: !1,
            isDeferredComplete: !1,
            deferreds: []
        };
        for (c in b) f[c] = b[c];
        return e.push({
            __select__: f
        }).push(d, a.stack.index, a.stack.of)
    }

    function g(a) {
        var b, c;
        if (a.isDeferredPending = !0, a.deferreds.length)
            for (a.isDeferredComplete = !0, b = 0, c = a.deferreds.length; c > b; b++) a.deferreds[b]();
        a.isDeferredPending = !1
    }

    function h(a, b) {
        return "function" == typeof b ? b.toString().replace(/(^\s+|\s+$)/gm, "").replace(/\n/gm, "").replace(/,\s*/gm, ", ").replace(/\)\{/gm, ") {") : b
    }

    function i(a, b) {
        return function(c, d, e, f) {
            return j(c, d, e, f, a, b)
        }
    }

    function j(a, c, d, f, g, h) {
        var i, j, l, m, n = d.block,
            o = d["else"],
            p = e(c) || {};
        if (p.isResolved && !p.isDeferredPending) return a;
        if (f.hasOwnProperty("key")) j = f.key;
        else {
            if (!p.hasOwnProperty("key")) return b(g, "No key specified", "WARN"), a;
            j = p.key
        }
        return m = f.type || p.type, j = k(c.resolve(j), m), l = k(c.resolve(f.value), m), h(j, l) ? (p.isPending || (i = !0, p.isPending = !0), n && (a = a.render(n, c)), i && (p.isResolved = !0)) : o && (a = a.render(o, c)), a
    }

    function k(a, b) {
        switch (b && (b = b.toLowerCase()), b) {
            case "number":
                return +a;
            case "string":
                return String(a);
            case "boolean":
                return a = "false" === a ? !1 : a, Boolean(a);
            case "date":
                return new Date(a)
        }
        return a
    }
    var l = {}, m = {
            tap: function(a, b, d) {
                return c("tap"), d.resolve(a)
            },
            sep: function(a, b, c) {
                var d = c.block;
                return b.stack.index === b.stack.of - 1 ? a : d ? d(a, b) : a
            },
            first: function(a, b, c) {
                return 0 === b.stack.index ? c.block(a, b) : a
            },
            last: function(a, b, c) {
                return b.stack.index === b.stack.of - 1 ? c.block(a, b) : a
            },
            contextDump: function(a, c, d, e) {
                var f, g, i = c.resolve(e.to),
                    j = c.resolve(e.key);
                switch (j) {
                    case "full":
                        f = c.stack;
                        break;
                    default:
                        f = c.stack.head
                }
                switch (g = JSON.stringify(f, h, 2), i) {
                    case "console":
                        b("contextDump", g);
                        break;
                    default:
                        g = g.replace(/</g, "\\u003c"), a = a.write(g)
                }
                return a
            },
            math: function(a, c, d, h) {
                var i, j = h.key,
                    k = h.method,
                    l = h.operand,
                    m = h.round;
                if (!h.hasOwnProperty("key") || !h.method) return b("math", "`key` or `method` was not provided", "ERROR"), a;
                switch (j = parseFloat(c.resolve(j)), l = parseFloat(c.resolve(l)), k) {
                    case "mod":
                        0 === l && b("math", "Division by 0", "ERROR"), i = j % l;
                        break;
                    case "add":
                        i = j + l;
                        break;
                    case "subtract":
                        i = j - l;
                        break;
                    case "multiply":
                        i = j * l;
                        break;
                    case "divide":
                        0 === l && b("math", "Division by 0", "ERROR"), i = j / l;
                        break;
                    case "ceil":
                    case "floor":
                    case "round":
                    case "abs":
                        i = Math[k](j);
                        break;
                    case "toint":
                        i = parseInt(j, 10);
                        break;
                    default:
                        b("math", "Method `" + k + "` is not supported", "ERROR")
                }
                return "undefined" != typeof i && (m && (i = Math.round(i)), d && d.block ? (c = f(c, {
                    key: i
                }), a = a.render(d.block, c), g(e(c))) : a = a.write(i)), a
            },
            select: function(a, c, d, h) {
                var i = d.block,
                    j = {};
                return h.hasOwnProperty("key") && (j.key = c.resolve(h.key)), h.hasOwnProperty("type") && (j.type = h.type), i ? (c = f(c, j), a = a.render(i, c), g(e(c))) : b("select", "Missing body block", "WARN"), a
            },
            eq: i("eq", function(a, b) {
                return a === b
            }),
            ne: i("ne", function(a, b) {
                return a !== b
            }),
            lt: i("lt", function(a, b) {
                return b > a
            }),
            lte: i("lte", function(a, b) {
                return b >= a
            }),
            gt: i("gt", function(a, b) {
                return a > b
            }),
            gte: i("gte", function(a, b) {
                return a >= b
            }),
            any: function(a, c, d, f) {
                var g = e(c);
                return g ? g.isDeferredComplete ? b("any", "Must not be nested inside {@any} or {@none} block", "ERROR") : a = a.map(function(a) {
                    g.deferreds.push(function() {
                        g.isResolved && (a = a.render(d.block, c)), a.end()
                    })
                }) : b("any", "Must be used inside a {@select} block", "ERROR"), a
            },
            none: function(a, c, d, f) {
                var g = e(c);
                return g ? g.isDeferredComplete ? b("none", "Must not be nested inside {@any} or {@none} block", "ERROR") : a = a.map(function(a) {
                    g.deferreds.push(function() {
                        g.isResolved || (a = a.render(d.block, c)), a.end()
                    })
                }) : b("none", "Must be used inside a {@select} block", "ERROR"), a
            },
            size: function(b, c, d, e) {
                var f, g, h = e.key;
                if (h = c.resolve(e.key), h && h !== !0)
                    if (a.isArray(h)) f = h.length;
                    else if (!isNaN(parseFloat(h)) && isFinite(h)) f = h;
                else if ("object" == typeof h) {
                    f = 0;
                    for (g in h) h.hasOwnProperty(g) && f++
                } else f = (h + "").length;
                else f = 0;
                return b.write(f)
            }
        };
    for (var n in m) a.helpers[n] = m[n];
    return a
});
var widgetTemplates = {};
widgetTemplates["cpi-call2action"] = '<div class="cpi-fullscreen-widget-background"></div>\n<div class="cpi-call2action-widget-container cpi-widget-container border-box widget-root">\n	<div class="cpi-call2action-widget-banner paddingless left right border-box">\n	<div class="cpi-call2action-video-container">\n	<div class="cpi-call2action-video-timer"></div>\n	<video poster="{poster}" id="{widgetId}-video-player" preload="auto" autoplay>\n	<source src="{mediaSrc}" type="video/mp4">\n	</video>\n	</div>\n	{@select key=playButton}\n	{@eq value="true"}\n {>"play-button"/}\n	{/eq}\n	{/select}\n	</div>\n	<div class="sg-widget-tracking-pixel">\n	{trackingPixel|s}\n	</div>\n</div>\n', widgetTemplates["cpi-fullscreen-alt-a-desktop"] = '<div class="cpi-centering-container widget-root">\n	<div class="cpi-centering-wrapper">\n	<div class="cpi-fullscreen-widget-background"></div>\n	<div class="cpi-fullscreen-widget-container cpi-widget-container border-box">\n	<div class="cpi-widget-container cpi-banner-description-container cpi-fullscreen-get">\n	<div class="cpi-fullscreen-widget-header sg-resize-text border-box cpi-fixed-height">\n	<span class="fixed-font-size">Free Games</span>\n	<i class="cpi-fullscreen-widget-close-button fa fa-times border-box"></i>\n	</div>\n	<div class="cpi-banner-description-content">\n	<div class="row">\n	<div class="col-md-12"><img class="cpi-deal-image" src="{icon}">\n </div>\n	</div>\n	<div class="row">\n	<div class="col-md-12"><h1 class="h1 cpi-deal-title">{title}</h1></div>\n	</div>\n	<div class="row">\n	<div class="col-md-12"><p class="cpi-deal-description">{description}</p></div>\n	</div>\n	<div class="row">\n	<div class="col-md-12">\n <button class="col-md-10 col-md-offset-1 btn cpi-deal-button">Play now</button>\n	</div>\n	</div>\n	<div class="sg-widget-tracking-pixel" style="width: 1px; height: 1px;">{trackingPixel|s}</div>\n	</div>\n	</div>\n	</div>\n	<div class="cpi-widget-clear"></div>\n </div>\n</div>\n', widgetTemplates["cpi-fullscreen-alt-a-mobile"] = '<div class="widget-root">\n	<div class="cpi-fullscreen-widget-background"></div>\n	<div class="cpi-fullscreen-widget-container cpi-widget-container border-box cpi-fullscreen-a-mobile">\n	<div class="cpi-fullscreen-widget-header sg-resize-text border-box cpi-fixed-height">\n	<span class="fixed-font-size">Top Free Apps</span>\n	<i class="cpi-fullscreen-widget-close-button fa fa-times border-box"></i>\n	</div>\n	<div class="cpi-fullscreen-widget-above-banner border-box widget-vertical-section fit-children-to-smallest-height cpi-fullscreen-get">\n	<div class="cpi-fullscreen-widget-icon paddingless left border-box">\n	<img src="{icon}" class="border-box">\n	</div>\n	<div class="cpi-fullscreen-rhs border-box">\n	<div class="cpi-fullscreen-widget-title paddingless left right sg-resize-text border-box">\n	{title}\n	</div>\n	<div class="cpi-fullscreen-widget-description paddingless left right sg-resize-text border-box fit-text">\n	<div>\n	{description}\n	</div>\n	</div>\n	</div>\n	<div class="cpi-widget-clear"></div>\n	</div>\n	<div class="cpi-fullscreen-widget-banner paddingless left right border-box widget-vertical-section widget-media-section\n	{@select key=mediaType}\n	{@eq value="banner"} cpi-fullscreen-get{/eq}\n	{/select}\n	">\n	{@select key=mediaType}\n	{@eq value="banner"}\n	<img src="{mediaSrc}" class="border-box">\n {/eq}\n	{@eq value="video"}\n	<video class="cpi-fullscreen-widget-video-container" id="{widgetId}-video-player" preload="auto"\n	 height="{mediaHeight}" autoplay>\n	<source src="{mediaSrc}" type="video/mp4">\n	</video>\n	{@select key=playButton}\n	{@eq value="true"}\n {>"play-button"/}\n	{/eq}\n	{/select}\n	{/eq}\n	{/select}\n	</div>\n	<div class="cpi-widget-clear"></div>\n	<div class="cpi-fullscreen-widget-footer border-box cpi-fullscreen-get cpi-fixed-height">\n	<img src="http://embedder.softgames.de/images/stars.png" />\n	<div class="cpi-fullscreen-widget-button cpi-fullscreen-widget-button-desktop sg-resize-text border-box cpi-fullscreen-get">{buttonText}</div>\n	<div class="sg-widget-tracking-pixel">\n	{trackingPixel|s}\n	</div>\n	</div>\n	<div class="cpi-widget-clear"></div>\n</div>\n', widgetTemplates["cpi-fullscreen-alt-a"] = "<!-- silence is golden -->", widgetTemplates["cpi-fullscreen-alt-b-responsive"] = '<section class="cpi-fullscreen-white-responsive widget-root">\n	<div class="cpi-fullscreen-widget-container	{@select key=isApplift}\n	{@eq value="false"}\n	cpi-fullscreen-get\n	{/eq}\n	{/select}\n	">\n <header>\n	<a href="javascript:void(0)" class="cpi-fullscreen-widget-close-button">\n	<img src="https://s3.amazonaws.com/embedder-container/images/close-thin.png" />\n	</a>\n	</header>\n	<article>\n	<div>\n	<img src="{mediaSrc}">\n	</div>\n	</article>\n	<footer>\n	<img src="{icon}"/>\n	<div>\n	<h2>\n	<span>{title}</span>\n	<section>\n	<i class="fa fa-star"></i>\n	<i class="fa fa-star"></i>\n	<i class="fa fa-star"></i>\n	<i class="fa fa-star"></i>\n	<i class="fa fa-star-half-o"></i>\n	<span>(773,877)</span>\n	</section>\n	</h2>\n	</div>\n <a href="javascript:void(0)">\n	<span>download now</span>\n	</a>\n	<div class="sg-widget-tracking-pixel">\n	{trackingPixel|s}\n	</div>\n	</footer>\n	</div>\n	{@select key=isApplift}\n	{@eq value="true"}\n	<a class="widget-window-link" target="_blank" rel="noreferrer" href="{url}"></a>\n	{/eq}\n	{/select}\n</section>\n', widgetTemplates["cpi-fullscreen-alt-b"] = '<section class="cpi-fullscreen-white-variance widget-root">\n	<div class="cpi-fullscreen-get cpi-fullscreen-widget-container">\n	<header>\n	<a href="javascript:void(0)" class="cpi-fullscreen-widget-close-button">\n	<i class="fa fa-times-circle-o"></i>\n	</a>\n	</header>\n	<article>\n	<div>\n	{@select key=mediaType}\n	{@eq value="banner"}\n	<img src="{mediaSrc}">\n	{/eq}\n	{@eq value="video"}\n	<video id="{widgetId}-video-player" preload="auto" autoplay>\n	<source src="{mediaSrc}" type="video/mp4">\n	</video>\n	{@select key=playButton}\n	{@eq value="true"}\n	{>"play-button"/}\n	{/eq}\n	{/select}\n	{/eq}\n	{/select}\n	</div>\n	</article>\n	<footer>\n	<img src="{icon}"/>\n	<div>\n	<h2>\n	<span>{title}</span>\n <img src="http://embedder.softgames.de/images/stars.png"/> 773,877 <i class="fa fa-user"></i>\n	</h2>\n	</div>\n	<a href="javascript:void(0)">\n	download now\n	</a>\n	<div class="sg-widget-tracking-pixel">\n	{trackingPixel|s}\n	</div>\n	</footer>\n </div>\n</section>\n', widgetTemplates["cpi-fullscreen-alt-c"] = '<section class="cpi-fullscreen-alt-c widget-root">\n	<div class="cpi-fullscreen-widget-container	{@select key=isApplift}\n	{@eq value="false"}\n	cpi-fullscreen-get\n	{/eq}\n	{/select}\n	">\n	<div class="section video-on-top">\n	<header>\n	<video class="inline-video">\n	<source src="{video}" type="video/mp4" />\n	</video>\n	<canvas class="inline-video-canvas"></canvas>\n	<img src="https://s3.amazonaws.com/embedder-container/play-light.png" />\n	</header>\n	<section>\n <a href="javascript:void(0)" class="pause-btn"><i class="glow-button fa fa-play bluePulse"></i></a>\n	<span class="inline-countdown">--</span>\n	<div class="video-progress-bar">\n	<div></div>\n	</div>\n	</section>\n	</div>\n	<div class="section">\n	<article>\n	<div>\n	<div>\n <img src="{icon}">\n	</div>\n	<h3>\n	{title}\n	</h3>\n	<p>\n	{description}\n	</p>\n	</div>\n	</article>\n	<h3 class="visible-landscape">Install Now?</h3>\n	<footer>\n	<h3 class="visible-portrait">Install Now?</h3>\n	<a href="javascript:void(0)" class="cpi-fullscreen-widget-close-button no no-show-delay">\n	<span>No</span>\n	</a>\n	<a href="{url}" class="yes">\n	<span>Yes</span>\n	</a>\n	</footer>\n	<div class="sg-widget-tracking-pixel">\n	{trackingPixel|s}\n	</div>\n	</div>\n	{@select key=isApplift}\n	{@eq value="true"}\n	<a class="widget-window-link widget-window-link-top" rel="noreferrer" href="{url}"></a>\n	<a class="widget-window-link widget-window-link-middle" rel="noreferrer" href="{url}"></a>\n	<a class="widget-window-link widget-window-link-bottom-right" rel="noreferrer" href="{url}"></a>\n	{/eq}\n	{/select}\n </div>\n</section>\n', widgetTemplates["cpi-fullscreen-alt-d"] = '<section class="cpi-fullscreen-alt-d widget-root">\n	<div class="cpi-fullscreen-widget-container	{@select key=isApplift}\n	{@eq value=" false\n	"}\n	cpi-fullscreen-get\n	{/eq}\n	{/select}\n	">\n	<div class="section">\n <video class="inline-video">\n	<source src="{video}" type="video/mp4"/>\n	</video>\n	<canvas class="inline-video-canvas"></canvas>\n	<div class="play-screen pause-btn hide-on-play"></div>\n	<div class="video-progress-bar">\n	<div></div>\n	</div>\n	<span class="inline-countdown">--</span>\n	</div>\n	<div class="section">\n	<article>\n	<div>\n	<div>\n	<img src="{icon}">\n	</div>\n	<h2>\n	<section>\n	<i class="fa fa-star"></i>\n	<i class="fa fa-star"></i>\n	<i class="fa fa-star"></i>\n	<i class="fa fa-star"></i>\n	<i class="fa fa-star-half-o"></i>\n <span>(773,877)</span>\n	</section>\n	<span>\n	 {title}\n	</span>\n	</h2>\n\n	{@select key=testApplift}\n	{@eq value="no"}\n	<a href="javascript:void(0)" class="yes animated cpi-fullscreen-get">\n	<span><strong>Play</strong></span>\n	</a>\n	{/eq}\n	{/select}\n\n	</div>\n </article>\n	<footer>\n\n	{@select key=testApplift}\n	{@eq value="no"}\n	<a href="javascript:void(0)" class="cpi-fullscreen-widget-close-button no no-show-delay">\n	<span>{closeButtonText}</span>\n	</a>\n	{/eq}\n	{/select}\n\n	{@select key=testApplift}\n	{@eq value="yes"}\n\n\n <a rel="noreferrer" href="{url}"\n	 style="position: absolute; bottom: 75px; left: 19px; right: auto; color: #333b4d; font-size: 14px;"\n	 target="_blank">\n	<span>noref + blank</span>\n	</a>\n	<a href="{url}"\n  style="position: absolute; bottom: 75px; right: 19px; left: auto; color: #333b4d; font-size: 14px;"\n	 target="_blank">\n	<span>blank</span>\n	</a>\n\n	<a rel="noreferrer" href="{url}"\n	 style="position: absolute; bottom: 45px; left: 19px; right: auto; color: #333b4d; font-size: 14px;"\n  target="_parent">\n	<span>noref + parent</span>\n	</a>\n	<a href="{url}"\n	 style="position: absolute; bottom: 45px; right: 19px; left: auto; color: #333b4d; font-size: 14px;"\n	 target="_parent">\n	<span>parent</span>\n	</a>\n\n	<a rel="noreferrer" href="{url}"\n  style="position: absolute; bottom: 9px; left: 19px; right: auto; color: #333b4d; font-size: 14px;">\n	<span>noref</span>\n	</a>\n	<a href="{url}"\n	 style="position: absolute; bottom: 9px; right: 19px; left: auto; color: #333b4d; font-size: 14px;">\n	<span>normal</span>\n	</a>\n\n	{/eq}\n {/select}\n\n	</footer>\n	<div class="sg-widget-tracking-pixel">\n	{trackingPixel|s}\n	</div>\n	</div>\n\n	{@select key=testApplift}\n	{@eq value="no"}\n\n	{@select key=isApplift}\n	{@eq value="true"}\n	<a class="widget-window-link widget-window-link-bottom" rel="noreferrer" href="{url}" target="_top"></a>\n	{/eq}\n	{/select}\n\n	{/eq}\n	{/select}\n\n	</div>\n</section>\n', widgetTemplates["cpi-gd-alt-a-desktop"] = '<div class="cpi-centering-container widget-root">\n	<div class="cpi-centering-wrapper">\n	<div class="cpi-fullscreen-widget-container cpi-widget-container border-box">\n	<div class="cpi-widget-container cpi-banner-description-container cpi-fullscreen-get">\n	<div class="cpi-fullscreen-widget-header sg-resize-text border-box cpi-fixed-height">\n	<span class="fixed-font-size">Free Games</span>\n <i class="cpi-fullscreen-widget-close-button fa fa-times border-box"></i>\n	</div>\n	<div class="cpi-banner-description-content">\n	<div class="row">\n	<div class="col-md-12"><img class="cpi-deal-image" src="{icon}">\n	</div>\n	</div>\n	<div class="row">\n	<div class="col-md-12"><h1 class="h1 cpi-deal-title">{title}</h1></div>\n	</div>\n	<div class="row">\n	<div class="col-md-12"><p class="cpi-deal-description">{description}</p></div>\n	</div>\n	<div class="row">\n	<div class="col-md-12">\n	<button class="col-md-10 col-md-offset-1 btn cpi-deal-button">Play now</button>\n	</div>\n	</div>\n	<div class="sg-widget-tracking-pixel" style="width: 1px; height: 1px;">{trackingPixel|s}</div>\n	</div>\n	</div>\n	</div>\n	<div class="cpi-widget-clear"></div>\n	</div>\n</div>\n',
widgetTemplates["cpi-gd-alt-a-mobile"] = '<div class="widget-root">\n	<div class="cpi-fullscreen-widget-container cpi-widget-container border-box cpi-fullscreen-a-mobile">\n	<div class="cpi-fullscreen-widget-header sg-resize-text border-box cpi-fixed-height">\n	<span class="fixed-font-size">Top Free Apps</span>\n	<i class="cpi-fullscreen-widget-close-button fa fa-times border-box"></i>\n	</div>\n	<div class="cpi-fullscreen-widget-above-banner border-box widget-vertical-section fit-children-to-smallest-height cpi-fullscreen-get">\n	<div class="cpi-fullscreen-widget-icon paddingless left border-box">\n	<img src="{icon}" class="border-box">\n	</div>\n	<div class="cpi-fullscreen-rhs border-box">\n	<div class="cpi-fullscreen-widget-title paddingless left right sg-resize-text border-box">\n	{title}\n	</div>\n	<div class="cpi-fullscreen-widget-description paddingless left right sg-resize-text border-box fit-text">\n	<div>\n	{description}\n	</div>\n	</div>\n	</div>\n	<div class="cpi-widget-clear"></div>\n	</div>\n	<div class="cpi-fullscreen-widget-banner paddingless left right border-box widget-vertical-section widget-media-section\n	{@select key=mediaType}\n	{@eq value="banner"} cpi-fullscreen-get{/eq}\n	{/select}\n	">\n	{@select key=mediaType}\n	{@eq value="banner"}\n	<img src="{mediaSrc}" class="border-box">\n	{/eq}\n	{@eq value="video"}\n	<video class="cpi-fullscreen-widget-video-container" id="{widgetId}-video-player" preload="auto"\n	 height="{mediaHeight}" autoplay>\n	<source src="{mediaSrc}" type="video/mp4">\n	</video>\n	{@select key=playButton}\n	{@eq value="true"}\n	{>"play-button"/}\n	{/eq}\n	{/select}\n	{/eq}\n	{/select}\n	</div>\n <div class="cpi-widget-clear"></div>\n	<div class="cpi-fullscreen-widget-footer border-box cpi-fullscreen-get cpi-fixed-height">\n	<img src="http://embedder.softgames.de/images/stars.png" />\n	<div class="cpi-fullscreen-widget-button cpi-fullscreen-widget-button-desktop sg-resize-text border-box cpi-fullscreen-get">{buttonText}</div>\n	<div class="sg-widget-tracking-pixel">\n	{trackingPixel|s}\n	</div>\n	</div>\n	<div class="cpi-widget-clear"></div>\n</div>\n', widgetTemplates["cpi-gd-alt-a"] = '<div class="widget-root">\n	<div class="cpi-fullscreen-widget-container cpi-widget-container border-box cpi-fullscreen-a-mobile cpi-gt-alt-a">\n	<div class="cpi-fullscreen-widget-header sg-resize-text border-box cpi-fixed-height">\n	<span class="fixed-font-size">Top Free Apps</span>\n	<i class="cpi-fullscreen-widget-close-button fa fa-times border-box"></i>\n	</div>\n	<div class="cpi-fullscreen-widget-above-banner border-box widget-vertical-section fit-children-to-smallest-height cpi-fullscreen-get">\n	<div class="cpi-fullscreen-widget-icon paddingless left border-box">\n	<img src="{icon}" class="border-box">\n	</div>\n <div class="cpi-fullscreen-rhs border-box">\n	<div class="cpi-fullscreen-widget-title paddingless left right sg-resize-text border-box">\n	{title}\n	</div>\n	<div class="cpi-fullscreen-widget-description paddingless left right sg-resize-text border-box fit-text">\n	<div>\n	{description}\n </div>\n	</div>\n	</div>\n	<div class="cpi-widget-clear"></div>\n	</div>\n	<div class="cpi-fullscreen-widget-banner paddingless left right border-box widget-vertical-section widget-media-section\n	{@select key=mediaType}\n	{@eq value="banner"} cpi-fullscreen-get{/eq}\n	{/select}\n ">\n	{@select key=mediaType}\n	{@eq value="banner"}\n	<img src="{mediaSrc}" class="border-box">\n	{/eq}\n	{@eq value="video"}\n	<video class="cpi-fullscreen-widget-video-container" id="{widgetId}-video-player" preload="auto"\n	 height="{mediaHeight}" autoplay>\n <source src="{mediaSrc}" type="video/mp4">\n	</video>\n	{@select key=playButton}\n	{@eq value="true"}\n	{>"play-button"/}\n	{/eq}\n	{/select}\n	{/eq}\n	{/select}\n	</div>\n	<div class="cpi-widget-clear"></div>\n	<div class="cpi-fullscreen-widget-footer border-box cpi-fullscreen-get cpi-fixed-height">\n	<img src="http://embedder.softgames.de/images/stars.png" />\n	<div class="cpi-fullscreen-widget-button cpi-fullscreen-widget-button-desktop sg-resize-text border-box cpi-fullscreen-get">{buttonText}</div>\n	<div class="sg-widget-tracking-pixel">\n {trackingPixel|s}\n	</div>\n	</div>\n	<div class="cpi-widget-clear"></div>\n</div>\n', widgetTemplates["cross-promotions-alt-a"] = '<div class="widget-root cross-promotions-alt-a" style="background-image: url(\'{iconPath}\')">\n	<a href="{href}" target="_blank" class="open-cross-promotion">\n	<span class="fa-stack fa-lg">\n	<i class="fa fa-circle fa-stack-2x"></i>\n	<i class="fa fa-check fa-stack-1x fa-inverse"></i>\n	</span>\n	</a>\n	<a href="javascript:void(0)" class="cpi-fullscreen-widget-close-button no-show-delay">\n	<span class="fa-stack fa-lg">\n <i class="fa fa-circle fa-stack-2x"></i>\n	<i class="fa fa-times fa-stack-1x fa-inverse"></i>\n	</span>\n	</a>\n</div>\n', widgetTemplates["dfp-fullscreen"] = '<div class="full-screen-widget widget-root centering-container">\n	<div class="centering-wrapper">\n	<div class="fullscreen-widget-background"></div>\n	<div class="fullscreen-widget-container widget-container border-box">\n	<div class="widget-container banner-description-container fullscreen-get" style="width:{width}px;">\n	<div class="fullscreen-widget-header sg-resize-text border-box fixed-height">\n <i class="fullscreen-widget-close-button fa fa-times border-box"></i>\n	</div>\n	<div class="banner-description-content">\n	<div class="row">\n	<div class="col-md-12">\n              <div id="{containerID}">\n              </div>\n            </div>\n	</div>\n	</div>\n	</div>\n	</div>\n </div>\n</div>\n', widgetTemplates["widget-popup"] = '<section class="widget-user-popup">\n	<div class="widget-popup-modal"></div>\n	<article>\n	<h1>Do you want to open the offer?</h1>\n	<button id="open-widget">Open</button>\n	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n <a id="close-widget" href="javascript:void(0)">close</a>\n	</article>\n</section>\n', widgetTemplates["play-button"] = '<div class="cpi-fullscreen-widget-video-play-button-container sg-resize-text border-box\n	{@select key=mobileDevice}\n	{@eq value="false"}cpi-fullscreen-widget-button-desktop{/eq}\n	{/select}\n	">\n	<div class="cpi-fullscreen-widget-video-play-button">\n	{@select key=mobileDevice}\n	{@eq value="true"}<i class="fa  fa-download cpi-fullscreen-widget-dl-icon"></i>{/eq}\n	{/select}\n	<i class="fa fa-play-circle-o fa-5x"></i>\n	</div>\n</div>\n';
var SgWidget = function(a, b, c, d, e) {
    function f() {
        var a = jQuery("<div>");
        a.attr("id", ga), a.attr("class", "cpi-widget-overlay"), a.attr("style", "position: absolute; z-index: 9999; top: 0; left: 0; bottom: 0; right: 0; background-color: #000000;"), a.html('<div class="text-center" style="position: absolute; margin: 0 auto; top: 50%; transform: translateY(-50%); width: 100%;"><i class="fa fa-spinner fa-spin" style="color: #FFFFFF"></i></div>'), jQuery("body").append(a)
    }

    function g() {
        jQuery("#" + ga).remove()
    }

    function h() {
        try {
            removeWidget(ea)
        } catch (a) {
            console.error("[WidgetJs] Failed to clean up"), console.error(a)
        }
    }

    function i() {
        window.sgWidgets.cmd.forEach(function(a) {
            try {
                a()
            } catch (b) {
                console.log("ERROR: " + b.message, b.stack)
            }
        })
    }

    function j() {
        return window.sgTrackSdk && jQuery.fn.rcarousel ? void k() : (window.sgWidgets.cmd.push(k), void(1 === window.sgWidgets.cmd.length && loadAllRequirements(function() {
            i()
        })))
    }

    function k() {
        ba(), s(), v(b.options), Ka && _(), B(), S(), u(c), M(o, L())
    }

    function l() {
        jQuery(".sg-lazy-loaded").each(function() {
            jQuery(this).unveil(), jQuery(this).parent().find(".sg-play-overlay").show()
        })
    }

    function m() {
        return {
            nameSpace: ea,
            buttonTextFont: db,
            buttonColor: bb,
            buttonTextColor: cb,
            buttonText: ab,
            buttonHoverColor: eb,
            type: c,
            widgetId: a,
            titleFont: Za,
            titleColor: $a,
            elementWidth: Eb,
            elementHeight: ua,
            showType: yb,
            orientation: Ea,
            layout: Da,
            widgetWidth: wa,
            widgetHeight: wb,
            imageHeight: Ca,
            imageWidth: Ba,
            gamesPerRow: rb,
            screenWidth: ra,
            gridMaxWidth: pa,
            isInIframe: Cb,
            maxHeight: ya,
            backgroundColor: Ya,
            showRating: _a,
            borderStyle: fb,
            sectionHeaderColor: Fb,
            gameNumber: ++Ib,
            highlightedGames: Jb,
            mobileDevice: hb,
            targetLink: Kb,
            mainColor: Gb,
            gradientTop: Lb,
            gradientBottom: Mb,
            widgetWidthPx: xa,
            moreGamesLink: Ga,
            showWidgetTitle: ub,
            showLogo: Bb,
            ios: ib,
            ipad: jb,
            android: kb,
            publisher: mb,
            pageLoadTime: ia,
            secondsOnPage: ja,
            testUrl: qb,
            gamesPerSection: Hb,
            locale: sb,
            widgetTitle: tb,
            maxWidth: va,
            numberOfGames: Db,
            thumbRatio: zb,
            gamesSupplied: Ha,
            dialogWidth: na,
            dialogHeight: ma,
            carouselWidth: za,
            pubCssClassName: Ja,
            fromOrientationChange: Ob,
            openGameInTab: Qb,
            gameOnPage: Rb,
            gameOnPagePlayButton: Sb,
            showCloseButton: Tb,
            cpiTitle: Vb,
            transaction_id: Wb,
            country: Xb,
            platform: Yb,
            document: document,
            widgetContext: Zb,
            pgIds: $b,
            advertiser: _b,
            adUnitId: ac,
            cpiSpecialData: bc,
            maxSize: hc,
            background: ic,
            forceVideo: cc,
            errorOnEmpty: dc,
            preloadMedia: ec,
            incentivise: fc,
            refillLives: gc,
            slotId: jc,
            closeButtonText: La,
            crossPromoGameSlug: kc,
            crossPromoLink: Na,
            crossPromoImage: Oa,
            openInNewWindow: Ma
        }
    }

    function n(a, b) {
        switch (c) {
            case Ta.GAME_BOX:
                gameBoxHtml(a, m());
                break;
            case Ta.VERTICAL_GAME_BOX:
                gameBoxHtml(a, m());
                break;
            case Ta.TEASER:
                teaserHtml(a, m());
                break;
            case Ta.TEASER_AD:
                teaserAdHtml(a, m());
                break;
            case Ta.ICON:
                iconHtml(a, m());
                break;
            case Ta.NWDE:
                mainHtml(a, m());
                break;
            case Ta.MAIN:
                mainHtml(a, m());
                break;
            case Ta.GRID:
                gridHtml(a, m());
                break;
            case Ta.PACKED_GRID:
                injectPackedGridGame(a, m());
                break;
            case Ta.CAROUSEL:
                carouselHtml(a, m());
                break;
            case Ta.ACCORDION:
                accordionHtml(a, m(), b);
                break;
            case Ta.PACKED_GRID_ENRTYPOINT:
                packedGridEntrypointHtml(a, m());
                break;
            case Ta.LIST_ENTRYPOINT:
                listEntrypointHtml(a, m());
                break;
            case Ta.CAROUSEL_WITH_DETAILS:
                carouselWithDetailsHtml(a, m());
                break;
            case Ta.CAROUSEL_WITH_ICONS:
                carouselWithIconsHtml(a, m());
                break;
            case Ta.GAME_BOX_WITH_DETAILS:
                gameBoxWithDetailsHtml(a, m());
                break;
            case Ta.CAROUSEL_BUTTONS_TOP:
                carouselButtonsTopHtml(a, m)
        }
        D(a)
    }

    function o(a) {
        var b;
        if (q(a), c == Ta.ACCORDION)
            for (b = 0; b < Xa.length; b++) R(Xa[b], b);
        else if (c === Ta.PACKED_GRID_ENRTYPOINT)
            for (b = 0; b < Xa[0].games.length; b++) n(Xa[0].games[b], 0);
        else if (c === Ta.LIST_ENTRYPOINT) R(Xa[2], 1);
        else if (c == Ta.NWDE) {
            var d = Math.floor(Math.random() * a.length);
            for (b = 0; b < a.length; b++) b == d ? mainAdContainer(m()) : n(a[b])
        } else
            for (b = 0; b < a.length; b++) n(a[b]);
        Q(), r(), Ob || (T(), $(), V(), X()), A(), c == Ta.NWDE && (p(), adConfig(m())), l()
    }

    function p() {
        var b = "var googletag = googletag || {}; googletag.cmd = googletag.cmd || []; (function(){ var gads = document.createElement('script'); gads.async = true; gads.type = 'text/javascript'; var useSSL = 'https:' == document.location.protocol; gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js'; var node = document.getElementsByTagName('script')[0]; node.parentNode.insertBefore(gads, node); })();",
            c = document.createElement("script");
        c.type = "text/javascript", c.text = b, c.id = "widget-" + a + "-ad-script", document.getElementsByTagName("head")[0].appendChild(c)
    }

    function q(a) {
        switch (c) {
            case Ta.GAME_BOX_WITH_DETAILS:
                Eb = (wa - 10 * (a.length - 1)) / a.length, Ba = Eb, Ca = Eb * zb, wb = 2.5 * Ca
        }
    }

    function r() {
        c == Ta.NWDE
    }

    function s() {
        b.options.ivwBrowserData && 0 == jQuery('script[src="http://script.ioam.de/iam.js"]').length && 0 == jQuery('script[src="https://script.ioam.de/iam.js"]').length && loadJs("//script.ioam.de/iam.js")
    }

    function t() {
        var c = "var iam_data = { ",
            d = hb ? b.options.ivwMobileData : b.options.ivwBrowserData;
        for (var e in d) d.hasOwnProperty(e) && (c += '"' + e + '": "' + d[e] + '", ');
        c = c.substring(0, c.length - 2), c += "}; iom.c(iam_data, 1);";
        var f = document.createElement("script");
        f.type = "text/javascript", f.text = c, f.id = "widget-" + a + "-ivw-script", document.body.appendChild(f)
    }

    function u(a) {
        switch (a) {
            case Ta.NWDE:
                createMainContainer(m());
                break;
            case Ta.MAIN:
                createMainContainer(m());
                break;
            case Ta.GRID:
                createGridContainer(m());
                break;
            case Ta.PACKED_GRID:
                createPackedGridContainer(m());
                break;
            case Ta.VERTICAL_GAME_BOX:
                createVerticalGameBoxContainer(m());
                break;
            case Ta.GAME_BOX:
                createGameBoxContainer(m());
                break;
            case Ta.TEASER:
                createTeaserContainer(m());
                break;
            case Ta.TEASER_AD:
                createTeaserAdContainer(m());
                break;
            case Ta.CAROUSEL:
                createCarouselContainer(m());
                break;
            case Ta.CAROUSEL_WITH_DETAILS:
                createCarouselWithDetailsContainer(m());
                break;
            case Ta.CAROUSEL_WITH_ICONS:
                createCarouselWithIconsContainer(m());
                break;
            case Ta.ACCORDION:
                createAccordionContainer(m());
                break;
            case Ta.PACKED_GRID_ENRTYPOINT:
                createPackedGridContainer(m());
                break;
            case Ta.LIST_ENTRYPOINT:
                createListEntrypointContainer(m());
                break;
            case Ta.GAME_BOX_WITH_DETAILS:
                createGameBoxWithDetailsContainer(m());
                break;
            case Ta.CAROUSEL_BUTTONS_TOP:
                createCarouselButtonsTopContainer(m());
                break;
            case Ta.CPI:
                var b = m();
                switch (b.layout) {
                    case "modCpiWidget":
                        createModCpiContainer(b);
                        break;
                    case "bannerDescription":
                        createCpiBannerDescriptionContainer(b);
                        break;
                    default:
                        createCpiContainer(b)
                }
        }
    }

    function v(d) {
        ha = d.cpiDealKey, gb = d.clickType || gb, Ha = 0 != b.games.length, hb = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), kb = /Android/i.test(navigator.userAgent), ib = /iPhone|iPad|iPod/i.test(navigator.userAgent), jb = /iPad/i.test(navigator.userAgent), Ya = d.backgroundColor || Ya, Za = d.titleFont || Za, $a = d.titleColor || $a, void 0 != d.showRating && (_a = d.showRating), ab = d.buttonText || ab, bb = d.buttonColor || bb, cb = d.buttonTextColor || cb, db = d.buttonTextFont || db, eb = d.buttonHoverColor || eb, fb = d.borderStyle || fb, void 0 != d.showType && (yb = d.showType), Fb = d.sectionHeaderColor || Fb, void 0 != d.openGameInTab && (Qb = "true" === d.openGameInTab ? !0 : "false" === d.openGameInTab ? !1 : d.openGameInTab), mb = d.publisher || mb, Ja = mb.replace(/\./g, "-"), ia = d.pageLoadTime || ia, ja = (Date.now() - ia) / 1e3, qb = d.testUrl || qb, Jb = d.highlightedGames || Jb, rb = d.gamesPerRow || rb, Hb = d.gamesPerSection || Hb, Hb > 20 && (Hb = 20), pa = d.gridMaxWidth || 60.6 * rb, sb = d.locale || sb, tb = d.widgetTitle || tb, vb = d.crossClickTarget || vb, (d.ivWBrowserData || d.ivwMobileData) && (sa = JSON.stringify({
            ivwMobileData: d.ivwMobileData,
            ivWBrowserData: d.ivwBrowserData
        })), void 0 != d.showWidgetTitle ? ub = "true" === d.showWidgetTitle ? !0 : "false" === d.showWidgetTitle ? !1 : d.showWidgetTitle : d.widgetTitle ? ub = !0 : c === Ta.NWDE && (ub = !0), checkNativeAndroidBrowser(lb), d.widgetName && (jQuery("#sg-game-" + a).attr("name", d.widgetName), ta = d.widgetName), Ia = c === Ta.CAROUSEL || c === Ta.CAROUSEL_WITH_DETAILS || c === Ta.CAROUSEL_WITH_ICONS || c === Ta.CAROUSEL_BUTTONS_TOP, x(), Da = d.layout || Da, y(d), void 0 != d.showLogo && (Bb = "true" === d.showLogo ? !0 : "false" === d.showLogo ? !1 : d.showLogo), void 0 != d.showCloseButton && (Tb = "true" === d.showCloseButton ? !0 : "false" === d.showCloseButton ? !1 : d.showCloseButton), Ub = void 0 == d.handleGames ? Ub : d.handleGames, Ea = d.orientation || Ea, B(), va = d.maxWidth || ra, xa = d.widgetWidth || jQuery("#sg-game-" + a).parent().width(), wa = d.widgetWidth || "100%", Aa = ub ? 62.7 : 0, xb = d.gamesPerPage || xb, ya = d.maxHeight || .4 * xa, c === Ta.NWDE && (ya = 400), wb = d.widgetHeight || ya, Ia && z(xa), "vertical" == Ea && (Ba = xa / 2, Ca = Ba * zb), c != Ta.ACCORDION && c !== Ta.LIST_ENTRYPOINT || w(xa), Kb = d.targetLink || "#", Gb = d.mainColor || Gb, Lb = d.gradientTop || Lb, Mb = d.gradientBottoom || Mb, c === Ta.CAROUSEL_WITH_DETAILS && (Ab = 0), c === Ta.NWDE && (Ga = "//nw.de/lifestyle/onlinespiele/"), Ga = d.moreGamesLink || Ga, c == Ta.VERTICAL_GAME_BOX && (bb = d.buttonColor || "#EE1C25", eb = d.buttonHoverColor || "#EE1C25", cb = d.buttonTextColor || "white", $a = d.titleColor || "black"), Sb = d.gameOnPagePlayButton || Sb, Rb = d.gameOnPage || Rb, Ka = -1 == mb.indexOf("affiliate__"), Vb = d.title || Vb, Wb = d.transaction_id || Wb, cc = d.forceVideo || cc, dc = d.errorOnEmpty || dc, ec = "undefined" == typeof d.preloadMedia ? ec : d.preloadMedia, fc = d.incentivise || fc, gc = d.refillLives || gc, La = d.closeButtonText, kc = d.crossPromoGameSlug || kc, Na = d.crossPromoLink, Oa = d.crossPromoImage, Ma = d.openInNewWindow, jc = d.slotId || jc, Xb = d.country || Xb, c === Ta.CPI && wa > jQuery(window).width() && (wa = jQuery(window).width()), Yb = hb && ib ? "iOS" : hb && kb ? "Android" : "Desktop", Zb = d.widgetContext || Zb, $b = d.pgIds || $b, _b = d.advertiser || _b, ac = d.adUnitId || ac, bc = d.cpiSpecialData || bc, hc = d.maxSize || hc
    }

    function w(a, b) {
        Ba = .17 * a, Ca = Ba, Fa = Hb * Ca + Hb * Ca * (.03 * Hb), b && b()
    }

    function x() {
        switch (c) {
            case Ta.NWDE:
                Da = "thumbnail-large";
                break;
            case Ta.MAIN:
                Da = "thumbnail-large";
                break;
            case Ta.CAROUSEL:
                Da = "info-under"
        }
    }

    function y(a) {
        switch (Da) {
            case "thumbnail-small":
                Bb = !1, Ea = "horizontal";
                break;
            case "thumbnail-medium":
                Bb = !1, Ea = "vertical";
                break;
            case "thumbnail-large":
                Bb = !0, Ea = "horizontal";
                break;
            case "title-top":
                void 0 == a.showType && (yb = !1), Bb = !1, Ea = "horizontal";
                break;
            case "info-under":
                void 0 == a.gamesPerPage && (xb = 3);
                break;
            case "info-right":
                void 0 == a.gamesPerPage && (xb = 2);
                break;
            case "modCpiWidget":
                ic = !1, hc = 300, ab = hb ? "Free for you" : "Play now"
        }
        switch (c) {
            case Ta.CAROUSEL_BUTTONS_TOP:
                void 0 == a.showWidgetTitle && (ub = !0);
                break;
            case Ta.TEASER:
                a.gamesPerRow || (rb = 2);
                break;
            case Ta.CAROUSEL_WITH_DETAILS:
                void 0 == a.mainColor && (Gb = "#E7433B", xb = 1);
                break;
            case Ta.GAME_BOX_WITH_DETAILS:
                void 0 == a.mainColor && (Gb = "#E7433B");
                break;
            case Ta.CAROUSEL_WITH_ICONS:
                void 0 == a.gamesPerPage && (xb = 7)
        }
    }

    function z(a, b) {
        xa = a, xa > va && (xa = va), xa > ra && (xa = ra), za = xa, Eb = Math.floor((xa - 100 - (xb - 1) * Ab) / xb), c === Ta.CAROUSEL_WITH_DETAILS && (Eb = xa), Ba = Eb, Ca = zb * Ba, wb = Ca + .2 * Ca + Aa + 5, ua = Math.floor(wb - Aa), ua += parseInt(.15 * ua), c == Ta.CAROUSEL_WITH_DETAILS && (Ca = .8 * Ca), "info-right" !== Da || hb || (Ba = .5 * Ba, Ca = Ba * zb, wb = Ca + Aa + 5, ua = Math.floor(Ca)), b && b()
    }

    function A() {
        switch (c) {
            case Ta.MAIN:
                mainCss(m());
                break;
            case Ta.NWDE:
                mainCss(m());
                break;
            case Ta.PACKED_GRID:
                renderPackedGridWidget(m());
                break;
            case Ta.TEASER_AD:
                teaserAdCss(m())
        }
    }

    function B(a) {
        hb && !jb ? (qa = window.screen.height, ra = window.screen.width, "horizontal" === Ea && (wa = ra, wb = .4 * ra), hb && ib && (ra = window.innerWidth, qa = window.innerHeight)) : (qa = window.innerHeight, ra = window.innerWidth), a && a()
    }

    function C(a, b) {
        B(), hb ? ib || lb ? jb ? b > a ? (ma = .95 * qa, na = a / b * ma) : (na = ra, ma = b / a * na) : ib ? b > a ? 0 == window.orientation || 180 == window.orientation ? (ma = .84 * qa, na = a / b * ma) : (na = .6 * ra, ma = b / a * na) : (na = ra, ma = b / a * na) : lb && (b > a ? (ma = .84 * qa, na = a / b * ma) : 0 == window.orientation ? (na = ra, ma = b / a * na) : (ma = .84 * qa, na = a / b * ma)) : a > b ? (na = .73 * ra, ma = b / a * na, jQuery(".sg-games-fullscreen-header").css("height", "35px")) : (ma = .84 * qa, na = a / b * ma, jQuery(".sg-games-fullscreen-header").css("height", "50px")) : (ma = .92173 * qa * .87867, oa = .13163 * ma, na = a / b * ma)
    }

    function D(a) {
        var b = jQuery("#" + a.gameid),
            c = "undefinedpx" !== a.wrapperheight && a.wrapperheight ? parseInt(a.wrapperheight.slice(0, a.wrapperheight.length - 2)) : 800,
            d = "undefinedpx" !== a.wrapperwidth && a.wrapperwidth ? parseInt(a.wrapperwidth.slice(0, a.wrapperwidth.length - 2)) : 533;
        if (C(d, c), a.wrapperheight = ma + "px", a.wrapperwidth = Pb ? na - 400 + "px" : na + "px", !hb || ib || lb) {
            var e = jQuery(".ui-widget-overlay");
            e.length > 0 && e.remove(), b.dialog({
                title: a.gameTitle,
                modal: !0,
                draggable: !1,
                resizable: !1,
                autoOpen: !1,
                height: ma,
                minWidth: na,
                width: na + 8,
                closeOnEscape: !0,
                open: function() {
                    jQuery(this).addClass("sg-open-dialog")
                },
                close: function() {
                    jQuery(".sgplayer").remove(), jQuery(this).removeClass("sg-open-dialog"), jQuery(".ui-widget-overlay").remove()
                }
            });
            var f = jQuery(".ui-dialog-titlebar");
            f.removeClass("ui-widget-header"), jQuery(".ui-dialog .ui-button-icon-primary").removeClass("ui-icon ui-icon-closethick").addClass("sg-close-button"), jQuery(".ui-dialog .ui-dialog-titlebar-close").addClass("sg-ui-icon-close"), jQuery(".ui-dialog .ui-dialog-titlebar-close").each(function() {
                jQuery(this).children().addClass("sg-ui-button-text")
            })
        }
        F(a)
    }

    function E(a, b, c, d) {
        d && a.dialog("option", "title", d), C(b, c), a.dialog("option", "minWidth", na), a.dialog("option", "width", na + 8), a.dialog("option", "minHeight", ma), a.dialog("option", "height", ma);
        var e = jQuery("#sgiframeplayer");
        0 !== e.length && e.css("width", na).css("height", ma)
    }

    function F(a) {
        if (Ub) {
            var b = jQuery("#" + a.gameid);
            gb === Ua.CLICK ? jQuery("#sg-game-" + a.gameid + " .sg-play-trigger").click(function(c) {
                G(b, a)
            }) : gb === Ua.DOUBLE_CLICK && jQuery("#sg-game-" + a.gameid + " .sg-play-trigger").dblclick(function(c) {
                G(b, a)
            })
        }
    }

    function G(b, d) {
        var e = parseInt(d.wrapperheight.slice(0, d.wrapperheight.length - 2)),
            f = parseInt(d.wrapperwidth.slice(0, d.wrapperwidth.length - 2));
        if (Cb) location.href = "//games.softgames.de/" + d.gamename + "/?p=" + mb, window.parent.postMessage({
            gamename: d.gameTitle,
            gameWidth: f,
            gameHeight: e
        }, "*");
        else if (hb || E(b, f, e, d.gameTitle), embed(document, d.gameid, d.gamename, d), jQuery(".sgplayer").data("gameWidth", f).data("gameHeight", e), !hb || ib || lb) {
            if ((ib || lb) && Y(f, e), b.dialog("open"), !hb) {
                var g = {
                    softgamesLinkHeight: oa,
                    crossClickTarget: vb,
                    publisher: mb,
                    thumbRatio: zb,
                    widgetId: a,
                    type: c,
                    openGame: la,
                    gamePlayId: ka,
                    widgetName: ta,
                    ivwConfig: sa,
                    secondsOnPage: ja
                };
                ca(b, g)
            }
        } else jQuery(".sg-games-fullscreen-title").empty().append(d.gameTitle), jQuery("#sg-games-fullscreen-container-" + a).show(), Y(f, e), H(d.gameid); if (pb = !0, ka = Math.floor(1e10 * Math.random()), la = d.gamename, Ka) {
            var h = {
                widgetId: a,
                "widgetType:": c,
                userId: sgWidgets.userId,
                publisher: mb,
                secondsOnPage: ja,
                game: la,
                gamePlayId: ka,
                device: hb ? "mobile" : "desktop",
                location: window.location.href,
                gamesSupplied: Ha
            };
            ta && (h.widgetName = ta), window.sgTrackSdk.trackEvent("widgets", "clicked", h)
        }
        sa && t()
    }

    function H(b) {
        var c = jQuery("#" + b),
            d = jQuery("#sg-games-fullscreen-container-" + a)[0];
        d.requestFullscreen ? d.requestFullscreen() : d.webkitRequestFullscreen ? d.webkitRequestFullscreen() : d.mozRequestFullScreen ? d.mozRequestFullScreen() : c.msRequestFullscreen && d.msRequestFullscreen()
    }

    function I() {
        document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || (jQuery(".sgplayer").remove(), jQuery("#sg-games-fullscreen-container-" + a).hide(), J())
    }

    function J() {
        document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
    }

    function K() {
        var a = "&custom_fields[]=project&custom_fields[]=iframeMaxResolution&custom_fields[]=landscape&custom_fields[]=portrait";
        switch (c) {
            case Ta.ACCORDION:
                a += "&custom_fields[]=thumb&custom_fields[]=title";
                break;
            case Ta.CAROUSEL:
                a += "&custom_fields[]=title&custom_fields[]=teaser", "info-right" != Da || hb || (a += "&custom_fields[]=types");
                break;
            case Ta.CAROUSEL_BUTTONS_TOP:
                break;
            case Ta.CAROUSEL_WITH_DETAILS:
                a += "&custom_fields[]=types&custom_fields[]=title&custom_fields[]=teaser&custom_fields[]=descriptions";
                break;
            case Ta.CAROUSEL_WITH_ICONS:
                a += "&custom_fields[]=thumb&custom_fields[]=title";
                break;
            case Ta.GAME_BOX:
                a += "&custom_fields[]=title&custom_fields[]=teaser&custom_fields[]=publisherLink", _a && (a += "&custom_fields[]=rating");
                break;
            case Ta.GAME_BOX_WITH_DETAILS:
                a += "&custom_fields[]=title&custom_fields[]=teaser&custom_fields[]=descriptions&custom_fields[]=types";
                break;
            case Ta.GRID:
                a += "&custom_fields[]=title&custom_fields[]=thumbBig";
                break;
            case Ta.ICON:
                a += "&custom_fields[]=title&custom_fields[]=thumbBig";
                break;
            case Ta.LIST_ENTRYPOINT:
                a += "&custom_fields[]=title&custom_fields[]=thumb";
                break;
            case Ta.MAIN:
                a += "&custom_fields[]=title&custom_fields[]=teaser&custom_fields[]=descriptions", yb && (a += "&custom_fields[]=types");
                break;
            case Ta.NWDE:
                a += "&custom_fields[]=title&custom_fields[]=teaser&custom_fields[]=descriptions", yb && (a += "&custom_fields[]=types");
                break;
            case Ta.PACKED_GRID:
                a += "&custom_fields[]=title&custom_fields[]=thumbBig";
                break;
            case Ta.PACKED_GRID_ENRTYPOINT:
                a += "&custom_fields[]=title&custom_fields[]=thumb";
                break;
            case Ta.TEASER:
                a += "&custom_fields[]=title&custom_fields[]=teaser&custom_fields[]=publisherLink";
                break;
            case Ta.TEASER_AD:
                a += "&custom_fields[]=thumbBig&custom_fields[]=title";
                break;
            case Ta.VERTICAL_GAME_BOX:
                a += "&custom_fields[]=title&custom_fields[]=teaser&custom_fields[]=publisherLink", _a && (a += "&custom_fields[]=rating")
        }
        return a
    }

    function L() {
        var d = {}, e = "//m.softgames.de/categories/latest-games.json?",
            f = "";
        if (c === Ta.ACCORDION || c === Ta.PACKED_GRID_ENRTYPOINT || c === Ta.LIST_ENTRYPOINT) e = "//m.softgames.de/api/v1/custom_categories?p=" + mb, f = "Basic " + btoa("publisher_2_0:n6D5UoSvhAVh");
        else if (b.games.length > 0) {
            e = "//m.softgames.de/categories/latest-games.json?";
            for (var g = 0; g < b.games.length; g++) g > 0 && (e += "&"), e += "games[]=" + b.games[g];
            e += "&p=" + mb, e += K()
        } else e = "//sg-widget-configuration.herokuapp.com/api/v1/games?publisher=" + mb + "&widgetName=" + ta + "&widgetId=" + a + "&widgetType=" + c;
        return "" != sb && void 0 != sb && (e += "&locale=" + sb), e += "&type=widgets", d.url = e, d.auth = f, d
    }

    function M(a, b) {
        var d = {
            affSub2: Zb,
            affSub3: $b,
            affSub4: ac
        };
        if (bc && (d.affSub5 = bc), c == Ta.ACCORDION || c == Ta.PACKED_GRID_ENRTYPOINT || c === Ta.LIST_ENTRYPOINT) jQuery.ajax({
            url: b.url,
            headers: {
                Authorization: b.auth
            },
            async: !0,
            success: function(b) {
                var c = b[0].bestGames,
                    d = b[0].bestRatedGames,
                    e = b[0].bestWeeklyGames;
                for (var f in b[0])
                    for (var g = 0; Hb > g; g++) b[0][f].games[g] = P(b[0][f].games[g]);
                c.games = c.games.splice(0, Hb), d.games = d.games.splice(0, Hb), e.games = e.games.splice(0, Hb), Xa = [c, d, e], a()
            }
        });
        else if (c === Ta.CPI)
            if (_b === Va.pubNative) createCpiDealForPubNative(m());
            else {
                var e = {
                    transaction_id: Wb,
                    country: Xb,
                    platform: Yb,
                    type: "non-incent",
                    hasOffers: JSON.stringify(d)
                };
                N("//rewarded-games.herokuapp.com/api/v1/deals", e)
            } else if (c === Ta.CPI_FULLSCREEN) {
            var e = {
                transaction_id: Wb,
                country: Xb,
                platform: Yb,
                type: "non-incent",
                hasOffers: JSON.stringify(d)
            };
            N("//rewarded-games.herokuapp.com/api/v1/deals", e)
        } else if (c === Ta.CPI_CALL2ACTION) {
            var e = {
                transaction_id: Wb,
                country: Xb,
                platform: Yb,
                type: "non-incent",
                hasOffers: JSON.stringify(d),
                video: cc ? 1 : 0,
                debug: 1
            };
            N("//rewarded-games.herokuapp.com/api/v1/deals", e)
        } else c === Ta.DFP_FULLSCREEN ? (p(), createDfpFullscreenDeal(m(), Qa, Sa)) : c === Ta.CROSS_PROMOTIONS ? createCrossPromotions(m(), Qa, Sa) : O(a, b)
    }

    function N(a, b) {
        ha && (b.key = ha);
        var d = null;
        switch (c) {
            case Ta.CPI:
                d = -1 !== ["modCpiWidget", "cpi-gd-alt-a"].indexOf(Da) ? createCpiFullscreenDeal : "bannerDescription" === Da ? createCpiBannerDescriptionWidget : createCpiDeal;
                break;
            case Ta.CPI_FULLSCREEN:
                d = createCpiFullscreenDeal;
                break;
            case Ta.CPI_CALL2ACTION:
                f(), d = createCpiCall2actionDeal
        }
        jQuery.ajax({
            url: a,
            type: "get",
            data: b,
            success: function(a) {
                return !dc || a && a.length ? void d(a, m(), Qa, Sa) : void Qa(new Error("Got no CPI deal from service"))
            },
            error: function(a) {
                g(), dc ? (console.log("Error fetching CPI Deals: ", a.error()), Qa(lc)) : (console.log("Error fetching CPI Deals running as empty response: ", a.error()), d([], m(), Qa, Sa))
            }
        })
    }

    function O(a, b) {
        jQuery.ajax({
            url: b.url,
            async: !0,
            success: function(b) {
                var c = b.channel.games;
                Db = c.length;
                for (var d = 0; d < c.length; d++) Wa.push(P(c[d]));
                a(Wa)
            }
        })
    }

    function P(c) {
        for (var d = Math.floor(1e5 * Math.random()), e = {
                gameid: d,
                gameType: c.type,
                gamename: c.project,
                publisherLink: c.publisherLink,
                gameRating: c.rating,
                imgTeaser: c.teaser,
                gameTitle: c.title,
                thumb: c.thumb,
                thumbBig: c.thumbBig,
                agent: b.options.publisher,
                bgcolor: "#fff",
                gamewidth: "100%",
                gameheight: "100%",
                fullscreen_on_mobile: "true",
                locale: sb,
                ivwConfig: sa,
                testUrl: qb,
                isWidget: !0
            }, f = 0; f < c.descriptions.length; f++) c.descriptions[f][sb] && (e.desc = c.descriptions[f][sb]);
        if (c.types)
            for (var f = 0; f < c.types.length; f++) c.types[f][sb] && (e.gameType = c.types[f][sb]);
        if (c.iframeMaxResolution && "undefined" !== c.iframeMaxResolution) {
            var g = c.iframeMaxResolution.split("x");
            e.wrapperwidth = g[0] + "px", e.wrapperheight = g[1] + "px"
        } else c.landscape === !0 || "undefined" == c.portrait ? (e.wrapperwidth = "800px", e.wrapperheight = "533px") : (e.wrapperwidth = "533px", e.wrapperheight = "800px");
        var h = jQuery("<div>").attr("id", e.gameid).addClass("sg-game-dialog");
        return jQuery("#sg-games-fullscreen-container-" + a).append(h), e
    }

    function Q() {
        if (Ia) {
            if (c === Ta.CAROUSEL && hb) {
                var b = jQuery("#sg-carousel-widget-wrapper-" + a).width();
                Ab = 10, "info-right" === Da && (Ab = 15), z(b)
            } else c === Ta.CAROUSEL_WITH_ICONS && (Ab = 15, hb && (Ab = 10));
            jQuery("#carousel-games-wrapper-" + a).rcarousel({
                visible: xb,
                step: xb,
                auto: {
                    enabled: !0,
                    direction: "next",
                    interval: 5e3
                },
                margin: Ab,
                speed: 1e3,
                height: ua,
                width: Eb,
                navigation: {
                    prev: "#ui-carousel-prev-" + a,
                    next: "#ui-carousel-next-" + a
                },
                pageLoaded: function() {}
            }), carouselCss(m()), c === Ta.CAROUSEL_WITH_ICONS && carouselWithIconsCss(m())
        }
        if (c == Ta.ACCORDION || c === Ta.LIST_ENTRYPOINT) {
            accordionCss(m()), jQuery("#sg-accordion-container-" + a).accordion({
                icons: {
                    header: "sg-ui-accordion-header-icon fa fa-angle-down",
                    activeHeader: "sg-ui-accordion-header-icon active fa fa-angle-up"
                },
                beforeActivate: function(a, b) {
                    jQuery(b.newHeader).css("background", Fb), jQuery(b.oldHeader).css("background", "white").css("color", "black")
                },
                create: function(b, c) {
                    jQuery("#sg-accordion-widget-wrapper-" + a + " .ui-accordion-header").css("background", "white"), jQuery(c.header).css("background", Fb)
                }
            });
            var d = jQuery("#sg-accordion-widget-wrapper-" + a + " .ui-accordion-header").outerHeight();
            jQuery("#sg-game-" + a + " .sg-accordion-section").css("height", Fa + d), c === Ta.LIST_ENTRYPOINT && (jQuery("#sg-accordion-widget-wrapper-" + a + " .ui-accordion-header-icon").remove(), jQuery("#sg-accordion-widget-wrapper-" + a + " .ui-accordion-header").on("click", function() {
                location.href = Kb
            }))
        }
    }

    function R(b, c) {
        Ib = 0;
        var d = jQuery("<h3>").text(b.categoryName),
            e = jQuery("<div>").addClass("sg-accordion-section").attr("id", "sg-accordion-section-" + a + "-" + c).css("height", Fa);
        jQuery("#sg-accordion-container-" + a).append(d).append(e);
        for (var f = 0; f < b.games.length; f++) n(b.games[f], c)
    }

    function S() {
        var b = jQuery("<div>").attr("id", "sg-games-fullscreen-container-" + a).addClass("sg-games-fullscreen-container"),
            c = jQuery("<div>").attr("id", "sg-games-fullscreen-header-" + a).addClass("sg-games-fullscreen-header"),
            d = jQuery("<button>").addClass("sg-games-fullscreen-close ui-button"),
            e = jQuery("<span>").addClass("ui-button-icon-primary ui-icon ui-icon-closethick");
        d.append(e);
        var f = jQuery("<div>").addClass("sg-games-fullscreen-title");
        c.append(d).append(f), b.append(c).hide(), jQuery("#sg-game-" + a).append(b), document.addEventListener("fullscreenchange", I), document.addEventListener("webkitfullscreenchange", I), document.addEventListener("mozfullscreenchange", I), document.addEventListener("MSFullscreenChange", I), jQuery(".sg-games-fullscreen-close").click(function() {
            jQuery(".sgplayer").remove(), jQuery("#sg-games-fullscreen-container-" + a).hide(), J()
        })
    }

    function T() {
        var a;
        jQuery(window).bind("resize", function() {
            a && clearTimeout(a), a = setTimeout(U, 200)
        })
    }

    function U() {
        switch (B(), c) {
            case Ta.GRID:
                pa > ra ? jQuery(".sg-grid-widget-container").css("width", ra + "px") : (jQuery(".sg-grid-widget-container").css("width", pa + "px"), jQuery(".sg-grid-game-container").css("width", 100 / rb + "%"));
                break;
            case Ta.MAIN:
                mainCss(m(), !0)
        }
    }

    function V() {
        window.addEventListener("orientationchange", function() {
            switch ((document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || (ib || lb) && jQuery(".sgplayer").length > 0) && Y(jQuery(".sgplayer").data("gameWidth"), jQuery(".sgplayer").data("gameHeight")), c) {
                case Ta.ACCORDION:
                    w(jQuery("#sg-game-" + a).parent().width(), function() {
                        jQuery("#sg-accordion-container-" + a).accordion("destroy"), Q()
                    });
                    break;
                case Ta.PACKED_GRID:
                    renderPackedGridWidget(m(), !0);
                    break;
                case Ta.CAROUSEL:
                    ib ? W() : setTimeout(function() {
                        W()
                    }, 1e3)
            }
        }, !1)
    }

    function W() {
        jQuery("#sg-game-" + a + " .sg-carousel-widget-wrapper").remove(), B(), va = b.options.maxWidth || ra, z(jQuery("#sg-game-" + a).parent().width()), Ob = !0, u(c), o(Wa), 768 >= ra && "info-under" === Da ? jQuery("#sg-game-" + a + " .sg-carousel-container").hide() : "info-under" === Da && jQuery("#sg-game-" + a + " .sg-carousel-container").show()
    }

    function X() {
        jQuery(window).bind("beforeunload", function() {
            pb && aa()
        })
    }

    function Y(b, c) {
        var d = 0 != window.orientation,
            e = b > c;
        C(b, c);
        var f = jQuery("#sgiframeplayer");
        if (ib || lb) {
            var g = jQuery(".sg-open-dialog");
            C(b, c), 0 !== f.length && f.css("width", na).css("height", .98 * ma).css("max-height", ma).css("max-width", na).css("position", "absolute").css("top", "35px"), g.dialog("option", "minWidth", na), g.dialog("option", "width", na), g.dialog("option", "minHeight", ma), f.parent().parent().css("height", ma + 10 + "px")
        } else {
            jQuery("#sg-games-fullscreen-container-" + a).css("width", ra).css("height", qa);
            var h = jQuery("#sg-games-fullscreen-header-" + a).css("width", ra).css("position", "absolute").css("left", "0").css("right", "0"),
                i = jQuery(".sg-games-fullscreen-close");
            0 !== f.length && (f.css("width", na).css("height", ma).css("position", "absolute").css("margin", "auto").css("left", "0").css("right", "0").css("bottom", "0"), (d && e || !e) && (h.css("top", "-20px"), i.css("top", "10px"), f.css("top", "35px")), !d && e && (h.css("height", "50px").css("top", "0"), f.css("top", "0")))
        }
    }

    function Z(a) {
        if (0 == jQuery(a).length) return !1;
        var b = jQuery(window).scrollTop(),
            c = b + jQuery(window).height(),
            d = jQuery(a).offset().top,
            e = d + jQuery(a).height();
        return c >= e && d >= b
    }

    function $() {
        var a = window.addEventListener ? "addEventListener" : "attachEvent",
            b = window[a],
            c = "attachEvent" == a ? "onmessage" : "message";
        b(c, function(a) {
            if ("undefined" != typeof a.data && a.data.gamename) {
                var b = a.data.gamename;
                if (!hb || ib || lb) {
                    var c = jQuery(".sg-open-dialog");
                    E(c, a.data.gameWidth, a.data.gameHeight, b), (ib || lb) && jQuery(".sgplayer").data("gameWidth", a.data.gameWidth).data("gameHeight", a.data.gameHeight)
                } else jQuery(".sgplayer").parent().find(".sg-games-fullscreen-title").text(b);
                hb || ca(c)
            }
        }, !1)
    }

    function _() {
        window.setInterval(function() {
            if (ja++, pb && Nb++, jQuery("#sg-game-" + a + " .sg-game-container").length > 0 && !nb) {
                nb = !0;
                var b = {
                    widgetId: a,
                    widgetType: c,
                    userId: sgWidgets.userId,
                    publisher: mb,
                    secondsOnPage: ja,
                    device: hb ? "mobile" : "desktop",
                    location: window.location.href,
                    gamesSupplied: Ha
                };
                ta && (b.widgetName = ta), window.sgTrackSdk.trackEvent("widgets", "loaded", b)
            }
            pb && 0 == jQuery("#sgiframeplayer").length && aa();
            var d = Z("#sg-game-" + a);
            if (d && !ob) {
                ob = !0;
                var b = {
                    widgetId: a,
                    widgetType: c,
                    userId: sgWidgets.userId,
                    publisher: mb,
                    secondsOnPage: ja,
                    device: hb ? "mobile" : "desktop",
                    location: window.location.href,
                    gamesSupplied: Ha
                };
                ta && (b.widgetName = ta), window.sgTrackSdk.trackEvent("widgets", "visible", b)
            } else ob = !! d
        }, 1e3)
    }

    function aa() {
        pb = !1;
        var b = {
            widgetId: a,
            widgetType: c,
            userId: sgWidgets.userId,
            publisher: mb,
            secondsOnPage: ja,
            secondsPlayed: Nb,
            game: la,
            gameId: ka,
            device: hb ? "mobile" : "desktop",
            location: window.location.href,
            gamesSupplied: Ha
        };
        ta && (b.widgetName = ta), window.sgTrackSdk.trackEvent("widgets", "closed", b), Nb = 0
    }

    function ba() {
        jQuery.fn.boxWidth = function() {
            var a = jQuery("<div />").css({
                margin: 0,
                padding: 0
            });
            jQuery(this).append(a);
            var b = a.width();
            return a.remove(), b
        }
    }

    function ca(b) {
        jQuery(".softgames-link-container").remove();
        var d = jQuery(".ui-dialog"),
            e = jQuery("<div>").css("height", oa).addClass("softgames-link-container"),
            f = jQuery("<div>").addClass("softgames-link-wrapper"),
            g = jQuery("<a>").attr("href", "//games.softgames.de/popping-pets/?p=" + mb).attr("target", vb).addClass("cross-click-link").data("width", 533).data("height", 800).data("gamename", "popping-pets").data("gametitle", "Popping Pets"),
            h = jQuery("<img>").attr("src", "//d1bjj4kazoovdg.cloudfront.net/assets/games/popping-pets/teaser.jpg").addClass("cross-click-image").css("height", oa),
            i = jQuery("<a>").attr("href", "//games.softgames.de/pudding-land/?p=" + mb).attr("target", vb).addClass("cross-click-link").data("width", 533).data("height", 800).data("gamename", "pudding-land").data("gametitle", "Pudding Land"),
            j = jQuery("<img>").attr("src", "//d1bjj4kazoovdg.cloudfront.net/assets/games/pudding-land/teaser.jpg").addClass("cross-click-image").css("height", oa),
            k = jQuery("<a>").attr("href", "//games.softgames.de/jelly-slice/?p=" + mb).attr("target", vb).addClass("cross-click-link").data("width", 533).data("height", 800).data("gamename", "jelly-slice").data("gametitle", "Jelly Slice"),
            l = jQuery("<img>").attr("src", "//d1bjj4kazoovdg.cloudfront.net/assets/games/jelly-slice/teaser.jpg").addClass("cross-click-image").css("height", oa),
            m = jQuery("<a>").attr("href", "//games.softgames.de/fruit-splash/?p=" + mb).attr("target", vb).addClass("cross-click-link").data("width", 533).data("height", 800).data("gamename", "fruit-splash").data("gametitle", "Fruit Splash"),
            n = jQuery("<img>").attr("src", "//d1bjj4kazoovdg.cloudfront.net/assets/games/fruit-splash/teaser.jpg").addClass("cross-click-image").css("height", oa),
            o = jQuery("<a>").attr("href", "//games.softgames.de/timbermen-easter/?p=" + mb).attr("target", vb).addClass("cross-click-link").data("width", 533).data("height", 800).data("gamename", "timbermen-easter").data("gametitle", "Timbermen Easter"),
            p = jQuery("<img>").attr("src", "//d1bjj4kazoovdg.cloudfront.net/assets/games/timbermen-easter/teaser.jpg").addClass("cross-click-image").css("height", oa),
            q = jQuery("<a>").attr("href", "//games.softgames.de/real-freekick-3D/?p=" + mb).attr("target", vb).addClass("cross-click-link").data("width", 533).data("height", 800).data("gamename", "real-freekick-3D").data("gametitle", "Real Freekick 3D"),
            r = jQuery("<img>").attr("src", "//d1bjj4kazoovdg.cloudfront.net/assets/games/real-freekick-3D/teaser.jpg").addClass("cross-click-image").css("height", oa),
            s = jQuery("<a>").attr("href", "//games.softgames.de/road-crossing/?p=" + mb).attr("target", vb).addClass("cross-click-link").data("width", 800).data("height", 533).data("gamename", "road-crossing").data("gametitle", "Road Crossing"),
            u = jQuery("<img>").attr("src", "//d1bjj4kazoovdg.cloudfront.net/assets/games/road-crossing/teaser.jpg").addClass("cross-click-image").css("height", oa),
            v = Math.ceil(oa / zb),
            w = jQuery("#sgiframeplayer"),
            x = Pb ? w.width() + 400 : w.width(),
            y = Math.floor(x / v);
        f.css("width", v * y + 3 + "px"), g.append(h), i.append(j), k.append(l), m.append(n), o.append(p), q.append(r), s.append(u), f.append(g).append(i).append(k).append(m).append(q).append(o).append(s), e.append(f), d.append(e), jQuery(window).height() >= ma && b.dialog("option", "position", {
            my: "center",
            at: "center",
            of: window
        }), jQuery(".cross-click-link").click(function() {
            var d = jQuery(this).data("gamename"),
                e = jQuery(this).data("gametitle");
            if (Ka) {
                var f = {
                    widgetId: a,
                    widgetType: c,
                    userId: sgWidgets.userId,
                    publisher: mb,
                    secondsOnPage: ja,
                    game: la,
                    gamePlayId: ka,
                    link: d,
                    device: hb ? "mobile" : "desktop",
                    location: window.location.href,
                    gamesSupplied: Ha
                };
                ta && (f.widgetName = ta), window.sgTrackSdk.trackEvent("widgets", "cross-clicked", f)
            }
            var g = jQuery(this);
            g.attr("href");
            E(b, g.data("width"), g.data("height"), e), ca(b), sa && t()
        })
    }
    try {
        b.currentPageUrl = window.location.href, window.sgTrackSdk.trackEvent("TempTrackWidgetCallOptions", "allCalls", {
            widgetId: a,
            data: b,
            type: c
        })
    } catch (da) {}
    try {
        if (-1 !== ["cpi-fullscreen-alt-a", "cpi-fullscreen-alt-d", "modCpiWidget"].indexOf(b.options.layout)) return void(window.cw ? loadNewWidget(b, d, e, a) : loadJs("https://s3.amazonaws.com/cpi-widget.softgames.de/cw.js", function() {
            loadNewWidget(b, d, e, a)
        }))
    } catch (da) {
        console.log("error while testing the new cpi flow", da)
    }
    var ea;
    if (b && b.options && b.options.widgetNameSpace) ea = b.options.widgetNameSpace;
    else {
        var fa = c;
        ea = fa + "_" + Math.round(1e5 * Math.random())
    }
    var ga = "sgWidgetCpiCallToActionLoaderOverlay-" + ea;
    d = "function" == typeof d ? d : function() {}, e = "function" == typeof e ? e : function() {};
    var ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa = !1,
        Qa = function(a) {
            Pa || (Pa = !0, a && (h(), b.options.widgetError = a), g(), d(a))
        }, Ra = !1,
        Sa = function(a, c, d) {
            Ra || (Ra = !0, ("click" !== c || b.options.closeOnClick && "click" === c) && h(), a && (b.options.widgetError = a), e(a, c, d))
        }, Ta = {
            GAME_BOX: "game-box",
            VERTICAL_GAME_BOX: "vertical-game-box",
            TEASER: "teaser",
            TEASER_AD: "teaser-ad",
            ICON: "icon",
            NWDE: "nwde",
            MAIN: "main",
            GRID: "grid",
            PACKED_GRID: "packed-grid",
            CAROUSEL: "carousel",
            CAROUSEL_WITH_DETAILS: "carousel-with-details",
            CAROUSEL_WITH_ICONS: "carousel-with-icons",
            CAROUSEL_BUTTONS_TOP: "carousel-buttons-top",
            ACCORDION: "accordion",
            PACKED_GRID_ENRTYPOINT: "packed-grid-entrypoint",
            LIST_ENTRYPOINT: "list-entrypoint",
            GAME_BOX_WITH_DETAILS: "game-box-with-details",
            CPI: "cpi",
            CPI_FULLSCREEN: "cpi-fullscreen",
            CPI_CALL2ACTION: "cpi-call2action",
            DFP_FULLSCREEN: "dfp-fullscreen",
            CROSS_PROMOTIONS: "cross-promotions"
        }, Ua = {
            CLICK: "click",
            DOUBLE_CLICK: "double-click"
        }, Va = {
            pubNative: "pubNative"
        }, Wa = [],
        Xa = [],
        Ya = "#ebebeb",
        Za = "'Helvetica Neue', Helvetica, Arial, sans-serif",
        $a = "#666666",
        _a = !0,
        ab = "Play",
        bb = "#FE802B",
        cb = "#fff",
        db = "'Helvetica Neue',Helvetica,Arial,sans-serif",
        eb = "#666666",
        fb = "",
        gb = Ua.CLICK,
        hb = !1,
        ib = !1,
        jb = !1,
        kb = !1,
        lb = !1,
        mb = "unknown",
        nb = !1,
        ob = !1,
        pb = !1,
        qb = "",
        rb = 5,
        sb = "de",
        tb = "Online - Spiele",
        ub = !1,
        vb = "sgiframeplayer",
        wb = "auto",
        xb = 3,
        yb = !0,
        zb = .6,
        Ab = 20,
        Bb = !1,
        Cb = window.location != window.parent.location,
        Db = 0 == b.games.length ? 3 : b.games.length,
        Eb = 100 / Db - 2,
        Fb = "#FE802B",
        Gb = "#FE802B",
        Hb = 5,
        Ib = 0,
        Jb = [],
        Kb = "#",
        Lb = "#FF4F4F",
        Mb = "#E01918",
        Nb = 0,
        Ob = !1,
        Pb = !1,
        Qb = !1,
        Rb = "",
        Sb = "Start Game",
        Tb = !0,
        Ub = !0,
        Vb = "Your free gift",
        Wb = 1e7 * Math.random(),
        Xb = "INTL",
        Yb = "",
        Zb = "notSupplied",
        $b = "notSupplied",
        _b = null,
        ac = "notSupplied",
        bc = null,
        cc = !1,
        dc = !1,
        ec = !0,
        fc = !1,
        gc = !1,
        hc = 300,
        ic = !0,
        jc = null,
        kc = "bb";
    try {
        j()
    } catch (lc) {
        "function" == typeof Qa && Qa(lc)
    }
}, WidgetConfig = WidgetConfig || {
        hostname: "html.applift.com",
        appToken: "9cd431908dcafb848762015ab6f10bb1f2cbff85cebbbd78d70070fd73e59b2d",
        widget: "app_selector",
        adCount: 1,
        no_slide: !0
    }, dfpWidgetTemplateName = "dfp-fullscreen",
    gameCounter = 0,
    rowCounter = 1,
    gameCounter = 0;
window.sgWidgets = window.sgWidgets || {}, window.sgWidgets.cmd = window.sgWidgets.cmd || [], window.sgWidgets = function(a, b, c) {
    function d(a, b, c, d, e) {
        return new SgWidget(a, b, c, d, e)
    }
    return "undefined" == typeof c.userId && (c.userId = "widget-user-id-" + Math.floor(1e10 * Math.random())), c.createWidget ? c : (a.widgetList && a.widgetList.length > 0 && a.widgetList.forEach(function(a) {
        d(a.id, a.data, a.type)
    }), {
        cmd: c.cmd,
        createWidget: d,
        userId: c.userId
    })
}(window, document, window.sgWidgets);