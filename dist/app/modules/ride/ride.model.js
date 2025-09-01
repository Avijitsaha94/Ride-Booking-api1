"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
const mongoose_1 = require("mongoose");
const rideSchema = new mongoose_1.Schema({
    riderId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    driverId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Driver" },
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
}, { timestamps: true });
exports.Ride = (0, mongoose_1.model)("Ride", rideSchema);
