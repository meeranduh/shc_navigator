var rooms = [];
var walls = [];

//walls.push(new Wall({ x: 275, y: 97 }, { x: 277, y: 103 }));
//walls.push(new Wall({ x: 392, y: 97 }, { x: 394, y: 394 }));
walls.push(new Wall({ x: 470, y: 42 }, { x: 472, y: 80 }));

rooms.push(createRoom(70, 0, 70, 70, "103", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(140, 0, 70, 70, "104", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(210, 0, 70, 70, "105", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(350, 0, 70, 70, "106", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(210, 100, 70, 90, "102", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(300, 120, 100, 70, "101", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(45, 0, 25, 70, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(0, 140, 26, 55, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(26, 150, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(49, 150, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(72, 150, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(95, 150, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(118, 150, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(141, 150, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(164, 150, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(187, 150, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(141, 100, 23, 42, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(164, 100, 46, 50, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(0, 115, 26, 26, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(0, 90, 26, 26, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(420, 100, 50, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(420, 130, 50, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(420, 160, 50, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(470, 100, 20, 90, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(280, 0, 25, 40, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(305, 0, 45, 35, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(305, 35, 45, 35, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(300, 100, 10, 20, "", "#33691E", 15, "000000"));
rooms.push(createRoom(380, 100, 20, 20, "", "#33691E", 15, "000000"));
rooms.push(createRoom(310, 100, 35, 20, "female_rm", "#558B2F", 15, "#000000"));
rooms.push(createRoom(345, 100, 35, 20, "male_rm", "#558B2F", 15, "#000000"));

rooms.push(createRoom(420, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(445, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));

rooms.push(new Room([{ x: 40, y: 103 },
    { x: 52, y: 98 },
    { x: 66, y: 95 },
    { x: 70, y: 122 },
    { x: 61, y: 123 },
    { x: 50, y: 127 }
], "", "#33691E", 15, "#000000"));
rooms.push(new Room([{ x: 66, y: 95 },
    { x: 82, y: 94 },
    { x: 96, y: 95 },
    { x: 92, y: 122 },
    { x: 70, y: 122 }
], "", "#33691E", 15, "#000000"));
rooms.push(new Room([{ x: 96, y: 95 },
    { x: 112, y: 98 },
    { x: 122, y: 104 },
    { x: 111, y: 127 },
    { x: 100, y: 123 },
    { x: 92, y: 122 }
], "", "#33691E", 15, "#000000"));



var stairs = [];
//stairs.push(new Stair(0, 10, 40, 50, 0, 1, 'horizontal', 5, "#969696", "#F1F8E9"));
stairs.push(new Stair(420, 0, 50, 40, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(0, 20, 19, 33, 'horizontal', 6, "#969696", "#F1F8E9"));
stairs.push(new Steps(280, 161, 19, 20, 'horizontal', 4, "#969696", "#F1F8E9"));
stairs.push(new Steps(470, 40, 28, 20, 'horizontal', 4, "#969696", "#F1F8E9"));

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