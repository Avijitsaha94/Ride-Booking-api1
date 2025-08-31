import mongoose, { Schema } from "mongoose";
import { IRide, RideStatus } from "./ride.interface";

const rideSchema = new Schema<IRide>({
    riderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    driverId: { type: mongoose.Schema.Types.ObjectId, ref: "Driver" },
    pickupLocation: { type: String, required: true },
    dropLocation: { type: String, required: true },
    fare: { type: Number },
    status: { type: String, enum: Object.values(RideStatus), default: RideStatus.PENDING }
}, { timestamps: true });

export const Ride = mongoose.model<IRide>("Ride", rideSchema);
