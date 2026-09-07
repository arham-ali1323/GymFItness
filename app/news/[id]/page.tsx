import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  newsArticles,
  getNewsArticle,
} from "@/data/news";
import ScrollToTopWaterFill from "@/components/ui/back-to-top";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ id: String(article.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = getNewsArticle(Number(id));

  if (!article) {
    return { title: "Article Not Found | German Fitness Sahiwal" };
  }

  return {
    title: `${article.title} | German Fitness Sahiwal`,
    description: article.excerpt,
    alternates: {
      canonical: `/news/${article.id}`,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { id } = await params;
  const article = getNewsArticle(Number(id));

  if (!article) {
    notFound();
  }

  const related = newsArticles.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-orange-500 font-semibold tracking-widest uppercase mb-4">
            {article.date} • By {article.author}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            {article.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            {article.summary}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-12 px-4 md:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>

          <div className="space-y-12">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {section.heading}
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl border border-slate-700 bg-gradient-to-br from-gray-900 to-black text-center">
            <h2 className="text-2xl font-bold mb-3">
              Ready to Start Your Own Transformation?
            </h2>
            <p className="text-gray-400 mb-6">
              Join German Fitness and get expert coaching, personalized plans,
              and a supportive community that keeps you consistent.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Book a Free Trial
            </Link>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related News</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.id}`}
                  className="group rounded-xl overflow-hidden border border-slate-700 bg-gray-900 hover:border-orange-500 transition-colors"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2">
                      {item.date} • {item.author}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollToTopWaterFill />
    </div>
  );
}