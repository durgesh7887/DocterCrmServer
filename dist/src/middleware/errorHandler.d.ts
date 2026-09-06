import type { NextFunction, Request, Response } from "express";
import type { ZodType } from "zod";
export declare function validateBody(schema: ZodType): (req: Request, _res: Response, next: NextFunction) => void;
export declare function errorHandler(err: unknown, _req: Request, res: Response, _next: NextFunction): Response<any, Record<string, any>>;
export declare function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<unknown>): (req: Request, res: Response, next: NextFunction) => void;
