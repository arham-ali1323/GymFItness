
import { Metadata } from "next";
import { services } from "@/data/services";
import ServiceCard from "@/components/service-card/service-card";
import CTASection from "@/components/cta/cta-section";

export const metadata: Metadata = {
  title: "Our Services | German Fitness",
  description: "Explore our comprehensive fitness services including maintenance, delivery, gym membership, qualified trainers, and gym design solutions.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Comprehensive fitness solutions tailored to your needs. From equipment maintenance to gym design, we provide expert services to help you achieve your fitness goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to learn more about our services and how we can help you achieve your fitness goals."
        buttonText="Contact Us"
        link="/contact"
      />
    </div>
  );
}
