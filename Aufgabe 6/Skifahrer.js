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
    var Skifahrer = (function (_super) {
        __extends(Skifahrer, _super);
        function Skifahrer(_x, _y, _dx, _dy, _color) {
            _super.call(this, _x, _y);
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
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.fillStyle = "this.color";
            Aufgabe6.crc2.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.fillStyle = "this.color";
            Aufgabe6.crc2.fillRect(this.x - 5, this.y, 10, 30);
            Aufgabe6.crc2.fillStyle = "this.color";
            Aufgabe6.crc2.fillRect(this.x - 20, this.y + 30, 40, 5);
            Aufgabe6.crc2.fillStyle = "this.color";
            Aufgabe6.crc2.fillRect(this.x - 20, this.y + 23, 40, 5);
        };
        return Skifahrer;
    }(MovingObjects));
    Aufgabe6.Skifahrer = Skifahrer;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Skifahrer.js.map