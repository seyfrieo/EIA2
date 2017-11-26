//Aufgabe: (Aufgabe 05)
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
var Aufgabe5;
(function (Aufgabe5) {
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
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            crc2.fill();
        };
        return Schnee;
    }(MovingObjects));
    Aufgabe5.Schnee = Schnee;
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Schnee.js.map