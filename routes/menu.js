const express = require('express');
const router = express.Router();

const coffeeMenu = [
    { id: 1, name: "Espresso", price: 3.00 },
    { id: 2, name: "Latte", price: 4.50 },
    { id: 3, name: "Cappuccino", price: 4.00 },
];

// API route for menu
router.get('/', (req, res) => {
    res.render('menu', { title: "Coffee Menu", coffeeMenu });
});

module.exports = router;
