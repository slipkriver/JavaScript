const carrito = document.querySelector('#carrito'),
      cursos = document.querySelector('#lista-cursos'),
      listaCursos = document.querySelector('#lista-carrito tbody');

//Event Listeners

cursos.addEventListener('click', (event) =>{
    comprarCurso(event);
});

carrito.addEventListener('click', (event) => {
    eliminarCurso(event);
});

//Funciones

const comprarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        leerDatosCurso(curso);   
    }
}

const leerDatosCurso = (curso) =>{
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').innerText,
        autor: curso.querySelector('p').innerText,
        precio: curso.querySelector('.precio span').innerText,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    
    insertarCarrito(infoCurso);
}

const insertarCarrito = (curso) => {
    const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100px">
            </td>
            <td class="titulo-curso">${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar-curso" data-id"${curso.id}">
               x</a>
            </td>
        `;
    listaCursos.appendChild(row);
}

const eliminarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
    }
}