import { redirect } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Create Account | German Fitness Sahiwal",
  description:
    "Create a free German Fitness account to join Sahiwal's premier gym, access personalized training plans, and start your 90-day transformation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RegisterPage() {
  redirect('/dashboard/authentication/signup');
}