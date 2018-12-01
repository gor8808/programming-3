////////////////   GRASS   ////////////////////////
class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = getDirection(this.x, this.y, 1)

    }
    chooseCell(character) {
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