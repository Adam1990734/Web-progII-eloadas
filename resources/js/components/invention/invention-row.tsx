import { Invention } from '@/types';

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
                </tr>
            ) : (
                <tr>
                    <td>{invention.name}</td>
                </tr>
            )}
        </>
    );
}
