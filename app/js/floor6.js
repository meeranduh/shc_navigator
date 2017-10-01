rooms = [];
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
