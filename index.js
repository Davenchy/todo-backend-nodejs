import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// load environment variables
dotenv.config();
const {MONGO_URI, PORT} = process.env;

const app = express();

// connect to database and start the server
mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}).catch(() => console.error('Failed to connect to DB!\nShutting Down...'));
