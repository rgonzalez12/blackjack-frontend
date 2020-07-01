class Player {
    constructor(name, currentHand = []) {
        this.name = name;
        this.currentHand = currentHand;
    }

    playerCreation(numberOfPlayers) {
        for (let i = 1: i <= numberOfPlayers; i++) {
            const round = []
            const hand = []
            const player = {Name: '', ID: i, Hand: hand, Wins: wins, Losses: losses, Blackjacks_hit: blackjacks_hit};
            round.push(player)
        }
    }

    renderPlayerInterface() {
        let players = []
        document.getElementById('players').innerHTML = '';
        for (let i = 0; i < players.length; i++) {
            const player_div = document.createElement('div');
            const hand_div = document.createElement('div');
            const wins_div = document.createElement('div');
            const losses_div = document.createElement('div');
            const bjh_div = document.createElement('div');
        }
    }

}