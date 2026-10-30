/*
import AppHeaderLayout from '@/layouts/app/app-header-layout';

export default function Welcome() {
    return (
        <AppHeaderLayout>
            <h1>Welcome page!</h1>
        </AppHeaderLayout>
    );
}
*/
import AppHeaderLayout from '@/layouts/app/app-header-layout';
import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <AppHeaderLayout>
            <Head title="Főoldal" />

            <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-white shadow-xl">
                    <div className="max-w-2xl space-y-4">
                        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                            Web-Programozás II. Beadandó
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                            Üdvözöljük az Alkalmazásban!
                        </h1>
                        <p className="text-lg text-blue-100">
                            A hatékony és modern webes adatkezelési megoldás. Böngéssze az adatbázist, tekintse meg statisztikáinkat vagy lépjen velünk kapcsolatba!
                        </p>
                        <div className="pt-4 flex flex-wrap gap-4">
                            <a
                                href="/dashboard"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 transition shadow-sm"
                            >
                                Adatbázis megtekintése
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-800/50 text-white font-medium hover:bg-blue-800/80 transition border border-white/20"
                            >
                                Kapcsolat
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">Az Alkalmazásról</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Ez a webalkalmazás a Web-programozás II. tárgy keretében készült Laravel és React keretrendszerek segítségével. A rendszer célja egy átlátható, modern és reszponzív felület biztosítása az adatbázisban tárolt adatok kezelésére.
                    </p>
                </div>
            </div>
        </AppHeaderLayout>
    );
}
