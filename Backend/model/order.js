const mongoose = require('mongoose');

const UserOrderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true // Ensure unique order IDs
  },
  inputText: {
    type: String,
    required: true
  },
  color: {
    type: String,
    ref: 'Color',
    required: true
  },
  size: {
    type: String,
    ref: 'Size',
    required: true
  },
  type: {
    type: String,
    ref: 'Type',
    required: true
  },
  font: {
    type: String,
    ref: 'Font',
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  isPaid: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['Pending', 'Manufacturing', 'Completed'], // Restrict to valid values
    default: 'Pending' // Default to Pending
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Ensure isPaid is true when status is Completed
UserOrderSchema.pre('save', function (next) {
  if (this.status === 'Completed') {
    this.isPaid = true;
  } else {
    this.isPaid = false; // Ensure isPaid is false for Pending/Manufacturing
  }
  next();
});

module.exports = mongoose.model('UserOrder', UserOrderSchema);