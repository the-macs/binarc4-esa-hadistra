class Suit {
    #choices

    constructor() {
        this.#choices = ['batu', 'kertas', 'gunting']
    }

    playerChoosen = (pId) => {
        let playerElement = document.getElementById("player-" + pId.toLowerCase());
        playerElement.classList.add("choosen");
    }

    comChoosen = (cId) => {
        let comElement = document.getElementById("com-" + cId.toLowerCase());
        comElement.classList.add("choosen");
    }

    comUnchoosen = (cId) => {
        let comElement = document.getElementById("com-" + cId.toLowerCase());
        comElement.classList.remove("choosen");
    }

    comChoice = () => {
        let randomChoices = Math.floor(Math.random() * 3)
        return this.#choices[randomChoices];
    }

    resultChoice = (playerChoice, comChoice) => {
        if (playerChoice === "kertas" && comChoice === "batu" || playerChoice === "batu" && comChoice === "gunting" || playerChoice === "gunting" && comChoice === "kertas") {
            document.getElementById("text-middle").innerHTML = '<h1 class="text-middle-win">Player 1 Win</h1>';
            return 'Win'
        }
        else if (playerChoice == comChoice) {
            document.getElementById("text-middle").innerHTML = '<h1 class="text-middle-draw">Draw</h1>';
            return 'Draw'
        }
        else {
            document.getElementById("text-middle").innerHTML = '<h1 class="text-middle-lose">Com Won</h1>';
            return 'Lose'
        }
    }

    disablePlayerChoosing = () => {
        const collection = document.getElementsByClassName("cursor-player");
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.pointerEvents = "none";
            collection[i].style.cursor = "none";
            collection[i].removeAttribute('onclick')
        }
    }

    randomPick = (value) => {
        let comChoices = this.comChoice()

        this.playerChoosen(value)

        let counter = 0

        let randomInterval = setInterval(() => {
            this.comChoosen(this.#choices[counter])

            setTimeout(() => {
                this.comUnchoosen(this.#choices[counter])

                counter++

                counter = counter == 3 ? 0 : counter
            }, 130)
        }, 150)

        setTimeout(() => {
            clearInterval(randomInterval)
        }, 4900)

        setTimeout(() => {
            let resultChoices = this.resultChoice(value, comChoices)

            this.comChoosen(comChoices)

            console.log('Player Choice => ' + value)
            console.log('Computer Choice => ' + comChoices)
            console.log('Result => ' + resultChoices)
        }, 5000)
    }

    playerChoice = (value) => {
        this.randomPick(value)
        this.disablePlayerChoosing()
    }

    static changePlayerName = () => {
        let playerName = prompt("Please enter your new name", "the-macs");

        if (playerName.length > 10)
            alert('Player name cannot more than 10.')

        if (playerName && playerName.length <= 10) {
            localStorage.setItem("player-name", playerName);
            Suit.refresh()
        }
    }

    static refresh = () => {
        document.location.reload()
    }
}