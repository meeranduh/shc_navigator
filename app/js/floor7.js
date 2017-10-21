var walls = [];
walls.push(new Wall({ x: 172, y: 307 }, { x: 337, y: 309 }));
walls.push(new Wall({ x: 117, y: 216 }, { x: 119, y: 258 }));
walls.push(new Wall({ x: 75, y: 220 }, { x: 82, y: 222 }));
walls.push(new Wall({ x: 102, y: 233 }, { x: 117, y: 235 }));
walls.push(new Wall({ x: 170, y: 205 }, { x: 172, y: 241 }));
walls.push(new Wall({ x: 335, y: 205 }, { x: 337, y: 241 }));
walls.push(new Wall({ x: 374, y: 184 }, { x: 391, y: 186 }));
walls.push(new Wall({ x: 449, y: 31 }, { x: 481, y: 33 }));

walls.push(new Wall({ x: 154, y: 20 }, { x: 156, y: 35 }));
walls.push(new Wall({ x: 350, y: 20 }, { x: 352, y: 35 }));
walls.push(new Wall({ x: 119, y: 20 }, { x: 121, y: 35 }));

var labels = [];
labels.push(new Label({ x: 220, y: 290 }, "DePaul\nFoyer", 14, "#000000"));

var rooms = [];
rooms.push(createRoom(56, 86, 65, 56, "701", "#69b342", 20, "#ffffff"));
rooms.push(createRoom(56, 142, 65, 63, "Band\nRoom", "#69b342", 15, "#ffffff"));
rooms.push(createRoom(391, 30, 58, 56, "Tech\nShop", "#69b342", 15, "#ffffff"));
rooms.push(createRoom(391, 86, 58, 37, "705", "#69b342", 20, "#ffffff"));
rooms.push(createRoom(391, 123, 58, 82, "Art\nRoom", "#69b342", 15, "#ffffff"));
rooms.push(createRoom(337, 258, 143, 62, "Chorus\nRoom", "#69b342", 15, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/703.JPG' alt='703'>"));
rooms.push(createRoom(189, 35, 130, 55, "Stage", "#608cd1", 15, "#ffffff"));

rooms.push(createRoom(56, 30, 65, 56, "", "#005032", 20, "#ffffff"));
rooms.push(createRoom(121, 186, 52, 19, "", "#005032", 20, "#ffffff"));
rooms.push(createRoom(1, 258, 28, 62, "", "#005032", 20, "#ffffff"));
rooms.push(createRoom(29, 258, 143, 62, "", "#005032", 20, "#ffffff"));
rooms.push(createRoom(139, 258, 33, 40, "", "#69b342", 20, "#ffffff"));
rooms.push(createRoom(410, 205, 39, 30, "", "#005032", 20, "#ffffff"));
rooms.push(createRoom(334, 183, 40, 22, "", "#005032", 20, "#ffffff"));
rooms.push(createRoom(30, 30, 26, 205, "", "#005032", 20, "#ffffff"));
rooms.push(createRoom(119, 1, 254, 19, "", "#005032", 20, "#ffffff"));
rooms.push(createRoom(170, 35, 19, 21, "", "#051328", 20, "#ffffff"));
rooms.push(createRoom(319, 35, 19, 21, "", "#051328", 20, "#ffffff"));

rooms.push(createRoom(82, 219, 20, 16, "e", "#005b7d", 15, "#ffffff"));

rooms.push(createRoom(56, 205, 19, 30, "male_rm", "#5b686d", 15, "#ffffff"));
rooms.push(createRoom(391, 205, 19, 30, "female_rm", "#5b686d", 15, "#ffffff"));

rooms.push(new Room([
    { x: 228, y: 183 },
    { x: 200, y: 231 },
    { x: 253, y: 240 },
    { x: 306, y: 231 },
    { x: 278, y: 183 },
], "", "#173c77", 16, "#ffffff"));

rooms.push(new Room([
    { x: 183, y: 90 },
    { x: 172, y: 104 },
    { x: 165, y: 116 },
    { x: 162, y: 128 },
    { x: 167, y: 154 },
    { x: 183, y: 154 },
    { x: 187, y: 177 },
    { x: 197, y: 189 },
    { x: 221, y: 204 },
    { x: 285, y: 204 },
    { x: 309, y: 189 },
    { x: 319, y: 177 },
    { x: 323, y: 154 },
    { x: 339, y: 154 },
    { x: 344, y: 128 },
    { x: 341, y: 116 },
    { x: 334, y: 104 },
    { x: 323, y: 90 },
], "Collins\nTheater", "#1c5abc", 20, "#ffffff"));

rooms.push(new Room([
    { x: 154, y: 35 },
    { x: 145, y: 42 },
    { x: 136, y: 57 },
    { x: 155, y: 69 },
    { x: 142, y: 88 },
    { x: 134, y: 107 },
    { x: 165, y: 116 },
    { x: 172, y: 104 },
    { x: 183, y: 90 },
    { x: 189, y: 90 },
    { x: 189, y: 56 },
    { x: 170, y: 56 },
    { x: 170, y: 35 },
], "", "#071428", 20, "#ffffff"));

rooms.push(new Room([
    { x: 338, y: 35 },
    { x: 338, y: 56 },
    { x: 319, y: 56 },
    { x: 319, y: 90 },
    { x: 323, y: 90 },
    { x: 334, y: 104 },
    { x: 341, y: 116 },
    { x: 372, y: 107 },
    { x: 364, y: 88 },
    { x: 351, y: 69 },
    { x: 370, y: 57 },
    { x: 361, y: 42 },
    { x: 352, y: 35 },
], "", "#071428", 20, "#ffffff"));

var stairs = [];
stairs.push(new Steps(131, 212, 21, 11, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(131, 223, 21, 11, 'vertical', 5, "#F1F8E9", "#969696"));
stairs.push(new Steps(152, 212, 11, 22, 'horizontal', 1, "#ffffff", "#ffffff"));
stairs.push(new Steps(341, 212, 11, 22, 'horizontal', 1, "#ffffff", "#ffffff"));
stairs.push(new Steps(352, 223, 21, 11, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(352, 212, 21, 11, 'vertical', 5, "#F1F8E9", "#969696"));

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
    var canvas = createCanvas(481, 321);
    canvas.parent("floor-plan");

    flipBtn = createButton("Rotate");
    flipBtn.position(520, 10);
    flipBtn.mouseClicked(flip);
    flipBtn.parent("floor-plan");

    var department = "Visual & Performing Arts";
    var mission = "SHC’s Visual & Performing Arts Department asks students to work individually and collaboratively to create projects and performances that express individual gifts and talents while providing service and joy to others. By critically analyzing artistic mediums from a variety of cultures, time periods and movements, students acquire a depth and breadth of understanding about the world around them and within themselves.";
    var link = "http://www.shcp.edu/department/vpa/";
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
    rect(0, 0, 480, 320);
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

    labels.forEach(function(label) {
        label.display(flipDirection);
    });
}

function mousePressed() {
    rooms.forEach(function(room) {
        room.click();
    });
}