class API {

    static fetchGameInfo() {
        fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(games => {
            games.forEach(game => {
                const {id, wins, losses, blackjacks_hit, user, dealer, player, player_id} = game
                debugger
                new Game(id, wins, losses, blackjacks_hit, user, dealer, player, player_id)
            })
        }) 
    }

    static fetchScores() {

    }

    static 




}
