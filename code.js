let humanScore = 0
let compScore = 0
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
} 
}







function playGames (humanChoice){
    for (let i = 0; i < 5; i++){
    const compChoice = getCompChoice();
    const roundResult = playRound(humanChoice, compChoice);
    updateScores(roundResult);
    
    }displayResults(humanChoice, getCompChoice, roundResult);
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
            playGames('paper')
    });
        scissorButton.addEventListener('click',() =>{
            playGames('Scissor')
    });    
}


function updateScores(result) {
    if (result === "You won") {
        humanScore++;
    } else if (result === "You lose") {
        compScore++;
    }
}

function displayResults(humanChoice, compChoice, roundResult) {
    const roundNumber = humanScore + compScore;
    results.innerHTML += `<p>Round ${roundNumber }: You chose ${humanChoice}, 
    Computer chose ${compChoice}. Result: ${roundResult}. Your score: ${humanScore},
    Computer's score: ${compScore}</p>`;
    
}

buttons()