class Game {
    constructor(id, wins, losses, blackjacks_hit) {
        this.id = id
        this.wins = wins
        this.losses = losses
        this.blackjacks_hit = blackjacks_hit
    }

    static dealHands()
    {
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

}