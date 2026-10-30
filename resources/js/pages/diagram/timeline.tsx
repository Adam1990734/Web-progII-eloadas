import AppHeaderLayout from '@/layouts/app/app-header-layout';
import InventorsTimeLine from '@/components/diagram/inventorsTimelineDiagram';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { InventorTimeLine } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

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
            <Card className="mt-5 w-full">
                <CardHeader>
                    <CardTitle>Inventors Timeline</CardTitle>
                    <CardDescription>Timeline view of inventors and their lifespan.</CardDescription>
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
                            <InventorsTimeLine timeline={data.data} />
                        </div>
                    )}
                </CardContent>
            </Card>
        </AppHeaderLayout>
    );
}
