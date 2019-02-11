const RpsGameWinner = (player1, player2) => {
    let s1 = player1[1]
    let s2 = player2[1]
    let isValid = (s) => s.search(/[RPS]/i)
    if (isValid(s1) < 0 || isValid(s2) < 0)
        return new Error(`Strategy must be one of R,P,S`)

    if (s1 != s2) {
        if (s1 === 'R')
            return (s2 === 'S') ? player1 : player2
        if (s1 === 'S')
            return (s2 === 'P') ? player1 : player2
        if (s1 === 'P')
            return (s2 === 'R') ? player1 : player2
    } else {
        return player1
    }
}

const RpsTournamentWinner = (arrayOfPlayers) => {
    const key1 = arrayOfPlayers[0]
    const key2 = arrayOfPlayers[1]
    let winnerKey1 = RockPaperScissors.Winner(RockPaperScissors.Winner(key1[0][0], key1[0][1]), RockPaperScissors.Winner(key1[1][0], key1[1][1]))
    let winnerKey2 = RockPaperScissors.Winner(RockPaperScissors.Winner(key2[0][0], key2[0][1]), RockPaperScissors.Winner(key2[1][0], key2[1][1]))
    let winnerOfTournament = RockPaperScissors.Winner(winnerKey1, winnerKey2)
    return {
        winnerFirstKey: winnerKey1,
        winnerSecondKey: winnerKey2,
        winnerOfTournament
    }
}

const RockPaperScissors = {
    Winner: RpsGameWinner,
    Tournament: RpsTournamentWinner
}

const win = RockPaperScissors.Winner(['ARMANDO', 'P'], ['DAVE', 'S'])
console.info('Individual Fight')
console.info(`Armando Versus Dave => WINNER => ${win}`)
console.info('===========================================')
let playersOfTournament = [
    [
      [ ["Armando", "P"], ["Dave", "S"] ],
      [ ["Richard", "R"], ["Michael", "S"] ]
    ],
    [
      [ ["Allen", "S"], ["Omer", "P"] ],
      [ ["David E.", "R"], ["Richard X.", "P"] ]
    ]
]
console.info('Tournament of Best')
let objOfTorunament = RockPaperScissors.Tournament(playersOfTournament)
console.info(`Winner of First Key => ${objOfTorunament.winnerFirstKey}`)
console.info(`Winner of Second Key => ${objOfTorunament.winnerSecondKey}`)
console.info(`Winner of Tournament => ${objOfTorunament.winnerOfTournament}`)
