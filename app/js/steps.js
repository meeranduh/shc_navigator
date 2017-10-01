function Steps(x, y, width, height, direction, steps, fromColor, toColor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.direction = direction;
    this.steps = steps;
    this.fromColor = fromColor;
    this.toColor = toColor;
    this.colorRange = [];

    this.display = function() {
        if (this.colorRange.length == 0) {
            this.fillColorRange();
        }

        // draw 4 box
        noFill();
        stroke("#000000");
        rect(this.x, this.y, this.width, this.height);

        if ('vertical' == direction) {
            this.drawVerticalSteps({ x: this.x, y: this.y }, this.width, this.height, "L2R");
        } else {
            this.drawHorizontalSteps({ x: this.x, y: this.y }, this.width, this.height, "T2B");
        }

    };

    this.fillColorRange = function() {
        var stepSize = 1.0 / this.steps;

        for (var i = 0; i < this.steps; i++) {
            this.colorRange.push(lerpColor(color(this.fromColor), color(this.toColor), i * stepSize));
        }
    };

    this.drawVerticalSteps = function(point, w, h, direction) {
        var stepSize = w / this.steps;

        for (var i = 0; i < this.steps; i++) {
            if ("L2R" == direction) {
                fill(this.colorRange[i]);
            } else {
                fill(this.colorRange[this.steps - i - 1]);
            }
            rect(point.x + i * stepSize, point.y, stepSize, h);
        }

    };

    this.drawHorizontalSteps = function(point, w, h, direction) {
        var stepSize = h / this.steps;

        for (var i = 0; i < this.steps; i++) {
            if ("T2B" == direction) {
                fill(this.colorRange[i]);
            } else {
                fill(this.colorRange[this.steps - i - 1]);
            }
            rect(point.x, point.y + i * stepSize, w, stepSize);
        }
    };
}