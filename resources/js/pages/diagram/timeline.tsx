import AppHeaderLayout from '@/layouts/app/app-header-layout';
import InventorsTimeLine from '@/components/diagram/inventorsTimelineDiagram';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { InventorTimeLine } from '@/types';

type ResponseType = {
    status: number,
    data: InventorTimeLine[]
}

export default function DiagramTimelineView() {
    const [data, setData] = useState<ResponseType | null>(null);
    useEffect(() => {
        axios.get<InventorTimeLine[]>('/api/diagram/timeline')
            .then(resp => {
                setData({
                    status: resp.status,
                    data: resp.data,
                });
            });
    }, []);

    return (
        <AppHeaderLayout>
            {!data && <span>Loading...</span> }
            {data && <InventorsTimeLine timeline={data.data} />}
        </AppHeaderLayout>
    );
}
