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
            // do STAY things
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
        checkForBust();
    }
    
    checkForBust() {
        return this.user.points > 21;
    }

    hitButton.addEventListner('click', function() {
        playerHand.push(drawCard());
        checkWinCondition();
        runGameStatus();
    })

}