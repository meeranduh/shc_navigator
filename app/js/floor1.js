var rooms = [];
var walls = [];

walls.push(new Wall({ x: 275, y: 97 }, { x: 277, y: 103 }));
walls.push(new Wall({ x: 392, y: 97 }, { x: 394, y: 394 }));
walls.push(new Wall({ x: 460, y: 42 }, { x: 462, y: 80 }));

rooms.push(createRoom(20, 20, 20, 57, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(40, 0, 24, 77, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(64, 0, 73, 77, "103", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(137, 0, 73, 77, "104", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(208, 0, 69, 77, "105", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(277, 0, 27, 77, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(304, 0, 46, 42, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(304, 42, 46, 35, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(350, 0, 70, 77, "106", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(420, 42, 20, 18, "e", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(440, 42, 20, 18, "e", "#B2FF59", 15, "#000000"));

rooms.push(createRoom(0, 90, 25, 25, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(0, 115, 25, 25, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(0, 140, 25, 50, "", "#4CAF50", 15, "#000000"));

rooms.push(createRoom(25, 154, 22, 36, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(47, 154, 23, 36, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(70, 154, 25, 36, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(95, 154, 22, 36, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(117, 154, 22, 36, "", "#4CAF50", 15, "#000000"));

rooms.push(createRoom(139, 154, 25, 36, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(164, 154, 22, 36, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(186, 154, 22, 36, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(208, 104, 69, 86, "102", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(139, 104, 25, 38, "", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(164, 104, 44, 50, "", "#C5E1A5", 15, "#000000"));

rooms.push(createRoom(296, 98, 11, 22, "", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(307, 98, 33, 22, "M", "#558B2F", 13, "#000000"));
rooms.push(createRoom(340, 98, 33, 22, "F", "#558B2F", 13, "#000000"));

rooms.push(createRoom(418, 98, 44, 30, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(418, 128, 44, 30, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(418, 158, 44, 32, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(462, 98, 28, 92, "", "#4CAF50", 25, "#000000"));

rooms.push(new Room([
    { x: 296, y: 120 },
    { x: 394, y: 120 },
    { x: 394, y: 190 },
    { x: 297, y: 190 },
], "101", "#4CAF50", 25, "#000000"));

rooms.push(new Room([{ x: 40, y: 103 },
    { x: 52, y: 98 },
    { x: 66, y: 95 },
    { x: 70, y: 122 },
    { x: 61, y: 123 },
    { x: 50, y: 127 }
], "", "#4CAF50", 15, "#000000"));
rooms.push(new Room([{ x: 66, y: 95 },
    { x: 82, y: 94 },
    { x: 96, y: 95 },
    { x: 92, y: 122 },
    { x: 70, y: 122 }
], "", "#4CAF50", 15, "#000000"));
rooms.push(new Room([{ x: 96, y: 95 },
    { x: 112, y: 98 },
    { x: 122, y: 104 },
    { x: 111, y: 127 },
    { x: 100, y: 123 },
    { x: 92, y: 122 }
], "", "#4CAF50", 15, "#000000"));

var stairs = [];
stairs.push(new Stair(420, 0, 42, 42, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(0, 20, 19, 33, 'horizontal', 6, "#969696", "#F1F8E9"));
stairs.push(new Steps(277, 161, 19, 20, 'horizontal', 4, "#969696", "#F1F8E9"));
stairs.push(new Steps(462, 44, 28, 20, 'horizontal', 4, "#969696", "#F1F8E9"));

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