import { useState, useEffect } from 'react';
import { InventorResponse, InventorRequest, Inventor } from '@/types';
import axios from 'axios';
import InventorDetails from '@/components/inventor/inventor-details';
import AppHeaderLayout from '@/layouts/app/app-header-layout';

type Props = {
    id: number;
};

export default function Details({ id } : Props) {
    const [inventor, setInventor] = useState<Inventor>();

    useEffect(() => {
        axios
            .get(`/api/inventors/${id}`)
            .then((data) => data.data)
            .then((data: InventorResponse) => {
                setInventor({
                    ...data,
                    type: 'Inventor',
                });
            });
    }, []);

    return <AppHeaderLayout>{inventor ? <InventorDetails inventor={inventor} isComplex={true} /> : <span>Hiba</span>}</AppHeaderLayout>;
}
