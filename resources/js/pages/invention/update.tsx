import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Invention } from '@/types';
import { InventionWithoutType } from '@/types/invention';
import { Form } from '@inertiajs/react';
import { useEffect, useState } from 'react';

type Props = {
    id: number;
};

export default function Update({ id }: Props) {
    const [invention, setInvention] = useState<Invention>();

    useEffect(() => {
        fetch(`/api/inventions/${id}`)
            .then((resp) => resp.json())
            .then((data: InventionWithoutType) => {
                setInvention({
                    ...data,
                    type: 'Invention',
                });
            });
    }, []);

    return (
        <>
            <Form action={`/api/inventions/update/${id}`} method={'PUT'}>
                <Input type={'text'} name={'name'} defaultValue={invention?.name ?? ''} required={true} />
                <Button type={'submit'}>Save</Button>
            </Form>
        </>
    );
}
