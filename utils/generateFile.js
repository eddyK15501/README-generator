const { writeFile } = require("fs").promises;
const check = require('./check')

const writeToDist = async (content) => {
  try {
    await writeFile("./dist/README.md", content);
  } catch (error) {
    console.log(error);
  }
};

const createMarkdown = (data) => {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${check.checkInstall(data.installInput)}
  ${check.checkUsage(data.usage)}
  ${check.checkContribute(data.contribute)}
  ${check.checkTesting(data.test)}
  * [License](#license)
  * [Questions](#questions)
  
  ${createInstall(data.installInput)}
  ${createUsage(data.usage)}
  ${createContribute(data.contribute)}
  ${createTesting(data.test)}
  ## License
  * This application is covered under the ${data.license} license
  ## Questions
  #### Check out my Github at: [${data.userName}](https://www.github.com/${data.userName})

  If you have any questions, please feel free to contact me at [${data.email}](${data.email})
  `
}



module.exports = {
    writeToDist,
    createMarkdown
}
