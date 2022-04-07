const dummy_data = 
    [
        {
            "userid  ": 1,
            "username": "Brian",
            "userscore": 120
        },
        {
            "userid  ": 2,
            "username": "Bradley",
            "userscore": 118
        }
        ,
        {
            "userid  ": 3,
            "username": "John",
            "userscore": 93
        },
        {
            "userid  ": 4,
            "username": "Madelyn",
            "userscore": 88
        },
        {
            "userid  ": 5,
            "username": "Olivia",
            "userscore": 60
        },
        {
            "userid  ": 6,
            "username": "Rudy",
            "userscore": 57
        },
        {
            "userid  ": 7,
            "username": "Brenda",
            "userscore": 45
        },
        {
            "userid  ": 8,
            "username": "Adrian",
            "userscore": 40
        },
        {
            "userid  ": 9,
            "username": "Cindy",
            "userscore": 12
        },
        {
            "userid  ": 10,
            "username": "Zara",
            "userscore": 1
        }
        ];

function getRanks(){
    top10users = dummy_data.slice(0,10)
    table_rank = document.getElementById("rank_table").rows;

    for (let i = 0; i < table_rank.length; i++) {
        const row =  table_rank[i];
        var user = top10users[i];
        for (let i = 0; i < row.cells.length; i++) {
            var cell = row.cells[i];
            var name = user.username;
            var score= user.userscore;

            if (cell.className == "nick") {
                cell.innerText = name;
            };
            if (cell.className == "clicks") {
                cell.innerText = score;
            };
        }

    }
}

getRanks();