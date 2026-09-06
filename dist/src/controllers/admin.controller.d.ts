import type { Request, Response } from "express";
export declare const getSuperDashboard: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const getClinicDashboard: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const listPayments: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const createPayment: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const listSubscriptions: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const listAuditLogs: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const listSettings: (req: Request, res: Response, next: import("express").NextFunction) => void;
