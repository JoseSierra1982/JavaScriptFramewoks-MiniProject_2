import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.uri;  // or paste directly to test

mongoose.connect(uri)
  .then(() => {
    console.log('✅ MongoDB connection successful!');
    mongoose.connection.close(); // close after test
  })
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message);
  });