import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { DriverControllers } from "./driver.controller";
import { Role } from "../user/user.interface";

const router = Router();

router.post("/create", checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN), DriverControllers.createDriver);
router.patch("/status/:id", checkAuth(Role.DRIVER, Role.ADMIN, Role.SUPER_ADMIN), DriverControllers.updateStatus);
router.get("/all", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), DriverControllers.getDrivers);

export const DriverRoutes = router;
