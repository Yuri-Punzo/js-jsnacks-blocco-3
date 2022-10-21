/* Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */

const carsArray = [
    {
        marca: "Alfa Romeo",
        modello: "Alfa Romeo Giulietta",
        alimentazione: "Benzina"
    },
    {
        marca: "Dacia",
        modello: "Dacia Duster",
        alimentazione: "Benzina"
    },
    {
        marca: "Tesla",
        modello: "Tesla Model Y",
        alimentazione: "Elettrica"
    },
    {
        marca: "Tesla",
        modello: "HyperHybrid Mark 2",
        alimentazione: "Hybrid"
    },
    {
        marca: "Fiat",
        modello: "Fiat 500",
        alimentazione: "Diesel"
    },
    {
        marca: "Fiat",
        modello: "Fiat Panda",
        alimentazione: "Benzina"
    },
    {
        marca: "Ferrari",
        modello: "California T",
        alimentazione: "Benzina"
    },
    {
        marca: "Ford",
        modello: "Ford Fiesta",
        alimentazione: "Diesel"
    },
    {
        marca: "Honda",
        modello: "Honda Civic",
        alimentazione: "Diesel"
    },
    {
        marca: "Hyundai",
        modello: "Hyundai Tucson",
        alimentazione: "Hybrid"
    }
]



const benzina = carsArray.filter(carsArray => carsArray.alimentazione == "Benzina")

console.log(benzina);

const diesel = carsArray.filter(carsArray => carsArray.alimentazione == "Diesel")

console.log(diesel);

const others = carsArray.filter(carsArray => carsArray.alimentazione !== "Diesel" && carsArray.alimentazione !== "Benzina")

console.log(others);