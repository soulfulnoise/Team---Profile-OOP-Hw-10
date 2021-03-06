const { magenta } = require('colorette');
const { deserialize } = require('jest-serializer');
const Manager = require('../lib/Manager.js');

describe('will be able to assign office number', () => {
    const testValue = 100;
    const locate = new Manager('Foo', 1, 'test@test.com', testValue);
    expect(locate.officeNumber).toBe(testValue);
});

describe('getRole() returns "Manager"' , ()=> {
    const testValue = 'Manager';
    const locate = new Manager('Foo', 1, 'test@test.com', 100);
    expect(locate.getRole()).toBe(testValue);
});

describe('Can access office number using getOffice()' , () =>{
    const testValue = 100;
    const locate = newManger('Foo',1, 'test@test.com' ,testValue);
    expect(locate.getOfficeNumber()).toBe(testValue);
});
