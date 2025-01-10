import createPrompt from 'prompt-sync';

// Define a Set to hold the options and their strengths
const options = new Set([
    { option: 'rock', strongAgainst: 'scissors' },
    { option: 'paper', strongAgainst: 'rock' },
    { option: 'scissors', strongAgainst: 'paper' }
]);

// Helper function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    // Find the player's and computer's options in the Set
    const playerOption = [...options].find(opt => opt.option === playerChoice);

    if (playerOption.strongAgainst === computerChoice) {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

// Function to simulate computer choice
function getComputerChoice() {
    const choices = [...options].map(opt => opt.option); // Extract the options from the Set
    return choices[Math.floor(Math.random() * choices.length)];
}

// Main game function
function playGame() {
    const prompt = createPrompt(); // Using prompt-sync for user input
    let playerChoice;
    let bValidChoice;
    do
    {
        playerChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();

        // Validate user input
        if (![...options].map(opt => opt.option).includes(playerChoice)) {
            bValidChoice = false;
            console.log("Invalid choice! Please choose rock, paper, or scissors.");
        }
        else
            bValidChoice = true;
    }
    while (!bValidChoice);

    const computerChoice = getComputerChoice();
    console.log(`Computer chose: ${computerChoice}`);

    const result = determineWinner(playerChoice, computerChoice);
    console.log(result);
}

// Start the game
playGame();