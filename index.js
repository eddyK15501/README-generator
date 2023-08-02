const inquirer = require('inquirer')
const fs = require('fs')

console.log("This is a README.md file generator. Please enter the following:")

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description:'
    },
    {
        type: 'input',
        name: 'TOC',
        message: 'Table Of Contents:'
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installations:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:'
    },
    // {
    //     type: 'input',
    //     name: 'license',
    //     message: 'License:'
    // }
    {
        type: 'input',
        name: 'contribute',
        message: 'How to Contribute:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Testing Instructions:'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions:'
    }
])