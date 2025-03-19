const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static('images'));

// Routes
const menuRoute = require('./routes/menu');
const orderRoute = require('./routes/order');
const aboutRoute = require('./routes/about');

app.use('/menu', menuRoute);
app.use('/order', orderRoute);
app.use('/about', aboutRoute);

app.get('/', (req, res) => {
    res.render('index', { title: "Welcome to the Coffee Shop" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
