// creare un array per contenere le bombe
const bombs = [];
const easy = 100;
const medium = 80;
const hard = 50;
//generare un numero random da inserire nell'array bombe finchè non ci saranno 16 elementi (funzione)
function bombGenerator(min, max) {
    for (var i = 0; i < 16; i++) {
        let randomBomb = Math.floor(Math.random() * (max - min) + min);
        bombs.push(randomBomb);
    }
}

console.log(bombGenerator(1, 100));
console.table(bombs);

// creare un array per ricordare i numeri scelti dall'utente
const userNumbers = [];
//chiede all'utente di scegliere un numero da 1 a 100
let askUser = prompt('Scegli un numero da 1 a 100');
//inserisce il numero scelto dall'utente dentro l'arrey userNumbers
userNumbers.push(askUser);


//chiede 100 -16 volte all'utente di scrivere un numero da 1 a 100 ( da finire)
for (var i = 0; i < (easy - bombs.length); i++) {
    askUser = prompt('Scegli un numero da 1 a 100');

}


console.log(userNumbers);