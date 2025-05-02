import Game from './Game.js';
import View from './View.js';


export default class Controller{
    constructor(){
        //Creació d'instancies
        this._model = new Game();
        this._view = new View();
        this._model.initGame();
    }
    run(){
        this._view.render(this._model.player, this._model.computer);
    }
}
