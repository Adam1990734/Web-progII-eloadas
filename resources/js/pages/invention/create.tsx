import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRef, useState } from 'react';
import axios from 'axios';
import { InventionRequest, InventionResponse } from '@/types/invention';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { BreadcrumbItem, ValidationError } from '@/types';
import { router } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const breadCrumbs: BreadcrumbItem[] = [
    {
        title: 'inventions',
        href: '/crud/inventions',
    },
    {
        title: 'create',
        href: '/crud/inventions/create',
    }
];

export default function InventionCreateView() {
    const [invention, setInvention] = useState<InventionRequest>({
        name: '',
    });
    const [result, setResult] = useState<{
        status: number,
        error: ValidationError | null,
        new: number | null,
    }>({
        status: 0,
        error: null,
        new: null,
    });
    const onSubmit = async () => {
        const resp = await axios.post<InventionResponse | ValidationError>('/api/inventions',
            {
                ...invention,
            },
            {
                validateStatus: (status) => status === 201 || status === 422,
            }
        );
        if (resp.status === 201 && "id" in resp.data) {
            setResult({
                status: resp.status,
                new: resp.data.id,
                error: null,
            });
            setInvention({
                name: '',
            });
        } else if (resp.status == 422 && 'errors' in resp.data)
            setResult({
                status: resp.status,
                error: resp.data,
                new: null,
            });
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            <div className="mx-auto mt-5 w-full max-w-2xl space-y-6">
                {result.status === 201 && result.new && (
                    <Card className="border-green-500/30 bg-green-500/5">
                        <CardContent className="flex items-center justify-between py-4">
                            <div>
                                <p className="font-medium text-green-600 dark:text-green-400">Invention created successfully.</p>

                                <p className="text-sm text-muted-foreground">The invention has been added to the database.</p>
                            </div>

                            <Button asChild>
                                <a href={`/crud/inventions/${result.new}`}>View invention</a>
                            </Button>
                        </CardContent>
                    </Card>
                )}
                <Card>
                    <CardHeader>
                        <CardTitle>Create invention</CardTitle>
                        <CardDescription>Add a new invention to the system.</CardDescription>
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
                                    placeholder="Name"
                                    required
                                    onChange={(e) =>
                                        setInvention({
                                            ...invention,
                                            name: e.currentTarget.value,
                                        })
                                    }
                                />
                            </div>

                            <div className="flex items-center justify-between border-t pt-4">
                                <Button type="button" variant="outline" onClick={() => router.get('/crud/inventions')}>
                                    Back
                                </Button>

                                <Button type="submit">Create invention</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppHeaderLayout>
    );
}
