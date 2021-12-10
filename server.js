const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customer');
const adminRoutes = require('./routes/admin');
const deliveryPersonRoutes = require('./routes/deliveryPerson');
const port = 9001; // it's over 9000
const mongoose = require('mongoose');

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/delivery', deliveryPersonRoutes);
app.use('/customer', customerRoutes);

try {
    mongoose.connect('mongodb://localhost:27017/foodapp');
    console.log('DB CONNECTION SUCCESSFUL!');
} catch (err) {
    console.log('DB CONNECTION FAILED!');
    console.log(err);
}

app.get('/', (req, res) => {
	res.json({
		statusCode: 200,
	});
});

app.listen(port, () => {
	console.log('Server running at port', port);
});
