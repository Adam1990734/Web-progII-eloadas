import { Inventor } from '@/types';
import { Button } from '@/components/ui/button';
import { router } from '@inertiajs/react';

type Props = {
    inventor: Inventor;
    isComplex: boolean;
};

export default function InventorRow({ inventor, isComplex }: Props) {
    return (
        <>
            {isComplex ? (
                <tr>
                    <td>{inventor.name}</td>
                    <td>{inventor.bornat}</td>
                    <td>{inventor.diedat ? inventor.diedat : '-'}</td>
                    <td>
                        <ul>
                            {inventor.inventions.map((invention, id) => (
                                <li key={id}>{invention.name}</li>
                            ))}
                        </ul>
                    </td>
                    <td>
                        <Button onClick={() => router.get(`/crud/inventors/${inventor.id}`)}>Details</Button>
                        <Button onClick={() => router.get(`/crud/inventors/update/${inventor.id}`)}>Update</Button>
                        <Button onClick={() => router.get(`/crud/inventors/delete/${inventor.id}`)}>Delete</Button>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td>{inventor.name}</td>
                    <td>{inventor.bornat}</td>
                    <td>{inventor.diedat ? inventor.diedat : '-'}</td>
                    <td>
                        <Button onClick={() => router.get(`/crud/inventors/${inventor.id}`)}>Details</Button>
                        <Button onClick={() => router.get(`/crud/inventors/update/${inventor.id}`)}>Update</Button>
                        <Button onClick={() => router.get(`/crud/inventors/delete/${inventor.id}`)}>Delete</Button>
                    </td>
                </tr>
            )}
        </>
    );
}
