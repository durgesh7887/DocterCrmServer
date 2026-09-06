import { Types } from "mongoose";
export declare function nextSequence(key: string): Promise<number>;
export declare function nextCode(prefix: string, clinicId: Types.ObjectId, pad?: number): Promise<string>;
