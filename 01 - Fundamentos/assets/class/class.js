class Persona {
    static _conteo = 0;
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';
    
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        // console.log(this.nombre);
        console.log('Hola soy un método estático xD')
    }

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        // this.comida = comida;
        Persona._conteo ++;
    }
    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita (){
        return `La comida favorita de ${this.nombre} es ${this.comida}`
    }

    imprimir() {
        console.log(`Hola me llamo ${this.nombre} mi nombre de héroes es: ${this.codigo}`);
    }

    miFrase() {
        this.imprimir();
        console.log(`Soy: ${this.nombre} y mi frase es: ${this.frase}`);
    }
}

const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino araña' );
const ironman = new Persona( 'Tony Stark', 'Iron Man', 'Yo soy Iron Man' );

// console.log(ironman);
console.log(spiderman);
spiderman.miFrase();
// ironman.imprimir();
spiderman.setComidaFavorita = 'El pie de la tía May';
// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);
// Persona._conteo = 2;

console.log(Persona.conteo);
console.log('El valor del conteo es: ', Persona._conteo)
Persona.mensaje();