// Define a function to start the game
function startGame() {
  console.log("Welcome to the Simple Console Game!");
  console.log("You find yourself in a dark room.");
  console.log("There are two doors in front of you, one on the left and one on the right.");

  // Call a function to prompt the player for their choice
  chooseDoor();
}

// Define a function to prompt the player for their choice
function chooseDoor() {
  console.log("Which door do you want to go through? (Type 'left' or 'right')");

  // Use the 'prompt' function to get user input
  const userInput = prompt("Your choice: ");

  // Check the user's input and respond accordingly
  if (userInput === "left") {
    console.log("You chose the left door and found a treasure chest!");
  } else if (userInput === "right") {
    console.log("You chose the right door and fell into a pit. Game over!");
  } else {
    console.log("Invalid choice. Please type 'left' or 'right'.");
    // Call chooseDoor function again to ask for a valid choice
    chooseDoor();
  }
}

// Start the game when the script is loaded
startGame();
