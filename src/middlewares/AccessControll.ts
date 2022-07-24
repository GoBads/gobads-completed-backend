import { Request, Response, NextFunction } from "express"

export const PermissionsRequired = (request: Request, response: Response, next: NextFunction) => {
    next();
}

export const UserRole = (request: Request, response: Response, next: NextFunction) => {
    next();
}