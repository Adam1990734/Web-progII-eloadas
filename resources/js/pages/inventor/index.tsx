import { useEffect, useRef, useState } from 'react';
import { Inventor } from '@/types';
import { InventorWithoutType } from '@/types/inventor';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';

export default function index() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inventors, setInventors] = useState<Inventor[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState<number>(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const lastpage = useRef<number>(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`/api/inventors?page=${page}`)
            .then((resp) => resp.json())
            .then((data) => {
                lastpage.current = data.last_page;
                setInventors(
                    data.data.map(
                        (obj: InventorWithoutType): Inventor => ({
                            ...obj,
                            type: 'Inventor',
                        }),
                    ),
                );
            });
    }, [page]);

    return (
        <>
            <Table headerLabels={['name']} objectToMap={inventors} />
            <Pager currentPage={page} pageSetter={setPage} lastPage={lastpage.current} />
        </>
    );
}
