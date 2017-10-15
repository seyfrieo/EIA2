window.addEventListener("load", init);

function init(): void {
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    console.log(canvas);

    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
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
    crc2.beginPath();
    crc2.moveTo(100, 400);
    crc2.lineTo(50, 500);
    crc2.lineTo(150, 500);
    crc2.closePath();
    crc2.fillStyle = "#90EE90";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(90, 500);
    crc2.lineTo(90, 530);
    crc2.lineTo(110, 530);
    crc2.lineTo(110, 500);
    crc2.closePath();
    crc2.fillStyle = "#90EE90";
    crc2.fill();
    
 
    //Baumiger Baum 2
    crc2.beginPath();
    crc2.moveTo(200, 460);
    crc2.lineTo(170, 520);
    crc2.lineTo(230, 520);
    crc2.closePath();
    crc2.fillStyle = "#90EE90";
    crc2.fill();
    crc2.beginPath();
    crc2.moveTo(195, 520);
    crc2.lineTo(195, 535);
    crc2.lineTo(205, 535);
    crc2.lineTo(205, 520);
    crc2.closePath();
    crc2.fillStyle = "#90EE90";
    crc2.fill();
    
    //Fluffige Wolke 1
    crc2.beginPath();
    crc2.arc(200, 100, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFB6C1";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(240, 100, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFB6C1";
    crc2.fill();
    
    //Fluffige Wolke 2
    crc2.beginPath();
    crc2.arc(590, 150, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFB6C1";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(640, 150, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "#FFB6C1";
    crc2.fill();
}