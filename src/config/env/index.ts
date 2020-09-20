import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
    port: string | number;
    database: {
        POSTGRESQL_URI: string;
        POSTGRESQL_DB: string;
    };
    secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        POSTGRESQL_URI: process.env.POSTGRESQL_URI || 'POSTGRESQL://localhost:27017/',
        POSTGRESQL_DB: process.env.POSTGRESQL_DB || 'users_db'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const production: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        POSTGRESQL_URI: process.env.POSTGRESQL_URI || 'POSTGRESQL://production_uri/',
        POSTGRESQL_DB: process.env.POSTGRESQL_DB || 'users_db'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const test: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        POSTGRESQL_URI: process.env.POSTGRESQL_URI || 'POSTGRESQL://localhost:27017',
        POSTGRESQL_DB: 'test_users_db'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const config: {
    [name: string]: IConfig
} = {
    test,
    development,
    production
};

export default config[NODE_ENV];
