import { Types } from "mongoose";

export type RideStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "COMPLETED"
  | "CANCELLED";

export interface IRide {
  riderId: Types.ObjectId;
  driverId?: Types.ObjectId;
  pickupLocation: {
    lat: number;
    lng: number;
    address?: string;
  };
  destinationLocation: {
    lat: number;
    lng: number;
    address?: string;
  };
  status: RideStatus;
  fare?: number;
  requestedAt: Date;
  completedAt?: Date;
}
