import InventorsWithInventionsCount from '@/components/diagram/inventorsAndInventionsDiagram';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { InventorAndInventionCount } from '@/types';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

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
            <Card className="mt-5 w-full">
                <CardHeader>
                    <CardTitle>Inventions per inventor</CardTitle>
                    <CardDescription>Distribution of inventions among inventors.</CardDescription>
                </CardHeader>
                <CardContent>
                    {!data ? (
                        <div className="flex h-80 items-center justify-center">
                            <div className="flex flex-col items-center gap-3">
                                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />

                                <span className="text-sm text-muted-foreground">Loading timeline...</span>
                            </div>
                        </div>
                    ) : (
                        <div className="rounded-xl border bg-background p-4">
                            <InventorsWithInventionsCount inventorAndCounts={data.data} />
                        </div>
                    )}
                </CardContent>
            </Card>
        </AppHeaderLayout>
    );
}
