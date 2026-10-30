import { Invention } from '@/types';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

type Props = {
    invention: Invention;
    isComplex: boolean;
    hasOperations?: boolean;
}

export default function InventionRow({ invention, isComplex, hasOperations = false } : Props) {
    return (
        <>
            {isComplex ? (
                <tr className={'border-t transition-colors hover:bg-muted/30'}>
                    <td className={'p-4'}>{invention.name}</td>
                    <td className={'p-4'}>
                        <ul>
                            {invention.inventors.map((inventor, id) => (
                                <li key={id}>{inventor.name}</li>
                            ))}
                        </ul>
                    </td>
                    {hasOperations && (
                        <td className={'p-4'}>
                            <div className={'flex justify-end gap-2'}>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventions/${invention.id}`)}
                                >
                                    Details
                                </Button>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventions/update/${invention.id}`)}
                                >
                                    Update
                                </Button>
                                <Button
                                    className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                    onClick={() => router.get(`/crud/inventions/delete/${invention.id}`)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </td>
                    )}
                </tr>
            ) : (
                <tr className={'border-t transition-colors hover:bg-muted/30'}>
                    <td className={'p-4'}>{invention.name}</td>
                    {hasOperations && (
                        <td className={'p-4'}>
                            <Button
                                className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                onClick={() => router.get(`/crud/inventions/${invention.id}`)}
                            >
                                Details
                            </Button>
                            <Button
                                className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                onClick={() => router.get(`/crud/inventions/update/${invention.id}`)}
                            >
                                Update
                            </Button>
                            <Button
                                className={'inline-flex items-center rounded-md border px-3 py-1.5 text-sm hover:bg-muted'}
                                onClick={() => router.get(`/crud/inventions/delete/${invention.id}`)}
                            >
                                Delete
                            </Button>
                        </td>
                    )}
                </tr>
            )}
        </>
    );
}
