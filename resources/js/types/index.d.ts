import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
    children?: NavItem[];
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

//Saját modell és kiegészített típusok:
import { Inventor, InventorMinimal, InventorRequest, InventorResponse } from '@/types/inventor';
import { Invention, InventionMinimal, InventionRequest, InventionResponse } from '@/types/invention';
import { Message, MessageRequest, MessageResponse } from '@/types/message';
import { InventorAndInventionCount, InventorTimeLine } from '@/types/diagram';

export type { Inventor, InventorMinimal, InventorRequest, InventorResponse };
export type { Invention, InventionMinimal, InventionRequest, InventionResponse };
export type { Message, MessageRequest, MessageResponse };
export type { InventorAndInventionCount, InventorTimeLine };
