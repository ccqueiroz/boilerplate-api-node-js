"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logConfig = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var logConfig = fs_1.default.createWriteStream(path_1.default.join(__dirname, '../', 'express.log'), { flags: 'a' });
exports.logConfig = logConfig;
