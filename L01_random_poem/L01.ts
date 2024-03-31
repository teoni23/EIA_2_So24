const Pizaa: string[] = ["Margherita", "Pepperoni", "Vegetarian", "Hawaiian", "Quattro Stagioni", "Capricciosa"];
const Prädikat: string[] = ["mit", "am beschten", "dazu", "neben bei sowaws wie", "versüßt mit", "verschlingbar mit"];
const Toppings: string[] = ["ein Santa shock", "UHU", "A4 Papier", "eine Tür", "Badminton Schläger", "ungesalzene Pommes"];

function verse(Pizza: string[], Prädikat: string[], Toppings: string[]): string {
    return `${zufälligesWort(Pizza)} ${zufälligesWort(Prädikat)} ${zufälligesWort(Toppings)}`;
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
        const vers = verse(Pizaa.slice(), Prädikat.slice(), Toppings.slice());
        gedicht += vers + "\n";
    }
    return gedicht;
}

console.log(ausgabe());