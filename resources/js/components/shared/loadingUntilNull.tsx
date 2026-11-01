import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
    toWait: object | object[] | null
    children: ReactNode
}
export default function WhileLoading({toWait, children} : Props) {
    return (
        <>
            {toWait === null || ('length' in toWait && toWait.length === 0) ? (
                <div className="flex h-80 items-center justify-center">
                    <div className="flex flex-col items-center gap-3">
                        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Loading...</span>
                    </div>
                </div>
            ) : (
                children
            )}
        </>
    );
}
