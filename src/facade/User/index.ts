import UserFacade from './facade';
import { HttpError } from '../../config/error';
import { NextFunction, Request, Response } from 'express';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const users: any[] = await UserFacade.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log("ErrorFindAl");
        next(new HttpError(error.message.status, error.message));
    }
}