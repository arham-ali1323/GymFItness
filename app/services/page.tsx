
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

      {/* What We Offer */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Complete Fitness Solutions Under One Roof
          </h2>
          <p className="text-gray-400 text-lg max-w-4xl mb-12 leading-relaxed">
            German Fitness is more than a gym. Beyond our world-class training floor in Sahiwal, we
            help fitness businesses succeed with reliable equipment maintenance, fast delivery and
            installation, qualified trainers, and full gym design services. Whatever you need to
            build, grow, or improve a fitness facility, our team has the expertise to deliver it
            safely and on time.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Equipment Maintenance & Repair",
                body: "Keep every machine running at peak performance with preventive maintenance programs, emergency repairs, safety inspections, and parts replacement. Certified technicians minimize downtime so your facility never misses a training day.",
              },
              {
                title: "Delivery & Installation",
                body: "From single machines to a complete gym build-out, our logistics team handles careful delivery, professional installation, and configuration. Get your equipment assembled correctly and ready for members on day one.",
              },
              {
                title: "Gym Membership & Training",
                body: "Join one of Pakistan's best gyms with 500+ happy members, 24/7 access, expert personal trainers, group classes, and personalized nutrition plans designed to deliver real results in 90 days.",
              },
              {
                title: "Gym Design & Setup",
                body: "Planning a new fitness center? We design efficient floor plans, select the right equipment for your budget and space, and manage the full setup from concept to opening. Start with a consultation and let our specialists handle the rest.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black"
              >
                <h3 className="text-xl font-bold text-orange-500 mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-lg max-w-4xl mt-12 leading-relaxed">
            Every service we offer is backed by the same commitment to quality that has made
            German Fitness a trusted name in Sahiwal and across Pakistan. Whether you are training
            for a competition, opening your own gym, or upgrading your home setup, our specialists
            are ready to help you reach your goals. Explore each service to see the full benefits,
            process, and pricing details, or contact us for a personalized consultation today.
          </p>
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
