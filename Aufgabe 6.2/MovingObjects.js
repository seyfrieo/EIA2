//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe6;
(function (Aufgabe6) {
    var MovingObjects = (function () {
        function MovingObjects(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        MovingObjects.prototype.draw = function () { };
        MovingObjects.prototype.move = function () { };
        return MovingObjects;
    }());
    Aufgabe6.MovingObjects = MovingObjects;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=MovingObjects.js.map