import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import galleryData from '../../data/gallery.json';
import { cn } from '../../lib/utils';

export default function Gallery() {
    const [filter, setFilter] = useState('All');

    // Extract unique categories from data
    const categories = useMemo(() => {
        const cats = ['All', ...new Set(galleryData.map((item) => item.category))];
        return cats;
    }, []);

    const filteredImages = useMemo(() => {
        if (filter === 'All') return galleryData;
        return galleryData.filter((item) => item.category === filter);
    }, [filter]);

    return (
        <section className="py-16 px-4 bg-background-light" id="gallery">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-surface-dark mb-4">Our Gallery</h2>
                    <p className="text-gray-500">A glimpse into the magical worlds we've created.</p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                filter === cat
                                    ? "bg-primary text-white shadow-md scale-105"
                                    : "bg-white text-gray-600 hover:bg-gray-100 hover:text-primary"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Image Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    <AnimatePresence>
                        {filteredImages.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="relative rounded-xl overflow-hidden aspect-square group shadow-sm bg-gray-200"
                            >
                                <img
                                    src={item.image}
                                    alt={item.category}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="px-4 py-2 bg-white/90 text-surface-dark rounded-full text-sm font-semibold">
                                        {item.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
