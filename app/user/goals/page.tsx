"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Flag, Target, Calendar, TrendingUp, Award, Plus } from 'lucide-react';

const Goals = () => {
  const { isDark } = useDashboardMode();
  const [activeTab, setActiveTab] = useState('current');

  const goals = {
    current: [
      {
        id: 1,
        title: 'Lose 10 pounds',
        description: 'Reach target weight of 170 lbs',
        category: 'weight-loss',
        target: 170,
        current: 180,
        unit: 'lbs',
        deadline: '2024-04-15',
        progress: 50,
        status: 'active',
        milestones: [
          { title: 'Lose 5 lbs', completed: true, date: '2024-03-01' },
          { title: 'Lose 8 lbs', completed: false, date: '2024-03-15' },
          { title: 'Reach target', completed: false, date: '2024-04-15' }
        ]
      },
      {
        id: 2,
        title: 'Run 5K without stopping',
        description: 'Build endurance for 5K race',
        category: 'fitness',
        target: 30,
        current: 22,
        unit: 'minutes',
        deadline: '2024-05-01',
        progress: 73,
        status: 'active',
        milestones: [
          { title: 'Run 1K', completed: true, date: '2024-02-15' },
          { title: 'Run 3K', completed: true, date: '2024-03-10' },
          { title: 'Run 5K', completed: false, date: '2024-05-01' }
        ]
      },
      {
        id: 3,
        title: 'Build muscle mass',
        description: 'Gain 5 pounds of lean muscle',
        category: 'strength',
        target: 5,
        current: 2,
        unit: 'lbs',
        deadline: '2024-06-01',
        progress: 40,
        status: 'active',
        milestones: [
          { title: 'Gain 2 lbs', completed: true, date: '2024-03-01' },
          { title: 'Gain 3.5 lbs', completed: false, date: '2024-04-15' },
          { title: 'Reach target', completed: false, date: '2024-06-01' }
        ]
      }
    ],
    completed: [
      {
        id: 4,
        title: 'Complete 30-day challenge',
        description: 'Work out every day for 30 days',
        category: 'consistency',
        target: 30,
        current: 30,
        unit: 'days',
        deadline: '2024-02-28',
        progress: 100,
        status: 'completed',
        completedDate: '2024-02-28'
      },
      {
        id: 5,
        title: 'Reduce body fat to 15%',
        description: 'Achieve lean body composition',
        category: 'body-composition',
        target: 15,
        current: 15,
        unit: '%',
        deadline: '2024-01-31',
        progress: 100,
        status: 'completed',
        completedDate: '2024-01-28'
      }
    ]
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'weight-loss':
        return 'bg-blue-100 text-blue-800';
      case 'fitness':
        return 'bg-green-100 text-green-800';
      case 'strength':
        return 'bg-purple-100 text-purple-800';
      case 'consistency':
        return 'bg-yellow-100 text-yellow-800';
      case 'body-composition':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-500';
      case 'completed':
        return 'text-blue-500';
      case 'paused':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

  const currentGoals = goals[activeTab as keyof typeof goals] || goals.current;

  return (
    <div className={cn("min-h-screen p-6 overflow-hidden", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Fitness Goals
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Track and achieve your fitness objectives
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab('current')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === 'current'
                ? "bg-orange-500 text-white"
                : isDark
                ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            Active Goals ({goals.current.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === 'completed'
                ? "bg-orange-500 text-white"
                : isDark
                ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            Completed ({goals.completed.length})
          </button>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentGoals.map((goal) => (
            <div
              key={goal.id}
              className={cn(
                "rounded-xl p-6 border",
                isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"
              )}
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center",
                    goal.status === 'completed' ? "bg-blue-500" : "bg-orange-500"
                  )}>
                    {goal.status === 'completed' ? (
                      <Award className="w-5 h-5 text-white" />
                    ) : (
                      <Target className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h3 className={cn("font-semibold mb-1", isDark ? "text-slate-100" : "text-slate-900")}>
                      {goal.title}
                    </h3>
                    <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                      {goal.description}
                    </p>
                  </div>
                </div>
                <span className={cn(
                  "px-2 py-1 rounded-full text-xs font-medium",
                  getCategoryColor(goal.category)
                )}>
                  {goal.category.replace('-', ' ')}
                </span>
              </div>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    Progress
                  </span>
                  <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                    {goal.current} / {goal.target} {goal.unit}
                  </span>
                </div>
                <div className={cn("w-full rounded-full h-2", isDark ? "bg-slate-700" : "bg-slate-200")}>
                  <div
                    className={cn(
                      "h-2 rounded-full transition-all duration-500",
                      goal.status === 'completed' ? "bg-blue-500" : "bg-orange-500"
                    )}
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                    {goal.progress}% complete
                  </span>
                  <span className={cn("text-xs", getStatusColor(goal.status))}>
                    {goal.status}
                  </span>
                </div>
              </div>

              {/* Deadline */}
              <div className="flex items-center gap-2 mb-4">
                <Calendar className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                  {goal.status === 'completed' 
                    ? `Completed on ${goal.completedDate}`
                    : `Deadline: ${goal.deadline}`
                  }
                </span>
              </div>

              {/* Milestones */}
              {goal.milestones && (
                <div>
                  <h4 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Milestones
                  </h4>
                  <div className="space-y-2">
                    {goal.milestones.map((milestone, index) => (
                      <div
                        key={index}
                        className={cn(
                          "flex items-center gap-3 p-2 rounded-lg",
                          milestone.completed
                            ? "bg-green-50 dark:bg-green-900/20"
                            : isDark
                            ? "bg-slate-700"
                            : "bg-slate-50"
                        )}
                      >
                        <div className={cn(
                          "w-4 h-4 rounded-full flex items-center justify-center text-xs",
                          milestone.completed
                            ? "bg-green-500 text-white"
                            : isDark
                            ? "bg-slate-600 text-slate-300"
                            : "bg-slate-200 text-slate-600"
                        )}>
                          {milestone.completed ? '✓' : index + 1}
                        </div>
                        <div className="flex-1">
                          <p className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                            {milestone.title}
                          </p>
                          <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
                            {milestone.completed ? `Completed ${milestone.date}` : `Target: ${milestone.date}`}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-2 mt-4">
                <button
                  className={cn(
                    "flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors",
                    goal.status === 'completed'
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  {goal.status === 'completed' ? 'View Details' : 'Update Progress'}
                </button>
                {goal.status === 'active' && (
                  <button
                    className={cn(
                      "px-4 py-2 border rounded-lg text-sm font-medium transition-colors",
                      isDark
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                        : "border-slate-300 text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    Pause
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add New Goal Button */}
        <div className="mt-6">
          <button
            className={cn(
              "w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
              "bg-orange-500 text-white hover:bg-orange-600"
            )}
          >
            <Plus className="w-4 h-4" />
            Add New Goal
          </button>
        </div>

        {currentGoals.length === 0 && (
          <div className="text-center py-12">
            <Flag className={cn("w-12 h-12 mx-auto mb-4", isDark ? "text-slate-600" : "text-slate-400")} />
            <p className={cn("text-lg font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
              No goals found
            </p>
            <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
              Start by setting your first fitness goal
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Goals;
