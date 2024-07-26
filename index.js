import dotenv from 'dotenv';
dotenv.config({
    path: './env',
});  // Load environment variables



import express from 'express';
import connectDB from './db/index.js';

// Initialize express app
const app = express();


//app.use(express.json());

connectDB().then(()=>{
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

}).catch((err)=>{
  console.log("MONgo Db connection failed !!!",err)
})



