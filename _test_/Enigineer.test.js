const { it } = require('@jest/globals');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe("grab employees github account from the constructor" ,() => {
    describe("showGitHub", () => {
        it("should return employees Github Url", () => {
            const devpro = new Engineer();
            const team =new Employee("FOO");

            const url = devpro.buildUrl(team);

            expect(url).toEqual("Engineer");
        })
    })
   
});

