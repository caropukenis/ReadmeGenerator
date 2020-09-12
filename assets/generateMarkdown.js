// function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    ## Description:
    ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
    ${data.description}

    # Table of Contents
    
    - [Description](#description)
    - [Contributing](#contributing)
    - [Test](#tests)
    - [License](#license)
    - [Questions](#questions)

    ## License:
    For more information about the license, click the link below:

    - [License](https://opensource.org/licenses/${data.license})

    ## Contributing:
    ${data.contributors}

    ## Tests:
    ${data.tests}

    ## Questions:
    For more information about the Generator, please reach out to me via my GitHub profile.

    -[GitHub Profile](https://github.com/${data.github})

    For any other questions, please send me an email at: ${data.email}.
  `;
}

module.exports = generateMarkdown;
