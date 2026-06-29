"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: 'STARTER',
    price: 2999,
    originalPrice: 3999,
    description: 'Perfect for beginners starting their fitness journey',
    features: [
      'Gym equipment access',
      'Locker room & shower',
      'Free fitness assessment',
      'Mobile app access',
      'Basic nutrition guide',
      '24/7 gym access',
    ],
    popular: false,
    color: 'from-gray-600 to-gray-700',
    savings: 'Save 25%',
    badge: 'Best Value',
  },
  {
    name: 'PRO',
    price: 4999,
    originalPrice: 6999,
    description: 'Most popular choice for serious fitness enthusiasts',
    features: [
      'All Starter features',
      'Unlimited group classes',
      '2 personal training sessions/month',
      'Custom nutrition plan',
      'Progress tracking & reports',
      'Priority booking',
      'Guest passes (4/month)',
      'Free workout gear',
    ],
    popular: true,
    color: 'from-orange-500 to-orange-600',
    savings: 'Save 29%',
    badge: 'Most Popular',
  },
  {
    name: 'ELITE',
    price: 7999,
    originalPrice: 11999,
    description: 'Ultimate fitness experience with VIP treatment',
    features: [
      'All Pro features',
      'Unlimited personal training',
      'Custom meal plans & delivery',
      'VIP class booking',
      'Sauna & steam room access',
      'Massage therapy (2/month)',
      'Supplement discounts (20%)',
      'Unlimited guest passes',
      'Personal locker',
      'Free protein supplements',
    ],
    popular: false,
    color: 'from-purple-600 to-pink-600',
    savings: 'Save 33%',
    badge: 'Best Deal',
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="font-orbitron relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
            className="inline-block mb-4 px-6 py-2 bg-orange/10 border border-orange/30 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-orange font-semibold text-sm tracking-wider uppercase">
              Choose Your Plan
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase">
            CHOOSE YOUR
            <span className="block text-orange-500">TRANSFORMATION PLAN</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Invest in your health with our affordable membership plans. All plans include 24/7 access to our state-of-the-art facility and expert guidance.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span className="text-sm">7-Day Money Back</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span className="text-sm">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              <span className="text-sm">Cancel Anytime</span>
            </div>
          </div>

          {/* Billing Toggle */}
    <motion.div
  className="inline-flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center gap-2 sm:gap-4 bg-dark-100 p-2 rounded-2xl"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
>
  <button
    onClick={() => setBillingCycle('monthly')}
    className={`flex-1 px-6 py-3 rounded-xl sm:rounded-full font-semibold text-center transition-all ${
      billingCycle === 'monthly'
        ? 'bg-orange text-white'
        : 'text-gray-400 hover:text-white'
    }`}
  >
    Monthly
  </button>

  <button
    onClick={() => setBillingCycle('yearly')}
    className={`
      flex-1
      px-6 py-3
      rounded-xl sm:rounded-full
      font-semibold
      text-center
      transition-all
      ${
        billingCycle === 'yearly'
          ? 'bg-orange text-white'
          : 'text-gray-400 hover:text-white'
      }
    `}
  >
    <span className="flex items-center justify-center gap-2">
      Yearly
      <span className="px-2 py-1 bg-green-400/20 text-green-400 text-xs rounded-full whitespace-nowrap">
        Save 20%
      </span>
    </span>
  </button>
</motion.div>

        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                className={`relative h-full group ${plan.popular ? 'md:-mt-8' : ''}`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-6 py-2 bg-gradient-to-r from-orange to-orange-light rounded-full"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-white fill-white" />
                      <span className="text-white font-black text-sm uppercase tracking-wider">
                        Most Popular
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Card */}
                <div className={`relative h-full bg-dark-100 rounded-3xl p-8 border-2 ${
                  plan.popular ? 'border-orange' : 'border-orange/10'
                } hover:border-orange/50 transition-all`}>
                  
                  {/* Plan Name */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-black text-white uppercase mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Original Price & Savings */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500 line-through text-lg">Rs.{plan.originalPrice.toLocaleString()}/month</span>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold">
                        {plan.savings}
                      </span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                        Rs.{plan.price.toLocaleString()}
                      </span>
                      <span className="text-gray-400 text-lg font-semibold">
                        /month
                      </span>
                    </div>
                    <p className="text-green-400 text-sm mt-2">
                      Limited time offer - Save Rs.{(plan.originalPrice - plan.price).toLocaleString()}/month
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-orange/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <Check className="w-3 h-3 text-orange" />
                        </div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-bold text-lg uppercase tracking-wider transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/25'
                        : 'bg-transparent border-2 border-orange-500/30 text-orange-500 hover:bg-orange-500/10 hover:border-orange-500'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.popular ? (
                      <span className="flex items-center justify-center gap-2">
                        <Zap className="w-5 h-5" />
                        JOIN NOW - LIMITED OFFER
                      </span>
                    ) : (
                      'START TODAY'
                    )}
                  </motion.button>

                  {/* Urgency Text */}
                  <div className="text-center mt-4">
                    <p className="text-orange-400 text-sm font-semibold">
                      {plan.popular ? 'Only 5 spots left at this price!' : 'Join 500+ happy members'}
                    </p>
                  </div>

                  {/* Glow Effect */}
                  {plan.popular && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange/10 via-orange/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                    />
                  )}
                </div>

                {/* Outer Glow for Popular */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-orange/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-20"
                  />
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-4">
            All plans include a <span className="text-orange font-semibold">7-day money-back guarantee</span>
          </p>
          <p className="text-gray-500 text-sm">
            Need a custom plan for your organization? <a href="/contact" className="text-orange hover:underline">Contact us</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
