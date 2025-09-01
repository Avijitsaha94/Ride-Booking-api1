"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RideRoutes = void 0;
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const ride_controller_1 = require("./ride.controller");
const user_interface_1 = require("../user/user.interface");
const router = (0, express_1.Router)();
// Rider creates a ride
router.post("/create", (0, checkAuth_1.checkAuth)(user_interface_1.Role.USER), ride_controller_1.RideControllers.createRide);
// Admin/Driver assigns driver to ride
router.patch("/assign", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), ride_controller_1.RideControllers.assignDriver);
// Update ride status
router.patch("/status/:id", (0, checkAuth_1.checkAuth)(user_interface_1.Role.DRIVER, user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), ride_controller_1.RideControllers.updateRideStatus);
// Get all rides (Admin)
router.get("/all", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), ride_controller_1.RideControllers.getRides);
exports.RideRoutes = router;
