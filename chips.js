function pacMan() {
    var i = 2; //图片变换
    var timeR, timeL, timeU, timeD //四种方向
    timeR = setInterval(function() {
        i++;
        if (i > 2) {
            i = 1;
        }
        document.getElementById("pac").src = "img/man" + i + "_r.png"
    }, 200)

    var pac = document.getElementById("pac")
    var pacEle = {
        entity: pac,
        x: pac.offsetLeft,
        y: pac.offsetTop
    }

    document.onkeydown = function(e) {
        test()
        if (e.key == "ArrowRight") {
            document.getElementById("pac").src = "img/man2_r.png"
            clearInterval(timeL)
            clearInterval(timeU)
            clearInterval(timeD)
            clearInterval(timeR)
            timeR = setInterval(function() {
                i++;
                if (i > 2) {
                    i = 1;
                }
                document.getElementById("pac").src = "img/man" + i + "_r.png"
            }, 200)

            pacEle.x += 10
            pac.style.left = pacEle.x + "px"
            if (xx == 1) {
                pacEle.x -= 20
                pac.style.left = pacEle.x + "px"
                xx = 0;
            }
        }
        if (e.key == "ArrowLeft") {
            document.getElementById("pac").src = "img/man2_l.png"
            clearInterval(timeL)
            clearInterval(timeU)
            clearInterval(timeD)
            clearInterval(timeR)
            timeL = setInterval(function() {
                i++;
                if (i > 2) {
                    i = 1;
                }
                document.getElementById("pac").src = "img/man" + i + "_l.png"
            }, 200)
            pacEle.x -= 10
            pac.style.left = pacEle.x + "px"
            if (xx == 1) {
                pacEle.x += 20
                pac.style.left = pacEle.x + "px"
                xx = 0;
            }
        }
        if (e.key == "ArrowUp") {
            document.getElementById("pac").src = "img/man2_u.png"
            clearInterval(timeL)
            clearInterval(timeU)
            clearInterval(timeD)
            clearInterval(timeR)
            timeU = setInterval(function() {
                i++;
                if (i > 2) {
                    i = 1;
                }
                document.getElementById("pac").src = "img/man" + i + "_u.png"
            }, 200)
            pacEle.y -= 10
            pac.style.top = pacEle.y + "px"
            if (xx == 1) {
                pacEle.y += 20
                pac.style.top = pacEle.y + "px"
                xx = 0;
            }
        }
        if (e.key == "ArrowDown") {
            document.getElementById("pac").src = "img/man2_d.png"
            clearInterval(timeL)
            clearInterval(timeU)
            clearInterval(timeD)
            clearInterval(timeR)
            timeD = setInterval(function() {
                i++;
                if (i > 2) {
                    i = 1;
                }
                document.getElementById("pac").src = "img/man" + i + "_d.png"
            }, 200)
            pacEle.y += 10
            pac.style.top = pacEle.y + "px"
            if (xx == 1) {
                pacEle.y -= 20
                pac.style.top = pacEle.y + "px"
                xx = 0;
            }
        }
    }
}