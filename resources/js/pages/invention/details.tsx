import { useState, useEffect } from 'react';
import { BreadcrumbItem, Invention, InventionResponse } from '@/types';
import InventionDetails from '@/components/invention/invention-details';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import WhileLoading from '@/components/shared/loadingUntilNull';

type Props = {
    id: number;
};

export default function InventionDetailsView({ id }: Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'inventions',
            href: '/crud/inventions',
        },
        {
            title: 'details',
            href: `/crud/inventions/${id}`,
        },
    ];

    const [invention, setInvention] = useState<Invention | null>(null);

    useEffect(() => {
        axios
            .get(`/api/inventions/${id}`)
            .then((data) => data.data)
            .then((data: InventionResponse) => {
                setInvention({
                    ...data,
                    type: 'Invention',
                });
            });
    }, []);

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            <WhileLoading toWait={invention}>
                <InventionDetails invention={invention!} isComplex={true} />
                <Button onClick={() => router.get('/crud/inventions')}>Back</Button>
            </WhileLoading>
        </AppHeaderLayout>
    );
}
