// const inquirer = require(`inquirer`);

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    var badge;
        
    switch(license) {
        case("MIT"): 
            badge = "MIT";
            break;
        case("Apache"):
            badge = "Apache_2.0";
            break;
        case("GNU-GPLv3"):
            badge = "GPLv3";
            break;
    }
    
    return renderLicenseLink(badge) + renderLicenseSection(badge)


    // const licenses = {
    //     none: "No license",
    //     apache: `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
    //     gnu_gpl: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
    //     mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    //     bsd2: `[![License: BSD 2](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
    //     bsd3: `[![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
    //     boost: `[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    // }

    // if (licenses.contains(license)) {
    //     return licenses.license;
    // } else {
    //     return ``;
    // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `(https://opensource.org/licenses/${license})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const markdown = 
`## ${data.title} ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.contribution}`

    return markdown;
}

module.exports = generateMarkdown;
