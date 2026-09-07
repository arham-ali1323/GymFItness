"use client";

import { useState } from "react";
import Link from "next/link";
import { Dumbbell, Plus, Trash2, CheckCircle2, RotateCcw } from "lucide-react";

type Exercise = { name: string; sets: number; reps: string };

const muscleGroups: Record<string, Exercise[]> = {
  Chest: [
    { name: "Barbell Bench Press", sets: 4, reps: "8-10" },
    { name: "Incline Dumbbell Press", sets: 4, reps: "8-12" },
    { name: "Cable Fly", sets: 3, reps: "10-12" },
    { name: "Push-Ups", sets: 3, reps: "12-15" },
  ],
  Back: [
    { name: "Deadlift", sets: 4, reps: "5-8" },
    { name: "Pull-Ups", sets: 4, reps: "6-10" },
    { name: "Bent-Over Row", sets: 4, reps: "8-10" },
    { name: "Lat Pulldown", sets: 3, reps: "10-12" },
  ],
  Legs: [
    { name: "Back Squat", sets: 4, reps: "8-10" },
    { name: "Romanian Deadlift", sets: 4, reps: "8-12" },
    { name: "Leg Press", sets: 4, reps: "10-12" },
    { name: "Walking Lunges", sets: 3, reps: "12-15" },
  ],
  Shoulders: [
    { name: "Overhead Press", sets: 4, reps: "8-10" },
    { name: "Lateral Raise", sets: 4, reps: "10-15" },
    { name: "Rear Delt Fly", sets: 3, reps: "12-15" },
    { name: "Face Pull", sets: 3, reps: "12-15" },
  ],
  Arms: [
    { name: "Barbell Curl", sets: 4, reps: "8-10" },
    { name: "Skull Crushers", sets: 4, reps: "10-12" },
    { name: "Hammer Curl", sets: 3, reps: "10-12" },
    { name: "Tricep Pushdown", sets: 3, reps: "12-15" },
  ],
  Core: [
    { name: "Plank", sets: 3, reps: "60 sec" },
    { name: "Hanging Leg Raise", sets: 3, reps: "10-15" },
    { name: "Russian Twist", sets: 3, reps: "20" },
    { name: "Cable Crunch", sets: 3, reps: "12-15" },
  ],
};

export default function WorkoutBuilder() {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [goal, setGoal] = useState("muscle");
  const [routine, setRoutine] = useState<{ group: string; exercises: Exercise[] }[]>([]);
  const [saved, setSaved] = useState(false);

  const toggleGroup = (group: string) => {
    setSelectedGroups((prev) =>
      prev.includes(group) ? prev.filter((g) => g !== group) : [...prev, group]
    );
    setSaved(false);
  };

  const buildRoutine = () => {
    if (selectedGroups.length === 0) return;
    const days =
      goal === "strength" ? 3 : goal === "muscle" ? 4 : 5;
    const pick = (arr: Exercise[], count: number) =>
      [...arr].sort(() => Math.random() - 0.5).slice(0, count);

    const routine = selectedGroups.map((group) => ({
      group,
      exercises: pick(muscleGroups[group], Math.min(3, muscleGroups[group].length)),
    }));

    setRoutine(routine);
    setSaved(false);
  };

  const saveRoutine = () => {
    setSaved(true);
  };

  const reset = () => {
    setSelectedGroups([]);
    setRoutine([]);
    setSaved(false);
    setGoal("muscle");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 to-black" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-full mb-6">
            <Dumbbell className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Workout Builder
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Create Your Own <span className="text-orange-500">Workout</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Select your target muscle groups and fitness goal to instantly generate a
            personalized training routine. Build a plan that works for you and start
            transforming your body today.
          </p>
        </div>
      </section>

      {/* Builder */}
      <section className="py-12 px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          {/* Goal Selection */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Choose Your Goal</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: "strength", label: "Strength", desc: "3 days • 5-8 reps" },
                { value: "muscle", label: "Muscle Growth", desc: "4 days • 8-12 reps" },
                { value: "endurance", label: "Endurance", desc: "5 days • 12-15 reps" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    setGoal(option.value);
                    setSaved(false);
                  }}
                  className={`p-6 rounded-lg border-2 text-left transition-colors ${
                    goal === option.value
                      ? "border-orange-500 bg-orange-500/10"
                      : "border-slate-700 bg-slate-900 hover:border-orange-500/50"
                  }`}
                >
                  <p className="font-bold text-lg mb-1">{option.label}</p>
                  <p className="text-sm text-gray-400">{option.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Muscle Group Selection */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Select Muscle Groups</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {Object.keys(muscleGroups).map((group) => {
                const active = selectedGroups.includes(group);
                return (
                  <button
                    key={group}
                    onClick={() => toggleGroup(group)}
                    className={`p-4 rounded-lg border-2 font-bold transition-colors ${
                      active
                        ? "border-orange-500 bg-orange-500 text-white"
                        : "border-slate-700 bg-slate-900 text-gray-300 hover:border-orange-500/50"
                    }`}
                  >
                    {group}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Build Button */}
          <div className="text-center mb-12">
            <button
              onClick={buildRoutine}
              disabled={selectedGroups.length === 0}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              Build My Workout
            </button>
            {selectedGroups.length === 0 && (
              <p className="text-gray-500 text-sm mt-3">
                Select at least one muscle group to build your routine.
              </p>
            )}
          </div>

          {/* Routine Result */}
          {routine.length > 0 && (
            <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Your Workout Routine</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {routine.length} day program • {goal === "strength" ? "Strength" : goal === "muscle" ? "Muscle Growth" : "Endurance"} focus
                  </p>
                </div>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-600 text-gray-300 rounded-lg hover:border-orange-500 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {routine.map((day, i) => (
                  <div
                    key={day.group}
                    className="rounded-xl border border-slate-700 bg-black/40 p-5"
                  >
                    <h3 className="text-lg font-bold text-orange-500 mb-4">
                      Day {i + 1} • {day.group}
                    </h3>
                    <ul className="space-y-3">
                      {day.exercises.map((exercise) => (
                        <li
                          key={exercise.name}
                          className="flex items-center justify-between gap-3"
                        >
                          <span className="text-sm text-gray-200 flex items-center gap-2">
                            <Dumbbell className="w-4 h-4 text-orange-500 shrink-0" />
                            {exercise.name}
                          </span>
                          <span className="text-xs text-gray-400 shrink-0">
                            {exercise.sets} × {exercise.reps}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={saveRoutine}
                  className="px-8 py-3 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Save My Routine
                </button>
                {saved && (
                  <p className="text-green-500 mt-3 text-sm">
                    Routine saved! Start your first session at German Fitness today.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Want a plan built by an expert trainer instead?
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
            >
              Talk to a Trainer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
