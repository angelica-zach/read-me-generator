const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./starter/utils/generateMarkdown");
const util=require("util");

const writeToFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description',
      },
      {
        type: 'input',
        name: 'install',
        message: 'How do you install this?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'If you created an application or package and would like other developers to contribute it,add guidelines for how to do so',
      },
      {
        type: 'input',
        name: 'tests',
        message: ' Provide examples on how to run tests',
      },
      {
        type: 'list',
        name: 'licence',
        message: 'Pick a licence',
        choices: ['Apache', 'GNU general public licence', 'MIT',"BSD 2-Clause","BSD 3-Clause","Boost","Creative Commons Zero","Mozilla Public","The unlicense"],
      },
     
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
      {
      type: 'input',
      name: 'contact',
      message: 'How do you wish to be contacted?',
    },
  
];

// function to write README file
function writeToFile(fileName, data) {
    const filePath = path.join(__dirname,  fileName);
    return writeToFileAsync(filePath, data)
    .then(() => {
      console.log(`Markdown content successfully written to ${filePath}`);
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

// function to initialize program
function init() {
  inquirer.prompt(questions)
    .then((data) => writeToFile('readMe.md', generateMarkdown(data)))
    .then(() => {
      console.log('Successfully wrote markdown file');
    })
    .catch((err) => console.error(err));
}
  


// function call to initialize program
init();
