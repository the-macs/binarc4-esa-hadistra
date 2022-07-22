const options = ['batu', 'kertas', 'gunting']

let person = prompt("Please enter your name", "Harry Potter");

while (!person) {
    person = prompt("Please enter your name", "Harry Potter");
};

let playerSection = `
    <div class="col-12">
        <h1 class="subtitle-rps">${person.toUpperCase()}</h1>
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