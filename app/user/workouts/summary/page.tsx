"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Calendar, Clock, Flame, Target, TrendingUp, Award, Filter } from 'lucide-react';

const WorkoutSummary = () => {
  const { isDark } = useDashboardMode();
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('calories');

  const weeklyStats = {
    totalWorkouts: 5,
    totalDuration: 225, // minutes
    totalCalories: 1850,
    avgHeartRate: 142,
    personalRecords: 2,
    streak: 7
  };

  const recentWorkouts = [
    {
      id: 1,
      name: 'Upper Body Strength',
      date: '2024-03-24',
      duration: 45,
      calories: 320,
      exercises: 8,
      heartRate: 145,
      difficulty: 'intermediate',
      completed: true
    },
    {
      id: 2,
      name: 'HIIT Cardio Blast',
      date: '2024-03-23',
      duration: 30,
      calories: 450,
      exercises: 6,
      heartRate: 165,
      difficulty: 'advanced',
      completed: true
    },
    {
      id: 3,
      name: 'Yoga Flow',
      date: '2024-03-22',
      duration: 60,
      calories: 180,
      exercises: 12,
      heartRate: 95,
      difficulty: 'beginner',
      completed: true
    },
    {
      id: 4,
      name: 'Leg Day',
      date: '2024-03-21',
      duration: 50,
      calories: 380,
      exercises: 7,
      heartRate: 140,
      difficulty: 'intermediate',
      completed: true
    },
    {
      id: 5,
      name: 'Core Workout',
      date: '2024-03-20',
      duration: 25,
      calories: 200,
      exercises: 5,
      heartRate: 130,
      difficulty: 'beginner',
      completed: true
    }
  ];

  const achievements = [
    {
      id: 1,
      name: 'Week Warrior',
      description: 'Complete 7 workouts in a week',
      icon: '🔥',
      progress: 100,
      unlocked: true
    },
    {
      id: 2,
      name: 'Calorie Crusher',
      description: 'Burn 2000 calories in a week',
      icon: '💪',
      progress: 92,
      unlocked: false
    },
    {
      id: 3,
      name: 'Early Bird',
      description: 'Complete 5 morning workouts',
      icon: '🌅',
      progress: 60,
      unlocked: false
    },
    {
      id: 4,
      name: 'Consistency King',
      description: '30-day workout streak',
      icon: '👑',
      progress: 23,
      unlocked: false
    }
  ];

  const monthlyData = [
    { month: 'Jan', workouts: 12, calories: 4800, duration: 540 },
    { month: 'Feb', workouts: 14, calories: 5200, duration: 630 },
    { month: 'Mar', workouts: 18, calories: 6800, duration: 810 }
  ];

  const getMetricValue = (metric: string) => {
    switch (metric) {
      case 'workouts':
        return weeklyStats.totalWorkouts;
      case 'duration':
        return weeklyStats.totalDuration;
      case 'calories':
        return weeklyStats.totalCalories;
      case 'heartrate':
        return weeklyStats.avgHeartRate;
      default:
        return 0;
    }
  };

  const getMetricLabel = (metric: string) => {
    switch (metric) {
      case 'workouts':
        return 'Workouts';
      case 'duration':
        return 'Minutes';
      case 'calories':
        return 'Calories';
      case 'heartrate':
        return 'Avg BPM';
      default:
        return '';
    }
  };

  return (
    <div className={cn("min-h-screen p-6 overflow-hidden", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Workout Summary
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Track your fitness progress and achievements
          </p>
        </div>

        {/* Period Selector */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex gap-2">
            {['week', 'month', 'year'].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  selectedPeriod === period
                    ? "bg-orange-500 text-white"
                    : isDark
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            {['workouts', 'duration', 'calories', 'heartrate'].map((metric) => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  selectedMetric === metric
                    ? "bg-orange-500 text-white"
                    : isDark
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                {getMetricLabel(metric)}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <Target className={cn("w-4 h-4 text-orange-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Total Workouts
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {weeklyStats.totalWorkouts}
            </p>
          </div>

          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <Clock className={cn("w-4 h-4 text-blue-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Duration
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {weeklyStats.totalDuration}
            </p>
            <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
              minutes
            </p>
          </div>

          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <Flame className={cn("w-4 h-4 text-red-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Calories
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {weeklyStats.totalCalories}
            </p>
          </div>

          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className={cn("w-4 h-4 text-green-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Avg Heart Rate
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {weeklyStats.avgHeartRate}
            </p>
            <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
              BPM
            </p>
          </div>

          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <Award className={cn("w-4 h-4 text-yellow-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                PRs
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {weeklyStats.personalRecords}
            </p>
          </div>

          <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className={cn("w-4 h-4 text-purple-500")} />
              <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Streak
              </span>
            </div>
            <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              {weeklyStats.streak}
            </p>
            <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
              days
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Workouts */}
          <div className="lg:col-span-2">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Recent Workouts
              </h2>
              <div className="space-y-4">
                {recentWorkouts.map((workout) => (
                  <div
                    key={workout.id}
                    className={cn(
                      "p-4 rounded-lg border",
                      isDark ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"
                    )}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className={cn("font-medium mb-1", isDark ? "text-slate-100" : "text-slate-900")}>
                          {workout.name}
                        </h3>
                        <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                          {workout.date}
                        </p>
                      </div>
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        workout.difficulty === 'beginner' ? "bg-green-100 text-green-800" :
                        workout.difficulty === 'intermediate' ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      )}>
                        {workout.difficulty}
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className={cn("block text-xs mb-1", isDark ? "text-slate-500" : "text-slate-500")}>
                          Duration
                        </span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {workout.duration} min
                        </span>
                      </div>
                      <div>
                        <span className={cn("block text-xs mb-1", isDark ? "text-slate-500" : "text-slate-500")}>
                          Calories
                        </span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {workout.calories}
                        </span>
                      </div>
                      <div>
                        <span className={cn("block text-xs mb-1", isDark ? "text-slate-500" : "text-slate-500")}>
                          Exercises
                        </span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {workout.exercises}
                        </span>
                      </div>
                      <div>
                        <span className={cn("block text-xs mb-1", isDark ? "text-slate-500" : "text-slate-500")}>
                          Heart Rate
                        </span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {workout.heartRate} BPM
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={cn(
                      "p-3 rounded-lg border",
                      achievement.unlocked
                        ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                        : isDark
                        ? "border-slate-600 bg-slate-700"
                        : "border-slate-200 bg-slate-50"
                    )}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-lg",
                        achievement.unlocked
                          ? "bg-orange-500"
                          : isDark
                          ? "bg-slate-600"
                          : "bg-slate-200"
                      )}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={cn("font-medium text-sm", isDark ? "text-slate-100" : "text-slate-900")}>
                          {achievement.name}
                        </h3>
                        <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                          Progress
                        </span>
                        <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                          {achievement.progress}%
                        </span>
                      </div>
                      <div className={cn("w-full rounded-full h-2", isDark ? "bg-slate-600" : "bg-slate-200")}>
                        <div
                          className={cn(
                            "h-2 rounded-full transition-all duration-500",
                            achievement.unlocked
                              ? "bg-orange-500"
                              : "bg-blue-500"
                          )}
                          style={{ width: `${achievement.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSummary;
