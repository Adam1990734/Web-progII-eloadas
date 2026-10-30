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
                <tr className="border-t transition-colors hover:bg-muted/30">
                    <td className="p-4 font-medium">{invention.name}</td>
                    <td className="p-4 font-medium">
                        <ul>
                            {invention.inventors.map((inventor, id) => (
                                <li key={id}>{inventor.name}</li>
                            ))}
                        </ul>
                    </td>
                    {hasOperations && (
                        <td className="p-4 font-medium">
                            <div className="flex justify-end gap-2">
                                <Button
                                    variant="outline"
                                    className="border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-900 dark:text-blue-400"
                                    onClick={() => router.get(`/crud/inventions/${invention.id}`)}
                                >
                                    Details
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-amber-200 text-amber-700 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 dark:border-amber-900 dark:text-amber-400"
                                    onClick={() => router.get(`/crud/inventions/update/${invention.id}`)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-red-200 text-red-700 hover:border-red-300 hover:bg-red-50 hover:text-red-800 dark:border-red-900 dark:text-red-400"
                                    onClick={() => router.get(`/crud/inventions/delete/${invention.id}`)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </td>
                    )}
                </tr>
            ) : (
                <tr className="border-t transition-colors hover:bg-muted/30">
                    <td className="p-4 font-medium">{invention.name}</td>
                    {hasOperations && (
                        <td className="p-4 font-medium">
                            <div className="flex justify-end gap-2">
                                <Button
                                    variant="outline"
                                    className="border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-900 dark:text-blue-400"
                                    onClick={() => router.get(`/crud/inventions/${invention.id}`)}
                                >
                                    Details
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-amber-200 text-amber-700 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 dark:border-amber-900 dark:text-amber-400"
                                    onClick={() => router.get(`/crud/inventions/update/${invention.id}`)}
                                >
                                    Update
                                </Button>
                                <Button
                                    variant="outline"
                                    className="border-red-200 text-red-700 hover:border-red-300 hover:bg-red-50 hover:text-red-800 dark:border-red-900 dark:text-red-400"
                                    onClick={() => router.get(`/crud/inventions/delete/${invention.id}`)}
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
