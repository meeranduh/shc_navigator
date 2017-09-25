function Stair(x, y, width, height, enter, exit, direction, steps, fromColor, toColor) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.enter = enter;
    this.exit = exit;
    this.direction = direction;
    this.steps = steps;
    this.fromColor = fromColor;
    this.toColor = toColor;
    this.colorRange = [];

    this.display = function() {
        if (this.colorRange.length == 0) {
            this.fillColorRange();
        }

        var midX = this.x + this.width / 2;
        var midY = this.y + this.height / 2;

        // draw 4 box
        noFill();
        stroke("#000000");
        var boxes = [];
        boxes.push({ x: this.x, y: this.y });
        boxes.push({ x: midX, y: this.y });
        boxes.push({ x: this.x, y: midY });
        boxes.push({ x: midX, y: midY });

        rect(this.x, this.y, this.width, this.height);
        for (var i = 0; i < boxes.length; i++) {
            rect(boxes[i].x, boxes[i].y, this.width / 2, this.height / 2);
        }

        if ('vertical' == direction) {
            this.drawVerticalSteps(boxes[this.enter], this.width / 2, this.height / 2, "L2R");
            this.drawVerticalSteps(boxes[this.exit], this.width / 2, this.height / 2, "R2L");
        } else {
            this.drawHorizontalSteps(boxes[this.enter], this.width / 2, this.height / 2, "T2B");
            this.drawHorizontalSteps(boxes[this.exit], this.width / 2, this.height / 2, "B2T");
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