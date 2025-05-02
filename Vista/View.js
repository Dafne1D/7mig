//Classe Card
const CARD_WIDTH = 208;
const CARD_HEIGHT = 319;
const CARD_SUIT = { 'Oros': 0, 'Copas': 1, 'Espadas': 2, 'Bastos': 3 };


export class View{
    constructor(){
        this._divPlayerDeck= document.querySelector('player-deck');
        this._dicDealerDeck = document.querySelector('computer-deck');
    }


    render(player, computer){
        this.playerDeck.innerHTML = '';
        this._dicDealerDeck.innerHTML = '';

        //render player cards
       player.deck.cards.forEach(card => {
        const cardDiv = document.createElement('div');
        this._divPlayerDeck.appendChild(cardDiv);
        });

        //render computer cards
        computer.deck.cards.forEach(card => {
            const cardDiv = document.createElement('div');
            this._dicDealerDeck.appendChild(cardDiv);
        });
    }

    getPlayerHand(card){
        const cartaDiv = document.createElement('div');
        cartaDiv.classList.add('card');

        cartaDiv.stylebackgroundPositionX = `-${(card.value - 1) * CARD_WIDTH}px`;
        cartaDiv.style.backgroundPositionY = `-${CARD_SUIT[card.suit] * CARD_HEIGHT}px`;
        return cartaDiv;

    }

}