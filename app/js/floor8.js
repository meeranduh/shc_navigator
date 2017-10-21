var walls = [];
walls.push(new Wall({ x: 462, y: 218 }, { x: 464, y: 236 }));
walls.push(new Wall({ x: 431, y: 236 }, { x: 464, y: 238 }));
walls.push(new Wall({ x: 124, y: 254 }, { x: 140, y: 256 }));
walls.push(new Wall({ x: 198, y: 254 }, { x: 212, y: 256 }));
walls.push(new Wall({ x: 271, y: 254 }, { x: 286, y: 256 }));
walls.push(new Wall({ x: 344, y: 254 }, { x: 362, y: 256 }));
walls.push(new Wall({ x: 120, y: 192 }, { x: 122, y: 227 }));
walls.push(new Wall({ x: 120, y: 225 }, { x: 164, y: 227 }));
walls.push(new Wall({ x: 71, y: 225 }, { x: 105, y: 227 }));
walls.push(new Wall({ x: 370, y: 192 }, { x: 372, y: 227 }));
walls.push(new Wall({ x: 327, y: 225 }, { x: 372, y: 227 }));

var rooms = [];
rooms.push(createRoom(30, 1, 75, 60, "801", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/801.JPG' alt='801'>"));
rooms.push(createRoom(30, 61, 75, 60, "802", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/802.JPG' alt='802'>"));
rooms.push(createRoom(30, 121, 75, 60, "803", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/803.JPG' alt='803'>"));
rooms.push(createRoom(1, 253, 64, 67, "804", "#69b342", 20, "#ffffff"));
rooms.push(createRoom(65, 253, 59, 67, "805", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/805.JPG' alt='805'>"));
rooms.push(createRoom(124, 267, 88, 53, "806", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/806.JPG' alt='806'>"));
rooms.push(createRoom(164, 193, 48, 35, "807", "#69b342", 18, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/807.JPG' alt='807'>"));
rooms.push(createRoom(212, 253, 59, 67, "808", "#69b342", 20, "#ffffff"));
rooms.push(createRoom(273, 172, 54, 56, "809", "#69b342", 18, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/809.JPG' alt='809'>"));
rooms.push(createRoom(295, 267, 67, 53, "810", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/810.JPG' alt='810'>"));
rooms.push(createRoom(362, 253, 59, 67, "811", "#69b342", 20, "#ffffff"));
rooms.push(createRoom(421, 253, 59, 67, "812", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/812.JPG' alt='812'>"));
rooms.push(createRoom(387, 120, 62, 60, "813", "#69b342", 20, "#ffffff"));
rooms.push(createRoom(387, 60, 62, 60, "814", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/814.JPG' alt='814'>"));
rooms.push(createRoom(387, 0, 62, 60, "815", "#69b342", 20, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/815.JPG' alt='815'>"));

rooms.push(createRoom(286, 253, 58, 14, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(140, 253, 58, 14, "", "#005032", 18, "#ffffff"));

rooms.push(createRoom(105, 172, 91, 20, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(196, 172, 77, 20, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(212, 192, 61, 35, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(271, 267, 24, 26, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(271, 293, 24, 26, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(327, 172, 60, 20, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(387, 180, 20, 12, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(407, 180, 42, 12, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(30, 204, 33, 22, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(30, 180, 14, 12, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(44, 180, 19, 12, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(431, 192, 18, 10, "", "#005032", 18, "#ffffff"));
rooms.push(createRoom(431, 210, 18, 15, "", "#005032", 18, "#ffffff"));

rooms.push(createRoom(63, 180, 42, 30, "male_rm", "#5b686d", 15, "#ffffff"));
rooms.push(createRoom(387, 192, 44, 34, "female_rm", "#5b686d", 15, "#ffffff"));

rooms.push(createRoom(71, 210, 20, 16, "e", "#005b7d", 15, "#ffffff"));

rooms.push(new Room([
    { x: 144, y: 0 },
    { x: 122, y: 35 },
    { x: 145, y: 47 },
    { x: 126, y: 88 },
    { x: 159, y: 99 },
    { x: 156, y: 134 },
    { x: 168, y: 130 },
    { x: 188, y: 172 },
    { x: 300, y: 172 },
    { x: 320, y: 130 },
    { x: 332, y: 134 },
    { x: 329, y: 99 },
    { x: 362, y: 88 },
    { x: 343, y: 47 },
    { x: 366, y: 35 },
    { x: 344, y: 0 }
], "", "#5b686d", 22, "#ffffff"));

var stairs = [];
stairs.push(new Steps(122, 197, 23, 15, 'vertical', 6, "#969696", "#F1F8E9"));
stairs.push(new Steps(350, 197, 20, 15, 'vertical', 6, "#F1F8E9", "#969696"));
stairs.push(new Steps(449, 15, 15, 23, 'horizontal', 6, "#969696", "#F1F8E9"));
stairs.push(new Steps(464, 15, 15, 23, 'horizontal', 6, "#F1F8E9", "#969696"));
stairs.push(new Steps(464, 218, 15, 8, 'horizontal', 2, "#969696", "#F1F8E9"));

stairs.push(new Steps(145, 197, 18, 28, 'horizontal', 1, "#ffffff", "#ffffff"));
stairs.push(new Steps(328, 197, 21, 28, 'horizontal', 1, "#ffffff", "#ffffff"));

function createRoom(x, y, w, h, number, color, tsize, tcolor, events) {
    var coords = [];
    coords.push({ x: x, y: y });
    coords.push({ x: x + w, y: y });
    coords.push({ x: x + w, y: y + h });
    coords.push({ x: x, y: y + h });

    return new Room(coords, number, color, tsize, tcolor, events);
}

var images = {};
var rfont;

function preload() {
    images.male_rm = loadImage("assets/male.png");
    images.female_rm = loadImage("assets/female.png");
    rfont = loadFont("assets/fonts/Roboto-Light.ttf");
}

var flipBtn, flipDirection = false;

function setup() {
    textFont(rfont);
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
    background("#ffffff");
    noFill();
    stroke("#909090");
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