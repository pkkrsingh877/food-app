const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
    {
        items: {
            type: [String],
            required: [true, "items are required!"]
        },
        deliveryPerson: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "order must be assigned to a delivery person"]
        },
        stage: {
            type: [String],
            enum: ["Task Created", "Reached Store", "Items Picked", "Enroute", "Delivered", "Canceled"],
            default: ["Task Created"]
        },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "customer id is required!"]
        },
        address: {
            type: String,
            default: ["address is required!"]
        }
    }
);

const Order = mongoose.model('Order', orderSchema);