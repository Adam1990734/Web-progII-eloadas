import { User } from '@/types/index';

type Date = {
    date: string,
    timezone: string,
    timezone_type: number
}

export interface Message {
    type: "Message";
    id: number,
    content: string,
    createdAt: Date,
    userId: number|null,
    userName: string|null
}

export interface MessageResponse {
    id: number;
    content: string;
    createdAt: Date;
    userId: number|null;
    userName: string|null;
}

export interface MessageRequest {
    content: string
}
