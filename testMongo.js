import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MongoDBconnStr = process.env.MongoDBconnStr;  // or paste directly to test

mongoose.connect(MongoDBconnStr)
  .then(() => {
    console.log('✅ MongoDB connection successful!');
    mongoose.connection.close(); // close after test
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
  });