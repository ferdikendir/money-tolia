import { Response } from "../api.model";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse extends Response<User> {
    token: string;
    user: User;
}

export interface User {
    id: number;
    username: string;
    email: string;
    roles: string[];
}