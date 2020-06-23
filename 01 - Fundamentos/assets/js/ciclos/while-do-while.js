
const carros = ['Ford', 'Chevrolet', 'Honda', 'BMW'];
let i = 0;

console.warn('While');
// while( i < carros.length ) {
//     console.log(carros[i]);
//     i++;
// }
/* TODOS ESTOS TIPOS DE DATOS DEVUELVEN FALSO
//undefined
//null
//falso
*/

while ( carros[i] ) {
    if ( i === 1 ) {
        i++
        continue; //para que continue con el ciclo de repetición
    }
    console.log(carros[i]);
    i++
}
console.log(i);

console.warn('Do While');
let j = 0;

do{
    console.log(carros[j]);
    j++;
}while(carros[j]);

console.log(j);