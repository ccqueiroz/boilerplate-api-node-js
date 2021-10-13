import {Request, Response} from 'express';

const dd = (request: Request, response: Response, objectDebug: any) => response.send(objectDebug);

export {dd};


