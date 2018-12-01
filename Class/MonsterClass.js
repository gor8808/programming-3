////////////////////////// Monster //////////////////////

class Monster {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.energy = 4;
        this.directions = getDirection(this.x, this.y, 2)
    }
    getNewDirection() {
        this.directions = getDirection(this.x, this.y, 2)
    }
    chooseCell(character) {
        this.getNewDirection()
        var foundHunter = [];
        //found
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    foundHunter.push(this.directions[i]);
                }
            }
        }
        return foundHunter;
    }
    mult() {
        var empty = random(this.chooseCell(0));
        if (empty && this.energy > 15) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 4;
            var mn = new Monster(x, y)
            monsterArr.push(mn);

        }
    }
    move() {
        var empty = random(this.chooseCell(0));
        this.energy--
        if (empty) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

        }
    }

    eat() {
        var food = random(this.chooseCell(3));
        var GressEat = random(this.chooseCell(2))
        if (food) {
            var x = food[0]
            var y = food[1]
            matrix[y][x] = 4;
            matrix[this.y][this.x] = 0;
            for (var i in hunterArr) {
                if (hunterArr[i].x == x && hunterArr[i].y == y) {
                    hunterArr.splice(i, 1)
                }
            }
            this.x = x;
            this.y = y;
            this.energy += 2
        }
        if (GressEat) {
            var x = GressEat[0]
            var y = GressEat[1]
            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            this.x = x
            this.y = y
            this.energy += 2
        }
    }

    die() {
        if (this.energy <= 0 || grassEaterArr.length == 0 && hunterArr.length == 0) {
            matrix[this.y][this.x] = 0;
            for (var i in monsterArr) {
                if (monsterArr[i].x == this.x && monsterArr[i].y == this.y) {
                    monsterArr.splice(i, 1)
                }
            }

        }
    }
}
