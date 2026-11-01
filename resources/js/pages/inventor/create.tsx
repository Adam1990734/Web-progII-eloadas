import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BreadcrumbItem, InventorRequest, InventorResponse, InventionMinimal, ValidationError } from '@/types';
import { useRef, useState } from 'react';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import InventionSelector from '@/components/invention/invention-selector';
import { router } from '@inertiajs/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const breadCrumbs: BreadcrumbItem[] = [
    {
        title: 'inventors',
        href: '/crud/inventors',
    },
    {
        title: 'create',
        href: '/crud/inventors/create',
    },
];

export default function InventorCreateView() {
    const [inventor, setInventor] = useState<InventorRequest>({
        name: '',
        bornat: 0,
        diedat: null,
        inventions: [],
    });
    const [inventions, setInventions] = useState<InventionMinimal[]>([]);
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
        const resp = await axios.post<InventorResponse | ValidationError>('/api/inventors', {
            ...inventor,
            inventions: inventions.map((i) => i.id),
        }, { validateStatus: (status) => status === 201 || status === 422 });
        if (resp.status === 201 && 'id' in resp.data) {
            setResult({
                status: resp.status,
                new: resp.data.id,
                error: null,
            });
            setInventor({
                name: '',
                bornat: 0,
                diedat: null,
                inventions: [],
            });
        } else if (resp.status === 422 && 'errors' in resp.data)
            setResult({
                status: resp.status,
                error: resp.data,
                new: null,
            });
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            <div className="mx-auto mt-5 w-full max-w-3xl space-y-6">
                {result.status === 201 && result.new && (
                    <Card className="border-green-500/30 bg-green-500/5">
                        <CardContent className="flex items-center justify-between py-4">
                            <div>
                                <p className="font-medium text-green-700 dark:text-green-400">Inventor created successfully.</p>

                                <p className="text-sm text-muted-foreground">The inventor has been added to the database.</p>
                            </div>

                            <Button asChild>
                                <a href={`/crud/inventors/${result.new}`}>View inventor</a>
                            </Button>
                        </CardContent>
                    </Card>
                )}
                <Card>
                    <CardHeader>
                        <CardTitle>Create inventor</CardTitle>
                        <CardDescription>Add a new inventor and optionally connect inventions.</CardDescription>
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
                                    onChange={(e) =>
                                        setInventor({
                                            ...inventor,
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
                                        placeholder="1900"
                                        onChange={(e) =>
                                            setInventor({
                                                ...inventor,
                                                bornat: Number(e.currentTarget.value),
                                            })
                                        }
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="diedat">Died at</Label>

                                    <Input
                                        id="diedat"
                                        type="number"
                                        placeholder="2000"
                                        onChange={(e) =>
                                            setInventor({
                                                ...inventor,
                                                diedat: isNaN(e.currentTarget.valueAsNumber) ? null : e.currentTarget.valueAsNumber,
                                            })
                                        }
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Related inventions</Label>

                                <InventionSelector value={inventions} onChange={setInventions} />
                            </div>

                            <div className="flex items-center justify-between border-t pt-4">
                                <Button type="button" variant="outline" onClick={() => router.get('/crud/inventors')}>
                                    Back
                                </Button>
                                <Button type="submit">Create inventor</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppHeaderLayout>
    );
}
