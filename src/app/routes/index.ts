import { Router } from "express"
import { AuthRoutes } from "../modules/auth/auth.route"
import { UserRoutes } from "../modules/user/user.route"
import { DriverRoutes } from "../modules/driver/driver.route"
import { RideRoutes } from "../modules/ride/ride.route"
import { AdminRoutes } from "../modules/admin/admin.route"

export const router = Router()

const moduleRoutes = [
    {
        path: "/auth",
        route: AuthRoutes
    },
    {
        path: "/user",
        route: UserRoutes
    },
    {
        path: "/driver",
        route: DriverRoutes
    },
    {
        path: "/ride",
        route: RideRoutes
    },
    {
        path: "/admin",
        route: AdminRoutes
    }
]

moduleRoutes.forEach((module) => {
    router.use(module.path, module.route)
})
