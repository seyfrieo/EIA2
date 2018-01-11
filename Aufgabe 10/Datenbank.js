//Aufgabe: (Aufgabe 10)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var Aufgabe10;
(function (Aufgabe10) {
    Aufgabe10.posten = [
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
    Aufgabe10.baumArt = []; //Assoziatives Array (In jeder Schublade 2 F�cher)
    Aufgabe10.b = [];
    for (var i = 0; i < Aufgabe10.posten.length; i++) {
        if (Aufgabe10.posten[i].art == "Baumform") {
            var temp = [Aufgabe10.posten[i].name, Aufgabe10.posten[i].preis];
            Aufgabe10.baumArt.push(temp); //Variable temp wird an n�chste Stelle des Arrays gepusht
        }
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Datenbank.js.map