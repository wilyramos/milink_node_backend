import express from 'express'; // ESM modules
import router from './router';
import 'dotenv/config'; // import dotenv and configure it to use the .env file
import { connectDB } from './config/db';


const app = express();

// read JSON data from the request body
app.use(express.json());

// connect to the database
connectDB();

// routing
app.use('/', router);

export default app;