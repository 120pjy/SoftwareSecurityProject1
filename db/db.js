const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/userData', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the userData database.');
  });

module.exports = db;
  