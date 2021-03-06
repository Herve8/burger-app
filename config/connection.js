// Set up MySQL connection.
const mysql = require('mysql');

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
  else{
    const connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
      user: 'root',
      // NOTE: Be sure to add your MySQL password here!
      password: 'root12345',
      database: 'burger_db',
  });
  }

/*const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // NOTE: Be sure to add your MySQL password here!
  password: 'root12345',
  database: 'burger_db',
});
*/

connection.connect();

// Make connection.
/*connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});
*/

// Export connection for our ORM to use.
module.exports = connection;
