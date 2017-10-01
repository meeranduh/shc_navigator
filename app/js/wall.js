function Wall(from, to) {
    this.from = from;
    this.to = to;

    this.display = function() {
        fill("#939393");
        rect(from.x, from.y, to.x - from.x, to.y - from.y);
    }
}