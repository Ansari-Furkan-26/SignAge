const express = require('express');
const router = express.Router();
const UserOrder = require('../model/order'); // Ensure path is correct

// ✅ Create Order
router.post('/', async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);

    const {
      inputText,
      color,
      size,
      type,
      font,
      phoneNumber,
      totalPrice,
      orderId,
      status = 'Pending', // Default to Pending if not provided
      isPaid = false
    } = req.body;

    // Validate required fields
    if (!inputText || !color || !size || !type || !font || !phoneNumber || totalPrice == null) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if orderId is unique
    if (orderId) {
      const existingOrder = await UserOrder.findOne({ orderId });
      if (existingOrder) {
        return res.status(400).json({ error: 'Order ID already exists' });
      }
    }

    const order = new UserOrder({
      inputText,
      color,
      size,
      type,
      font,
      mobile: phoneNumber,
      totalPrice: parseFloat(totalPrice),
      orderId: orderId || undefined,
      status,
      isPaid
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(400).json({ error: err.message });
  }
});

// ✅ Get All Orders
router.get('/', async (req, res) => {
  try {
    const orders = await UserOrder.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update Order
router.put('/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const {
      inputText,
      color,
      size,
      type,
      font,
      mobile,
      totalPrice,
      status,
      isPaid
    } = req.body;

    const updateFields = {
      inputText,
      color,
      size,
      type,
      font,
      mobile,
      totalPrice: parseFloat(totalPrice) || 0
    };

    // Only update status and isPaid if provided
    if (status) {
      updateFields.status = status;
      updateFields.isPaid = status === 'Completed'; // Sync isPaid with status
    } else if (isPaid !== undefined) {
      updateFields.isPaid = !!isPaid;
      updateFields.status = isPaid ? 'Completed' : 'Pending'; // Default to Pending if isPaid is false
    }

    const updatedOrder = await UserOrder.findOneAndUpdate(
      { orderId },
      { $set: updateFields },
      { new: true, runValidators: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updatedOrder);
  } catch (err) {
    console.error("Error updating order:", err);
    res.status(400).json({ error: err.message });
  }
});

// ✅ Delete Order
router.delete('/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await UserOrder.findOneAndDelete({ orderId });

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    console.error("Error deleting order:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;