namespace Aufgabe4 {

//Aufgabe: (Aufgabe 04.2)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (29.10.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
//*************************************************************
//* Soweit bis jetzt. Arbeite mich langsam aber sicher durch. *
//* Bis zum Praktikum sollt's aber laufen                     *
//*                                                           *
//* Nachtrag 13.11.2017: Läuft!                               *    
//*************************************************************
    
window.addEventListener("load", letitsnow); //Wartet auf Startefehl "load"
    //Interface Skifahrer
    interface Object {
        x: number;
        y: number;
        dx: number;
        dy: number;
        color: string;
    }
    
    //Arrays ("Schubladen")
    let crc2: CanvasRenderingContext2D; //hier ins Array wird wie in eine Schublade meine
    let schneeflockenX: number[] = [];  //Koordinaten der Zeichnung gepackt
    let schneeflockenY: number[] = [];
    
    let wolkenX: number[] = [];
    let wolkenY: number[] = [];
    
    let skifahrer: Object[] = [];

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
     
    
    //Skifahrer
    for (let i: number = 0; i < 10; i++) {
            skifahrer[i] = {
                x: 0,
                y: 510 + Math. random() * 520,
                dx: 11, // Geschwindigkeit
                dy: 3,
                color: "hsl(" + Math.random() * 360 + ", 100%, 50%)"//Farbe 360 Radius von Farbe 100% Sättigung 50% Helligkeit
            };
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
     
         for (let i: number = 0; i < skifahrer.length; i++) {
            if (skifahrer[i].x > 800) { //Wenn Wert größer als 800, geh wieder zum Anfang
                skifahrer[i].x = 0;//Anfang
                skifahrer[i].y = 360 + Math. random() * 400;//Anfangsbereich
            }
    

            herbert(skifahrer[i]);
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
   
       
       function herbert(_skifahrer: Object): void {
        _skifahrer.x += _skifahrer.dx;
        _skifahrer.y += _skifahrer.dy;
        crc2.fillStyle = _skifahrer.color; 
       crc2.beginPath();
       crc2.fillStyle = "#000.color";
       crc2.arc(_skifahrer.x, _skifahrer.y, 9, 0, 2 * Math.PI);
       crc2.fill() ;
       crc2.fillStyle = "#000.color";
       crc2.fillRect(_skifahrer.x-5, _skifahrer.y, 10, 30);
       crc2.fillStyle = "#000.color";
       crc2.fillRect(_skifahrer.x-20, _skifahrer.y+30, 40, 5);
       crc2.fillStyle = "#000.color";
       crc2.fillRect(_skifahrer.x-20, _skifahrer.y+23, 40, 5);
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