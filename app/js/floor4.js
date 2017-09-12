function setup(){
	var canvas = createCanvas(491, 191);
	canvas.parent("floor-plan");
}
var roomnumber2 = [{x: 435, y: 165}, {x1: 365, y1: 165}, {x2: 290, y2: 165}, {x3: 205, y3: 165}, {x4: 115, y4: 165}, {x5: 25, y5: 165},{x7: 85, y7: 45}, {x8: 155, y8: 45}, {x9: 225, y9: 45}, {x10: 295, y10: 45}];
//var roomnumber2 = [{x: 435, y: 355}, {x1: 365, y1: 355}, {x2: 290, y2: 355}, {x3: 205, y3: 355}, {x4: 115, y4: 355}, {x5: 25, y5: 355}, {x7: 85, y7: 235}, {x8: 155, y8: 235}, {x9: 225, y9: 235}, {x10: 295, y10: 235}];
var rooms2 = [{x: 70, y: 0}, {x: 140, y: 0}, {x: 210, y: 0}, {x: 280,y: 0}, {x: 0, y: 120}, {x: 90, y: 120}, {x: 180, y: 120}, {x: 270, y: 120}, {x: 350, y: 120}, {x: 420, y: 120}];
//var rooms2 = [{x: 70, y: 190}, {x: 140, y: 190}, {x: 210, y: 190}, {x: 280,y: 190}, {x: 0, y: 310}, {x: 90, y: 310}, {x: 180, y: 310}, {x: 270, y: 310}, {x: 350, y: 310}, {x: 420, y: 310}];
var bathrooms2 = [{x: 350, y: 0}, {x: 385, y: 0}];
//var bathrooms2 = [{x: 350, y: 190}, {x: 385, y: 190}];
var bathroomlabel2 = [{x1: 350, y1:32}, {x: 355, y: 45}];
//var bathroomlabel2 = [{x1: 350, y1:222}, {x: 355, y: 235}];
var siderooms2 = [{x: 0, y: 95}, {x: 0, y: 70}];
//var siderooms2 = [{x: 0, y: 285}, {x: 0, y: 260}];
var stairs2 = [{x: 0, y: 20}, {x: 20, y: 20}, {x1: 0, y1: 25, x2: 20, y2: 25}, {x1: 0, y1: 30, x2: 20, y2: 30}, {x1: 0, y1: 35, x2: 20, y2: 35}, {x1: 0, y1: 40, x2: 20, y2: 40}, {x1: 20, y1: 25, x2: 40, y2: 25}, {x1: 20, y1: 30, x2: 40, y2: 30}, {x1: 20, y1: 35, x2: 40, y2: 35}, {x1: 20, y1: 40, x2: 40, y2: 40}];
//var stairs2 = [{x: 0, y: 210}, {x: 20, y: 210}, {x1: 0, y1: 215, x2: 20, y2: 215}, {x1: 0, y1: 220, x2: 20, y2: 220}, {x1: 0, y1: 225, x2: 20, y2: 225}, {x1: 0, y1: 230, x2: 20, y2: 230}, {x1: 20, y1: 215, x2: 40, y2: 215}, {x1: 20, y1: 220, x2: 40, y2: 220}, {x1: 20, y1: 225, x2: 40, y2: 225}, {x1: 20, y1: 230, x2: 40, y2: 230}];
var stairss2 = [{x: 420 , y: 0}, {x1: 450, y1: 0, x2: 450, y2: 20}, {x1: 455, y1: 0, x2: 455, y2: 20}, {x1: 460, y1: 0, x2: 460, y2: 20}, {x1: 465, y1: 0, x2: 465, y2: 20}];
//var stairss2 = [{x: 420 , y: 190}, {x1: 450, y1: 190, x2: 450, y2: 210}, {x1: 455, y1: 190, x2: 455, y2: 210}, {x1: 460, y1: 190, x2: 460, y2: 210}, {x1: 465, y1: 190, x2: 465, y2: 210}, {x: 420 , y: 210}, {x1: 450, y1: 210, x2: 450, y2: 230}, {x1: 455, y1: 210, x2: 455, y2: 230}, {x1: 460, y1: 210, x2: 460, y2: 230}, {x1: 465, y1: 210, x2: 465, y2: 230}];
var elevator2 = [{x: 420, y: 40}, {x: 445, y: 40}];
//var elevator2 = [{x: 420, y: 230}, {x: 445, y: 230}];
function draw(){
	background(50, 150, 50);
	fill(200, 200, 200);
	rooms2.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 90, 70);	
	}); 
	fill(150, 150, 150);
	bathrooms2.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 35, 70);
	});
	bathroomlabel2.forEach( function (point){
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
	fill(200, 200, 200);
	siderooms2.forEach(function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 40, 25);
	});
	fill(250, 250, 250);
	stairs2.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 20, 50);
		var x1 = point.x1;
		var x2 = point.x2;
		var y1 = point.y1;
		var y2 = point.y2;
		line (x1, y1, x2, y2);
	});
	stairss2.forEach (function (point){
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
	elevator2.forEach (function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 25, 20);
	});
	fill(0, 0, 0);
	roomnumber2.forEach (function (point){
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
		var x7 = point.x7;
		var y7 = point.y7;
		var x8 = point.x8;
		var y8 = point.y8;	
		var x9 = point.x9;
		var y9 = point.y9;
		var x10 = point.x10;
		var y10 = point.y10;	
		textSize(25);
		text("401", x, y);	
		text("402", x1, y1);
		text("403", x2, y2);
		text("404", x3, y3);
		text("405", x4, y4);
		text("406", x5, y5);
		text("408", x7, y7);
		text("409", x8, y8);
		text("410", x9, y9);
		text("411", x10, y10);
	});
}