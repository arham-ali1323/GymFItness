'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Raza",
      location: "Sahiwal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "German Fitness transformed my life completely! In just 6 months, I lost 25kg and gained muscle I never thought possible. The trainers are incredibly knowledgeable and always push you to be your best.",
      results: "Lost 25kg in 6 months",
      membership: "Pro Member",
      joined: "March 2023"
    },
    {
      id: 2,
      name: "Fatima Sheikh",
      location: "Sahiwal", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "As a working mother, I struggled with fitness until I joined German Fitness. The flexible timing and women's-only sessions made it perfect for me. I feel stronger and more confident than ever!",
      results: "Gained 8kg muscle, lost 15kg fat",
      membership: "Elite Member", 
      joined: "January 2023"
    },
    {
      id: 3,
      name: "Bilal Khan",
      location: "Sahiwal",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "The equipment here is top-notch and the atmosphere is incredibly motivating. I've been a member for over a year and the results speak for themselves. Best gym in Sahiwal without a doubt!",
      results: "Competed in first bodybuilding competition",
      membership: "Pro Member",
      joined: "June 2022"
    },
    {
      id: 4,
      name: "Ayesha Malik",
      location: "Sahiwal",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face", 
      rating: 5,
      text: "I was skeptical about joining a gym at first, but the trial session convinced me. The trainers are patient and really understand individual needs. My energy levels have skyrocketed!",
      results: "Improved stamina, lost 12kg",
      membership: "Starter Member",
      joined: "August 2023"
    },
    {
      id: 5,
      name: "Usman Ahmed",
      location: "Sahiwal",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "German Fitness isn't just a gym, it's a family. The support from both trainers and fellow members keeps me motivated. I've achieved fitness goals I never thought possible.",
      results: "Completed first marathon",
      membership: "Elite Member",
      joined: "February 2023"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number): void => {
    setCurrentIndex(index);
  };

  const current = testimonials[currentIndex];

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
              Success Stories
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-6 uppercase">
            REAL
            <span className="block text-orange-500">TRANSFORMATIONS</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our members who have transformed their lives at German Fitness.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-orange-500/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 text-base leading-relaxed mb-6">
                "{testimonial.text}"
              </blockquote>

              {/* Results Badge */}
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg px-3 py-2 mb-4">
                <p className="text-orange-400 text-sm font-semibold">
                  {testimonial.results}
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  <p className="text-orange-400 text-xs">{testimonial.membership}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          className="bg-gradient-to-r from-orange-600 to-orange-700 p-8 rounded-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Join 500+ Happy Members Transforming Their Lives
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div>
              <div className="text-4xl font-black mb-2">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">500+</div>
              <div className="text-sm">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">8+</div>
              <div className="text-sm">Years Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">98%</div>
              <div className="text-sm">Satisfaction</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready for Your <span className="text-orange-500">Success Story?</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Start your transformation journey today and become our next success story
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 group mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            START YOUR JOURNEY
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}