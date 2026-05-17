"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ArrowRight, CheckCircle } from 'lucide-react';

export default function ContactInfoSection() {
  const [hoveredCard, setHoveredCard] = useState<null | number>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      id: 1,
      icon: <Phone className="w-6 h-6" />,
      title: 'CALL US',
      label: '24/7 Support Available',
      value: '0321-1234567',
      value2: '0300-9876543',
      link: 'tel:03211234567',
      description: 'Get instant support for membership inquiries and trial bookings'
    },
    {
      id: 2,
      icon: <Mail className="w-6 h-6" />,
      title: 'EMAIL US',
      label: 'Quick Response Guaranteed',
      value: 'info@germanfitness.com',
      value2: 'support@germanfitness.com',
      link: 'mailto:info@germanfitness.com',
      description: 'Send us your queries and get response within 2 hours'
    },
    {
      id: 3,
      icon: <MapPin className="w-6 h-6" />,
      title: 'VISIT US',
      label: 'Open 24/7 for Members',
      value: '68-A, Main Fateh Sher Road',
      value2: 'Fateh Sher Colony, Sahiwal',
      link: 'https://maps.google.com/?q=German+Fitness+Sahiwal',
      description: 'Located in the heart of Sahiwal with easy parking access'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

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
              Get In Touch
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black font-orbitron mb-6 uppercase">
            VISIT GERMAN
            <span className="block text-orange-500">FITNESS TODAY</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today for a free trial session and experience the German Fitness difference.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.label}</p>
              <p className="text-gray-300 text-sm mb-4">{item.description}</p>
              
              <div className="space-y-2">
                <a
                  href={item.link}
                  className="text-white font-semibold hover:text-orange-500 transition-colors block"
                >
                  {item.value}
                </a>
                {item.value2 && (
                  <div className="text-gray-400 text-sm">{item.value2}</div>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                      placeholder="0321-1234567"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your fitness goals..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              {/* Quick Contact */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <p className="text-gray-400 text-sm mb-4">Or reach out directly:</p>
                <div className="flex gap-4">
                  <a
                    href="https://wa.me/923211234567"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:03211234567"
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map & Hours */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Map */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.123456789!2d73.123456789!3d30.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMzA!5s0!0!0!0!5"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
              />
            </div>

            {/* Opening Hours */}
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-6 h-6 text-orange-500" />
                <h3 className="text-2xl font-bold text-white">Opening Hours</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-gray-300">
                  <span>Monday - Friday</span>
                  <span className="text-orange-400 font-semibold">5:00 AM - 12:00 AM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Saturday</span>
                  <span className="text-orange-400 font-semibold">6:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Sunday</span>
                  <span className="text-orange-400 font-semibold">6:00 AM - 10:00 PM</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-500/20 border border-orange-500/30 rounded-lg">
                <div className="flex items-center gap-2 text-orange-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-semibold">24/7 Access for Elite Members</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your <span className="text-orange-500">Life?</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Visit us today for a free tour and trial session. No obligation, just results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              BOOK FREE TRIAL
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-bold text-lg rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GET DIRECTIONS
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}