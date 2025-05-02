import Jugador from './Jugador.js';
import Deck from './Baralla.js';

export default class Game {
    constructor(){
        this._deck = new Deck(); //Baralla
        this._jugador = []; //Jugadors
        this._computer = null; //Computer
    }

    //Getters any setters
    get deck(){
        return this._deck;
    }

    get jugador(){
        return this._jugadors;
    }

    get computer(){
        return this._computer;
    }

    get guanyador(){
        return this._guanyador;
    }

    get torn(){
        return this._torn;
    }

    //iniciar joc
    initGame(){
        //Crear baralla i barallar
        this._deck.crearBaralla(); 
        this._deck.barallar();

        //Crear jugador
        this._jugador = new Jugador(nom); //Inicialitzar jugadors
        this._jugador.money = 100; //Inicialitzar diners del jugador
        this._jugador.deck.push(this._deck.pop()); //Assignar baralla al jugador
        //Crear computer
        this._computer = new Jugador("Computer"); //Inicialitzar computer
        this._computer.deck.push(this._deck.pop()); //Assignar baralla al computer
    }
    dealCart(player){
        player.deck-push(this._deck.pop()); //Afegir carta a la ma del jugador
    }
}