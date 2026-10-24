import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { InventorRequest, InventorResponse } from '@/types';
import { useRef, useState } from 'react';
import axios from 'axios';

export default function Create() {
    const inventorRef = useRef<InventorRequest>({
        name: '',
        bornat: 0,
        diedat: null,
        inventions: []
    });
    const [result, setResult] = useState<{
        status: number;
        new: InventorResponse | null;
    }>({
        status: 0,
        new: null,
    });
    const onSubmit = async () => {
        const resp = await axios.post<InventorResponse>('/api/inventors/create', {
            ...inventorRef.current
        });
        setResult({
            status: resp.status,
            new: { ...resp.data },
        });
    };

    return (
        <>
            {result.status !== 0 && result.new && (
                <>
                    <span>The inventor is created!</span>
                </>
            )}
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await onSubmit();
                }}
            >
                <Input type={'text'} onChange={(e) => (inventorRef.current.name = e.currentTarget.value)} required={true} />
                <Input type={'number'} onChange={(e) => (inventorRef.current.bornat = Number(e.currentTarget.value))} required={true} />
                <Input
                    type={'number'}
                    onChange={(e) => (inventorRef.current.diedat = isNaN(e.currentTarget.valueAsNumber)
                        ? null
                        : e.currentTarget.valueAsNumber
                    )}
                    required={false}
                />
                <Button type={'submit'}>Add</Button>
            </form>
            {result.status !== 0 && result.new && (
                <>
                    <a href={`/crud/inventors/${result.new.id}`}>Click here to watch it!</a>
                </>
            )}
        </>
    );
}
