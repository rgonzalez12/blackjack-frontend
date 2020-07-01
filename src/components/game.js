////// ORCHESTRATION ///////

const user = new Player('Ray');
const dealer = new Player('Dealer');
const blackjack = new Game(1, 0, 0, 0, user, dealer)

////////////////////////////////////



class Game {
    constructor(id, wins, losses, blackjacks_hit, user, dealer) {
        this.id = id
        this.wins = wins
        this.losses = losses
        this.blackjacks_hit = blackjacks_hit
        this.user = user;
        this.dealer = dealer;
    }

    startGame() {
        let deck = new Deck();
        deck = deck.buildDeck();
        deck = deck.shuffleDeck();
        this.dealHands(deck);
        this.waitForUserInput(deck);
    }

    waitForUserInput(deck) {
        const userChoice = 'HIT';
        if (userChoice === 'HIT') {
            this.hitCard(deck, this.user);
        } else {
            this.stay(deck, this.user);
        }


    }

    dealHands(deck) {
        for (let i = 0; i < 2; i++) 
        {
            this.dealCardToPlayer(deck, this.dealer);
            this.dealCardToPlayer(deck, this.user);
        }
    }

    dealCardToPlayer(deck, player) {
        const card = deck.pop();
        player.currentHand.push(card);
    }

    hitCard(deck, playerThatHit) {
        this.dealCardToPlayer(deck, playerThatHit);
        if (this.checkForBust(playerThatHit)) {
            this.updateGameState(false, false);
            // Restart Game
        } else { 
            const isBlackjack = this.checkForBlackjack(playerThatHit);
            this.updateGameState(true, isBlackjack);
        }
    }

    stay(deck, user) {
        

    }

    updateGameState(isWin, isBlackjack) {
        if (isWin) {
            this.wins += 1;

            if (isBlackjack) {
                this.blackjacks_hit += 1;
            }
        } else {
            this.losses += 1;
        }

        // Ajax request update game state
    }

    checkForBust(player) {
        return this.player.currentScore() > 21;
    }

    checkForBlackjack(player) {
        return this.player.currentBlackjack();
    }

    hitButton.addEventListner('click', function() {
        playerHand.push(drawCard());
        checkWinCondition();
        runGameStatus();
    })

}