const BookingDetailsSchema = new mongoose.Schema({
    bookingDetailsAmount: {
        type: Number,
        required: true,
    },
    bookingDetailsDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    bookingDetailsReservation: {
        type: mongoose.Schema.Types.ObjectId, ref: Reservation 
    },
    bookingDetailsClient: {
        type: mongoose.Schema.Types.ObjectId, ref: User 
    },
    bookingDetailsStatus: {
        type: String,
        enum: ["Paid", "Pending", "Unpaid"],
        default: "Unpaid",
    },
},
{ timestamps: true }
);