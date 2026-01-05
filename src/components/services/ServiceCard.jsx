import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ service }) {
    const { title, slug, coverImage, shortDescription } = service;

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
        >
            <Link to={`/services/${slug}`} className="block h-full flex flex-col">
                {/* Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                    <img
                        src={coverImage}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="text-white font-medium flex items-center gap-2">
                            View Details <ArrowRight size={16} />
                        </span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-surface-dark mb-2 group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow">
                        {shortDescription}
                    </p>
                    <div className="mt-auto">
                        <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            Explore <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
