import * as bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as express from 'express';
import helmet from 'helmet';
import { HttpError } from '../error/index';
import { sendHttpErrorModule } from '../error/sendHttpError';
/**
 * @export
 * @param {express.Application} app
 */
export function configure(app: express.Application): void {
    // express middleware
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    // parse Cookie header and populate req.cookies with an object keyed by the cookie names.
    app.use(cookieParser());
    // returns the compression middleware
    app.use(compression());
    // helps you secure your Express apps by setting various HTTP headers
    app.use(helmet());
    // providing a Connect/Express middleware that can be used to enable CORS with various options
    app.use(cors());

    // custom errors
    app.use(sendHttpErrorModule);

    // cors
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With,' +
            ' Content-Type, Accept,' +
            ' Authorization,' +
            ' Access-Control-Allow-Credentials'
        );
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    });
}

interface CustomResponse extends express.Response {
    sendHttpError: (error: HttpError | Error, message ? : string) => void;
}

/**
 * @export
 * @param {express.Application} app
 */
export function initErrorHandler(app: express.Application): void {
    app.use((error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
        console.error('ErrorHandler');
        if (typeof error === 'number') {
            error = new HttpError(error); // next(404)
        }

        if (error instanceof HttpError) {
            res.send(error);
        } else {
            if (app.get('env') === 'development') {
                error = new HttpError(500, error.message);
                res.send(error);
            } else {
                error = new HttpError(500);
                res.send(error);
            }
        }

        console.error('ErrorI', error);
    });
    
    /* app.use((error: Error, req: express.Request, res: CustomResponse, next: express.NextFunction) => {
        if (typeof error === 'number') {
            error = new HttpError(error); // next(404)
        }

        if (error instanceof HttpError) {
            res.sendHttpError(error);
        } else {
            if (app.get('env') === 'development') {
                error = new HttpError(500, error.message);
                res.sendHttpError(error);
            } else {
                error = new HttpError(500);
                res.sendHttpError(error, error.message);
            }
        }

        console.error(error);
    }); */
}
