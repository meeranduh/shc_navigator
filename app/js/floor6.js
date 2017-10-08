var walls = [];
walls.push(new Wall({ x: 20, y: 19 }, { x: 22, y: 85 }));

var rooms = [];
rooms.push(createRoom(42, 0, 235, 160, "Library", "#B2FF59", 32, "#000000"));
rooms.push(createRoom(406, 89, 84, 101, "Chapel", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(329, 158, 70, 25, "Veranda", "#F1F8E9", 10, "#000000"));

rooms.push(createRoom(420, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(445, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));

rooms.push(createRoom(365, 0, 55, 35, "male_rm", "#558B2F", 15, "#ffffff"));
rooms.push(createRoom(365, 35, 35, 38, "female_rm", "#558B2F", 15, "#ffffff"));

rooms.push(createRoom(0, 87, 42, 70, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(352, 89, 35, 40, "", "#33691E", 15, "#000000"));
rooms.push(new Room([{ x: 276, y: 0 },
    { x: 365, y: 0 },
    { x: 365, y: 73 },
    { x: 347, y: 73 },
    { x: 339, y: 56 },
    { x: 326, y: 44 },
    { x: 314, y: 40 },
    { x: 291, y: 41 },
    { x: 281, y: 46 },
    { x: 276, y: 41 }
], "", "#33691E", 15, "#000000"));

rooms.push(new Room([{ x: 283, y: 113 },
    { x: 294, y: 108 },
    { x: 313, y: 108 },
    { x: 313, y: 150 },
    { x: 276, y: 150 },
    { x: 276, y: 121 }
], "", "#33691E", 15, "#000000"));

rooms.push(new Room([{ x: 314, y: 109 },
    { x: 320, y: 105 },
    { x: 329, y: 97 },
    { x: 333, y: 89 },
    { x: 352, y: 89 },
    { x: 352, y: 137 },
    { x: 314, y: 137 }
], "", "#33691E", 15, "#000000"));

var stairs = [];
stairs.push(new Stair(420, 0, 42, 40, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(22, 20, 19, 22, 'horizontal', 6, "#969696", "#F1F8E9"));

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