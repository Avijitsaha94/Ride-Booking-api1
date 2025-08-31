// src/app/modules/user/user.validation.ts
import { z } from "zod";
import { Role, IsActive } from "./user.interface";

export const createUserZodSchema = z.object({
    body: z.object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        phone: z.string().optional(),
        address: z.string().optional(),
        role: z.nativeEnum(Role).optional()
    })
});

export const updateUserZodSchema = z.object({
    body: z.object({
        name: z.string().min(2).optional(),
        password: z.string().min(6).optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        role: z.nativeEnum(Role).optional(),
        isActive: z.nativeEnum(IsActive).optional(),
        isVerified: z.boolean().optional()
    })
});
