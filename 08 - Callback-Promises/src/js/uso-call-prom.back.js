
import { buscarHeroe as buscarHeroeCallBack} from './js/callbacks';
import { buscarHeroe } from './js/promises';
import './styles.css';

const heroeId1 = 'capi',
      heroeId2 = 'spidy';

// buscarHeroe (heroeId, (err, heroe) => {
//     if( err ){
//         console.error(err);
//     }
//     else{
//         console.info(heroe);
//     }
// });

// buscarHeroe(heroeId1).then(heroe => {
//     console.log(`Enviando a ${heroe.nombre}a la guerra`);
// });

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a pelear contra Thanos`);
    }).catch( err => {
        alert(err);
    }).finally( () => {
        console.log('Se termino el promise.all');
    })


console.log('Fin del programa');