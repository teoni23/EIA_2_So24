

const pizaa: string[] = ["Margherita", "Pepperoni", "Vegetarian", "Hawaiian", "Quattro Stagioni", "Capricciosa"];
const praedikat: string[] = ["mit", "am beschten", "dazu", "neben bei sowaws wie", "versüßt mit", "verschlingbar mit"];
const toppings: string[] = ["ein Santa shock", "UHU", "A4 Papier", "eine Tür", "Badminton Schläger", "ungesalzene Pommes"];

function verse(pizza: string[], praedikat: string[], toppings: string[]): string {
    return `${zufaelligesWort(pizza)} ${zufaelligesWort(praedikat)} ${zufaelligesWort(toppings)}`;
}

function zufaelligesWort(vonArray: string[]): string {
    const index = Math.floor(Math.random() * vonArray.length);
    const gewähltesWort = vonArray[index];
    vonArray.splice(index, 1);
    return gewähltesWort;
}

function ausgabe(): string {
    let gedicht = "zufällig erstelltes gedicht:\n\n";
    for (let i = 0; i < 5; i++) {
        const vers = verse(pizaa, praedikat, toppings);
        gedicht += vers + "\n";
    }
    return gedicht;
}

console.log(ausgabe());