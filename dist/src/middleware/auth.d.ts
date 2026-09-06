import type { NextFunction, Request, Response } from "express";
export declare function authenticate(req: Request, _res: Response, next: NextFunction): Promise<void>;
export declare function requireRoles(...roles: string[]): (req: Request, _res: Response, next: NextFunction) => void;
export declare function requirePermission(permission: string): (req: Request, _res: Response, next: NextFunction) => void;
export declare function requireClinicAccess(req: Request, _res: Response, next: NextFunction): void;
