// outline main building in for shc
var img;

function preload() {
    img = loadImage("assets/floor8.png");
}

function setup() {
    createCanvas(2000, 800);
    //    rotate(PI / 20.0);
    image(img, 0, 0);
}

function mouseClicked() {
    console.log("{x:" + mouseX + ", y:" + mouseY + "},")

}