//creating random matrix with random nubers betwen min , max

var n = 30;
var m = 30;
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function fillMatrix(n, m) {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix.push([]);
        for (var j = 0; j < m; j++) {
            matrix[i].push(Math.round(getRandomArbitrary(0, 4)))
        }
    }
    return matrix
}
//Get direction 
function getDirection(x, y, diameter) {
    if (diameter == 1) {
        var matrix = [
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1],
            [x - 1, y],
            [x,y],
            [x + 1, y],
            [x - 1, y + 1],
            [x, y + 1],
            [x + 1, y + 1]
        ]

    }
    else if (diameter == 2) {
        var matrix = [
            [x - 2, y - 2],
            [x - 1, y - 2],
            [x, y - 2],
            [x + 1, y - 2],
            [x + 2, y - 2],
            [x - 2, y - 1],
            [x - 1, y - 1],
            [x, y - 1],
            [x + 1, y - 1],
            [x + 2, y - 1],
            [x - 2, y],
            [x - 1, y],
            [x, y],
            [x + 1, y],
            [x + 2, y],
            [x - 2, y + 1],
            [x - 1, y + 1],
            [x, y + 1],
            [x + 1, y + 1],
            [x + 2, y + 1],
            [x - 2, y + 2],
            [x - 1, y + 2],
            [x, y + 2],
            [x + 1, y + 2],
            [x + 2, y + 2]
        ]
    }
    return matrix

}
// Get Random Value From Array
function GetRandomValueFromArray(a) {
    var randomValue = a[Math.floor(a.length * Math.random())];
    return randomValue
}
// Change matrix random atribute to a
function ChangeRandomAtribute(a,b) {
    for (var i = 0; i < b; i++) {
        matrix[Math.round(getRandomArbitrary(0, m - 1))][Math.round(getRandomArbitrary(0, n - 1))] = a
    }
}