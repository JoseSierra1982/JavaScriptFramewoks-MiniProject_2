import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
name: {
    type: String,      
    required: true,
    trim: true
  },
  id: {
    type: String,      
    required: true,
    trim: true,
    unique: true  
  },
  accountType: {
    type: String,   
    enum: ['Savings', 'Checking', 'Business'],
    required: true
  },
  balance: {
    type: Number,   
    default: 0.0
  },
  isActive: {
    type: Boolean,   
    default: true
  },
  createdAt: {
    type: Date,   
    default: Date.now
  }
});

// Create model
const Customer = mongoose.model('Customer', customerSchema);

export default Customer;