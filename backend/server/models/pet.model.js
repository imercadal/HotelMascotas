import mongoose from "mongoose";
import User from "./user.model.js";

const PetsSchema = new mongoose.Schema(
    {
        petName: {
            type: String,
            minlength: 3,
            required: [true, "Pet Name is required"],
            unique: true,
        },
        petType: {
            type: String,
            minlength: 3,
            required: [true, "Pet's Type is required"],
        },
        petWeight: {
            type: Number
        },
        petAge: {
            type: Number,
            required: [true, "Pet's Age is required"],
        },
        petNotes: {
            type: String,
            minlength: 3
        },
        petOwner: {
            type: mongoose.Schema.Types.ObjectId, ref: User  
        }
    },
    { timestamps: true }
);

const Pets = mongoose.model("pets", PetsSchema);

export default Pets;
