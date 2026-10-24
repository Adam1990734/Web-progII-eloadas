import { useState, useEffect } from 'react';
import { Inventor } from '@/types';
import { InventorWithoutType } from '@/types/inventor';
import InventorDetails from '@/components/inventor/inventor-details';

type Props = {
    id: number;
};

export default function Details({ id } : Props) {
    const [inventor, setInventor] = useState<Inventor>();

    useEffect(() => {
        fetch(`/api/inventors/${id}`)
            .then(resp => resp.json())
            .then((data : InventorWithoutType) => {
                setInventor(({
                    ...data,
                    type: "Inventor"
                }))
            });
    }, []);

    return (
        <>
            { inventor ?
                <InventorDetails inventor={inventor} isComplex={true}/>
                :
                <span>Hiba</span>
            }
        </>
    );
}
