import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner() {
    return (
        <section className="py-20 bg-primary text-white relative overflow-hidden" id="contact">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Ready to Transform Your Event?</h2>
                <p className="text-lg md:text-xl text-primary-100 mb-10 opacity-90">
                    Book a free consultation with our expert decorators today. Let's make your special day unforgettable.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/+919600374814"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full text-lg font-bold shadow-xl hover:bg-gray-50 transition-colors"
                >
                    <Phone className="w-6 h-6" />
                    <span>Contact Us on WhatsApp</span>
                </motion.a>
            </div>
        </section>
    );
}
