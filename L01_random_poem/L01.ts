

const pizaa: string[] = ["Margherita", "Pepperoni", "Vegetarian", "Hawaiian", "Quattro Stagioni", "Capricciosa"];
const prädikat: string[] = ["mit", "am beschten", "dazu", "neben bei sowaws wie", "versüßt mit", "verschlingbar mit"];
const toppings: string[] = ["ein Santa shock", "UHU", "A4 Papier", "eine Tür", "Badminton Schläger", "ungesalzene Pommes"];

function verse(pizza: string[], prädikat: string[], toppings: string[]): string {
    return `${zufälligesWort(pizza)} ${zufälligesWort(prädikat)} ${zufälligesWort(toppings)}`;
}

function zufälligesWort(vonArray: string[]): string {
    const index = Math.floor(Math.random() * vonArray.length);
    const gewähltesWort = vonArray[index];
    vonArray.splice(index, 1);
    return gewähltesWort;
}

function ausgabe(): string {
    let gedicht = "zufällig erstelltes gedicht:\n\n";
    for (let i = 0; i < 5; i++) {
        const vers = verse(pizaa.splice(), prädikat.splice(), toppings.splice());
        gedicht += vers + "\n";
    }
    return gedicht;
}

console.log(ausgabe());