const inquirer = require("inquirer");
const fs = require('fs');
// array of questions for user
function questions() {
  return inquirer
    .prompt([
      /* Pass your questions in here */
      {},
      {},
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
