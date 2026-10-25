import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import axios from 'axios';
import { InventionRequest, InventionResponse } from '@/types/invention';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { BreadcrumbItem } from '@/types';

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
        title: 'create',
        href: '/crud/inventions/create',
    }
];

export default function InventionCreateView() {
    const invention = useRef<InventionRequest>({
        name: '',
    });
    const [result, setResult] = useState<{
        status: number;
        new: InventionResponse | null;
    }>({
        status: 0,
        new: null,
    });
    const onSubmit = async () => {
        const resp = await axios.post<InventionResponse>('/api/inventions/create', {
            ...invention.current,
        });
        setResult({
            status: resp.status,
            new: { ...resp.data },
        });
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            {result.status === 201 && result.new && (
                <>
                    <span>The invention is created!</span>
                </>
            )}
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await onSubmit();
                }}
            >
                <Input type={'text'} onChange={(e) => (invention.current.name = e.currentTarget.value)} required={true} />
                <Button type={'submit'}>Add</Button>
            </form>
            {result.status === 201 && result.new && (
                <>
                    <a href={`/crud/inventions/${result.new.id}`}>Click here to watch it!</a>
                </>
            )}
        </AppHeaderLayout>
    );
}
