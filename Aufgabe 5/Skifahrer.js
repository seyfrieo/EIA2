//Aufgabe: (Aufgabe 05)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (17.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    var Skifahrer = (function () {
        function Skifahrer(_x, _y, _dx, _dy, _color) {
            this.x = _x;
            this.y = _y;
            this.dx = _dx;
            this.dy = _dy;
            this.color = _color;
        }
        Skifahrer.prototype.move = function () {
            if (this.y > 800) {
                this.x = 0;
                this.y = 400;
                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            }
            this.x += this.dx;
            this.y += this.dy;
            this.draw();
        };
        Skifahrer.prototype.draw = function () {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.fillStyle = "this.color";
            Aufgabe5.crc2.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.fillStyle = "this.color";
            Aufgabe5.crc2.fillRect(this.x - 5, this.y, 10, 30);
            Aufgabe5.crc2.fillStyle = "this.color";
            Aufgabe5.crc2.fillRect(this.x - 20, this.y + 30, 40, 5);
            Aufgabe5.crc2.fillStyle = "this.color";
            Aufgabe5.crc2.fillRect(this.x - 20, this.y + 23, 40, 5);
        };
        return Skifahrer;
    }());
    Aufgabe5.Skifahrer = Skifahrer;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Skifahrer.js.map