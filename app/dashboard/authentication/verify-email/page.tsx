"use client";

import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { Mail, ArrowLeft, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const VerifyEmail = () => {
  const { isDark } = useDashboardMode();
  const [email, setEmail] = useState('user@example.com'); // Simulate email from URL or previous step
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    // Simulate email verification check
    const checkVerification = setTimeout(() => {
      setIsLoading(false);
      // In a real app, this would check with the server
      // For demo, we'll keep it as not verified
    }, 2000);

    return () => clearTimeout(checkVerification);
  }, []);

  useEffect(() => {
    if (countdown > 0 && !canResend) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setCanResend(true);
    }
  }, [countdown, canResend]);

  const handleResendEmail = async () => {
    setIsResending(true);
    setCanResend(false);
    setCountdown(60);

    try {
      // Simulate API call to resend verification email
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Verification email resent to:', email);
    } catch (error) {
      console.error('Failed to resend email');
    } finally {
      setIsResending(false);
    }
  };

  const handleVerifyEmail = () => {
    // Simulate successful verification
    setIsVerified(true);
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
              Email Verified!
            </h1>
            <p className={cn("text-sm mb-6", isDark ? "text-slate-400" : "text-slate-600")}>
              Your email address has been successfully verified. You can now access all features of your account.
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
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className={cn("text-2xl font-bold mb-2 text-center", isDark ? "text-slate-100" : "text-slate-900")}>
              Verify Your Email
            </h1>
            <p className={cn("text-sm text-center", isDark ? "text-slate-400" : "text-slate-600")}>
              We've sent a verification link to{' '}
              <span className="font-medium">{email}</span>
              <br />
              Please check your email and click the link to verify your account.
            </p>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                Checking verification status...
              </p>
            </div>
          ) : (
            <>
              {/* Verification Status */}
              <div className={cn("mb-6 p-4 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className={cn("text-sm font-semibold", isDark ? "text-slate-200" : "text-slate-800")}>
                      Verification Pending
                    </h3>
                    <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Please verify your email to continue
                    </p>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className={cn("mb-6 p-4 rounded-lg", isDark ? "bg-slate-800" : "bg-slate-50")}>
                <h3 className={cn("text-sm font-semibold mb-2", isDark ? "text-slate-200" : "text-slate-800")}>
                  Next Steps:
                </h3>
                <ul className={cn("text-sm space-y-1", isDark ? "text-slate-300" : "text-slate-700")}>
                  <li>1. Open your email inbox</li>
                  <li>2. Look for an email from German Fitness</li>
                  <li>3. Click the verification link in the email</li>
                  <li>4. Return to this page to continue</li>
                </ul>
              </div>

              {/* Resend Email */}
              <div className="space-y-4">
                <button
                  onClick={handleResendEmail}
                  disabled={!canResend || isResending}
                  className={cn(
                    "w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2",
                    !canResend || isResending
                      ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                      : "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  {isResending ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : canResend ? (
                    "Resend Verification Email"
                  ) : (
                    `Resend in ${countdown}s`
                  )}
                </button>

                {/* Demo Button - For testing purposes */}
                <button
                  onClick={handleVerifyEmail}
                  className={cn(
                    "w-full py-3 px-4 border rounded-lg font-medium transition-colors",
                    isDark
                      ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                      : "border-slate-300 text-slate-700 hover:bg-slate-50"
                  )}
                >
                  Simulate Verification (Demo)
                </button>
              </div>

              {/* Help Section */}
              <div className={cn("mt-6 p-3 rounded-lg text-xs", isDark ? "bg-slate-800" : "bg-slate-50")}>
                <p className={cn(isDark ? "text-slate-400" : "text-slate-600")}>
                  <strong>Didn't receive the email?</strong> Check your spam folder or 
                  click the resend button above. If you still don't receive it, 
                  contact our support team.
                </p>
              </div>
            </>
          )}

          {/* Sign Up Link */}
          <div className="text-center mt-6">
            <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
              Wrong email address?{' '}
              <Link 
                href="/dashboard/authentication/signup"
                className={cn("font-medium hover:underline", isDark ? "text-orange-400" : "text-orange-600")}
              >
                Sign up with different email
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
