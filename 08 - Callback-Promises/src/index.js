
// import { obtenerHeroesArr, obtenerHeroesAwait } from './js/await';
import { heroeAwait, heroeCiclo } from './js/await';
import './styles.css';

// console.time('await');
// obtenerHeroesArr().then(heroe => console.table(heroe));
// console.timeEnd('await');

// console.time('await');
// obtenerHeroesAwait('capi').
//     then(heroe => {
//         console.log(heroe)
//         console.timeEnd('await');
//     }).catch(console.warn);

heroeCiclo()
heroeAwait('iron');