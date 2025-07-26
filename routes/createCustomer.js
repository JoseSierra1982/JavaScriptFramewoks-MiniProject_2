import express from 'express';
import Customer from '../models/Customer.js';

const router = express.Router();

// POST /Customer
router.post('/Create', async (req, res) => {
  try {
    console.log(' Received request body:', req.body);

    // Create a new Customer instance
    const newCustomer = new Customer({
      name: req.body.name,
      id: req.body.id,            
      accountType: req.body.accountType, 
      balance: req.body.balance,     
      isActive: req.body.isActive, 
    });

    // Save to MongoDB
    const savedCustomer = await newCustomer.save();

    res.status(201).json({
      message: 'Customer created successfully!',
      Customer: savedCustomer
    });

  } catch (error) {
    console.error('Error creating Customer:', error.message);
    res.status(400).json({ message: error.message });
  }
});

export default router;