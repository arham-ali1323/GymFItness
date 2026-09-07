import type { Metadata } from "next";
import WorkoutBuilder from "@/components/workouts/workout-builder";

export const metadata: Metadata = {
  title: "Create Your Own Workout | German Fitness Sahiwal",
  description:
    "Build a personalized workout plan at German Fitness. Choose your muscle groups and exercises to create a routine tailored to your fitness goals.",
};

export default function CreateWorkoutPage() {
  return <WorkoutBuilder />;
}
