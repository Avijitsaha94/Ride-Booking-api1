
import mongoose, { Schema } from "mongoose";
import { IUser, Role, IsActive } from "./user.interface";

const UserSchema = new Schema<IUser>(
    {
        _id: { type: String },
        name: { type: String },
        email: { type: String, required: true, unique: true },
        password: { type: String },
        phone: { type: String },
        address: { type: String },
        role: { type: String, enum: Object.values(Role), default: Role.USER },
        isVerified: { type: Boolean, default: false },
        isActive: { type: String, enum: Object.values(IsActive), default: IsActive.ACTIVE },
        isDeleted: { type: Boolean, default: false },
        auths: [
            {
                provider: { type: String, required: true },
                providerId: { type: String, required: true }
            }
        ]
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model<IUser>("User", UserSchema);
