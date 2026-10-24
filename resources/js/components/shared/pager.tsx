import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';

type Props = {
    currentPage: number;
    lastPage: number;
    pageSetter: React.Dispatch<React.SetStateAction<number>>;
};
export default function Pager({ currentPage, lastPage, pageSetter }: Props) {
    return <>
        { lastPage > currentPage ?
            <Button
                onClick={() => pageSetter(currentPage + 1)}
            >Next</Button>
            :
            <></>
        }
        { currentPage > 1 ?
            <Button
                onClick={() => pageSetter(currentPage - 1)}
            >Back</Button>
            :
            <></>
        }
    </>
}
