class Game {
    constructor(id, wins, losses, blackjacks_hit) {
        this.id = id
        this.wins = wins
        this.losses = losses
        this.blackjacks_hit = blackjacks_hit
    }

    dealHands() {
        const players = []
        const deck = []
        for(let i = 0; i < 2; i++)
        {
            for (let x = 0; x < players.length; x++)
            {
                let card = deck.pop();
                players[x].Hand.push(card);
                buildCard(card, x);
                updateStats();
            }
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