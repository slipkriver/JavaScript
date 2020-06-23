const dia = 3; //0:Domingo ... 1:Lunes ... 2:Martes ....
const horaActual = 10;
let horaApertura;
let mensaje;

// if ( dia === 0 || dia === 6 ) {
//     if ( [0,6].includes(dia)) {
//     console.log('Es fin de semana');
//     horaApertura = 9;
// }else { 
//     console.log('Es entre semana');
//     horaApertura = 11;
// }

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

// if ( horaActual >= horaApertura ){
//     mensaje = console.log('Estamos atendiendo');
// } else {
//     mensaje = console.log(`Esta cerrado abrimos ${horaApertura} de la mañana`);
// }

mensaje = (horaActual >=  horaApertura) ? 'Estamos atendiendo' : `Esta cerrado abrimos a las ${horaApertura} de la mañana`;
console.log(mensaje);