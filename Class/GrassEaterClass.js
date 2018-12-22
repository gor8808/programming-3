////////////////////////    GrassEater   ///////////////////////////////
var LivingCreature = require("./LivingCreature.js")
var functions = require("./function.js")


module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, diameter) {
        super(x, y, diameter)
        this.energy = 20;
    }
    getNewDirection() {
        this.directions = functions.getDirection(this.x, this.y, 1)
    }
    chooseCell(character) {
        this.getNewDirection()
        return super.chooseCell(character)
    }

    mult() {
        var arr = this.chooseCell(0);
        var empty = functions.GetRandomValueFromArray(arr);
        if (empty && this.energy > 10) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 2;
            var gt = new GrassEater(x, y)
            grassEaterArr.push(gt);

        }
    }
    move() {
        var arr = this.chooseCell(0);
        var empty = functions.GetRandomValueFromArray(arr);
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
        var arr = this.chooseCell(1);
        var food = functions.GetRandomValueFromArray(arr);
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