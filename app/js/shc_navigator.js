function setup() {
	createCanvas(688, 480);
}

var building = {
	name: "LS",
	floors: [ 
	{floor : 1,	rooms : [ 
		{room : 101, from : {x :   0, y :  0}, to : {x :  45, y : 45} },
		{room : 102, from : {x :  50, y :  0}, to : {x :  95, y : 45} }, 
		{room : 103, from : {x : 100, y :  0}, to : {x : 145, y : 45} }, 
		{room : 104, from : {x : 150, y :  0}, to : {x : 195, y : 45} }, 
		{room : 105, from : {x : 200, y :  0}, to : {x : 245, y : 45} }, 
		{room : 106, from : {x :   0, y : 80}, to : {x :  45, y : 125} }, 
		{room : 107, from : {x :  50, y : 80}, to : {x :  95, y : 125} }, 
		{room : 108, from : {x : 100, y : 80}, to : {x : 145, y : 125} }, 
		{room : 109, from : {x : 150, y : 80}, to : {x : 195, y : 125} }, 
		{room : 110, from : {x : 200, y : 80}, to : {x : 245, y : 125} },
		{room : 111, from : {x : 250, y : 0}, to : {x : 295, y : 125} }
	]},
	{floor : 2,	rooms : [ 
		{room : 201, from : {x : -50, y :  0}, to : {x :  -5, y : 125} },
		{room : 201, from : {x :   0, y :  0}, to : {x :  45, y : 45} },
		{room : 202, from : {x :  50, y :  0}, to : {x :  95, y : 45} }, 
		{room : 203, from : {x : 100, y :  0}, to : {x : 145, y : 45} }, 
		{room : 204, from : {x : 150, y :  0}, to : {x : 195, y : 45} }, 
		{room : 205, from : {x : 200, y :  0}, to : {x : 245, y : 45} }, 
		{room : 206, from : {x :   0, y : 80}, to : {x :  45, y : 125} }, 
		{room : 207, from : {x :  50, y : 80}, to : {x :  95, y : 125} }, 
		{room : 208, from : {x : 100, y : 80}, to : {x : 145, y : 125} }, 
		{room : 209, from : {x : 150, y : 80}, to : {x : 195, y : 125} }, 
		{room : 210, from : {x : 200, y : 80}, to : {x : 245, y : 125} },
		{room : 211, from : {x : 250, y : 0}, to : {x : 295, y : 125} }
	]},
	{floor : 3,	rooms : [ 
		{room : 201, from : {x :   0, y :  0}, to : {x :  45, y : 45} },
		{room : 202, from : {x :  50, y :  0}, to : {x :  95, y : 45} }, 
		{room : 203, from : {x : 100, y :  0}, to : {x : 145, y : 45} }, 
		{room : 204, from : {x : 150, y :  0}, to : {x : 195, y : 45} }, 
		{room : 205, from : {x : 200, y :  0}, to : {x : 245, y : 45} }, 
		{room : 206, from : {x :   0, y : 80}, to : {x :  45, y : 125} }, 
		{room : 207, from : {x :  50, y : 80}, to : {x :  95, y : 125} }, 
		{room : 208, from : {x : 100, y : 80}, to : {x : 145, y : 125} }, 
		{room : 209, from : {x : 150, y : 80}, to : {x : 195, y : 125} }, 
		{room : 210, from : {x : 200, y : 80}, to : {x : 245, y : 125} }
	]},
	{floor : 4,	rooms : [ 
		{room : 201, from : {x :   0, y :  0}, to : {x :  45, y : 45} },
		{room : 202, from : {x :  50, y :  0}, to : {x :  95, y : 45} }, 
		{room : 203, from : {x : 100, y :  0}, to : {x : 145, y : 45} }, 
		{room : 204, from : {x : 150, y :  0}, to : {x : 195, y : 45} }, 
		{room : 205, from : {x : 200, y :  0}, to : {x : 245, y : 45} }, 
		{room : 206, from : {x :   0, y : 80}, to : {x :  45, y : 125} }, 
		{room : 207, from : {x :  50, y : 80}, to : {x :  95, y : 125} }, 
		{room : 208, from : {x : 100, y : 80}, to : {x : 145, y : 125} }, 
		{room : 209, from : {x : 150, y : 80}, to : {x : 195, y : 125} }, 
		{room : 210, from : {x : 200, y : 80}, to : {x : 245, y : 125} }
	]}
]};

var floorColor = [
//	"#a1e1ab",
//	"#6bce7a",
//	"#86d892",
//	"#51c462",
//	"#3db34f",
//	"#359743",
//	"#2c7c38"
	"#a9b1e4",
	"#8d99da",
	"#7380d1",
	"#5868c7",
	"#4052ba",
	"#37469f",
	"#2f3b83"
];

var tileW = .866;
var tileH = .5;

function toX (x) {
	return 80 + x;
}

function toY (y) {
	return 320 - y; 
}

function screenToIso(point){
	var posX = (point.x * tileW + point.y * tileW) / 2;
	var posY = (point.y * tileH - point.x * tileW) / 2;

    return {x: toX(posX), y: toY(posY)};
}

function setFloor(point, floor) {
	return {x: point.x, y: point.y - (floor - 1) * 45};
}

function drawFloor(floor, highlighted) {
	if (highlighted) {
		fill(floorColor[floor.floor]);
		stroke(204);
		strokeWeight(1);
	} else {
		noFill();
		stroke(floorColor[floor.floor]);
		strokeWeight(.5);
	}
	
	floor.rooms.forEach(function(room) {
		var from = setFloor(screenToIso(room.from), floor.floor);
		var to = setFloor(screenToIso(room.to), floor.floor);
		
		var rfrom = setFloor(screenToIso({x: room.from.x, y: room.to.y}), floor.floor);
		var rto = setFloor(screenToIso({x: room.to.x, y: room.from.y}), floor.floor);
		
		quad(from.x, from.y, rfrom.x, rfrom.y, to.x, to.y, rto.x, rto.y);
	});
	
}

function draw() {
	background(255);
	building.floors.forEach(function(floor){
		drawFloor(floor, floor.floor == 2 ? true : false);
	});
}