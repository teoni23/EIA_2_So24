"use strict";
const pizaa = ["Margherita", "Pepperoni", "Vegetarian", "Hawaiian", "Quattro Stagioni", "Capricciosa"];
const prädikat = ["mit", "am beschten", "dazu", "neben bei sowaws wie", "versüßt mit", "verschlingbar mit"];
const toppings = ["ein Santa shock", "UHU", "A4 Papier", "eine Tür", "Badminton Schläger", "ungesalzene Pommes"];
function verse(pizza, prädikat, toppings) {
    return `${zufälligesWort(pizza)} ${zufälligesWort(prädikat)} ${zufälligesWort(toppings)}`;
}
function zufälligesWort(vonArray) {
    const index = Math.floor(Math.random() * vonArray.length);
    const gewähltesWort = vonArray[index];
    vonArray.splice(index, 1);
    return gewähltesWort;
}
function ausgabe() {
    let gedicht = "zufällig erstelltes gedicht:\n\n";
    for (let i = 0; i < 5; i++) {
        const vers = verse(pizaa.splice(), prädikat.splice(), toppings.splice());
        gedicht += vers + "\n";
    }
    return gedicht;
}
let i = 2;
console.log(ausgabe());
//# sourceMappingURL=L01.js.map