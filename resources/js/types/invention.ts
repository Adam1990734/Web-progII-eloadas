import {InventorMinimal} from '@/types/inventor';

export interface Invention {
    id: number,
    name: string,
    inventors: InventorMinimal[]
}

export interface InventionMinimal {
    id: number;
    name: string;
}

export interface InventionSimple {
    name: string;
}
