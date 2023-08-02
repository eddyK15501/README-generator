const inquirer = require('inquirer')
const { writeFile } = require('fs').promises

const writeToDist = async (content) => {
    try {
        await writeFile('./dist/README.md', content)
    } catch (error) {
        console.log(error)
    }
}

const promptInquirer = () => {
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
            name: 'contents',
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
    ]).then(data => console.log(data))
}

startInquiry()