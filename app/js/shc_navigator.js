function setup(){
	createCanvas(688, 480);
}

var rooms = [{x: 10, y: 10}, {x: 10, y: 60}, {x: 10, y: 110}];
function draw(){
	background(204);
	fill(0, 0, 200);
	rooms.forEach( function (point){
		var x = point.x;
		var y = point.y;
		rect(x, y, 50, 50);
	});
	// rect(10, 10, 50, 50);
}