import {InventorMinimal} from '@/types/inventor';

export interface Invention {
    type: "Invention"
    id: number,
    name: string,
    inventors: InventorMinimal[]
}

export interface InventionResponse {
    id: number;
    name: string;
    inventors: InventorMinimal[];
}

export interface InventionMinimal {
    id: number;
    name: string;
}

export interface InventionRequest {
    name: string;
}
