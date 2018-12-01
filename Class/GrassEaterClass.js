////////////////////////    GrassEater   ///////////////////////////////

class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.energy = 20;
        this.directions = getDirection(this.x, this.y, 1)

    }
    getNewDirection() {
        this.directions = getDirection(this.x, this.y, 1)
    }
    chooseCell(character) {
        this.getNewDirection()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 10) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2;
            var gt = new GrassEater(x, y)
            grassEaterArr.push(gt);

        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        this.energy--
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

        }
    }

    eat() {
        var food = random(this.chooseCell(1));
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;
            for (var i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;
            this.energy += 2
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                    grassEaterArr.splice(i, 1)
                }
            }

        }
    }

}