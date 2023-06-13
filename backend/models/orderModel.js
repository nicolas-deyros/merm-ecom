import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User', // This is the model name
		},
		orderItems: [
			{
				name: { type: String, required: true },
				qty: { type: Number, required: true },
				image: { type: String, required: true },
				price: { type: Number, required: true },
				product: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Product', // This is the model name
				},
			},
		],
		shippingAddress: {
			address: { type: String, required: true },
			city: { type: String, required: true },
			postalCode: { type: String, required: true },
			country: { type: String, required: true },
		},
		paymentMethod: {
			type: String,
			required: true,
		},
		paymentResult: {
			// This is the response from PayPal
			id: { type: String },
			status: { type: String },
			update_time: { type: String },
			email_address: { type: String },
		},
		taxPrice: {
			// This is the tax amount
			type: Number,
			required: true,
			default: 0.0,
		},
		shippingPrice: {
			// This is the shipping amount
			type: Number,
			required: true,
			default: 0.0,
		},
		totalPrice: {
			// This is the total amount
			type: Number,
			required: true,
			default: 0.0,
		},
		isPaid: {
			// This is the payment status
			type: Boolean,
			required: true,
			default: false,
		},
		paidAt: {
			// This is the payment date
			type: Date,
		},
		isDelivered: {
			// This is the delivery status
			type: Boolean,
			required: true,
			default: false,
		},
		deliveredAt: {
			// This is the delivery date
			type: Date,
		},
	},
	{
		timestamps: true,
	}
)

const Order = mongoose.model('Order', orderSchema)

export default Order
