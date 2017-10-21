var rooms = [];
var walls = [];

//walls.push(new Wall({ x: 275, y: 97 }, { x: 277, y: 103 }));
//walls.push(new Wall({ x: 392, y: 97 }, { x: 394, y: 394 }));
walls.push(new Wall({ x: 470, y: 42 }, { x: 472, y: 80 }));

rooms.push(createRoom(70, 0, 70, 70, "103", "#69b342", 25, "#ffffff"));
rooms.push(createRoom(140, 0, 70, 70, "104", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/104.JPG' alt='104'>"));
rooms.push(createRoom(210, 0, 70, 70, "105", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/105.JPG' alt='105'>"));
rooms.push(createRoom(350, 0, 70, 70, "106", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/106.JPG' alt='106'>"));
rooms.push(createRoom(210, 100, 70, 90, "102", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/102.JPG' alt='102'>"));
rooms.push(createRoom(300, 120, 100, 70, "101", "#69b342", 25, "#ffffff", "<img class='photo' src='assets/classrooms/pictures/101.JPG' alt='101'>"));

rooms.push(createRoom(45, 0, 25, 70, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(0, 140, 26, 55, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(26, 150, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(49, 150, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(72, 150, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(95, 150, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(118, 150, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(141, 150, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(164, 150, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(187, 150, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(141, 100, 23, 42, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(164, 100, 46, 50, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(0, 115, 26, 26, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(0, 90, 26, 26, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(420, 100, 50, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(420, 130, 50, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(420, 160, 50, 30, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(470, 100, 20, 90, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(280, 0, 25, 40, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(305, 0, 45, 35, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(305, 35, 45, 35, "", "#005032", 15, "#ffffff"));

rooms.push(createRoom(300, 100, 10, 20, "", "#005032", 15, "000000"));
rooms.push(createRoom(380, 100, 20, 20, "", "#005032", 15, "000000"));
rooms.push(createRoom(310, 100, 35, 20, "female_rm", "#5b686d", 15, "#ffffff"));
rooms.push(createRoom(345, 100, 35, 20, "male_rm", "#5b686d", 15, "#ffffff"));

rooms.push(createRoom(420, 40, 25, 20, "e", "#005b7d", 15, "#ffffff"));
rooms.push(createRoom(445, 40, 25, 20, "e", "#005b7d", 15, "#ffffff"));

rooms.push(new Room([{ x: 40, y: 103 },
    { x: 52, y: 98 },
    { x: 66, y: 95 },
    { x: 70, y: 122 },
    { x: 61, y: 123 },
    { x: 50, y: 127 }
], "", "#005032", 15, "#ffffff"));
rooms.push(new Room([{ x: 66, y: 95 },
    { x: 82, y: 94 },
    { x: 96, y: 95 },
    { x: 92, y: 122 },
    { x: 70, y: 122 }
], "", "#005032", 15, "#ffffff"));
rooms.push(new Room([{ x: 96, y: 95 },
    { x: 112, y: 98 },
    { x: 122, y: 104 },
    { x: 111, y: 127 },
    { x: 100, y: 123 },
    { x: 92, y: 122 }
], "", "#005032", 15, "#ffffff"));



var stairs = [];
//stairs.push(new Stair(0, 10, 40, 50, 0, 1, 'horizontal', 5, "#969696", "#F1F8E9"));
stairs.push(new Stair(420, 0, 50, 40, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(0, 20, 19, 33, 'horizontal', 6, "#969696", "#F1F8E9"));
stairs.push(new Steps(280, 161, 19, 20, 'horizontal', 4, "#969696", "#F1F8E9"));
stairs.push(new Steps(470, 40, 28, 20, 'horizontal', 4, "#969696", "#F1F8E9"));


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

    var msg = "<h2>Counseling</h2><h3>Our Mission</h3>Sacred Heart Cathedral’s Counseling and Advising Program provides parents and students the academic guidance they need to navigate a challenging college prep curriculum commensurate with the individual student’s gifts, talents, and aspirations in order to make the transition from secondary school to college as seamless as possible. In addition, school counselors guide, support, encourage and nurture students to advance emotionally, socially and spiritually from adolescence to adulthood.<br><a style='font-size:20px' href='http://www.shcp.edu/academics-2/counseling/'>Department Home<a/>";
    msg += "<h2>Religious Studies</h2><h3>Our Mission</h3>Inspired by our founders and in the spirit of the US Bishops’ secondary schools curriculum framework, SHC’s Religious Studies Department helps our students realize and deepen their relationships with God and with others. We embrace the Lasallian Vincentian mission to provide faith formation and education that prepare students to become service-oriented leaders with a commitment to living the Gospel.<br><a style='font-size:20px' href='http://www.shcp.edu/department/religious-studies/'>Department Home<a/><BR>";
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