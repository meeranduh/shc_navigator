var walls = [];

var rooms = [];

var stairs = [];

function createRoom(x, y, w, h, number, color, tsize, tcolor) {
    var coords = [];
    coords.push({ x: x, y: y });
    coords.push({ x: x + w, y: y });
    coords.push({ x: x + w, y: y + h });
    coords.push({ x: x, y: y + h });

    return new Room(coords, number, color, tsize, tcolor);
}

var images = {};

function preload() {
    images.male_rm = loadImage("assets/male.png");
    images.female_rm = loadImage("assets/female.png");
}

var flipBtn, flipDirection = false;

function setup() {
    var canvas = createCanvas(481, 321);
    canvas.parent("floor-plan");

    flipBtn = createButton("FLIP");
    flipBtn.position(520, 10);
    flipBtn.mouseClicked(flip);
    flipBtn.parent("floor-plan")

    $('#room-info').html("<h3>More Info</h3>");
}

function flip() {
    flipDirection = !flipDirection;
}

function draw() {
    background("#F1F8E9");
    noFill();
    rect(0, 0, 480, 320);
    fill(200, 200, 200);

    walls.forEach(function(wall) {
        wall.display(flipDirection);
    });

    rooms.forEach(function(room) {
        room.display(images, flipDirection);
    });

    stairs.forEach(function(stair) {
        stair.display(flipDirection);
    });
}

function mousePressed() {
    rooms.forEach(function(room) {
        room.click();
    });
}