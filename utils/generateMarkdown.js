// const inquirer = require(`inquirer`);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    var badge;
    let color;
    // choices: [`brightgreen`, `green`, `yellowgreen`, `yellow`,`orange`,`red`,`blue`,`lightgrey`,`blueviolet`],
    switch(license) {
        case(`MIT`): 
            badge = `MIT`;
            link = `MIT`;
            color = `yellow`;
            break;
        case(`Apache`):
            badge = `Apache_2.0`;
            link = `Apache-2.0`;
            color = `yellowgreen`;
            break;
        case(`Boost 1.0`):
            badge = `Boost_1.0`;
            link = `BSL-1.0`;
            color = `lightblue`;
            break;
        case(`GPL v3`):
            badge = `GPLv3`;
            link = `GPL-3.0`
            color = `blue`;
            break;
        case(`BSD 3`):
            badge = `BSD_3`;
            link = `BSD-3-Clause`
            color = `orange`;
            break;
        case(`Mozilla 2.0`):
            badge = `MPL_2.0`;
            link = `MPL-2.0`
            color = `brightgreen`;
            break;
        default:
            // Should only get here if no license was selected
            return ``;
    }
    return renderLicenseLink(badge, color) + renderLicenseSection(link);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, color) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-${color}.svg)]`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `(https://opensource.org/licenses/${license})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const markdown = 
`# ${data.title} ${renderLicenseBadge(data.license, data.color)}

## Description
${data.description}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## Questions
For questions, reach me at my github: https://github.com/${data.username}
or by email: ${data.email}`

    return markdown;
}

module.exports = generateMarkdown;
