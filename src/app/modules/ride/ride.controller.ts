import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { RideServices } from "./ride.service";
import { RideStatus } from "./ride.interface";
import { JwtPayload } from "jsonwebtoken";

const createRide = catchAsync(async (req: Request, res: Response) => {
    const payload = { ...req.body, riderId: (req.user as JwtPayload).userId };
    const ride = await RideServices.createRide(payload);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Ride created successfully",
        data: ride
    });
});

const assignDriver = catchAsync(async (req: Request, res: Response) => {
    const { rideId, driverId } = req.body;
    const ride = await RideServices.assignDriver(rideId, driverId);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Driver assigned successfully",
        data: ride
    });
});

const updateRideStatus = catchAsync(async (req: Request, res: Response) => {
    const rideId = req.params.id;
    const { status } = req.body;
    const ride = await RideServices.updateRideStatus(rideId, status as RideStatus);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Ride status updated successfully",
        data: ride
    });
});

const getRides = catchAsync(async (req: Request, res: Response) => {
    const rides = await RideServices.getAllRides();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All rides retrieved successfully",
        data: rides
    });
});

export const RideControllers = {
    createRide,
    assignDriver,
    updateRideStatus,
    getRides
};
