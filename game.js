//Variables to store the game score
let humanScore = 0;
let computerScore = 0;

//This function randomly decides computer's choice for the game
function getComputerChoice(){
	let randomNumber = Math.random();
	if(randomNumber <= 0.33){
		return "rock";
	} else if(randomNumber > 0.33 && randomNumber <= 0.67){
		return "paper";
	} else{
		return "scissors";
	}
}

//This function accepts the user input for the game
function getHumanChoice(){
	let choice = prompt("Enter your choice(rock, paper or scissors): ");
	return choice;
}


//This function decides the winner of one round and keeps the score
function playRound(humanChoice, computerChoice){
	if(humanChoice.toLowerCase() === computerChoice){
		humanScore++;
		computerScore++;
		console.log("tie! same choice");
	} else if(humanChoice.toLowerCase() === "rock"){
		if(computerChoice === "paper"){    
			computerScore++;             
			console.log("You lose! paper beats rock.");
		} else{   
		//for computer's scissors choice
		//don't include same choice because it is evaluated in the first if statement 
			humanScore++;                                  
			console.log("You win! rock beats scissors.");
		}
	} else if(humanChoice.toLowerCase() === "paper"){
		if(computerChoice === "rock"){
			humanScore++;
			console.log("You win! paper beats rock.");
		} else{
		//for computer's scissors choice
			computerScore++;
			console.log("You lose! scissors beat paper.");
		}
	} else if(humanChoice.toLowerCase() === "scissors"){
		if(computerChoice === "rock"){
			computerScore++;
			console.log("You lose! rock beats scissors.");
		} else{
		//for computer's scissors choice
			humanScore++;
			console.log("You win! scissors beat paper.");
		}
	} else{
		console.log("Invalid choice.");
	}

	return humanScore;
}


//Calls the playRound function 5 times to play and decide the winner of the game
function playGame(){
	while(humanScore <= 5 || computerScore <= 5){
		let humanSelection = getHumanChoice();
		let computerSelection = getComputerChoice();
		console.log("human: " + humanSelection + "   computer: " + computerSelection);

		playRound(humanSelection, computerSelection);
		console.log("human: " + humanScore + "   computer: " + computerScore);
		console.log("\n");

		if(humanScore === 5){
			return "Game over! You win.";
		} else if(computerScore === 5){
			return "Game over! Computer wins."
		}
	}
	
}

console.log(playGame());
