import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen bg-background-light text-slate-900 font-display">
            <Navbar />
            <main className="flex-grow pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}
