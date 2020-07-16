import { buscarHeroeAsync, buscarHeroe } from "./promises";

const heroesIds = ['capi', 'iron', 'spidy'];

export const obtenerHeroesArr = async() => {
    const heoresArr = [];
    for (const id of heroesIds){
        heoresArr.push(buscarHeroe(id));
    }

    return await Promise.all(heoresArr);
}