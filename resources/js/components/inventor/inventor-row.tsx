import { Inventor } from '@/types';

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
                    <td>{inventor.bornAt}</td>
                    <td>{inventor.diedAt ? inventor.diedAt : '-'}</td>
                    <td>
                        <ul>
                            {inventor.inventions.map((invention, id) => (
                                <li key={id}>{invention.name}</li>
                            ))}
                        </ul>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td>{inventor.name}</td>
                    <td>{inventor.bornAt}</td>
                    <td>{inventor.diedAt ? inventor.diedAt : '-'}</td>
                </tr>
            )}
        </>
    );
}
