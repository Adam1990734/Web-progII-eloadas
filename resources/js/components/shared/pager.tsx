import { Button } from '@/components/ui/button';
import React, { useEffect } from 'react';

type Props = {
    currentPage: number;
    lastPage: number;
    pageSetter: React.Dispatch<React.SetStateAction<number>>;
};
export default function Pager({ currentPage, lastPage, pageSetter }: Props) {
    return (
        <>
            <div className="flex items-center justify-between px-4 py-3">
                <span className="text-sm text-muted-foreground">
                    Page {currentPage} / {lastPage}
                </span>

                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => pageSetter(currentPage - 1)}>
                        Previous
                    </Button>

                    <span className="min-w-16 text-center text-sm font-medium">{currentPage}</span>

                    <Button variant="outline" size="sm" disabled={currentPage === lastPage} onClick={() => pageSetter(currentPage + 1)}>
                        Next
                    </Button>
                </div>
            </div>
        </>
    );
}
