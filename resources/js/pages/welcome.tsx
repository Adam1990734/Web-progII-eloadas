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
            <Head title="Home" />

            <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
                {/* HERO SECTION */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 md:p-12 text-white shadow-xl">
                    <div className="max-w-2xl space-y-4">
                        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                            Web Programming II – Project Assignment
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                            Welcome to the Application!
                        </h1>
                        <p className="text-lg text-blue-100">
                            A modern and efficient web solution for data management. Browse the database, view our statistics, or get in touch with us!
                        </p>
                        <div className="pt-4 flex flex-wrap gap-4">
                            <a
                                href="/dashboard"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50 transition shadow-sm"
                            >
                                View Database
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-800/50 text-white font-medium hover:bg-blue-800/80 transition border border-white/20"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>

                {/* OVERVIEW SECTION */}
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">About the Application</h2>
                    <p className="text-gray-600 leading-relaxed">
                        This web application was created for the Web Programming II course using Laravel and React frameworks. The objective of the system is to provide a clean, modern, and responsive user interface for viewing, managing, and analyzing data stored in the database.
                    </p>
                </div>

                {/* KEY FEATURES SECTION */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl">
                                📊
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Database & Charts</h3>
                            <p className="text-gray-600 text-sm">
                                Clear tabular data presentation utilizing ORM, along with interactive charts for enhanced data visualization.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                            <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl">
                                ✉️
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Contact & Messaging</h3>
                            <p className="text-gray-600 text-sm">
                                Validated contact form for submitting messages. Authenticated users can review their previously sent messages.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-3">
                            <div className="w-12 h-12 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl">
                                🛡️
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Administration (CRUD)</h3>
                            <p className="text-gray-600 text-sm">
                                Dedicated Admin panel with role-based access control for full data management (Create, Read, Update, Delete).
                            </p>
                        </div>
                    </div>
                </div>

                {/* GETTING STARTED SECTION */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 shadow-md space-y-6">
                    <h2 className="text-2xl font-bold">How to Get Started?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <span className="text-blue-400 font-bold text-lg">01. Registration</span>
                            <p className="text-slate-300 text-sm">
                                Create an account via the registration page to gain access to extended features.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-blue-400 font-bold text-lg">02. Explore Data</span>
                            <p className="text-slate-300 text-sm">
                                View database entries and visual analytics in the Database and Diagram sections.
                            </p>
                        </div>
                        <div className="space-y-2">
                            <span className="text-blue-400 font-bold text-lg">03. Get in Touch</span>
                            <p className="text-slate-300 text-sm">
                                Send us a message through the contact form if you have any questions or feedback.
                            </p>
                        </div>
                    </div>
                </div>

                {/* FOOTER / CREDITS SECTION */}
                <footer className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500 space-y-2">
                    <p className="font-medium text-gray-700">Web Programming II – Lecture Assignment</p>
                    <p>Created by: Bence Gábor Tóth & Ádám Pálmai</p>
                    <p className="text-xs text-gray-400">© 2026 John von Neumann University</p>
                </footer>
            </div>
        </AppHeaderLayout>
    );
}
