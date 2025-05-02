import Deck from "./Baralla.js";

export default class Jugador{
    constructor(nom, id){
        this._nom = nom;
        this._id = id;
        this._deck = []; //Cartes del jugador
        this._money = 0; //Diners del jugador
    }

    //Getters any setters
    get nom(){
        return this._nom;
    }
    get id(){
        return this._id;
    }

    get Deck(){
        return this._deck;
    }
    get money(){
        return this._money;
    }
    set nom(nom){
        this._nom = nom;
    }
    set id(id){
        this._id = id;
    }

    set Deck(deck){
        this._deck = deck;
    }
    set money(money){
        this._money = money;
    }

}
