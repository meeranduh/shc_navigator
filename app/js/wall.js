function Wall(from, to) {
    this.from = from;
    this.to = to;
    this.flipped = false;

    this.display = function(flip) {
        this.flipped = flip;
        stroke("#909090");
        fill("#939393");
        this.drawRect(from.x, from.y, to.x - from.x, to.y - from.y);
    };

    this.drawRect = function(x, y, w, h) {
        beginShape();
        vertex(this.toX(x), this.toY(y));
        vertex(this.toX(x + w), this.toY(y));
        vertex(this.toX(x + w), this.toY(y + h));
        vertex(this.toX(x), this.toY(y + h));
        endShape(CLOSE);
    };

    this.toY = function(y) {
        if (this.flipped) {
            return height - y;
        } else {
            return y;
        }
    };

    this.toX = function(x) {
        if (this.flipped) {
            return width - x;
        } else {
            return x;
        }
    };
}