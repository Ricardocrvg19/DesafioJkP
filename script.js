// const result = document.querySelector("#result")
// const ourScore = document.querySelector("#our-score")
// const machineScore = document.querySelector("#machine-score")


// let ourScoreNumber = 0
// let machineScoreNumber = 0


// const humanPlay = (humanChoice) => {
//     timeToPlay(humanChoice, machinePlay())
// }

// const machinePlay = () => {
//     const choices = ["rock", "paper", "scissors"]
//     const randomNumber = Math.floor(Math.random() * 3)

//     return choices[randomNumber]
// }

// const timeToPlay = (human, machine) => {

//     console.log("Humano " + human + " Maquina " + machine)

//     if (human === machine) {
//         result.innerHTML = "Empatou &#x1F4A9&#x1F4A9"
//     } else if (
//         (human === "rock" && machine === "scissors") ||
//         (human === "paper" && machine === "rock") ||
//         (human === "scissors" && machine === "paper")
//     ) {
//         ourScoreNumber++
//         ourScore.innerHTML = ourScoreNumber
//         result.innerHTML = "Ganhou &#x1F601&#x1F601"
//     } else {
//         machineScoreNumber++
//         machineScore.innerHTML = machineScoreNumber
//         result.innerHTML = "Fracasso &#x1F624&#x1F624"
//     }
// }


const GAME_NUMBERS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const result = document.querySelector("#result")
const ourScore = document.querySelector("#our-score")
const machineScore = document.querySelector("#machine-score")
const yourChoice = document.querySelector("#your-choice")
const machineChoice = document.querySelector("#machine-choice")


let ourScoreNumber = 0
let machineScoreNumber = 0


const humanPlay = (playHuman) => {

    timeToPlay(playHuman, machinePlay())
}

const machinePlay = () => {
    const choices = [GAME_NUMBERS.ROCK, GAME_NUMBERS.PAPER, GAME_NUMBERS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
    
}

const timeToPlay = (human, machine) => {
    console.log(" Humano => " + human + " maquina => " + machine)

    if (human === machine) {
        result.src = "./assets/teste-image.jpg"
        yourChoice.innerHTML = human 
        machineChoice.innerHTML = machine 
    } else if (
        (human === GAME_NUMBERS.ROCK && machine === GAME_NUMBERS.SCISSORS) ||
        (human === GAME_NUMBERS.PAPER && machine === GAME_NUMBERS.ROCK) ||
        (human === GAME_NUMBERS.SCISSORS && machine === GAME_NUMBERS.PAPER)
    ) {
        ourScoreNumber++
        ourScore.innerHTML = ourScoreNumber
        result.src = "./assets/teste-image-ganhou.jpg"
        yourChoice.innerHTML = human
        machineChoice.innerHTML = machine
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.src = "./assets/teste-image-3.jpg"
        yourChoice.innerHTML = human
        machineChoice.innerHTML = machine
        
    }

}