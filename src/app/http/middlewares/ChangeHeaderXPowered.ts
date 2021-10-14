import {Request, Response, NextFunction} from 'express';

const ChangeHeaderXPoweredXMiddleware = (request:Request, response:Response, next: NextFunction): void => {
    response.set('X-Powered-By', 'PHP/7.4.2');
    next();
}

export {ChangeHeaderXPoweredXMiddleware};
