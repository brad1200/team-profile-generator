const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern', () => {

});

describe('getName', () => {
    it('we should return the name entered', () => {
        const intern = new Intern('Brad', 0, 'brad@gmail.com', 'Kansas University');

        expect(intern.getName()).toEqual('Brad');
    })
});

describe('getId', () => {
    it('we should return an id provided', () => {
        const intern = new Intern('Brad', 0, 'brad@gmail.com', 'Kansas University');

        expect(intern.getId()).toEqual(0);
    })
});

describe('getEmail', () => {
    it('we should return an email provided', () => {
        const intern = new Intern('Brad', 0, 'brad@gmail.com', 'Kansas University');

        expect(intern.email).toEqual('brad@gmail.com');
    })
});

describe('getSchool', () => {
    it('we should return the entered school the person goes to', () => {
        const intern = new Intern('Brad', 0, 'brad@gmail.com', 'Kansas University');

        expect(intern.getSchool()).toEqual('Kansas University');
    })
});

describe('getRole', () => {
    it('we should get a return of the results listed above and the role of who this employee is', () => {
        const intern = new Intern

        expect(intern.getRole()).toEqual('Intern');
    })
});