//Aufgabe: (Aufgabe 05)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (17.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Aufgabe5 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let i: number;
    let image: ImageData;

    let skifahrer: Skifahrer[] = [];
    let schnee: Schnee[] = [];
    let wolken: Wolken[] = [];
    let baeume: Baeume[] = [];


    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");

        // Hintergrund
        crc2.fillStyle = "#E0F2F7";
        crc2.fillRect(0, 0, 800, 600);

        //Sonne
        crc2.beginPath();
        crc2.arc(330, 350, 300, 0, 2 * Math.PI);
        crc2.stroke();
        crc2.fillStyle = "#F3E2A9";
        crc2.fill();


        //BergigerBerg 2
        crc2.beginPath();
        crc2.moveTo(350, 150);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#CAE1FF";
        crc2.fill();

        //Bergiger Berg 1
        crc2.beginPath();
        crc2.moveTo(100, 50);
        crc2.lineTo(600, 600);
        crc2.lineTo(-200, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#B0C4DE";
        crc2.fill();

        //Bergiger Berg 3
        crc2.beginPath();
        crc2.moveTo(650, 250);
        crc2.lineTo(1000, 600);
        crc2.lineTo(300, 600);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#A2B5CD";
        crc2.fill();

        //Pistige Piste
        crc2.beginPath();
        crc2.moveTo(0, 400);
        crc2.lineTo(800, 600);
        crc2.lineTo(0, 800);
        crc2.closePath();
        crc2.stroke();
        crc2.fillStyle = "#ffffff";
        crc2.fill();

        //Skiliftiger Skilift
        crc2.beginPath();
        crc2.moveTo(0, 300);
        crc2.lineTo(800, 500);
        crc2.stroke();
        crc2.beginPath();
        crc2.moveTo(0, 280);
        crc2.lineTo(800, 480);
        crc2.stroke();

        
        //Schleife Skifahrer
        for (i = 0; i < 5; i++) {
            skifahrer[i] = new Skifahrer(0, 400, Math.random() * 15, Math.random() * 7, "hsl(" + Math.random() * 400 + ", 100%, 50%)");

        }
        
        //Schleife für Schneeflocken
        for (i = 0; i < 1000; i++) {
            schnee[i] = new Schnee(Math.random() * 800, Math.random() * 600);
        }

        //Schleife Wolken
        for (i = 0; i < 3; i++) {
            wolken[i] = new Wolken(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
        }
        
        //Schleife Bäume
        for (i = 0; i < 5; i++) {
            baeume[i] = new Baeume( 40 + Math.random() * 300, 500 + Math.random() * 50);

        }

        //Hintergrundbild speichern
        image = crc2.getImageData(0, 0, 800, 600);

        animate();

    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);  // Hintergrund refreshen
        crc2.putImageData(image, 0, 0);

        //Move Skifahrer
        for (i = 0; i < skifahrer.length; i++) {
            let s: Skifahrer = skifahrer[i];
            s.move();
        }


        //Move Schneeflocken
        for (i = 0; i < schnee.length; i++) {
            let s: Schnee = schnee[i];
            s.move();
        }

        //Move Wolken
        for (i = 0; i < wolken.length; i++) {
            let s: Wolken = wolken[i];
            s.move();
        }

        //Move Bäume
        for (i = 0; i < baeume.length; i++) {
            let s: Baeume = baeume[i];
            s.draw();
        }

        window.setTimeout(animate, 20);
    }

}