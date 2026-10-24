import { useEffect, useRef, useState } from 'react';
import { Message } from '@/types';
import { MessageWithoutType } from '@/types/message';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [messages, setMessages] = useState<Message[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState<number>(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const lastpage = useRef<number>(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`/api/messages?page=${page}`)
            .then((resp) => resp.json())
            .then((data) => {
                lastpage.current = data.last_page;
                setMessages(
                    data.data.map(
                        (obj: MessageWithoutType): Message => ({
                            ...obj,
                            type: 'Message',
                        }),
                    ),
                );
            });
    }, [page]);

    return (
        <>
            <Table headerLabels={[
                'Name', 'Created At', 'Content'
            ]} objectToMap={messages} />
            <Pager currentPage={page} pageSetter={setPage} lastPage={lastpage.current} />
        </>
    );
}
