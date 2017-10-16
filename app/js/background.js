var fightingIrish = new Irish({ x: 50, y: 50 }, 5);
var images = {};
var rfont;

function preload() {
    images.r0 = loadImage("assets/anime/irish_r0.png");
    images.r1 = loadImage("assets/anime/irish_r1.png");
    images.l0 = loadImage("assets/anime/irish_l0.png");
    images.l1 = loadImage("assets/anime/irish_l1.png");
    rfont = loadFont("assets/fonts/Roboto-Light.ttf");
}

function setup() {
    frameRate(30);
    textFont(rfont);
    var canvas = createCanvas(1200, 1200);
    canvas.parent("BG");
}

function draw() {
    background("#ffffff");
    noFill();
    fightingIrish.display(images);
}

function mousePressed() {
    fightingIrish.click();
}