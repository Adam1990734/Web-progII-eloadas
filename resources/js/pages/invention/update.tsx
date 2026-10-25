import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BreadcrumbItem, InventionRequest, InventionResponse } from '@/types';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

type Props = {
    id: number;
};

export default function InventionUpdateView({ id }: Props) {
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
            title: 'update',
            href: `/crud/inventions/delete${id}`,
        },
    ];

    const inventionRef = useRef<InventionRequest>({
        name: '',
    });
    const [invention, setInvention] = useState<InventionRequest | null>(null);
    useEffect(() => {
        axios.get<InventionResponse>(`/api/inventions/${id}`).then((resp) => {
            inventionRef.current.name = resp.data.name;
            setInvention({
                ...resp.data,
            });
        });
    }, []);

    const [result, setResult] = useState<number>(0);
    const onSubmit = async () => {
        const resp = await axios.put<InventionResponse>(`/api/inventions/update/${id}`, {
            ...inventionRef.current,
        });
        setResult(resp.status);
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            {result === 204 && (
                <>
                    <span>Successfully update!</span>
                </>
            )}
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await onSubmit();
                }}
            >
                <Input
                    type={'text'}
                    defaultValue={inventionRef.current.name ?? ''}
                    onChange={(e) => (inventionRef.current.name = e.currentTarget.value)}
                    required={true}
                />
                <Button type={'submit'}>Save</Button>
            </form>
        </AppHeaderLayout>
    );
}
