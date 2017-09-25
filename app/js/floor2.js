function setup(){
	createCanvas(491, 191);
}

var roomnumber = [{x: 435, y: 155}, {x1: 365, y1: 155}, {x2: 295, y2: 155}, {x3: 225, y3: 155}, {x4: 155, y4: 155}, {x5: 85, y5: 155}, {x6: 15, y6: 155}, {x7: 105, y7: 45}, {x8: 215, y8: 45}];
var rooms = [{x: 0, y: 90}, {x: 70, y: 90}, {x: 140, y: 90}, {x: 210, y: 90}, {x: 280, y: 90}, {x: 350, y: 90}, {x: 420, y: 90}];
var rooms2 = [{x: 70, y: 0}];
var rooms3 = [{x: 180, y:0}];
var sideroom = [{x: 40, y:0}];
var sideroom2 = [{x: 270, y:0}];
var sideroom3 = [{x: 300, y:0}];
var sideroom4 = [{x: 320, y:40}];
var bathrooms = [{x: 350, y: 0}, {x: 385, y: 0}];
var bathroomlabel = [{x1: 350, y1:32}, {x: 355, y: 45}];
var stairs = [{x: 0, y: 0}, {x: 20, y: 0}, {x1: 0, y1: 30, x2: 20, y2: 30}, {x1: 0, y1: 35, x2: 20, y2: 35}, {x1: 0, y1: 40, x2: 20, y2: 40},{x1: 0, y1: 45, x2: 20, y2: 45},{x1: 20, y1: 30, x2: 40, y2: 30}, {x1: 20, y1: 35, x2: 40, y2: 35}, {x1: 20, y1: 40, x2: 40, y2: 40}, {x1: 20, y1: 45, x2: 40, y2: 45}];
var stairss = [{x: 420 , y: 0}, {x1: 450, y1: 0, x2: 450, y2: 20}, {x1: 455, y1: 0, x2: 455, y2: 20}, {x1: 460, y1: 0, x2: 460, y2: 20}, {x1: 465, y1: 0, x2: 465, y2: 20}, {x: 420 , y: 20}, {x1: 450, y1: 20, x2: 450, y2: 40}, {x1: 455, y1: 20, x2: 455, y2: 40}, {x1: 460, y1: 20, x2: 460, y2: 40}, {x1: 465, y1: 20, x2: 465, y2: 40}];
var elevator = [{x: 420, y: 40}, {x: 445, y: 40}];

function draw(){
	background(50, 150, 50);
	fill(200, 200, 200);
	rooms.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 70, 100);	
	}); 
	rooms2.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 110, 60);	
	}); 
	rooms3.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 170, 60);	
	}); 
	sideroom.forEach(function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 30, 60)
	});
	sideroom2.forEach(function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 30, 40)
	});
	sideroom3.forEach(function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 50, 40)
	});
	sideroom4.forEach(function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 30, 20)
	});
	fill(150, 150, 150);
	bathrooms.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 35, 60);
	});
	bathroomlabel.forEach( function (point){
		fill(300, 300, 300);
		var x1 = point.x1;
		var y1 = point.y1;
		rect(x1, y1, 70, 15);
		fill(0, 0, 200);
		var x = point.x;
		var y = point.y;
		textSize(13);
		text("bathrooms", x, y)
	});
	fill(250, 250, 250);
	stairs.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 20, 50);
		var x1 = point.x1;
		var x2 = point.x2;
		var y1 = point.y1;
		var y2 = point.y2;
		line (x1, y1, x2, y2);
	});
	stairss.forEach (function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 50, 20);
		var x1 = point.x1;
		var x2 = point.x2;
		var y1 = point.y1;
		var y2 = point.y2;
		line (x1, y1, x2, y2);
	});
	fill(100, 100, 100);
	elevator.forEach (function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 25, 20);
	});
	fill(0, 0, 0);
	roomnumber.forEach (function (point){
		var x = point.x;
		var y = point.y;	
		var x1 = point.x1;
		var y1 = point.y1;
		var x2 = point.x2;
		var y2 = point.y2;	
		var x3 = point.x3;
		var y3 = point.y3;
		var x4 = point.x4;
		var y4 = point.y4;	
		var x5 = point.x5;
		var y5 = point.y5;
		var x6 = point.x6;
		var y6 = point.y6;	
		var x7 = point.x7;
		var y7 = point.y7;
		var x8 = point.x8;
		var y8 = point.y8;	
		textSize(25);
		text("201", x, y);	
		text("202", x1, y1);
		text("203", x2, y2);
		text("204", x3, y3);
		text("205", x4, y4);
		text("206", x5, y5);
		text("207", x6, y6);
		text("208", x7, y7);
		text("209", x8, y8);
	});
}