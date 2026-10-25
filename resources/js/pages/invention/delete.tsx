import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { InventionRequest, InventionResponse } from '@/types';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

type Props = {
    id: number
}

export default function Delete({ id } : Props) {
    const [invention, setInvention] = useState<InventionRequest | null>(null);
    useEffect(() => {
        axios.get<InventionResponse>(`/api/inventions/${id}`)
            .then(resp => {
                setInvention({
                    ...resp.data
                })
            });
    }, []);


    const [result, setResult] = useState<number>(0);
    const onSubmit = async () => {
        const resp = await axios.delete(`/api/inventions/delete/${id}`);
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
                <Input
                    type={'text'}
                    defaultValue={invention?.name ?? ''}
                    required={true}
                    disabled={true}
                />
                <Button type={'submit'}>Delete</Button>
            </form>
        </AppHeaderLayout>
    );
}
