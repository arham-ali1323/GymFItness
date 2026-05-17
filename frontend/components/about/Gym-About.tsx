"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Award, Users, Target, Dumbbell, Clock, MapPin, Phone, CheckCircle } from "lucide-react";

export default function GymAboutSection() {
  const [counts, setCounts] = useState({
    coaches: 0,
    members: 0,
    programs: 0,
    awards: 0,
  });
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = {
      coaches: 15,
      members: 500,
      programs: 25,
      awards: 8,
    };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts((prev) => ({
        coaches: Math.min(
          Math.ceil(prev.coaches + targets.coaches / steps),
          targets.coaches
        ),
        members: Math.min(
          Math.ceil(prev.members + targets.members / steps),
          targets.members
        ),
        programs: Math.min(
          Math.ceil(prev.programs + targets.programs / steps),
          targets.programs
        ),
        awards: Math.min(
          Math.ceil(prev.awards + targets.awards / steps),
          targets.awards
        ),
      }));
    }, interval);

    return () => clearInterval(timer);
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-orange-500 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4 px-6 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-orange-400 font-semibold text-sm tracking-wider uppercase">
              About German Fitness
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-6 uppercase">
            SAHIWAL'S PREMIER
            <span className="block text-orange-500">FITNESS DESTINATION</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your life at German Fitness - where cutting-edge equipment meets expert coaching in an environment built for champions.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
                alt="German Fitness Gym"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8" />
                  <div>
                    <div className="text-2xl font-bold">8+ Years</div>
                    <div className="text-sm">Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p>
                Welcome to <span className="text-orange-500 font-bold">German Fitness</span>, 
                Sahiwal's most trusted fitness destination since 2016. We're not just a gym - 
                we're a transformative community dedicated to helping you achieve your ultimate fitness goals.
              </p>

              <p>
                Our state-of-the-art facility features premium equipment from leading brands, 
                ensuring you have access to the best tools for your fitness journey. From 
                advanced strength training equipment to comprehensive cardio machines, we've invested in quality.
              </p>

              <p>
                What sets us apart is our team of <span className="text-orange-500 font-bold">15+ certified trainers</span> 
                who bring years of experience and personalized coaching to every session. 
                We understand that every fitness journey is unique, and we're committed to providing the guidance you need.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {[
                { icon: Dumbbell, text: "Premium Equipment" },
                { icon: Users, text: "Expert Trainers" },
                { icon: Clock, text: "24/7 Access" },
                { icon: Target, text: "Personalized Plans" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <feature.icon className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SCHEDULE A VISIT
              <CheckCircle className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Statistics Bar */}
        <motion.div
          className="bg-gradient-to-r from-orange-600 to-orange-700 p-8 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="text-center">
              <motion.div 
                className="text-5xl md:text-6xl font-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.8 }}
              >
                {counts.coaches}+
              </motion.div>
              <div className="text-sm md:text-base font-semibold tracking-wider uppercase">
                Expert Coaches
              </div>
            </div>

            <div className="text-center">
              <motion.div 
                className="text-5xl md:text-6xl font-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.9 }}
              >
                {counts.members}+
              </motion.div>
              <div className="text-sm md:text-base font-semibold tracking-wider uppercase">
                Happy Members
              </div>
            </div>

            <div className="text-center">
              <motion.div 
                className="text-5xl md:text-6xl font-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 1.0 }}
              >
                {counts.programs}+
              </motion.div>
              <div className="text-sm md:text-base font-semibold tracking-wider uppercase">
                Fitness Programs
              </div>
            </div>

            <div className="text-center">
              <motion.div 
                className="text-5xl md:text-6xl font-black mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 1.1 }}
              >
                {counts.awards}+
              </motion.div>
              <div className="text-sm md:text-base font-semibold tracking-wider uppercase">
                Excellence Awards
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-orange-500">Transformation?</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Join 500+ members who have already transformed their lives at German Fitness
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-300">
              <Phone className="w-5 h-5 text-orange-500" />
              <span>0321-1234567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin className="w-5 h-5 text-orange-500" />
              <span>Sahiwal, Punjab</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
