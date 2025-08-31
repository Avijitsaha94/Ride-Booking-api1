import { Request, Response } from "express";
import httpStatus from "http-status-codes";
import { catchAsync } from "../../../utils/catchAsync";
import { sendResponse } from "../../../utils/sendResponse";
import AppError from "../../errorHelpers/AppError";
import { User } from "../user/user.model";
import { Driver } from "../driver/driver.model";
import { Ride } from "../ride/ride.model";
import { AdminServices } from "./admin.service";

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const users = await AdminServices.getAllUsers();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All users retrieved successfully",
        data: users
    });
});

const toggleUserStatus = catchAsync(async (req: Request, res: Response) => {
    const updatedUser = await AdminServices.toggleUserStatus(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: `User status changed to ${updatedUser.isActive}`,
        data: updatedUser
    });
});

const getAllDrivers = catchAsync(async (req: Request, res: Response) => {
    const drivers = await AdminServices.getAllDrivers();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All drivers retrieved successfully",
        data: drivers
    });
});

const getAllRides = catchAsync(async (req: Request, res: Response) => {
    const rides = await AdminServices.getAllRides();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "All rides retrieved successfully",
        data: rides
    });
});

export const AdminControllers = {
    getAllUsers,
    toggleUserStatus,
    getAllDrivers,
    getAllRides
};
