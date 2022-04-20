// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const gen = require(`./utils/generateMarkdown.js`);

// TODO: Create an array of questions for user input
const questions = [{
    // TYPE:
    // type: input, number, confirm, list, rawlist, expand, checkbox, password, editor

    // CHOICES
    type: `input`,
    message: `Project title: `,
    name: `project`,
},{
    type: `input`,
    message: `Enter a description: `,
    name: `description`,
},
{
    type: `input`,
    message: `Installation instructions: `,
    name: `installation`,
},
{
    type: `list`,
    message: `Usage: `,
    name: `usage`,
},
{
    type: `choice`,
    message: `Choose your license(Optional): `,
    choices: [`None`,`MIT`, `Apache`, `Boost`, `CC0`],
},
];


// [
//     `Project Title`,
//     `Description`,
//     `Installation instructions`,
//     `Usage Information`,
//     `Contribution guidelines`,
//     `test instructions`
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, function(error) {
        error ? `Error, something went wrong` : `Success`;
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile(x, y);
}

// Function call to initialize app
init();
