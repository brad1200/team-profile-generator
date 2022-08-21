const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


describe('Manager', () => {

});

describe('getName', () => {
    it('we should return the name entered', () => {
        const manager = new Manager('Brad', 0, 'brad@gmail.com', 1);

        expect(manager.getName()).toEqual('Brad');
    })
});

describe('getId', () => {
    it('we should return an id provided', () => {
        const manager = new Manager('Brad', 0, 'brad@gmail.com', 1);

        expect(manager.getId()).toEqual(0);
    })
});

describe('getEmail', () => {
    it('we should return an email provided', () => {
        const manager = new Manager('Brad', 0, 'brad@gmail.com', 1);

        expect(manager.email).toEqual('brad@gmail.com');
    })
});

describe('getOfficeNumber', () => {
    it('we should return the entered office number the manager provides', () => {
        const manager = new Manager('Brad', 0, 'brad@gmail.com', 1);

        expect(manager.getOfficeNumber()).toEqual(1);
    })
});

describe('getRole', () => {
    it('we should get a return of the results listed above and the role of who this employee is', () => {
        const manager = new Manager;

        expect(manager.getRole()).toEqual('Manager');
    })
});