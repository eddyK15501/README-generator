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

  `
}



module.exports = {
    writeToDist,
    createMarkdown
}
