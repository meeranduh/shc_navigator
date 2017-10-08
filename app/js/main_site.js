var walls = [];

var rooms = [];
rooms.push(new Room([{ x: 116, y: 86 },
    { x: 432, y: 86 },
    { x: 432, y: 130 },
    { x: 494, y: 130 },
    { x: 494, y: 284 },
    { x: 56, y: 284 },
    { x: 56, y: 130 },
    { x: 116, y: 130 },
], "DePaul Campus", "#4caf50", 34, "#000000"));
rooms.push(new Room([
    { x: 724, y: 418 },
    { x: 1054, y: 414 },
    { x: 1054, y: 556 },
    { x: 724, y: 556 }
], "LaSalle Campus", "#4caf50", 26, "#000000"));
rooms.push(new Room([
    { x: 812, y: 644 },
    { x: 1060, y: 644 },
    { x: 1060, y: 747 },
    { x: 812, y: 747 },
], "", "#4caf50", 26, "#000000"));

var stairs = [];
var images = {};

function createRoom(x, y, w, h, number, color, tsize, tcolor) {
    var coords = [];
    coords.push({ x: x, y: y });
    coords.push({ x: x + w, y: y });
    coords.push({ x: x + w, y: y + h });
    coords.push({ x: x, y: y + h });

    return new Room(coords, number, color, tsize, tcolor);
}

function preload() {
    images.female_rm = loadImage("assets/female.png");
    images.male_rm = loadImage("assets/male.png");
}

function setup() {
    var canvas = createCanvas(2001, 2001);
    canvas.parent("floor-plan");

    $('#room-info').html("<h3>More Info</h3>");
}

function draw() {
    background("#ffffff");
    noFill();
    rect(0, 0, 2000, 2000);
    fill(0, 0, 0);

    walls.forEach(function(wall) {
        wall.display();
    });

    rooms.forEach(function(room) {
        room.display(images);
    });

    stairs.forEach(function(stair) {
        stair.display();
    });
}

function mousePressed() {
    rooms.forEach(function(room) {
        room.click();
    });
}