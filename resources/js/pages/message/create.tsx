import { Form } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@headlessui/react';
export default function Create() {
    return <>
        <div>
            <Form action={"/api/messages/create"} method={"POST"}>
                <Textarea name={"content"} required={true} placeholder={"Comment..."}/>
                <Button type={"submit"}>Send</Button>
            </Form>
        </div>
    </>;
}
