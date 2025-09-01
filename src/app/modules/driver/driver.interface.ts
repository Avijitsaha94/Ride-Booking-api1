import { Types } from "mongoose";

export enum DriverStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED",
    OFFLINE = "OFFLINE" 
}

export interface IDriver {
    userId: Types.ObjectId; 
    licenseNumber: string;
    vehicleNumber: string;
    status: DriverStatus; 
    earnings?: number; 
    isVerified?: boolean; 
}
