// src/app/modules/user/user.route.ts
import { Router } from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/ValidateRequest";
import { UserControllers } from "./user.controller";
import { Role } from "./user.interface";
import { updateUserZodSchema, createUserZodSchema } from "./user.validation";

const router = Router();

// Register user
router.post("/register", validateRequest(createUserZodSchema), UserControllers.createUser);

// Get all users (Admin & SuperAdmin only)
router.get("/all-users", checkAuth(Role.ADMIN, Role.SUPER_ADMIN), UserControllers.getAllUsers);

// Update user (Any role allowed but permission checked in service)
router.patch("/:id", validateRequest(updateUserZodSchema), checkAuth(...Object.values(Role)), UserControllers.updateUser);

export const UserRoutes = router;
