import { Invention } from '@/types';
import { router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

type Props = {
    invention: Invention,
    isComplex: boolean
}

export default function InventionRow({ invention, isComplex } : Props) {
    return (
        <>
            {isComplex ? (
                <tr>
                    <td>{invention.name}</td>
                    <td>
                        <ul>
                            {invention.inventors.map((inventor, id) => (
                                <li key={id}>{inventor.name}</li>
                            ))}
                        </ul>
                    </td>
                    <td>
                        <Button onClick={() => router.get(`/crud/inventions/${invention.id}`)}>Details</Button>
                        <Button onClick={() => router.get(`/crud/inventions/update/${invention.id}`)}>Update</Button>
                        <Button onClick={() => router.get(`/crud/inventions/delete/${invention.id}`)}>Delete</Button>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td>{invention.name}</td>
                    <td>
                        <Button onClick={() => router.get(`/crud/inventions/${invention.id}`)}>Details</Button>
                        <Button onClick={() => router.get(`/crud/inventions/update/${invention.id}`)}>Update</Button>
                        <Button onClick={() => router.get(`/crud/inventions/delete/${invention.id}`)}>Delete</Button>
                    </td>
                </tr>
            )}
        </>
    );
}
