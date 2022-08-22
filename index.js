// adding in dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// adding constructors used
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');


// adding initial question asking who they are filling out first and letting the user chose who they want to add
const addEmployee = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'Who are you filling out first?',
                name: 'employeeAdded',
                choices: ['Manager', 'Engineer', 'Intern', 'End Application'],
            },
        ])

        .then((userChoice) => {
            switch (userChoice.employeeAdded) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
            }
        });

};

// adding the questions for the manager, name, id, email, office number
const addManager = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the managers name?',
                name: 'managerName',
            },

            {
                type: 'input',
                message: 'What is the managers Id?',
                name: 'managerId',
            },

            {
                type: 'input',
                message: 'What is the managers email?',
                name: 'managerEmail',
            },

            {
                type: 'input',
                message: 'What is the managers office number?',
                name: 'managerOfficenumber',
            }
        ])
        .then((results) => {
            const manager = new Manager(
                results.managerName,
                results.managerId,
                results.managerEmail,
                results.managerOfficenumber
            )
        });
};

// adding the questions for the intern, name, id, email. school attended
const addIntern = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the interns name?',
                name: 'internName',
            },

            {
                type: 'input',
                message: 'What is the interns Id?',
                name: 'internId',
            },

            {
                type: 'input',
                message: 'What is the interns email?',
                name: 'internEmail',
            },

            {
                type: 'input',
                message: 'What school does the intern attend?',
                name: 'internSchool',
            }
        ])
        .then((results) => {
            const intern = new Intern(
                results.internName,
                results.internId,
                results.internEmail,
                results.internSchool
            )
        });
};

// adding the questions for the engineer, name, id, email, github
const addEngineer = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the engineers name?',
                name: 'engineerName',
            },

            {
                type: 'input',
                message: 'What is the engineers Id?',
                name: 'engineerId',
            },

            {
                type: 'input',
                message: 'What is the engineers email?',
                name: 'engineerEmail',
            },

            {
                type: 'input',
                message: 'What is the engineers Github?',
                name: 'engineerGithub',
            }
        ])
        .then((results) => {
            const engineer = new Engineer(
                results.engineerName,
                results.engineerId,
                results.engineerEmail,
                results.engineerGithub
            )
        });
};

// creating HTML
const HTML = ({ engineerEmail, engineerGithub, engineerId, engineerName, managerEmail, managerId, managerName, managerOfficenumber, internEmail, internId, internName, internSchool }) =>

    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile Generator</title>
</head>
<body>

  <header>
    <h1>My Team</h1>
  </header>

  <section id="manger">
    <h2>${managerName}</h2>
    <p id="role">Manager</p>
    <p id="item">${managerId}</p>
    <p id="item>${managerEmail}</p>
    <p id="item>${managerOfficenumber}</p>
  </secton>


  <section id="intern">
    <h2>${internName}</h2>
    <p id="role">Intern</p>
    <p id="item">${internId}</p>
    <p id="item>${internEmail}</p>
    <p id="item>${internSchool}</p>
  </secton>

  <section id="engineer">
    <h2>${engineerName}</h2>
    <p id="role">Engineer</p>
    <p id="item">${engineerId}</p>
    <p id="item>${engineerEmail}</p>
    <p id="item>${engineerGithub}</p>
  </secton>


</body>
</html>`


fs.writeFile('index.html', newHTML, (err) => {
    if (err);
    console.log(err);
});

