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
        <SubscribeBanner />
    </div>
  )
}
