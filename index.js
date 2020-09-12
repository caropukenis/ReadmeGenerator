const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./assets/generateMarkdown");

// array of questions for user
inquirer.prompt([
  /* Pass your questions in here */
  {
    type: "input",
    message: "What is the title for your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "list",
    message: "What licence would you like to use?",
    name: "licence",
    choices: ["MIT", "ISC", "GNU GPLv3", "Apache"],
  },
  {
    type: "input",
    message: "What is your username on GitHub?",
    name: "gitHub",
  },
  { type: "input", message: "what is your email address?", name: "email" },
  {
    type: "inout",
    message: "Is anyone else working on this project with you?",
    name: "contributors",
  },
  {
    type: "input",
    message:
      "Please list any instructions how to test your project, if none, write none.",
    name: "tests",
  },
]);

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    }
    console.log("README.md was created");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions);

  writeToFile("README.md", response);
}

// function call to initialize program
init();
