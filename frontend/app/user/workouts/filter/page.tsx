"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { 
  Dumbbell, 
  Search, 
  Heart, 
  Moon, 
  Bell, 
  Globe, 
  User,
  X,
  Filter
} from 'lucide-react';

const WorkoutFilter = () => {
  const { isDark } = useDashboardMode();
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter states
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);

  const goals = ['Stretch', 'Legs', 'Yoga', 'Boxing', 'Running', 'Personal', 'Arms', 'Chest'];
  const prices = ['Free', 'Premium'];
  const levels = ['Beginner', 'Medium', 'Advanced'];
  const durations = ['15-20 min', '20-30 min', '30-40 min'];
  const equipment = ['Kettlebell', 'Dumbbells', 'Yoga mat'];

  const workouts = [
    {
      id: 1,
      title: 'Strength & Conditioning',
      difficulty: 'Beginner',
      duration: '20 sec',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Power Yoga Flow',
      difficulty: 'Beginner',
      duration: '20 sec',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=300&h=200&fit=crop&crop=center',
      isFavorite: true
    },
    {
      id: 3,
      title: 'HIIT Cardio Blast',
      difficulty: 'Medium',
      duration: '30 sec',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Core Crusher',
      difficulty: 'Advanced',
      duration: '25 sec',
      image: 'https://images.unsplash.com/photo-1506629905687-d4230a8338f0?w=300&h=200&fit=crop&crop=center',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Upper Body Pump',
      difficulty: 'Medium',
      duration: '35 sec',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center',
      isFavorite: true
    },
    {
      id: 6,
      title: 'Morning Stretch',
      difficulty: 'Beginner',
      duration: '15 sec',
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=300&h=200&fit=crop&crop=center',
      isFavorite: false
    }
  ];

  const toggleGoal = (goal: string) => {
    setSelectedGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const toggleEquipment = (equip: string) => {
    setSelectedEquipment(prev => 
      prev.includes(equip) 
        ? prev.filter(e => e !== equip)
        : [...prev, equip]
    );
  };

  const toggleFavorite = (id: number) => {
    // Toggle favorite logic here
  };

  const resetFilters = () => {
    setSelectedGoals([]);
    setSelectedPrice('');
    setSelectedLevel('');
    setSelectedDuration('');
    setSelectedEquipment([]);
  };

  return (
    <div className={cn("min-h-screen flex flex-col overflow-hidden", isDark ? "bg-black" : "bg-gray-50")}>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={cn(
          "w-80 border-r overflow-hidden",
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200"
        )}>
          <div className="p-6">
            {/* Create Personal Training Section */}
            <div className={cn(
              "rounded-xl p-4 mb-6",
              isDark ? "bg-gradient-to-r from-orange-600 to-orange-700" : "bg-gradient-to-r from-orange-500 to-orange-600"
            )}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Create Personal Training</h3>
                  <p className="text-white/80 text-sm">Build your custom workout</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-white/20 rounded"></div>
                <div className="w-8 h-8 bg-white/20 rounded"></div>
              </div>
            </div>

            {/* Your Goals Filter */}
            <div className="mb-6">
              <h3 className={cn(
                "font-semibold mb-3",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Your Goals
              </h3>
              <div className="flex flex-wrap gap-2">
                {goals.map(goal => (
                  <button
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm transition-colors",
                      selectedGoals.includes(goal)
                        ? "bg-orange-500 text-white"
                        : isDark
                          ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    )}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="mb-6">
              <h3 className={cn(
                "font-semibold mb-3",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Price
              </h3>
              <div className="space-y-2">
                {prices.map(price => (
                  <label key={price} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === price}
                      onChange={() => setSelectedPrice(price)}
                      className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                    />
                    <span className={cn(
                      "text-sm",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}>
                      {price}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Level Filter */}
            <div className="mb-6">
              <h3 className={cn(
                "font-semibold mb-3",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Level
              </h3>
              <div className="space-y-2">
                {levels.map(level => (
                  <label key={level} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="level"
                      checked={selectedLevel === level}
                      onChange={() => setSelectedLevel(level)}
                      className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                    />
                    <span className={cn(
                      "text-sm",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}>
                      {level}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration Filter */}
            <div className="mb-6">
              <h3 className={cn(
                "font-semibold mb-3",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Duration
              </h3>
              <div className="space-y-2">
                {durations.map(duration => (
                  <label key={duration} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="duration"
                      checked={selectedDuration === duration}
                      onChange={() => setSelectedDuration(duration)}
                      className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                    />
                    <span className={cn(
                      "text-sm",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}>
                      {duration}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Equipment Filter */}
            <div className="mb-6">
              <h3 className={cn(
                "font-semibold mb-3",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Equipment
              </h3>
              <div className="space-y-2">
                {equipment.map(equip => (
                  <label key={equip} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedEquipment.includes(equip)}
                      onChange={() => toggleEquipment(equip)}
                      className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                    />
                    <span className={cn(
                      "text-sm",
                      isDark ? "text-gray-300" : "text-gray-700"
                    )}>
                      {equip}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={resetFilters}
                className={cn(
                  "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                  isDark
                    ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                Reset
              </button>
              <button className={cn(
                "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                "bg-orange-500 text-white hover:bg-orange-600"
              )}>
                Apply
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {workouts.map((workout) => (
              <div
                key={workout.id}
                className={cn(
                  "rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group",
                  isDark ? "bg-slate-800" : "bg-white"
                )}
              >
                <div className="relative">
                  <img 
                    src={workout.image} 
                    alt={workout.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <button
                    onClick={() => toggleFavorite(workout.id)}
                    className={cn(
                      "absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                      workout.isFavorite
                        ? "bg-red-500 text-white"
                        : isDark
                          ? "bg-slate-900/80 text-gray-400 hover:text-red-400"
                          : "bg-white/80 text-gray-400 hover:text-red-500"
                    )}
                  >
                    <Heart className={cn("w-4 h-4", workout.isFavorite ? "fill-current" : "")} />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className={cn(
                    "font-semibold mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {workout.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      workout.difficulty === 'Beginner' ? "bg-green-100 text-green-800" :
                      workout.difficulty === 'Medium' ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    )}>
                      {workout.difficulty}
                    </span>
                    <span className={cn(
                      "text-xs",
                      isDark ? "text-gray-400" : "text-gray-500"
                    )}>
                      • {workout.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

    </div>
  );
};

export default WorkoutFilter;
