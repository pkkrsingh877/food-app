const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'username is required!'],
		},
		role: {
			type: String,
			enum: ['customer', 'admin', 'delivery person'],
			default: 'customer',
		},
		phoneNumber: {
			// for now let's store phone numbers as string
			type: String,
			required: [true, 'phone number is required!'],
		},
		password: {
			type: String,
			required: [true, 'password is required!'],
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('User', userSchema);

module.exports = User;
// we'll take care of auth token thingy later on
