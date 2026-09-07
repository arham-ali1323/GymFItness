"use client";

import Banner from '@/components/contact/Banner-section'
import SubscribeBanner from '@/components/contact/Subscribe-Banner';
import Timetable from '@/components/home/classtimetable'; 

export default function Schedule() {
  return (
    <div className='bg-black'>
        <Banner />
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 text-center">
          <h1 className="font-orbitron text-4xl md:text-6xl font-black uppercase tracking-wider text-white mb-3">
            Class Schedule
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Plan your week at German Fitness. Browse our daily class timetable and find the perfect session for your fitness goals.
          </p>
        </div>
        <Timetable />
        <section className="max-w-4xl mx-auto px-4 md:px-8 pb-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            How to Get the Most From Your Training Week
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Consistency beats intensity. Aim to train three to five times per week and pick
            classes that match your goal, whether that is building strength in our weight
            training sessions, improving your fitness with cardio and combat classes, or
            recovering with mobility work. Spreading your sessions across the week keeps
            momentum high and injuries low.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            Every session is led by certified trainers who will show you the correct form and
            safely push you to do more. If you are new to the gym, our team will help you build
            a schedule that eases you in gradually. Come 15 minutes early, warm up properly, and
            stay after class for stretching. Need help choosing? Talk to a member of the German
            Fitness team and they will match you to the right classes for your goals.
          </p>
        </section>
        <SubscribeBanner />
    </div>
  )
}
