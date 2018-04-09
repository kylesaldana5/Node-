const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('training_programs.sqlite', (err) => {
  err ? console.log(err) : console.log('Database is open');
});
const { readFileSync } = require('fs');
const programData = JSON.parse(readFileSync(`./data/programs.json`));

const createTable = () => {
  return new Promise((resolve, reject) => {
      db.serialize(() => {
          db.run(`DROP TABLE IF EXISTS training_programs`)
          .run(`CREATE TABLE IF NOT EXISTS training_programs (
          program_id INTEGER PRIMARY KEY,
          no_of_seats INTEGER,
          instructor_name TEXT,
          start_date TEXT,
          end_date TEXT,
          course_category TEXT
  )`, (err) => {
              err ? reject(err) : resolve(insertRows());
          });
      });
  });
};

const insertRows = () => {
  return new Promise((resolve, reject) => {
      programData.forEach(({no_of_seats, instructor_name, start_date, end_date, course_category}) => {
          db.run(`INSERT INTO training_programs VALUES (
              null,
              ${no_of_seats},
              "${instructor_name}",
              "${start_date}",
              "${end_date}",
              "${course_category}"
          )`, (err) => {
              err ? reject(err) : resolve();
          });
      });
     
  });
};

createTable();

module.exports = { createTable };