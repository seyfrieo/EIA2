//Aufgabe: (Aufgabe 05)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (17.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    var Schnee = (function () {
        function Schnee(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Schnee.prototype.move = function () {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
            this.draw();
        };
        Schnee.prototype.draw = function () {
            Aufgabe5.crc2.fillStyle = "#ffffff";
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe5.crc2.fill();
        };
        return Schnee;
    }());
    Aufgabe5.Schnee = Schnee;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Schnee.js.map