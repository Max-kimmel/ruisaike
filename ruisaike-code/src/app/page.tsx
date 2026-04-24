import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CompanyOverview from '@/components/about/CompanyOverview';
import Features from '@/components/Features';
import GreenCircleSystem from '@/components/technology/GreenCircleSystem';
import ProductShowcase from '@/components/ProductShowcase';
import PartnersSection from '@/components/cases/PartnersSection';
import TechnologyCTA from '@/components/technology/TechnologyCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <Hero />
        
        {/* About Section */}
        <section className="py-24 bg-gray-50/50" id="about-overview">
          <div className="container mx-auto px-4">
            <CompanyOverview />
          </div>
        </section>

        {/* Features / Core Tech */}
        <Features />

        {/* Green Circle System */}
        <section className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4">
            <GreenCircleSystem />
          </div>
        </section>

        {/* Products */}
        <ProductShowcase />

        {/* Partners & Applications */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <PartnersSection />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-white mb-8">
          <div className="container mx-auto px-4">
            <TechnologyCTA />
          </div>
        </section>

        <Footer />
      </div>
  );
}
