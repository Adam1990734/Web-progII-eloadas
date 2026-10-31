import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InventorResponse, InventorRequest, InventionMinimal, BreadcrumbItem } from '@/types';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import InventionSelector from '@/components/invention/invention-selector';
import { router } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

type Props = {
    id: number;
};

export default function InventorUpdateView({ id }: Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'inventors',
            href: '/crud/inventors',
        },
        {
            title: 'update',
            href: `/crud/inventors/update/${id}`,
        },
    ];

    const [inventions, setInventions] = useState<InventionMinimal[]>([]);
    const [inventor, setInventor] = useState<InventorRequest | null>(null);
    useEffect(() => {
        axios.get<InventorResponse>(`/api/inventors/${id}`).then((resp) => {
            const { inventions, ...other } = resp.data;
            setInventions(inventions);
            setInventor({
                ...resp.data,
                inventions: inventions.map((invention: InventionMinimal): number => invention.id),
            });
        });
    }, []);

    const [result, setResult] = useState<number>(0);
    const onSubmit = async () => {
        const resp = await axios.put<InventorResponse>(`/api/inventors/${id}`, {
            ...inventor
        });
        setResult(resp.status);
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            <div className="mx-auto mt-5 w-full max-w-3xl space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Edit inventor</CardTitle>
                        <CardDescription>Update inventor details and manage related inventions.</CardDescription>
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
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>

                                    <Input
                                        id="name"
                                        type="text"
                                        defaultValue={inventor?.name ?? ''}
                                        required
                                        onChange={(e) =>
                                            setInventor({
                                                ...inventor!,
                                                name: e.currentTarget.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="bornat">Born at</Label>

                                        <Input
                                            id="bornat"
                                            type="number"
                                            defaultValue={inventor?.bornat ?? ''}
                                            required
                                            onChange={(e) =>
                                                setInventor({
                                                    ...inventor!,
                                                    bornat: e.currentTarget.valueAsNumber,
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="diedat">Died at</Label>

                                        <Input
                                            id="diedat"
                                            type="number"
                                            defaultValue={inventor?.diedat ?? ''}
                                            onChange={(e) =>
                                                setInventor({
                                                    ...inventor!,
                                                    diedat: isNaN(e.currentTarget.valueAsNumber) ? null : e.currentTarget.valueAsNumber,
                                                })
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Related inventions</Label>

                                    <div className="rounded-lg border p-4">
                                        <InventionSelector
                                            value={inventions}
                                            onChange={(items) => {
                                                setInventions(items);

                                                setInventor({
                                                    ...inventor!,
                                                    inventions: items.map((item) => item.id),
                                                });
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t pt-4">
                                    <Button type="button" variant="outline" onClick={() => router.get('/crud/inventors')}>
                                        Back
                                    </Button>

                                    <Button type="submit">Save changes</Button>
                                </div>
                            </form>
                        )}
                    </CardContent>
                </Card>
                {result === 204 && (
                    <Card className="border-green-500/30 bg-green-500/5">
                        <CardContent className="py-4">
                            <p className="font-medium text-green-600 dark:text-green-400">Inventor updated successfully.</p>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AppHeaderLayout>
    );
}
