import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Create() {
    return (
        <>
            <Form action={'/api/inventions/create'} method={'POST'}>
                <Input type={'text'} name={'name'} required={true} />
                <Button type={'submit'}>Add</Button>
            </Form>
        </>
    );
}
