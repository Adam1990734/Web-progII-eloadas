import { Button } from '@/components/ui/button';
import { Textarea } from '@headlessui/react';
import { useRef, useState } from 'react';
import axios from 'axios';
import { MessageRequest } from '@/types';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
export default function Create() {
    const contentRef = useRef<MessageRequest>({
        content: ""
    });
    const [result, setResult] = useState<{
        status: number;
    }>({
        status: 0
    });
    const onSubmit = async () => {
        const resp = await axios.post('/api/messages/create', {
            ...contentRef.current
        });
        setResult({
            status: resp.status
        });
    }
    return (
        <AppHeaderLayout>
            {result.status !== 0 && result.status === 201 && (
                <>
                    <span>The message is created!</span>
                </>
            )}
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await onSubmit();
                }}
            >
                <Textarea onChange={(e) => (contentRef.current.content = e.currentTarget.value)} required={true} placeholder={'Comment...'} />
                <br></br>
                <Button type={'submit'}>Send</Button>
            </form>
        </AppHeaderLayout>
    );
}
