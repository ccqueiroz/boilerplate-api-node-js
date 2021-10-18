import {Router, Request, Response}from 'express';

const routes: Router = Router();

routes.post('/', (request: Request, response: Response) =>{
    return response.status(401).send('testando docker');
});

export {routes};
