///////////////////// HUNTER ///////////////////////////////
var functions = require("./function.js")
var LivingCreature = require("./LivingCreature.js")
module.exports = class Hunter extends LivingCreature {
    constructor(x, y, diameter) {
        super(x, y, diameter)
        this.energy = 11;
        this.newDiameter = 1;
    }
    getNewDirection() {
        if (Season == "summer") {
            this.newDiameter = 2;
        }
        else if (Season == "winter") {
            this.newDiameter = 1;
        }
        else if (Season == "spring" || Season == "autumn") {
            this.newDiameter = 1;
        }
        this.directions = functions.getDirection(this.x, this.y, this.newDiameter)
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
            matrix[y][x] = 3;
            var hn = new Hunter(x, y)
            hunterArr.push(hn);

        }
    }
    move() {
        var arr = this.chooseCell(0);
        var empty = functions.GetRandomValueFromArray(arr);
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
        var arr = this.chooseCell(2);
        var food = functions.GetRandomValueFromArray(arr);
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