import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import { CheckCircle, ArrowRight, Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import FAQAccordion from "@/components/faq/faq-accordion";
import CTASection from "@/components/cta/cta-section";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | German Fitness`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {service.heroBanner.title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            {service.heroBanner.subtitle}
          </p>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About {service.title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {service.description}
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">24/7 Support</p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Expert Team</p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Certified</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Key <span className="text-orange-500">Features</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-orange-500 mb-4" />
                <p className="text-white font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose <span className="text-orange-500">Us</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-800/30 rounded-xl p-6"
              >
                <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500/30" />
            <div className="space-y-12">
              {service.process.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-orange-500 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold z-10">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <FAQAccordion faqs={service.faq} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={service.cta.title}
        description={service.cta.description}
        buttonText={service.cta.buttonText}
        link="/contact"
      />

      {/* Back to Services */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to All Services
          </Link>
        </div>
      </section>
    </div>
  );
}
