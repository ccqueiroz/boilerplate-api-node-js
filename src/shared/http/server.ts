import express from 'express';
import {ExceptionHandlerGlobal} from '../http/middlewares/ErrorsMiddleware';
import {ChangeHeaderXPoweredXMiddleware} from '../http/middlewares/ChangeHeaderXPowered';
import 'express-async-errors';
import {routes} from '../routes';
import cors from 'cors';
import '../container';

const app = express();
app.use(express.json());
app.use(cors());


app.use(routes);
app.use(ExceptionHandlerGlobal);

app.use(ChangeHeaderXPoweredXMiddleware);

app.listen(3333, () => console.log('server rodando, porta 3333'));
