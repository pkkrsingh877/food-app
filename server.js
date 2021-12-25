const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customer');
const adminRoutes = require('./routes/admin');
const deliveryPersonRoutes = require('./routes/deliveryPerson');
const port = 9001; // it's over 9000
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const path = require('path');

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/delivery', deliveryPersonRoutes);
app.use('/customer', customerRoutes);

//setting up ejs
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

try {
    mongoose.connect('mongodb://localhost:27017/foodapp');
    console.log('DB CONNECTION SUCCESSFUL!');
} catch (err) {
    console.log('DB CONNECTION FAILED!');
    console.log(err);
}

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => {
	console.log('Server running at port', port);
});
