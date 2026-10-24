import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Inventor } from '@/types';
import { InventorWithoutType } from '@/types/inventor';

type Props = {
    id: number
}

export default function Delete({ id } : Props) {
    const [inventor, setInventor] = useState<Inventor>();

    useEffect(() => {
        fetch(`/api/inventors/${id}`)
            .then(resp => resp.json())
            .then((data: InventorWithoutType) => {
               setInventor({
                   ...data,
                   type: "Inventor"
               })
            });
    }, []);

    return (
        <>
            <Form action={`/api/inventors/delete/${id}`} method={'DELETE'}>
                <Input type={'text'} name={'name'} defaultValue={inventor?.name ?? ''} required={true} disabled={true} />
                <Input type={'text'} name={'bornat'} defaultValue={inventor?.bornat ?? ''} required={true} disabled={true} />
                <Input type={'text'} name={'diedat'} defaultValue={inventor?.diedat ?? ''} required={true} disabled={true} />
                <Button type={"submit"}>Delete</Button>
            </Form>
        </>
    );
}
