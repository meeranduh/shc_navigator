rooms = [];
rooms.push(createRoom(0, 120, 90, 70, "406", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(90, 120, 90, 70, "405", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(180, 120, 90, 70, "404", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(270, 120, 90, 70, "403", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(350, 120, 70, 70, "402", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(420, 120, 70, 70, "401", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(70, 0, 70, 70, "408", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(140, 0, 70, 70, "409", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(210, 0, 70, 70, "410", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(280, 0, 70, 70, "411", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(350, 0, 35, 70, "female_rm", "#558B2F", 15, "#ffffff"));
rooms.push(createRoom(385, 0, 35, 70, "male_rm", "#558B2F", 15, "#ffffff"));

rooms.push(createRoom(0, 59, 42, 26, "", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(0, 85, 42, 26, "", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(420, 42, 20, 18, "e", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(440, 42, 20, 18, "e", "#B2FF59", 15, "#000000"));

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
    images['female_rm'] = loadImage("assets/female.png");
    images['male_rm'] = loadImage("assets/male.png");
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