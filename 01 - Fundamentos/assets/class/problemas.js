const karen = {
    nombre: 'Karen',
    edad: 18,
    imprimir () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const pedro = {
    nombre: 'Pedro',
    edad: 28,
    imprimir () {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

karen.imprimir();

//TODO: Esto es una funcion que asimila una clase  

function Persona( nombre, edad ){
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 19);
const melissa = new Persona('Melissa', 29);
console.log(maria);
console.log(melissa);
maria.imprimir();
melissa.imprimir();