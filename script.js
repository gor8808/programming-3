var matrix = fillMatrix(n, m);
var side = 20
var grassArr = [];
var grassEaterArr = [];
var hunterArr = [];
var monsterArr = [];
var bombArr = [];
var grassEaterSpawnArr = []

ChangeRandomAtribute(5, 100)
ChangeRandomAtribute(6, 50)
// check numbers and save in array
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            var gress = new Grass(x, y, 1)
            grassArr.push(gress);
        }
        else if (matrix[y][x] == 2) {
            var gt = new GrassEater(x, y)
            grassEaterArr.push(gt);
        }
        else if (matrix[y][x] == 3) {
            var hn = new Hunter(x, y)
            hunterArr.push(hn);
        }
        else if (matrix[y][x] == 4) {
            var ms = new Monster(x, y)
            monsterArr.push(ms);
        }
        else if (matrix[y][x] == 5) {
            var bm = new Bomb(x, y)
            bombArr.push(bm)
        }
        else if (matrix[y][x] == 6) {
            var gts = new GrassEaterSpawn(x, y)
            grassEaterSpawnArr.push(gts)
        }
    }
}


//setup for j5
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}

var HasNotAlerted = true;

//j5 function
function draw() {

    //draw matrix
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#A3371F");
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
            }
            else if (matrix[y][x] == 6) {
                fill("aqua");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side);

        }
    }


    // calling classes
    // /*
    for (var i in grassArr) {
        grassArr[i].mult()
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].mult()
        grassEaterArr[i].move()
        grassEaterArr[i].eat()
        grassEaterArr[i].die()
    }

    for (var i in hunterArr) {
        hunterArr[i].mult()
        hunterArr[i].move()
        hunterArr[i].eat()
        hunterArr[i].die()
    }

    for (var i in monsterArr) {
        monsterArr[i].mult()
        monsterArr[i].move()
        monsterArr[i].eat()
        monsterArr[i].die()

    }
    // */
    for (var i in bombArr) {
        bombArr[i].explode()
    }

    for (var i in grassEaterSpawnArr) {
        grassEaterSpawnArr[i].explode()

    }
    //Checking if grass was won
    if (grassArr.length == n * m && HasNotAlerted) {
        alert("Grass won")
        HasNotAlerted = false
    }
    else if (grassArr.length == 0 && grassEaterArr.length == 0 && hunterArr.length == 0 && monsterArr == 0 && bombArr == 0 && grassEaterSpawnArr.length == 0 && HasNotAlerted) { 
        alert("its draw")
        HasNotAlerted = false
    }



}
