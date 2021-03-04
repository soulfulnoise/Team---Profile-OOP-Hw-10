const Employee = require("..lib\Employee.js");
const { it, expect } = require("@jest/globals");
const { type } = require("os");
const { describe } = require("yargs");

describe("Initialization", () => {
    it("should create a card with emloyee name id and email");
    const team = new Employee();
    expect(typeof team).toBe("object");
});



