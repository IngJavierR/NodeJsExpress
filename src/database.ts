import {Sequelize} from 'sequelize-typescript';
import config from './config/env/index';

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: config.database.DB_HOST,
    port: Number(config.database.DB_PORT),
    username: config.database.DB_USER,
    password: config.database.DB_PASSWORD,
    database: config.database.DB_NAME,
    models: [__dirname + '/models']
});

/*export const db = new Sequelize(
    config.database.DB_NAME,
    config.database.DB_USER,
    config.database.DB_PASSWORD,
    {
        port: Number(config.database.DB_PORT),
        host: config.database.DB_HOST,
        dialect: "postgres",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
        models: [__dirname + '/src/models/*.model.ts']
    }
);*/