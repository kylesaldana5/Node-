const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag-of-loot.sqlite');
const { kids } = require('../data/kids');

module.exports.createTables = () =>{
    return new Promise((resolve, reject) =>{
        db.run('DROP TABLE IF EXISTS kids')
            .run(
                `CREATE TABLE IF NOT EXISTS kids (kid_id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, toy TEXT, 
                    city TEXT, state TEXT, delivered TEXT
                )`, (err) =>{
                    if (err) return reject(err);
                    resolve(insertRows())
                });
    });
};

const insertRows = () =>{
    return Promise.all(kids.map(({firstName, toy, city, state, delivered}) =>{
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO kids VALUES (NULL , "${firstName}", "${toy}", "${city}", "${state}", "${delivered}")`, function (err) {
            if (err) return reject(err);
            resolve(this.lastID)
            });
        });
    }));
};