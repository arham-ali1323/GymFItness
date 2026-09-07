import type { Metadata } from "next";
import { Suspense } from "react";
import LoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Member Login | German Fitness Sahiwal",
  description:
    "Log in to your German Fitness member account to manage your membership, view class schedules, track progress, and renew your subscription online.",
  alternates: {
    canonical: "/login",
  },
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <section>
          <h1 className="mb-4 text-3xl font-bold text-slate-100 md:text-5xl">
            Member Login —{" "}
            <span className="text-orange-500">German Fitness Sahiwal</span>
          </h1>
          <p className="mb-5 text-lg text-slate-400">
            Welcome back to Sahiwal's premier fitness destination. Sign in to
            your secure member account to access your personalized dashboard,
            manage your membership, and take the next step in your fitness
            journey.
          </p>
          <p className="mb-5 text-slate-400">
            Your German Fitness account is the central hub for everything
            related to your workout experience. Track your attendance, check the
            weekly class timetable, monitor your transformative 90-day gym
            program, and keep your payment details up to date — all from one
            place.
          </p>
          <p className="mb-5 text-slate-400">
            With more than 500 happy members, 24/7 gym access, expert personal
            trainers, and personalized nutrition plans, German Fitness is
            widely regarded as the best gym in Sahiwal and across Pakistan for
            anyone serious about results. Our dedicated coaching team helps you
            build muscle, lose weight safely, and develop healthy habits that
            last a lifetime.
          </p>
          <p className="mb-8 text-slate-400">
            Having trouble signing in? Use the forgot password link to reset
            your password, or contact our friendly front desk and a German
            Fitness team member will get you back on track right away. New to
            the gym? Create a free account or book a trial session to experience
            our premium equipment, group fitness classes, and expert coaching
            before you commit.
          </p>

          <h2 className="mb-3 text-lg font-semibold text-slate-200">
            What you can do after logging in
          </h2>
          <ul className="mb-8 space-y-2 text-slate-400">
            <li className="flex gap-2">
              <span className="text-orange-500">–</span>
              Track your workouts, attendance, and fitness progress
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500">–</span>
              View the weekly class timetable and reserve your spot
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500">–</span>
              Manage and renew your gym membership online
            </li>
            <li className="flex gap-2">
              <span className="text-orange-500">–</span>
              Access your personalized nutrition and training plans
            </li>
          </ul>
        </section>

        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}