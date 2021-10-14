import {Request, Response, NextFunction} from 'express';
import {AppError} from '../../errors/AppErros';

const ExceptionHandlerGlobal = (error: Error, request: Request, response:Response, next: NextFunction): Response => {
    if(error instanceof AppError) {
        console.log('Error', error);
        return response.status(error.statusCode).json({
            'status': 'error',
            'message': error.message
        });
    }
    console.log('Error', error);
    return response.status(500).json({
        'status': 'error',
        'message': 'Internal server error'
    });
}

export {ExceptionHandlerGlobal}
