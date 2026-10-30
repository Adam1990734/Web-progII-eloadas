import axios from "axios";
import { useEffect, useState } from "react";
import type { InventionMinimal } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';

interface Props {
    value: InventionMinimal[];
    onChange: (inventions: InventionMinimal[]) => void;
}

export default function InventionSelector({
                                             value,
                                             onChange
                                         }: Props) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<InventionMinimal[]>([]);

    useEffect(() => {
        if (query.trim().length < 2) {
            setSuggestions([]);
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                const response = await axios.get<InventionMinimal[]>(
                    "/api/inventions/suggest",
                    {
                        params: {
                            name: query
                        }
                    }
                );

                setSuggestions(response.data);
            } catch (error) {
                console.error(error);
            }
        }, 400);

        return () => clearTimeout(timeout);
    }, [query]);

    const addInvention = (invention: InventionMinimal) => {
        if (value.some(i => i.id === invention.id)) {
            return;
        }

        onChange([...value, invention]);
        setQuery("");
        setSuggestions([]);
    };

    const removeInvention = (id: number) => {
        onChange(value.filter((i) => i.id !== id));
    };

    return (
        <div className="space-y-4">
            <div className="relative">
                <Input type="text" maxLength={40} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search inventions..." />

                {suggestions.length > 0 && (
                    <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-md border bg-popover shadow-md">
                        {suggestions.map((invention) => (
                            <button
                                key={invention.id}
                                type="button"
                                onClick={() => addInvention(invention)}
                                className="flex w-full items-center px-3 py-2 text-left text-sm hover:bg-accent hover:text-accent-foreground"
                            >
                                {invention.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {value.length > 0 && (
                <div className="rounded-lg border p-4">
                    <h4 className="mb-3 text-sm font-medium">Selected inventions</h4>

                    <div className="flex flex-wrap gap-2">
                        {value.map((invention) => (
                            <div key={invention.id} className="group inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm">
                                <span>{invention.name}</span>

                                <Button
                                    className="ml-1 rounded-full p-0.5 text-muted-foreground hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-950"
                                    onClick={() => removeInvention(invention.id)}
                                >
                                    <X className="h-3 w-3" />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
