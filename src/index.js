document.addEventListener("DOMContentLoaded", () => {
    let newGameButton = document.getElementById('new-game-button');
    newGameButton.addEventListener('click', function() {
        const name_input = document.getElementById('name-input')
        const player = new Player(name_input.value);
        const dealer = new Player('Dealer')
        
        const game = new Game(1, 0, 0, 0, player, dealer, { debugOptions: ['HIT', 'HIT', 'HIT'] });
        name_input.value = ""
        API.fetchGameInfo();
    
        game.startGame();
        const playerHand = game.user.currentHand

        renderPlayerHand(playerHand)
        renderPlayerScore(game.user.currentScore())
    
        gameStarted = true;
        gameOver = false;
        playerWon = false;
      })
})

const renderPlayerHand = (playerHand) => {
    let gameSection = document.getElementById('game-section')
    let node = document.createElement("LI")
    let node2 = document.createElement("LI")
    let playerCardOne = document.createTextNode(`${playerHand[0].rank} of ${playerHand[0].suit}`)
    node.appendChild(playerCardOne)

    let playerCardTwo = document.createTextNode(`${playerHand[1].rank} of ${playerHand[1].suit}`)
    node2.appendChild(playerCardTwo)

    gameSection.appendChild(node)
    gameSection.appendChild(node2)
}

const renderPlayerScore = (currentScore) => {
    let gameSection = document.getElementById('game-section')
    let node = document.createElement("UL")
    let playerScore = document.createTextNode(`Current Hand: ${currentScore}`)

    node.appendChild(playerScore)
    gameSection.appendChild(node)
}