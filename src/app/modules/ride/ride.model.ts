import { Schema, model, Document } from "mongoose";
import { IRide, RideStatus } from "./ride.interface";

export interface IRideDocument extends IRide, Document {}

const rideSchema = new Schema<IRideDocument>(
  {
    riderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    driverId: { type: Schema.Types.ObjectId, ref: "Driver" },
    pickupLocation: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      address: { type: String },
    },
    destinationLocation: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      address: { type: String },
    },
    status: {
      type: String,
      enum: [
        "REQUESTED",
        "ACCEPTED",
        "PICKED_UP",
        "IN_TRANSIT",
        "COMPLETED",
        "CANCELLED",
      ],
      default: "REQUESTED",
    },
    fare: { type: Number },
    requestedAt: { type: Date, default: Date.now },
    completedAt: { type: Date },
  },
  { timestamps: true }
);

export const Ride = model<IRideDocument>("Ride", rideSchema);
