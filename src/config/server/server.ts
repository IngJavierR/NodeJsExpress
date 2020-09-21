import express from 'express';
import * as Middleware from '../interceptors/middleware';
import * as Routes from '../../api';
import {Sequelize} from 'sequelize-typescript';
import config from '../env/index';
import User from '../../models/user.model';
import { sequelize } from '../../database';

/**
 * @constant {express.Application}
 */
const app: express.Application = express();

/** 
 * @constructs express.Application Middleware
 */
//Middleware.configure(app);

/**
 * @constructs express.Application Routes
 */
Routes.init(app);

// initialize db
sequelize.authenticate()
.then(() => {
    console.log('Connected to Database');
    sequelize.sync({force: true});
    //db.addModels(User);
})
.catch(err => console.error('Error connecting database', err))

/**
 * @constructs express.Application Error Handler
 */
Middleware.initErrorHandler(app);

/**
 * sets port 3000 to default or unless otherwise specified in the environment
 */
app.set('port', process.env.PORT || 3000);

/**
 * sets secret to 'superSecret', otherwise specified in the environment
 */
app.set('secret', process.env.SECRET || 'superSecret');

/**
 * @exports {express.Application}
 */
export default app;
