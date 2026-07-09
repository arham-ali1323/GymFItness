"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Brand } from "@/data/brands";
import Image from "next/image";

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="relative h-40 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-6">
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
            {brand.name.charAt(0)}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {brand.name}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {brand.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {brand.productCategories.slice(0, 3).map((category, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
            >
              {category}
            </span>
          ))}
        </div>
        
        <Link
          href={`/brands/${brand.slug}`}
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group-hover:gap-3"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
