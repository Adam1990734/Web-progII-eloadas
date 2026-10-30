import { useEffect, useRef, useState } from 'react';
import { Message, MessageRequest, MessageResponse } from '@/types';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import axios from 'axios';

export default function MessageIndexView() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [page, setPage] = useState<number>(1);
    const lastPage = useRef<number>(0);
    useEffect(() => {
        axios.get(`/api/messages?page=${page}`)
            .then(data => data.data)
            .then((data) => {
                lastPage.current = data.last_page;
                setMessages(
                    data.data.map(
                        (obj: MessageResponse): Message => ({
                            ...obj,
                            type: 'Message',
                        }),
                    ),
                );
            });
    }, [page]);

    return (
        <AppHeaderLayout>
            <div className="mt-5">
                <Table headerLabels={['Name', 'Created At', 'Content']} objectToMap={messages} />
                <Pager currentPage={page} pageSetter={setPage} lastPage={lastPage.current} />
            </div>
        </AppHeaderLayout>
    );
}
