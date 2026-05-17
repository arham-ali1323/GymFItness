"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { CalendarDays, Clock, Users, Dumbbell, MapPin, Plus, Filter } from 'lucide-react';

const Schedule = () => {
  const { isDark } = useDashboardMode();
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [viewMode, setViewMode] = useState('week');

  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const scheduleData = {
    current: {
      week: 'Mar 18 - Mar 24, 2024',
      days: {
        Monday: [
          { time: '7:00 AM', activity: 'Morning Run', type: 'cardio', duration: 30, instructor: 'Self' },
          { time: '12:00 PM', activity: 'Lunch Break Walk', type: 'cardio', duration: 15, instructor: 'Self' },
          { time: '6:00 PM', activity: 'Upper Body Strength', type: 'strength', duration: 45, instructor: 'Sarah J.' },
          { time: '7:00 PM', activity: 'Yoga Flow', type: 'flexibility', duration: 30, instructor: 'Mike C.' }
        ],
        Tuesday: [
          { time: '6:30 AM', activity: 'HIIT Workout', type: 'hiit', duration: 25, instructor: 'Alex T.' },
          { time: '1:00 PM', activity: 'Quick Stretch', type: 'flexibility', duration: 10, instructor: 'Self' },
          { time: '5:30 PM', activity: 'Leg Day', type: 'strength', duration: 50, instructor: 'Emily D.' }
        ],
        Wednesday: [
          { time: '7:00 AM', activity: 'Swimming', type: 'cardio', duration: 45, instructor: 'Self' },
          { time: '6:00 PM', activity: 'Core Workout', type: 'core', duration: 25, instructor: 'Lisa W.' },
          { time: '6:30 PM', activity: 'Meditation', type: 'flexibility', duration: 15, instructor: 'Self' }
        ],
        Thursday: [
          { time: '6:00 AM', activity: 'Cycling', type: 'cardio', duration: 40, instructor: 'Self' },
          { time: '12:30 PM', activity: 'Quick Workout', type: 'hiit', duration: 20, instructor: 'Carlos R.' },
          { time: '6:00 PM', activity: 'Full Body Strength', type: 'strength', duration: 40, instructor: 'John S.' }
        ],
        Friday: [
          { time: '7:30 AM', activity: 'Pilates', type: 'flexibility', duration: 35, instructor: 'Maria G.' },
          { time: '5:00 PM', activity: 'Boxing', type: 'cardio', duration: 30, instructor: 'David L.' },
          { time: '6:00 PM', activity: 'Shoulder & Arms', type: 'strength', duration: 35, instructor: 'Tom H.' }
        ],
        Saturday: [
          { time: '9:00 AM', activity: 'Long Run', type: 'cardio', duration: 60, instructor: 'Self' },
          { time: '2:00 PM', activity: 'Rock Climbing', type: 'strength', duration: 90, instructor: 'Climbing Gym' },
          { time: '6:00 PM', activity: 'Evening Yoga', type: 'flexibility', duration: 30, instructor: 'Zen Studio' }
        ],
        Sunday: [
          { time: '10:00 AM', activity: 'Hiking', type: 'cardio', duration: 120, instructor: 'Self' },
          { time: '4:00 PM', activity: 'Stretching & Recovery', type: 'flexibility', duration: 20, instructor: 'Self' }
        ]
      }
    }
  };

  const getActivityTypeColor = (type: string) => {
    switch (type) {
      case 'cardio':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'strength':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'flexibility':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'hiit':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'core':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const currentSchedule = scheduleData[selectedWeek as keyof typeof scheduleData] || scheduleData.current;

  const calculateDayStats = (dayActivities: any[]) => {
    const totalDuration = dayActivities.reduce((sum, activity) => sum + activity.duration, 0);
    const cardioTime = dayActivities.filter(a => a.type === 'cardio').reduce((sum, a) => sum + a.duration, 0);
    const strengthTime = dayActivities.filter(a => a.type === 'strength').reduce((sum, a) => sum + a.duration, 0);
    return { totalDuration, cardioTime, strengthTime };
  };

  return (
    <div className={cn("min-h-screen p-6 overflow-hidden", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            My Schedule
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Manage your workout schedule and classes
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedWeek('current')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                selectedWeek === 'current'
                  ? "bg-orange-500 text-white"
                  : isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              This Week
            </button>
            <button
              onClick={() => setSelectedWeek('next')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                selectedWeek === 'next'
                  ? "bg-orange-500 text-white"
                  : isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              Next Week
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('week')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                viewMode === 'week'
                  ? "bg-orange-500 text-white"
                  : isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              Week View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                viewMode === 'list'
                  ? "bg-orange-500 text-white"
                  : isDark
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              )}
            >
              List View
            </button>
          </div>

          <button className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2",
            "bg-orange-500 text-white hover:bg-orange-600"
          )}>
            <Plus className="w-4 h-4" />
            Add Class
          </button>
        </div>

        <p className={cn("text-sm mb-6", isDark ? "text-slate-400" : "text-slate-600")}>
          {currentSchedule.week}
        </p>

        {/* Week View */}
        {viewMode === 'week' && (
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
            {weekDays.map((day, index) => {
              const dayActivities = currentSchedule.days[day as keyof typeof currentSchedule.days] || [];
              const stats = calculateDayStats(dayActivities);

              return (
                <div
                  key={day}
                  className={cn(
                    "rounded-xl p-4 border",
                    isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
                  )}
                >
                  <div className="mb-4">
                    <h3 className={cn("font-semibold mb-1", isDark ? "text-slate-100" : "text-slate-900")}>
                      {day}
                    </h3>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>Total:</span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {stats.totalDuration}min
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>Cardio:</span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {stats.cardioTime}min
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>Strength:</span>
                        <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                          {stats.strengthTime}min
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {dayActivities.map((activity, actIndex) => (
                      <div
                        key={actIndex}
                        className={cn(
                          "p-2 rounded-lg border text-xs",
                          getActivityTypeColor(activity.type)
                        )}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium">{activity.time}</span>
                          <span>{activity.duration}min</span>
                        </div>
                        <p className="font-medium mb-1">{activity.activity}</p>
                        <p className="opacity-75">{activity.instructor}</p>
                      </div>
                    ))}
                  </div>

                  {dayActivities.length === 0 && (
                    <div className="text-center py-8">
                      <CalendarDays className={cn("w-8 h-8 mx-auto mb-2", isDark ? "text-slate-600" : "text-slate-400")} />
                      <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                        Rest Day
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* List View */}
        {viewMode === 'list' && (
          <div className="space-y-4">
            {weekDays.map((day) => {
              const dayActivities = currentSchedule.days[day as keyof typeof currentSchedule.days] || [];
              const stats = calculateDayStats(dayActivities);

              return (
                <div
                  key={day}
                  className={cn(
                    "rounded-xl p-6 border",
                    isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
                  )}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className={cn("font-semibold text-lg mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
                        {day}
                      </h3>
                      <div className="flex gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Clock className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                          <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                            {stats.totalDuration} minutes total
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Dumbbell className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                          <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                            {stats.cardioTime} cardio, {stats.strengthTime} strength
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        dayActivities.length > 0
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      )}>
                        {dayActivities.length} activities
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {dayActivities.map((activity, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex items-center justify-between p-3 rounded-lg border",
                          getActivityTypeColor(activity.type)
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="font-medium">{activity.time}</p>
                            <p className="text-xs opacity-75">{activity.duration}min</p>
                          </div>
                          <div>
                            <p className="font-medium">{activity.activity}</p>
                            <p className="text-sm opacity-75">{activity.instructor}</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className={cn(
                            "px-3 py-1 rounded text-xs font-medium transition-colors",
                            "bg-white bg-opacity-50 hover:bg-opacity-70"
                          )}>
                            Edit
                          </button>
                          <button className={cn(
                            "px-3 py-1 rounded text-xs font-medium transition-colors",
                            "bg-red-500 bg-opacity-20 text-red-700 hover:bg-opacity-30"
                          )}>
                            Cancel
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {dayActivities.length === 0 && (
                    <div className="text-center py-8">
                      <CalendarDays className={cn("w-12 h-12 mx-auto mb-2", isDark ? "text-slate-600" : "text-slate-400")} />
                      <p className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                        Rest Day - No scheduled activities
                      </p>
                      <button className={cn(
                        "mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        "bg-orange-500 text-white hover:bg-orange-600"
                      )}>
                        Add Activity
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Schedule;
