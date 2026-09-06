import mongoose from "mongoose";
export declare function connectDatabase(uri: string): Promise<typeof mongoose>;
export declare function disconnectDatabase(): Promise<void>;
export declare function syncIndexes(): Promise<void>;
