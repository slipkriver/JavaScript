const heroes = {
    capi: {
        nombre: 'Capitán  América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Tener mucho dinero'
    },
    spidy: {
        nombre: 'Spiderman',
        poder: 'No ser alergico a bichos radioactivos'
    }
}

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if(heroe){
        callback(null, heroe);
    }
    else{
        callback(`No existe un héroe con el id ${id}`);
    }
    // callback(heroe);
}