var side = 20;
var m = 30;
var n = 30;
var socket = io();
Season = ""
//setup for j5
function setup() {
    frameRate(30);
    noStroke()
    createCanvas(m * side, n * side);
    background('#acacac');
}

var HasNotAlerted = true;

//j5 function
function drawMatrix(matrix) {

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
                if (Season == "winter") {
                    fill("#a0e5d6");
                }
                else if (Season == "spring") {
                    fill("#eae477");
                }
                else if (Season == "summer") {
                    fill("#9def7f")
                }
                else if (Season == "autumn") {
                    fill("#e58220")
                }

            }

            rect(x * side, y * side, side, side);

        }
    }
}
function alertWhenFinish(result) {
    if (result == true) {
        alert("Grass Won");
    }
    else if (result == false) {
        alert("It`s Draw")
    }
}
socket.on("matrix", drawMatrix);
socket.on("won", alertWhenFinish);
socket.on("Season", function (S) {
    Season = S;
})







