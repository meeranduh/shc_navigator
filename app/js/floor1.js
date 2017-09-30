rooms = [];
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
rooms.push(createRoom(164, 100, 46, 42, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(0, 115, 26, 26, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(0, 90, 26, 26, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(420, 100, 50, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(420, 130, 50, 30, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(420, 160, 50, 30, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(280, 0, 25, 70, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(305, 0, 45, 35, "", "#33691E", 15, "#000000"));
rooms.push(createRoom(305, 35, 45, 35, "", "#33691E", 15, "#000000"));

rooms.push(createRoom(300, 100, 10, 20, "", "#33691E", 15, "000000"));
rooms.push(createRoom(380, 100, 20, 20, "", "#33691E", 15, "000000"));
rooms.push(createRoom(310, 100, 35, 20, "female_rm", "#558B2F", 15, "#ffffff"));
rooms.push(createRoom(345, 100, 35, 20, "male_rm", "#558B2F", 15, "#ffffff"));

rooms.push(createRoom(420, 40, 25, 20, "e", "#B2FF59", 15, "#000000"));
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
