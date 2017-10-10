var walls = [];

var rooms = [];
rooms.push(createRoom(28, 0, 80, 60, "801", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(28, 60, 80, 58, "802", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(28, 118, 80, 58, "803", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(1, 253, 60, 67, "804", "#4CAF50", 20, "#000000"));
rooms.push(createRoom(60, 253, 60, 67, "805", "#4CAF50", 20, "#000000"));
rooms.push(createRoom(120, 253, 90, 67, "806", "#4CAF50", 20, "#000000"));
rooms.push(createRoom(210, 253, 60, 67, "808", "#4CAF50", 20, "#000000"));
rooms.push(createRoom(290, 253, 70, 67, "810", "#4CAF50", 20, "#000000"));
rooms.push(createRoom(360, 253, 60, 67, "811", "#4CAF50", 20, "#000000"));
rooms.push(createRoom(420, 253, 60, 67, "812", "#4CAF50", 20, "#000000"));

rooms.push(createRoom(164, 193, 45, 33, "807", "#4CAF50", 18, "#000000"));
rooms.push(createRoom(272, 172, 56, 54, "809", "#4CAF50", 20, "#000000"));

rooms.push(createRoom(388, 116, 60, 60, "813", "#4CAF50", 20, "#000000"));
rooms.push(createRoom(388, 61, 60, 55, "814", "#4CAF50", 20, "#000000"));
rooms.push(createRoom(388, 0, 60, 60, "815", "#4CAF50", 20, "#000000"));

rooms.push(createRoom(28, 177, 80, 31, "male_rm", "#558B2F", 15, "#ffffff"));
rooms.push(createRoom(388, 192, 60, 34, "female_rm", "#558B2F", 15, "#ffffff"));

var stairs = [];
stairs.push(new Stair(120, 193, 45, 33, 0, 2, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Stair(328, 193, 45, 33, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));

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