import { useEffect, useMemo, useRef, useState } from 'react';
import { Invention } from '@/types';
import Table from '@/components/shared/table';
import { InventionWithoutType } from '@/types/invention';
import Pager from '@/components/shared/pager';

export default function invention() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inventions, setInventions] = useState<Invention[]>([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState<number>(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const lastpage = useRef<number>(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        fetch(`/api/inventions?page=${page}`)
            .then((resp) => resp.json())
            .then(data => {
                lastpage.current = data.last_page;
                setInventions(
                    data.data.map((obj : InventionWithoutType): Invention => ({
                        ...obj,
                        type: "Invention"
                    }))
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
