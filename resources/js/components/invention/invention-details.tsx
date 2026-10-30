import { Invention } from '@/types';

type Props = {
    invention: Invention;
    isComplex: boolean;
}
export default function InventionDetails({ invention, isComplex } : Props) {
    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">{invention.name}</h2>

                <p className="text-sm text-muted-foreground">Invention</p>
            </div>

            {isComplex && invention.inventors.length > 0 && (
                <div className="mt-6 border-t pt-6">
                    <div className="mb-3 text-sm font-medium">Inventors ({invention.inventors.length})</div>

                    <div className="flex flex-wrap gap-2">
                        {invention.inventors.map((inv, id) => (
                            <span key={id} className="rounded-md border bg-muted/30 px-3 py-1 text-sm">
                                {inv.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
