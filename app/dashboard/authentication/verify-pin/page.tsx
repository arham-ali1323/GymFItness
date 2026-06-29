"use client";

import React, { useState, useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Shield, ArrowLeft, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const VerifyPin = () => {
  const { isDark } = useDashboardMode();
  const [pin, setPin] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(3);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleInputChange = (index: number, value: string) => {
    // Only allow numbers
    const numValue = value.replace(/[^0-9]/g, '');
    
    if (numValue.length <= 1) {
      const newPin = [...pin];
      newPin[index] = numValue;
      setPin(newPin);
      setError('');

      // Auto-focus next input
      if (numValue && index < pin.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !pin[index] && index > 0) {
      // Focus previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < pin.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
    
    if (pastedData.length === 6) {
      const newPin = pastedData.split('');
      setPin(newPin);
      setError('');
      // Focus last input
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const pinString = pin.join('');
    
    if (pinString.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate PIN verification (accept 123456 for demo)
      if (pinString === '123456') {
        setIsVerified(true);
      } else {
        setAttempts(prev => prev - 1);
        if (attempts > 1) {
          setError(`Invalid PIN. ${attempts - 1} attempts remaining.`);
        } else {
          setError('Too many failed attempts. Please request a new PIN.');
        }
      }
    } catch (error) {
      setError('Failed to verify PIN. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendPin = async () => {
    setIsResending(true);
    setCanResend(false);
    setCountdown(60);
    setAttempts(3);
    setPin(['', '', '', '', '', '']);
    setError('');

    try {
      // Simulate API call to resend PIN
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('New PIN sent');
    } catch (error) {
      console.error('Failed to resend PIN');
    } finally {
      setIsResending(false);
    }
  };

  const handleClear = () => {
    setPin(['', '', '', '', '', '']);
    setError('');
    inputRefs.current[0]?.focus();
  };

  if (isVerified) {
    return (
      <div className={cn("min-h-screen flex items-center justify-center p-6", isDark ? "bg-black" : "bg-slate-100")}>
        <div className="w-full max-w-md">
          <div className={cn("rounded-2xl p-8 shadow-lg border text-center", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
              PIN Verified!
            </h1>
            <p className={cn("text-sm mb-6", isDark ? "text-slate-400" : "text-slate-600")}>
              Your PIN has been successfully verified. You can now continue with your authentication.
            </p>
            
            <div className="space-y-3">
              <Link
                href="/dashboard/authentication/signin"
                className="block w-full py-3 px-4 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors text-center"
              >
                Continue to Sign In
              </Link>
              
              <Link
                href="/dashboard"
                className={cn(
                  "block w-full py-3 px-4 border rounded-lg font-medium transition-colors text-center",
                  isDark
                    ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                    : "border-slate-300 text-slate-700 hover:bg-slate-50"
                )}
              >
                Go to Dashboard
              </Link>
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className={cn("text-2xl font-bold mb-2 text-center", isDark ? "text-slate-100" : "text-slate-900")}>
              Enter Verification PIN
            </h1>
            <p className={cn("text-sm text-center", isDark ? "text-slate-400" : "text-slate-600")}>
              We've sent a 6-digit PIN to your registered device. 
              Enter it below to verify your identity.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          {/* PIN Input */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className={cn("block text-sm font-medium mb-4 text-center", isDark ? "text-slate-300" : "text-slate-700")}>
                Enter 6-digit PIN
              </label>
              <div className="flex justify-center gap-2 mb-4">
                {pin.map((digit, index) => (
                  <input
                    key={index}
                    ref={el => { inputRefs.current[index] = el; }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={index === 0 ? handlePaste : undefined}
                    className={cn(
                      "w-12 h-12 text-center text-lg font-bold border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors",
                      error ? "border-red-500 focus:ring-red-500" : "",
                      isDark
                        ? "bg-slate-800 text-slate-100 border-slate-700"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                    disabled={isLoading}
                  />
                ))}
              </div>
              
              {/* Demo Hint */}
              <div className={cn("text-xs text-center", isDark ? "text-slate-500" : "text-slate-400")}>
                Demo: Use PIN <span className="font-mono bg-slate-200 px-1 rounded">123456</span>
              </div>
            </div>

            {/* Attempts Remaining */}
            {attempts < 3 && (
              <div className={cn("text-center text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                Attempts remaining: {attempts}
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                type="submit"
                disabled={isLoading || pin.join('').length !== 6}
                className={cn(
                  "w-full py-3 px-4 rounded-lg font-medium transition-colors",
                  isLoading || pin.join('').length !== 6
                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                    : "bg-orange-500 text-white hover:bg-orange-600"
                )}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Verifying...
                  </div>
                ) : (
                  'Verify PIN'
                )}
              </button>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={handleClear}
                  className={cn(
                    "flex-1 py-2 px-4 border rounded-lg font-medium transition-colors",
                    isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  )}
                >
                  Clear
                </button>

                <button
                  type="button"
                  onClick={handleResendPin}
                  disabled={!canResend || isResending}
                  className={cn(
                    "flex-1 py-2 px-4 border rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                    !canResend || isResending
                      ? "border-gray-300 text-gray-400 cursor-not-allowed"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  )}
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : canResend ? (
                    "Resend PIN"
                  ) : (
                    `Resend (${countdown}s)`
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Help Section */}
          <div className={cn("mt-6 p-4 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
            <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-200" : "text-slate-800")}>
              Need Help?
            </h3>
            <ul className={cn("text-sm space-y-1", isDark ? "text-slate-300" : "text-slate-700")}>
              <li>• Make sure you're entering the correct 6-digit PIN</li>
              <li>• Check your registered device for the PIN</li>
              <li>• PIN expires after 10 minutes</li>
              <li>• Contact support if you continue to have issues</li>
            </ul>
          </div>

          {/* Sign In Link */}
          <div className="text-center mt-6">
            <Link 
              href="/dashboard/authentication/signin"
              className={cn("text-sm hover:underline", isDark ? "text-orange-400" : "text-orange-600")}
            >
              Back to Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyPin;
