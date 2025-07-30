//Step 3: Delete Operation (deleteCustomer.js)
//Step 4: Setting up Express Routes in app.js

import express from 'express';
import Customer from '../models/Customer.js';

const router = express.Router();

// Delete /Customer
router.delete('/Delete', async (req, res) => {
try {
    console.log(' Received request body:', req.body);
    const { id } = req.body; // JSON must include "id"

    if (!id) {
      return res.status(400).json({ message:  'Missing required field: id' });
    }

    // Find and delete by id
    const deletedCustomer = await Customer.findOneAndDelete({id});

    if (!deletedCustomer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.json({
      message: 'Customer deleted successfully!',
      deletedCustomer
    });

  } catch (error) {
    console.error('Error deleting customer:', error.message);
    res.status(500).json({ message: error.message });
  }
});

export default router;