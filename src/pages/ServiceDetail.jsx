import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import servicesData from '../data/services.json';
import { motion } from 'framer-motion';

export default function ServiceDetail() {
    const { slug } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h2>
                <Link to="/" className="text-primary hover:underline">Back to Home</Link>
            </div>
        );
    }

    const { title, fullDescription, coverImage, sampleImages, whatsappMessageTemplate } = service;

    // WhatsApp Link Construction
    const whatsappNumber = "9600374814"; // Replace with actual number
    const encodedMessage = encodeURIComponent(whatsappMessageTemplate);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    return (
        <div className="pb-24 md:pb-12 bg-background-light min-h-screen">
            {/* Header Image */}
            <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${coverImage})` }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="absolute top-4 left-4 z-10">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back</span>
                    </Link>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white bg-gradient-to-t from-black/80 to-transparent">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold font-display"
                    >
                        {title}
                    </motion.h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Description */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-surface-dark mb-4">About This Service</h2>
                    <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-wrap">
                        {fullDescription}
                    </p>
                </div>

                {/* Gallery */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-surface-dark mb-6">Visuals</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {sampleImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`${title} sample ${idx + 1}`}
                                className="rounded-xl shadow-sm hover:shadow-md transition-shadow w-full h-64 object-cover"
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Sticky Button */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 md:hidden z-50">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
                >
                    <MessageCircle size={20} />
                    Enquire on WhatsApp
                </a>
            </div>

            {/* Desktop CTA (Inline) */}
            <div className="hidden md:flex justify-center pb-12">
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-full text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                    <MessageCircle size={24} />
                    Enquire on WhatsApp
                </a>
            </div>
        </div>
    );
}
