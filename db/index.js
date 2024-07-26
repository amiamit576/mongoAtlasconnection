import mongoose from 'mongoose';
import { DB_Name } from '../constants.js';

const connectDB = async () => {
  console.log(`MongoDB URI: ${process.env.MONGODB_URI}`);
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log('Db connection Error', error);
    process.exit(1);
  }
};

export default connectDB;
