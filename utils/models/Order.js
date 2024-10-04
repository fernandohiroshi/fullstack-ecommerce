import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide customers name"],
    },
    email: {
      type: String,
      required: [true, "Please provide customers email"],
    },
    city: {
      type: String,
      required: [true, "Please provide customers city"],
    },
    postalCode: {
      type: String,
      required: [true, "Please provide customers postal code"],
    },
    streetAdress: {
      type: String,
      required: [true, "Please provide customers adress"],
    },
    country: {
      type: String,
      required: [true, "Please provide customers country"],
    },
    paid: {
      type: Boolean,
      default: false,
    },
    cartProducts: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        price: Number,
      },
    ],
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: [
        "processing",
        "pending",
        "shipped",
        "delivered",
        "cancelled",
        "payment_failed",
      ],
      default: "pending",
    },
    total: {
      type: Number,
      required: [true, "Must have a total number"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
