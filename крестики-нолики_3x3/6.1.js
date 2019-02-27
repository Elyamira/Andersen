function gameStart() {
        net = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]
        for (var i = 0; i < 10; i++) {
            turn("X");
            if (winner("X")) {
                console.log("X wins")
                return
            }
            if (draw()) {
                console.log("Draw")
                return
            }
            turn("O");
            if (winner("O")) {
                console.log("O wins")
                return
            }
            if (draw()) {
                console.log("Draw")
                return
            }
        }
    }
    function render(net) {
        for (var i = 0; i < net.length; i++) {
            console.log(net[i])
        }
    }
    function turn(player) {
        console.log(player + " turn")
        coordinate = prompt("your turn");
        x = coordinate.split(" ")[0] - 1;
        y = coordinate.split(" ")[1] - 1;
        net [y][x] = player
        render(net)
    }
    function winner(iks) {
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
    function draw() {
        for (y = 0; y < 3; y++)
            for (x = 0; x < 3; x++)
                if (net[y][x] === 0) {
                    return false
                }
        return true
    }