"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionHandlerGlobal = void 0;
var AppErros_1 = require("../../errors/AppErros");
var ExceptionHandlerGlobal = function (error, request, response, next) {
    if (error instanceof AppErros_1.AppError) {
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
};
exports.ExceptionHandlerGlobal = ExceptionHandlerGlobal;
