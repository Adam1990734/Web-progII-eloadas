import { useEffect, useRef, useState } from 'react';
import { BreadcrumbItem, Inventor } from '@/types';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

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
            <Table headerLabels={['name', 'born in', 'died in']} objectToMap={inventors} hasOperations={hasOperations} />
            <Pager currentPage={page} pageSetter={setPage} lastPage={lastPage.current} />
        </AppHeaderLayout>
    );
}
