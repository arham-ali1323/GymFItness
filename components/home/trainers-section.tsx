"use client";

import { motion } from "framer-motion";
import { Award, Users, Clock, Star, ArrowRight, Phone, Mail } from "lucide-react";
import Link from "next/link";

const trainersData = [
  {
    id: 1,
    name: "Ahmed Khan",
    title: "Head Trainer & Nutrition Expert",
    specialty: "Strength & Conditioning",
    experience: "8+ Years Experience",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&crop=face",
    bio: "Former national athlete with expertise in strength training and sports nutrition. Helped 200+ clients achieve their fitness goals.",
    certifications: ["ISSA Certified", "Nutrition Specialist", "CrossFit Level 2"],
    achievements: ["Best Trainer 2023", "500+ Clients Trained", "Marathon Runner"],
    rating: 4.9,
    clients: 150,
    phone: "0321-1234567",
    email: "ahmed@germanfitness.com"
  },
  {
    id: 2,
    name: "Sara Fatima",
    title: "Female Fitness Specialist",
    specialty: "Yoga & Functional Training",
    experience: "6+ Years Experience",
    image: "https://images.unsplash.com/photo-1594381847879-47cfd479a62b?w=400&h=500&fit=crop&crop=face",
    bio: "Specialized in women's fitness, yoga therapy, and functional movement patterns. Passionate about empowering women through fitness.",
    certifications: ["Yoga Alliance RYT-500", "Women's Fitness Specialist", "Pilates Certified"],
    achievements: ["Women's Fitness Award 2022", "Yoga Champion", "300+ Success Stories"],
    rating: 4.8,
    clients: 120,
    phone: "0321-1234568",
    email: "sara@germanfitness.com"
  },
  {
    id: 3,
    name: "Ali Hassan",
    title: "Cardio & HIIT Expert",
    specialty: "High-Intensity Training",
    experience: "7+ Years Experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    bio: "Expert in cardiovascular training and HIIT workouts. Specializes in weight loss and endurance building programs.",
    certifications: ["ACE Certified", "HIIT Specialist", "Cardio Rehab Certified"],
    achievements: ["HIIT Champion 2023", "Weight Loss Expert", "Fitness Influencer"],
    rating: 4.9,
    clients: 180,
    phone: "0321-1234569",
    email: "ali@germanfitness.com"
  },
  {
    id: 4,
    name: "Zainab Malik",
    title: "Pilates & Core Specialist",
    specialty: "Pilates & Core Strength",
    experience: "5+ Years Experience",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    bio: "Certified Pilates instructor focusing on core strength, posture correction, and rehabilitation exercises.",
    certifications: ["Pilates Method Alliance", "Core Conditioning", "Posture Specialist"],
    achievements: ["Pilates Expert 2023", "Rehab Specialist", "Posture Correction Pro"],
    rating: 4.7,
    clients: 90,
    phone: "0321-1234570",
    email: "zainab@germanfitness.com"
  }
];

export default function FitnessTrainers() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-orange-600 rounded-full blur-3xl"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.1, 0.05, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Expert Team
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-6 uppercase">
            MEET OUR
            <span className="block text-orange-500">CERTIFIED TRAINERS</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our team of expert trainers brings years of experience and specialized knowledge to help you achieve your fitness goals safely and effectively.
          </p>
        </motion.div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainersData.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <TrainerCard trainer={trainer} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Train with the <span className="text-orange-500">Best?</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Book a free consultation with any of our expert trainers and start your transformation journey today
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 group mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            BOOK CONSULTATION
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== TRAINER CARD ===================== */
function TrainerCard({ trainer }: { trainer: typeof trainersData[0] }) {
  return (
    <motion.div
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300"
      whileHover={{ y: -10 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
        
        {/* Rating Badge */}
        <motion.div
          className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <Star className="w-4 h-4 fill-white" />
          <span className="text-sm font-bold">{trainer.rating}</span>
        </motion.div>

        {/* Quick Contact */}
        <motion.div
          className="absolute top-4 left-4 flex gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
            <Phone className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
            <Mail className="w-4 h-4 text-white" />
          </div>
        </motion.div>

        {/* Trainer Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold text-white mb-1">{trainer.name}</h3>
          <p className="text-orange-400 text-sm font-semibold mb-1">{trainer.title}</p>
          <p className="text-gray-300 text-sm mb-3">{trainer.specialty}</p>
          <p className="text-gray-400 text-xs mb-4">{trainer.experience}</p>
          
          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-xs">
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3 text-orange-400" />
              <span className="text-gray-300">{trainer.clients}+ Clients</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-3 h-3 text-orange-400" />
              <span className="text-gray-300">{trainer.certifications.length} Certs</span>
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            className="w-full py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Profile
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Hover Details */}
      <motion.div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
      >
        <h4 className="text-lg font-bold text-orange-400 mb-3">About {trainer.name}</h4>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{trainer.bio}</p>
        
        <div className="space-y-2 mb-4">
          <h5 className="text-sm font-semibold text-white">Certifications:</h5>
          <div className="flex flex-wrap gap-1">
            {trainer.certifications.map((cert, i) => (
              <span key={i} className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h5 className="text-sm font-semibold text-white">Achievements:</h5>
          <ul className="text-xs text-gray-300 space-y-1">
            {trainer.achievements.map((achievement, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
