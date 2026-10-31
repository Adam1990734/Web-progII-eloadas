import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';
import { BreadcrumbItem, InventorResponse } from '@/types';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { router } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

type Props = {
    id: number
}

export default function InventorDeleteView({ id }: Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'inventors',
            href: '/crud/inventors',
        },
        {
            title: 'delete',
            href: `/crud/inventors/delete/${id}`,
        },
    ];

    const [inventor, setInventor] = useState<InventorResponse | null>(null);
    useEffect(() => {
        axios.get<InventorResponse>(`/api/inventors/${id}`).then((resp) => {
            setInventor({
                ...resp.data,
            });
        });
    }, []);

    const [result, setResult] = useState<number>(0);
    const onSubmit = async () => {
        const resp = await axios.delete(`/api/inventors/${id}`);
        setResult(resp.status);
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            <div className="mx-auto mt-5 w-full max-w-2xl space-y-6">
                <Card className="border-destructive/30">
                    <CardHeader>
                        <CardTitle className="text-destructive">Delete inventor</CardTitle>
                        <CardDescription>This action cannot be undone. Please review the inventor information before continuing.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {!inventor ? (
                            <div className="flex h-80 items-center justify-center">
                                <div className="flex flex-col items-center gap-3">
                                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />

                                    <span className="text-sm text-muted-foreground">Loading timeline...</span>
                                </div>
                            </div>
                        ) : (
                            <form
                                className="space-y-6"
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    await onSubmit();
                                }}
                            >
                                <div className="grid gap-4">
                                    <div className="rounded-lg border p-4">
                                        <div className="text-sm text-muted-foreground">Name</div>

                                        <div className="mt-1 font-medium">{inventor?.name ?? '-'}</div>
                                    </div>

                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="rounded-lg border p-4">
                                            <div className="text-sm text-muted-foreground">Born at</div>

                                            <div className="mt-1 font-medium">{inventor?.bornat ?? '-'}</div>
                                        </div>

                                        <div className="rounded-lg border p-4">
                                            <div className="text-sm text-muted-foreground">Died at</div>

                                            <div className="mt-1 font-medium">{inventor?.diedat ?? 'Still alive'}</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t pt-4">
                                    <Button type="button" variant="outline" onClick={() => router.get('/crud/inventors')}>
                                        Back
                                    </Button>

                                    <Button type="submit" variant="destructive">
                                        Delete inventor
                                    </Button>
                                </div>
                            </form>
                        )}
                    </CardContent>
                </Card>
                {result === 204 && (
                    <Card className="border-green-500/30 bg-green-500/5">
                        <CardContent className="py-4">
                            <p className="font-medium text-green-600 dark:text-green-400">Inventor deleted successfully.</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppHeaderLayout>
    );
}
