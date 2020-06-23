class Rectangulo {
    #area = 0;

    constructor( base = 0, altura = 0 ){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }
}

const areaRectangulo = new Rectangulo (10,15);
// areaRectangulo.#area = 40;
console.log(areaRectangulo);