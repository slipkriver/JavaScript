const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o negación');
console.log(true); //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaFalse()); //true


console.warn('And &&'); //Devuelve un true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && !false); //true
console.log(false && false); //false

console.log('********* && **********');
console.log( regresaFalse() && regresaTrue() );  
console.log( regresaTrue() && regresaFalse() );
regresaFalse() && regresaTrue();

console.log('********** || **********'); //Devuelve un true si lo encuentra en la condicion, caso contrario devuelve siempre un false
console.log(true || false);
console.log(false || false || false || false || true);

console.log(regresaFalse() || regresaTrue());
console.log( regresaTrue() || regresaFalse() ); //Como se cumple el true en la primera condicion, ya no sigue buscando mas

console.warn('Asignaciones');

const soyUndefine = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = 'Hola' || 'Mundo' || soyFalso || true;
const a4 = soyFalso || 'Ya no soy falso' || false;
const a5 = soyFalso || soyUndefine || soyNull || 'Ya no soy falso de nuevo' || true;
const a6 = soyFalso || soyUndefine || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5, a6});

if( regresaFalse() && regresaTrue() && (true || false || true || false) ) {
    console.log('Hacer alguna cosa');
} else {
    console.log('Hacer otra nueva cosirijilla');
}