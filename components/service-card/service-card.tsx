"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="relative h-48 bg-gradient-to-br from-orange-500 to-orange-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        <div className="relative z-10 flex items-center justify-center h-full p-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center">
            {service.title}
          </h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {service.shortDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors group-hover:gap-3"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
