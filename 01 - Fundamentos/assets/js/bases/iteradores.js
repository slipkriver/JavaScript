const ciudades = ['Machala', 'Cuenca', 'Guayaqui', 'Quito', 'Riobamba'];
const ordenes = new Set([14, 487, 234, 10, 78]);
const datos = new Map();

datos.set('nombre', 'elias');
datos.set('profesion', 'sistemas');
datos.set('edad', 29);

//Entries, me duelve el arreglo con las posiciones respectivas
console.warn('entries');
for (let ciudad of ciudades.entries()){
    console.log(ciudad); 
}

for (let orden of ordenes.entries()){
    console.log(orden);
}

for (dato of datos.entries()){
    console.log(dato);
}

console.warn('values');
//Values, me devuelve el valor del arreglo
for (let ciudad of ciudades){
    console.log(ciudad); 
}

for (let orden of ordenes.values()){
    console.log(orden);
}

for (dato of datos.values()){
    console.log(dato);
}

console.warn('keys');
//Keys, me devuelve la posicion indice del vector o las llaves asignadas como propiedades
for (let ciudad of ciudades.keys()){
    console.log(ciudad); 
}

for (let orden of ordenes.keys()){
    console.log(orden);
}

for (dato of datos.keys()){
    console.log(dato);
}
// console.log(datos);