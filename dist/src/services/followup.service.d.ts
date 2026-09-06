import type { FollowupStatus } from "../types/enums.js";
export declare function calculateFollowupDate(visitDate: Date, afterDays: number): Date;
export declare function classifyFollowupStatus(params: {
    storedStatus: FollowupStatus;
    followupDate: Date;
    now?: Date;
}): FollowupStatus;
