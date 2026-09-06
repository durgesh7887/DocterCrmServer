import type { Request, Response } from "express";
export declare function ok(res: Response, message: string, data?: unknown, status?: number): Response<any, Record<string, any>>;
export declare function fail(res: Response, message: string, status?: number, code?: string, errors?: Array<{
    field: string;
    message: string;
}>): Response<any, Record<string, any>>;
export declare function parsePagination(query: Record<string, unknown>): {
    page: number;
    limit: number;
    skip: number;
};
export declare function param(req: Request, name: string): string;
