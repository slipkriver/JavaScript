// Eliminar de Local Storage
localStorage.clear();

// let elemento;

// elemento = document.querySelector('#header');
// elemento.innerText = 'holis';
// console.log(elemento);

const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.id = 'encabezado';
nuevoEncabezado.innerText = 'Nuevo Encabezado';

const anteriorEncabezado = document.querySelector('#encabezado');
const encabezadoPadre = document.querySelector('#lista-cursos');
encabezadoPadre.replaceChild(nuevoEncabezado, anteriorEncabezado);
console.log(nuevoEncabezado);