const { Database } = require('sqlite3').verbose();
const db = new Database('employees.sqlite', () => {
    console.log('Connected to DB');
});

let employeeArr = [

    { id: 1, firstName: 'Dwight', lastName: 'Schrute', jobTitle: 'Assistant to the Regional Manager', address: '123 Shroot Farms' },
    { id: 2, firstName: 'Andy', lastName: 'Bernard', jobTitle: 'Awesome Sauce', address: '456 Ivy Ave' },
    { id: 3, firstName: 'Pam', lastName: 'Beesly', jobTitle: 'secretary', address: '678 Apt Lane' },
    { id: 4, firstName: 'Creed', lastName: 'Apollo', jobTitle: 'CEO', address: 'A bus' },
    { id: 5, firstName: 'Blair', lastName: 'Falconello', jobTitle: 'Therapist', address: '888 Mansion Way' },
    { id: 6, firstName: 'Craig', lastName: 'Orcutt', jobTitle: 'Bum', address: '889 Mansion Way' }

]




let createDb = () => {
    db.run('DROP TABLE IF EXISTS employees')
    .run("CREATE TABLE IF NOT EXISTS employees (id INT, first TEXT, last TEXT, title TEXT, address TEXT)");


    employeeArr.forEach((element) => {
        db.run(`INSERT INTO employees VALUES (null, '${element.firstName}', '${element.lastName}', '${element.jobTitle}', '${element.address}')`)
    });
};

createDb();

