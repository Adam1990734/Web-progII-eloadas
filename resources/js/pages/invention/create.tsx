import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import axios from 'axios';
import { InventionRequest, InventionResponse, Invention } from '@/types/invention';

export default function Create() {
    const invention = useRef<InventionRequest>({
        name: '',
    });
    const [result, setResult] = useState<{
        status: number,
        new: InventionResponse | null
    }>({
        status: 0,
        new: null
    });
    const onSubmit = async () => {
        const resp = await axios.post<InventionResponse>('/api/inventions/create', {
            name: invention.current.name,
        });
        setResult({
            status: resp.status,
            new: { ...resp.data }
        });
    }

    return (
        <>
            {result.status !== 0 && result.new && (
                <>
                    <span>The inventions is created!</span>
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
            {result.status !== 0 && result.new && (
                <>
                    <a href={`/crud/inventions/${result.new.id}`}>Click here to watch it!</a>
                </>
            )}
        </>
    );
}
