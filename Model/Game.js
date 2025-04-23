import Jugador from "./Jugador";
import Deck from "./Baralla";

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
        //Crear baralla
        this._deck.crearBaralla(); //Crear baralla
        this._deck.barallar(); //Barallar baralla
        //Crear jugador
        this._jugador = new Jugador(nom); //Inicialitzar jugadors
        this._jugador.money = 100; //Inicialitzar diners del jugador
        this._jugador.deck.push(this._deck.pop()); //Assignar baralla al jugador
        //Crear computer
        this._computer = new Jugador("Computer"); //Inicialitzar computer
        this._computer.deck.push(this._deck.pop()); //Assignar baralla al computer
    }
}