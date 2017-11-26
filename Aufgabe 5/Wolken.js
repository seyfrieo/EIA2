//Aufgabe: (Aufgabe 05)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (17.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    var Wolken = (function () {
        function Wolken(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Wolken.prototype.move = function () {
            if (this.x > 850) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
        };
        Wolken.prototype.draw = function () {
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFB6C1";
            Aufgabe5.crc2.fill();
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x + 40, this.y, 30, 0, 2 * Math.PI);
            Aufgabe5.crc2.fillStyle = "#FFB6C1";
            Aufgabe5.crc2.fill();
        };
        return Wolken;
    }());
    Aufgabe5.Wolken = Wolken;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Wolken.js.map