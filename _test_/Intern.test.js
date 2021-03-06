const { describe } = require("yargs");
const Intern = require("./li\Intern.js");

const testValue = "UGA";
const student = new Intern("Foo" , 1, 'test@testcom' , testValue);
expect(student.school).toBe(testValue);

describe('getRole() should return "Intern"', () => {
const testValue = 'Intern';
const student = new Intern('Foo', 1, 'test@test.com', 'UGA');
expect(student.getRole()).toBe(testValue);
});

describe('Can get school via getSchool()', () => {
const testValue = 'UGA';
const student = new Intern('Foo', 1, 'test@test.com', testValue);
expect(student.getSchool()).toBe(testValue);
});