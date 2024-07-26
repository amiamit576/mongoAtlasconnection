import dotenv from 'dotenv';
dotenv.config({
    path: './env',
});  // Load environment variables

console.log(`PORT: ${process.env.PORT}`);
console.log(`MONGODB_URI: ${process.env.MONGODB_URI}`);

import express from 'express';
import connectDB from './db/index.js';

// Initialize express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
// Your routes go here

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
