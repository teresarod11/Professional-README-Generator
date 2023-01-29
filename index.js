// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// Array of questions for user input
const questions = [ 
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "title",
        message: "What title do you want give your project?",

    },
    {
        type: "input",
        name: "description",
        message: "Write a short description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "What command should run to install dependencies?",
        default: "npm i"
    },   
    {
        type: "input",
        name: "usage",
        message: "What information do you want to provide about your repo?",
    },
    {
        type: "input",
        name: "contributions",
        message: "What are your contribution guidelines?",
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?",
        default: "MIT"
    },
    {
        type: "input",
        name: "tests",
        message: "What command do you want to run for tests?",
        default: "npm test"
    },
];

// Function to write README file
function writeToFile(fileName, data) {

        fs.writeFile(fileName, generateMarkdown(data), (err) => {
            if (err) {
                reject(err);
            } else
           console.log('README created!');
        });
    }

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => writeToFile('README.md',data));
};

// Function call to initialize app
init();
