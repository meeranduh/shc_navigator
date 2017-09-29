var rooms = [];

rooms.push(createRoom(0, 59, 42, 26, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(0, 85, 42, 26, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(0, 110, 45, 25, "", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(420, 42, 20, 18, "", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(440, 42, 23, 18, "e", "#B2FF59", 15, "#000000"));

var walls = [];

var stairs = [];
stairs.push(new Stair(420, 0, 42, 42, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Stair(0, 17, 42, 42, 0, 1, 'horzontial', 5, "#969696", "#F1F8E9"));

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
    images['male_rm'] = loadImage("assets/male.png");
    images['female_rm'] = loadImage("assets/female.png");
}

function setup() {
    var canvas = createCanvas(491, 191);
    canvas.parent("floor-plan");

    $('#room-info').html("<h3>More Info</h3>");
}

function draw() {
    background("#F1F8E9");
    noFill();
    rect(0, 0, 490, 190);
    fill(200, 200, 200);

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