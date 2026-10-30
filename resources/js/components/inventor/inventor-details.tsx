import { Inventor } from '@/types';

type Props = {
    inventor: Inventor;
    isComplex: boolean;
}
export default function InventorDetails({ inventor, isComplex } : Props) {
    return (
        <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="mb-6">
                <h2 className="text-xl font-semibold">{inventor.name}</h2>

                <p className="text-sm text-muted-foreground">Inventor</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <div className="text-sm text-muted-foreground">Born In</div>

                    <div className="font-medium">{inventor.bornat}</div>
                </div>

                <div>
                    <div className="text-sm text-muted-foreground">Died In</div>

                    <div className="font-medium">{inventor.diedat ?? 'Still alive'}</div>
                </div>
            </div>

            {isComplex && inventor.inventions.length > 0 && (
                <div className="mt-6 border-t pt-6">
                    <div className="mb-3 text-sm font-medium">Inventions ({inventor.inventions.length})</div>

                    <div className="flex flex-wrap gap-2">
                        {inventor.inventions.map((inv, id) => (
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
