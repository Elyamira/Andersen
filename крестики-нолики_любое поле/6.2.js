    game = {}
    game.init = function() {
        this.net = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        for (var i = 0; i < 10; i++) {
            this.turn("X");
            if (this.winner("X", this.net)) {
                console.log("X wins")
                return
            }
            if (this.draw(this.net)) {
                console.log("Draw")
                return
            }
            this.turn("O");
            if (this.winner("O", this.net)) {
                console.log("O wins")
                return
            }
            if (this.draw(this.net)) {
                console.log("Draw")
                return
            }
        }
    }
    game.render = function(net) {
        for (var i = 0; i < net.length; i++) {
            console.log(net[i])
        }
    }
    game.turn = function(player) {
        console.log(player + " turn")
        var coordinate = prompt("your turn");
        var x = coordinate.split(" ")[0] - 1;
        var y = coordinate.split(" ")[1] - 1;
        this.net[y][x] = player
        this.render(this.net)
    }
    game.winner = function(iks, net) {
        if (net[0][0] === iks && net[0][1] === iks && net[0][2] === iks) {
            return true
        }
        if (net[1][0] === iks && net[1][1] === iks && net[1][2] === iks) {
            return true
        }
        if (net[2][0] === iks && net[2][1] === iks && net[2][2] === iks) {
            return true
        }
        if (net[0][0] === iks && net[1][0] === iks && net[2][0] === iks) {
            return true
        }
        if (net[0][1] === iks && net[1][1] === iks && net[2][1] === iks) {
            return true
        }
        if (net[0][2] === iks && net[1][2] === iks && net[2][2] === iks) {
            return true
        }
        if (net[0][0] === iks && net[1][1] === iks && net[2][2] === iks) {
            return true
        }
        if (net[0][2] === iks && net[1][1] === iks && net[2][0] === iks) {
            return true
        }
        return false
    }
    game.draw = function(net) {
        for (y = 0; y < 3; y++)
            for (x = 0; x < 3; x++)
                if (net[y][x] === 0) {
                    return false
                }
        return true
    }
