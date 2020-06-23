// function crearPersona ( nombre, apellido ) {
//    return {nombre, apellido }
// }

const crearPersona = ( nombre, apellido, edad ) => ({ nombre, apellido, edad })

const persona = crearPersona('Elias', 'Rivera', 29);
console.log(persona);

// function imprimeArgumentos() {
//     console.log(arguments);
// }

const imprimeArgumentos2 = (edad, ...args) => {
    // console.log( { edad }, { args });
    return args;
}

const argumentos = imprimeArgumentos2(10, true, false, 'Elias', 'Holis');
console.log(argumentos);

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Elias', 'Holis');
console.log({casado, vivo, nombre, saludo});

const { apellido: nuevoApellido } = persona;
console.log({nuevoApellido});
// console.log(persona.nombre);

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster']
}

// const imprimePropiedades = ( personaje ) => {
//     console.log('Nombre: ' + personaje.nombre);
//     console.log('Heroe: ' + personaje.codeName);
//     console.log('Vivo:' + personaje.vivo);
//     console.log('Edad: ' + personaje.edad);
//     console.log('Trajes:' + personaje.trajes);
// }

const imprimePropiedades = ( {nombre, codeName, vivo, edad = 15, trajes} ) => {
console.log({nombre});
console.log({codeName});
console.log({vivo});
console.log({edad});
console.log({trajes});
}

imprimePropiedades(tony);