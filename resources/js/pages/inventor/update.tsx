import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Inventor } from '@/types';
import { Form } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { InventorWithoutType } from '@/types/inventor';

type Props = {
    id: number;
};

export default function Update({ id }: Props) {
    const [inventor, setInventor] = useState<Inventor>();

    useEffect(() => {
        fetch(`/api/inventors/${id}`)
            .then((resp) => resp.json())
            .then((data: InventorWithoutType) => {
                setInventor({
                    ...data,
                    type: 'Inventor',
                });
            });
    }, []);

    return (
        <>
            <Form action={`/api/inventors/update/${id}`} method={'PUT'}>
                <Input type={'text'} name={'name'} defaultValue={inventor?.name ?? ''} required={true} />
                <Input type={'text'} name={'bornat'} defaultValue={inventor?.bornat ?? ''} required={true} />
                <Input type={'text'} name={'diedat'} defaultValue={inventor?.diedat ?? ''} required={true} />
                <Button type={""}>Save</Button>
            </Form>
        </>
    );
}
