var rooms = [];
var walls = [];
rooms.push(createRoom(280, 110, 70, 80, "303", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(350, 110, 70, 80, "302", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(420, 110, 70, 80, "Office of\nAdmission", "#4CAF50", 10, "#000000"));

rooms.push(createRoom(70, 0, 60, 45, "Conference\nRoom", "#4CAF50", 8, "#000000"));
rooms.push(createRoom(70, 45, 22, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(92, 45, 22, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(130, 0, 27, 23, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(157, 0, 27, 23, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(184, 0, 27, 23, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(157, 23, 54, 52, "Learning\nCommons", "#4CAF50", 8, "#000000"));
rooms.push(createRoom(130, 28, 27, 12, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(139, 40, 18, 13, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(124, 53, 33, 22, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(280, 0, 50, 75, "CLC", "#4CAF50", 15, "#000000"));
rooms.push(createRoom(345, 0, 25, 35, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(345, 35, 25, 15, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(370, 0, 25, 50, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(345, 50, 50, 25, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(395, 60, 45, 15, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(0, 110, 45, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(45, 110, 13, 10, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(45, 120, 13, 20, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(58, 110, 13, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(70, 110, 33, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(103, 110, 33, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(136, 110, 33, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(169, 110, 41, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(210, 110, 20, 30, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(0, 150, 30, 40, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(30, 150, 40, 40, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(70, 150, 41, 40, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(111, 150, 58, 40, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(169, 150, 41, 40, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(210, 150, 20, 40, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(230, 110, 50, 80, "Main\nOffice", "#4CAF50", 10, "#000000"));

rooms.push(createRoom(0, 85, 40, 25, "x", "#33691E", 15, "#ffffff"));
rooms.push(createRoom(0, 60, 40, 25, "x", "#33691E", 15, "#ffffff"));

rooms.push(createRoom(420, 40, 25, 20, "", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(445, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));


var stairs = [];
stairs.push(new Stair(0, 10, 40, 50, 0, 1, 'horizontal', 5, "#969696", "#F1F8E9"));
stairs.push(new Stair(420, 0, 50, 40, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));

var images = {};

function createRoom(x, y, w, h, number, color, tsize, tcolor) {
    var coords = [];
    coords.push({ x: x, y: y });
    coords.push({ x: x + w, y: y });
    coords.push({ x: x + w, y: y + h });
    coords.push({ x: x, y: y + h });

    return new Room(coords, number, color, tsize, tcolor);
}

var flipBtn, flipDirection = false;

function setup() {
    var canvas = createCanvas(491, 191);
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