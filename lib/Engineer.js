const Employee = require('.lib\Engineer.js');

    class Engineer  extends Employee {
        constructor(name,id,email,github) {
            super(name,id,email);
        }

        getGithub() {
            return this.github;
        }

        getRole() {
            return "Engineer";

        }

    }

    module.exports = Engineer;