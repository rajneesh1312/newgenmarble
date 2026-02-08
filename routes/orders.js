// routes/orders.js

const express = require('express');
const router = express.Router();

// Sample data - replace with database integration
let orders = [];

// API endpoint to create a new order
router.post('/orders', (req, res) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.status(201).json({ message: 'Order created', order: newOrder });
});

// API endpoint to get all orders
router.get('/orders', (req, res) => {
    res.json(orders);
});

// API endpoint to get a specific order by ID
router.get('/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === parseInt(req.params.id));
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
});

// API endpoint to update an order by ID
router.put('/orders/:id', (req, res) => {
    const index = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Order not found' });
    orders[index] = req.body;
    res.json({ message: 'Order updated', order: orders[index] });
});

// API endpoint to delete an order by ID
router.delete('/orders/:id', (req, res) => {
    const index = orders.findIndex(o => o.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Order not found' });
    orders.splice(index, 1);
    res.json({ message: 'Order deleted' });
});

module.exports = router;