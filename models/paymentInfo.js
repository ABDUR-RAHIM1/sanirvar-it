import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  paidAmount: {
    type: Number,
    required: true,
  },
  method: {
    type: String,
    enum: ["By Hand", "Bkash", "Nagad", "Rocket", "other"],
    default: "By Hand",
  },
  note: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

export const PaymentModel = mongoose.models.Payment || mongoose.model("Payment", paymentSchema);
