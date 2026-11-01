import { useState, useEffect } from 'react';
import { InventorResponse, Inventor, BreadcrumbItem } from '@/types';
import axios from 'axios';
import InventorDetails from '@/components/inventor/inventor-details';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import WhileLoading from '@/components/shared/loadingUntilNull';

type Props = {
    id: number;
};

export default function InventorDetailsViewView({ id }: Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'inventors',
            href: '/crud/inventors',
        },
        {
            title: 'details',
            href: `/crud/inventors/${id}`,
        },
    ];

    const [inventor, setInventor] = useState<Inventor | null>(null);

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
            <WhileLoading toWait={inventor}>
                <InventorDetails inventor={inventor!} isComplex={true} />
                <Button onClick={() => router.get('/crud/inventors')}>Back</Button>
            </WhileLoading>
        </AppHeaderLayout>
    );
}
