import { User } from '@/types/index';

export interface Message {
    type: "Message";
    id: number,
    content: string,
    createdAt: Date,
    userId: number,
    userName: string
}

export interface MessageWithoutType {
    id: number;
    content: string;
    createdAt: Date;
    userId: number;
    userName: string;
}

export interface MessageSimple {
    type: "MessageSimple"
    content: string,
    createdAt: Date,
    connectedUser: User|null
}
