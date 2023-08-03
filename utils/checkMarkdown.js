// Check if Installation, Usage, Contributions, and Testing is necessary; if so, create header for the sections
const createInstall = (install) => {
  if (install) {
    return `## Installation
${install}`;
  } else {
    return "";
  }
};

const createUsage = (usage) => {
  if (usage) {
    return `## Usage
${usage}`;
  } else {
    return "";
  }
};

const createContribute = (contribute) => {
  if (contribute) {
    return `## Contributions
${contribute}`;
  } else {
    return "";
  }
};

const createTesting = (test) => {
  if (test) {
    return `## Testing
${test}`;
  } else {
    return "";
  }
};

// Create a badge for the selected license from the list
const createBadge = (license) => {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
};

// Check if Installation, Usage, Contributions, and Testing has any input; if so, create tabs for the section within the Table of Contents
const checkInstall = (install) => {
  if (install) {
    return "* [Installation](#installation)";
  } else {
    return "";
  }
};

const checkUsage = (usage) => {
  if (usage) {
    return "* [Usage](#usage)";
  } else {
    return "";
  }
};

const checkContribute = (contribute) => {
  if (contribute) {
    return "* [Contributions](#contributions)";
  } else {
    return "";
  }
};

const checkTesting = (test) => {
  if (test) {
    return "* [Testing](#testing)";
  } else {
    return "";
  }
};

module.exports = {
  createInstall,
  createUsage,
  createContribute,
  createTesting,
  createBadge,
  checkInstall,
  checkUsage,
  checkContribute,
  checkTesting,
};
