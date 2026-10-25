import { useEffect, useRef, useState } from 'react';
import { Invention } from '@/types';
import Table from '@/components/shared/table';
import Pager from '@/components/shared/pager';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

export default function index() {
    const [inventions, setInventions] = useState<Invention[]>([]);
    const [page, setPage] = useState<number>(1);
    const lastpage = useRef<number>(0);
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
        <AppHeaderLayout>
            <Table headerLabels={['name']} objectToMap={inventions} hasOpertions={true} />
            <Pager currentPage={page} pageSetter={setPage} lastPage={lastpage.current}/>
        </AppHeaderLayout>
    );
}
