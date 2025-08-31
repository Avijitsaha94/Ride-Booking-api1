import { Router } from "express";
import { AdminControllers } from "./admin.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = Router();

// Only Admin & SuperAdmin can access these routes
router.get("/users", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), AdminControllers.getAllUsers);
router.patch("/users/:id/toggle-status", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), AdminControllers.toggleUserStatus);
router.get("/drivers", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), AdminControllers.getAllDrivers);
router.get("/rides", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), AdminControllers.getAllRides);

export const AdminRoutes = router;
