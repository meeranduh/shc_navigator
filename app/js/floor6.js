function setup() {
    var canvas = createCanvas(491, 191);
    canvas.parent("floor-plan");

    $('#room-info').html("<h3>More Info</h3>");
}

function draw() {
    background("#F1F8E9");
    noFill();
    rect(0, 0, 490, 190);
    fill(200, 200, 200);
    rooms.forEach(function(room) {
        room.display(images);
    });

    stairs.forEach(function(stair) {
        stair.display();
    });
}

