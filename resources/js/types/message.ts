import { User } from '@/types/index';

export interface Message {
    id: number,
    content: string,
    createdAt: Date,
    userId: number,
    userName: string
}

export interface MessageSimple {
    content: string,
    createdAt: Date,
    connectedUser: User|null
}
