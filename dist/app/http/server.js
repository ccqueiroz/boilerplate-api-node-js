"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
var express_1 = __importDefault(require("express"));
var ErrorsMiddleware_1 = require("./middlewares/ErrorsMiddleware");
var ChangeHeaderXPowered_1 = require("./middlewares/ChangeHeaderXPowered");
require("express-async-errors");
var routes_1 = require("../routes");
var cors_1 = __importDefault(require("cors"));
require("../container");
var morgan_body_1 = __importDefault(require("morgan-body"));
var MorganBodyOptions_1 = require("../../logs/config/MorganBodyOptions");
dotenv.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.routes);
(0, morgan_body_1.default)(app, MorganBodyOptions_1.morganBodyOptions);
app.use(ErrorsMiddleware_1.ExceptionHandlerGlobal);
app.use(ChangeHeaderXPowered_1.ChangeHeaderXPoweredXMiddleware);
app.listen(process.env.APP_PORT || 3334, function () { return console.log("server rodando, porta " + process.env.APP_PORT); });
