function Steps(x, y, w, h, direction, steps, fromColor, toColor) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.direction = direction;
    this.steps = steps;
    this.fromColor = fromColor;
    this.toColor = toColor;
    this.colorRange = [];
    this.flipped = false;

    this.display = function(flip) {
        this.flipped = flip;
        if (this.colorRange.length == 0) {
            this.fillColorRange();
        }

        // draw 4 box
        noFill();
        stroke("#909090");
        this.drawRect(this.x, this.y, this.w, this.h);

        if ('vertical' == direction) {
            this.drawVerticalSteps({ x: this.x, y: this.y }, this.w, this.h, "L2R");
        } else {
            this.drawHorizontalSteps({ x: this.x, y: this.y }, this.w, this.h, "T2B");
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
            this.drawRect(point.x + i * stepSize, point.y, stepSize, h);
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
            this.drawRect(point.x, point.y + i * stepSize, w, stepSize);
        }
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