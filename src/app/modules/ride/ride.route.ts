import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { RideControllers } from "./ride.controller";
import { Role } from "../user/user.interface";

const router = Router();

// Rider creates a ride
router.post("/create", checkAuth(Role.USER), RideControllers.createRide);

// Admin/Driver assigns driver to ride
router.patch("/assign", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), RideControllers.assignDriver);

// Update ride status
router.patch("/status/:id", checkAuth(Role.DRIVER, Role.ADMIN, Role.SUPER_ADMIN), RideControllers.updateRideStatus);

// Get all rides (Admin)
router.get("/all", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), RideControllers.getRides);

export const RideRoutes = router;
