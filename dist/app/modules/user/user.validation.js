"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserZodSchema = exports.createUserZodSchema = void 0;
// src/app/modules/user/user.validation.ts
const zod_1 = require("zod");
const user_interface_1 = require("./user.interface");
exports.createUserZodSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Name must be at least 2 characters"),
    email: zod_1.z.string().email("Invalid email"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters"),
    phone: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    role: zod_1.z.nativeEnum(user_interface_1.Role).optional()
});
exports.updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(2).optional(),
        password: zod_1.z.string().min(6).optional(),
        phone: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        role: zod_1.z.nativeEnum(user_interface_1.Role).optional(),
        isActive: zod_1.z.nativeEnum(user_interface_1.IsActive).optional(),
        isVerified: zod_1.z.boolean().optional()
    })
});
