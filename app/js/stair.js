function Stair(x, y, w, h, enter, exit, direction, steps, fromColor, toColor) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.enter = enter;
    this.exit = exit;
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

        var midX = this.x + this.w / 2;
        var midY = this.y + this.h / 2;

        // draw 4 box
        noFill();
        stroke("#909090");
        var boxes = [];
        boxes.push({ x: this.x, y: this.y });
        boxes.push({ x: midX, y: this.y });
        boxes.push({ x: this.x, y: midY });
        boxes.push({ x: midX, y: midY });

        // rect(this.x, this.y + this.h, this.w, this.h);
        this.drawRect(this.x, this.y, this.w, this.h);
        var self = this;
        for (var i = 0; i < boxes.length; i++) {
            self.drawRect(boxes[i].x, boxes[i].y, this.w / 2, this.h / 2);
        }

        if ('vertical' == direction) {
            this.drawVerticalSteps(boxes[this.enter], this.w / 2, this.h / 2, "L2R");
            this.drawVerticalSteps(boxes[this.exit], this.w / 2, this.h / 2, "R2L");
        } else {
            this.drawHorizontalSteps(boxes[this.enter], this.w / 2, this.h / 2, "T2B");
            this.drawHorizontalSteps(boxes[this.exit], this.w / 2, this.h / 2, "B2T");
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