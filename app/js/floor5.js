var rooms = [];
var walls = [];
rooms.push(createRoom(0, 120, 70, 70, "507", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(70, 120, 70, 70, "506", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(140, 120, 70, 70, "505", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/505.JPG' alt='505'>"));
rooms.push(createRoom(210, 120, 70, 70, "504", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(280, 120, 70, 70, "503", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(350, 120, 70, 70, "502", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/502.JPG' alt='502'>"));
rooms.push(createRoom(420, 120, 70, 70, "501", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/501.JPG' alt='501'>"));
rooms.push(createRoom(70, 0, 70, 70, "508", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(140, 0, 70, 70, "509", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(210, 0, 70, 70, "510", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(280, 0, 70, 70, "511", "#69b342", 25, "#ffffff"));


rooms.push(createRoom(350, 0, 35, 70, "male_rm", "#5b686d", 15, "#ffffff"));
rooms.push(createRoom(385, 0, 35, 70, "female_rm", "#5b686d", 15, "#ffffff"));

rooms.push(createRoom(0, 59, 42, 30, "", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(0, 90, 42, 30, "", "#69b342", 25, "#ffffff"));

rooms.push(createRoom(420, 42, 20, 18, "e", "#005b7d", 15, "#ffffff"));
rooms.push(createRoom(440, 42, 20, 18, "e", "#005b7d", 15, "#ffffff"));

var stairs = [];
stairs.push(new Stair(420, 0, 42, 42, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Stair(0, 17, 42, 42, 0, 1, 'horzontial', 5, "#969696", "#F1F8E9"));


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

    var department = "English";
    var mission = "Inspired by the literary canon, the SHC English Department teaches students to find their own voice and to develop critical literacy so that they become passionate readers, articulate writers, and lifelong contributors to their communities.";
    var link = "http://www.shcp.edu/department/english/";
    var msg = "<h2>" + department + "</h2><h3>Our Mission</h3>" + mission + "<br><a style='font-size:20px' href='" + link + "'>Department Home<a/><BR>";
    $('#room-info').html(msg);
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
        room.click(flipDirection);
    });
}