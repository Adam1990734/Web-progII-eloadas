import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { Link } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function crud() {
    return (
        <AppHeaderLayout>
            <div className="grid gap-6 md:grid-cols-2">
                <Link href="/crud/inventions">
                    <Card className="cursor-pointer transition hover:bg-accent">
                        <CardHeader>
                            <CardTitle>Inventions</CardTitle>
                        </CardHeader>

                        <CardContent>Operations with inventions, update it freely, but to connect with an inventor you should use inventor tab!</CardContent>
                    </Card>
                </Link>

                <Link href="/crud/inventors">
                    <Card className="cursor-pointer transition hover:bg-accent">
                        <CardHeader>
                            <CardTitle>Inventors</CardTitle>
                        </CardHeader>

                        <CardContent>Operations with inventors, update it freely and make connections with the inventions you have made!</CardContent>
                    </Card>
                </Link>
            </div>
        </AppHeaderLayout>
    );
}
