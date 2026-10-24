import {InventorMinimal} from '@/types/inventor';

export interface Invention {
    type: "Invention"
    id: number,
    name: string,
    inventors: InventorMinimal[]
}

export interface InventionWithoutType {
    id: number;
    name: string;
    inventors: InventorMinimal[];
}

export interface InventionMinimal {
    type: "InventionMinimal";
    id: number;
    name: string;
}

export interface InventionSimple {
    type: "InventionSimple";
    name: string;
}
