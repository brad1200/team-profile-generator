const Employee = require('../lib/Employee');

describe('Employee', () => {

});

describe('getName', () => {
    it('we should return the name entered', () => {
        const employee = new Employee('Brad', 0, 'brad@gmail.com');

        expect(employee.getName()).toEqual('Brad');
    })
});

describe('getId', () => {
    it('we should return an id provided', () => {
        const employee = new Employee('Brad', 0, 'brad@gmail.com');

        expect(employee.getId()).toEqual(0);
    })
});

describe('getEmail', () => {
    it('we should return an email provided', () => {
        const employee = new Employee('Brad', 0, 'brad@gmail.com');

        expect(employee.email).toEqual('brad@gmail.com');
    })
});

describe('getRole', () => {
    it('we should get a return of the results listed above and the role of who this employee is', () => {
        const employee = new Employee();

        expect(employee.getRole()).toEqual('Employee');
    })
});