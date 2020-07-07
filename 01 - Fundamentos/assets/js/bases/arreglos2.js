let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length );

let primero = juegos[ 2 - 2 ];
let ultimo  = juegos[ juegos.length - 1 ];

console.log({ primero, ultimo });

//Recorre y devuelve todos los elementos del vector
juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

let autos = [
    {
        modelo: 'Mustang', 
        motor: 6.2
    },
    {
        modelo: 'Camaro',
        motor: 6.1
    },
    {
        modelo: 'Challenger', 
        motor: 6.2
    },
];

autos.forEach((elemento, indice, arr) => {
    console.log(elemento, indice);
})

//Ingresa un valor en la última posición del arreglo
let nuevaLongitud = juegos.push( 'F-Zero' );
console.log({ nuevaLongitud, juegos });

//Ingresa un valor en la primera posición del arreglo
nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });

console.log( juegos );

//Elimina un valor en la última posición del arreglo y lo retorna 
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

//Elimina un valor en la primera posición del arreglo y l retorna
juegoBorrado = juegos.shift();
console.log({juegoBorrado, juegos});

//Invierte las posiciones del arreglo
juegoBorrado = juegos.reverse();
console.log({juegoBorrado, juegos});

let pos = 1;

console.log( juegos );

//Elimina uno a varias posiciones del vector, enviando por parámetros.
// let juegosBorrados = juegos.splice( pos, 2);
// console.log({ juegosBorrados, juegos });

let frutas = ["Manzana", "Pera", "Almendra", "Zandía", "Fresa", "Banano"];
//Ordena mi array conforme el abecedario a-z
frutas.sort();
console.log(frutas);
// const funcionArray = (arr) => arr;
// console.log(funcionArray(array));

let numeros = [60, 14, -9, 8, 120, -845, 45, 1897, 499, 0,98, -1 ];
//Ordena los numeros de menor a mayor y viceversa
numeros.sort((x, y) => x - y);
console.log(numeros);

let metroidIndex = juegos.indexOf('Metroid'); // CaSeSeNsItIvE
console.log({ metroidIndex });


//TODO: Referencia








