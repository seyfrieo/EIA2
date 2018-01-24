//Aufgabe: (Aufgabe 11)
//Name: (Dominik Seyfried)
//Matrikel: (256734)
//Datum: (24.11.2017)
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.

namespace Aufgabe11 {
    //Baumform
    export interface Bestellposten { //export: Wird auch in anderen Dateien erkannt
        art: string;
        name: string;
        preis: number;
    }

    export let posten: Bestellposten[] = [
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
    
    export let baumArt: string[][] = []; //Assoziatives Array (In jeder Schublade 2 Fächer)
    export let b: string[][] = [];
    
    for (var i: number = 0; i < posten.length; i++) {
        if (posten[i].art == "Baumform") {
           var temp: any = [posten[i].name, posten[i].preis]; 
           baumArt.push(temp); //Variable temp wird an nächste Stelle des Arrays gepusht
        }
    }
}