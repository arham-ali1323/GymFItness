"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";

const FormElement = () => {
  const { isDark } = useDashboardMode();
  const [formData, setFormData] = useState({
    textInput: '',
    emailInput: '',
    passwordInput: '',
    numberInput: '',
    textArea: '',
    selectInput: '',
    multiSelect: [] as string[],
    fileInput: null as File | null,
    colorInput: '#f97316',
    rangeInput: 50,
    dateInput: '',
    timeInput: '',
    urlInput: '',
    telInput: '',
    searchInput: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'file') {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setFormData(prev => ({ ...prev, [name]: file }));
    } else if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      if (checkbox.checked) {
        setFormData(prev => ({ ...prev, multiSelect: [...prev.multiSelect, value] }));
      } else {
        setFormData(prev => ({ ...prev, multiSelect: prev.multiSelect.filter(item => item !== value) }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Form Elements
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Complete collection of form input elements and controls
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Text Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Text Input
              </label>
              <input
                type="text"
                name="textInput"
                value={formData.textInput}
                onChange={handleInputChange}
                placeholder="Enter text..."
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                    : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                )}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Email Input
              </label>
              <input
                type="email"
                name="emailInput"
                value={formData.emailInput}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                    : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                )}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Password Input
              </label>
              <input
                type="password"
                name="passwordInput"
                value={formData.passwordInput}
                onChange={handleInputChange}
                placeholder="Enter password..."
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                    : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                )}
              />
            </div>

            {/* Number Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Number Input
              </label>
              <input
                type="number"
                name="numberInput"
                value={formData.numberInput}
                onChange={handleInputChange}
                placeholder="123"
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                    : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                )}
              />
            </div>

            {/* URL Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                URL Input
              </label>
              <input
                type="url"
                name="urlInput"
                value={formData.urlInput}
                onChange={handleInputChange}
                placeholder="https://example.com"
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                    : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                )}
              />
            </div>

            {/* Telephone Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Telephone Input
              </label>
              <input
                type="tel"
                name="telInput"
                value={formData.telInput}
                onChange={handleInputChange}
                placeholder="+1 (555) 123-4567"
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                    : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                )}
              />
            </div>

            {/* Search Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Search Input
              </label>
              <input
                type="search"
                name="searchInput"
                value={formData.searchInput}
                onChange={handleInputChange}
                placeholder="Search..."
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                    : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                )}
              />
            </div>

            {/* Date Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Date Input
              </label>
              <input
                type="date"
                name="dateInput"
                value={formData.dateInput}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              />
            </div>

            {/* Time Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Time Input
              </label>
              <input
                type="time"
                name="timeInput"
                value={formData.timeInput}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              />
            </div>

            {/* Color Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Color Input
              </label>
              <div className="flex gap-2">
                <input
                  type="color"
                  name="colorInput"
                  value={formData.colorInput}
                  onChange={handleInputChange}
                  className="h-10 w-20 border rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.colorInput}
                  onChange={(e) => setFormData(prev => ({ ...prev, colorInput: e.target.value }))}
                  className={cn(
                    "flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700"
                      : "bg-white text-slate-900 border-slate-300"
                  )}
                />
              </div>
            </div>

            {/* Range Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Range Input: {formData.rangeInput}
              </label>
              <input
                type="range"
                name="rangeInput"
                min="0"
                max="100"
                value={formData.rangeInput}
                onChange={handleInputChange}
                className="w-full"
              />
            </div>

            {/* File Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                File Input
              </label>
              <input
                type="file"
                name="fileInput"
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700 file:bg-slate-700 file:text-slate-300"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              />
              {formData.fileInput && (
                <p className={cn("mt-2 text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                  Selected: {formData.fileInput.name}
                </p>
              )}
            </div>

            {/* Select Input */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Select Input
              </label>
              <select
                name="selectInput"
                value={formData.selectInput}
                onChange={handleInputChange}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
              >
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
          </div>

          {/* Text Area */}
          <div>
            <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
              Text Area
            </label>
            <textarea
              name="textArea"
              value={formData.textArea}
              onChange={handleInputChange}
              rows={4}
              placeholder="Enter your message here..."
              className={cn(
                "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none",
                isDark
                  ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                  : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
              )}
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Submit Form
            </button>
            <button
              type="reset"
              onClick={() => setFormData({
                textInput: '',
                emailInput: '',
                passwordInput: '',
                numberInput: '',
                textArea: '',
                selectInput: '',
                multiSelect: [],
                fileInput: null,
                colorInput: '#f97316',
                rangeInput: 50,
                dateInput: '',
                timeInput: '',
                urlInput: '',
                telInput: '',
                searchInput: ''
              })}
              className={cn(
                "px-6 py-2 border rounded-lg font-medium transition-colors",
                isDark
                  ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              )}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormElement;
