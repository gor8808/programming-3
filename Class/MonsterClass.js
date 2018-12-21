////////////////////////// Monster //////////////////////
var LivingCreature = require("./LivingCreature.js") 
var functions = require("./function.js")
module.exports = class Monster extends LivingCreature {
    constructor(x, y, diameter) {
        super(x, y, diameter)
        this.energy = 4;
        this.newDiameter = 1;
        this.maxEnergy = 15;
    }
    getNewDirection() {
        if(Season == "summer"){
            this.newDiameter = 1;
            
        }
        else if(Season == "winter"){
            this.newDiameter = 1;
        }
        else if(Season == "spring" || Season == "autumn"){
            this.newDiameter = 1;
        }
        this.directions = functions.getDirection(this.x, this.y, this.newDiameter)
    }
    chooseCell(character) {
        this.getNewDirection()
        return super.chooseCell(character)
    }
    mult() {
        if(Season == "summer"){
            this.energy = 2;
            
        }
        else if(Season == "winter"){
            this.energy = 3;
        }
        else if(Season == "spring" || Season == "autumn"){
            this.energy = 4;
        }
        var arr = this.chooseCell(0);
        var empty = functions.GetRandomValueFromArray(arr);
        if (empty && this.energy > this.maxEnergy) {
            var x = empty[0]
            var y = empty[1]
            matrix[y][x] = 4;
            var mn = new Monster(x, y)
            monsterArr.push(mn);

        }
    }
    move() {
        var arr = this.chooseCell(0);
        var empty = functions.GetRandomValueFromArray(arr);
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
        var arrForFood = this.chooseCell(3);
        var food = functions.GetRandomValueFromArray(arrForFood);
        var arrForGrassEat = this.chooseCell(2);
        var GressEat = functions.GetRandomValueFromArray(arrForGrassEat);
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
