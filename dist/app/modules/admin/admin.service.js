"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminServices = void 0;
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const user_model_1 = require("../user/user.model");
const driver_model_1 = require("../driver/driver.model");
const ride_model_1 = require("../ride/ride.model");
const user_interface_1 = require("../user/user.interface");
exports.AdminServices = {
    getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield user_model_1.User.find().select("-password");
    }),
    toggleUserStatus: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_model_1.User.findById(userId);
        if (!user)
            throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "User not found");
        user.isActive = user.isActive === user_interface_1.IsActive.ACTIVE ? user_interface_1.IsActive.BLOCKED : user_interface_1.IsActive.ACTIVE;
        yield user.save();
        return user;
    }),
    getAllDrivers: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield driver_model_1.Driver.find().populate({ path: "userId", select: "-password" });
    }),
    getAllRides: () => __awaiter(void 0, void 0, void 0, function* () {
        return yield ride_model_1.Ride.find()
            .populate({ path: "riderId", select: "-password" })
            .populate({ path: "driverId", select: "-password" });
    })
};
