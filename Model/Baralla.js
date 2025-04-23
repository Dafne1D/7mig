//Imports
import Card from "./Carta";

const SUITS = ['Espases','Oros','Bastos','Copes'];
const VALUES = [1,2,3,4,5,6,7,8,9,10,11,12]

export default class Deck {
    constructor(){
        this._cards = [];
    }
    //Getters any setters

    get cards(){
        return this._cards;
    }

    //Repartir carta
    popCarta(){
        return this._cards.pop(); //Elimina la carta de la baralla i la retorna
    }

    push(carta){
        this._cards.push(carta); //Afegeix la carta a la baralla
    }
    //Generar baralla
    crearBaralla(){
        for (let suit of SUITS){
            for(let value of VALUES){
                this._cards.push(new Card(suit, value));
            }
        }
    }
    //Barallar
    barallar(){
        for (let i = this._cards.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            [this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
        }
    }
}