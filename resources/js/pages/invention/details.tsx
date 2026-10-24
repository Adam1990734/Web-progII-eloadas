import { useState, useEffect } from 'react';
import { Invention } from '@/types';
import InventionDetails from '@/components/invention/invention-details';
import { InventionWithoutType } from '@/types/invention';

type Props = {
    id: number;
};

export default function Details({ id } : Props) {
    const [invention, setInvention] = useState<Invention>();

    useEffect(() => {
        fetch(`/api/inventions/${id}`)
            .then(resp => resp.json())
            .then((data : InventionWithoutType) => {
                setInvention(({
                    ...data,
                    type: "Invention"
                }))
            });
    }, []);

    return (
        <>
            { invention ?
                <InventionDetails invention={invention} isComplex={true} />
                :
                <span>Hiba</span>
            }
        </>
    );
}
