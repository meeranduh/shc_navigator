var walls = [];
walls.push(new Wall({x: 327, y:31}, {x: 354, y: 33}));
walls.push(new Wall({x: 315, y:66}, {x: 317, y: 87}));
walls.push(new Wall({x: 329, y:56}, {x: 331, y: 160}));
walls.push(new Wall({x: 273, y:157}, {x: 275, y: 186}));

var rooms = [];
rooms.push(createRoom(25, 44, 250, 115, "Dining Hall", "#4CAF50", 30, "#000000", "test"))
rooms.push(createRoom(86, 0, 115, 44, "Food Court", "#4CAF50", 13, "#000000", "test"))
rooms.push(createRoom(0, 0, 70, 44, "Teacher's\nCafe", "#4CAF50", 11, "#000000", "test"))
rooms.push(createRoom(432, 0, 73, 41, "Dance\nStudio", "#4CAF50", 11, "#000000", "test"))
rooms.push(createRoom(390, 41, 115, 112, "Fitness\nCenter", "#4CAF50", 20, "#000000", "test"))
rooms.push(createRoom(415, 153, 90, 34, "Locker\nRoom", "#4CAF50", 11, "#000000", "test"))

rooms.push(createRoom(201, 0, 74, 44, "", "#005032", 13, "#000000"))
rooms.push(createRoom(70, 0, 16, 44, "", "#005032", 13, "#000000"))
rooms.push(createRoom(0, 44, 25, 115, "", "#005032", 13, "#000000"))
rooms.push(createRoom(409, 0, 23, 41, "", "#005032", 13, "#000000"))
rooms.push(createRoom(356, 143, 35, 18, "", "#005032", 13, "#000000"))

rooms.push(createRoom(356, 70, 34, 33, "male_rm", "#5b686d", 15, "#ffffff"));
rooms.push(createRoom(356, 112, 34, 33, "female_rm", "#5b686d", 15, "#ffffff"));

rooms.push(new Room([{ x: 355, y: 0 },
    { x: 355, y: 0 },
    { x: 409, y: 0 },
    { x: 409, y: 41 },
    { x: 390, y: 41 },
    { x: 390, y: 55 },    
    { x: 355, y: 55 }
], "Training\nRoom",  "#4CAF50", 10, "#000000"));

rooms.push(createRoom(306, 16, 21, 17, "e", "#005b7d", 15, "#000000"));

var stairs = [];
stairs.push(new Steps(276, 16, 30, 17, 'horizontal', 4, "#969696", "#F1F8E9"));
stairs.push(new Steps(276, 57, 40, 9, 'horizontal', 2, "#969696", "#F1F8E9"));
stairs.push(new Steps(321, 101, 8, 16, 'vertical', 2, "#969696", "#F1F8E9"));
stairs.push(new Steps(301, 141, 28, 19, 'horizontal', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(331, 152, 24, 8, 'horizontal', 2, "#969696", "#F1F8E9"));
stairs.push(new Steps(365, 160, 25, 15, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(365, 175, 25, 15, 'vertical', 5, "#969696", "#F1F8E9"));


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