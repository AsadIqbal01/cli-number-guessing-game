#! /usr/bin/env node
import inqurier from "inquirer";
// 1) computer will genrate a random number
// 2) user input for guessing number 
// 3) compare user input with computer genrated number and show reasult
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inqurier.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number.");
}
else {
    console.log("you guessed worg number");
}
