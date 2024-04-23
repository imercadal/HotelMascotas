import mongoose from "mongoose";

const RateSchema = new mongoose.Schema({
    ratePerNight: {
        type: Number,
        required: true,
    },
    effectiveDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
},

{ timestamps: true }

);

const Rate = mongoose.model("Rate", RateSchema);

export default Rate;