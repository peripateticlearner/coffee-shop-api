const express = require('express');
const router = express.Router();

let orders = [];

// GET Orders (Confirmation Page)
router.get('/', (req, res) => {
    res.render('order', { title: "Place an Order", orders });
});

// POST Order
router.post('/new', (req, res) => {
    const { name, coffee } = req.body;
    if (!name || !coffee) {
        return res.send("Invalid order");
    }
    orders.push({ name, coffee, time: new Date() });
    res.redirect('/');
});

module.exports = router;
