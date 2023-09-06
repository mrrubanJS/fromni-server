import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { errorHandler } from './core/middleware/error.js';

import messageRouter from './modules/userMessage/index.js'
import channelRouter from './modules/channelType/index.js'



dotenv.config()

const app = express()


const PORT = process.env.PORT

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to mogno with mongoose'))
  .catch((err) => console.log('not connected to mongo', err));



app.use(cors())
app.use(express.json({limit: '100mb'}))

app.use('/api/message', messageRouter)
app.use('/api/channel', channelRouter)

app.use(errorHandler)

app.listen(PORT, async function(){
    console.log('Сервер запущен на порте '+ PORT);
})