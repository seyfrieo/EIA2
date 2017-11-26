//Aufgabe: (Aufgabe 05)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (17.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe5;
(function (Aufgabe5) {
    window.addEventListener("load", init);
    var i;
    var image;
    var skifahrer = [];
    var schnee = [];
    var wolken = [];
    var baeume = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe5.crc2 = canvas.getContext("2d");
        // Hintergrund
        Aufgabe5.crc2.fillStyle = "#E0F2F7";
        Aufgabe5.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.arc(330, 350, 300, 0, 2 * Math.PI);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#F3E2A9";
        Aufgabe5.crc2.fill();
        //BergigerBerg 2
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(350, 150);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.lineTo(0, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#CAE1FF";
        Aufgabe5.crc2.fill();
        //Bergiger Berg 1
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(100, 50);
        Aufgabe5.crc2.lineTo(600, 600);
        Aufgabe5.crc2.lineTo(-200, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#B0C4DE";
        Aufgabe5.crc2.fill();
        //Bergiger Berg 3
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(650, 250);
        Aufgabe5.crc2.lineTo(1000, 600);
        Aufgabe5.crc2.lineTo(300, 600);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#A2B5CD";
        Aufgabe5.crc2.fill();
        //Pistige Piste
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 400);
        Aufgabe5.crc2.lineTo(800, 600);
        Aufgabe5.crc2.lineTo(0, 800);
        Aufgabe5.crc2.closePath();
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.fillStyle = "#ffffff";
        Aufgabe5.crc2.fill();
        //Skiliftiger Skilift
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 300);
        Aufgabe5.crc2.lineTo(800, 500);
        Aufgabe5.crc2.stroke();
        Aufgabe5.crc2.beginPath();
        Aufgabe5.crc2.moveTo(0, 280);
        Aufgabe5.crc2.lineTo(800, 480);
        Aufgabe5.crc2.stroke();
        //Schleife Skifahrer
        for (i = 0; i < 5; i++) {
            skifahrer[i] = new Aufgabe5.Skifahrer(0, 400, Math.random() * 15, Math.random() * 7, "hsl(" + Math.random() * 400 + ", 100%, 50%)");
        }
        //Schleife f�r Schneeflocken
        for (i = 0; i < 1000; i++) {
            schnee[i] = new Aufgabe5.Schnee(Math.random() * 800, Math.random() * 600);
        }
        //Schleife Wolken
        for (i = 0; i < 3; i++) {
            wolken[i] = new Aufgabe5.Wolken(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
        }
        //Schleife B�ume
        for (i = 0; i < 5; i++) {
            baeume[i] = new Aufgabe5.Baeume(40 + Math.random() * 300, 500 + Math.random() * 50);
        }
        //Hintergrundbild speichern
        image = Aufgabe5.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        Aufgabe5.crc2.clearRect(0, 0, 800, 600); // Hintergrund refreshen
        Aufgabe5.crc2.putImageData(image, 0, 0);
        //Move Skifahrer
        for (i = 0; i < skifahrer.length; i++) {
            var s = skifahrer[i];
            s.move();
        }
        //Move Schneeflocken
        for (i = 0; i < schnee.length; i++) {
            var s = schnee[i];
            s.move();
        }
        //Move Wolken
        for (i = 0; i < wolken.length; i++) {
            var s = wolken[i];
            s.move();
        }
        //Move B�ume
        for (i = 0; i < baeume.length; i++) {
            var s = baeume[i];
            s.draw();
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=Main.js.map