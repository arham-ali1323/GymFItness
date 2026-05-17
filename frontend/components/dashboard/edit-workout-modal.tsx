"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Dumbbell } from 'lucide-react';
import { useDashboardMode } from '@/components/dashboard/dashboard-mode-provider';
import { cn } from '@/lib/utils';

interface WorkoutFormData {
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
  updatedAt?: string;
}

interface EditWorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (workout: WorkoutFormData) => void;
  workout: WorkoutFormData | null;
}

const categories = ['Strength Training', 'Cardio', 'Flexibility', 'CrossFit', 'Yoga'];
const difficulties = ['Beginner', 'Intermediate', 'Advanced'];
const equipmentOptions = [
  'Dumbbells', 'Barbell', 'Bench', 'Mat', 'Treadmill', 'Elliptical', 
  'Stationary Bike', 'Jump Rope', 'Kettlebells', 'Resistance Bands',
  'Pull-up Bar', 'Medicine Ball', 'Foam Roller', 'Block', 'Straps'
];

export default function EditWorkoutModal({ isOpen, onClose, onUpdate, workout }: EditWorkoutModalProps) {
  const { isDark } = useDashboardMode();
  const [formData, setFormData] = useState<WorkoutFormData>({
    id: '',
    name: '',
    category: 'Strength Training',
    duration: 30,
    difficulty: 'Beginner',
    calories: 200,
    equipment: [],
    description: '',
    sets: 3,
    reps: 12,
    restTime: 60,
  });

  const [newEquipment, setNewEquipment] = useState('');

  useEffect(() => {
    if (workout) {
      setFormData(workout);
    }
  }, [workout]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (workout) {
      onUpdate({
        ...formData,
        id: workout.id,
        updatedAt: new Date().toISOString(),
      });
      onClose();
    }
  };

  const addEquipment = () => {
    if (newEquipment.trim() && !formData.equipment.includes(newEquipment.trim())) {
      setFormData(prev => ({
        ...prev,
        equipment: [...prev.equipment, newEquipment.trim()]
      }));
      setNewEquipment('');
    }
  };

  const removeEquipment = (equipment: string) => {
    setFormData(prev => ({
      ...prev,
      equipment: prev.equipment.filter(eq => eq !== equipment)
    }));
  };

  if (!isOpen || !workout) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={cn(
            "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border p-6",
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
          )}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
              Edit Workout
            </h2>
            <button
              onClick={onClose}
              className={cn(
                "p-2 rounded-lg transition-colors",
                isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
              )}
            >
              <X className={cn("w-5 h-5", isDark ? "text-slate-400" : "text-slate-600")} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Workout Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                  )}
                  placeholder="Enter workout name"
                />
              </div>

              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Category *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
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
            </div>

            {/* Workout Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Duration (minutes) *
                </label>
                <input
                  type="number"
                  required
                  min="5"
                  max="180"
                  value={formData.duration}
                  onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-100"
                      : "bg-white border-slate-300 text-slate-900"
                  )}
                />
              </div>

              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Difficulty *
                </label>
                <select
                  required
                  value={formData.difficulty}
                  onChange={(e) => setFormData(prev => ({ ...prev, difficulty: e.target.value as any }))}
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

              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Calories *
                </label>
                <input
                  type="number"
                  required
                  min="50"
                  max="1000"
                  value={formData.calories}
                  onChange={(e) => setFormData(prev => ({ ...prev, calories: parseInt(e.target.value) }))}
                  className={cn(
                    "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-100"
                      : "bg-white border-slate-300 text-slate-900"
                  )}
                />
              </div>
            </div>

            {/* Strength Training Specific Fields */}
            {(formData.category === 'Strength Training' || formData.category === 'CrossFit') && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Sets
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.sets}
                    onChange={(e) => setFormData(prev => ({ ...prev, sets: parseInt(e.target.value) }))}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                      isDark
                        ? "bg-slate-800 border-slate-700 text-slate-100"
                        : "bg-white border-slate-300 text-slate-900"
                    )}
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Reps
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={formData.reps}
                    onChange={(e) => setFormData(prev => ({ ...prev, reps: parseInt(e.target.value) }))}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                      isDark
                        ? "bg-slate-800 border-slate-700 text-slate-100"
                        : "bg-white border-slate-300 text-slate-900"
                    )}
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Rest Time (seconds)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="300"
                    value={formData.restTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, restTime: parseInt(e.target.value) }))}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                      isDark
                        ? "bg-slate-800 border-slate-700 text-slate-100"
                        : "bg-white border-slate-300 text-slate-900"
                    )}
                  />
                </div>
              </div>
            )}

            {/* Equipment */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Equipment
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  value={newEquipment}
                  onChange={(e) => setNewEquipment(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addEquipment())}
                  className={cn(
                    "flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                  )}
                  placeholder="Add equipment"
                />
                <button
                  type="button"
                  onClick={addEquipment}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                >
                  Add
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {formData.equipment.map(eq => (
                  <span
                    key={eq}
                    className={cn(
                      "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm",
                      isDark ? "bg-slate-800 text-slate-300" : "bg-slate-100 text-slate-700"
                    )}
                  >
                    {eq}
                    <button
                      type="button"
                      onClick={() => removeEquipment(eq)}
                      className="ml-1 text-red-500 hover:text-red-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Description *
              </label>
              <textarea
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                className={cn(
                  "w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none",
                  isDark
                    ? "bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-400"
                    : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                )}
                placeholder="Describe your workout..."
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "flex-1 px-6 py-3 rounded-lg transition-colors",
                  isDark
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                )}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Update Workout
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
