/* Snack 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

const stringsArray = ["pippo", "PLUTO", "PaPerIno"]
console.log(stringsArray);


const newArray = stringsArray.map(toLowerCaseFunction)

function toLowerCaseFunction(element) {
     return element.toLowerCase()
}

//console.log(newArray);

const finalArray = stringsArray.map(firstLetterUppercase)

function firstLetterUppercase(element) {
    return element.charAt[0].toUpperCase()
}

console.log(finalArray);