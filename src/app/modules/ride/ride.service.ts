import AppError from "../../errorHelpers/AppError";
import httpStatus from "http-status-codes";
import { Ride } from "./ride.model";
import { IRide, RideStatus } from "./ride.interface";
import mongoose from "mongoose";

const createRide = async (payload: Partial<IRide>) => {
  const ride = await Ride.create(payload);
  return ride;
};

const assignDriver = async (rideId: string, driverId: string) => {
  const ride = await Ride.findById(rideId);
  if (!ride) throw new AppError(httpStatus.NOT_FOUND, "Ride not found");

  if (ride.status !== "REQUESTED") {
    throw new AppError(httpStatus.BAD_REQUEST, "Ride cannot be assigned");
  }

  // ✅ string → ObjectId conversion
  ride.driverId = new mongoose.Types.ObjectId(driverId);
  ride.status = "ACCEPTED";
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
  getAllRides,
};
