/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
    return l1 * l2;
}

console.log(area(11, 12))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
    let sum = n1 + n2;
    if (n1 === n2) {
        sum = sum * 3
        return sum
    } else {
        return sum
    }

}

console.log("numeri diversi", crazySum(11, 12));
console.log("numeri uguali", crazySum(11, 11));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n1) {
    let diff = n1 - 19;
    if (n1 > 19) {
        diff = diff * 3;
    }
    return diff
}
console.log("Minore di 19", crazyDiff(18));
console.log("Maggiore di 19", crazyDiff(20));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true
    } else {
        return false
    }
}
console.log(boundary(35));
console.log(boundary(19));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(inputString) {
    if (inputString.substring(0, 7) === "EPICODE") {
        return inputString;
    } else {
        return "EPICODE " + inputString;
    }
}

console.log(epify("Ciao Mondo!"));
console.log(epify("EPICODE Funzioni JS"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(number) {
    if (number > 0 && (number % 3 === 0 || number % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(5));
console.log(check3and7(-21));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(string) {
    return string.split("").reverse().join("")

}

console.log(reverseString("EDOCIPE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(string) {
    const words = string.split(" ");
    let result = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const maiuscF = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        if (i > 0) {
            result += ' ';
        }
        result += maiuscF;
    }
    return result;
}

console.log(upperFirst(prompt("Inserisci una frase")));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(params) {
    console.log(params);
    const characters = params.split("");
    characters.shift()
    characters.pop()
    let result = characters.join("");
    return result

}

console.log(cutString(prompt("inscerisci una parola")));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
    const randomNumbers = [];

    for (let i = 0; i < n; i++) {
        const randomNumber = Math.floor(Math.random() * 11);
        randomNumbers.push(randomNumber);
    }

    return randomNumbers;
}
console.log(giveMeRandom(prompt("Inserisci un numero")));