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
        console.log(this.nombre);
        console.log('Hola soy un método estático xD')
    }

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase' ){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
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



class Heroe extends Persona {
    clan = '';
    constructor (nombre, codigo, frase, clan = 'Los Avengers'){
        super(nombre, codigo, frase);
        this.clan = clan;
    }

    imprimir() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.imprimir();
    }
}

const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino araña', );
console.log(spiderman);
spiderman.imprimir();