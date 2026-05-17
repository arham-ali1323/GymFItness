"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";

const FormCheckboxRadio = () => {
  const { isDark } = useDashboardMode();
  const [checkboxes, setCheckboxes] = useState({
    newsletter: false,
    notifications: true,
    marketing: false,
    updates: true
  });
  
  const [radioOption, setRadioOption] = useState('option1');
  const [multiCheckbox, setMultiCheckbox] = useState<string[]>(['frontend']);
  const [switches, setSwitches] = useState({
    darkMode: true,
    notifications: false,
    autoSave: true
  });

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setCheckboxes(prev => ({ ...prev, [name]: checked }));
  };

  const handleMultiCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setMultiCheckbox(prev => [...prev, value]);
    } else {
      setMultiCheckbox(prev => prev.filter(item => item !== value));
    }
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setSwitches(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Checkbox & Radio
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Various checkbox and radio button styles and configurations
          </p>
        </div>

        <div className="space-y-8">
          {/* Basic Checkboxes */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Basic Checkboxes
            </h2>
            <div className="space-y-3">
              {[
                { key: 'newsletter', label: 'Subscribe to newsletter' },
                { key: 'notifications', label: 'Enable push notifications' },
                { key: 'marketing', label: 'Receive marketing emails' },
                { key: 'updates', label: 'Get product updates' }
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={checkboxes[key as keyof typeof checkboxes]}
                    onChange={(e) => handleCheckboxChange(key, e.target.checked)}
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Radio Buttons */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Radio Buttons
            </h2>
            <div className="space-y-3">
              {[
                { value: 'option1', label: 'Option 1 - Basic Plan' },
                { value: 'option2', label: 'Option 2 - Standard Plan' },
                { value: 'option3', label: 'Option 3 - Premium Plan' },
                { value: 'option4', label: 'Option 4 - Enterprise Plan' }
              ].map(({ value, label }) => (
                <label key={value} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="radioGroup"
                    value={value}
                    checked={radioOption === value}
                    onChange={(e) => setRadioOption(e.target.value)}
                    className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500 focus:ring-2"
                  />
                  <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Multi-Select Checkboxes */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Multi-Select Checkboxes
            </h2>
            <p className={cn("text-sm mb-3", isDark ? "text-slate-400" : "text-slate-600")}>
              Select your skills (Selected: {multiCheckbox.join(', ')})
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { value: 'frontend', label: 'Frontend Development' },
                { value: 'backend', label: 'Backend Development' },
                { value: 'design', label: 'UI/UX Design' },
                { value: 'mobile', label: 'Mobile Development' },
                { value: 'devops', label: 'DevOps' },
                { value: 'testing', label: 'Testing' }
              ].map(({ value, label }) => (
                <label key={value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={value}
                    checked={multiCheckbox.includes(value)}
                    onChange={(e) => handleMultiCheckboxChange(value, e.target.checked)}
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Toggle Switches */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Toggle Switches
            </h2>
            <div className="space-y-4">
              {[
                { key: 'darkMode', label: 'Dark Mode' },
                { key: 'notifications', label: 'Email Notifications' },
                { key: 'autoSave', label: 'Auto Save' }
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center justify-between">
                  <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    {label}
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={switches[key as keyof typeof switches]}
                      onChange={(e) => handleSwitchChange(key, e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className={cn(
                      "w-11 h-6 rounded-full peer transition-colors",
                      switches[key as keyof typeof switches]
                        ? "bg-orange-500"
                        : isDark ? "bg-slate-700" : "bg-gray-300"
                    )}>
                      <div className={cn(
                        "absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform",
                        switches[key as keyof typeof switches] ? "translate-x-5" : "translate-x-0"
                      )} />
                    </div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Inline Checkboxes */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Inline Checkboxes
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                <label key={day} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={day === 'Monday' || day === 'Wednesday'}
                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 focus:ring-2"
                  />
                  <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    {day}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Custom Styled Checkboxes */}
          <div>
            <h2 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
              Custom Styled Checkboxes
            </h2>
            <div className="space-y-3">
              {[
                { id: 'custom1', label: 'Custom Checkbox 1' },
                { id: 'custom2', label: 'Custom Checkbox 2' },
                { id: 'custom3', label: 'Custom Checkbox 3' }
              ].map(({ id, label }) => (
                <label key={id} className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id={id}
                      className="sr-only peer"
                    />
                    <div className={cn(
                      "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                      "peer-checked:bg-orange-500 peer-checked:border-orange-500",
                      isDark ? "border-slate-600" : "border-gray-300"
                    )}>
                      <svg className="w-3 h-3 text-white hidden peer-checked:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className={cn("text-sm", isDark ? "text-slate-300" : "text-slate-700")}>
                    {label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Form Summary */}
          <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
            <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-200" : "text-slate-800")}>
              Form Summary
            </h3>
            <div className="space-y-1 text-sm">
              <p className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                Newsletter: {checkboxes.newsletter ? 'Subscribed' : 'Not subscribed'}
              </p>
              <p className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                Selected Plan: {radioOption}
              </p>
              <p className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                Skills: {multiCheckbox.join(', ') || 'None selected'}
              </p>
              <p className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                Dark Mode: {switches.darkMode ? 'Enabled' : 'Disabled'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCheckboxRadio;
