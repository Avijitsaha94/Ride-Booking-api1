export enum DriverStatus {
    ONLINE = "ONLINE",
    OFFLINE = "OFFLINE"
}

export interface IDriver {
    userId: string; // reference to User
    vehicleNumber: string;
    vehicleType: string;
    status: DriverStatus;
    earnings?: number;
    isVerified?: boolean;
}
