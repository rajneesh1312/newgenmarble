const express = require('express');
const router = express.Router();

// Mock database
let products = [
    { id: 1, name: 'Marble Tile', price: 10.99 },
    { id: 2, name: 'Granite Slab', price: 20.99 },
    { id: 3, name: 'Quartz Countertop', price: 30.99 }
];

// Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// Get a single product by ID
router.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

// Add a new product
router.post('/', (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: products.length + 1, name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update a product
router.put('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    const { name, price } = req.body;
    product.name = name;
    product.price = price;
    res.json(product);
});

// Delete a product
router.delete('/:id', (req, res) => {
    const index = products.findIndex(p => p.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Product not found');
    products.splice(index, 1);
    res.status(204).send();
});

module.exports = router;