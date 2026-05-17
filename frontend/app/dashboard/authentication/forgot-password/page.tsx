"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Mail, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

const ForgotPassword = () => {
  const { isDark } = useDashboardMode();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = () => {
    if (!email.trim()) {
      setErrors('Email is required');
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrors('Please enter a valid email');
      return false;
    }
    setErrors('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful email sending
      setIsSuccess(true);
      console.log('Password reset email sent to:', email);
      
    } catch (error) {
      setErrors('Failed to send reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors('');
  };

  if (isSuccess) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center p-6", isDark ? "bg-black" : "bg-slate-100")}>
        <div className="w-full max-w-md">
          <div className={cn("rounded-2xl p-8 shadow-lg border text-center", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
              Email Sent
            </h1>
            <p className={cn("text-sm mb-6", isDark ? "text-slate-400" : "text-slate-600")}>
              We've sent a password reset link to{' '}
              <span className="font-medium">{email}</span>
              <br />
              Please check your email and follow the instructions.
            </p>
            
            <div className="space-y-4">
              <div className={cn("p-4 rounded-lg text-left", isDark ? "bg-slate-800" : "bg-slate-50")}>
                <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-200" : "text-slate-800")}>
                  What's next?
                </h3>
                <ul className={cn("text-sm space-y-1", isDark ? "text-slate-300" : "text-slate-700")}>
                  <li>1. Check your email inbox</li>
                  <li>2. Look for an email from German Fitness</li>
                  <li>3. Click the reset link in the email</li>
                  <li>4. Create a new password</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <Link
                  href="/dashboard/authentication/signin"
                  className="block w-full py-3 px-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors text-center"
                >
                  Back to Sign In
                </Link>
                
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail('');
                    setErrors('');
                  }}
                  className={cn(
                    "block w-full py-3 px-4 border rounded-lg font-medium transition-colors",
                    isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  )}
                >
                  Try Different Email
                </button>
              </div>
            </div>
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
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className={cn("text-2xl font-bold mb-2 text-center", isDark ? "text-slate-100" : "text-slate-900")}>
              Forgot Password?
            </h1>
            <p className={cn("text-sm text-center", isDark ? "text-slate-400" : "text-slate-600")}>
              No worries! Enter your email address below and we'll send you a link to reset your password.
            </p>
          </div>

          {/* Error */}
          {errors && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <p className="text-red-700 text-sm">{errors}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={handleInputChange}
                  className={cn(
                    "w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors",
                    errors ? "border-red-500 focus:ring-red-500" : "",
                    isDark
                      ? "bg-slate-800 text-slate-100 border-slate-700 placeholder:text-slate-500"
                      : "bg-white text-slate-900 border-slate-300 placeholder:text-slate-400"
                  )}
                  placeholder="Enter your email"
                />
              </div>
              {errors && (
                <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors}
                </p>
              )}
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
              {isLoading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>

          {/* Help Section */}
          <div className={cn("mt-8 p-4 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
            <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-200" : "text-slate-800")}>
              Need Help?
            </h3>
            <ul className={cn("text-sm space-y-1", isDark ? "text-slate-300" : "text-slate-700")}>
              <li>• Make sure to check your spam folder</li>
              <li>• The reset link will expire in 24 hours</li>
              <li>• If you don't receive an email, try again with a different address</li>
            </ul>
          </div>

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
              Don't have an account?{' '}
              <Link 
                href="/dashboard/authentication/signup"
                className={cn("font-medium hover:underline", isDark ? "text-orange-400" : "text-orange-600")}
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
