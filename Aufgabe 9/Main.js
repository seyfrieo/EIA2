//Aufgabe: (Aufgabe 09)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    window.addEventListener("keydown", handleKeyDown);
    //Buchstaben erstellen
    var word = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var letter = [];
    var selectedLetter;
    function init(_event) {
        for (var i = 0; i < word.length; i++) {
            var tempLetter = document.createElement("div");
            //Sozusagen CSS
            tempLetter.style.backgroundColor = "#FBF8EF";
            tempLetter.style.border = "1px solid #000000";
            tempLetter.style.textAlign = "center";
            tempLetter.style.width = "2em";
            tempLetter.style.height = "2em";
            tempLetter.style.margin = "0.5em";
            tempLetter.style.paddingTop = "1em";
            tempLetter.style.display = "inline-block";
            tempLetter.innerText = word[i];
            tempLetter.addEventListener("mousedown", selectLetter); //Event Listener, damit Buchstaben ausgew�hlt werden k�nnen
            document.body.appendChild(tempLetter); // Zum HTML-Code
            letter.push(tempLetter); // In den Array gepusht (letzte Stelle)
        }
        //Canvas-Feld
        var paper = document.createElement("div");
        //"CSS"
        paper.id = "paper";
        paper.style.width = "60em";
        paper.style.height = "30em";
        paper.style.paddingTop = "2em";
        paper.style.marginLeft = "0.4em";
        paper.style.backgroundColor = "#FBF8EF";
        //Buchstaben in Canvas eingef�gt
        paper.addEventListener("mousedown", placeLetter);
        document.body.appendChild(paper);
    }
    function handleKeyDown(_event) {
        for (var i = 0; i < letter.length; i++) {
            if (String.fromCharCode(_event.keyCode) == letter[i].innerHTML) {
                if (selectedLetter != undefined)
                    selectedLetter.style.backgroundColor = "#FBF8EF";
                selectedLetter = letter[i]; //Buchstabe wird gefunden und �berschrieben
                selectedLetter.style.backgroundColor = "#ffffff";
            }
        }
    }
    function selectLetter(_event) {
        if (selectedLetter != undefined)
            selectedLetter.style.backgroundColor = "#FBF8EF";
        selectedLetter = _event.target;
        console.log(selectedLetter);
        selectedLetter.style.backgroundColor = "#ffffff";
    }
    function placeLetter(_event) {
        if (_event.altKey == true)
            return; // Unterbricht Funktion, wenn ALT gedr�ckt
        var place = document.createElement("div");
        place.innerHTML = selectedLetter.innerHTML;
        place.style.textAlign = "center";
        place.style.width = "2.5em";
        place.style.height = "2.5em";
        place.style.paddingTop = "1em";
        place.style.top = _event.pageY + "px";
        console.log(place.style.marginTop);
        place.style.left = _event.pageX + "px";
        place.style.backgroundColor = "#ffffff";
        place.style.position = "absolute";
        place.addEventListener("mousedown", removeLetter);
        document.getElementById("paper").appendChild(place);
    }
    //Was ich anklicke, wird gel�scht
    function removeLetter(_event) {
        if (_event.altKey == true) {
            var remove = _event.target;
            document.getElementById("paper").removeChild(remove);
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=Main.js.map