var rooms = [];
var walls = [];
rooms.push(createRoom(0, 120, 90, 70, "406", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/406.JPG' alt='406'>"));
rooms.push(createRoom(90, 120, 90, 70, "405", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/405.JPG' alt='405'>"));
rooms.push(createRoom(180, 120, 90, 70, "404", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/404.JPG' alt='404'>"));
rooms.push(createRoom(270, 120, 90, 70, "403", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/403.JPG' alt='403'>"));
rooms.push(createRoom(350, 120, 70, 70, "402", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/402.JPG' alt='402'>"));
rooms.push(createRoom(420, 120, 70, 70, "401", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/401.JPG' alt='401'>"));
rooms.push(createRoom(70, 0, 70, 70, "408", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(140, 0, 70, 70, "409", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/409.JPG' alt='409'>"));
rooms.push(createRoom(210, 0, 70, 70, "410", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/410(1).JPG' alt='410'>"));
rooms.push(createRoom(280, 0, 70, 70, "411", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/411.JPG' alt='411'>"));

rooms.push(createRoom(350, 0, 35, 70, "female_rm", "#5b686d", 15, "#ffffff"));
rooms.push(createRoom(385, 0, 35, 70, "male_rm", "#5b686d", 15, "#ffffff"));

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

    var department = "I2 Program";
    var mission = "The Inquiry & Innovation (I2) program is a rigorous four-year program designed to expand the unique talents and interests of its students through science, technology, engineering, mathematics, design and service. ";
    var link = "http://www.shcp.edu/academics-2/i2-program/";
    var msg = "<h2>" + department + "</h2><h3>Our Mission</h3>" + mission + "<br><a style='font-size:20px' href='" + link + "'>Department Home<a/><BR>";

    department = "Mathematics";
    mission = "The mission of the SHC Mathematics Department is to help our students appreciate math and its practices and to develop their individual reasoning abilities. We are committed to providing a rigorous, college preparatory curriculum that meets the needs of all students, through innovative learning activities, real world applications and connections across disciplines. We aim to teach our students how to use diverse mathematical methods, so they can more critically understand the world of mathematics and arrive at objective conclusions about the problems presented to them.";
    link = "http://www.shcp.edu/department/math/";
    msg += "<h2>" + department + "</h2><h3>Our Mission</h3>" + mission + "<br><a style='font-size:20px' href='" + link + "'>Department Home<a/><BR>";

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
        room.click();
    });
}