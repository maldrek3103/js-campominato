//============ FIXED VARIABLES ==============
//(REMEMBER TO REPLACE AND REMOVE TEST VALUES)
const totalNumbers = 10;     //Replace with 100
const totalBombs = 5;       //Replace with 16
let maxAttempts = totalNumbers - totalBombs;

//=========== CHANGING VARIABLES ============
const bombs = [1, 3, 5, 7, 9];        //Remove elements
const userNumbers = [];

//============ CHECKING VARIABLES ============
let isLost = false;

//================= GAME ====================
// Bombs generator with vefication already exixting bombs
while (bombs.length < totalBombs) {

    // Generates a random number between 1 and 100
    let randomNumber = getRandomNumber(1, totalNumbers);

    // Verify that the generated number is not in the array 'bombs' yet
    if (!isInArray(randomNumber, bombs)) {
        bombs.push(randomNumber);
    }
}

//Validates the user inputs
while (!isLost && userNumbers.length < maxAttempts) {

    //Ask user input as a number between min and max
    let userChoice = getUserNumber(1, totalNumbers);

    //Check if the number is not in the 'bombs' array yet
    if (isInArray(userChoice, bombs)) {
        isLost = true;
    } else {
        //Checks if the number is not in the array 'userNumbers' yet
        if (isInArray(userChoice, userNumbers)) {
            alert('Il numero è gia stato scelto')
        } else {
            userNumbers.push(userChoice);
        }
    }
}
if (isLost) {
    alert('Hai perso! Hai totalizzato: ' + userNumbers.length);
} else {
    alert('Hai vinto!');
}

//========= FUNCTIONS DECLARATIONS ==========
/**
 * Generates a random number between min and max
 * @param {number} min 
 * @param {number} max 
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Checks if a element is in an array
 * @param {*} element 
 * @param {*} arr 
 */
function isInArray(element, arr) {
    let found = false;
    let i = 0;
    while (!found && i < arr.length) {
        if (element === arr[i]) {
            found = true;
        }
        i++;
    }
    return found;
}

/**
 * Ask user a number until it is not a valid element (between min and max)
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
function getUserNumber(min, max) {
    //Ask user number
    let number = prompt('Inserisci un numero da ' + min + ' a ' + max);
    while (!isNumber(number) || number < 1 || number > max) {
        number = prompt('Inserisci un numero da ' + min + ' a ' + max);
    }
    return parseInt(number);
}

/**
 * Checks if a value is a number
 * @param {*} num 
 * @returns 
 */
function isNumber(num) {
    if (!num || num.trim() === '' || isNaN(num)) {
        alert('Devi inserire un valore valido!');
        return false;
    }
    return true;
}