let a = 10;
let b = a;
a = 30;
console.log({a, b});
// b = a;
// console.log({a, b});

let juan = { nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';
console.log({juan, ana});

const cambiarNombre = ({...persona}) => {
    persona.nombre = 'Tonny';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiarNombre(peter);
console.log({peter, tony});

const frutas = ['Bananas', 'Naranjas', 'Melones', 'Piñas'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});