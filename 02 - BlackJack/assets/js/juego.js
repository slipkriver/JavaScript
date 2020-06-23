const miModulo = (() => {
    'use strict'
        /*
    * 2C = Two of Clubs
    * 2D = Two of Diamonds
    * 2H = Two of Hearts
    * 2S = Two of Spades
    */

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];
    // let puntosJugador = 0,
    //     puntosComputadora = 0;

    let puntosJugadores = [];

    //Referencias del HTMl
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const mostrarPuntos = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');

    //Funcion que me permite inicializar el juego
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck();
        puntosJugadores = [];
        for (let i=0; i<numJugadores; i++){
            puntosJugadores.push(0);
        }

        mostrarPuntos.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedir.disabled = false;
        btnDetener.disabled = false;
        // console.log(puntosJugadores);
    }

    //Funcion que me permite crear un deck desordenado o aleatorio
    const crearDeck = () => {
        deck = [];
        for ( let i = 2; i <= 10; i++ ){
            for (let tipo of tipos){
                deck.push( i + tipo );
            }
        }

        for (let especial of especiales){
            for (let tipo of tipos){
                deck.push(especial + tipo);
            }
        }

        // deck = _.shuffle(deck);
        return _.shuffle(deck);
    }

    //Funcion que me devuelve una carta del deck, en este caso es la última
    const pedirCarta = () => {
        
        if ( deck.length === 0 ){
            throw 'No hay cartas disponibles';
        }
        // console.log(deck);
        // console.log(carta);
        return deck.pop();
    }

    //Funcion que me permite saber cual es el valor de carta seleccionada
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length-1); // substring me permite manipular los caracteres que existen en ese string
        return  ( isNaN(valor) ) ? 
                ( valor === 'A' ) ? 11 : 10
                            //  : ( valor === 'J' || valor === 'Q' || valor === 'K' )? 10 : 'El valor ingresado no es permitido'
                : valor * 1;
    }

    //turno: 0 = primer jugador y el último sera de la computadora
    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        mostrarPuntos[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    }

    const crearCarta = ( carta, turno ) => {
        const imgCarta = document.createElement('img');
              imgCarta.src = `assets/cartas/${carta}.png`;
              imgCarta.classList.add('carta');
              divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;
        setTimeout(() => {
            if ( puntosComputadora === puntosMinimos ){
                alert('Empate');
            }else if( puntosMinimos > 21 ){
                alert('Computadora Gana');
            }else if( puntosComputadora > 21 ){
                alert('Jugador Gana');
            }else{
                alert('Computadora Gana');
            }
        }, 100 );
    }

    //Función que crea el juego de la computadora
    const turnoComputadora = ( puntosMinimos ) => {
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
        
    }

    // turnoComputadora(12);

    // for ( let i = 0; i <= 100; i++ ){
        // pedirCarta();
    // }

    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);

        if ( puntosJugador > 21 ){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
            // console.warn('Perdiste UwU');
        }else if( puntosJugador === 21 ){
            console.warn('21 Genial!!');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
        // console.log('detener');
    });

    btnNuevo.addEventListener('click', () => {
        // let pos = 1;
        // deck = deck.splice(pos, deck);
        console.clear();
        inicializarJuego();
        
    });
    return {
          nuevoJuego: inicializarJuego
    };
})();


