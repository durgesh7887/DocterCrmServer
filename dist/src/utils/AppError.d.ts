export declare class AppError extends Error {
    statusCode: number;
    code: string;
    errors?: Array<{
        field: string;
        message: string;
    }> | undefined;
    constructor(message: string, statusCode?: number, code?: string, errors?: Array<{
        field: string;
        message: string;
    }> | undefined);
}
