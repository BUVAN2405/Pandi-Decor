export default function About() {
    return (
        <section className="py-16 px-4 bg-background-light" id="about">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6 text-surface-dark">Creating Magic Since 2015</h2>
                <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full" />

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    At                         GPT Event Management
                    , we believe every event tells a story. We specialize in transforming venues into breathtaking experiences using floral artistry, elegant drapes, and ambient lighting. Whether it's an intimate birthday or a grand wedding, we bring your vision to life with precision and passion.
                </p>

                <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 text-center">
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                        <h3 className="text-2xl font-bold text-primary mb-1">500+</h3>
                        <p className="text-sm text-gray-500">Events</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                        <h3 className="text-2xl font-bold text-primary mb-1">100%</h3>
                        <p className="text-sm text-gray-500">Satisfaction</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm">
                        <h3 className="text-2xl font-bold text-primary mb-1">10+</h3>
                        <p className="text-sm text-gray-500">Years Exp.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
