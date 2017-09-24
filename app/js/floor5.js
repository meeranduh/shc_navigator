function setup() {
    var height = 191;
    var width = 491;
    var canvas = createCanvas(width, height);
    canvas.parent("floor-plan");

    $('#room-info').html("<h3>More Info</h3>");
}

rooms = [];
rooms.push(createRoom(0, 120, 70, 70, "507", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(70, 120, 70, 70, "506", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(140, 120, 70, 70, "505", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(210, 120, 70, 70, "504", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(280, 120, 70, 70, "503", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(350, 120, 70, 70, "502", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(420, 120, 70, 70, "501", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(70, 0, 70, 70, "508", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(140, 0, 70, 70, "509", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(210, 0, 70, 70, "510", "#4CAF50", 25, "#000000"));
rooms.push(createRoom(280, 0, 70, 70, "511", "#4CAF50", 25, "#000000"));

rooms.push(createRoom(350, 0, 35, 70, "M", "#558B2F", 15, "#ffffff"));
rooms.push(createRoom(385, 0, 35, 70, "F", "#558B2F", 15, "#ffffff"));

rooms.push(createRoom(0, 95, 40, 25, "", "#33691E", 15, "#ffffff"));
rooms.push(createRoom(0, 70, 40, 25, "", "#33691E", 15, "#ffffff"));

rooms.push(createRoom(0, 95, 40, 25, "", "#33691E", 15, "#ffffff"));
rooms.push(createRoom(0, 70, 40, 25, "", "#33691E", 15, "#ffffff"));

rooms.push(createRoom(420, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));
rooms.push(createRoom(445, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));

var stairs = [{ x: 0, y: 20 }, { x: 20, y: 20 }, { x1: 0, y1: 25, x2: 20, y2: 25 }, { x1: 0, y1: 30, x2: 20, y2: 30 }, { x1: 0, y1: 35, x2: 20, y2: 35 }, { x1: 0, y1: 40, x2: 20, y2: 40 }, { x1: 20, y1: 25, x2: 40, y2: 25 }, { x1: 20, y1: 30, x2: 40, y2: 30 }, { x1: 20, y1: 35, x2: 40, y2: 35 }, { x1: 20, y1: 40, x2: 40, y2: 40 }];
var stairss = [{ x: 420, y: 0 }, { x1: 450, y1: 0, x2: 450, y2: 20 }, { x1: 455, y1: 0, x2: 455, y2: 20 }, { x1: 460, y1: 0, x2: 460, y2: 20 }, { x1: 465, y1: 0, x2: 465, y2: 20 }];

function createRoom(x, y, w, h, number, color, tsize, tcolor) {
    var coords = [];
    coords.push({ x: x, y: y });
    coords.push({ x: x + w, y: y });
    coords.push({ x: x + w, y: y + h });
    coords.push({ x: x, y: y + h });

    return new Room(coords, number, color, tsize, tcolor);
}

function draw() {
    background("#F1F8E9");
    fill(200, 200, 200);
    rooms.forEach(function(room) {
        room.display();
    });


    fill(250, 250, 250);
    stairs.forEach(function(point) {
        var x = point.x;
        var y = point.y;
        rect(x, y, 20, 50);
        var x1 = point.x1;
        var x2 = point.x2;
        var y1 = point.y1;
        var y2 = point.y2;
        line(x1, y1, x2, y2);
    });
    stairss.forEach(function(point) {
        var x = point.x;
        var y = point.y;
        rect(x, y, 50, 20);
        var x1 = point.x1;
        var x2 = point.x2;
        var y1 = point.y1;
        var y2 = point.y2;
        line(x1, y1, x2, y2);
    });
}

function mousePressed() {
    rooms.forEach(function(room) {
        room.click();
    });
}