class Game {
    constructor(id, wins, losses, blackjacks_hit, user, dealer, debug) {
        this.id = id
        this.wins = wins
        this.losses = losses
        this.blackjacks_hit = blackjacks_hit
        this.user = user;
        this.dealer = dealer;
        this.deck = null;

        if (debug) {
            this.debug = debug;
            this.debugGameOver = false;
        }
    }

    startGame() {
        let deck = new Deck();
        console.log('building deck');
        deck.buildDeck();
        console.log('shuffling deck');
        deck.shuffleDeck();
        this.deck = deck;
        console.log('dealing hands to players');
        this.dealHands();

        const isBlackjack = this.checkForBlackjack(this.user);
        if (isBlackjack) {
            return this.updateGameState(true, isBlackjack);
        }

        if (this.debug) {
            this.debug.debugOptions.forEach((debugOption) => {
                if (!this.debugGameOver) {
                    this.waitForUserInput(debugOption);            
                }
            });
        }
    }

    waitForUserInput(userChoice) {
        if (userChoice === 'HIT') {
            console.log('User Hit');
            this.hitCard(this.user);
        } else {
            console.log('User Stayed');
            this.stay(this.user);
        }
    }

    dealHands() {
        for (let i = 0; i < 2; i++) 
        {
            this.dealCardToPlayer(this.dealer);
            this.dealCardToPlayer(this.user);
        }
    }

    dealCardToPlayer(player) {
        const card = this.deck.currentDeck.pop();
        console.log('dealing card ', card.rank, 'to player ', player.name);
        player.currentHand.push(card);
    }

    hitCard(playerThatHit) {
        this.dealCardToPlayer(playerThatHit);
        if (this.checkForBust(playerThatHit)) {
            this.updateGameState(false, false);
        }
    }

    stay(user) {
        if (this.checkForBust(this.dealer)) {
            return this.updateGameState(true, false);
        } else if (this.checkForSeventeen(this.dealer)) {
            const isWin = user.currentScore() > this.dealer.currentScore();
            return this.updateGameState(isWin, false);
        } else {
            this.hitCard(this.dealer);
            return this.stay(user);
        }
    }

    updateGameState(isWin, isBlackjack) {
        console.log('updating game state');
        if (isWin) {
            console.log('player won:', this.user.currentScore());
            this.wins += 1;

            if (isBlackjack) {
                console.log('player hit blackjack')
                this.blackjacks_hit += 1;
            }
        } else {
            console.log('player lost:', this.user.currentScore());
            this.losses += 1;
        }

        if (this.debug) {
            this.debugGameOver = true;
            return; 
        }
        // Ajax request update game state

        this.startGame();
    }

    checkForBust(player) {
        return player.currentScore() > 21;
    }

    checkForBlackjack(player) {
        return player.currentBlackjack();
    }

    checkForSeventeen(player) {
        return player.currentScore() > 16;
    }

}