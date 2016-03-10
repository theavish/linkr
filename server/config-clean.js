var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.dbHost || '',
    user: process.env.dbUser || '',
    password: process.env.dbPassword || '',
    database: process.env.dbDatabase || '',
    charset: 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = {
  bookshelf: bookshelf
};
