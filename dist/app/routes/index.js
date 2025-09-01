"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_route_1 = require("../modules/auth/auth.route");
const user_route_1 = require("../modules/user/user.route");
const driver_route_1 = require("../modules/driver/driver.route");
const ride_route_1 = require("../modules/ride/ride.route");
const admin_route_1 = require("../modules/admin/admin.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/auth",
        route: auth_route_1.AuthRoutes
    },
    {
        path: "/user",
        route: user_route_1.UserRoutes
    },
    {
        path: "/driver",
        route: driver_route_1.DriverRoutes
    },
    {
        path: "/ride",
        route: ride_route_1.RideRoutes
    },
    {
        path: "/admin",
        route: admin_route_1.AdminRoutes
    }
];
moduleRoutes.forEach((module) => {
    exports.router.use(module.path, module.route);
});
