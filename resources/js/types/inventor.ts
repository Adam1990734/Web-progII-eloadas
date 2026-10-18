import {InventionMinimal} from '@/types/invention';
export interface Inventor {
    id: number;
    name: string;
    bornAt: number;
    diedAt: number | null;
    inventions: InventionMinimal[];
}

export interface InventorMinimal {
    id: number,
    name: string
}

export interface InventorSimple {
    name: string;
    bornAt: number;
    diedAt: number | null;
}
