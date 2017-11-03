var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", schneechaos);
    var crc2;
    var schneeflockenX = [];
    var schneeflockenY = [];
    var image;
    function schneechaos() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        var crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "#E0F2F7";
        crc2.fillRect(0, 0, 800, 600);
        crc2.beginPath();
        crc2.arc(330, 350, 300, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#F3E2A9";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(350, 150);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CAE1FF";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(600, 600);
        crc2.lineTo(-200, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#B0C4DE";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(650, 250);
        crc2.lineTo(1000, 600);
        crc2.lineTo(300, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#A2B5CD";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 800);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(800, 500);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(0, 280);
        crc2.lineTo(800, 480);
        crc2.stroke();
        crc2.beginPath();
        crc2.arc(200, 100, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFB6C1";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(240, 100, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFB6C1";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(590, 150, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFB6C1";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(640, 150, 40, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFB6C1";
        crc2.fill();
        drawTree(150, 550, "#90EE90");
        for (var i = 0; i < 5; i++) {
            var x = 30 + Math.random() * 450;
            var y = 500 + Math.random() * 50;
            drawTree(x, y, "#90EE90");
        }
        for (var i = 0; i < 100; i++) {
            schneeflockenX[i] = 0 + Math.random() * 800;
            schneeflockenY[i] = 0 + Math.random() * 600;
        }
        image = crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        console.log("Timeout");
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0, 0);
        for (var i = 0; i < schneeflockenX.length; i++) {
            if (schneeflockenY[i] > 600) {
                schneeflockenY[i] = 0;
            }
            schneeflockenY[i] += Math.random();
            snowflake(schneeflockenX[i], schneeflockenY[i]);
        }
        window.setTimeout(animate, 20);
    }
    function snowflake(_x, _y) {
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
    }
    function drawTree(_x, _y, _color) {
        crc2.fillStyle = "#90EE90";
        crc2.fillRect(_x, _y, 20, 30);
        crc2.beginPath();
        crc2.moveTo(_x - 30, _y);
        crc2.lineTo(_x + 10, _y - 100);
        crc2.lineTo(_x + 50, _y);
        crc2.closePath();
        crc2.fillStyle = _color;
        crc2.fill();
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=SkiTwo.js.map