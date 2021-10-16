"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.EXPIRESINJWT
    }
};
