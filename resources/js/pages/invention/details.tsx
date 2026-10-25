import { useState, useEffect } from 'react';
import { Invention, InventionResponse } from '@/types';
import InventionDetails from '@/components/invention/invention-details';
import axios from 'axios';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

type Props = {
    id: number;
};

export default function Details({ id } : Props) {
    const [invention, setInvention] = useState<Invention>();

    useEffect(() => {
        axios.get(`/api/inventions/${id}`)
            .then(data => data.data)
            .then((data: InventionResponse) => {
                setInvention({
                    ...data,
                    type: 'Invention',
                });
            });
    }, []);

    return (
        <AppHeaderLayout>
            { invention ?
                <InventionDetails invention={invention} isComplex={true} />
                :
                <span>Hiba</span>
            }
        </AppHeaderLayout>
    );
}
