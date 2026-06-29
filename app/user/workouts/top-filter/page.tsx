"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Dumbbell, TrendingUp, Clock, Flame, Users, Star, Filter } from 'lucide-react';

const WorkoutTopFilter = () => {
  const { isDark } = useDashboardMode();
  const [sortBy, setSortBy] = useState('popular');
  const [timeFilter, setTimeFilter] = useState('all');

  const workouts = [
    {
      id: 1,
      name: 'HIIT Full Body Blast',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      reviews: 234,
      participants: 1520,
      duration: 30,
      difficulty: 'advanced',
      calories: 450,
      category: 'cardio',
      trending: true,
      popular: true
    },
    {
      id: 2,
      name: 'Power Yoga Flow',
      instructor: 'Mike Chen',
      rating: 4.9,
      reviews: 189,
      participants: 980,
      duration: 45,
      difficulty: 'intermediate',
      calories: 280,
      category: 'flexibility',
      trending: true,
      popular: false
    },
    {
      id: 3,
      name: 'Strength Training Basics',
      instructor: 'Emily Davis',
      rating: 4.7,
      reviews: 312,
      participants: 2100,
      duration: 40,
      difficulty: 'beginner',
      calories: 320,
      category: 'strength',
      trending: false,
      popular: true
    },
    {
      id: 4,
      name: 'Core Crusher Pro',
      instructor: 'Alex Turner',
      rating: 4.6,
      reviews: 156,
      participants: 750,
      duration: 25,
      difficulty: 'advanced',
      calories: 380,
      category: 'core',
      trending: true,
      popular: false
    },
    {
      id: 5,
      name: 'Morning Stretch Routine',
      instructor: 'Lisa Wang',
      rating: 4.9,
      reviews: 421,
      participants: 3200,
      duration: 20,
      difficulty: 'beginner',
      calories: 120,
      category: 'flexibility',
      trending: false,
      popular: true
    },
    {
      id: 6,
      name: 'Cardio Dance Party',
      instructor: 'Carlos Rodriguez',
      rating: 4.8,
      reviews: 267,
      participants: 1450,
      duration: 35,
      difficulty: 'intermediate',
      calories: 400,
      category: 'cardio',
      trending: true,
      popular: true
    }
  ];

  const getSortedWorkouts = () => {
    let sorted = [...workouts];
    
    switch (sortBy) {
      case 'popular':
        sorted.sort((a, b) => b.participants - a.participants);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'recent':
        sorted.sort((a, b) => b.id - a.id);
        break;
      case 'calories':
        sorted.sort((a, b) => b.calories - a.calories);
        break;
      default:
        break;
    }

    if (timeFilter !== 'all') {
      sorted = sorted.filter(w => {
        if (timeFilter === 'short') return w.duration <= 25;
        if (timeFilter === 'medium') return w.duration > 25 && w.duration <= 35;
        if (timeFilter === 'long') return w.duration > 35;
        return true;
      });
    }

    return sorted;
  };

  const sortedWorkouts = getSortedWorkouts();

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "w-4 h-4",
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            )}
          />
        ))}
        <span className={cn("text-sm ml-1", isDark ? "text-slate-300" : "text-slate-700")}>
          {rating}
        </span>
      </div>
    );
  };

  return (
    <div className={cn("min-h-screen p-6 overflow-hidden", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Top Workouts
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Discover the most popular and trending workouts
          </p>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <Filter className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
            <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
              Sort by:
            </span>
          </div>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={cn(
              "px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
              isDark
                ? "bg-slate-800 text-slate-100 border-slate-700"
                : "bg-white text-slate-900 border-slate-300"
            )}
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="recent">Recently Added</option>
            <option value="calories">Most Calories</option>
          </select>

          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className={cn(
              "px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
              isDark
                ? "bg-slate-800 text-slate-100 border-slate-700"
                : "bg-white text-slate-900 border-slate-300"
            )}
          >
            <option value="all">All Durations</option>
            <option value="short">Quick (&le;25min)</option>
            <option value="medium">Medium (26-35min)</option>
            <option value="long">Long (&gt;35min)</option>
          </select>
        </div>

        {/* Workout List */}
        <div className="space-y-4">
          {sortedWorkouts.map((workout, index) => (
            <div
              key={workout.id}
              className={cn(
                "rounded-xl p-6 border hover:shadow-lg transition-all cursor-pointer",
                isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
              )}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Workout Image */}
                <div className="lg:w-48 h-32 bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Dumbbell className="w-16 h-16 text-white" />
                </div>

                {/* Workout Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className={cn("text-lg font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>
                          {workout.name}
                        </h3>
                        {workout.trending && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                            🔥 Trending
                          </span>
                        )}
                        {workout.popular && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            ⭐ Popular
                          </span>
                        )}
                      </div>
                      <p className={cn("text-sm mb-2", isDark ? "text-slate-400" : "text-slate-600")}>
                        by {workout.instructor}
                      </p>
                      {renderStars(workout.rating)}
                      <p className={cn("text-xs mt-1", isDark ? "text-slate-500" : "text-slate-500")}>
                        {workout.reviews} reviews
                      </p>
                    </div>
                  </div>

                  {/* Workout Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Users className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                      <div>
                        <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>Participants</p>
                        <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {workout.participants.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                      <div>
                        <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>Duration</p>
                        <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {workout.duration} min
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Flame className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                      <div>
                        <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>Calories</p>
                        <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {workout.calories}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                      <div>
                        <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>Level</p>
                        <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {workout.difficulty}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      workout.category === 'cardio' ? "bg-red-100 text-red-800" :
                      workout.category === 'strength' ? "bg-blue-100 text-blue-800" :
                      workout.category === 'flexibility' ? "bg-green-100 text-green-800" :
                      "bg-purple-100 text-purple-800"
                    )}>
                      {workout.category}
                    </span>
                    <button className={cn(
                      "px-6 py-2 rounded-lg text-sm font-medium transition-colors",
                      "bg-orange-500 text-white hover:bg-orange-600"
                    )}>
                      Start Workout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedWorkouts.length === 0 && (
          <div className="text-center py-12">
            <Filter className={cn("w-12 h-12 mx-auto mb-4", isDark ? "text-slate-600" : "text-slate-400")} />
            <p className={cn("text-lg font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
              No workouts found
            </p>
            <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
              Try adjusting your filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutTopFilter;
