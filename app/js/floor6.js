var walls = [];
walls.push(new Wall({ x: 20, y: 19 }, { x: 22, y: 85 }));

var labels = [];
labels.push(new Label({ x: 229, y: 185 }, "Veranda", 14, "#000000"));

var rooms = [];
rooms.push(createRoom(42, 0, 235, 160, "Library", "#69b342", 36, "#ffffff", "<ul><li>College Advising</li><li>De Paul Scholar Program</li></ul>"));
rooms.push(createRoom(406, 89, 84, 101, "Chapel", "#69b342", 15, "#ffffff"));
// rooms.push(createRoom(329, 158, 70, 25, "Veranda", "#ffffff", 10, "#ffffff"));

rooms.push(createRoom(420, 40, 25, 20, "e", "#005b7d", 15, "#ffffff"));
rooms.push(createRoom(445, 40, 25, 20, "e", "#005b7d", 15, "#ffffff"));

rooms.push(createRoom(365, 0, 55, 35, "male_rm", "#5b686d", 15, "#ffffff"));
rooms.push(createRoom(365, 35, 35, 38, "female_rm", "#5b686d", 15, "#ffffff"));

rooms.push(createRoom(0, 87, 42, 70, "", "#005032", 15, "#ffffff"));
rooms.push(createRoom(352, 89, 35, 40, "", "#005032", 15, "#ffffff"));
rooms.push(new Room([{ x: 276, y: 0 },
    { x: 365, y: 0 },
    { x: 365, y: 73 },
    { x: 347, y: 73 },
    { x: 339, y: 56 },
    { x: 326, y: 44 },
    { x: 314, y: 40 },
    { x: 291, y: 41 },
    { x: 281, y: 46 },
    { x: 276, y: 41 }
], "", "#005032", 15, "#ffffff"));

rooms.push(new Room([{ x: 283, y: 113 },
    { x: 294, y: 108 },
    { x: 313, y: 108 },
    { x: 313, y: 150 },
    { x: 276, y: 150 },
    { x: 276, y: 121 }
], "", "#005032", 15, "#ffffff"));

rooms.push(new Room([{ x: 314, y: 109 },
    { x: 320, y: 105 },
    { x: 329, y: 97 },
    { x: 333, y: 89 },
    { x: 352, y: 89 },
    { x: 352, y: 137 },
    { x: 314, y: 137 }
], "", "#005032", 15, "#ffffff"));

var stairs = [];
stairs.push(new Stair(420, 0, 42, 40, 1, 3, 'vertical', 5, "#969696", "#F1F8E9"));
stairs.push(new Steps(22, 20, 19, 22, 'horizontal', 6, "#969696", "#F1F8E9"));

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

    var department = "De Paul Scholar Program";
    var mission = "The De Paul Scholar Program is a rigorous four-year academic and enrichment program informed by the charisms of St. John Baptist de La Salle and St. Vincent de Paul. De Paul Scholars are passionate about engaging the world of ideas and solving real-world challenges of injustice and inequality. With these goals in mind, De Paul Scholars achieve grades which place them in the top 10 percent of their class and demonstrate leadership daily in the classroom. The De Paul Scholar curriculum includes summer workshops and enrichment courses; dedicated sections of ninth grade English and Social Studies; access to a wide array of Honors and Advanced Placement courses; and a culminating, college-level discussion course, Senior Seminar. Click here to see Maya Redlinger’s Senior Seminar project, It Don’t Mean A Thing Unless It’s Got That Swing!";
    var link = "http://www.shcp.edu/academics-2/de-paul-scholar-program/";
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

    labels.forEach(function(label) {
        label.display(flipDirection);
    });
}

function mousePressed() {
    rooms.forEach(function(room) {
        room.click();
    });
}