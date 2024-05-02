import { Request } from "express";

export interface AuthRequest extends Request {
    authRequest?: {
        email: string,
        password: string
    };
}

export interface AuthData {
    email: string,
    password: string
}