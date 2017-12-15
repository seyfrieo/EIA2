//Aufgabe: (Aufgabe 07)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe07;
(function (Aufgabe07) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (1=m oder 0=w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var stringToSplit = _input.split(",", 6);
        if (Number.isNaN(parseInt(stringToSplit[0]))) {
            return "'Matrikelnummer' muss eine Zahl sein";
        }
        else if (stringToSplit[1] == "") {
            return "'Name' ist nicht ausgef�llt";
        }
        else if (stringToSplit[2] == "") {
            return "'Vorname' ist nicht ausgef�llt";
        }
        else if (parseInt(stringToSplit[3]) == NaN) {
            return "'Alter' bitte als Zahl eingeben";
        }
        else if (parseInt(stringToSplit[4]) != 1 && parseInt(stringToSplit[4]) != 0) {
            return "'Geschlecht' bitte mit 0=m oder 1=w eingeben; Eingabe war: " + stringToSplit[4];
        }
        else if (stringToSplit[5] == "") {
            return "'Kommentar' als W�rter eingeben";
        }
        else {
            var student = {
                matrikelnummer: parseInt(stringToSplit[0]),
                name: stringToSplit[1],
                vorname: stringToSplit[2],
                alter: parseInt(stringToSplit[3]),
                geschlecht: parseInt(stringToSplit[4]) == 0,
                kommentar: stringToSplit[5]
            };
            students.push(student);
            console.log(students);
            return "Ihre Daten wurden erfolgreich gespeichert";
        }
    }
    function queryData(_matrikel) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                var matrikelnummer = "Matrikelnummer " + students[i].matrikelnummer;
                var name_1 = "Name: " + students[i].name;
                var vorname = "Vorname: " + students[i].vorname;
                var alter = "Alter: " + students[i].alter;
                var geschlecht = void 0;
                if (students[i].geschlecht)
                    geschlecht = "Geschlecht: m�nnlich";
                else
                    geschlecht = "Geschlecht: weiblich";
                var kommentar = "Kommentar: " + students[i].kommentar;
                return "Ihre Eingaben: " + "\n" + matrikelnummer + "\n" + name_1 + "\n" + vorname + "\n" + alter + "\n" + geschlecht + "\n" + kommentar;
            }
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=Main.js.map