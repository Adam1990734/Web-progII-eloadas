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
                <tr className="border-t transition-colors hover:bg-muted/30">
                    <td className="p-4 font-medium">{inventor.name}</td>
                    <td className="p-4 font-medium">{inventor.bornat}</td>
                    <td className="p-4 font-medium">{inventor.diedat ? inventor.diedat : '-'}</td>
                    <td className="p-4 font-medium">
                        <ul>
                            {inventor.inventions.map((invention, id) => (
                                <li key={id}>{invention.name}</li>
                            ))}
                        </ul>
                    </td>
                    {hasOperations && (
                        <td className="p-4 font-medium">
                            <div className="flex justify-end gap-2">
                                <Button
                                    variant="outline"
                                    className="border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-900 dark:text-blue-400"
                                    onClick={() => router.get(`/crud/inventors/${inventor.id}`)}
                                >
                                    Details
                                </Button>

                                <Button
                                    variant="outline"
                                    className="border-amber-200 text-amber-700 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 dark:border-amber-900 dark:text-amber-400"
                                    onClick={() => router.get(`/crud/inventors/update/${inventor.id}`)}
                                >
                                    Update
                                </Button>

                                <Button
                                    variant="outline"
                                    className="border-red-200 text-red-700 hover:border-red-300 hover:bg-red-50 hover:text-red-800 dark:border-red-900 dark:text-red-400"
                                    onClick={() => router.get(`/crud/inventors/delete/${inventor.id}`)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </td>
                    )}
                </tr>
            ) : (
                <tr className="border-t transition-colors hover:bg-muted/30">
                    <td className="p-4 font-medium">{inventor.name}</td>
                    <td className="p-4 font-medium">{inventor.bornat}</td>
                    <td className="p-4 font-medium">{inventor.diedat ? inventor.diedat : '-'}</td>
                    {hasOperations && (
                        <td className="p-4 font-medium">
                            <div className="flex justify-end gap-2">
                                <Button
                                    variant="outline"
                                    className="border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-900 dark:text-blue-400"
                                    onClick={() => router.get(`/crud/inventors/${inventor.id}`)}
                                >
                                    Details
                                </Button>

                                <Button
                                    variant="outline"
                                    className="border-amber-200 text-amber-700 hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800 dark:border-amber-900 dark:text-amber-400"
                                    onClick={() => router.get(`/crud/inventors/update/${inventor.id}`)}
                                >
                                    Update
                                </Button>

                                <Button
                                    variant="outline"
                                    className="border-red-200 text-red-700 hover:border-red-300 hover:bg-red-50 hover:text-red-800 dark:border-red-900 dark:text-red-400"
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
