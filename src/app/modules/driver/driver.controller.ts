import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { DriverServices } from "./driver.service";
import { JwtPayload } from "jsonwebtoken";

const createDriver = catchAsync(async (req: Request, res: Response) => {
    const payload = { ...req.body, userId: (req.user as JwtPayload).userId };
    const driver = await DriverServices.createDriver(payload);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "Driver profile created successfully",
        data: driver
    });
});

const updateStatus = catchAsync(async (req: Request, res: Response) => {
    const driverId = req.params.id;
    const { status } = req.body;
    const driver = await DriverServices.updateDriverStatus(driverId, status);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Driver status updated successfully",
        data: driver
    });
});

const getDrivers = catchAsync(async (req: Request, res: Response) => {
    const drivers = await DriverServices.getAllDrivers();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All drivers retrieved successfully",
        data: drivers
    });
});

export const DriverControllers = {
    createDriver,
    updateStatus,
    getDrivers
};
