// Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const getRandomNumbers = numbers => {

const randomNumbers = Math.floor(Math.random() * numbers.length);
console.log(numbers[randomNumbers]);
};

getRandomNumbers([1, 2, 3, 4, 5]);

/* Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

// UTILIZAMOS MATH.MAX/MIN(...) LOS PUNTOS SUSPENSIVOS SON UN OPERADOR SPREAD. ESTE, TOMA TODOS LOS ELEMENTOS DEL ARRAY NUMBERS Y LOS CONVIERTE EN INDIVIDUALES, POR EJEMPLO SI NUMBERS ES [3, 5, 1] LOS CONVIERTE A (3, 5, 1)

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]" */ 

const calculateNumbers = numbers => {

const plus = numbers[0] + numbers[1] + numbers[2];
console.log(`La suma de todos los números es:${plus}`);

const average = (plus) / 3; 
console.log(`La media de todos los números es:${average}`);

const biggest = Math.max(...numbers)
const smallest = Math.min(...numbers);
console.log(`El mayor es ${biggest} y el menor es ${smallest}`);
}

calculateNumbers([1, 2, 3]);


// Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleatorio entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const containNumbers = numbers => {

const mixNumbers = Math.floor(Math.random() * 11);
console.log(`Número aleatorio generado: ${mixNumbers}`);

const isTrue = numbers.indexOf(mixNumbers);

if (isTrue !== -1) {
    console.log(`El número ${mixNumbers} está en el array en la posición: ${isTrue}`);
} else {
    console.log(`El número ${mixNumbers} no está en el array`);
}
}

containNumbers([1,2,3,4,5])

// Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

// EN ESTE CASO ESPECIAL NO ES NECESARIO HACER UNA CONSTANTE PARA CADA UNO DE LOS NÚMEROS. LA ESCRIBIMOS AL PRINCIPIO Y DE AHÍ PODEMOS HACER LOS TRES CÁLCULOS.

// NO OLVIDAR LAS LLAMADAS. PRIMERO NOMBRAMOS UNA CONSTANTE NUEVA, DESPUÉS NOMBRADOS LA PRIMERA CONSTANTE QUE HICIMOS, DESPUÉS LLAMAMOS A LA CONSTANTE QUE ACABAMOS DE CREAR 

const emptyArray = () => [

  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
  Math.floor(Math.random() * 101),
]

  const randomNumbers =  emptyArray();
  console.log(randomNumbers);


// Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

const dniLetter = numbers => {

const receiveNumber = Math.floor(Math.random() * 100000000);
const receiveLetter = receiveNumber % 23;
const chooseLetter = numbers[receiveLetter]; /*LO HE HECHO PROBANDO PERO REALMENTE NO SÉ EL POR QUÉ */

console.log(`${receiveNumber}${chooseLetter}`);

} 

dniLetter(['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']);


// Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']

// RECUERDA. PARA ACCEDER A LA PRIMERA LETRA DE LA PALABRA NO ES NECESARIO UTILIZAR LENGTH (PORQUE EL PRIMER INDICE SIEMPRE ES 0). SI NO ES LA PRIMERA LETRA, DEBEREMOS UTILIZAR LENGTH

// AL SER UN ARRAY ACCEDEMOS DE LA SIGUIENTE MANERA: PRIMERO ACCEDEMOS A LA PRIMERA PALABRA WORDS[0], Y DENTRO DE ESA PALABRA WORD[0] A LA PRIMERA LETRA

const words = example => {

const capitalLetters = [
  example[0][0].toUpperCase(), example[0][example[0].length - 1].toUpperCase(),
  example[1][0].toUpperCase(), example[1][example[1].length - 1].toUpperCase(),
  example[2][0].toUpperCase(), example[2][example[2].length - 1].toUpperCase()
];

console.log(capitalLetters);
}

words(['hola', 'adios', 'gato']);


// Crea una función que reciba un array con 3 números y te diga cuántos números pares tiene ese array.

const numberPair = numbers => {
const countNumbers = (numbers[0] % 2 === 0) + (numbers[1] % 2 === 0) + (numbers[2] % 2 === 0);

console.log(`Este array tiene ${countNumbers} número(s) par(es).`);
}

numberPair([1,2,3]);

// Crea una función que reciba un array con 3 números y devuelva un nuevo array con los mismos números pero en orden inverso.

// MALA EJECUCIÓN PARA UN ARRAY. CHARAT NO ES APLICABLE EN ARRAYS

/* const numbers4 = [1, 2, 3]; {

const firstnumber = numbers4.charAt[0];
const secondnumber = numbers4.charAt[1];
const thirdnumber = numbers4.charAt[2];

return  thirdnumber + secondnumber + firstnumber;
}

const returnNumbers = (numbers4);
console.log(returnNumbers); */

// BUENA EJECUCIÓN PARA UN ARRAY 

const invertNumbers = numbers => {

const firstNumber = numbers[0];  
const secondNumber = numbers[1]; 
const thirdNumber = numbers[2];   

// CONCATENAMOS
const result = String(thirdNumber) + String(secondNumber) + String(firstNumber);

console.log(result);
}

invertNumbers([1,2,3])

// Crea una función que reciba un array con 3 palabras y devuelva un nuevo array con las mismas palabras pero en mayúsculas.

const transformWord = words => {

const upperCase = [words[0].toUpperCase(), words[1].toUpperCase(), words[2].toUpperCase()];
console.log(upperCase);

}

transformWord(['gyoza', 'dumpling', 'wanton']);