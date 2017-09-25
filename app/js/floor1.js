function setup(){
	createCanvas(491, 191);
}

var rooms = [{x: 70, y: 0}, {x: 140, y: 0}, {x: 210, y: 0}, {x: 350,y: 0}];
var rooms2 = [{x: 210, y: 110}];
var rooms3 = [{x: 300, y: 110}];
var offices = [{x: 26, y: 155},{x: 49, y: 155},{x: 72, y: 155},{x: 95, y: 155},{x: 118, y: 155},{x: 141, y: 155},{x: 164, y: 155},{x: 187, y: 155}];
var offices2 = [{x: 0, y: 145}];

function draw(){
	background(50, 150, 50);
	fill(200, 200, 200);
	rooms.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 70, 70);	
	}); 
	rooms2.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 70, 80);	
	}); 
	rooms3.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 90, 90);	
	}); 
	offices.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 23, 35);	
	}); 
	offices2.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 26, 45);	
	}); 
}