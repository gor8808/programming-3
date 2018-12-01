///////////////////// HUNTER ///////////////////////////////
class Hunter {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 11;
        this.directions = getDirection(this.x, this.y, 1)

    }
    getNewDirection() {
        this.directions = getDirection(this.x, this.y, 1)
    }
    chooseCell(character) {
        this.getNewDirection()
        var foundGrass = [];
        //found
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    foundGrass.push(this.directions[i]);
                }
            }
        }
        return foundGrass;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 10) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3;
            var hn = new Hunter(x, y)
            hunterArr.push(hn);

        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        this.energy--
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

        }
    }
    eat() {
        var food = random(this.chooseCell(2));
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
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
            for (var i in hunterArr) {
                if (hunterArr[i].x == this.x && hunterArr[i].y == this.y) {
                    hunterArr.splice(i, 1)
                }
            }

        }
    }


}