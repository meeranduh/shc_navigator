var walls = [];
walls.push(new Wall({x: 250, y:30}, {x: 306, y: 32}));
walls.push(new Wall({x: 250, y:150}, {x: 301, y: 152}));
walls.push(new Wall({x: 248, y:136}, {x: 250, y: 186}));
walls.push(new Wall({x: 299, y:110}, {x: 301, y: 186}));
walls.push(new Wall({x: 329, y:110}, {x: 331, y: 161}));
walls.push(new Wall({x: 329, y:150}, {x: 356, y: 152}));

var rooms = [];
rooms.push(createRoom(0, 0, 250, 138, "Pavilion", "#4CAF50", 40, "#000000", "test"));
rooms.push(createRoom(356, 0, 200, 138, "Old\nGym", "#4CAF50", 30, "#000000", "test"));

rooms.push(createRoom(220, 65, 30, 30, "store", "#005032", 10, "#000000", "test"));

rooms.push(createRoom(306, 16, 21, 17, "e", "#005b7d", 15, "#000000"));

var stairs = [];
stairs.push(new Steps(301, 141, 28, 19, 'horizontal', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(301, 110, 28, 19, 'horizontal', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(327, 17, 28, 15, 'horizontal', 4, "#969696", "#F1F8E9"));
stairs.push(new Steps(301, 178, 28, 8, 'horizontal', 2, "#969696", "#F1F8E9"));

function createRoom(x, y, w, h, number, color, tsize, tcolor, events) {
    var coords = [];
    coords.push({ x: x, y: y });
    coords.push({ x: x + w, y: y });
    coords.push({ x: x + w, y: y + h });
    coords.push({ x: x, y: y + h });

    return new Room(coords, number, color, tsize, tcolor, events);
}

var images = {};

function preload() {
    images.male_rm = loadImage("assets/male.png");
    images.female_rm = loadImage("assets/female.png");
}

var flipBtn, flipDirection = false;

function setup() {
    var canvas = createCanvas(505, 186);
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
    rect(0, 0, 504, 185);
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