"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Plus, X, Dumbbell, Clock, Target, Zap } from 'lucide-react';

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  rest: number;
  notes: string;
}

interface WorkoutDay {
  id: string;
  name: string;
  exercises: Exercise[];
}

const CreateWorkout = () => {
  const { isDark } = useDashboardMode();
  const [workoutName, setWorkoutName] = useState('');
  const [workoutDescription, setWorkoutDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('strength');
  const [difficulty, setDifficulty] = useState('intermediate');
  const [estimatedDuration, setEstimatedDuration] = useState(45);
  const [exercises, setExercises] = useState<Exercise[]>([
    { id: '1', name: '', sets: 3, reps: 10, rest: 60, notes: '' }
  ]);

  const exerciseLibrary = [
    { name: 'Bench Press', category: 'chest', difficulty: 'intermediate' },
    { name: 'Squats', category: 'legs', difficulty: 'beginner' },
    { name: 'Deadlifts', category: 'back', difficulty: 'advanced' },
    { name: 'Pull-ups', category: 'back', difficulty: 'intermediate' },
    { name: 'Shoulder Press', category: 'shoulders', difficulty: 'beginner' },
    { name: 'Bicep Curls', category: 'arms', difficulty: 'beginner' },
    { name: 'Tricep Dips', category: 'arms', difficulty: 'intermediate' },
    { name: 'Leg Press', category: 'legs', difficulty: 'beginner' },
    { name: 'Rows', category: 'back', difficulty: 'intermediate' },
    { name: 'Lunges', category: 'legs', difficulty: 'beginner' }
  ];

  const categories = ['strength', 'cardio', 'flexibility', 'hiit'];
  const difficulties = ['beginner', 'intermediate', 'advanced'];

  const addExercise = () => {
    const newExercise: Exercise = {
      id: Date.now().toString(),
      name: '',
      sets: 3,
      reps: 10,
      rest: 60,
      notes: ''
    };
    setExercises([...exercises, newExercise]);
  };

  const removeExercise = (id: string) => {
    if (exercises.length > 1) {
      setExercises(exercises.filter(ex => ex.id !== id));
    }
  };

  const updateExercise = (id: string, field: keyof Exercise, value: string | number) => {
    setExercises(exercises.map(ex => 
      ex.id === id ? { ...ex, [field]: value } : ex
    ));
  };

  const calculateTotalDuration = () => {
    const exerciseTime = exercises.reduce((total, ex) => {
      const setTime = (ex.sets * 15) + (ex.sets - 1) * ex.rest; // 15 seconds per set + rest
      return total + setTime;
    }, 0);
    return Math.ceil((exerciseTime + 300) / 60); // Add 5 minutes warm-up/cool-down
  };

  const handleSaveWorkout = () => {
    const workout = {
      id: Date.now().toString(),
      name: workoutName,
      description: workoutDescription,
      category: selectedCategory,
      difficulty,
      duration: calculateTotalDuration(),
      exercises,
      createdAt: new Date().toISOString()
    };
    
    console.log('Saving workout:', workout);
    // In a real app, save to backend
    alert('Workout saved successfully!');
  };

  return (
    <div className={cn("min-h-screen p-6 overflow-hidden", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Create Workout
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Design your custom workout routine
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Workout Details */}
          <div className="lg:col-span-1">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Workout Details
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Workout Name
                  </label>
                  <input
                    type="text"
                    value={workoutName}
                    onChange={(e) => setWorkoutName(e.target.value)}
                    placeholder="e.g., Upper Body Strength"
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600 placeholder:text-slate-500"
                        : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                    )}
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Description
                  </label>
                  <textarea
                    value={workoutDescription}
                    onChange={(e) => setWorkoutDescription(e.target.value)}
                    placeholder="Describe your workout..."
                    rows={3}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600 placeholder:text-slate-500"
                        : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                    )}
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Difficulty
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  >
                    {difficulties.map(diff => (
                      <option key={diff} value={diff}>
                        {diff.charAt(0).toUpperCase() + diff.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                      Estimated Duration
                    </span>
                  </div>
                  <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {calculateTotalDuration()} minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Exercise Library */}
            <div className={cn("rounded-xl p-6 border mt-6", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Exercise Library
              </h2>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {exerciseLibrary.map((exercise, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-2 rounded cursor-pointer transition-colors",
                      isDark ? "hover:bg-slate-700" : "hover:bg-slate-100"
                    )}
                    onClick={() => {
                      if (exercises.length > 0) {
                        updateExercise(exercises[exercises.length - 1].id, 'name', exercise.name);
                      }
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        {exercise.name}
                      </span>
                      <div className="flex gap-1">
                        <span className={cn(
                          "px-2 py-1 rounded text-xs",
                          exercise.difficulty === 'beginner' ? "bg-green-100 text-green-800" :
                          exercise.difficulty === 'intermediate' ? "bg-yellow-100 text-yellow-800" :
                          "bg-red-100 text-red-800"
                        )}>
                          {exercise.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exercises */}
          <div className="lg:col-span-2">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <div className="flex justify-between items-center mb-4">
                <h2 className={cn("text-lg font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>
                  Exercises ({exercises.length})
                </h2>
                <button
                  onClick={addExercise}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  <Plus className="w-4 h-4" />
                  Add Exercise
                </button>
              </div>

              <div className="space-y-4">
                {exercises.map((exercise, index) => (
                  <div
                    key={exercise.id}
                    className={cn(
                      "p-4 rounded-lg border",
                      isDark ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"
                    )}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <span className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
                          "bg-orange-500 text-white"
                        )}>
                          {index + 1}
                        </span>
                        <input
                          type="text"
                          value={exercise.name}
                          onChange={(e) => updateExercise(exercise.id, 'name', e.target.value)}
                          placeholder="Exercise name"
                          className={cn(
                            "font-medium bg-transparent border-b border-transparent hover:border-slate-400 focus:border-orange-500 focus:outline-none",
                            isDark ? "text-slate-100" : "text-slate-900"
                          )}
                        />
                      </div>
                      {exercises.length > 1 && (
                        <button
                          onClick={() => removeExercise(exercise.id)}
                          className={cn(
                            "p-1 rounded hover:bg-red-100 transition-colors",
                            isDark ? "hover:bg-red-900/20" : ""
                          )}
                        >
                          <X className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                        </button>
                      )}
                    </div>

                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div>
                        <label className={cn("block text-xs font-medium mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                          Sets
                        </label>
                        <input
                          type="number"
                          value={exercise.sets}
                          onChange={(e) => updateExercise(exercise.id, 'sets', parseInt(e.target.value) || 1)}
                          min="1"
                          max="10"
                          className={cn(
                            "w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-orange-500",
                            isDark
                              ? "bg-slate-800 text-slate-100 border-slate-600"
                              : "bg-white text-slate-900 border-slate-300"
                          )}
                        />
                      </div>
                      <div>
                        <label className={cn("block text-xs font-medium mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                          Reps
                        </label>
                        <input
                          type="number"
                          value={exercise.reps}
                          onChange={(e) => updateExercise(exercise.id, 'reps', parseInt(e.target.value) || 1)}
                          min="1"
                          max="100"
                          className={cn(
                            "w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-orange-500",
                            isDark
                              ? "bg-slate-800 text-slate-100 border-slate-600"
                              : "bg-white text-slate-900 border-slate-300"
                          )}
                        />
                      </div>
                      <div>
                        <label className={cn("block text-xs font-medium mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                          Rest (s)
                        </label>
                        <input
                          type="number"
                          value={exercise.rest}
                          onChange={(e) => updateExercise(exercise.id, 'rest', parseInt(e.target.value) || 30)}
                          min="0"
                          max="300"
                          step="30"
                          className={cn(
                            "w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-orange-500",
                            isDark
                              ? "bg-slate-800 text-slate-100 border-slate-600"
                              : "bg-white text-slate-900 border-slate-300"
                          )}
                        />
                      </div>
                      <div>
                        <label className={cn("block text-xs font-medium mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                          Total Time
                        </label>
                        <div className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {Math.ceil((exercise.sets * 15 + (exercise.sets - 1) * exercise.rest) / 60)}m
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className={cn("block text-xs font-medium mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                        Notes
                      </label>
                      <textarea
                        value={exercise.notes}
                        onChange={(e) => updateExercise(exercise.id, 'notes', e.target.value)}
                        placeholder="Add notes about form, modifications, etc."
                        rows={2}
                        className={cn(
                          "w-full px-2 py-1 text-sm border rounded focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none",
                          isDark
                            ? "bg-slate-800 text-slate-100 border-slate-600 placeholder:text-slate-500"
                            : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Save Button */}
              <div className="mt-6 flex gap-4">
                <button
                  onClick={handleSaveWorkout}
                  disabled={!workoutName || exercises.some(ex => !ex.name)}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                    !workoutName || exercises.some(ex => !ex.name)
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  <Zap className="w-4 h-4" />
                  Save Workout
                </button>
                
                <button
                  onClick={() => {
                    setWorkoutName('');
                    setWorkoutDescription('');
                    setExercises([{ id: '1', name: '', sets: 3, reps: 10, rest: 60, notes: '' }]);
                  }}
                  className={cn(
                    "px-6 py-3 border rounded-lg font-medium transition-colors",
                    isDark
                      ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                      : "border-slate-300 text-slate-700 hover:bg-slate-100"
                  )}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWorkout;
