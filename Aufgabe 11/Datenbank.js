//Aufgabe: (Aufgabe 11)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe11;
(function (Aufgabe11) {
    Aufgabe11.posten = [
        { art: "Baumform", name: "Tanne ueber BMI", preis: 600.00 },
        { art: "Baumform", name: "Tanne unter BMI", preis: 100.00 },
        { art: "Baumform", name: "Muskeltanne", preis: 700.00 },
        { art: "Baumform", name: "Lauchtanne", preis: 20.00 },
        { art: "Nadeln", name: "10", preis: 10.00 },
        { art: "Nadeln", name: "100", preis: 100.00 },
        { art: "Nadeln", name: "1000", preis: 1000.00 },
        { art: "Nadeln", name: "10000", preis: 10000.00 },
        { art: "Schmuck", name: "......Aepfel..", preis: 1.99 },
        { art: "Schmuck", name: "...Bananen..", preis: 2.99 },
        { art: "Schmuck", name: ".Kartoffeln..", preis: 3.99 },
        { art: "Schmuck", name: ".....Zuchini..", preis: 4.99 },
        { art: "Lieferkonditionen", name: "Standard-Lieferung", preis: 0.0 },
        { art: "Lieferkonditionen", name: "Express-Lieferung", preis: 100000.97 }
    ];
    Aufgabe11.baumArt = []; //Assoziatives Array (In jeder Schublade 2 F�cher)
    Aufgabe11.b = [];
    for (var i = 0; i < Aufgabe11.posten.length; i++) {
        if (Aufgabe11.posten[i].art == "Baumform") {
            var temp = [Aufgabe11.posten[i].name, Aufgabe11.posten[i].preis];
            Aufgabe11.baumArt.push(temp); //Variable temp wird an n�chste Stelle des Arrays gepusht
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Datenbank.js.map