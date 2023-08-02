const inquirer = require("inquirer");
const { writeFile } = require("fs").promises;

const writeToDist = async (content) => {
  try {
    await writeFile("./dist/README.md", content);
  } catch (error) {
    console.log(error);
  }
};

const promptInquirer = async () => {
  console.log("Generate a README.md file. Input the following:");

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
  ]);

  console.log(data);
};

promptInquirer();
