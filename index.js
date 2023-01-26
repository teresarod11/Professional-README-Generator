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


// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [ 
    {
        type: "input",
        name: "username",
        question: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        question: "What is your email?",
    },
    {
        type: "input",
        name: "title",
        question: "What title do you want give your project?",

    },
    {
        type: "input",
        name: "description",
        question: "Write a short description of your project.",
    },
    {
        type: "input",
        name: "installation",
        question: "What command should run to install dependencies?",
    },
    {
        type: "input",
        name: "license",
        question: "What kind of license should your project have?",
    },
    {
        type: "input",
        name: "tests",
        question: "What command do you want to run for tests?",
    },
    {
        type: "input",
        name: "contributing",
        question: "What are your contribution guidelines?",
    },
    {
        type: "input",
        name: "usage",
        question: "What is your usage information?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var promise = new Promise((resolve, reject) =>{
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                reject(err);
                return;
            } else
            resolve ({
                state: true,
                message: "File has been created!"
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(inputs => {
        console.log(inputs);
        return generateMarkdown(inputs);
    })
    .then(markdown => {
        writeToFile('./', markdown);
    })
}

// Function call to initialize app
init();
