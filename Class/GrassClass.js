////////////////   GRASS   ////////////////////////
var LivingCreature = require("./LivingCreature.js")
var functions = require("./function")

module.exports = class Grass extends LivingCreature {
    constructor(x, y, diameter) {
        super(x, y, diameter)
        this.multiply = 0;
        this.maxMulCount = 6;
    }
    mult() {
        var arr = this.chooseCell(0);
        var empty = functions.GetRandomValueFromArray(arr);

        this.multiply++
        if (Season == "summer") {
            this.maxMulCount = 1;
        }
        else if (Season == "winter") {
            this.maxMulCount = 50;
        }
        else if (Season == "spring" || Season == "autumn") {
            this.maxMulCount = 6;
        }


        if (empty && this.multiply > this.maxMulCount) {

            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 1;
            var gr = new Grass(x, y, 1)
            grassArr.push(gr);

        }
    }

}