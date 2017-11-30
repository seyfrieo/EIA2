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
    var Schnee = (function (_super) {
        __extends(Schnee, _super);
        function Schnee(_x, _y) {
            _super.call(this, _x, _y);
        }
        Schnee.prototype.move = function () {
            if (this.y > 600) {
                this.y = 0;
            }
            this.y += Math.random();
            this.draw();
        };
        Schnee.prototype.draw = function () {
            Aufgabe6.crc2.fillStyle = "#ffffff";
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
        };
        return Schnee;
    }(Aufgabe6.MovingObjects));
    Aufgabe6.Schnee = Schnee;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Schnee.js.map