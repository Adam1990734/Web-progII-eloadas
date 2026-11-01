import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { BreadcrumbItem, InventionRequest, InventionResponse, ValidationError } from '@/types';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { router } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import WhileLoading from '@/components/shared/loadingUntilNull';

type Props = {
    id: number;
};

export default function InventionUpdateView({ id }: Props) {
    const breadCrumbs: BreadcrumbItem[] = [
        {
            title: 'inventions',
            href: '/crud/inventions',
        },
        {
            title: 'update',
            href: `/crud/inventions/delete${id}`,
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

    const [result, setResult] = useState<{
        status: number,
        error: ValidationError | null,
    }>({
        status: 0,
        error: null,
    });
    const onSubmit = async () => {
        const resp = await axios.put<ValidationError>(
            `/api/inventions/${id}`,
            {
                ...invention,
            },
            {
                validateStatus: (status) => status === 204 || status === 422,
            },
        );
        if (resp.status === 204) {
            setResult({
                status: resp.status,
                error: null,
            });
        } else if (resp.status == 422)
            setResult({
                status: resp.status,
                error: resp.data,
            });
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            <WhileLoading toWait={invention}>
                <div className="mx-auto mt-5 w-full max-w-2xl space-y-6">
                    {result.status === 204 && (
                        <Card className="border-green-500/30 bg-green-500/5">
                            <CardContent className="py-4">
                                <p className="font-medium text-green-600 dark:text-green-400">Invention updated successfully.</p>
                            </CardContent>
                        </Card>
                    )}
                    <Card>
                        <CardHeader>
                            <CardTitle>Edit invention</CardTitle>
                            <CardDescription>Update the invention details.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form
                                className="space-y-6"
                                onSubmit={async (e) => {
                                    e.preventDefault();
                                    await onSubmit();
                                }}
                            >
                                {result.error && (
                                    <Card className="border-red-500/30 bg-red-500/5">
                                        <CardContent className="flex items-center justify-between py-4">
                                            <div>
                                                {Object.entries(result.error.errors).map(([key, value]) => (
                                                    <p className="font-medium text-red-700 dark:text-red-400">{value}</p>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )}
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>

                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder={invention?.name ?? ''}
                                        defaultValue={invention?.name ?? ''}
                                        onChange={(e) =>
                                            setInvention({
                                                name: e.currentTarget.value,
                                            })
                                        }
                                    />
                                </div>

                                <div className="flex items-center justify-between border-t pt-4">
                                    <Button type="button" variant="outline" onClick={() => router.get('/crud/inventions')}>
                                        Back
                                    </Button>
                                    <Button type="submit">Save changes</Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </WhileLoading>
        </AppHeaderLayout>
    );
}
