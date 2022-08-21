const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


describe('Engineer', () => {

});

describe('getName', () => {
    it('we should return the name entered', () => {
        const engineer = new Engineer('Brad', 0, 'brad@gmail.com', 'brad1200');

        expect(engineer.getName()).toEqual('Brad');
    })
});

describe('getId', () => {
    it('we should return an id provided', () => {
        const engineer = new Engineer('Brad', 0, 'brad@gmail.com', 'brad1200');

        expect(engineer.getId()).toEqual(0);
    })
});

describe('getEmail', () => {
    it('we should return an email provided', () => {
        const engineer = new Engineer('Brad', 0, 'brad@gmail.com', 'brad1200');

        expect(engineer.email).toEqual('brad@gmail.com');
    })
});

describe('getGithub', () => {
    it('we should return the entered Github', () => {
        const engineer = new Engineer('Brad', 0, 'brad@gmail.com', 'brad1200');

        expect(engineer.getGithub()).toEqual('brad1200');
    })
});

describe('getRole', () => {
    it('we should get a return of the results listed above and the role of who this employee is', () => {
        const engineer = new Engineer

        expect(engineer.getRole()).toEqual('Engineer');
    })
});