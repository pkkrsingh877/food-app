const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Item name is nequired'],
		},
		category: {
			type: Array,
			default: ['Food and Beverages'],
		},
		// available locations
		addresses: {
			// we'll have addresses stored in array of strings for now
			type: [String],
			default: [],
		},
	},
	{
		timestamps: true,
	}
);

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
