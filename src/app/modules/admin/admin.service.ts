import httpStatus from "http-status-codes";
import AppError from "../../errorHelpers/AppError";
import { User } from "../user/user.model";
import { Driver } from "../driver/driver.model";
import { Ride } from "../ride/ride.model";
import { IsActive } from "../user/user.interface";

export const AdminServices = {
    getAllUsers: async () => {
        return await User.find().select("-password");
    },

    toggleUserStatus: async (userId: string) => {
        const user = await User.findById(userId);
        if (!user) throw new AppError(httpStatus.NOT_FOUND, "User not found");

        user.isActive = user.isActive === IsActive.ACTIVE ? IsActive.BLOCKED : IsActive.ACTIVE;
        await user.save();
        return user;
    },

    getAllDrivers: async () => {
        return await Driver.find().populate({ path: "userId", select: "-password" });
    },

    getAllRides: async () => {
        return await Ride.find()
            .populate({ path: "riderId", select: "-password" })
            .populate({ path: "driverId", select: "-password" });
    }
};
