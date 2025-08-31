import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status-codes";
import { Ride, IRide, RideStatus } from "./ride.model";
import { JwtPayload } from "jsonwebtoken";

const createRide = async (payload: Partial<IRide>) => {
    const ride = await Ride.create(payload);
    return ride;
};

const assignDriver = async (rideId: string, driverId: string) => {
    const ride = await Ride.findById(rideId);
    if (!ride) throw new AppError(httpStatus.NOT_FOUND, "Ride not found");

    if (ride.status !== RideStatus.PENDING) {
        throw new AppError(httpStatus.BAD_REQUEST, "Ride cannot be assigned");
    }

    ride.driverId = driverId;
    ride.status = RideStatus.ACCEPTED;
    await ride.save();
    return ride;
};

const updateRideStatus = async (rideId: string, status: RideStatus) => {
    const ride = await Ride.findById(rideId);
    if (!ride) throw new AppError(httpStatus.NOT_FOUND, "Ride not found");

    ride.status = status;
    await ride.save();
    return ride;
};

const getAllRides = async () => {
    const rides = await Ride.find()
        .populate("riderId", "-password")
        .populate("driverId", "-password");
    return rides;
};

export const RideServices = {
    createRide,
    assignDriver,
    updateRideStatus,
    getAllRides
};
