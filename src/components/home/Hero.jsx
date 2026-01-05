import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full h-[85vh] overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80")' }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
                        Unforgettable <span className="text-primary italic">Events</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto font-light leading-relaxed">
                        Premium decoration services for weddings, parties, and corporate events.
                    </p>

                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="inline-block px-8 py-3 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-primary/50 transition-all"
                    >
                        Get a Quote
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
