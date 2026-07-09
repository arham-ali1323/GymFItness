import { Metadata } from "next";
import { brands } from "@/data/brands";
import BrandCard from "@/components/brand-card/brand-card";
import CTASection from "@/components/cta/cta-section";

export const metadata: Metadata = {
  title: "Our Brands | German Fitness",
  description: "Discover our premium fitness equipment brands including Matrix, Life Fitness, Technogym, and more. Quality equipment for your fitness journey.",
};

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Brands</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            We partner with the world's leading fitness equipment brands to bring you the highest quality products for your fitness journey.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Looking for a Specific Brand?"
        description="Contact us to learn more about our brand partnerships and find the perfect equipment for your needs."
        buttonText="Contact Us"
        link="/contact"
      />
    </div>
  );
}
