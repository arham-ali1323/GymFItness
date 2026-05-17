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
  Play
} from 'lucide-react';

const BodyWorkout = () => {
  const { isDark } = useDashboardMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBodyPart, setSelectedBodyPart] = useState('Full Body');
  
  const bodyParts = ['Full Body', 'Upper Body', 'Lower Body', 'Core'];

  const exercises = [
    {
      id: 1,
      title: 'Jumping Jacks',
      bodyPart: 'Full Body',
      difficulty: 'Beginner',
      duration: '30 sec',
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 2,
      title: 'Push-ups',
      bodyPart: 'Upper Body',
      difficulty: 'Intermediate',
      duration: '45 sec',
      image: '/api/placeholder/300/200',
      isFavorite: true
    },
    {
      id: 3,
      title: 'Squats',
      bodyPart: 'Lower Body',
      difficulty: 'Beginner',
      duration: '40 sec',
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 4,
      title: 'Plank',
      bodyPart: 'Core',
      difficulty: 'Intermediate',
      duration: '60 sec',
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 5,
      title: 'Lunges',
      bodyPart: 'Lower Body',
      difficulty: 'Beginner',
      duration: '40 sec',
      image: '/api/placeholder/300/200',
      isFavorite: true
    },
    {
      id: 6,
      title: 'Mountain Climbers',
      bodyPart: 'Full Body',
      difficulty: 'Intermediate',
      duration: '30 sec',
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 7,
      title: 'Burpees',
      bodyPart: 'Full Body',
      difficulty: 'Advanced',
      duration: '50 sec',
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 8,
      title: 'Crunches',
      bodyPart: 'Core',
      difficulty: 'Beginner',
      duration: '30 sec',
      image: '/api/placeholder/300/200',
      isFavorite: true
    }
  ];

  const filteredExercises = exercises.filter(exercise => 
    exercise.bodyPart === selectedBodyPart &&
    exercise.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFavorite = (id: number) => {
    // Toggle favorite logic here
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
            {/* Title */}
            <div className="mb-6">
              <h2 className={cn(
                "text-xl font-bold mb-2",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Body Workout
              </h2>
              <p className={cn(
                "text-sm",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                Select a body part to view exercises
              </p>
            </div>

            {/* Body Parts */}
            <div className="space-y-2">
              {bodyParts.map(part => (
                <button
                  key={part}
                  onClick={() => setSelectedBodyPart(part)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between",
                    selectedBodyPart === part
                      ? "bg-orange-500 text-white"
                      : isDark
                        ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  <span className="font-medium">{part}</span>
                  {selectedBodyPart === part && (
                    <Play className="w-4 h-4" />
                  )}
                </button>
              ))}
            </div>

            {/* Exercise Count */}
            <div className="mt-6 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <p className={cn(
                "text-sm font-medium",
                isDark ? "text-orange-400" : "text-orange-700"
              )}>
                {filteredExercises.length} exercises found
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className={cn(
              "text-2xl font-bold",
              isDark ? "text-white" : "text-gray-900"
            )}>
              {selectedBodyPart} Exercises
            </h1>
            <p className={cn(
              "text-sm mt-1",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              Strengthen your {selectedBodyPart.toLowerCase()} with these exercises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredExercises.map((exercise) => (
              <div
                key={exercise.id}
                className={cn(
                  "rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group",
                  isDark ? "bg-slate-800" : "bg-white"
                )}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <Dumbbell className="w-16 h-16 text-white/80" />
                  </div>
                  <button
                    onClick={() => toggleFavorite(exercise.id)}
                    className={cn(
                      "absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                      exercise.isFavorite
                        ? "bg-red-500 text-white"
                        : isDark
                          ? "bg-slate-900/80 text-gray-400 hover:text-red-400"
                          : "bg-white/80 text-gray-400 hover:text-red-500"
                    )}
                  >
                    <Heart className={cn("w-4 h-4", exercise.isFavorite ? "fill-current" : "")} />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className={cn(
                    "font-semibold mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {exercise.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className={cn(
                      "px-2 py-1 rounded-full text-xs font-medium",
                      exercise.difficulty === 'Beginner' ? "bg-green-100 text-green-800" :
                      exercise.difficulty === 'Intermediate' ? "bg-yellow-100 text-yellow-800" :
                      "bg-red-100 text-red-800"
                    )}>
                      {exercise.difficulty}
                    </span>
                    <span className={cn(
                      "text-xs",
                      isDark ? "text-gray-400" : "text-gray-500"
                    )}>
                      • {exercise.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredExercises.length === 0 && (
            <div className="text-center py-12">
              <Dumbbell className={cn(
                "w-16 h-16 mx-auto mb-4",
                isDark ? "text-gray-600" : "text-gray-400"
              )} />
              <p className={cn(
                "text-lg font-medium mb-2",
                isDark ? "text-gray-300" : "text-gray-700"
              )}>
                No exercises found
              </p>
              <p className={cn(
                "text-sm",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                Try searching for a different exercise or body part
              </p>
            </div>
          )}
        </main>
      </div>

    </div>
  );
};

export default BodyWorkout;
