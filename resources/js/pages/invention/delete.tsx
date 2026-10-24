import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Invention } from '@/types';
import { InventionWithoutType } from '@/types/invention';

type Props = {
    id: number
}

export default function Delete({ id } : Props) {
    const [invention, setInvention] = useState<Invention>();

    useEffect(() => {
        fetch(`/api/inventions/${id}`)
            .then(resp => resp.json())
            .then((data :InventionWithoutType) => {
               setInvention({
                   ...data,
                   type: "Invention"
               })
            });
    }, []);

    return (
        <>
            <Form action={`/api/inventions/delete/${id}`} method={'DELETE'}>
                <Input type={'text'} name={'name'} defaultValue={invention?.name ?? ''} required={true} disabled={true} />
                <Button type={'submit'}>Delete</Button>
            </Form>
        </>
    );
}
