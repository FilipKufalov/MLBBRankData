fetch("https://api.mobilelegends.com/m/hero/getRankData", {
    method: "POST",
    body: JSON.stringify({
        "lang": "en",
        "type": 0,
        "language": "en"
    }),
    headers: {
        "Content-Type": "application/json"
    }
}
)
    .then((response) => response.json())
    .then((json) => { myFunction(json); });

var table = document.getElementById("rankDataTable")

function myFunction(rankData)
{
    for (let i = 0; i < rankData.data.data.length; i++) {
        var tr = document.createElement("tr")
        var tdName = document.createElement("td")
        var tdWin = document.createElement("td")
        var tdPicked = document.createElement("td")
        var tdBanned = document.createElement("td")
    
        tdName.innerHTML = rankData.data.data[i].name
        tdWin.innerHTML = rankData.data.data[i].win
        tdPicked.innerHTML = rankData.data.data[i].use
        tdBanned.innerHTML = rankData.data.data[i].ban
    
        tr.append(tdName)
        tr.append(tdWin)
        tr.append(tdPicked)
        tr.append(tdBanned)
        table.append(tr)
    }
}