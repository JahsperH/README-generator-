// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'name of your project? (Required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'description of your project? (Required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'instructions for installation to run project. (Required)'
    },
    {
        type: 'list',
        name: 'license',
        message: 'license for your project. (Required)',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'constributing',
        message: 'instructions for contributing to your project. (Required)'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'instructions for testing your project. (Required)'
    },
    {
        type: 'input',
        name: 'github',
        message: 'github username for questions. (Required)'
    }
    {
        type: 'input',
        name: 'email',
        message: 'email address for questions. (Required)'
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
