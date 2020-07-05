// let min = 30,max =60;
const contarNumeros = (min, max) =>{
let cont = 0 ;
    for ( let i=min; i <= max; i++ ){
        console.log(cont + i );
        cont+=i;
    }
    
    return cont;
}

contarNumeros(10, 20);


const sumar = (a,b) => a + b;

const resultado = sumar(5,5);
console.log(resultado);