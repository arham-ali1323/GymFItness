"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { BarChart3, TrendingUp, Calendar, Target, Award, Activity, Filter } from 'lucide-react';

const Progress = () => {
  const { isDark } = useDashboardMode();
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedMetric, setSelectedMetric] = useState('weight');

  const progressData = {
    weight: {
      current: 180,
      target: 170,
      start: 190,
      unit: 'lbs',
      history: [
        { date: '2024-01-01', value: 190 },
        { date: '2024-01-15', value: 188 },
        { date: '2024-02-01', value: 185 },
        { date: '2024-02-15', value: 183 },
        { date: '2024-03-01', value: 182 },
        { date: '2024-03-15', value: 180 }
      ]
    },
    bodyFat: {
      current: 18,
      target: 15,
      start: 22,
      unit: '%',
      history: [
        { date: '2024-01-01', value: 22 },
        { date: '2024-01-15', value: 21 },
        { date: '2024-02-01', value: 20 },
        { date: '2024-02-15', value: 19 },
        { date: '2024-03-01', value: 18.5 },
        { date: '2024-03-15', value: 18 }
      ]
    },
    strength: {
      current: 225,
      target: 250,
      start: 200,
      unit: 'lbs',
      history: [
        { date: '2024-01-01', value: 200 },
        { date: '2024-01-15', value: 205 },
        { date: '2024-02-01', value: 210 },
        { date: '2024-02-15', value: 215 },
        { date: '2024-03-01', value: 220 },
        { date: '2024-03-15', value: 225 }
      ]
    },
    endurance: {
      current: 28,
      target: 35,
      start: 20,
      unit: 'min',
      history: [
        { date: '2024-01-01', value: 20 },
        { date: '2024-01-15', value: 22 },
        { date: '2024-02-01', value: 24 },
        { date: '2024-02-15', value: 25 },
        { date: '2024-03-01', value: 27 },
        { date: '2024-03-15', value: 28 }
      ]
    }
  };

  const achievements = [
    {
      id: 1,
      title: 'Weight Loss Champion',
      description: 'Lost 10 pounds in 3 months',
      date: '2024-03-01',
      icon: '🏆',
      category: 'weight'
    },
    {
      id: 2,
      title: 'Strength Master',
      description: 'Increased bench press by 25 lbs',
      date: '2024-02-15',
      icon: '💪',
      category: 'strength'
    },
    {
      id: 3,
      title: 'Cardio King',
      description: 'Ran first 5K without stopping',
      date: '2024-03-10',
      icon: '🏃',
      category: 'endurance'
    },
    {
      id: 4,
      title: 'Consistency Hero',
      description: '30-day workout streak',
      date: '2024-02-28',
      icon: '📅',
      category: 'consistency'
    }
  ];

  const currentMetric = progressData[selectedMetric as keyof typeof progressData];
  const progressPercentage = ((currentMetric.start - currentMetric.current) / (currentMetric.start - currentMetric.target)) * 100;

  const getMetricColor = (metric: string) => {
    switch (metric) {
      case 'weight':
        return 'text-blue-500';
      case 'bodyFat':
        return 'text-green-500';
      case 'strength':
        return 'text-purple-500';
      case 'endurance':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case 'weight':
        return BarChart3;
      case 'bodyFat':
        return TrendingUp;
      case 'strength':
        return Target;
      case 'endurance':
        return Activity;
      default:
        return BarChart3;
    }
  };

  const MetricIcon = getMetricIcon(selectedMetric);

  return (
    <div className={cn("min-h-screen p-6 overflow-hidden", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Progress Tracking
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Monitor your fitness journey and achievements
          </p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex gap-2">
            {['week', 'month', 'quarter', 'year'].map((period) => (
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
            {Object.keys(progressData).map((metric) => (
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
                {metric.charAt(0).toUpperCase() + metric.slice(1).replace(/([A-Z])/g, ' $1')}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Progress Card */}
          <div className="lg:col-span-2">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <div className="flex items-center gap-3 mb-6">
                <div className={cn("w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center")}>
                  <MetricIcon className={cn("w-6 h-6 text-orange-500")} />
                </div>
                <div>
                  <h2 className={cn("text-xl font-semibold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)} Progress
                  </h2>
                  <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                    Track your {selectedMetric} over time
                  </p>
                </div>
              </div>

              {/* Current Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className={cn("p-4 rounded-lg text-center", isDark ? "bg-slate-700" : "bg-slate-50")}>
                  <p className={cn("text-sm mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                    Starting
                  </p>
                  <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {currentMetric.start}
                  </p>
                  <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
                    {currentMetric.unit}
                  </p>
                </div>
                <div className={cn("p-4 rounded-lg text-center", isDark ? "bg-slate-700" : "bg-slate-50")}>
                  <p className={cn("text-sm mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                    Current
                  </p>
                  <p className={cn("text-2xl font-bold", getMetricColor(selectedMetric))}>
                    {currentMetric.current}
                  </p>
                  <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
                    {currentMetric.unit}
                  </p>
                </div>
                <div className={cn("p-4 rounded-lg text-center", isDark ? "bg-slate-700" : "bg-slate-50")}>
                  <p className={cn("text-sm mb-1", isDark ? "text-slate-400" : "text-slate-600")}>
                    Target
                  </p>
                  <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {currentMetric.target}
                  </p>
                  <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
                    {currentMetric.unit}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                    Progress to Goal
                  </span>
                  <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <div className={cn("w-full rounded-full h-3", isDark ? "bg-slate-700" : "bg-slate-200")}>
                  <div
                    className={cn("h-3 rounded-full transition-all duration-500", getMetricColor(selectedMetric).replace('text-', 'bg-'))}
                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                  />
                </div>
              </div>

              {/* History Chart Placeholder */}
              <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                <h3 className={cn("text-sm font-semibold mb-3", isDark ? "text-slate-300" : "text-slate-700")}>
                  Historical Data
                </h3>
                <div className="space-y-2">
                  {currentMetric.history.map((entry, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                        {entry.date}
                      </span>
                      <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        {entry.value} {currentMetric.unit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="lg:col-span-1">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Recent Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={cn(
                      "p-4 rounded-lg border",
                      isDark ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-lg",
                        "bg-orange-100"
                      )}>
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={cn("font-medium mb-1", isDark ? "text-slate-100" : "text-slate-900")}>
                          {achievement.title}
                        </h3>
                        <p className={cn("text-sm mb-2", isDark ? "text-slate-400" : "text-slate-600")}>
                          {achievement.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Calendar className={cn("w-3 h-3", isDark ? "text-slate-500" : "text-slate-400")} />
                          <span className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-400")}>
                            {achievement.date}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-700" : "bg-slate-50")}>
                  <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Stats Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                        Total Achievements
                      </span>
                      <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        12
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                        This Month
                      </span>
                      <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        3
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                        Streak
                      </span>
                      <span className={cn("font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                        7 days
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {Object.entries(progressData).map(([key, data]) => {
            const Icon = getMetricIcon(key);
            const percentage = ((data.start - data.current) / (data.start - data.target)) * 100;
            
            return (
              <div
                key={key}
                className={cn(
                  "p-4 rounded-xl border cursor-pointer transition-colors hover:shadow-lg",
                  selectedMetric === key
                    ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                    : isDark
                    ? "bg-slate-800 border-slate-700"
                    : "bg-white border-slate-200"
                )}
                onClick={() => setSelectedMetric(key)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className={cn("w-5 h-5", getMetricColor(key))} />
                  <span className={cn("text-sm font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </span>
                </div>
                <div className="text-center">
                  <p className={cn("text-xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {data.current}
                  </p>
                  <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
                    {data.unit}
                  </p>
                </div>
                <div className={cn("w-full rounded-full h-1 mt-2", isDark ? "bg-slate-700" : "bg-slate-200")}>
                  <div
                    className={cn("h-1 rounded-full", getMetricColor(key).replace('text-', 'bg-'))}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Progress;
