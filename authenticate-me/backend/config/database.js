const config = require('./index.js');

module.exports = {
    development: {
        storage: config.dbFile,
        dialect: 'sqlite',
        seederStorage: 'sequelize',
        logQueryParameters: true,
        typeValidation: true,
        // benchmark: true,
    },
    production: {
        use_env_variable: 'DATABASE_URL',
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
