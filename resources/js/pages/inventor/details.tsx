import { useState, useEffect } from 'react';
import { InventorResponse, Inventor, BreadcrumbItem } from '@/types';
import axios from 'axios';
import InventorDetails from '@/components/inventor/inventor-details';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

type Props = {
    id: number;
};

export default function InventorDetailsViewView({ id }: Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'CRUD',
            href: '/crud',
        },
        {
            title: 'inventors',
            href: '/crud/inventors',
        },
        {
            title: 'create',
            href: `/crud/inventors/${id}`,
        },
    ];

    const [inventor, setInventor] = useState<Inventor>();

    useEffect(() => {
        axios
            .get(`/api/inventors/${id}`)
            .then((data) => data.data)
            .then((data: InventorResponse) => {
                setInventor({
                    ...data,
                    type: 'Inventor',
                });
            });
    }, []);

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            {inventor ? <InventorDetails inventor={inventor} isComplex={true} /> : <span>Hiba</span>}
        </AppHeaderLayout>
    );
}
