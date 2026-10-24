import { useEffect, useRef, useState } from 'react';
import { Invention } from '@/types';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';
import axios from 'axios';

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inventions, setInventions] = useState<Invention[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState<number>(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const lastpage = useRef<number>(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`/api/inventions?page=${page}`)
            .then(data => data.data)
            .then(data => {
                lastpage.current = data.last_page;
                setInventions(
                    data.data.map(
                        (obj: Invention): Invention => ({
                            ...obj,
                            type: 'Invention',
                        }),
                    )
                );
            });
    }, [page]);

    return (
        <>
            <Table headerLabels={['name']} objectToMap={inventions} />
            <Pager currentPage={page} pageSetter={setPage} lastPage={lastpage.current}/>
        </>
    );
}
