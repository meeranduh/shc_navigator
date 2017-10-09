var rooms = [];
var walls = [];
rooms.push(createRoom(0, 90, 70, 100, "207", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(70, 90, 70, 100, "206", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(140, 90, 70, 100, "205", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(210, 90, 70, 100, "204", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(280, 90, 70, 100, "203", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(350, 90, 70, 100, "202", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(420, 90, 70, 100, "201", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(70, 0, 110, 60, "208", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(180, 0, 90, 60, "209", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(270, 40, 60, 20, "", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(40, 0, 30, 60, "", "#33691E", 25, "#000000"));
rooms.push(createRoom(270, 0, 30, 40, "", "#33691E", 25, "#000000"));
rooms.push(createRoom(300, 0, 50, 40, "", "#33691E", 25, "#000000"));
rooms.push(createRoom(320, 40, 30, 20, "", "#33691E", 25, "#000000"));

rooms.push(createRoom(350, 0, 35, 70, "female_rm", "#558B2F", 15, "#ffffff"));
rooms.push(createRoom(385, 0, 35, 70, "male_rm", "#558B2F", 15, "#ffffff"));

rooms.push(createRoom(420, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(445, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));

var stairs = [];
stairs.push(new Stair(0, 0, 40, 50, 2, 3, 'horizontal', 5, "#969696", "#F1F8E9"));
stairs.push(new Stair(420, 0, 50, 40, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));

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
    images['female_rm'] = loadImage("assets/female.png");
    images['male_rm'] = loadImage("assets/male.png");
}

var flipBtn, flipDirection = false;

function setup() {
    var canvas = createCanvas(491, 191);
    canvas.parent("floor-plan");

    flipBtn = createButton("Rotate");
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
    rect(0, 0, 490, 190);
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