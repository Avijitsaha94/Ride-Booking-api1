"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = require("express");
const admin_controller_1 = require("./admin.controller");
const checkAuth_1 = require("../../middlewares/checkAuth");
const user_interface_1 = require("../user/user.interface");
const router = (0, express_1.Router)();
// Only Admin & SuperAdmin can access these routes
router.get("/users", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), admin_controller_1.AdminControllers.getAllUsers);
router.patch("/users/:id/toggle-status", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), admin_controller_1.AdminControllers.toggleUserStatus);
router.get("/drivers", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), admin_controller_1.AdminControllers.getAllDrivers);
router.get("/rides", (0, checkAuth_1.checkAuth)(user_interface_1.Role.ADMIN, user_interface_1.Role.SUPER_ADMIN), admin_controller_1.AdminControllers.getAllRides);
exports.AdminRoutes = router;
