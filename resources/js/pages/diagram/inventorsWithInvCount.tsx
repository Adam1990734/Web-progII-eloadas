import InventorsWithInventionsCount from '@/components/diagram/inventorsAndInventionsDiagram';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { InventorAndInventionCount } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import WhileLoading from '@/components/shared/loadingUntilNull';

type ResponseType = {
    status: number;
    data: InventorAndInventionCount[];
};

export default function DiagramTimelineView() {
    const [data, setData] = useState<ResponseType | null>(null);
    useEffect(() => {
        axios.get<InventorAndInventionCount[]>('/api/diagram/withcount').then((resp) => {
            console.log(resp);
            setData({
                status: resp.status,
                data: resp.data,
            });
        });
    }, []);

    return (
        <AppHeaderLayout>
            <WhileLoading toWait={data}>
                <Card className="mt-5 w-full">
                    <CardHeader>
                        <CardTitle>Inventions per inventor</CardTitle>
                        <CardDescription>Distribution of inventions among inventors.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="rounded-xl border bg-background p-4">
                            <InventorsWithInventionsCount inventorAndCounts={data?.data ?? []} />
                        </div>
                    </CardContent>
                </Card>
            </WhileLoading>
        </AppHeaderLayout>
    );
}
