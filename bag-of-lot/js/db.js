const sqlite3 = require('sqlite3').verbose();
const { createTables } = require('./make-table');

(function createDb() {
    new sqlite3.Database('bag-of-loot.sqlite', () =>{
        createTables().then((data) =>{

        })
        .catch((err) =>{
            console.log('woops',err );
            
        })
    })
}());