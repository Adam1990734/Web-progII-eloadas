import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { BreadcrumbItem, InventionRequest, InventionResponse } from '@/types';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { router } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

type Props = {
    id: number
}

export default function InventionDeleteView({ id }: Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'inventions',
            href: '/crud/inventions',
        },
        {
            title: 'delete',
            href: `/crud/inventions/delete/${id}`,
        },
    ];

    const [invention, setInvention] = useState<InventionRequest | null>(null);
    useEffect(() => {
        axios.get<InventionResponse>(`/api/inventions/${id}`).then((resp) => {
            setInvention({
                ...resp.data,
            });
        });
    }, []);

    const [result, setResult] = useState<number>(0);
    const onSubmit = async () => {
        const resp = await axios.delete(`/api/inventions/${id}`);
        setResult(resp.status);
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            <div className="mx-auto mt-5 w-full max-w-2xl space-y-6">
                {result === 204 && (
                    <Card className="border-green-500/30 bg-green-500/5">
                        <CardContent className="py-4">
                            <p className="font-medium text-green-600 dark:text-green-400">Invention deleted successfully.</p>
                        </CardContent>
                    </Card>
                )}

                <Card className="border-destructive/30">
                    <CardHeader>
                        <CardTitle className="text-destructive">Delete invention</CardTitle>
                        <CardDescription>This action cannot be undone. Please review the invention before continuing.</CardDescription>
                    </CardHeader>

                    <CardContent>
                        {!invention ? (
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
                                <div className="rounded-lg border p-4">
                                    <div className="text-sm text-muted-foreground">Invention name</div>

                                    <div className="mt-1 font-medium">{invention?.name ?? '-'}</div>
                                </div>

                                <div className="flex items-center justify-between border-t pt-4">
                                    <Button type="button" variant="outline" onClick={() => router.get('/crud/inventions')}>
                                        Back
                                    </Button>

                                    <Button type="submit" variant="destructive">
                                        Delete invention
                                    </Button>
                                </div>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </AppHeaderLayout>
    );
}
