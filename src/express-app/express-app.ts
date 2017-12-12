import * as express from 'express';
import {Request, Response, NextFunction} from "express";

const app = express();

interface INameRequest extends Request {
    query: {
        firstName: string;
        lastName: string;
    }
}

const nameRequestValidator = (req: Request, res: Response, next: NextFunction) => {
    return typeof req.query.firstName === 'string' && typeof req.query.lastName === 'string'
        ? next()
        : next(new Error('Please supply "firstName" and "lastName" in the query string'));
}

const sayHello = (req: INameRequest, res: Response, next: NextFunction) => {
    const firstName = req.query.firstName;
    const lastName = req.query.lastName;

    res.json({fullName: `${firstName} ${lastName}`});
}

app.get('/', nameRequestValidator, sayHello)

app.listen(3000, ()=> console.log('listening'));