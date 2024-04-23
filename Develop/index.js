// TODO: Include packages needed for this application//
var inquirer = require('inquirer');
var prompt = inquirer.createPromptModule();
const fs = require('fs');
// TODO: Create an array of questions for user input//
var questions=[
    {
    type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project',
    },
    {
      type: 'input',
      name: 'tableOfContents',
      message: 'Enter a table of contents for your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe how to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project',
     },
     {
        type:'list',
        name: 'license',
        message: 'Enter the license for your project',
        choices:['MIT','Apache_2.0','Mozilla_Public_2.0','None']
      },
    {
      type: 'input',
      name: 'contributing',
      message: 'If any other contributors in your project enter it below',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe if any tests were ran on your project',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'insert Github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'insert email address',
    },
    
    ];

    function renderLicenseBadge(license) {
      if(license !== 'None'){

      
    return `![License](https://img.shields.io/badge/License-${license}-purple.svg)`
      }
      return "";
  }
    
    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    function renderLicenseLink(license) {}
    
    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    function renderLicenseSection(license) {}

    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    function renderLicenseLink(license) {}
    
    
// TODO: Create a function to write README file
function writeToFile(README, data) {
    var content = `
 ${renderLicenseBadge(data.license)}

  ## Title
  ${data.title}

  ## Description 
  ${data.description}

  ## Table of Contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contrubuting](#contributing)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions please see my Github profile at https://github.com/${data.questions}.
  
  Feel free to send me a message to my email at: ${data.email}.
    `;
    
        fs.writeFile(README, content, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('README.md file has been successfully created!');
            }
        }); 
    }
    


// TODO: Create a function to initialize app//

function init() {
prompt(questions).then((answers)=>{
  console.log(answers);
    writeToFile('README.md',answers);
});
}
// Function call to initialize app//

init();
