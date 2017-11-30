//Aufgabe: (Aufgabe 06)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Aufgabe6 {

    export class Skifahrer extends MovingObjects {
        color: string;
        

        constructor(_x: number, _y: number) {
            super(_x, _y);
             this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; //Zufallsfarbe

        }

        move(): void {

            if (this.y > 800) {
                this.x = 0;
                this.y = 400;

//                this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)"
            }

            this.x += Math.random() * 20;//Bewegung/Steigung
            this.y += Math.random() * 5;

            this.draw();
        }

        draw(): void {

            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.arc(this.x, this.y, 9, 0, 2 * Math.PI);
            crc2.fill() ;
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x-5, this.y, 10, 30);
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x-20, this.y+30, 40, 5);
            crc2.fillStyle = this.color;
            crc2.fillRect(this.x-20, this.y+23, 40, 5);
        }

    }
}