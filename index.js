const inquirer = require("inquirer");
const fs = require('fs');
// array of questions for user
function questions() {
  return inquirer
    .prompt([
      /* Pass your questions in here */
      {type: "input", message: "What is the title for your project?", name: "title"},
      {type: "input", message: "What is the description of your project?", name: "description"},
      {type: "list", message: "What licence would you like to use?", name: "licence", choices: ["MIT", "ISC"]},
      {type: "input", message: "What is your username on GitHub?", name: "gitHub"},
      {type: "input", message: "what is your email address?", name: "email"},
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }
    });
}

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
    try {
        const response = await questions();
        console.log("File created successfully!")
    } catch{
     console.log(err);   
    }
}

// function call to initialize program
init();
