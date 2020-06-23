
const elMayor = ( a, b ) => ( a > b ) ? a : b;
const tieneMembresia = (miembro) => (miembro) ? 'El valor es de $2' : 'El valor es de $10';
const amigo = false;
const amigosArr = [
    'Melissa',
    'Juan',
    'Anita',
    'Pedro',
    amigo ? 'Hulk' : 'Thanos',
    (() => 'Funcion de flecha en array' ()),
    elMayor(9,5)
];
const nota = 85; // A+, A, B+, B, C+, C
const calificacion = (nota === 100) ? 'A++' :
                     (nota > 100 || nota < 0) ? 'No existe esa calificacion' :
                     (nota >= 95) ? 'A+' :
                     (nota >= 90) ? 'A' :
                     (nota >= 85) ? 'B+' :
                     (nota >= 80) ? 'B' :
                     (nota >= 75) ? 'C+' :
                     (nota >= 70) ? 'C' :
                     (nota >= 65) ? 'D+' :
                     (nota <= 60) ? 'F' :


console.log( elMayor(5 , 9) );
console.log(tieneMembresia(true));
console.log(amigosArr);
console.log({calificacion, nota});