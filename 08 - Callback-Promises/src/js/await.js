import { buscarHeroeAsync, buscarHeroe } from "./promises";

const heroesIds = ['capi', 'iron', 'spidy'];
const heroesPromesas = heroesIds.map( buscarHeroe );

export const obtenerHeroesArr = async() => {

    return await Promise.all(heroesIds.map(buscarHeroe));

//     const heoresArr = [];
//     for (const id of heroesIds){
//         heoresArr.push(buscarHeroe(id));
//     }

//     return await Promise.all(heoresArr);
}

export const obtenerHeroesAwait = async(id) => {
    
    try{
        const heroe = await buscarHeroeAsync(id);
        return heroe;

    }

    catch(err){
        console.log('-- Catch() --');
        // throw err;
        return{
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }
}

export const heroeCiclo = async() => {
    console.time('Heroes Ciclo');

    for await(const heroe of heroesPromesas){
        console.log(heroe);
    }
    console.timeEnd('Heroes Ciclo');
}

export const heroeAwait = async(id) => {
    if((await buscarHeroeAsync(id)).nombre === 'Ironman'){
        console.log('Es el mas millonario');
    }
    else{
        console.log('Y es exitoso');
    }
}