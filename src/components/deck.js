class Deck {


    static buildDeck() {

        const suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
        const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        let deck = []

        for (let i = 0 ; i < ranks.length; i++) {

            for(let x = 0; x < suits.length; x++) {

                let weight = parseInt(ranks[i]);
                if (ranks[i] == "J" || ranks[i] == "Q" || ranks[i] == "K")
                    weight = 10;
                if (ranks[i] == "A")
                    weight = 11;
                let card = { Rank: ranks[i], Suit: suits[x], Weight: weight };
                deck.push(card);
            }
        }
        return deck
    }

    shuffleDeck(deck) {
        
        const i = 0, j = 0, temp = null
      
        for (i = deck.length - 1; i > 0; i -= 1) {
          j = Math.floor(Math.random() * (i + 1))
          temp = deck[i]
          deck[i] = deck[j]
          deck[j] = temp
        }
    }

}