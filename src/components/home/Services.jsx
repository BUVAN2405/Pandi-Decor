import servicesData from '../../data/services.json';
import ServiceCard from '../services/ServiceCard';

export default function Services() {
    return (
        <section className="py-16 px-4 bg-white" id="services">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-surface-dark mb-4">Our Services</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        From intimate gatherings to grand celebrations, we provide bespoke decoration services tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
