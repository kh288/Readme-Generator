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
    type: `list`,
    message: `Choose your license(Optional): `,
    name: `license`,
    choices: [`None`,`MIT`, `Apache`, `Boost`, `GNU-GPLv3`],
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
        console.log(data);
        console.log(data.license);

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
