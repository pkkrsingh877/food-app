const express = require('express');
const router = express.Router();
const User = require('../models/users');

router.post('/login', async (req, res) => {
	try {
		const { name, username, phoneNumber, role, password } = req.body;
		const user = await User.create({
			name,
			username,
			phoneNumber,
			role,
			password,
		});
		console.log(user);
		res.json({
			statusCode: 200,
			message: 'User was created successfully',
		});
	} catch (err) {
		console.log(err);
		res.json({
			statusCode: 400,
			message: 'User was not created!',
		});
	}
});

router.post('/signup', (req, res) => {
	res.json({
		where: "on the auth'/signup route",
	});
});

module.exports = router;
