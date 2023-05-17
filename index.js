// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./markdown/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'instructions for installation to run project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'constributing',
        message: 'instructions for contributing to your project.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'instructions for testing your project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'github username for questions.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'email address for questions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'usage information for your project.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        writeToFile('README.md', generateMarkdown(response));
    });
}

// Function call to initialize app
init();
