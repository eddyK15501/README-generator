// CommonJS module import statements; fs.promises for async/await
const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;
const createMarkdown = require("./utils/generateFile");

// Asynchronous function to writeFile to the dist folder
const writeToDist = async (content) => {
  try {
    await writeFile("./dist/README.md", content);
  } catch (error) {
    console.log(error);
  }
};

// Prompt inquirer.js within the terminal
const promptInquirer = async () => {
  console.log("Generate a README.md file. Input the following:");

  try {
    const data = await inquirer.prompt([
      {
        type: "input",
        name: "username",
        message: "Your Github username:",
        validate: (userName) => {
          return userName
            ? true
            : console.log("Please enter your Github username", false);
        },
      },
      {
        type: "input",
        name: "email",
        message: "Your email address:",
        validate: (email) => {
          return email
            ? true
            : console.log("Please enter your Email address", false);
        },
      },
      {
        type: "input",
        name: "title",
        message: "Title of the repository:",
        validate: (title) => {
          return title
            ? true
            : console.log("Please give the README.md a title", false);
        },
      },
      {
        type: "input",
        name: "description",
        message: "Description. Explain the purpose of the project:",
        validate: (des) => {
          return des ? true : console.log("Please describe the project", false);
        },
      },
      {
        type: "confirm",
        name: "installConfirm",
        message: "Does your project require any additional installation?",
        default: false,
      },
      {
        type: "input",
        name: "installInput",
        message: "Define the additional installations required:",
        when: ({ installConfirm }) => {
          return installConfirm ? true : false;
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Usage. How to use this repository:",
      },
      {
        type: "input",
        name: "contribute",
        message: "Contribution. How to contribute to this repository:",
      },
      {
        type: "input",
        name: "test",
        message: "Testing. Instructions on how to test:",
      },
      {
        type: "list",
        name: "license",
        message: "Choose one of the following licenses:",
        choices: ["MIT", "Apache", "GNU GPL v3"],
        validate: (license) => {
          return license
            ? true
            : (console.log("Please choose a license"), false);
        },
      },
    ]);

    console.log(data)

    // Generate README.md file with the object returned from 'data'
    const readmeGenerated = createMarkdown(data);

    writeToDist(readmeGenerated);

    console.log("README.md generated in dist folder!");
  } catch (error) {
    console.log(error);
  }
};

promptInquirer();