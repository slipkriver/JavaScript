

// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videoJuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger' ];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio']
console.log({ videoJuegos });
console.log(meses[2])

console.log( videoJuegos[0] );

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log({ arregloCosas });
// console.log( arregloCosas[2] );
console.log( arregloCosas[7][4][1] );
