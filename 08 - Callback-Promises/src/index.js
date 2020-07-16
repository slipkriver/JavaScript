
import { obtenerHeroesArr } from './js/await';
import './styles.css';

console.time('await');
obtenerHeroesArr().then(heroe => console.table(heroe));
console.timeEnd('await');