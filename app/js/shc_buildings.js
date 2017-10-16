// outline main building in for shc
var img;
var ppoint = { x: 0, y: 0 };

function preload() {
    img = loadImage("assets/floor7.PNG");

}

function setup() {
    createCanvas(2000, 800);
    // rotate(PI / 20.0);
    image(img, 0, 0);
}

function mouseClicked() {
    console.log("{x:" + mouseX + ", y:" + mouseY + "},")
    console.log("(" + ppoint.x + ", " + ppoint.y + ", " + (mouseX - ppoint.x) + " , " + (mouseY - ppoint.y) + ") ");
    ppoint.x = mouseX;
    ppoint.y = mouseY;
}