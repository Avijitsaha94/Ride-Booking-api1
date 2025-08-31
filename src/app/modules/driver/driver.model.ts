import mongoose, { Schema, Document } from "mongoose";
import { IDriver, DriverStatus } from "./driver.interface";

export interface DriverDocument extends IDriver, Document {}

const driverSchema = new Schema<DriverDocument>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    vehicleNumber: { type: String, required: true },
    vehicleType: { type: String, required: true },
    status: { type: String, enum: Object.values(DriverStatus), default: DriverStatus.OFFLINE },
    earnings: { type: Number, default: 0 },
    isVerified: { type: Boolean, default: false },
}, { timestamps: true });

export const Driver = mongoose.model<DriverDocument>("Driver", driverSchema);
