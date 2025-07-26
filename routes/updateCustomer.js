import express from 'express';
import Customer from '../models/Customer.js';

const router = express.Router();

// update /Customer
router.put('/Update', async (req, res) => {
  try {
    const { id, name, accountType, balance, isActive } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Missing required field: id' });
    }

    const updatedCustomer = await Customer.findOneAndUpdate(
      { id },                               // find by custom id
      { name, accountType, balance, isActive }, // fields to update
      { new: true, runValidators: true }    // return updated doc + validate schema
    );

    if (!updatedCustomer) {
      return res.status(404).json({ message: `Customer with id ${id} not found` });
    }

    res.json({
      message: 'Customer updated successfully!',
      updatedCustomer
    });

  } catch (error) {
    console.error('Error updating customer:', error.message);
    res.status(500).json({ message: error.message });
  }
  
});

export default router;