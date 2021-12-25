var gameTimea;

function clickGo() {
    var x = 0;
    gameTimea = setInterval(
        function() {
            var div = document.getElementsByClassName("gameTime");
            x++;
            div[0].innerHTML = "游戏时间：" + x + "s";
        }, 1000
    );
    pacMan()
}