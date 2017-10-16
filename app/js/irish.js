function Irish(startAt, stepSize) {
    this.current = startAt;
    this.moveTo = { x: startAt.x, y: startAt.y };
    this.stepSize = stepSize;
    this.step = 0;


    this.display = function(images) {
        var direction = "r";

        if (!(this.current.x == this.moveTo.x && this.current.y == this.moveTo.y)) {
            this.step = (this.step + 1) % 2;


            var slope = (this.moveTo.y - this.current.y) / (this.moveTo.x - this.current.x);
            var moveBy = this.moveTo.x > this.current.x ? stepSize : -stepSize;
            if (moveBy < 0) {
                direction = "l";
            }

            var nextX = this.current.x + moveBy;
            var nextY = this.current.y + moveBy * slope;

            if (Math.abs(nextX - this.moveTo.x) < stepSize) {
                nextX = this.moveTo.x;
                nextY = this.moveTo.y;
            }
            this.current.x = nextX;
            this.current.y = nextY;
        }

        var label = direction + this.step;
        var img = images[label];
        image(img,
            this.current.x + -img.width / 2,
            this.current.y + -img.height / 2);

    };

    this.distance = function(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ^ 2 + (y2 - y1) ^ 2);
    };

    this.click = function() {
        this.moveTo.x = mouseX;
        this.moveTo.y = mouseY;
    };

}