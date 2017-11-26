//Aufgabe: (Aufgabe 05)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (17.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    var Baeume = (function () {
        function Baeume(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Baeume.prototype.draw = function () {
            Aufgabe5.crc2.fillStyle = "#90EE90";
            Aufgabe5.crc2.fillRect(this.x, this.y, 20, 30);
            Aufgabe5.crc2.beginPath();
            Aufgabe5.crc2.moveTo(this.x - 30, this.y);
            Aufgabe5.crc2.lineTo(this.x + 10, this.y - 100);
            Aufgabe5.crc2.lineTo(this.x + 50, this.y);
            Aufgabe5.crc2.closePath();
            Aufgabe5.crc2.fillStyle = this.color;
            Aufgabe5.crc2.fill();
        };
        return Baeume;
    }());
    Aufgabe5.Baeume = Baeume;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Baeume.js.map