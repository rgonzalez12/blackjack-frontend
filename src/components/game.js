class Game {
    constructor(id, wins, losses, blackjacks_hit) {
        this.id = id
        this.wins = wins
        this.losses = losses
        this.blackjacks_hit = blackjacks_hit
    }

    oneGameLoop() {
        let deck = new Deck();
        deck = deck.buildDeck();
        deck = deck.shuffleDeck();
        this.dealHands(deck);

    }

    dealHands(deck) {
        const players = []
        for(let i = 0; i < 2; i++)
        {
            let card = deck.pop();
            players[x].Hand.push(card);
            buildCard(card, x);
            updateStats();
        }
        deckChanges();
    }
    
    endGame() {
        if (players[i].points > handValue && players[i].points < 22)
    }

    hitButton.addEventListner('click', function() {
        playerHand.push(drawCard());
        checkWinCondition();
        runGameStatus();
    })

}