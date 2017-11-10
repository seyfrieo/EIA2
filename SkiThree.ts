namespace Aufgabe3 {

//Aufgabe: (Aufgabe 03)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (29.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
    
    
//Es schneit inzwischen, habe aber bisschen länger gebraucht bis ich's endlich
//verstanden hab. Wolken/Skifahrer mache ich noch nach dem selben Prinzip.
//Grundfunktion sollte so aber korrekt sein.
    
//Update 09.11.2017: I got it!
    
    
window.addEventListener("load", letitsnow);

    let crc2: CanvasRenderingContext2D; //hier ins Array wird wie in eine Schublade meine
    let schneeflockenX: number[] = [];  //Koordinaten der Zeichnung gepackt
    let schneeflockenY: number[] = [];
    
    let wolkenX: number[] = [];
    let wolkenY: number[] = [];
    
    let skifahrerX: number[] = [];
    let skifahrerY: number[] = [];

    var image: any;

function letitsnow(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);
    

    crc2 = canvas.getContext("2d");
    console.log(crc2);

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

    //Baumiger Baum 1
    //crc2.beginPath();
    //crc2.moveTo(100, 400);
    //crc2.lineTo(50, 500);
    //crc2.lineTo(150, 500);
    //crc2.closePath();
    //crc2.fillStyle = "#90EE90";
    //crc2.fill();
    //crc2.beginPath();
    //crc2.moveTo(90, 500);
    //crc2.lineTo(90, 530);
    //crc2.lineTo(110, 530);
    //crc2.lineTo(110, 500);
    //crc2.closePath();
    //crc2.fillStyle = "#90EE90";
    //crc2.fill();
    
 
    //Baumiger Baum 2
    //crc2.beginPath();
    //crc2.moveTo(200, 460);
    //crc2.lineTo(170, 520);
    //crc2.lineTo(230, 520);
    //crc2.closePath();
    //crc2.fillStyle = "#90EE90";
    //crc2.fill();
    //crc2.beginPath();
    //crc2.moveTo(195, 520);
    //crc2.lineTo(195, 535);
    //crc2.lineTo(205, 535);
    //crc2.lineTo(205, 520);
    //crc2.closePath();
    //crc2.fillStyle = "#90EE90";
    //crc2.fill();
    
    //Fluffige Wolke 1
//    crc2.beginPath();
//    crc2.arc(200, 100, 30, 0, 2 * Math.PI);
//    crc2.fillStyle = "#FFB6C1";
//    crc2.fill();
//    crc2.beginPath();
//    crc2.arc(240, 100, 30, 0, 2 * Math.PI);
//    crc2.fillStyle = "#FFB6C1";
//    crc2.fill();
//    
//    //Fluffige Wolke 2
//    crc2.beginPath();
//    crc2.arc(590, 150, 40, 0, 2 * Math.PI);
//    crc2.fillStyle = "#FFB6C1";
//    crc2.fill();
//    crc2.beginPath();
//    crc2.arc(640, 150, 40, 0, 2 * Math.PI);
//    crc2.fillStyle = "#FFB6C1";
//    crc2.fill();
    
    //Let it snow
    //for (let i: number = 0; i < 1000; i++) {
    //    let x: number = 0 + Math.random() * 800;
    //    let y: number = 0 + Math.random() * 600;
    //    drawSnow(x, y, 2, 0, 2 * Math.PI, "#EFF5FB");
   // }
      //Funktion für Schneeflocken
//    function drawSnow(_x1: number, _y1: number, _radius: number, _start: number, _end: number, _color: string): void {
//
//    crc2.beginPath();
//    crc2.arc(_x1, _y1, _radius, _start, _end);
//    crc2.fillStyle = _color;
//    crc2.fill();
//    }
    
    //Funktion für Bäume
       
//    function drawTree(_x: number, _y: number, _color: string): void {
//        
//    crc2.fillStyle = "#90EE90";
//    crc2.fillRect(_x, _y, 20, 30);
//    
//    //Baum
//    crc2.beginPath();
//    crc2.moveTo(_x - 30, _y);
//    crc2.lineTo(_x + 10, _y - 100);
//    crc2.lineTo(_x + 50, _y);
//    crc2.closePath();
//    crc2.fillStyle = _color;
//    crc2.fill();
//    }
    
    //Stand alone tree
    drawTree(150, 550, "#90EE90");
    
    //Zufallsbäume
    for (let i: number = 0; i < 5; i++) {
    
    //Eingrenzung für Bäume
    let x: number = 30 + Math.random() * 450;
    let y: number = 500 + Math.random() * 50;
        
    drawTree(x, y, "#90EE90");
    }
   
    
    // Start für Schneeflocken
   for (let i: number = 0; i < 1000; i++) {
   schneeflockenX[i] = 0 + Math.random() * 800;
   schneeflockenY[i] = 0 + Math.random() * 600;
   }
    
   for (let i: number = 0; i < 3; i++) {
   wolkenX[i] = 0 + Math.random() * 800;
   wolkenY[i] = 0 + Math.random() * 200;
   }
    
   for (let i: number = 0; i < 1; i++) {
   skifahrerX[i] = 0;
   skifahrerY[i] = 400;
   }  
    
   //Bild wird gespeichert
   image = crc2.getImageData(0, 0, 800, 600);
   animate();
    }
   

   //Animationsbefehl: Hintergrund, löschen, neuer Hintergrund, löschen...
 function animate(): void { //hier werden die Sachen animiert
    
        crc2.clearRect(0, 0, 800, 600);
        crc2.putImageData(image, 0, 0);
     

 for (let i: number = 0; i < schneeflockenX.length; i++) { 
            if (schneeflockenY[i] > 600) {
                schneeflockenY[i] = 0;
            }

            schneeflockenY[i] += Math.random();
            snowflake(schneeflockenX[i], schneeflockenY[i]);
        }
    
     
         for (let i: number = 0; i < wolkenX.length; i++) {
            if (wolkenX[i] > 800) {
                wolkenX[i] = 0;
            }
    

            wolkenX[i] += Math.random();
            cloud(wolkenX[i], wolkenY[i]);

        }
     
         for (let i: number = 0; i < skifahrerX.length; i++) {
            if (skifahrerX[i] > 800) { //Wenn Wert größer als 800, geh wieder zum Anfang
                skifahrerX[i] = 0;//Anfang
                skifahrerY[i]= 400;//Anfang
            }
    

            skifahrerX[i] += 5;//Wie schnell in welche Richtung
            skifahrerY[i] += 1.25;
            skifahrerdraw(skifahrerX[i], skifahrerY[i]);

        }
     
    window.setTimeout(animate, 20);
    
 
 }
    

    
