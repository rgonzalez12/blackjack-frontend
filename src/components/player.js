class Player {
    constructor(name, currentHand = []) {
        this.name = name;
        this.currentHand = currentHand;
    }

    playerCreation(numberOfPlayers) {
        for (let i = 1; i <= numberOfPlayers; i++) {
            const round = []
            const hand = []
            const player = {Name: '', ID: i, Hand: hand, Wins: wins, Losses: losses, Blackjacks_hit: blackjacks_hit};
            round.push(player)
        }
    }

    currentScore() {
        return this.currentHand.reduce((acc, card) => {
            return acc + card.weight;
        }, 0);
    }

    currentBlackjack() {
        if (this.currentHand.length === 2) {
            return this.currentHand[0].weight + this.currentHand[1].weight === 21;
        }
    }

}