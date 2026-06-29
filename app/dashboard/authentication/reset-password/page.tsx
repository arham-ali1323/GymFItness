"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Eye, EyeOff, Lock, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const ResetPassword = () => {
  const { isDark } = useDashboardMode();
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.newPassword.trim()) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.newPassword)) {
      newErrors.newPassword = 'Password must contain uppercase, lowercase, and number';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Please confirm your new password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful password reset
      setIsSuccess(true);
      console.log('Password reset successful');
      
    } catch (error) {
      setErrors({ submit: 'Failed to reset password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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

  const passwordStrength = getPasswordStrength(formData.newPassword);

  if (isSuccess) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center p-6", isDark ? "bg-black" : "bg-slate-100")}>
        <div className="w-full max-w-md">
          <div className={cn("rounded-2xl p-8 shadow-lg border text-center", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
              Password Reset Successful
            </h1>
            <p className={cn("text-sm mb-6", isDark ? "text-slate-400" : "text-slate-600")}>
              Your password has been successfully reset. You can now sign in with your new password.
            </p>
            
            <Link
              href="/dashboard/authentication/signin"
              className="inline-block w-full py-3 px-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen flex items-center justify-center p-6", isDark ? "bg-black" : "bg-slate-100")}>
      <div className="w-full max-w-md">
        <div className={cn("rounded-2xl p-8 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
          {/* Header */}
          <div className="mb-8">
            <Link
              href="/dashboard/authentication/signin"
              className={cn(
                "inline-flex items-center gap-2 text-sm mb-6 hover:underline transition-colors",
                isDark ? "text-slate-400" : "text-slate-600"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Sign In
            </Link>
            
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className={cn("text-2xl font-bold mb-2 text-center", isDark ? "text-slate-100" : "text-slate-900")}>
              Reset Password
            </h1>
            <p className={cn("text-sm text-center", isDark ? "text-slate-400" : "text-slate-600")}>
              Enter your new password below to reset your account password.
            </p>
          </div>

          {/* Error */}
          {errors.submit && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <p className="text-red-700 text-sm">{errors.submit}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* New Password */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors",
                    errors.newPassword ? "border-red-500 focus:ring-red-500" : "",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                      : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                  )}
                  placeholder="Enter new password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                  ) : (
                    <Eye className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                  )}
                </button>
              </div>
              {formData.newPassword && (
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
              {errors.newPassword && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.newPassword}
                </p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors",
                    errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                      : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                  )}
                  placeholder="Confirm new password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                  ) : (
                    <Eye className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Password Requirements */}
            <div className={cn("p-4 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
              <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-200" : "text-slate-800")}>
                Password Requirements:
              </h3>
              <ul className={cn("text-sm space-y-1", isDark ? "text-slate-300" : "text-slate-700")}>
                <li className={cn(formData.newPassword.length >= 8 ? "text-green-500" : "")}>
                  ✓ At least 8 characters
                </li>
                <li className={cn(/[A-Z]/.test(formData.newPassword) ? "text-green-500" : "")}>
                  ✓ One uppercase letter
                </li>
                <li className={cn(/[a-z]/.test(formData.newPassword) ? "text-green-500" : "")}>
                  ✓ One lowercase letter
                </li>
                <li className={cn(/\d/.test(formData.newPassword) ? "text-green-500" : "")}>
                  ✓ One number
                </li>
                <li className={cn(/[@$!%*?&]/.test(formData.newPassword) ? "text-green-500" : "")}>
                  ✓ One special character (optional)
                </li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "w-full py-3 px-4 rounded-lg font-medium transition-colors",
                isLoading
                  ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                  : "bg-orange-500 text-white hover:bg-orange-600"
              )}
            >
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>

          {/* Security Notice */}
          <div className={cn("mt-6 p-3 rounded-lg text-xs", isDark ? "bg-slate-800" : "bg-slate-50")}>
            <p className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
              <strong>Security Notice:</strong> Make sure your new password is strong and unique. 
              Avoid using common passwords or personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
