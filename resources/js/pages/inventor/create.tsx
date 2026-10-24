import { Form } from '@inertiajs/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Create() {
    return <>
        <Form action={"/api/inventors/create"} method={"POST"}>
            <Input type={"text"} name={"name"} required={true}/>
            <Input type={"number"} step={1} name={"bornat"} required={true}/>
            <Input type={"text"} name={"diadat"}/>
            <Button type={"submit"}>Add</Button>
        </Form>
    </>
}
