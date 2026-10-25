import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { InventorResponse } from '@/types';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

type Props = {
    id: number
}

export default function Delete({ id } : Props) {
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
        const resp = await axios.delete(`/api/inventors/delete/${id}`);
        setResult(resp.status);
    };

    return (
        <AppHeaderLayout>
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
                <Input type={'text'} defaultValue={inventor?.name ?? ''} required={true} disabled={true} />
                <Input type={'number'} defaultValue={inventor?.bornat ?? ''} required={true} disabled={true} />
                <Input type={'number'} defaultValue={inventor?.diedat ?? ''} required={true} disabled={true} />
                <Button type={'submit'}>Delete</Button>
            </form>
        </AppHeaderLayout>
    );
}
