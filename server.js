var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var functions = require("./Class/function")
var fs = require('fs');
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
io.on('connection', function (socket) {

});
m = 30;
n = 30;
grassArr = [];
grassEaterArr = [];
hunterArr = [];
monsterArr = [];
bombArr = [];
grassEaterSpawnArr = [];
Season = "winter";
statisticGrass = []
statisticGrassEater = []
statisticBomb = []
statisticGrassEaterSpawn = []
statisticHumter = []
statisticMonster = []





var Grass = require("./Class/GrassClass")
var GrassEater = require("./Class/GrassEaterClass")
var Hunter = require("./Class/HunterClass")
var Monster = require("./Class/MonsterClass")
var Bomb = require("./Class/BombClass")
var GrassEaterSpawn = require("./Class/GrassEaterSpawnClass")
matrix = functions.fillMatrix(m, n);




functions.ChangeRandomAtribute(5, 100)
functions.ChangeRandomAtribute(6, 50)
// check numbers and save in array
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            var gress = new Grass(x, y, 1);
            grassArr.push(gress);
        }
        else if (matrix[y][x] == 2) {
            var gt = new GrassEater(x, y, 1);
            grassEaterArr.push(gt);
        }
        else if (matrix[y][x] == 3) {
            var hn = new Hunter(x, y, 1);
            hunterArr.push(hn);
        }
        else if (matrix[y][x] == 4) {
            var ms = new Monster(x, y, 2);
            monsterArr.push(ms);
        }
        else if (matrix[y][x] == 5) {
            var bm = new Bomb(x, y, 2);
            bombArr.push(bm)
        }
        else if (matrix[y][x] == 6) {
            var gts = new GrassEaterSpawn(x, y, 1);
            grassEaterSpawnArr.push(gts)
        }
    }
}



var HasNotAlerted = true;
setInterval(randomSeason, 3000)

function randomSeason() {
    if (Season == "winter") {
        Season = "spring"
    }
    else if (Season == "spring") {
        Season = "summer"
    }
    else if (Season == "summer") {
        Season = "autumn"
    }
    else if (Season == "autumn") {
        Season = "winter"
    }
    io.sockets.emit("Season", Season)

}


var Interval = setInterval(DrawMatrix, 1000)
function DrawMatrix() {
    // calling classes

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

    for (var i in bombArr) {
        bombArr[i].explode()
    }

    for (var i in grassEaterSpawnArr) {
        grassEaterSpawnArr[i].explode()

    }
    //Checking if grass was won
    if (grassArr.length == n * m && HasNotAlerted) {
        io.sockets.emit("won", true);
        HasNotAlerted = false;
        clearInterval(Interval)
    }
    else if (grassArr.length == 0 && grassEaterArr.length == 0 && hunterArr.length == 0 && monsterArr == 0 && bombArr == 0 && grassEaterSpawnArr.length == 0 && HasNotAlerted) {
        io.sockets.emit("won", false);
        HasNotAlerted = false;
        clearInterval(Interval)


    }



    io.sockets.emit("matrix", matrix);

}
//statistic of hummans
function writingStatitistic() {
    var grassLengthNow = grassArr.length;
    var grassEaterLengthNow = grassEaterArr.length;
    var bombLengthNow = bombArr.length;
    var GrassEaterSpawnLengthNow = grassEaterSpawnArr.length;
    var HunterLengthNow = hunterArr.length;
    var MonsterLengthNow = monsterArr.length;



    if (grassLengthNow >= grassArr.length) {
        statisticGrass.push(grassLengthNow)
    }
    if (grassEaterLengthNow >= grassEaterArr.length) {
        statisticGrassEater.push(grassEaterLengthNow)
    }
    if (bombLengthNow >= bombArr.length) {
        statisticBomb.push(bombLengthNow)
    }
    if (GrassEaterSpawnLengthNow >= grassEaterSpawnArr.length) {
        statisticGrassEaterSpawn.push(GrassEaterSpawnLengthNow)
    }
    if (HunterLengthNow >= hunterArr.length) {
        statisticHumter.push(HunterLengthNow)
    }
    if (MonsterLengthNow >= monsterArr.length) {
        statisticMonster.push(MonsterLengthNow)
    }

    var GrassJSON = JSON.stringify(statisticGrass);
    var GrassEaterJSON = JSON.stringify(statisticGrassEater);
    var BombJSON = JSON.stringify(statisticBomb);
    var GrassEaterSpawnJSON = JSON.stringify(statisticGrassEaterSpawn);
    var HunterJSON = JSON.stringify(statisticHumter);
    var MonsterJSON = JSON.stringify(statisticMonster);





    fs.writeFileSync('statistic.json', '{\n\n' + '"Grass":' + GrassJSON + ",\n" + '"GrassEater":' + GrassEaterJSON + ",\n" + '"Bomb":' + BombJSON + ",\n" + '"GrassEaterSpawn":' + GrassEaterSpawnJSON + ",\n" + '"Hunter":' + HunterJSON + ",\n" + '"Monster":' + MonsterJSON + "\n\n }", function (err) { console.log(err) });

}
setInterval(writingStatitistic, 5000);




