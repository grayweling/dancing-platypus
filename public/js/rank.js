const dummy_data = 
    [
        {
            "userid  ": 1,
            "username": "brian",
            "userscore": 120
        },
        {
            "userid  ": 2,
            "username": "angel",
            "userscore": 100
        }
        ,
        {
            "userid  ": 3,
            "username": "balls",
            "userscore": 90
        },
        {
            "userid  ": 4,
            "username": "hades",
            "userscore": 80
        },
        {
            "userid  ": 5,
            "username": "angel",
            "userscore": 60
        },
        {
            "userid  ": 6,
            "username": "cat",
            "userscore": 50
        },
        {
            "userid  ": 7,
            "username": "dog",
            "userscore": 45
        },
        {
            "userid  ": 8,
            "username": "computer",
            "userscore": 40
        },
        {
            "userid  ": 9,
            "username": "picture",
            "userscore": 12
        },
        {
            "userid  ": 10,
            "username": "picturea",
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