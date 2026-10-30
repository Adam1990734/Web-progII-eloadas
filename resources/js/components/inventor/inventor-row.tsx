import { Inventor } from '@/types';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';

type Props = {
    inventor: Inventor;
    isComplex: boolean;
    hasOperations?: boolean;
};

export default function InventorRow({ inventor, isComplex, hasOperations = false }: Props) {
    return (
        <>
            {isComplex ? (
                <tr className={'border-t transition-colors hover:bg-muted/30'}>
                    <td className={'p-4'}>{inventor.name}</td>
                    <td className={'p-4'}>{inventor.bornat}</td>
                    <td className={'p-4'}>{inventor.diedat ? inventor.diedat : '-'}</td>
                    <td className={'p-4'}>
                        <ul>
                            {inventor.inventions.map((invention, id) => (
                                <li key={id}>{invention.name}</li>
                            ))}
                        </ul>
                    </td>
                    {hasOperations && (
                        <td className={'p-4 text-right'}>
                            <div className={'flex justify-end gap-2'}>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventors/${inventor.id}`)}
                                >
                                    Details
                                </Button>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventors/update/${inventor.id}`)}
                                >
                                    Update
                                </Button>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventors/delete/${inventor.id}`)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </td>
                    )}
                </tr>
            ) : (
                <tr className={'border-t transition-colors hover:bg-muted/30'}>
                    <td className={'p-4'}>{inventor.name}</td>
                    <td className={'p-4'}>{inventor.bornat}</td>
                    <td className={'p-4'}>{inventor.diedat ? inventor.diedat : '-'}</td>
                    {hasOperations && (
                        <td className={'p-4 text-right'}>
                            <div className={'flex justify-end gap-2'}>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventors/${inventor.id}`)}
                                >
                                    Details
                                </Button>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventors/update/${inventor.id}`)}
                                >
                                    Update
                                </Button>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventors/delete/${inventor.id}`)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </td>
                    )}
                </tr>
            )}
        </>
    );
}
