var rooms = [];
var walls = [];
rooms.push(createRoom(280, 110, 70, 80, "303", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/303.JPG' alt='303'>"));
rooms.push(createRoom(350, 110, 70, 80, "302", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(420, 110, 70, 80, "Office of\nAdmission", "#69b342", 10, "#ffffff"));

rooms.push(createRoom(70, 0, 60, 45, "Conference\nRoom", "#69b342", 8, "#ffffff"));
rooms.push(createRoom(70, 45, 22, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(92, 45, 22, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(130, 0, 27, 23, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(157, 0, 27, 23, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(184, 0, 27, 23, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(157, 23, 54, 52, "Learning\nCommons", "#69b342", 8, "#ffffff"));
rooms.push(createRoom(130, 28, 27, 12, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(139, 40, 18, 13, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(124, 53, 33, 22, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(280, 0, 50, 75, "CLC", "#69b342", 15, "#ffffff"));
rooms.push(createRoom(345, 0, 25, 35, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(345, 35, 25, 15, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(370, 0, 25, 50, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(345, 50, 50, 25, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(395, 60, 45, 15, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(0, 110, 45, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(45, 110, 13, 10, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(45, 120, 13, 20, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(58, 110, 13, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(70, 110, 33, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(103, 110, 33, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(136, 110, 33, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(169, 110, 41, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(210, 110, 20, 30, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(0, 150, 30, 40, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(30, 150, 40, 40, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(70, 150, 41, 40, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(111, 150, 58, 40, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(169, 150, 41, 40, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(210, 150, 20, 40, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(230, 110, 50, 80, "Main\nOffice", "#69b342", 10, "#ffffff"));

rooms.push(createRoom(0, 85, 40, 25, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(0, 60, 40, 25, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(420, 40, 25, 20, "", "#005b7d", 15, "#ffffff"));
rooms.push(createRoom(445, 40, 25, 20, "e", "#005b7d", 15, "#ffffff"));


var stairs = [];
stairs.push(new Stair(0, 10, 40, 50, 0, 1, 'horizontal', 5, "#969696", "#F1F8E9"));
stairs.push(new Stair(420, 0, 50, 40, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));


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
    var canvas = createCanvas(491, 191);
    canvas.parent("floor-plan");

    flipBtn = createButton("Rotate");
    flipBtn.position(520, 10);
    flipBtn.mouseClicked(flip);
    flipBtn.parent("floor-plan");

    $('#room-info').html("<h3>More Info</h3>");
}

function flip() {
    flipDirection = !flipDirection;
}

function draw() {
    background("#ffffff");
    noFill();
    stroke("#909090");
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