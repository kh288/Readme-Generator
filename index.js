// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: `input`,
    message: `Project title: `,
    name: `title`,
},{
    type: `input`,
    message: `Enter a description: `,
    name: `description`,
},{
    type: `input`,
    message: `Installation instructions: `,
    name: `installation`,
},{
    type: `input`,
    message: `Usage: `,
    name: `usage`,
},{
    type: `input`,
    message: `Contribution Guidelines: `,
    name: `contribution`,
},{
    type: `input`,
    message: `Tests: `,
    name: `tests`,
},{
    type: `input`,
    message: `Github username: `,
    name: `username`,
},{
    type: `input`,
    message: `Enter your email: `,
    name: `email`,
},{
    type: `list`,
    message: `Choose your license(Optional): `,
    name: `license`,
    choices: [`None`,`MIT`, `Apache`, `Boost`, `GNU-GPLv3`],
},{
    type: `list`,
    message: `Badge Color: `,
    name: `color`,
    choices: [`brightgreen`, `green`, `yellowgreen`, `yellow`,`orange`,`red`,`blue`,`lightgrey`,`blueviolet`],
},{
    type:`input`,
    message: `Choose your filename: `,
    name: `filename`
}];

// TODO: Create a function to write README file
function writeToFile() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        let genData = generateMarkdown(data);

        fs.writeFile(`${data.filename}.md`, genData, function(error) {
            error ? `Error, something went wrong` : `Success`;
        });
    })
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
