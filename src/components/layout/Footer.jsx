import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-surface-dark text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold font-display mb-2 text-primary">PandiDecor</h2>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Turning your dream events into reality with elegant decorations and premium styling.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-start gap-4">
                        <a href="https://wa.me/1234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Phone size={18} />
                            <span>+91 96003 74814</span>
                        </a>
                        <a href="mailto:info@luxedecor.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail size={18} />
                            <span>info@luxedecor.com</span>
                        </a>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-xs">
                    © {new Date().getFullYear()} PandiDecor. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
