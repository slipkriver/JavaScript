const hoy = new Date();
let dia = hoy.getDate();

console.log({dia});

let a = 5 + 1;
console.log({a});
console.log( 5 == '5' ); //No importa el tipo de dato en la comparacion
console.log( 5 === '5' ); //Compara tambien si el tipo de dato es igual
console.log( 54 == '54' );
console.log( a == '6' );
console.log( a === '6' );

// dia++;

if ( dia == '2' ){
    console.log('Hoy es Martes');
}else{
    console.log('Hoy es otro dia');
}

const diaSemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
}

const diaSemana2 = [ 'Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

console.log(diaSemana[dia]+' '+ dia  || 'Dia no definido');
console.log(diaSemana2[dia]+' '+ dia  || 'Dia no definido');
