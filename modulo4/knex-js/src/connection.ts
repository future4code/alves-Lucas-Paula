import knex from 'knex'

const connection = knex({ // Estabelece conexão com o banco
    client: "mysql",
    connection: {
    host: "35.226.146.116",
    port: 3306,
    user: "alves-lucas-paula",
    password: "Q08tvR3xru9BkOjwEC0k",
    database: "alves-lucas-paula",
    multipleStatements: true
    }
   })
   export default connection