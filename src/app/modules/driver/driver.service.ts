import httpStatus from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { Driver } from "./driver.model";
import { IDriver } from "./driver.interface";


const createDriver = async (payload: Partial<IDriver>) => {
    const existingDriver = await Driver.findOne({ userId: payload.userId });
    if (existingDriver) {
        throw new AppError(httpStatus.BAD_REQUEST, "Driver profile already exists");
    }

    const driver = await Driver.create(payload);
    return driver;
};

const updateDriverStatus = async (driverId: string, status: string) => {
    const driver = await Driver.findById(driverId);
    if (!driver) throw new AppError(httpStatus.NOT_FOUND, "Driver not found");

    driver.status = status as any;
    await driver.save();
    return driver;
};

const getAllDrivers = async () => {
    const drivers = await Driver.find().populate("userId", "-password");
    return drivers;
};

export const DriverServices = {
    createDriver,
    updateDriverStatus,
    getAllDrivers
};
