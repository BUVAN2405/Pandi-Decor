import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Gallery from '../components/gallery/Gallery';
import CTABanner from '../components/shared/CTABanner';

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <About />
            <Services />
            <Gallery />
            <CTABanner />
        </div>
    );
}
