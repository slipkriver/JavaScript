const listaTweets = document.querySelector('#lista-tweets'),
      formulario = document.querySelector('#formulario'),
      tweet = document.querySelector('#tweet');

//EVENT LISTENER

//Agregar un nuevo tweet
formulario.addEventListener('submit', (event) => { 
    event.preventDefault();
    agregarTweet();
});

//ELiminar un tweet
listaTweets.addEventListener('click', (event) => {
    event.preventDefault();
    borrarTweet();
});

document.addEventListener('DOMContentLoaded', () => {
    localStorageListo();
});

//FUNCIONES

const agregarTweet = () => {
    const liNuevo = document.createElement('li');
    const borrarTweet = document.createElement('a');
    borrarTweet.classList = 'borrar-tweet';
    liNuevo.innerText = tweet.value;
    borrarTweet.innerText = 'x';
    listaTweets.appendChild(liNuevo);
    liNuevo.appendChild(borrarTweet);
    agregarTweetLocalStorage(tweet);
    tweet.value = '';
}

const borrarTweet = () => {
    if(event.target.className === 'borrar-tweet'){
        event.target.parentElement.remove();
        borrarTweetLocalStorage(event.target.parentElement.innerText);
    }
}

const localStorageListo = () => {
    let tweets;
    tweets = obtenerTweetLocalStorage();
    tweets.forEach(tweet => {
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el botón de borrar al tweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);
});
console.log(tweets);
}

const agregarTweetLocalStorage = (tweet) => {
    let tweets;
    tweets = obtenerTweetLocalStorage();
    // Añadir el nuevo tweet
    tweets.push(tweet.value);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

const obtenerTweetLocalStorage = () => {
    let tweets;
    if (localStorage.getItem('tweets') === null){
        tweets = [];
    }
    else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

const borrarTweetLocalStorage = (tweet) => {
    let tweets, tweetBorrar;
    tweetBorrar = tweet.substring(0, tweet.length - 1);
    tweets = obtenerTweetLocalStorage();

    tweets.forEach((tweet, index) => {
        if(tweetBorrar === tweet){
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
}