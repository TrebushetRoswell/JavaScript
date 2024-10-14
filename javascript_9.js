const size = 3;
const game = [];
for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j < size; j++) {
        row.push(Math.random() < 0.5 ? 'X' : 'O');
    }
    game.push(row);
    console.log(game[i].join(' '))
}

