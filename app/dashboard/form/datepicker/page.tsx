"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const FormDatepicker = () => {
  const { isDark } = useDashboardMode();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDateTime, setSelectedDateTime] = useState({
    date: '',
    time: '',
    timezone: 'UTC'
  });

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days: Array<{
      date: number;
      isCurrentMonth: boolean;
      isToday: boolean;
      isSelected: boolean;
    }> = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      if (date.getMonth() === month) {
        days.push({
          date: date.getDate(),
          isCurrentMonth: true,
          isToday: date.toDateString() === today.toDateString(),
          isSelected: selectedDate === date.toISOString().split('T')[0]
        });
      } else {
        days.push({
          date: date.getDate(),
          isCurrentMonth: false,
          isToday: false,
          isSelected: false
        });
      }
    }
    
    return days;
  };

  const handleDateSelect = (day: number) => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const date = new Date(year, month, day);
    const dateString = date.toISOString().split('T')[0];
    setSelectedDate(dateString);
    setShowDatePicker(false);
  };

  const handleMonthChange = (direction: number) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const timeSlots: string[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      timeSlots.push(time);
    }
  }

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Datepicker
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Interactive date and time picker components
          </p>
        </div>

        <div className="space-y-8">
          {/* Basic Date Input */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Basic Date Input
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Date Input
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className={cn(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>
              
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Time Input
                </label>
                <input
                  type="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className={cn(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>

              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  DateTime Local
                </label>
                <input
                  type="datetime-local"
                  value={`${selectedDateTime.date}T${selectedDateTime.time}`}
                  onChange={(e) => {
                    const [date, time] = e.target.value.split('T');
                    setSelectedDateTime(prev => ({ ...prev, date, time: time || '' }));
                  }}
                  className={cn(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>
            </div>
          </div>

          {/* Custom Date Picker */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Custom Date Picker
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Select Date
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowDatePicker(!showDatePicker)}
                    className={cn(
                      "w-full px-4 py-2 border rounded-lg text-left flex items-center justify-between",
                      "focus:outline-none focus:ring-2 focus:ring-orange-500",
                      isDark
                        ? "bg-slate-800 text-slate-100 border-slate-700"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  >
                    <span>{selectedDate || 'Select a date'}</span>
                    <Calendar className="w-4 h-4" />
                  </button>
                  
                  {showDatePicker && (
                    <div className={cn(
                      "absolute top-full mt-2 w-full rounded-lg shadow-lg border z-10",
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                    )}>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                          <button
                            type="button"
                            onClick={() => handleMonthChange(-1)}
                            className={cn("p-1 rounded hover:bg-orange-100", isDark ? "hover:bg-slate-800" : "")}
                          >
                            <ChevronUp className="w-4 h-4" />
                          </button>
                          <h3 className={cn("font-medium", isDark ? "text-slate-100" : "text-slate-900")}>
                            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </h3>
                          <button
                            type="button"
                            onClick={() => handleMonthChange(1)}
                            className={cn("p-1 rounded hover:bg-orange-100", isDark ? "hover:bg-slate-800" : "")}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </button>
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                            <div key={day} className={cn("py-1 font-medium", isDark ? "text-slate-400" : "text-slate-600")}>
                              {day}
                            </div>
                          ))}
                        </div>
                        
                        <div className="grid grid-cols-7 gap-1">
                          {generateCalendarDays().map((day, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleDateSelect(day.date)}
                              disabled={!day.isCurrentMonth}
                              className={cn(
                                "p-2 text-sm rounded hover:bg-orange-100 transition-colors",
                                !day.isCurrentMonth && "opacity-50 cursor-not-allowed",
                                day.isToday && "bg-orange-100 font-semibold",
                                day.isSelected && "bg-orange-500 text-white hover:bg-orange-600",
                                isDark && "hover:bg-slate-700"
                              )}
                            >
                              {day.date}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Select Time
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowTimePicker(!showTimePicker)}
                    className={cn(
                      "w-full px-4 py-2 border rounded-lg text-left flex items-center justify-between",
                      "focus:outline-none focus:ring-2 focus:ring-orange-500",
                      isDark
                        ? "bg-slate-800 text-slate-100 border-slate-700"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  >
                    <span>{selectedTime || 'Select time'}</span>
                    <Clock className="w-4 h-4" />
                  </button>
                  
                  {showTimePicker && (
                    <div className={cn(
                      "absolute top-full mt-2 w-full rounded-lg shadow-lg border z-10 max-h-48 overflow-y-auto",
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                    )}>
                      <div className="p-2">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => {
                              setSelectedTime(time);
                              setShowTimePicker(false);
                            }}
                            className={cn(
                              "w-full px-3 py-2 text-left text-sm rounded hover:bg-orange-100 transition-colors",
                              selectedTime === time && "bg-orange-500 text-white hover:bg-orange-600",
                              isDark && "hover:bg-slate-700"
                            )}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Date Range */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Date Range
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Start Date
                </label>
                <input
                  type="date"
                  value={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>
              
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  End Date
                </label>
                <input
                  type="date"
                  value={dateRange.end}
                  min={dateRange.start}
                  onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>
            </div>
            
            {dateRange.start && dateRange.end && (
              <div className={cn("mt-4 p-3 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
                <p className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                  Selected Range: {dateRange.start} to {dateRange.end}
                </p>
                <p className={cn("text-xs mt-1", isDark ? "text-slate-400" : "text-slate-600")}>
                  Duration: {Math.ceil((new Date(dateRange.end).getTime() - new Date(dateRange.start).getTime()) / (1000 * 60 * 60 * 24))} days
                </p>
              </div>
            )}
          </div>

          {/* Timezone Selection */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Timezone Selection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Date
                </label>
                <input
                  type="date"
                  value={selectedDateTime.date}
                  onChange={(e) => setSelectedDateTime(prev => ({ ...prev, date: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>
              
              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Time
                </label>
                <input
                  type="time"
                  value={selectedDateTime.time}
                  onChange={(e) => setSelectedDateTime(prev => ({ ...prev, time: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>

              <div>
                <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                  Timezone
                </label>
                <select
                  value={selectedDateTime.timezone}
                  onChange={(e) => setSelectedDateTime(prev => ({ ...prev, timezone: e.target.value }))}
                  className={cn(
                    "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">EST</option>
                  <option value="PST">PST</option>
                  <option value="GMT">GMT</option>
                  <option value="CET">CET</option>
                  <option value="JST">JST</option>
                </select>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
            <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-200" : "text-slate-800")}>
              Selected Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                <p>Date: {selectedDate || 'Not selected'}</p>
                <p>Time: {selectedTime || 'Not selected'}</p>
              </div>
              <div className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                <p>Date Range: {dateRange.start && dateRange.end ? `${dateRange.start} - ${dateRange.end}` : 'Not selected'}</p>
                <p>DateTime: {selectedDateTime.date && selectedDateTime.time ? `${selectedDateTime.date} ${selectedDateTime.time} ${selectedDateTime.timezone}` : 'Not selected'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDatepicker;
