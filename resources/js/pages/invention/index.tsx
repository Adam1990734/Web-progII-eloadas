import { useEffect, useRef, useState } from 'react';
import { BreadcrumbItem, Invention } from '@/types';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

type Props = {
    hasOperations?: boolean
}

const breadCrumbs : BreadcrumbItem[] = [
    {
        title: "inventions",
        href: "/crud/inventions"
    }
];

export default function InventionIndexView({ hasOperations = true }: Props) {
    const [inventions, setInventions] = useState<Invention[]>([]);
    const [page, setPage] = useState<number>(1);
    const lastpage = useRef<number>(0);
    useEffect(() => {
        axios.get(`/api/inventions?page=${page}`)
            .then(data => data.data)
            .then(data => {
                lastpage.current = data.last_page;
                setInventions(
                    data.data.map(
                        (obj: Invention): Invention => ({
                            ...obj,
                            type: 'Invention',
                        }),
                    )
                );
            });
    }, [page]);

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            { hasOperations &&
                <div className="mt-5 mb-6 flex items-center justify-between p-2">
                    <div>
                        <h1 className="text-2xl font-semibold">Inventions</h1>
                        <p className="text-sm text-muted-foreground">Manage inventions stored in the system.</p>
                    </div>

                    <Button
                        size="lg"
                        className="gap-2 bg-emerald-600 text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md active:bg-emerald-800"
                        onClick={() => router.get('/crud/inventions/create')}
                    >
                        <Plus className="h-4 w-4" />
                        Create new invention
                    </Button>
                </div>
            }
            <Table headerLabels={['Name']} objectToMap={inventions} hasOperations={hasOperations} />
            <Pager currentPage={page} pageSetter={setPage} lastPage={lastpage.current} />
        </AppHeaderLayout>
    );
}
