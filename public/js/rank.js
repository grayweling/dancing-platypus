const User = require('../models/user');

function getRanks(){
    top10users = User.slice(0,10)
    table_rank = document.getElementById("rank_table").rows;

    for (let i = 0; i < table_rank.length; i++) {
        const row =  table_rank[i];
        var user = top10users[i];
        for (let i = 0; i < row.cells.length; i++) {
            var cell = row.cells[i];
            var name = user.username;
            var score= user.score;

            if (cell.className == "username") {
                cell.innerText = name;
            };
            if (cell.className == "clicks") {
                cell.innerText = score;
            };
        }

    }
}

getRanks();