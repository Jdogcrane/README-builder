// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// creates prompts in terminal for the user to input data for the app to collect
inquirer.prompt([
    {
        type: 'input',
        message: 'Project title:',
        name: 'title',

        // Prevents user from leaving input empty by checking value true
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },

    {
        type: 'input',
        message: 'Description for the project:',
        name: 'description',
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },

    {
        type: 'input',
        message: 'Installation instructions for the project:',
        name: 'installation',
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },

    {
        type: 'input',
        message: 'Usage information for the project:',
        name: 'usage',
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },

    {
        type: 'input',
        message: 'Contribution guidelines for the project:',
        name: 'contribution',
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },

    {
        type: 'input',
        message: 'Test instructions for the project:',
        name: 'test',
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },

    {
        type: 'input',
        message: 'Github Username:',
        name: 'user',
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },

    {
        type: 'input',
        message: 'Email:',
        name: 'email',
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },

    {
        type: 'list',
        message: 'What license are you using:',
        name: 'license',
        choices: [
            "MIT",
            "ISC",
            "GNU GPL v3",
            "Eclipse"
        ],
        validate: function (value) {
            if (value) {
                return true
            } else {
                return 'Input field is empty please try again'
            }
        }
    },
    // puts data from user inputs into function
]).then(function ({ title, description, installation, usage, contribution, test, user, email, license, }) {

    if (license === "MIT") {
        detail = `This application is covered by the ${license} license.`
        license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (license === 'ISC') {
        detail = `This application is covered by the ${license} license.`
        license = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
    }
    if (license === "GNU GPL v3") {
        detail = `This application is covered by the ${license} license.`
        license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    if (license === "Eclipse") {
        detail = `This application is covered by the ${license} license.`
        license = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    };
    
    // basic template that gets filled dynamically based off user input
    const template = `# ${title}
${license}

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [Questions](#Questions)
* [License](#license)

# Description
${description}
# Installation
${installation}
# Usage
${usage}
# Contribution
${contribution}
# Test
${test}
https://github.com/${user}
# Questions
Contact me with any questions here
My email: ${email}
Visit my github: https://github.com/${user}
# License
${license} Click for more info. ${detail}
`;

    // starts and sends data to function
    createReadMe(template);
}
);
// creates README with dynamic inputs based off users desires.
function createReadMe(template) {

    fs.writeFile('README.md', template, function (err) {
        if (err) throw err, console.log('An error has stopped the file from being saved');
        console.log('Data Saved');
    });

}