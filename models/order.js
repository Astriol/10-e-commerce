const mongoose = require('mongoose')

const SingleOrderItemSchema = mongoose.Schema({
  name: { type: String, requires: true},
  image: { type: String, requires: true},
  price: { type: Number, requires: true},
  amount: { type: Number, requires: true},
  product: {
    type:mongoose.Schema.ObjectId,
    ref:'Product',
    required: true,
  }
});

const OrderSchema = new mongoose.Schema(
  {
    tax: {
      type: Number,
    },
    shippingFee: {
      type: Number,
    },
    subtotal: {
      type: Number,
    },
    total: {
      type: Number,
    },
    orderItems:[SingleOrderItemSchema],
    status: {
      type: String,
      enum: ['pending', 'failed', 'paid', 'delivered', 'canceled'],
      default: 'pending'
    },
    user: {
      type:mongoose.Schema.ObjectId,
      ref:'User',
      required: true,
    },
    clientSecret: {
      type: String,
    },
    paymentId: {
      type: String,
    },
  },
    { timestamps: true }
)

module.exports = mongoose.model('Order', OrderSchema)
