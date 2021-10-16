import * as dotenv from 'dotenv';
import express from 'express';
import {ExceptionHandlerGlobal} from './middlewares/ErrorsMiddleware';
import {ChangeHeaderXPoweredXMiddleware} from './middlewares/ChangeHeaderXPowered';
import 'express-async-errors';
import {routes} from '../routes';
import cors from 'cors';
import '../container';
import morganBody from 'morgan-body';
import {morganBodyOptions} from '../../logs/config/MorganBodyOptions';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

morganBody(app, morganBodyOptions);

app.use(routes);
app.use(ExceptionHandlerGlobal);

app.use(ChangeHeaderXPoweredXMiddleware);

app.listen(process.env.APP_PORT || 3334, () => console.log(`server rodando, porta ${process.env.APP_PORT}`));
