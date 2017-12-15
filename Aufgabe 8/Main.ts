//Aufgabe: (Aufgabe 08)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.


namespace Aufgabe08 {

    window.addEventListener("load", init);

    function init(): void {
        var menge: string = prompt("Wie viel Konfetti brauchst du? (Schnipsel von 10 bis 100)");
        var mengeNumber: number = parseInt(menge);
        if (mengeNumber >= 10 && mengeNumber <= 100) {
            for (var i: number = 0; i < mengeNumber; i++) {
                drawDiv(Math.random() * 600, Math.random() * 600, "hsl(" + Math.random() * 400 + ", 100%, 50%)", 20, 20);
            }
        } else {
            window.alert("10 bis 100!!!");
            init();
        }
    }

    function drawDiv(_x: number, _y: number, _color: string, _height: number, _width: number): void {

        let div: HTMLDivElement = document.createElement("div");
        div.style.marginLeft = _x + "px";
        div.style.marginTop = _y + "px";
        div.style.width = _width + "px";
        div.style.height = _height + "px";
        div.style.backgroundColor = _color;
        div.style.display = "inline";
        div.style.position = "absolute";
        document.body.appendChild(div);
    }
}