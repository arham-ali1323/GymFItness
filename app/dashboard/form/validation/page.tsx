"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";

const FormValidation = () => {
  const { isDark } = useDashboardMode();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    website: '',
    creditCard: '',
    phone: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isValid, setIsValid] = useState(false);

  const validationRules = {
    username: {
      required: true,
      minLength: 3,
      maxLength: 20,
      pattern: /^[a-zA-Z0-9_]+$/,
      message: 'Username must be 3-20 characters, letters, numbers, and underscores only'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Please enter a valid email address'
    },
    password: {
      required: true,
      minLength: 8,
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      message: 'Password must be at least 8 characters with uppercase, lowercase, number, and special character'
    },
    confirmPassword: {
      required: true,
      match: 'password',
      message: 'Passwords must match'
    },
    age: {
      required: true,
      min: 18,
      max: 120,
      message: 'Age must be between 18 and 120'
    },
    website: {
      required: false,
      pattern: /^https?:\/\/.+\..+/,
      message: 'Please enter a valid URL starting with http:// or https://'
    },
    creditCard: {
      required: false,
      pattern: /^\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}$/,
      message: 'Please enter a valid credit card number'
    },
    phone: {
      required: true,
      pattern: /^\+?[\d\s\-\(\)]+$/,
      minLength: 10,
      message: 'Please enter a valid phone number (at least 10 digits)'
    }
  };

  const validateField = (name: string, value: string): string => {
    const rules = validationRules[name as keyof typeof validationRules];
    if (!rules) return '';

    if (rules.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }

    if (!value && !rules.required) return '';

    if ('minLength' in rules && rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`;
    }

    if ('maxLength' in rules && rules.maxLength && value.length > rules.maxLength) {
      return `Must be no more than ${rules.maxLength} characters`;
    }

    if ('min' in rules && rules.min && Number(value) < rules.min) {
      return `Must be at least ${rules.min}`;
    }

    if ('max' in rules && rules.max && Number(value) > rules.max) {
      return `Must be no more than ${rules.max}`;
    }

    if ('pattern' in rules && rules.pattern && !rules.pattern.test(value)) {
      return rules.message;
    }

    if ('match' in rules && rules.match && value !== formData[rules.match as keyof typeof formData]) {
      return rules.message;
    }

    return '';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field has been touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let formIsValid = true;

    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
        formIsValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    setIsValid(formIsValid);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateForm();
  };

  const getFieldStatus = (name: string) => {
    const hasError = errors[name];
    const hasValue = formData[name as keyof typeof formData];
    const isTouched = touched[name];

    if (!isTouched) return '';
    if (hasError) return 'error';
    if (hasValue) return 'success';
    return '';
  };

  const getPasswordStrength = (password: string) => {
    if (!password) return { strength: 0, text: '', color: '' };
    
    let strength = 0;
    const checks = [
      password.length >= 8,
      /[a-z]/.test(password),
      /[A-Z]/.test(password),
      /\d/.test(password),
      /[@$!%*?&]/.test(password)
    ];

    strength = checks.filter(Boolean).length;

    const strengthInfo = [
      { strength: 0, text: 'Very Weak', color: 'bg-red-500' },
      { strength: 1, text: 'Weak', color: 'bg-red-400' },
      { strength: 2, text: 'Fair', color: 'bg-yellow-500' },
      { strength: 3, text: 'Good', color: 'bg-blue-500' },
      { strength: 4, text: 'Strong', color: 'bg-green-500' },
      { strength: 5, text: 'Very Strong', color: 'bg-green-600' }
    ];

    return strengthInfo[strength];
  };

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div className={cn("min-h-screen p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Form Validation
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Advanced form validation with real-time feedback and multiple validation rules
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Username *
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors",
                  getFieldStatus('username') === 'error' 
                    ? "border-red-500 focus:ring-red-500" 
                    : getFieldStatus('username') === 'success'
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
                placeholder="Enter username"
              />
              {errors.username && touched.username && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <span className="text-red-500">⚠</span> {errors.username}
                </p>
              )}
              {getFieldStatus('username') === 'success' && (
                <p className="mt-1 text-xs text-green-500 flex items-center gap-1">
                  <span className="text-green-500">✓</span> Username is valid
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors",
                  getFieldStatus('email') === 'error' 
                    ? "border-red-500 focus:ring-red-500" 
                    : getFieldStatus('email') === 'success'
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
                placeholder="email@example.com"
              />
              {errors.email && touched.email && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <span className="text-red-500">⚠</span> {errors.email}
                </p>
              )}
              {getFieldStatus('email') === 'success' && (
                <p className="mt-1 text-xs text-green-500 flex items-center gap-1">
                  <span className="text-green-500">✓</span> Email is valid
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors",
                  getFieldStatus('password') === 'error' 
                    ? "border-red-500 focus:ring-red-500" 
                    : getFieldStatus('password') === 'success'
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
                placeholder="Enter password"
              />
              {formData.password && (
                <div className="mt-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Password Strength
                    </span>
                    <span className={cn("text-xs font-medium", isDark ? "text-slate-300" : "text-slate-700")}>
                      {passwordStrength.text}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{ width: `${(passwordStrength.strength / 5) * 100}%` }}
                    />
                  </div>
                </div>
              )}
              {errors.password && touched.password && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <span className="text-red-500">⚠</span> {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors",
                  getFieldStatus('confirmPassword') === 'error' 
                    ? "border-red-500 focus:ring-red-500" 
                    : getFieldStatus('confirmPassword') === 'success'
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <span className="text-red-500">⚠</span> {errors.confirmPassword}
                </p>
              )}
              {getFieldStatus('confirmPassword') === 'success' && (
                <p className="mt-1 text-xs text-green-500 flex items-center gap-1">
                  <span className="text-green-500">✓</span> Passwords match
                </p>
              )}
            </div>

            {/* Age */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors",
                  getFieldStatus('age') === 'error' 
                    ? "border-red-500 focus:ring-red-500" 
                    : getFieldStatus('age') === 'success'
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
                placeholder="Enter your age"
              />
              {errors.age && touched.age && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <span className="text-red-500">⚠</span> {errors.age}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors",
                  getFieldStatus('phone') === 'error' 
                    ? "border-red-500 focus:ring-red-500" 
                    : getFieldStatus('phone') === 'success'
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && touched.phone && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <span className="text-red-500">⚠</span> {errors.phone}
                </p>
              )}
            </div>

            {/* Website */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Website (optional)
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                onBlur={handleBlur}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors",
                  getFieldStatus('website') === 'error' 
                    ? "border-red-500 focus:ring-red-500" 
                    : getFieldStatus('website') === 'success'
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
                placeholder="https://example.com"
              />
              {errors.website && touched.website && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <span className="text-red-500">⚠</span> {errors.website}
                </p>
              )}
            </div>

            {/* Credit Card */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Credit Card (optional)
              </label>
              <input
                type="text"
                name="creditCard"
                value={formData.creditCard}
                onChange={handleInputChange}
                onBlur={handleBlur}
                maxLength={19}
                className={cn(
                  "w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors",
                  getFieldStatus('creditCard') === 'error' 
                    ? "border-red-500 focus:ring-red-500" 
                    : getFieldStatus('creditCard') === 'success'
                    ? "border-green-500 focus:ring-green-500"
                    : "focus:ring-orange-500",
                  isDark
                    ? "bg-slate-800 text-slate-100 border-slate-700"
                    : "bg-white text-slate-900 border-slate-300"
                )}
                placeholder="1234 5678 9012 3456"
              />
              {errors.creditCard && touched.creditCard && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <span className="text-red-500">⚠</span> {errors.creditCard}
                </p>
              )}
            </div>
          </div>

          {/* Validation Summary */}
          <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
            <h3 className={cn("text-sm font-semibold mb-3", isDark ? "text-slate-200" : "text-slate-800")}>
              Validation Status
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              {Object.keys(formData).map(key => {
                const status = getFieldStatus(key);
                return (
                  <div key={key} className="flex items-center gap-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      status === 'success' ? 'bg-green-500' :
                      status === 'error' ? 'bg-red-500' :
                      touched[key] ? 'bg-yellow-500' : 'bg-gray-300'
                    )} />
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="mt-3 pt-3 border-t border-slate-600">
              <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                Form is {isValid ? '✓ Valid' : '✗ Invalid'}
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="submit"
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-colors",
                isValid
                  ? "bg-orange-500 text-white hover:bg-orange-600"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              )}
            >
              Validate Form
            </button>
            
            <button
              type="button"
              onClick={() => {
                setFormData({
                  username: '',
                  email: '',
                  password: '',
                  confirmPassword: '',
                  age: '',
                  website: '',
                  creditCard: '',
                  phone: ''
                });
                setErrors({});
                setTouched({});
                setIsValid(false);
              }}
              className={cn(
                "px-6 py-3 border rounded-lg font-medium transition-colors",
                isDark
                  ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                  : "border-slate-300 text-slate-700 hover:bg-slate-50"
              )}
            >
              Reset Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormValidation;
