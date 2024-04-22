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
        choices:['MIT','Apache','None']
        //choices: ['MIT License','The Unlicense','Mozilla Public License 2.0','Apache 2.0','GNU Lesser General Public License v2.1','GNU General Public License v2.0','BSD 2-Clause','GNU Affero General Public License v3.0','BSD 3-Clause License','Boost Software License','Eclipse Public License 2.0','Creative Commons zero v1.0 Univeral']
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
      name: 'username',
      message: 'enter your Github Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email address',
  
     },
    ];


// TODO: Create a function to write README file
function writeToFile(README, data) {
    var content = `

    ##Title
    ${data.title}

    ## Description 
    ${data.description}

    ## Table of Contents
    -[Installation](#installation)
    -[Usage](#usage)
    -[License](#license)
    -[Contrubuting](#contributing)
    -[Tests](#tests)

    ##Installation
    ${data.installation}

    ##Usage
    ${data.usage}

    ##License
    ${data.license}

    ##Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}
    
    ## Questions
     Username and Email: ${data.Questions}
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
