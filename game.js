function computerPlay () {
    let choice = Math.floor(Math.random()*3);
    
    if (choice === 0){
        return "rock";
    }
    else if (choice === 1){
        return "paper";
    }
    else if (choice === 2){
        return "scissors";
    }
    else{
        return "error";
    }

}
function playRound (playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        return "error";
    }
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && 
    computerSelection === "rock") || (playerSelection ==="scissors" && computerSelection ==="paper")){
        return "player";
    }
    else if((computerSelection === "rock" && playerSelection === "scissors") || (computerSelection === "paper" && 
    playerSelection === "rock") || (computerSelection ==="scissors" && playerSelection ==="paper")){
        return "computer";
    }
    else{
        return "draw";
    }
}

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

for (let i=0; i<5;i++) {

    playerSelection = prompt("Choose your weapon");
    computerSelection = computerPlay();

    if(playRound(playerSelection, computerSelection)==="player"){
        playerScore++;
        console.log(`Player won ${i+1} round. It's ${playerScore} : ${computerScore}`);
    }
    else if(playRound(playerSelection, computerSelection)==="computer"){
        computerScore++;
        console.log(`Computer won ${i+1} round. It's ${playerScore} : ${computerScore}`);
    }
    else if(playRound(playerSelection, computerSelection)==="error"){
        i--;
        alert("Bad input");
    }
    else{
        console.log(`${i+1} round is draw.`)
    }
}
alert((`The game has ended. The final score is ${playerScore} : ${computerScore}`));
