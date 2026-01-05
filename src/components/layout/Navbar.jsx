import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/#services' },
        { name: 'Gallery', path: '/#gallery' },
        { name: 'Contact', path: '/#contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-primary font-display" onClick={handleLinkClick}>
                        GPT Event Management
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-surface-dark hover:text-primary transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
                        >
                            <Phone size={18} />
                            <span>Book Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-surface-dark hover:text-primary transition-colors focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background-light border-b border-gray-200 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    onClick={handleLinkClick}
                                    className="block w-full text-center py-3 text-lg text-surface-dark font-medium hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/9600374814"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                                className="mt-4 px-8 py-3 bg-primary text-white rounded-full font-medium shadow-md active:scale-95 transition-transform flex items-center gap-2"
                            >
                                <Phone size={20} />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
