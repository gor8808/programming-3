///////////////////// HUNTER ///////////////////////////////
class Hunter extends LivingCreature {
    constructor(x, y, diameter) {
        super(x, y, diameter)
        this.energy = 11;
    }
    getNewDirection() {
        this.directions = getDirection(this.x, this.y, 1)
    }
    chooseCell(character) {
        this.getNewDirection()
        return super.chooseCell(character)
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