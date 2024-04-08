"use strict";
var L01_random_poem;
(function (L01_random_poem) {
    const pizaa = ["Margherita", "Pepperoni", "Vegetarian", "Hawaiian", "Quattro Stagioni", "Capricciosa"];
    const praedikat = ["mit", "am beschten", "dazu", "neben bei sowaws wie", "versueßt mit", "verschlingbar mit"];
    const toppings = ["ein Santa shock", "UHU", "A4 Papier", "eine Tuer", "Badminton Schlaeger", "ungesalzene Pommes"];
    function verse(pizza, praedikat, toppings) {
        return `${zufaelligesWort(pizza)} ${zufaelligesWort(praedikat)} ${zufaelligesWort(toppings)}`;
    }
    function zufaelligesWort(vonArray) {
        const index = Math.floor(Math.random() * vonArray.length);
        const gewähltesWort = vonArray[index];
        vonArray.splice(index, 1);
        return gewähltesWort;
    }
    function ausgabe() {
        let gedicht = "zufällig erstelltes gedicht:\n\n";
        for (let i = 0; i < 5; i++) {
            const vers = verse(pizaa.slice(), praedikat.slice(), toppings.slice());
            gedicht += vers + "\n";
        }
        return gedicht;
    }
    console.log(ausgabe());
})(L01_random_poem || (L01_random_poem = {}));
//# sourceMappingURL=L01.js.map