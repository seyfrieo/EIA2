//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.


namespace Aufgabe6 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D; //Variable wird in andere Dateien mit selbem Namespace exportiert

    let image: ImageData;
    
    let objects: MovingObjects[] = [];

//    let nSkifahrer: number = 10; Jetzt direkt in der For-Schleife
//    let nSchnee: number = 1000;
//    let nWolken: number = 3;
//    
    let nbaeume: Baeume[] = [];


    function init(): void { //Hauptfunktion (vormals "Let it Snow")
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
            let s: Skifahrer = new Skifahrer(0, 400);
            objects.push(s); //s wird in arrayObjects gepusht (s = neue Instanz der Klasse Skifahrer; eine Instanz = 1 Skifahrer)
        }
        
        //Schleife Schneeflocken
       for (i = 0; i < 1000; i++) {
            let s: Schnee = new Schnee(Math.random() * 800, Math.random() * 600);
            objects.push(s);
        }

        //Schleife Wolken
        for (i = 0; i < 3; i++) {
            let s: Wolken = new Wolken(0 + Math.random() * 800, 0 + Math.random() * 100 + 20);
            objects.push(s);
        }
        
        //Schleife Bäume
        for (i = 0; i < 5; i++) {//Braucht eigentlich keine eigene Datei, aber Main.ts so sauberer
            nbaeume[i] = new Baeume( 40 + Math.random() * 300, 500 + Math.random() * 50);

        }

        //Hintergrundbild speichern
        image = crc2.getImageData(0, 0, 800, 600);

        animate();

    }

    function animate(): void {
        crc2.clearRect(0, 0, 800, 600);  // Hintergrund refreshen
        crc2.putImageData(image, 0, 0);
        
         for (i = 0; i < objects.length; i++) {
            let s: MovingObjects = objects[i];
            s.move();
        }

        //Move Bäume
        for (i = 0; i < nbaeume.length; i++) {
            let s: Baeume = nbaeume[i]; //Baeume=Datentyp = Speichert i-te Stelle des Arrays nbaeume
            s.draw(); //Draw-Methode der i-ten Stelle des Arrays wird aufgerufen und ausgeführt
        }

        window.setTimeout(animate, 20);
    }

}