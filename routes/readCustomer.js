//Step 3: Read Operation (readCustomer.js)
//Step 4: Setting up Express Routes in app.js

import express from 'express';
import Customer from '../models/Customer.js';

const router = express.Router();

// READ 
router.get('/Read', async (req, res) => {
  try {
    const { id } = req.query;

    let customers;

    if (id) {
      customers = await Customer.findOne({ id });

      if (!customers) {
        return res.status(404).json({ message: `Customer with id ${id} not found` });
      }
    } else {
      customers = await Customer.find();
    }

    res.json(customers);

  } catch (error) {
    console.error('Error reading customer(s):', error.message);
    res.status(500).json({ message: error.message });
  }
});

export default router;