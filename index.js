// adding in dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// adding constructors used
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const { default: Choices } = require('inquirer/lib/objects/choices');

// adding initial question asking who they are filling out first and letting the user chose who they want to add
const addEmployee = [
    {
        type: 'input',
        message: 'Who are you filling out first?',
        name: 'employeeAdded',
        choices: ['Manager', 'Engineer', 'Intern', 'End Application'],
    },
];

// adding the questions for the manager, name, id, email, office number
const addManager = [
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
];

// adding the questions for the intern, name, id, email. school attended
const addIntern = [
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
];

// adding the questions for the engineer, name, id, email, github
const addEngineer = [
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
];