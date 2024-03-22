const config = require('./index.js');

module.exports = {
    development: {
        storage: config.dbFile,
        dialect: 'sqlite',
        seederStorage: 'sequelize',
        logQueryParameters: true,
        typeValidation: true,
        benchmark: true,
    },
    production: {
        // use_env_variable: 'DATABASE_URL',
        username: process.env.PG_USER,
        database: process.env.PG_USER,
        host: process.env.PG_HOST,
        password: String(process.env.PG_PASSWORD),
        dialect: 'postgres',
        seederStorage: 'sequelize',
        dialectIptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
};
