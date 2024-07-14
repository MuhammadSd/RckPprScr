let humanScore = 0
let compScore = 0
let roundNumber = 0
const results = document.getElementById("textForResults")

function getCompChoice(){
    let compChoice = Math.floor(Math.random()*3)
    if (compChoice === 0){
        return "Rock"
    } else if (compChoice === 1){
        return "Paper"
    } else {
    return "Scissor" }
  }

function playRound (humanChoice, computerChoice) {
    if( humanChoice === computerChoice){
        return "Its a draw"
    } else if  ((humanChoice === "Rock" && computerChoice === "Scissor") ||
                (humanChoice === "Scissor" && computerChoice === "Paper") ||
                (humanChoice === 'Paper' && computerChoice === "Rock")
){ 
        return "You won";
    } else {
        return "You lose"
}}

function updateScores(result) {
    if (result === "You won") {
        humanScore++;
    } else if (result === "You lose") {
        compScore++;
    }
}

function playGames (humanChoice){
 if (humanScore === 5 || compScore === 5){
    const compChoice = getCompChoice();
    const roundResult = playRound(humanChoice, compChoice);
    updateScores(roundResult);
    roundNumber ++;
    displayResults( roundNumber, humanChoice, compChoice, roundResult );
    
} 
   endGame() 
}


function endGame() {
// Example of what happens when the game ends
results.innerHTML += `<p>Game Over. Final Score - Your score: ${humanScore}, Computer's score: ${compScore}</p>`;
// You can also add logic here to reset the game if needed
}

// -----------

function buttons(){
    const rockButton = document.getElementById("chooseRock")
    const paperButton = document.getElementById("choosePaper")
    const scissorButton = document.getElementById("chooseScissor")
    
        rockButton.addEventListener('click',() =>{
            playGames('Rock')
    });
        paperButton.addEventListener('click',() =>{
            playGames('Paper')
    });
        scissorButton.addEventListener('click',() =>{
            playGames('Scissor')
    });    
}

function displayResults(roundNumber, humanChoice, compChoice, roundResult) {
    results.innerHTML += `<p> <br>Round ${roundNumber}</br>: You chose  ${humanChoice}, 
        Computer chose ${compChoice}. Result: ${roundResult}. Your score: ${humanScore},
        Computer's score: ${compScore}</p>`;
}

buttons();