import { useState, useEffect } from 'react';
import { BreadcrumbItem, Invention, InventionResponse } from '@/types';
import InventionDetails from '@/components/invention/invention-details';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

type Props = {
    id: number;
};

export default function Details({ id } : Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'CRUD',
            href: '/crud',
        },
        {
            title: 'inventions',
            href: '/crud/inventions',
        },
        {
            title: 'details',
            href: `/crud/inventions/${id}`,
        },
    ];

    const [invention, setInvention] = useState<Invention>();

    useEffect(() => {
        axios.get(`/api/inventions/${id}`)
            .then(data => data.data)
            .then((data: InventionResponse) => {
                setInvention({
                    ...data,
                    type: 'Invention',
                });
            });
    }, []);

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            { invention ?
                <InventionDetails invention={invention} isComplex={true} />
                :
                <span>Hiba</span>
            }
        </AppHeaderLayout>
    );
}