//Funktion Schneeflocken 
function snowflake(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.arc(_x, _y, 2, 0, 2 * Math.PI);
        crc2.fillStyle = "#EFF5FB";
        crc2.fill();
    }

    
//Funktion Wolken
for (let i: number = 0; i < wolkenX.length; i++) {
            if (wolkenX[i] > 800) {
                wolkenX[i] = 0;
            }
    console.log(wolkenX.length);

            wolkenX[i] += Math.random();
            cloud(wolkenX[i], wolkenY[i]);

        }
    
//Funktion Wolken
    function cloud(_x: number, _y: number): void {
    crc2.beginPath();
    crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFB6C1";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(_x+40, _y, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFB6C1";
    crc2.fill();
    }   
    
    //Funktion Skifahrer
    function skifahrerdraw(_x: number, _y: number): void {
   
       crc2.beginPath();
       crc2.fillStyle = "#000";
       crc2.arc(_x, _y, 9, 0, 2 * Math.PI);
       crc2.fill() ;
       crc2.fillStyle = "#000";
       crc2.fillRect(_x-5, _y, 10, 30);
       crc2.fillStyle = "#000";
       crc2.fillRect(_x-20, _y+30, 40, 5);
       crc2.fillStyle = "#000";
       crc2.fillRect(_x-20, _y+23, 40, 5);
    } 
    
  function drawTree(_x: number, _y: number, _color: string): void {
        
    crc2.fillStyle = "#90EE90";
    crc2.fillRect(_x, _y, 20, 30);
    
    //Baumiger Baum Shape
    crc2.beginPath();
    crc2.moveTo(_x - 30, _y);
    crc2.lineTo(_x + 10, _y - 100);
    crc2.lineTo(_x + 50, _y);
    crc2.closePath();
    crc2.fillStyle = _color;
    crc2.fill();
    }
    
    
    
}