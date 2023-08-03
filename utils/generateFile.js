const check = require('./check')

const createMarkdown = (data) => {
  return `
  # ${data.title} • ${check.createBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  ${check.checkInstall(data.installInput)}
  ${check.checkUsage(data.usage)}
  ${check.checkContribute(data.contribute)}
  ${check.checkTesting(data.test)}
  * [License](#license)
  * [Questions](#questions)
  
  ${check.createInstall(data.installInput)}
  ${check.createUsage(data.usage)}
  ${check.createContribute(data.contribute)}
  ${check.createTesting(data.test)}
  ## License
  * This application is covered under the ${data.license} license
  ## Questions
  #### Check out my Github at: [${data.userName}](https://www.github.com/${data.userName})

  If you have any questions, please feel free to contact me at [${data.email}](${data.email})
  `
}

module.exports = createMarkdown
