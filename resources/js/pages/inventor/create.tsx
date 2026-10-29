import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BreadcrumbItem, InventorRequest, InventorResponse, InventionMinimal } from '@/types';
import { useRef, useState } from 'react';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import InventionSelector from '@/components/invention/invention-selector';
import { router } from '@inertiajs/react';

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
    const inventorRef = useRef<InventorRequest>({
        name: '',
        bornat: 0,
        diedat: null,
        inventions: [],
    });
    const [inventions, setInventions] = useState<InventionMinimal[]>([]);
    const [result, setResult] = useState<{
        status: number;
        new: InventorResponse | null;
    }>({
        status: 0,
        new: null,
    });
    const onSubmit = async () => {
        const resp = await axios.post<InventorResponse>('/api/inventors', {
            ...inventorRef.current,
            inventions: inventions.map((i) => i.id),
        });
        setResult({
            status: resp.status,
            new: { ...resp.data },
        });
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            {result.status !== 201 && result.new && (
                <>
                    <span>The inventor is created!</span>
                </>
            )}
            <form
                onSubmit={async (e) => {
                    e.preventDefault();
                    await onSubmit();
                }}
            >
                <div>
                    <label>Name:</label> <br />
                    <Input type={'text'} onChange={(e) => (inventorRef.current.name = e.currentTarget.value)} required={true} />
                </div>
                <div>
                    <label>Born At:</label> <br />
                    <Input type={'number'} onChange={(e) => (inventorRef.current.bornat = Number(e.currentTarget.value))} required={true} />
                </div>
                <div>
                    <label>Died At:</label> <br />
                    <Input
                        type={'number'}
                        onChange={(e) => (inventorRef.current.diedat = isNaN(e.currentTarget.valueAsNumber) ? null : e.currentTarget.valueAsNumber)}
                        required={false}
                    />
                </div>
                <div>
                    <label className={'form-label'}>Inventions: </label> <br />
                    <InventionSelector value={inventions} onChange={setInventions} />
                </div>
                <Button type={'submit'}>Add</Button>
            </form>
            {result.status === 201 && result.new && (
                <>
                    <a href={`/crud/inventors/${result.new.id}`}>Click here to watch it!</a>
                </>
            )}
            <Button onClick={() => router.get('/crud/inventors')}>Back</Button>
        </AppHeaderLayout>
    );
}
