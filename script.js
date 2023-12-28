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

function myFunction(rankData) {
    let data = rankData.data.data;

    document.querySelector("#container").innerHTML = `
    <table class="styled-table">
    <tr>
        <th>Hero</th>
        <th>Win</th>
        <th>Picked</th>
        <th>Banned</th>
    </tr>
        ${data.map(e => `
        <tr>
        <td><img alt="icon" src="${e.avatar}"><div class="text">${e.name}</div></td>
        <td>${e.win}</td>
        <td>${e.use}</td>
        <td>${e.ban}</td>
    </tr>
    `).join('')}
    </table>`;
}