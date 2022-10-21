/* Snack 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const stringsArray = ["pippo", "PLUTO", "PaPerIno"]
console.log(stringsArray);


const newArray = stringsArray.map(myFunction)

function myFunction(element) {
     return element.toLowerCase()
}

console.log(newArray);