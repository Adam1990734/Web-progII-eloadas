import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InventorResponse, InventorRequest, InventionMinimal, BreadcrumbItem } from '@/types';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import InventionSelector from '@/components/invention/invention-selector';
import { router } from '@inertiajs/react';

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

    const inventorRef = useRef<InventorRequest>({
        name: '',
        bornat: 0,
        diedat: null,
        inventions: []
    });
    const [inventions, setInventions] = useState<InventionMinimal[]>([]);
    const [inventor, setInventor] = useState<InventorResponse | null>(null);
    useEffect(() => {
        axios.get<InventorResponse>(`/api/inventors/${id}`).then((resp) => {
            const { inventions, ...other } = resp.data;
            inventorRef.current = {
                ...other,
                inventions: inventions.map((invention: InventionMinimal) : number => invention.id)
            };
            setInventions(inventions);
            setInventor({
                ...resp.data
            });
        });
    }, []);

    const [result, setResult] = useState<number>(0);
    const onSubmit = async () => {
        const resp = await axios.put<InventorResponse>(`/api/inventors/${id}`, {
            ...inventorRef.current
        });
        setResult(resp.status);
    };

    return (
        <AppHeaderLayout breadcrumbs={breadCrumbs}>
            {result === 204 && (
                <>
                    <span>Successfully update!</span>
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
                    <Input
                        type={'text'}
                        defaultValue={inventor?.name ?? ''}
                        onChange={(e) => (inventorRef.current.name = e.currentTarget.value)}
                        required={true}
                    />
                </div>
                <div>
                    <label>Born At:</label> <br />
                    <Input
                        type={'number'}
                        defaultValue={inventor?.bornat ?? ''}
                        onChange={(e) => (inventorRef.current.bornat = Number(e.currentTarget.value))}
                        required={true}
                    />
                </div>
                <div>
                    <label>Died At:</label> <br />
                    <Input
                        type={'number'}
                        defaultValue={inventor?.diedat ?? ''}
                        onChange={(e) => (inventorRef.current.diedat = isNaN(e.currentTarget.valueAsNumber) ? null : e.currentTarget.valueAsNumber)}
                        required={false}
                    />
                </div>
                <div>
                    <label className={'form-label'}>Inventions: </label> <br />
                    <InventionSelector
                        value={inventions}
                        onChange={(items) => {
                            setInventions(items);

                            inventorRef.current.inventions = items.map((item) => item.id);
                        }}
                    />
                </div>
                <Button type={'submit'}>Save</Button>
            </form>
            <Button onClick={() => router.get('/crud/inventors')}>Back</Button>
        </AppHeaderLayout>
    );
}
