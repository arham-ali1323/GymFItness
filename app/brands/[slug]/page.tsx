import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBrandBySlug, getAllBrandSlugs } from "@/data/brands";
import { CheckCircle, ArrowRight, Award, Globe, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import CTASection from "@/components/cta/cta-section";

interface BrandPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBrandSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  
  if (!brand) {
    return {
      title: "Brand Not Found",
    };
  }

  return {
    title: `${brand.name} | German Fitness`,
    description: brand.shortDescription,
  };
}

export default async function BrandDetailPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);

  if (!brand) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/30 to-black" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-4xl md:text-6xl flex-shrink-0">
              {brand.name.charAt(0)}
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {brand.name}
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl">
                {brand.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Brand */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                About <span className="text-orange-500">{brand.name}</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {brand.about}
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Brand <span className="text-orange-500">History</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {brand.history}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Product <span className="text-orange-500">Categories</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brand.productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-center hover:border-orange-500 transition-colors"
              >
                <p className="text-white font-semibold text-sm">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Featured <span className="text-orange-500">Products</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.featuredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-orange-500 transition-colors"
              >
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-gray-500 text-4xl">
                    <Award className="w-16 h-16" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose <span className="text-orange-500">{brand.name}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brand.whyChoose.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gray-800/30 rounded-xl p-6"
              >
                <div className="bg-orange-500 rounded-full p-2 flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Product <span className="text-orange-500">Gallery</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brand.gallery.map((image, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl h-64 flex items-center justify-center"
              >
                <div className="text-gray-500 text-4xl">
                  <Globe className="w-16 h-16" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title={`Interested in ${brand.name} Products?`}
        description="Contact us today to learn more about our brand offerings and find the perfect equipment for your needs."
        buttonText="Get in Touch"
        link="/contact"
      />

      {/* Back to Brands */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            Back to All Brands
          </Link>
        </div>
      </section>
    </div>
  );
}
