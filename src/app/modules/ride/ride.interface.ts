import { Document } from "mongoose";

export enum RideStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    ONGOING = "ONGOING",
    COMPLETED = "COMPLETED",
    CANCELLED = "CANCELLED"
}

export interface IRide extends Document {
    riderId: string; // reference to User
    driverId?: string; // reference to Driver
    pickupLocation: string;
    dropLocation: string;
    fare?: number;
    status: RideStatus;
    createdAt?: Date;
    updatedAt?: Date;
}
