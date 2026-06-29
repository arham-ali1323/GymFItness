"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import heroImage from "../../public/images/hero.png";
import heroBg from "../../public/images/Hero-bg.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src={heroBg}
        alt="Fitness Background"
        fill
        priority
        className="object-cover object-center z-0"
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE - TEXT CONTENT */}
            <motion.div 
              className="text-white"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-full mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-orange-400 font-semibold text-sm">LIMITED TIME OFFER</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 
                className="text-5xl md:text-7xl font-black font-orbitron mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                TRANSFORM YOUR
                <span className="block text-orange-500">BODY IN 90 DAYS</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Join Sahiwal's premier fitness facility with state-of-the-art equipment, 
                expert trainers, and a supportive community that guarantees results.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap gap-6 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Open 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">Sahiwal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">0321-1234567</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  START NOW
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold text-lg rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  FREE TRIAL
                </motion.button>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                className="mt-8 flex items-center gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div>
                  <div className="text-3xl font-black text-orange-500">500+</div>
                  <div className="text-gray-400 text-sm">ACTIVE MEMBERS</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange-500">15+</div>
                  <div className="text-gray-400 text-sm">EXPERT TRAINERS</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-orange-500">98%</div>
                  <div className="text-gray-400 text-sm">SATISFACTION</div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE - IMAGE */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <Image
                  src={heroImage}
                  alt="Fitness Training"
                  width={600}
                  height={600}
                  priority
                  className="rounded-2xl shadow-2xl"
                />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-bold shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  JOIN TODAY
                  <br />
                  <span className="text-sm">50% OFF</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-orange-500/30 z-30"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white">
              <span className="font-bold text-orange-500">LIMITED TIME:</span> Get your first month free with any annual membership
            </div>
            <motion.button
              className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CLAIM OFFER
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
