import {Request, Response} from 'express';

const dd = (request: Request, response: Response, objectDebug: any) : Response => response.send(objectDebug);

export {dd};


