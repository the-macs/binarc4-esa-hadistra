const options = ['batu', 'kertas', 'gunting']

let playerName

if (localStorage.getItem("player-name") === null) {
    playerName = prompt("Please enter your name", "the-macs");

    while (!playerName || playerName.length > 10) {
        if (playerName && playerName.length > 10)
            alert('Player name cannot more than 10. Please input your name again.')
        playerName = prompt("Please enter your name", "the-macs");

    };

    if (playerName)
        localStorage.setItem("player-name", playerName);
} else {
    playerName = localStorage.getItem("player-name")
}

let playerSection = `
    <div class="col-12 d-inline-block">
        <h1 class="subtitle-rps d-inline">${playerName.toUpperCase()} </h1>
        <span role="button" class="d-inline align-top cursor" onclick="Suit.changePlayerName()"><i class="bi bi-pencil"></i></span>
    </div>
`
let comSection = `
    <div class="col-12">
        <h1 class="subtitle-rps">COM</h1>
    </div>
`

options.forEach(function (item) {
    playerSection += `
        <div class="col-4 col-md-12">
            <button class="choices-rps cursor-player my-3" id="player-${item}"
                onclick="suit.playerChoice('${item}')">
                <img class="img-fluid img-rps img-rps-player""
                    src=" ./assets/${item}.png" alt="${item}">
            </button>
        </div>
    `
    comSection += `
        <div class="col-4 col-md-12">
            <button class="choices-rps cursor-com my-3" id="com-${item}">
                <img class="img-fluid img-rps" src="./assets/${item}.png" alt="${item}">
            </button>
        </div>
    `
})

document.getElementById('player-section').innerHTML = playerSection
document.getElementById('com-section').innerHTML = comSection

const suit = new Suit()