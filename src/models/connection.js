const myslq2 = require('mysql2/promise'); // import myslq2 with promises already

const connection = myslq2.createPool({ // all info needed is the docker-compose
  host: process.env.MYSQL_HOST, // our service name or container name. can be both, but I need to test it before
  user: process.env.MYSQL_USER, // the use of process.env is to make ir more dynamic 
  password: process.env.MYSQL_PASSWORD, // reflecting what is defined in our compose file
  port: process.env.MYSQL_PORT,
  database: process.env.MYSQL_DATABASE,
}); 

module.exports = connection;
