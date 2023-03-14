const knex = require('knex')({
    client: 'pg',
    connection: {
        host: process.env.HOST,
        port: process.env.DB_PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        ssl: { rejecUnauthorized: false }
    }
})
module.exports = knex