// Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const numbers = [1, 2, 3, 4, 5];

const randomNumbers = Math.floor(Math.random() * numbers.length);
console.log(numbers[randomNumbers]);

/* Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]" */ 

// Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleatorio entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const numbers2 = [1, 2, 3, 4, 5];

const mixNumbers = Math.floor(Math.random() * 11);
console.log(`Número aleatorio generado: ${mixNumbers}`);

const isTrue = numbers2.indexOf(mixNumbers);

if (isTrue !== -1) {
    console.log(`El número ${mixNumbers} está en el array en la posición: ${isTrue}`);
} else {
    console.log(`El número ${mixNumbers} no está en el array`);
}

// Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

// Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

const dniLetter = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']; 

const receiveNumber = Math.floor(Math.random() * 100000000);
const receiveLetter = receiveNumber % 23;
const chooseLetter = dniLetter[receiveLetter];

console.log(`${receiveNumber}${chooseLetter}`);


// Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

// Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.

// Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.

// Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.