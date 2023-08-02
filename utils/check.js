const createInstall = (install) => {
    if (install) {
        return `## Installation
        ${install}
        `
    } else {
        return ''
    }
}

const createUsage = (usage) => {
    if (usage) {
        return `## Usage
        ${usage}
        `
    } else {
        return ''
    }
}

const createContribute = (contribute) => {
    if (contribute) {
        return `## Contribute
        ${contribute}        
        `
    } else {
        return ''
    }
}

const createTesting = (test) => {
    if (test) {
        return `## Testing
        ${test}
        `
    } else {
        return ''
    }
}

const checkInstall = (install) => {
    if (install) {
        return '* [Installation](#installation)'
    } else {
        return ''
    }
}

const checkUsage = (usage) => {
    if (usage) {
        return '* [Usage](#usage)'
    } else {
        return ''
    }
}

const checkContribute = (contribute) => {
    if (contribute) {
        return '* [Contribution](#contribution)'
    } else {
        return ''
    }
}

const checkTesting = (test) => {
    if (test) {
        return '* [Testing](#testing)'
    } else {
        return ''
    }
}