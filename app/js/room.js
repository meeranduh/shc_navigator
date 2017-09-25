function Room(coordinatons, label, color, tsize, tcolor) {
    this.coordinatons = coordinatons;
    this.label = label;
    this.boundary = undefined;
    this.color = color;
    this.tsize = tsize;
    this.tcolor = tcolor;
    this.selected = false;

    this.display = function(images) {
        if (!this.boundary) {
            this.boundary = this.findboundary();
        }

        if (this.selected) {
            fill("#76FF03");
        } else {
            fill(this.color);
        }

        beginShape();
        this.coordinatons.forEach(
            function(item, idx) {
                vertex(item.x, item.y);
            }
        );
        endShape(CLOSE);

        if ('male_rm' == label || 'female_rm' == label) {
            var adjustment = label.length >= 3 ? 3.5 : 6;
            var img = images[label];
            image(img, this.boundary.midX - img.width / 2, this.boundary.midY - img.height / 2);
        } else {
            if (label != "") {
                fill(this.tcolor);
                textSize(tsize);
                var adjustment = label.length >= 3 ? 3.5 : 6;
                text(label, this.boundary.midX - this.boundary.width / adjustment, this.boundary.midY + this.boundary.height / 6);
            }
        }
    };

    this.findboundary = function() {
        var boundary = {
            minX: Number.MAX_SAFE_INTEGER,
            minY: Number.MAX_SAFE_INTEGER,
            maxX: 0,
            maxY: 0,
            midX: 0,
            midY: 0,
            width: 0,
            height: 0
        };

        this.coordinatons.forEach(
            function(item, idx) {
                var x = item.x;
                var y = item.y;

                if (x < boundary.minX) {
                    boundary.minX = x;
                }

                if (y < boundary.minY) {
                    boundary.minY = y;
                }

                if (x > boundary.maxX) {
                    boundary.maxX = x;
                }

                if (y > boundary.maxY) {
                    boundary.maxY = y;
                }

            }
        );

        boundary.width = boundary.maxX - boundary.minX;
        boundary.height = boundary.maxY - boundary.minY;
        boundary.midX = boundary.minX + (boundary.maxX - boundary.minX) / 2;
        boundary.midY = boundary.minY + (boundary.maxY - boundary.minY) / 2;
        return boundary;
    };

    this.click = function() {
        this.selected = false;
        if ((this.boundary.minX < mouseX && this.boundary.maxX > mouseX) &&
            (this.boundary.minY < mouseY && this.boundary.maxY > mouseY)) {
            $('#room-info').html("<h3>I am in " + this.label +
                "</h3><img src='assets/room_info/floor_5/501/teacher.png' alt='Smiley face' height='42' width='42'>");
            this.selected = true;
        }
    };
}