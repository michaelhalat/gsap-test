/*
TweenMax.from(".logo", 3, {opacity:0, scale:0, ease:Bounce.easeOut});
TweenMax.staggerFrom(".box", 0.5, {opacity: 0, y:200, rotation:360, scale:2, delay:3}, 0.2);
TweenMax.to(".logo, .box", 2, {opacity:0, delay:4, onComplete:complete});

function complete() {
    TweenMax.to(".logo, .box", 2, {opacity:1, delay:4});
    TweenMax.to(".logo", 3, {opacity:1, scale:1});
    TweenMax.staggerTo(".box", 0.5, {opacity: 1, y:200, rotation:360, scale:1, delay:3}, 0.2);

}
*/

var tl = new TimelineMax();
tl.to(".color-changer", 1, {backgroundColor:"#ff0202"})
tl.to(".color-changer", 1, {backgroundColor:"#ff9702"})
tl.to(".color-changer", 1, {backgroundColor:"#fffc02"})
tl.to(".color-changer", 1, {backgroundColor:"#08ff02"})
tl.to(".color-changer", 1, {backgroundColor:"#1a02ff"})
tl.staggerFrom(".row", 0.5, {x:'-100%'}, 1)
tl.staggerTo(".row", 0.5, {x:'-100%'}, 1)
tl.from(".logo", 3, {opacity:0, scale:0, ease:Bounce.easeOut})
