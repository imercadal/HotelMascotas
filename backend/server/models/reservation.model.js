import mongoose from "mongoose";
import User from "./user.model.js";

const ReservationSchema = new mongoose.Schema(
    {
        reservationClient: {
            type: mongoose.Schema.Types.ObjectId, ref: User  
        },
        reservationPet: [{
            type: mongoose.Schema.Types.ObjectId, ref: "Pet" 
        }],
        reservationNotes: {
            type: String
        },
        checkInDate: {
            type: Date,
            required: [true, "Check-in Date is required"],
        },
        checkOutDate: {
            type: Date,
            required: [true, "Check-out Date is required"],
        },
        numberOfNights: {
            type: Number
        },
        rate: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Rate"
        },
        amountDue: {
            type: Number
        },
    },
    { timestamps: true }
);

ReservationSchema.pre('save', function(next) {
    this.numberOfNights = Math.ceil((this.checkOutDate - this.checkInDate) / (1000 * 60 * 60 * 24));
    next();
});

const Reservation = mongoose.model("reservation", ReservationSchema);

export default Reservation;