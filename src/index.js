  
document.addEventListener("DOMContentLoaded", () => {
    const player = new Player('Ray');
    const dealer = new Player('Dealer')
    
    const game = new Game(1, 0, 0, 0, player, dealer, { debugOptions: ['HIT', 'HIT', 'HIT'] });
    API.fetchGameInfo();

    game.startGame();

})


