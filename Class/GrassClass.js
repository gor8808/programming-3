////////////////   GRASS   ////////////////////////
var LivingCreature = require("./LivingCreature.js") 
var functions = require("./function")

module.exports = class Grass extends LivingCreature {
    constructor(x, y,diameter) {
        super(x, y, diameter)
        this.multiply = 0;
    }
    mult() {
        var arr = this.chooseCell(0);
        var empty = functions.GetRandomValueFromArray(arr);
        
        this.multiply++
        if (empty && this.multiply > 6) {

            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 1;
            var gr = new Grass(x, y, 1)
            grassArr.push(gr);

        }
    }

}