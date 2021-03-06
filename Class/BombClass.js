//////////   Bomb    ////////////////////
var LivingCreature = require("./LivingCreature.js");
var functions = require("./function.js")

module.exports = class Bomb extends LivingCreature {
    constructor(x, y, diameter) {
        super(x, y)
        this.directions = functions.getDirection(this.x, this.y, diameter)
        this.energy = 0;
        this.maxEnergy = 200;
    }


    explode() {
        if (Season == "winter") {
            this.maxEnergy = 300;

        }
        else if (Season == "summer") {
            this.maxEnergy = 150;

        }
        else if (Season == "spring") {
            this.maxEnergy = 200;
        }
        else if (Season == "autumn") {
            this.maxEnergy = 190;

        }
        this.directions = this.chooseCell("all")

        for (var i in this.directions) {
            this.energy++
            if (this.energy > this.maxEnergy) {
                this.energy--
                var x = this.directions[i][0]
                var y = this.directions[i][1]
                if (matrix[y][x] == 1) {
                    for (var i in grassArr) {
                        if (grassArr[i].x == x && grassArr[i].y == y) {
                            grassArr.splice(i, 1)
                            matrix[y][x] = 0
                        }
                    }
                }
                else if (matrix[y][x] == 2) {
                    for (var i in grassEaterArr) {
                        if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                            grassEaterArr.splice(i, 1)
                            matrix[y][x] = 0
                        }
                    }
                }
                else if (matrix[y][x] == 3) {
                    for (var i in hunterArr) {
                        if (hunterArr[i].x == x && hunterArr[i].y == y) {
                            hunterArr.splice(i, 1)
                            matrix[y][x] = 0
                        }
                    }
                }
                else if (matrix[y][x] == 4) {
                    for (var i in monsterArr) {
                        if (monsterArr[i].x == x && monsterArr[i].y == y) {
                            monsterArr.splice(i, 1)
                            matrix[y][x] = 0
                        }
                    }
                }
                else if (matrix[y][x] == 5) {
                    for (var i in bombArr) {
                        if (bombArr[i].x == x && bombArr[i].y == y) {
                            bombArr.splice(i, 1)
                            matrix[y][x] = 0
                        }
                    }
                }





            }
        }


    }





}

