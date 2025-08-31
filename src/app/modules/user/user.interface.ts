
export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
    SUPER_ADMIN = "SUPER_ADMIN",
    DRIVER = "DRIVER"
}

export enum IsActive {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
    BLOCKED = "BLOCKED"
}

export interface IAuthProvider {
    provider: string;
    providerId: string;
}

export interface IUser {
    name?: string;
    email: string;
    password?: string;
    phone?: string;
    address?: string;
    role: Role;
    isVerified?: boolean;
    isActive?: IsActive;
    isDeleted?: boolean;
    auths?: IAuthProvider[];
    createdAt?: Date;
    updatedAt?: Date;
}
