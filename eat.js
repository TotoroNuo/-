function test() {
    var pac = document.getElementById("pac");
    //获取四条边
    var pacManCrach = {
        entity: pac,
        pacL: pac.offsetLeft,
        pacT: pac.offsetTop,
        pacR: pac.offsetLeft + pac.offsetWidth,
        pacB: pac.offsetTop + pac.offsetHeight
    }
    var overgame = document.getElementById("overgame");
    //获取四条边
    var overGame = {
        entity: overgame,
        GameL: overgame.offsetLeft,
        GameT: overgame.offsetTop,
        GameR: overgame.offsetLeft + overgame.offsetWidth,
        GameB: overgame.offsetTop + overgame.offsetHeight
    }

    if (pacManCrach.pacR > overGame.GameL && pacManCrach.pacL < overGame.GameR && pacManCrach.pacB > overGame.GameT && pacManCrach.pacT < overGame.GameB) {
        // clearInterval(gameTimea);
        // var Og = document.getElementsByClassName()
        console.log("碰上");
        // alert("游戏结束！！！")
        var jieshu = document.getElementById("jieshu");
        jieshu.style.display = "block";
        clearInterval(gameTimea);
    } else {
        console.log("没碰上");
    }
    //吃豆eat
    eatDou(1)
    eatDou(2)
    eatDou(3)
    eatDou(4)
    eatDou(5)
    eatDou(6)
        // eatDou(7)
        // eatDou(8)
    eatDou(9)
    eatDou(10)
    eatDou(11)
    eatDou(12)
    eatDou(13)
    eatDou(14)
    eatDou(15)
    eatDou(16)
    eatDou(17)
    eatDou(18)
    eatDou(19)
    eatDou(25)
    eatDou(26)
        //墙
    wallUp(1)
    wallUp(2)
    wallUp(3)
    wallUp(4)
    wallUp(5)
    wallUp(6)
    wallUp(7)
    wallUp(8)
    wallUp(9)
    wallUp(10)
    wallUp(11)
    wallUp(12)
    wallUp(13)

    // wallCenter()
    wallCenter(1)
    wallCenter(2)
    wallCenter(3)
    wallCenter(4)
    wallCenter(5)

    wallDoor(1)
    wallDoor(2)
    wallDoor(3)
    wallDoor(4)

    function eatDou(t) {
        var dou = document.getElementsByClassName("dou" + t);
        var Dou = {
            entity: dou[0],
            GameL: dou[0].offsetLeft,
            GameT: dou[0].offsetTop,
            GameR: dou[0].offsetLeft + dou[0].offsetWidth,
            GameB: dou[0].offsetTop + dou[0].offsetHeight
        }
        if (pacManCrach.pacR > Dou.GameL && pacManCrach.pacL < Dou.GameR && pacManCrach.pacB > Dou.GameT && pacManCrach.pacT < Dou.GameB) {
            console.log("碰到1");
            var doux = document.getElementsByClassName("dou" + t)
            doux[0].style.backgroundColor = "#000";
        }
        if (pacManCrach.pacR > Dou.GameL && pacManCrach.pacL < Dou.GameR && pacManCrach.pacB < Dou.GameT && pacManCrach.pacT > Dou.GameB) {
            console.log("碰到1");
            var doux = document.getElementsByClassName("dou" + t)
            doux[0].style.backgroundColor = "#000";
        }
        if (pacManCrach.pacT < Dou.GameB && pacManCrach.pacT > Dou.GameT && pacManCrach.pacL < Dou.GameL && pacManCrach.pacR > Dou.GameR) {
            console.log("碰到1");
            var doux = document.getElementsByClassName("dou" + t)
            doux[0].style.backgroundColor = "#000";
        }
    }

    function wallUp(w) {
        var up = document.getElementsByClassName("up" + w)
        var Up = {
            entity: up[0],
            wallL: up[0].offsetLeft,
            wallT: up[0].offsetTop,
            wallR: up[0].offsetLeft + up[0].offsetWidth,
            wallB: up[0].offsetTop + up[0].offsetHeight
        }
        if (pacManCrach.pacR > Up.wallL && pacManCrach.pacL < Up.wallR && pacManCrach.pacB > Up.wallT && pacManCrach.pacT < Up.wallB) {
            console.log("墙");
            // var doux = document.getElementsByClassName("up" + w)
            // doux[0].style.backgroundColor = "#000";
            xx = 1;
        }
        if (pacManCrach.pacR > Up.wallL && pacManCrach.pacL < Up.wallR && pacManCrach.pacB < Up.wallT && pacManCrach.pacT > Up.wallB) {
            console.log("墙");
            // var doux = document.getElementsByClassName("up" + w)
            // doux[0].style.backgroundColor = "#000";
            xx = 1;
        }
    }

    function wallCenter(c) {
        var cen = document.getElementsByClassName("center" + c)
        var Up = {
            entity: cen[0],
            wallL: cen[0].offsetLeft,
            wallT: cen[0].offsetTop,
            wallR: cen[0].offsetLeft + cen[0].offsetWidth,
            wallB: cen[0].offsetTop + cen[0].offsetHeight
        }
        if (pacManCrach.pacR > Up.wallL && pacManCrach.pacL < Up.wallR && pacManCrach.pacB > Up.wallT && pacManCrach.pacT < Up.wallB) {
            console.log("墙");
            // var doux = document.getElementsByClassName("center" + c)
            // doux[0].style.backgroundColor = "#000";
            xx = 1;

        }
        if (pacManCrach.pacR > Up.wallL && pacManCrach.pacL < Up.wallR && pacManCrach.pacB < Up.wallT && pacManCrach.pacT > Up.wallB) {
            console.log("墙");
            // var doux = document.getElementsByClassName("center" + c)
            // doux[0].style.backgroundColor = "#000";
            xx = 1;
        }
    }

    function wallDoor(c) {
        var cen = document.getElementsByClassName("door" + c)
        var Up = {
            entity: cen[0],
            wallL: cen[0].offsetLeft,
            wallT: cen[0].offsetTop,
            wallR: cen[0].offsetLeft + cen[0].offsetWidth,
            wallB: cen[0].offsetTop + cen[0].offsetHeight
        }
        if (pacManCrach.pacR > Up.wallL && pacManCrach.pacL < Up.wallR && pacManCrach.pacB > Up.wallT && pacManCrach.pacT < Up.wallB) {
            console.log("墙");
            // var doux = document.getElementsByClassName("door" + c)
            // doux[0].style.backgroundColor = "#000";
            xx = 1;

        }
        if (pacManCrach.pacR > Up.wallL && pacManCrach.pacL < Up.wallR && pacManCrach.pacB < Up.wallT && pacManCrach.pacT > Up.wallB) {
            console.log("墙");
            // var doux = document.getElementsByClassName("door" + c)
            // doux[0].style.backgroundColor = "#000";
            xx = 1;
        }
    }

    function wallDown(c) {
        var cen = document.getElementsByClassName("down" + c)
        var Up = {
            entity: cen[0],
            wallL: cen[0].offsetLeft,
            wallT: cen[0].offsetTop,
            wallR: cen[0].offsetLeft + cen[0].offsetWidth,
            wallB: cen[0].offsetTop + cen[0].offsetHeight
        }
        if (pacManCrach.pacR > Up.wallL && pacManCrach.pacL < Up.wallR && pacManCrach.pacB > Up.wallT && pacManCrach.pacT < Up.wallB) {
            console.log("墙");
            // var doux = document.getElementsByClassName("door" + c)
            // doux[0].style.backgroundColor = "#000";
            xx = 1;

        }
        if (pacManCrach.pacR > Up.wallL && pacManCrach.pacL < Up.wallR && pacManCrach.pacB < Up.wallT && pacManCrach.pacT > Up.wallB) {
            console.log("墙");
            // var doux = document.getElementsByClassName("door" + c)
            // doux[0].style.backgroundColor = "#000";
            xx = 1;
        }
    }

    // var dou = document.getElementsByClassName("dou1");
    // var Dou = {
    //     entity: dou[0],
    //     GameL: dou[0].offsetLeft,
    //     GameT: dou[0].offsetTop,
    //     GameR: dou[0].offsetLeft + dou[0].offsetWidth,
    //     GameB: dou[0].offsetTop + dou[0].offsetHeight
    // }
    // console.log(Dou.GameL);
    // console.log(Dou.GameT);
    // console.log(Dou.GameR);
    // console.log(Dou.GameB);
    // if (pacManCrach.pacR > Dou.GameL && pacManCrach.pacL < Dou.GameR && pacManCrach.pacB > Dou.GameT && pacManCrach.pacT < Dou.GameB) {
    //     console.log("碰到1");
    //     var doux = document.getElementsByClassName("dou1")
    //     doux[0].style.backgroundColor = "#000";
    // }
    // if (pacManCrach.pacR > Dou.GameL && pacManCrach.pacL < Dou.GameR && pacManCrach.pacB < Dou.GameT && pacManCrach.pacT > Dou.GameB) {
    //     console.log("碰到1");
    //     var doux = document.getElementsByClassName("dou1")
    //     doux[0].style.backgroundColor = "#000";
    // }
    // var dou2 = document.getElementsByClassName("dou2");
    // var Dou2 = {
    //     entity: dou2[0],
    //     GameL: dou2[0].offsetLeft,
    //     GameT: dou2[0].offsetTop,
    //     GameR: dou2[0].offsetLeft + dou2[0].offsetWidth,
    //     GameB: dou2[0].offsetTop + dou2[0].offsetHeight
    // }
    // if (pacManCrach.pacR > Dou2.GameL && pacManCrach.pacL < Dou2.GameR && pacManCrach.pacB > Dou2.GameT && pacManCrach.pacT < Dou2.GameB) {
    //     console.log("碰到2");
    //     var doux = document.getElementsByClassName("dou2")
    //     doux[0].style.backgroundColor = "#000";
    // }
    // if (pacManCrach.pacR > Dou2.GameL && pacManCrach.pacL < Dou2.GameR && pacManCrach.pacB < Dou2.GameT && pacManCrach.pacT > Dou2.GameB) {
    //     console.log("碰到2");
    //     var doux = document.getElementsByClassName("dou2")
    //     doux[0].style.backgroundColor = "#000";
    // }
    // var dou3 = document.getElementsByClassName("dou3");
    // var Dou3 = {
    //     entity: dou3[0],
    //     GameL: dou3[0].offsetLeft,
    //     GameT: dou3[0].offsetTop,
    //     GameR: dou3[0].offsetLeft + dou3[0].offsetWidth,
    //     GameB: dou3[0].offsetTop + dou3[0].offsetHeight
    // }
    // if (pacManCrach.pacR > Dou3.GameL && pacManCrach.pacL < Dou3.GameR && pacManCrach.pacB > Dou3.GameT && pacManCrach.pacT < Dou3.GameB) {
    //     console.log("碰到3");
    //     var doux = document.getElementsByClassName("dou3")
    //     doux[0].style.backgroundColor = "#000";
    // }
    // if (pacManCrach.pacR > Dou3.GameL && pacManCrach.pacL < Dou3.GameR && pacManCrach.pacB < Dou3.GameT && pacManCrach.pacT > Dou3.GameB) {
    //     console.log("碰到3");
    //     var doux = document.getElementsByClassName("dou3")
    //     doux[0].style.backgroundColor = "#000";
    // }
    // var dou4 = document.getElementsByClassName("dou4");
    // var Dou4 = {
    //     entity: dou4[0],
    //     GameL: dou4[0].offsetLeft,
    //     GameT: dou4[0].offsetTop,
    //     GameR: dou4[0].offsetLeft + dou4[0].offsetWidth,
    //     GameB: dou4[0].offsetTop + dou4[0].offsetHeight
    // }
    // if (pacManCrach.pacR > Dou4.GameL && pacManCrach.pacL < Dou4.GameR && pacManCrach.pacB > Dou4.GameT && pacManCrach.pacT < Dou4.GameB) {
    //     console.log("碰到4");
    //     var doux = document.getElementsByClassName("dou4")
    //     doux[0].style.backgroundColor = "#000";
    // }
    // if (pacManCrach.pacR > Dou4.GameL && pacManCrach.pacL < Dou4.GameR && pacManCrach.pacB < Dou4.GameT && pacManCrach.pacT > Dou4.GameB) {
    //     console.log("碰到4");
    //     var doux = document.getElementsByClassName("dou4")
    //     doux[0].style.backgroundColor = "#000";
    // }
    // var dou5 = document.getElementsByClassName("dou5");
    // var Dou5 = {
    //     entity: dou5[0],
    //     GameL: dou5[0].offsetLeft,
    //     GameT: dou5[0].offsetTop,
    //     GameR: dou5[0].offsetLeft + dou5[0].offsetWidth,
    //     GameB: dou5[0].offsetTop + dou5[0].offsetHeight
    // }
    // if (pacManCrach.pacR > Dou5.GameL && pacManCrach.pacL < Dou5.GameR && pacManCrach.pacB > Dou5.GameT && pacManCrach.pacT < Dou5.GameB) {
    //     var doux = document.getElementsByClassName("dou5")
    //     doux[0].style.backgroundColor = "#000";
    //     console.log("碰到5");
    // }
    // if (pacManCrach.pacR > Dou5.GameL && pacManCrach.pacL < Dou5.GameR && pacManCrach.pacB < Dou5.GameT && pacManCrach.pacT > Dou5.GameB) {
    //     var doux = document.getElementsByClassName("dou5")
    //     doux[0].style.backgroundColor = "#000";
    //     console.log("碰到5");
    // }

}