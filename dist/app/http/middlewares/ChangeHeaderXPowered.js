"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeHeaderXPoweredXMiddleware = void 0;
var ChangeHeaderXPoweredXMiddleware = function (request, response, next) {
    response.set('X-Powered-By', 'PHP/7.4.2');
    next();
};
exports.ChangeHeaderXPoweredXMiddleware = ChangeHeaderXPoweredXMiddleware;
