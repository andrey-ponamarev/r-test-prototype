import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import config from './config';
import routes from './routes';

console.log(config.db.development);
const db = mongoose.connect(config.db.development);
const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

routes(app);

app.listen(config.server.port, ()=> console.log(`Listen port: ${config.server.port}`));
