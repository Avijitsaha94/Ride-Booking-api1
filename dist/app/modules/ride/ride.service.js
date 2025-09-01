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
exports.RideServices = void 0;
const AppError_1 = __importDefault(require("../../errorHelpers/AppError"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const ride_model_1 = require("./ride.model");
const mongoose_1 = __importDefault(require("mongoose"));
const createRide = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const ride = yield ride_model_1.Ride.create(payload);
    return ride;
});
const assignDriver = (rideId, driverId) => __awaiter(void 0, void 0, void 0, function* () {
    const ride = yield ride_model_1.Ride.findById(rideId);
    if (!ride)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Ride not found");
    if (ride.status !== "REQUESTED") {
        throw new AppError_1.default(http_status_codes_1.default.BAD_REQUEST, "Ride cannot be assigned");
    }
    // ✅ string → ObjectId conversion
    ride.driverId = new mongoose_1.default.Types.ObjectId(driverId);
    ride.status = "ACCEPTED";
    yield ride.save();
    return ride;
});
const updateRideStatus = (rideId, status) => __awaiter(void 0, void 0, void 0, function* () {
    const ride = yield ride_model_1.Ride.findById(rideId);
    if (!ride)
        throw new AppError_1.default(http_status_codes_1.default.NOT_FOUND, "Ride not found");
    ride.status = status;
    yield ride.save();
    return ride;
});
const getAllRides = () => __awaiter(void 0, void 0, void 0, function* () {
    const rides = yield ride_model_1.Ride.find()
        .populate("riderId", "-password")
        .populate("driverId", "-password");
    return rides;
});
exports.RideServices = {
    createRide,
    assignDriver,
    updateRideStatus,
    getAllRides,
};
