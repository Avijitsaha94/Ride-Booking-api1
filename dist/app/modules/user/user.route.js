"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
// src/app/modules/user/user.route.ts
const express_1 = require("express");
const checkAuth_1 = require("../../middlewares/checkAuth");
const ValidateRequest_1 = require("../../middlewares/ValidateRequest");
const user_controller_1 = require("./user.controller");
const user_interface_1 = require("./user.interface");
const user_validation_1 = require("./user.validation");
const router = (0, express_1.Router)();
// Register user
router.post("/register", (0, ValidateRequest_1.validateRequest)(user_validation_1.createUserZodSchema), user_controller_1.UserControllers.createUser);
// Get all users (Admin & SuperAdmin only)
router.get("/all-users", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), user_controller_1.UserControllers.getAllUsers);
// Update user (Any role allowed but permission checked in service)
router.patch("/:id", (0, ValidateRequest_1.validateRequest)(user_validation_1.updateUserZodSchema), (0, checkAuth_1.checkAuth)(...Object.values(user_interface_1.Role)), user_controller_1.UserControllers.updateUser);
exports.UserRoutes = router;
