import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import createCustomerRoute from './routes/createCustomer.js';
import deleteCustomerRoute from './routes/deleteCustomer.js';
import updateCustomerRoute from './routes/updateCustomer.js';
import readCustomerRoute from './routes/readCustomer.js';

dotenv.config();

const app = express();
app.use(express.json()); // Parse JSON

// Connect to MongoDB Atlas
mongoose.connect(process.env.MongoDBconnStr)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection failed:', err.message));


// Create
app.use('/Customer', createCustomerRoute);

// Delete
app.use('/Customer', deleteCustomerRoute);

// Update
app.use('/Customer', updateCustomerRoute);

// Read
app.use('/Customer', readCustomerRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));