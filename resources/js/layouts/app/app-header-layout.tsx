import { AppContent } from '@/components/app-content';
import { AppHeaderLoggedIn } from '@/components/app-header-logged-in';
import { AppShell } from '@/components/app-shell';
import { type BreadcrumbItem, SharedData } from '@/types';
import type { PropsWithChildren } from 'react';
import { usePage } from '@inertiajs/react';
import { AppHeaderNotLoggedIn } from '@/components/app-header-not-logged-in';
export default function AppHeaderLayout({ children, breadcrumbs }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const page = usePage<SharedData>();
    const isLoggedIn : boolean = page.props.auth?.user ? true : false;
    return (
        <AppShell>
            { isLoggedIn ?
                <AppHeaderLoggedIn breadcrumbs={breadcrumbs} />
                :
                <AppHeaderNotLoggedIn/>
            }
            <AppContent>{children}</AppContent>
        </AppShell>
    );
}
