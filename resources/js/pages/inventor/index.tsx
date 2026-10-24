import { useEffect, useRef, useState } from 'react';
import { Inventor } from '@/types';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';
import axios from 'axios';

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inventors, setInventors] = useState<Inventor[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState<number>(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const lastpage = useRef<number>(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`/api/inventors?page=${page}`)
            .then((data) => data.data)
            .then((data) => {
                lastpage.current = data.last_page;
                setInventors(
                    data.data.map(
                        (obj: Inventor): Inventor => ({
                            ...obj,
                            type: 'Inventor',
                        }),
                    ),
                );
            });
    }, [page]);

    return (
        <>
            <Table headerLabels={[
                'name', 'born in', 'died in'
            ]} objectToMap={inventors} />
            <Pager currentPage={page} pageSetter={setPage} lastPage={lastpage.current} />
        </>
    );
}
