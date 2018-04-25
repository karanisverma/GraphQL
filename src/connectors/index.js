import mysql from 'mysql';

// DB configs
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'graphql-database',
});

// Connecting to db
con.connect(function (err) {
  if (err) throw err;
  console.log('Connection successful!');
});

export function getBooks(filter = '', value = '') {
  return new Promise((resolve, reject) => {
    const query = filter ? `select * from books where ${filter} = "${value}"` : `select * from books`
    con.query(query,
      (err, result) => {
        if (err) throw err;
        result = JSON.parse(JSON.stringify(result))
        resolve(result)
      })
  })
}