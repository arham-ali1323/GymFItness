import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | German Fitness Sahiwal",
  description:
    "Sign in to your German Fitness account to manage your membership, track your progress, and access personalized workout and nutrition plans.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
