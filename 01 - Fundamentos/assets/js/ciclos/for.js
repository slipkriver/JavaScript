
const heroes = ['Batman', 'Guepardo', 'Spawn', 'Flash']

console.warn('For tradicional');
for ( let i = 0; i < heroes.length; i++ ){
    console.log(heroes[i]);
}

console.warn('For in');
for ( let i in heroes ){
    console.log(heroes[i]);
}

console.warn('For of');
for ( let heroe of heroes ){
    console.log(heroe);
}

console.warn('continue');
for ( let i = 0; i < 6; i++ ){
    if( i === 5){
        console.log('Estamos en el número 5');
        continue;
    }
    console.log(i);
}

console.warn('break');
for ( let i = 0; i < 10; i++ ){
    if( i === 5){
        console.log('Estamos en el número 5');
        break;
    }
    console.log(i);
}

const carrito = [
    {
        id: 1,
        producto: 'Libro'
    },
    {
        id: 2,
        producto: 'Camisa'
    },
    {
        id: 3,
        producto: 'Guitarra'
    },
    {
        id: 4,
        producto: 'Disco'
    }
];
const nombreProducto = carrito.map((carrito) => {
return carrito.producto;
});
console.log(nombreProducto);

