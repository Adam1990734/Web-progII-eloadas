import { useEffect, useRef, useState } from 'react';
import { BreadcrumbItem, Inventor } from '@/types';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';
import { Plus } from 'lucide-react';

type Props = {
    hasOperations?: boolean;
};

const breadCrumbs: BreadcrumbItem[] = [
    {
        title: 'inventors',
        href: '/crud/inventors',
    },
];

export default function InventorIndexView({ hasOperations = true} : Props) {
    const [inventors, setInventors] = useState<Inventor[]>([]);
    const [page, setPage] = useState<number>(1);
    const lastPage = useRef<number>(0);
    useEffect(() => {
        axios.get(`/api/inventors?page=${page}`)
            .then((data) => data.data)
            .then((data) => {
                lastPage.current = data.last_page;
                setInventors(
                    data.data.map(
                        (obj: Inventor): Inventor => ({
                            ...obj,
                            type: 'Inventor',
                        }),
                    ),
                );
            });
    }, [page]);

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            { hasOperations &&
                <div className="mt-5 mb-6 flex items-center justify-between p-2">
                    <div>
                        <h1 className="text-2xl font-semibold">Inventors</h1>

                        <p className="text-sm text-muted-foreground">Manage inventors stored in the system.</p>
                    </div>
                    <Button
                        size="lg"
                        className="gap-2 bg-emerald-600 text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md active:bg-emerald-800"
                        onClick={() => router.get('/crud/inventors/create')}
                    >
                        <Plus className="h-4 w-4" />
                        Create New Inventor
                    </Button>
                </div>
            }
            <Table headerLabels={['Name', 'Born In', 'Died In']} objectToMap={inventors} hasOperations={hasOperations} />
            <Pager currentPage={page} pageSetter={setPage} lastPage={lastPage.current} />
        </AppHeaderLayout>
    );
}
