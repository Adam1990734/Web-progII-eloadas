import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { BreadcrumbItem, InventorResponse } from '@/types';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

type Props = {
    id: number
}

export default function InventorDeleteView({ id }: Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'inventors',
            href: '/crud/inventors',
        },
        {
            title: 'delete',
            href: `/crud/inventors/delete/${id}`,
        },
    ];

    const [inventor, setInventor] = useState<InventorResponse | null>(null);
    useEffect(() => {
        axios.get<InventorResponse>(`/api/inventors/${id}`).then((resp) => {
            setInventor({
                ...resp.data,
            });
        });
    }, []);

    const [result, setResult] = useState<number>(0);
    const onSubmit = async () => {
        const resp = await axios.delete(`/api/inventors/${id}`);
        setResult(resp.status);
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            {result === 204 && (
                <>
                    <span>Successfully deletion!</span>
                </>
            )}
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await onSubmit();
                }}
            >
                <div>
                    <label>Name:</label> <br />
                    <Input type={'text'} defaultValue={inventor?.name ?? ''} required={true} disabled={true} />
                </div>
                <div>
                    <label>Born At:</label> <br />
                    <Input type={'number'} defaultValue={inventor?.bornat ?? ''} required={true} disabled={true} />
                </div>
                <div>
                    <label>Died At:</label> <br />
                    <Input type={'number'} defaultValue={inventor?.diedat ?? ''} required={true} disabled={true} />
                </div>
                <Button type={'submit'}>Delete</Button>
            </form>
        </AppHeaderLayout>
    );
}
