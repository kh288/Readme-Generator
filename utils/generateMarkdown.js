// const inquirer = require(`inquirer`);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
    var badge;
    switch(license) {
        case("MIT"): 
            badge = "MIT";
            break;
        case("Apache"):
            badge = "Apache-2.0";
            break;
        case("Boost"):
            badge = "Boost-1.0";
            break;
        case("GNU-GPLv3"):
            badge = "GPLv3";
            break;
    }
    
    return renderLicenseLink(badge, color) + renderLicenseSection(badge);
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
`## ${data.title} ${renderLicenseBadge(data.license, data.color)}

## Description
${data.description}

## Installation
${data.installation}

## Contribution
${data.contribution}`

    return markdown;
}

module.exports = generateMarkdown;
