// creare un array per contenere le bombe
const bombs = [];

//generare un numero random da inserire nell'array bombe finchè non ci saranno 16 elementi (funzione)
function bombGenerator(min, max) {
    for (var i = 0; i < 16; i++) {
        let randomBomb = Math.floor(Math.random() * (max - min) + min);
        bombs.push(randomBomb);
    }
}

console.log(bombGenerator(1, 100));
console.table(bombs);