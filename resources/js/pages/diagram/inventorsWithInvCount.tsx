import InventorsWithInventionsCount from '@/components/diagram/inventorsAndInventionsDiagram';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { InventorAndInventionCount } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';

type ResponseType = {
    status: number;
    data: InventorAndInventionCount[];
};

export default function DiagramTimelineView() {
    const [data, setData] = useState<ResponseType | null>(null);
    useEffect(() => {
        axios.get<InventorAndInventionCount[]>('/api/diagram/withcount').then((resp) => {
            setData({
                status: resp.status,
                data: resp.data,
            });
        });
    }, []);

    return (
        <AppHeaderLayout>
            {!data && <span>Loading...</span>}
            {data && <InventorsWithInventionsCount inventorAndCounts={data.data} />}
        </AppHeaderLayout>
    );
}
