//Aufgabe: (Aufgabe 07)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.


namespace Aufgabe07 {
    interface StudentData {
        matrikelnummer: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (1=m oder 0=w) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {

        let stringToSplit: string[] = _input.split(",", 6);
        if (Number.isNaN(parseInt(stringToSplit[0]))) {
            return "'Matrikelnummer' muss eine Zahl sein";
        }

        else if (stringToSplit[1] == "") {
            return "'Name' ist nicht ausgefüllt";
        }
        else if (stringToSplit[2] == "") {
            return "'Vorname' ist nicht ausgefüllt";
        }
        else if (parseInt(stringToSplit[3]) == NaN) {
            return "'Alter' bitte als Zahl eingeben";
        }
        else if (parseInt(stringToSplit[4]) != 1 && parseInt(stringToSplit[4]) != 0) {
            return "'Geschlecht' bitte mit 0=m oder 1=w eingeben; Eingabe war: " + stringToSplit[4];
        }
        else if (stringToSplit[5] == "") {
            return "'Kommentar' als Wörter eingeben";
        }
        else {
            let student: StudentData = {
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

    function queryData(_matrikel: number): string {
        for (var i: number = 0; i < students.length; i++) {
            if (students[i].matrikelnummer == _matrikel) {
                let matrikelnummer: string = "Matrikelnummer " + students[i].matrikelnummer;
                let name: string = "Name: " + students[i].name;
                let vorname: string = "Vorname: " + students[i].vorname;
                let alter: string = "Alter: " + students[i].alter;

                let geschlecht: string;
                if (students[i].geschlecht)
                    geschlecht = "Geschlecht: männlich";
                else
                    geschlecht = "Geschlecht: weiblich";

                let kommentar: string = "Kommentar: " + students[i].kommentar;

                return "Ihre Eingaben: " + "\n" + matrikelnummer + "\n" + name + "\n" + vorname + "\n" + alter + "\n" + geschlecht + "\n" + kommentar;
            }
        }
    }
}