"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  className?: string;
}

export default function FAQAccordion({ faqs, className = "" }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-orange-500"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="
              w-full px-6 py-4 text-left flex items-center justify-between 
              font-medium
              bg-white dark:bg-gray-800
              transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-orange-500
              hover:bg-gray-50 dark:hover:bg-gray-700
              group
            "
          >
            <span className="text-gray-900 dark:text-white text-base font-semibold">
              {faq.question}
            </span>
            <span className="text-orange-500 transition-transform duration-200">
              {activeIndex === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              activeIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
