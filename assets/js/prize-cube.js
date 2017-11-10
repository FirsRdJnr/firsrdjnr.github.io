function totesRando(max, min) {
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var lightUpCubes = function() {
    var newClass = 'flicker',
        cubes = document.querySelectorAll('.front .touch-cube'),
        rnd = totesRando(0, 10);

    cubes[rnd].classList.add(newClass);
    cubes = [].slice.call(cubes);
    cubes.splice(rnd, 1);

    var litUp = 1;

    cubes.forEach(function(el, i) {
        if(litUp === 3) return;
        var rnd = totesRando(0, 10);

        if(rnd === 1) {
            el.classList.add(newClass);
            litUp++;
        }
    });
}

lightUpCubes();


$('.touch-cube').click(function() {
    if($('.front .touch-cube.clicked').length < 3) {
        $(this).removeClass('flicker').addClass('clicked');
    }
    if($('.front .touch-cube.clicked').length === 3) {
        $('.cube').addClass('done');
        starTl.play();
    }
})

var docW = window.innerWidth * 2,
    docH = window.innerHeight * 2;

var cube = '.cube',
    banner = '.banner',
    reveal = '.reveal-all',
    easeBounce = "M0,0 C0.14,0 0.497,1.24 0.66,1.138 0.758,1.076 0.756,0.954 0.834,0.954 0.888,0.954 0.908,1.02 0.946,1.022 1,1.022 1,1 1,1",
    easeFlick = "M0,0,C0,0,0.004,0.142,0.005,0.163,0.016,0.155,0.064,0.12,0.095,0.099,0.111,0.065,0.14,0.006,0.145,-0.002,0.153,0.03,0.184,0.885,0.196,0.928,0.2,0.923,0.262,0.333,0.275,0.317,0.307,0.298,0.346,0.275,0.365,0.263,0.423,0.348,0.488,0.759,0.514,0.796,0.515,0.781,0.664,0.082,0.665,0.076,0.666,0.086,0.672,0.62,0.674,0.628,0.674,0.621,0.724,0.385,0.725,0.38,0.725,0.383,0.767,0.943,0.768,0.95,0.769,0.944,0.775,0.494,0.78,0.48,0.78,0.481,0.842,0.892,0.844,0.902,0.848,0.893,0.893,0.452,0.9,0.44,0.912,0.474,1,1,1,1";

var tl = new TimelineLite()

TweenMax.set(cube, {rotationY:0, rotationX:5});
TweenMax.set(reveal, {y: docH, x:-docW, rotation: -40});

// spin cude
tl.to(cube, 1.4, {rotationY:-720, ease:CustomEase.create("custom", easeBounce)});
tl.to(cube, 1.4, {rotationX:0}, '-=1.4');
tl.to(reveal, .4, {y: 0, x: 0, rotation: -5, ease:CustomEase.create("custom", easeBounce)}, 3);


// add win stars
var starTL = '.star-left-top',
    starRTB = '.star-right-top-big',
    starRT = '.star-right-top',
    starLBB = '.star-left-bottom-big',
    starLB = '.star-left-bottom',
    starRB = '.star-right-bottom',
    winner = '.winner',
    winAmount = {fig:0},
    winDisplay = document.querySelector('.fig'),
    gamePlay = '.game',
    cta = '.prize-cube__cta';


var starTl = new TimelineLite({paused:true});

TweenMax.set(starTL, {y: -docH, x:-docW, rotation: -40});
TweenMax.set(starRTB, {y: -docH, x:docW, rotation: -60});
TweenMax.set(starRT, {y: -docH, x:docW, rotation: 0});
TweenMax.set(starLBB, {y: docH, x:-docW, rotation: -60});
TweenMax.set(starLB, {y: docH, x:-docW, rotation: 0});
TweenMax.set(starRB, {y: docH, x:docW, rotation: -40});
TweenMax.set(winner, {opacity: 0});
TweenMax.set(cta, {x:docW});

starTl.to(cube, 1.4, {rotationY:540, ease:CustomEase.create("custom", easeBounce)}, 1);
starTl.to(reveal, .6, {y: docH, x: docW, rotation: 120, ease:CustomEase.create("custom", easeBounce)}, '-=1.3');
starTl.to(winner, 1.4, {opacity: 1, ease:CustomEase.create("custom", easeFlick)}, 1.5);
starTl.to(starTL, .4, {y: 0, x: 0, rotation: 340, ease:CustomEase.create("custom", easeBounce)}, 2.6);
starTl.to(starRTB, .4, {y: 0, x: 0, rotation: 370, ease:CustomEase.create("custom", easeBounce)}, '-=.3');
starTl.to(starRT, .4, {y: 0, x: 0, rotation: 360, ease: Elastic.easeOut.config(1, 0.3)}, '-=.2');
starTl.to(starLBB, .4, {y: 0, x: 0, rotation: 350, ease:CustomEase.create("custom", easeBounce)}, '-=.4');
starTl.to(starLB, .4, {y: 0, x: 0, rotation: 360, ease: Bounce.easeOut}, '-=.2');
starTl.to(starRB, .4, {y: 0, x: 0, rotation: 375, ease: Elastic.easeOut.config(1, 0.3)}, '-=.6');

starTl.to(winAmount, 1, {fig:"+=20350", roundProps:"fig", onUpdate:updateHandler, ease:Linear.easeNone});

function updateHandler() {
    winDisplay.innerHTML = winAmount.fig;
}

starTl.to(gamePlay, .2, {x:-docW}, 6);
// spin stars off before stage moves
starTl.to(starTL, .3, {y: -docH, x:-docW, rotation: -40, ease:CustomEase.create("custom", easeBounce)}, '-=.6');
starTl.to(starRTB, .3, {y: -docH, x:docW, rotation: -60, ease:CustomEase.create("custom", easeBounce)}, '-=.6');
starTl.to(starRT, .3, {y: -docH, x:docW, rotation: 0, ease:CustomEase.create("custom", easeBounce)}, '-=.6');
starTl.to(starLBB, .3, {y: docH, x:-docW, rotation: -60, ease:CustomEase.create("custom", easeBounce)}, '-=.6');
starTl.to(starLB, .3, {y: docH, x:-docW, rotation: 0, ease:CustomEase.create("custom", easeBounce)}, '-=.6');
starTl.to(starRB, .3, {y: docH, x:docW, rotation: -40, ease:CustomEase.create("custom", easeBounce)}, '-=.6');
starTl.to(cta, .3, {x:0,  ease:CustomEase.create("custom", easeBounce)}, '-=.2');
