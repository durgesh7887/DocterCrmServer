import type { Request, Response } from "express";
export declare const listClinics: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const getClinic: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const createClinicHandler: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const updateClinic: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const setClinicStatus: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const getSettings: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const updateSettings: (req: Request, res: Response, next: import("express").NextFunction) => void;
export declare const clinicStaff: (req: Request, res: Response, next: import("express").NextFunction) => void;
