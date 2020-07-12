document.addEventListener("DOMContentLoaded", () => {
    let newGameButton = document.getElementById('new-game-button');
    newGameButton.addEventListener('click', function() {
        const name_input = document.getElementById('name-input')
        const dealer = new Player('Dealer')
        const player = new Player(name_input.value);
        
        const game = new Game(1, 0, 0, 0, player, dealer, { debugOptions: ['HIT', 'HIT', 'HIT'] });
        name_input.value = ""
        API.fetchGameInfo();
    
        game.startGame();
        const playerHand = game.user.currentHand
        const playerHit = game.hitCard
        const playerStay = game.stay
        const dealerHand = game.dealer.currentHand

        renderDealerHand(dealerHand)
        renderPlayerHand(playerHand)
        
        renderPlayerScore(game.user.currentScore())
        renderHitButton(playerHit)
        renderStayButton(playerStay)
      })
})

const renderPlayerHand = (playerHand) => {
    let gameSection = document.getElementById('game-section')
    let node = document.createElement("H5")
    let node2 = document.createElement("H5")
    let playerCards = document.createTextNode(`Your Hand:`)
    let playerCardOne = document.createTextNode(`${playerHand[0].rank} of ${playerHand[0].suit}`)
    node.appendChild(playerCardOne)

    let playerCardTwo = document.createTextNode(`${playerHand[1].rank} of ${playerHand[1].suit}`)
    node2.appendChild(playerCardTwo)

    gameSection.appendChild(playerCards)
    gameSection.appendChild(node)
    gameSection.appendChild(node2)
    
}

const renderDealerHand = (dealerHand) => {
    let gameSection = document.getElementById('game-section')
    let node = document.createElement("h5")
    let node2 = document.createElement("h5")
    let dealerCards = document.createTextNode(`Dealer Hand:`)
    let dealerCardOne = document.createTextNode(`${dealerHand[0].rank} of ${dealerHand[0].suit}`)
    node.appendChild(dealerCardOne)

    let dealerCardTwo = document.createTextNode(`${dealerHand[1].rank} of ${dealerHand[1].suit}`)
    node2.appendChild(dealerCardTwo)

    gameSection.appendChild(dealerCards)
    gameSection.appendChild(node)
    gameSection.appendChild(node2)
}


const renderPlayerScore = (currentScore) => {
    let gameSection = document.getElementById('game-section')
    let node = document.createElement("UL")
    let playerScore = document.createTextNode(`Current Score: ${currentScore}`)

    node.appendChild(playerScore)
    gameSection.appendChild(node)
}

const renderHitButton = (hitCard) => {
    let gameSection = document.getElementById('game-section')
    let node = document.createElement("BUTTON")
    let playerHit = document.createTextNode(`Hit`)

    node.appendChild(playerHit)
    gameSection.appendChild(node)
}

const renderStayButton = (stay) => {
    let gameSection = document.getElementById('game-section')
    let node = document.createElement("BUTTON")
    let playerStay = document.createTextNode(`Stay`)

    node.appendChild(playerStay)
    gameSection.appendChild(node)
}