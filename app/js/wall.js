function Wall(from, to) {
    this.from = from;
    this.to = to;
    this.flipped = false;

    this.display = function(flip) {
        this.flipped = flip;
        fill("#939393");
        this.drawRect(from.x, from.y, to.x - from.x, to.y - from.y);
    };

    this.drawRect = function(x, y, w, h) {
        beginShape();
        vertex(x, this.toY(y));
        vertex(x + w, this.toY(y));
        vertex(x + w, this.toY(y + h));
        vertex(x, this.toY(y + h));
        endShape(CLOSE);
    };

    this.toY = function(y) {
        if (this.flipped) {
            return height - y;
        } else {
            return y;
        }
    };
}