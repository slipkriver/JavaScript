function saludar ( nombre, edad, casado, pais ) {
    // console.log(arguments);
    console.log('Hola ' + nombre + ' '+ edad +' '+ casado + ' ' + pais);
}

function saludar2 () {
    console.log('Hola mundo');
}

const saludar3 = function( nombre ){
    console.log('Hola '+ nombre);
    return (nombre);
}

const saludarFlecha = () => {
    console.log('Hola desde una funcion de flecha');
}

const saludarFlecha1 = (nombre) => {
    console.log('Hola ' + nombre + ' desde una funcion de flecha');
} 

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();

function sumar ( a,b ) {
    return a + b;
}

const sumar2 = ( a,b ) => a + b;

saludar('Elias', 29, false, 'Ecuador');
saludar2();
const nombre = saludar3('Elias Rivera');
console.log(nombre);
saludarFlecha();
saludarFlecha1('Elias Rivera');
console.log( getAleatorio() ); 
console.log( getAleatorio2 () );
console.log( sumar(2,9) );
console.log( sumar2(1,4) );


(function(tecnologia){
    console.log(`Aprendiendo ${tecnologia}`)
})('JavaScript');

const musica = {
    reproducir: function(id){
        console.log(`Reproduciendo la canción ${id}`)
    },
    pausar: function(){
        console.log(`Pausar música`)
    }
};
musica.borrar = (id) => {
    console.log(`Borrando canción ${id}`)
}
musica.reproducir(55);
musica.pausar();
musica.borrar(666);
console.log(musica)