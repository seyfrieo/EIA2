//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Aufgabe6;
(function (Aufgabe6) {
    var Wolken = (function (_super) {
        __extends(Wolken, _super);
        function Wolken(_x, _y) {
            _super.call(this, _x, _y);
        }
        Wolken.prototype.move = function () {
            if (this.x > 850) {
                this.x = 0;
            }
            this.x += Math.random();
            this.draw();
        };
        Wolken.prototype.draw = function () {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFB6C1";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + 40, this.y, 30, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#FFB6C1";
            Aufgabe6.crc2.fill();
        };
        return Wolken;
    }(Aufgabe6.MovingObjects));
    Aufgabe6.Wolken = Wolken;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Wolken.js.map