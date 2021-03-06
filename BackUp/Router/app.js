//const express = require('express');
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './router';

const app = express();

const handleHome = (req, res) => res.send('Hello from home');
const handleProfile = (req, res) => res.send('You are on my profile');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());

app.get('/', handleHome);
app.get('/profile', handleProfile);

// If someone access user, then we will use whole router code (router.js)
app.use('/user', userRouter);

export default app;
