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

let personScore = document.querySelector(".humanScore");
let humanScore = parseInt(personScore.textContent);
let machineScore = document.querySelector(".computerScore");
let computerScore = parseInt(machineScore.textContent);

let result = document.querySelector(".results");
let roundResult = document.createElement("p");
roundResult.className = "roundDescription";

let winner = document.createElement("p");
winner.className = "gameOver";

const buttons = document.querySelectorAll("button");

function playRound(humanChoice, computerChoice){
	if(humanChoice.toLowerCase() === computerChoice){
		personScore.textContent = ++humanScore;
		machineScore.textContent = ++computerScore;
		result.prepend(roundResult);
		roundResult.textContent = "Tie! same choice";
	} else if(humanChoice.toLowerCase() === "rock"){
		if(computerChoice === "paper"){    
			machineScore.textContent = ++computerScore;             
			result.prepend(roundResult);
			roundResult.textContent = "You lose! paper beats rock.";
		} else{    
			personScore.textContent = ++humanScore;                                  
			result.prepend(roundResult);
			roundResult.textContent = "You win! rock beats scissors.";
		}
	} else if(humanChoice.toLowerCase() === "paper"){
		if(computerChoice === "rock"){
			personScore.textContent = ++humanScore;
			result.prepend(roundResult);
			roundResult.textContent = "You win! paper beats rock.";
		} else{
			machineScore.textContent = ++computerScore;
			result.prepend(roundResult);
			roundResult.textContent = "You lose! scissors beat paper.";
		}
	} else if(humanChoice.toLowerCase() === "scissors"){
		if(computerChoice === "rock"){
			machineScore.textContent = ++computerScore;
			result.prepend(roundResult);
			roundResult.textContent = "You lose! rock beats scissors.";
		} else{
			personScore.textContent = ++humanScore;
			result.prepend(roundResult)
			roundResult.textContent = "You win! scissors beat paper.";
		}
	}

	if(humanScore === 5 && computerScore === 5){
		result.appendChild(winner);
		winner.textContent = "Game over! Tied.";
		buttons.forEach(button => button.removeEventListener("click", playGame));
		roundResult.textContent = "REFRESH THE PAGE TO RESTART!";
	} else if(humanScore === 5){
		result.appendChild(winner);
		winner.textContent = "Game over! You win.";
		buttons.forEach(button => button.removeEventListener("click", playGame));
		roundResult.textContent = "REFRESH THE PAGE TO RESTART!";
	} else if(computerScore === 5){
		result.appendChild(winner);
		winner.textContent = "Game over! Computer wins.";
		buttons.forEach(button => button.removeEventListener("click", playGame));
		roundResult.textContent = "REFRESH THE PAGE TO RESTART!";
	}

	return humanScore;
}

let humanSelection;
let computerSelection;


let playGame = function(event){
	humanSelection = event.target.textContent;
	computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);
	console.log("human: " + humanSelection + "   computer: " + computerSelection);
}

buttons.forEach(button => button.addEventListener("click", playGame));

