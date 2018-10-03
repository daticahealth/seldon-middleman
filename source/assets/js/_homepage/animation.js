
var nodeRadius = 9;
var nodeRadiusExpanded = 12;

var nodeExpandTime = .5;
var nodeCollapseTime = .2;

var contentExpandTime = .5;
var contentCollapseTime = .5;

//Seconds that a node is active during looping
var contentLoopActiveTime = 5;

$(document).ready(function(event) {

    var lines = document.querySelectorAll("polyline");
    TweenMax.staggerFromTo(lines, 1, {opacity: 0.75, drawSVG:"100% 100%"}, {opacity: 0.75, drawSVG:"0% 100%"}, 0.1)

    var circles = document.querySelectorAll(".node");
    TweenMax.staggerFromTo(circles, 1.5, {opacity:1, attr:{r:0}}, {opacity: 1, attr:{r:nodeRadius}, ease:Back.easeOut}, .03);

    //For keeping track of timeout set when hovering
    //  Used to restart the loop
    var lastHover;

    var hoverGroups = document.querySelectorAll(".hover-group");
    var tl = new TimelineMax({repeat: -1, repeatDelay: 2, delay: 3});
    hoverGroups.forEach(function(g) {
        var circle = g.querySelectorAll(".hover-node")[0];
        var hitArea = g.querySelectorAll(".hover")[0];
        var content = g.querySelectorAll(".content")[0];

        //Set content width/height to scrollWidth/scrollHeight
        var fo = $(content).find("foreignObject");
        var cW = getContentWidth(content);
        var cH = getContentHeight(content);
        fo.attr("width",cW);
        fo.attr("height",cH);

        tl.add(TweenMax.fromTo(circle, nodeExpandTime, {attr:{r:0}}, {attr:{r:nodeRadiusExpanded}, ease:Power1.easeOut}))
            .add(TweenMax.to(content, 0.01, {scale: 1}))
            .add(TweenMax.to(fo, 0.01, {attr:{width: cW, height: cH}}))
            .add(TweenMax.fromTo(content, contentExpandTime, {opacity:0, delay: .2}, {opacity:1, ease:Power1.easeOut}))
            .add(TweenMax.to(circle, nodeCollapseTime, {delay: contentLoopActiveTime, attr:{r:nodeRadius}, ease:Power1.easeOut}))
            .add(TweenMax.to(content, contentCollapseTime, {opacity:0, ease:Power1.easeOut}))
            .add(TweenMax.to(content, 0.01, {scale: 0}))
            .add(TweenMax.to(fo, 0.01, {attr:{width: 0, height: 0}}))
            .add(TweenMax.to(circle, nodeCollapseTime, {attr:{r:0}, ease:Power1.easeOut}));
            // .add(TweenMax.fromTo(content, contentExpandTime, {scale:0, delay: .2}, {scale:1, ease:Power1.easeOut}))
            // .add(TweenMax.to(circle, nodeCollapseTime, {delay: contentLoopActiveTime, attr:{r:nodeRadius}, ease:Power1.easeOut}))
            // .add(TweenMax.to(content, contentCollapseTime, {scale:0, ease:Power1.easeOut}))
            // .add(TweenMax.to(circle, nodeCollapseTime, {attr:{r:0}, ease:Power1.easeOut}));

        //Make sure content is visible, but scaled to 0 at start
        content.style.visibility = "visible";
        TweenMax.to(content, 0.01, {scale:0});
        TweenMax.to(fo, 0.01, {attr:{width: 0, height: 0}});

        //Translate content if we should expand from top right
        // Not sure why translating like _this_ works but not any other way I've tried.
        if(content.classList.contains("from-right")) {
            var fo = content.querySelectorAll("foreignObject")[0];
            TweenMax.to(fo, 0, {attr:{x:fo.getAttribute("x")-cW}});
        }

        if(content.classList.contains("from-bottom")) {
            var fo = content.querySelectorAll("foreignObject")[0];
            TweenMax.to(fo, 0, {attr:{y:fo.getAttribute("y")-cH}});
        }

        hitArea.onmouseover = function(event) {
            clearTimeout(lastHover);
            tl.pause();
            closeAllNodes();
            nodeExpand(circle, content);
        }

        hitArea.onmouseout = function(event){
            nodeExpandOut(circle,content);
            lastHover = setTimeout(function(){tl.play(0);}, 2000);
            // tl.play(0);
        }
    });

    // This pauses the looping node selection in order to see just the background animations
    // tl.pause();

    // Background animations
    // var circleOutlines = document.querySelectorAll(".circle-outline");
    // var outlineTL = new TimelineMax({repeat: -1, repeatDelay:0, delay:1.5});
    // circleOutlines.forEach(function(c) {
    //     outlineTL.fromTo(c, 2, {attr:{r:nodeRadius-3}, opacity:1}, {attr:{r:20}, opacity:0, ease:Power4.easeIn}, 1);
    // });
    
    // Another option that also eats up CPU
    // outlineTL.staggerFromTo(circleOutlines, 2, {attr:{r:nodeRadius-3}, opacity:1}, {attr:{r:20}, opacity:0, ease:Power4.easeIn}, .1);
});

function nodeExpand(circle, content) {
    TweenMax.fromTo(circle, nodeExpandTime, {attr:{r:nodeRadius}}, {attr:{r:nodeRadiusExpanded}, ease:Power1.easeOut});
    TweenMax.to(content, 0.01, {scale: 1});
    TweenMax.to($(content).find("foreignObject"), 0.01, {attr:{width:getContentWidth(content), height:getContentHeight(content)}});
    TweenMax.fromTo(content, contentExpandTime, {opacity:0}, {opacity:1, ease:Power1.easeOut});
}
function nodeExpandOut(circle, content) {
    var collapseTL = new TimelineMax();
    collapseTL.add(TweenMax.to(circle, nodeCollapseTime, {attr:{r:nodeRadius}, ease:Power1.easeOut}));
    collapseTL.add(TweenMax.fromTo(content, contentCollapseTime, {opacity:1}, {opacity:0, ease:Power1.easeOut}));
    collapseTL.add(TweenMax.to(content, 0.01, {scale: 0}));
    collapseTL.add(TweenMax.to($(content).find("foreignObject"), 0.01, {attr:{width:0, height:0}}));
    collapseTL.add(TweenMax.to(circle, nodeCollapseTime, {attr:{r:0}, ease:Power1.easeOut}));
}

function closeAllNodes() {
    var hoverGroups = document.querySelectorAll(".hover-group");
    hoverGroups.forEach(function(g) {
        var circle = g.querySelectorAll(".hover-node")[0];
        var content = g.querySelectorAll(".content")[0];
        TweenMax.to(content, contentCollapseTime, {opacity:0});
        TweenMax.to(content, 0.01, {scale: 0});
        TweenMax.to($(content).find("foreignObject"), 0.01, {attr:{width:0, height:0}});
        TweenMax.to(circle, nodeCollapseTime, {attr:{r:0}});
    });
}

function getContentWidth(c) {
    var fo = $(c).find("foreignObject");
    var div = $(fo).find("div");
    return div.prop("scrollWidth");
}

function getContentHeight(c) {
    var fo = $(c).find("foreignObject");
    var div = $(fo).find("div");
    return div.prop("scrollHeight");
}
