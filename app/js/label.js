function Label(coordinate, msg, size, color) {
    this.coordinate = coordinate;
    this.msg = msg;
    this.size = size;
    this.color = color;
    this.flipped = false;

    this.display = function(flip) {
        this.flipped = flip;
        stroke(this.color);
        fill(this.color);
        textSize(this.size);
        text(this.msg,
            this.toX(this.coordinate.x),
            this.toY(this.coordinate.y + (this.flipped ? -this.size : -this.size / 2)));
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