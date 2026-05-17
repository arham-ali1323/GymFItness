"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Filter,
  ChevronDown,
  Dumbbell,
  Clock,
  Target,
  Flame,
  Users,
} from 'lucide-react';
import { useDashboardMode } from '@/components/dashboard/dashboard-mode-provider';
import { cn } from '@/lib/utils';
import CreateWorkoutModal from '@/components/dashboard/create-workout-modal';
import EditWorkoutModal from '@/components/dashboard/edit-workout-modal';

interface Workout {
  id: string;
  name: string;
  category: string;
  duration: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  calories: number;
  equipment: string[];
  description: string;
  sets?: number;
  reps?: number;
  restTime?: number;
  createdAt: string;
  updatedAt: string;
}

const mockWorkouts: Workout[] = [
  {
    id: '1',
    name: 'Morning Full Body Blast',
    category: 'Strength Training',
    duration: 45,
    difficulty: 'Intermediate',
    calories: 350,
    equipment: ['Dumbbells', 'Bench', 'Mat'],
    description: 'Complete full body workout targeting all major muscle groups',
    sets: 3,
    reps: 12,
    restTime: 60,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    name: 'HIIT Cardio Session',
    category: 'Cardio',
    duration: 30,
    difficulty: 'Advanced',
    calories: 400,
    equipment: ['Treadmill', 'Jump Rope'],
    description: 'High intensity interval training for maximum calorie burn',
    sets: 5,
    reps: 1,
    restTime: 30,
    createdAt: '2024-01-14T09:00:00Z',
    updatedAt: '2024-01-14T09:00:00Z',
  },
  {
    id: '3',
    name: 'Yoga Flow',
    category: 'Flexibility',
    duration: 60,
    difficulty: 'Beginner',
    calories: 200,
    equipment: ['Mat', 'Block'],
    description: 'Gentle yoga flow for flexibility and mindfulness',
    createdAt: '2024-01-13T08:00:00Z',
    updatedAt: '2024-01-13T08:00:00Z',
  },
];

const categories = ['All', 'Strength Training', 'Cardio', 'Flexibility', 'CrossFit', 'Yoga'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function WorkoutCrud() {
  const { isDark } = useDashboardMode();
  const [workouts, setWorkouts] = useState<Workout[]>(mockWorkouts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = workout.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workout.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || workout.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || workout.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const handleCreate = (newWorkout: any) => {
    const workout: Workout = {
      ...newWorkout,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setWorkouts([workout, ...workouts]);
  };

  const handleEdit = (workout: Workout) => {
    setSelectedWorkout(workout);
    setIsEditModalOpen(true);
  };

  const handleUpdate = (updatedWorkout: any) => {
    setWorkouts(workouts.map(w => w.id === updatedWorkout.id ? updatedWorkout : w));
    setIsEditModalOpen(false);
    setSelectedWorkout(null);
  };

  const handleDelete = (workout: Workout) => {
    setSelectedWorkout(workout);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedWorkout) {
      setWorkouts(workouts.filter(w => w.id !== selectedWorkout.id));
      setIsDeleteModalOpen(false);
      setSelectedWorkout(null);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-500 bg-green-500/10';
      case 'Intermediate': return 'text-yellow-500 bg-yellow-500/10';
      case 'Advanced': return 'text-red-500 bg-red-500/10';
      default: return 'text-gray-500 bg-gray-500/10';
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className={cn("text-3xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                Workout Management
              </h1>
              <p className={cn("text-lg mt-2", isDark ? "text-slate-400" : "text-slate-600")}>
                Create, edit, and manage your workout routines
              </p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Workout
            </button>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={cn(
            "rounded-2xl p-6 mb-6 border",
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
          )}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5", isDark ? "text-slate-400" : "text-slate-500")} />
                <input
                  type="text"
                  placeholder="Search workouts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                  )}
                />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-lg border transition-colors",
                isDark
                  ? "bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"
                  : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50"
              )}
            >
              <Filter className="w-5 h-5" />
              Filters
              <ChevronDown className={cn("w-4 h-4 transition-transform", showFilters && "rotate-180")} />
            </button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
            >
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-100"
                      : "bg-white border-slate-300 text-slate-900"
                  )}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Difficulty
                </label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-100"
                      : "bg-white border-slate-300 text-slate-900"
                  )}
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout, index) => (
            <motion.div
              key={workout.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={cn(
                "rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300",
                isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
              )}
            >
              <div className="h-48 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <Dumbbell className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={cn("text-lg font-semibold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
                      {workout.name}
                    </h3>
                    <span className={cn(
                      "inline-block px-2 py-1 rounded-full text-xs font-medium",
                      getDifficultyColor(workout.difficulty)
                    )}>
                      {workout.difficulty}
                    </span>
                  </div>
                </div>
                
                <p className={cn("text-sm mb-4", isDark ? "text-slate-400" : "text-slate-600")}>
                  {workout.description}
                </p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                      {workout.duration} min
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                      {workout.calories} cal
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(workout)}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg transition-colors",
                      isDark
                        ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    )}
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(workout)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredWorkouts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "rounded-2xl p-12 text-center border",
              isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
            )}
          >
            <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Dumbbell className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className={cn("text-xl font-semibold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
              No workouts found
            </h3>
            <p className={cn("mb-6", isDark ? "text-slate-400" : "text-slate-600")}>
              {searchTerm || selectedCategory !== 'All' || selectedDifficulty !== 'All'
                ? 'Try adjusting your search or filters'
                : 'Get started by creating your first workout'
              }
            </p>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
              Create Workout
            </button>
          </motion.div>
        )}
      </div>

      {/* Create Workout Modal */}
      <CreateWorkoutModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreate}
      />

      {/* Edit Workout Modal */}
      <EditWorkoutModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onUpdate={handleUpdate}
        workout={selectedWorkout}
      />
    </div>
  );
}
