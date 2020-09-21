import * as dotenv from 'dotenv';

dotenv.config();

interface IConfig {
    port: string | number;
    database: {
        DB_NAME: string;
        DB_USER: string;
        DB_PASSWORD: string;
        DB_PORT: string;
        DB_HOST: string;
    };
    secret: string;
}

const NODE_ENV: string = process.env.NODE_ENV || 'development';

const development: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'postgres',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const production: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'postgres',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
    },
    secret: process.env.SECRET || '@QEGTUI'
};

const test: IConfig = {
    port: process.env.PORT || 3000,
    database: {
        DB_NAME: process.env.DB_NAME || 'project',
        DB_USER: process.env.DB_USER || 'postgres',
        DB_PASSWORD: process.env.DB_PASSWORD || 'project123',
        DB_PORT: process.env.DB_PORT || '5432',
        DB_HOST: process.env.DB_HOST || 'localhost'
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
