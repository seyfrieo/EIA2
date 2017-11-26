//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    var Baeume = (function () {
        function Baeume(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        Baeume.prototype.draw = function () {
            Aufgabe6.crc2.fillStyle = "#90EE90";
            Aufgabe6.crc2.fillRect(this.x, this.y, 20, 30);
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 30, this.y);
            Aufgabe6.crc2.lineTo(this.x + 10, this.y - 100);
            Aufgabe6.crc2.lineTo(this.x + 50, this.y);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
        };
        return Baeume;
    }());
    Aufgabe6.Baeume = Baeume;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Baeume.js.map