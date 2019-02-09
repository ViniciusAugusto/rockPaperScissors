const Winner = (player1, player2) => {
    let s1 = player1[1];
    let s2 = player2[1];
    let isValid = (s) => s.search(/[RPS]/i)
    if (isValid(s1) < 0 || isValid(s2) < 0) {
        return new Error('Strategy must be one of R,P,S')
    }

    if (s1 != s2) {
        if (s1 === 'R') {
            if (s2 === 'S') {
                return player1
            }
            return player2
        }
        if (s1 === 'S') {
            if (s2 === 'P') {
                return player1
            }
            return player2
        }
        if (s1 === 'P') {
            if (s2 === 'R') {
                return player1
            }
            return player2
        }
    } else {
        return player1
    }
}

const Tournament = (arrayOfPlayers) => {
    let key1 = arrayOfPlayers[0];
    let key2 = arrayOfPlayers[1];
    let winnerKey1 = RockPaperScissors.Winner(RockPaperScissors.Winner(key1[0][0], key1[0][1]), RockPaperScissors.Winner(key1[1][0], key1[1][1])) 
    let winnerKey2 = RockPaperScissors.Winner(RockPaperScissors.Winner(key2[0][0], key2[0][1]), RockPaperScissors.Winner(key2[1][0], key2[1][1])) 
    let winnerOfTournament = RockPaperScissors.Winner(winnerKey1, winnerKey2);
    return {
        winnerFirstKey: winnerKey1,
        winnerSecondKey: winnerKey2,
        winnerOfTournament
    }
}


const RockPaperScissors = {
    Winner: Winner,
    Tournament: Tournament
}

const win = RockPaperScissors.Winner(['ARMANDO', 'P'], ['DAVE', 'S']);
console.log('Individual Fight')
console.log(`Armando Versus Dave => WINNER => ${win}`);
console.log('===========================================');
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
console.log('Tournament of Best')
let objOfTorunament = RockPaperScissors.Tournament(playersOfTournament)
console.log(`Winner of First Key => ${objOfTorunament.winnerFirstKey}`)
console.log(`Winner of Second Key => ${objOfTorunament.winnerSecondKey}`)
console.log(`Winner of Tournament => ${objOfTorunament.winnerOfTournament}`)
