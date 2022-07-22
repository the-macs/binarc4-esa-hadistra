class Suit {
    constructor() {
        this.choices = ['Batu', 'Gunting', 'Kertas']
    }

    choosen = (pId, cId) => {
        var playerElement = document.getElementById("player-" + pId.toLowerCase());
        var comElement = document.getElementById("com-" + cId.toLowerCase());
        playerElement.classList.add("choosen");
        comElement.classList.add("choosen");
    }

    comChoice = () => {
        var randomChoices = Math.floor(Math.random() * 3);
        return this.choices[randomChoices];
    }

    resultChoice = (playerChoice, comChoice) => {
        if (playerChoice === "Kertas" && comChoice === "Batu" || playerChoice === "Batu" && comChoice === "Gunting" || playerChoice === "Gunting" && comChoice === "Kertas") {
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

    playerChoice = (value) => {
        let comChoices = comChoice()
        let resultChoices = resultChoice(value, comChoices)

        choosen(value, comChoices)

        disablePlayerChoosing();

        console.log('Player Choice => ' + value)
        console.log('Computer Choice => ' + comChoices)
        console.log('Result => ' + resultChoices)
        console.log('=====================================================================')

    }

}