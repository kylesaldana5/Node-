// Require sqlite 3
const { Database }= require('sqlite3').verbose();

// Making data base connection with call back for success  
const db = new Database('employee.sqlite', () => console.log('We are connected'))

// employee array for the db
const employeeArray = [
    { id: 1, firstName: 'Trey', lastName: 'Anastasio', jobTitle:"jedi", address:"MSG" },
    { id: 2, firstName: 'Jake', lastName: 'Cinneger', jobTitle: "fire and brimstone", address: "chicago" },
    { id: 3, firstName: 'Chirs', lastName: 'Meyers', jobTitle: "hardest working man in the biz", address: "indiana" },
    { id: 1, firstName: 'Jon', lastName: 'Fishman', jobTitle: "cow bell master", address: "vermont" },
    { id: 2, firstName: 'Jerry', lastName: 'Garcia', jobTitle: "prophet", address: "san fran" },
    { id: 3, firstName: 'Bob', lastName: 'Weir', jobTitle: "the other one", address: "san fran" }
];

// Create a table for employees / Insert each employee into DB using a foreach
db.serialize(function() {
    
    db.run('DROP TABLE IF EXISTS employees')
    db.run('CREATE TABLE IF NOT EXISTS employees(id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT)')
    
    employeeArray.forEach(({id, firstName, lastName, jobTitle, address}) =>{
        db.run(`INSERT into employees(id, firstName, lastName, jobTitle, address)
        VALUES(${id}, '${firstName}', '${lastName}', '${jobTitle}', '${address}')`);
    });
}); 
    
// Write a statement to query the database and console.log() all employee records.







