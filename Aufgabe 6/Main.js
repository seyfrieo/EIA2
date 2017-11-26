//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
//*************************************************************
//* Animierte Objekte werden nicht angezeigt. Augenscheinlich *
//* alles richtig aber Fehler noch nicht nicht gefunden.      *
//*                                                           *  
//*************************************************************
var Aufgabe6;
(function (Aufgabe6) {
    window.addEventListener("load", init);
    var i;
    var image;
    var objects = [];
    var nSkifahrer = 10;
    var nSchnee = 1000;
    var nWolken = 3;
    var nbaeume = [];
    function init() {
        var canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Aufgabe6.crc2 = canvas.getContext("2d");
        // Hintergrund
        Aufgabe6.crc2.fillStyle = "#E0F2F7";
        Aufgabe6.crc2.fillRect(0, 0, 800, 600);
        //Sonne
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.arc(330, 350, 300, 0, 2 * Math.PI);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#F3E2A9";
        Aufgabe6.crc2.fill();
        //BergigerBerg 2
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(350, 150);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(0, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#CAE1FF";
        Aufgabe6.crc2.fill();
        //Bergiger Berg 1
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(100, 50);
        Aufgabe6.crc2.lineTo(600, 600);
        Aufgabe6.crc2.lineTo(-200, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#B0C4DE";
        Aufgabe6.crc2.fill();
        //Bergiger Berg 3
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(650, 250);
        Aufgabe6.crc2.lineTo(1000, 600);
        Aufgabe6.crc2.lineTo(300, 600);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#A2B5CD";
        Aufgabe6.crc2.fill();
        //Pistige Piste
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 400);
        Aufgabe6.crc2.lineTo(800, 600);
        Aufgabe6.crc2.lineTo(0, 800);
        Aufgabe6.crc2.closePath();
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.fillStyle = "#ffffff";
        Aufgabe6.crc2.fill();
        //Skiliftiger Skilift
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 300);
        Aufgabe6.crc2.lineTo(800, 500);
        Aufgabe6.crc2.stroke();
        Aufgabe6.crc2.beginPath();
        Aufgabe6.crc2.moveTo(0, 280);
        Aufgabe6.crc2.lineTo(800, 480);
        Aufgabe6.crc2.stroke();
        //Schleife Skifahrer
        for (i = 0; i < n_Skifahrer; i++) {
            var s = new Aufgabe6.Skifahrer(0, 400, Math.random() * 15, Math.random() * 7, "hsl(" + Math.random() * 400 + ", 100%, 50%)");
            objects.push(s);
        }
        //Schleife Schneeflocken
        for (i = 0; i < nSchnee; i++) {
            var s = new Schnee(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }
        //Schleife Wolken
        for (i = 0; i < nWolken; i++) {
            var s = new Aufgabe6.Wolken(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
            objects.push(s);
        }
        //Schleife B�ume
        for (i = 0; i < 5; i++) {
            baeume[i] = new Aufgabe6.Baeume(40 + Math.random() * 300, 500 + Math.random() * 50);
        }
        //Hintergrundbild speichern
        image = Aufgabe6.crc2.getImageData(0, 0, 800, 600);
        animate();
    }
    function animate() {
        Aufgabe6.crc2.clearRect(0, 0, 800, 600); // Hintergrund refreshen
        Aufgabe6.crc2.putImageData(image, 0, 0);
        for (i = 0; i < objects.length; i++) {
            var s = objects[i];
            s.move();
        }
        //Move B�ume
        for (i = 0; i < baeume.length; i++) {
            var s = baeume[i];
            s.draw();
        }
        window.setTimeout(animate, 20);
    }
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Main.js.map