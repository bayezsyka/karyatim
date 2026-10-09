import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function AppLayout({ children, title }) {
    const { url } = usePage();

    return (
        <div className="min-h-screen flex flex-col bg-canvas text-ink">
            <Head title={title} />
            <Navbar currentUrl={url} />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    );
}
