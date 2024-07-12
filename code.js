let humanScore = 0
let compScore = 0

function getCompChoice(){
    let compChoice = Math.floor(Math.random()*3)
    if (compChoice === 0){
        return "Rock"
    } else if (compChoice === 1){
        return "Paper"
    } else {
    return "Scissor" }
  }
//what if i do this then commit?
function getHumanChoice (x){
    // let choose = prompt("What are you choosing!")
    // choose = choose.toLowerCase()

    if (choose === "rock"){
        return "Rock"
    } else if (choose === "paper"){
        return "Paper"
    } else if (choose === "scissor" || choose === "scissors"){
        return "Scissor"
    } else {
        return "wrong"}

}

function playRound (humanChoice, computerChoice) {
    if( humanChoice === computerChoice){
        return "Its a draw"
    } else if (humanChoice === "Rock" && computerChoice === "Scissor" ||
                humanChoice === "Scissor" && computerChoice === "Paper" ||
                humanChoice === 'Paper' && computerChoice === "Rock"
    ){
        humanScore += 1  
        return "You won";
    } else {
        compScore += 1;
        return "You lose"
} 
}




function playGames (x){

    for (i = 0 ;i < x ;i++){
        let humanChoice = getHumanChoice();
        let compChoice = getCompChoice();
        const roundResult = playRound(humanChoice, compChoice)
        console.log(`${i + 1} Round`);
        console.log(`you chose: ${humanChoice}`)
        console.log(`the computer chose: ${compChoice} : ${roundResult}`)
        console.log(`the current socre for you is: ${humanScore}`)
        console.log(`the current socre for the Computer is: ${compScore}`)
        console.log("~~~~~~~~~~~~~")
        
    } if (humanScore > compScore){
        console.log("You Won!!!")
    } if (compScore > humanScore){
        console.log("You Lose :(")
    } if (humanScore == compScore){
        console.log("Whew! close game")
    } const playAgain = confirm("Would you like to go again?")
    if (playAgain){
        humanScore = 0, 
        compScore = 0,
        playGames(5)
    } else (
        console.log('------------'),
        console.log("Come Again!")
    )
}  

playGames(1);


const Rock = document.getElementById("Rock")
Rock.addEventListener(getHumanChoice())

// 