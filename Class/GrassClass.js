////////////////   GRASS   ////////////////////////
class Grass extends LivingCreature {
    constructor(x, y,diameter) {
        super(x, y, diameter)
        this.multiply = 0;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        
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