class API {

    static fetchGameInfo() {
        fetch('http://localhost:3000/games')
        .then(response => response.json())
        .then(games => {
            games.forEach(game => {
                const {id, wins, losses, blackjacks_hit, user, dealer, player, player_id} = game
                new Game(id, wins, losses, blackjacks_hit, user, dealer, player, player_id)
            })
        }) 
    }

    static fetchScores() {
        // GET http://localhost:3000/scores => [list of things that have scores]

    }

    static createGame() {
        const name = document.querySelector('#ray-input');
        fetch('http://localhost:3000/games', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                game: {
                    wins: 0,
                    losses: 0,
                    blackjacks_hit: 0,
                    player_attributes: {
                        name: name.value
                    }
                }
            })
        })
        .then((response) => response.json())
        .then((game) => {
            new Game(game.id, game.wins, game.losses, game.blackjacks_hit, game.player.name)
        })
    }

    static updateGameStats () {
        
    }

}