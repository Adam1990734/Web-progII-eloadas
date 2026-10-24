import {InventionMinimal} from '@/types/invention';
export interface Inventor {
    type: "Inventor";
    id: number;
    name: string;
    bornAt: number;
    diedAt: number | null;
    inventions: InventionMinimal[];
}

export interface InventorWithoutType {
    id: number;
    name: string;
    bornAt: number;
    diedAt: number | null;
    inventions: InventionMinimal[];
}

export interface InventorMinimal {
    type: "InventorMinimal"
    id: number,
    name: string
}

export interface InventorSimple {
    type: "InventorSimple"
    name: string;
    bornAt: number;
    diedAt: number | null;
}
