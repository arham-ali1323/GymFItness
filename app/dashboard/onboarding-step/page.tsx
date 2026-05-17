"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { User, Users, UserCircle, ArrowRight, ArrowLeft, Target, Activity, Calendar, Award, Check } from 'lucide-react';

const OnboardingStep = () => {
  const { isDark } = useDashboardMode();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGender, setSelectedGender] = useState('');
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [fitnessGoals, setFitnessGoals] = useState<string[]>([]);
  const [workoutDays, setWorkoutDays] = useState<string[]>([]);
  const [workoutTime, setWorkoutTime] = useState('');
  const [equipment, setEquipment] = useState<string[]>([]);
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  
  const totalSteps = 6;

  const genderOptions = [
    {
      id: 'woman',
      label: 'Woman',
      icon: User,
      color: 'bg-pink-500'
    },
    {
      id: 'man',
      label: 'Man',
      icon: User,
      color: 'bg-blue-500'
    },
    {
      id: 'neutral',
      label: 'Neutral',
      icon: UserCircle,
      color: 'bg-purple-500'
    }
  ];

  const fitnessLevelOptions = [
    {
      id: 'beginner',
      label: 'Beginner',
      description: 'New to fitness, starting your journey',
      icon: '🌱',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'intermediate',
      label: 'Intermediate',
      description: 'Regular exercise, looking to improve',
      icon: '💪',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'advanced',
      label: 'Advanced',
      description: 'Experienced, pushing limits',
      icon: '🔥',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const fitnessGoalOptions = [
    { id: 'weight-loss', label: 'Weight Loss', icon: '⚖️' },
    { id: 'muscle-gain', label: 'Muscle Gain', icon: '💪' },
    { id: 'endurance', label: 'Endurance', icon: '🏃' },
    { id: 'flexibility', label: 'Flexibility', icon: '🧘' },
    { id: 'strength', label: 'Strength', icon: '🏋️' },
    { id: 'general-fitness', label: 'General Fitness', icon: '✨' }
  ];

  const workoutDayOptions = [
    { id: 'monday', label: 'Mon' },
    { id: 'tuesday', label: 'Tue' },
    { id: 'wednesday', label: 'Wed' },
    { id: 'thursday', label: 'Thu' },
    { id: 'friday', label: 'Fri' },
    { id: 'saturday', label: 'Sat' },
    { id: 'sunday', label: 'Sun' }
  ];

  const workoutTimeOptions = [
    { id: 'morning', label: 'Morning', time: '6:00 AM - 10:00 AM', icon: '🌅' },
    { id: 'afternoon', label: 'Afternoon', time: '12:00 PM - 4:00 PM', icon: '☀️' },
    { id: 'evening', label: 'Evening', time: '5:00 PM - 9:00 PM', icon: '🌆' },
    { id: 'night', label: 'Night', time: '9:00 PM - 11:00 PM', icon: '🌙' }
  ];

  const equipmentOptions = [
    { id: 'none', label: 'No Equipment', icon: '🤸' },
    { id: 'dumbbells', label: 'Dumbbells', icon: '🏋️' },
    { id: 'resistance-bands', label: 'Resistance Bands', icon: '🎯' },
    { id: 'barbell', label: 'Barbell', icon: '🏋️‍♂️' },
    { id: 'treadmill', label: 'Treadmill', icon: '🏃' },
    { id: 'full-gym', label: 'Full Gym Access', icon: '🏢' }
  ];

  const handleContinue = () => {
    // Validate current step before proceeding
    const canProceed = () => {
      switch (currentStep) {
        case 1: return selectedGender !== '';
        case 2: return fitnessLevel !== '';
        case 3: return fitnessGoals.length > 0;
        case 4: return workoutDays.length > 0;
        case 5: return workoutTime !== '';
        case 6: return equipment.length > 0;
        default: return false;
      }
    };

    if (canProceed()) {
      // Save current step data
      console.log(`Step ${currentStep} data saved`);
      
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        // Complete onboarding
        const onboardingData = {
          selectedGender,
          fitnessLevel,
          fitnessGoals,
          workoutDays,
          workoutTime,
          equipment,
          completedAt: new Date().toISOString()
        };
        
        console.log('Onboarding completed!', onboardingData);
        
        // Save to localStorage (in a real app, this would go to a backend API)
        localStorage.setItem('userOnboarding', JSON.stringify(onboardingData));
        
        // Show completion state or redirect
        // Option 1: Show success message
        setOnboardingComplete(true);
        
        // Option 2: Redirect to dashboard (uncomment to use)
        // window.location.href = '/dashboard';
        
        // Option 3: Navigate using Next.js router (uncomment to use)
        // router.push('/dashboard');
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoToDashboard = () => {
    // Navigate to dashboard
    window.location.href = '/dashboard';
  };

  const handleRestartOnboarding = () => {
    // Reset all states
    setCurrentStep(1);
    setSelectedGender('');
    setFitnessLevel('');
    setFitnessGoals([]);
    setWorkoutDays([]);
    setWorkoutTime('');
    setEquipment([]);
    setOnboardingComplete(false);
  };

  const handleGenderSelect = (genderId: string) => {
    setSelectedGender(genderId);
  };

  const handleFitnessLevelSelect = (level: string) => {
    setFitnessLevel(level);
  };

  const toggleFitnessGoal = (goalId: string) => {
    setFitnessGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const toggleWorkoutDay = (dayId: string) => {
    setWorkoutDays(prev => 
      prev.includes(dayId) 
        ? prev.filter(id => id !== dayId)
        : [...prev, dayId]
    );
  };

  const handleWorkoutTimeSelect = (time: string) => {
    setWorkoutTime(time);
  };

  const toggleEquipment = (equipmentId: string) => {
    setEquipment(prev => 
      prev.includes(equipmentId) 
        ? prev.filter(id => id !== equipmentId)
        : [...prev, equipmentId]
    );
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Choose gender';
      case 2: return 'What\'s your fitness level?';
      case 3: return 'What are your fitness goals?';
      case 4: return 'When do you want to work out?';
      case 5: return 'What time do you prefer?';
      case 6: return 'What equipment do you have?';
      default: return 'Step ' + currentStep;
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1: return 'Select the option that best describes you to personalize your fitness experience.';
      case 2: return 'Tell us about your current fitness experience so we can tailor your program.';
      case 3: return 'Select all goals that apply to create your personalized workout plan.';
      case 4: return 'Choose the days you prefer to work out for optimal consistency.';
      case 5: return 'Select your preferred workout time to schedule your sessions.';
      case 6: return 'Let us know what equipment you have access to.';
      default: return '';
    }
  };

  return (
    <div className={cn("min-h-screen flex overflow-hidden", isDark ? "bg-black" : "bg-gray-50")}>
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600">
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white">
              <div className="w-64 h-64 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center">
                {onboardingComplete ? (
                  <Award className="w-32 h-32 text-white" />
                ) : (
                  <Users className="w-32 h-32 text-white" />
                )}
              </div>
              <h1 className="text-4xl font-bold mb-4">FitNexus</h1>
              <p className="text-xl opacity-90">
                {onboardingComplete ? 'Welcome to Your Fitness Journey!' : 'Your Journey to Fitness Starts Here'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-y-auto">
        <div className="w-full max-w-md">
          {!onboardingComplete ? (
            <>
              {/* Step Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={cn("text-sm font-medium", isDark ? "text-gray-300" : "text-gray-600")}>
                    Step {currentStep} of {totalSteps}
                  </span>
                  <span className={cn("text-sm font-medium", isDark ? "text-gray-300" : "text-gray-600")}>
                    {Math.round((currentStep / totalSteps) * 100)}%
                  </span>
                </div>
                <div className={cn("w-full rounded-full h-2", isDark ? "bg-gray-700" : "bg-gray-200")}>
                  <div
                    className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Step Content */}
              <div className="mb-8">
                <h2 className={cn(
                  "text-3xl font-bold mb-4",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  {getStepTitle()}
                </h2>
                <p className={cn(
                  "text-lg mb-8",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}>
                  {getStepDescription()}
                </p>

                {/* Step 1: Gender Selection */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    {genderOptions.map((option) => {
                      const Icon = option.icon;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleGenderSelect(option.id)}
                          className={cn(
                            "w-full p-6 rounded-xl border-2 transition-all duration-200 flex items-center gap-4",
                            selectedGender === option.id
                              ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                              : isDark
                                ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                                : "border-gray-200 bg-white hover:border-gray-300"
                          )}
                        >
                          <div className={cn(
                            "w-16 h-16 rounded-full flex items-center justify-center",
                            selectedGender === option.id
                              ? option.color
                              : isDark
                                ? "bg-gray-700"
                                : "bg-gray-100"
                          )}>
                            <Icon className={cn(
                              "w-8 h-8",
                              selectedGender === option.id ? "text-white" : isDark ? "text-gray-400" : "text-gray-600"
                            )} />
                          </div>
                          <div className="text-left">
                            <h3 className={cn(
                              "text-xl font-semibold",
                              selectedGender === option.id
                                ? "text-orange-600 dark:text-orange-400"
                                : isDark
                                  ? "text-white"
                                  : "text-gray-900"
                            )}>
                              {option.label}
                            </h3>
                            {selectedGender === option.id && (
                              <p className={cn(
                                "text-sm mt-1",
                                isDark ? "text-orange-400" : "text-orange-600"
                              )}>
                                Selected
                              </p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Step 2: Fitness Level */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    {fitnessLevelOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleFitnessLevelSelect(option.id)}
                        className={cn(
                          "w-full p-6 rounded-xl border-2 transition-all duration-200",
                          fitnessLevel === option.id
                            ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                            : isDark
                              ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                              : "border-gray-200 bg-white hover:border-gray-300"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "w-16 h-16 rounded-full flex items-center justify-center text-2xl",
                            fitnessLevel === option.id
                              ? "bg-gradient-to-r " + option.color
                              : isDark
                                ? "bg-gray-700"
                                : "bg-gray-100"
                          )}>
                            {option.icon}
                          </div>
                          <div className="text-left">
                            <h3 className={cn(
                              "text-xl font-semibold",
                              fitnessLevel === option.id
                                ? "text-orange-600 dark:text-orange-400"
                                : isDark
                                  ? "text-white"
                                  : "text-gray-900"
                            )}>
                              {option.label}
                            </h3>
                            <p className={cn(
                              "text-sm mt-1",
                              isDark ? "text-gray-400" : "text-gray-600"
                            )}>
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 3: Fitness Goals */}
                {currentStep === 3 && (
                  <div className="grid grid-cols-2 gap-4">
                    {fitnessGoalOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => toggleFitnessGoal(option.id)}
                        className={cn(
                          "p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2",
                          fitnessGoals.includes(option.id)
                            ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                            : isDark
                              ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                              : "border-gray-200 bg-white hover:border-gray-300"
                        )}
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <span className={cn(
                          "text-sm font-medium text-center",
                          fitnessGoals.includes(option.id)
                            ? "text-orange-600 dark:text-orange-400"
                            : isDark
                              ? "text-white"
                              : "text-gray-900"
                        )}>
                          {option.label}
                        </span>
                        {fitnessGoals.includes(option.id) && (
                          <Check className="w-4 h-4 text-orange-500" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 4: Workout Days */}
                {currentStep === 4 && (
                  <div className="grid grid-cols-7 gap-2">
                    {workoutDayOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => toggleWorkoutDay(option.id)}
                        className={cn(
                          "p-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center",
                          workoutDays.includes(option.id)
                            ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                            : isDark
                              ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                              : "border-gray-200 bg-white hover:border-gray-300"
                        )}
                      >
                        <span className={cn(
                          "text-sm font-medium",
                          workoutDays.includes(option.id)
                            ? "text-orange-600 dark:text-orange-400"
                            : isDark
                              ? "text-white"
                              : "text-gray-900"
                        )}>
                          {option.label}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 5: Workout Time */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    {workoutTimeOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => handleWorkoutTimeSelect(option.id)}
                        className={cn(
                          "w-full p-6 rounded-xl border-2 transition-all duration-200 flex items-center gap-4",
                          workoutTime === option.id
                            ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                            : isDark
                              ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                              : "border-gray-200 bg-white hover:border-gray-300"
                        )}
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <div className="text-left flex-1">
                          <h3 className={cn(
                            "text-xl font-semibold",
                            workoutTime === option.id
                              ? "text-orange-600 dark:text-orange-400"
                              : isDark
                                ? "text-white"
                                : "text-gray-900"
                          )}>
                            {option.label}
                          </h3>
                          <p className={cn(
                            "text-sm mt-1",
                            isDark ? "text-gray-400" : "text-gray-600"
                          )}>
                            {option.time}
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* Step 6: Equipment */}
                {currentStep === 6 && (
                  <div className="grid grid-cols-2 gap-4">
                    {equipmentOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => toggleEquipment(option.id)}
                        className={cn(
                          "p-4 rounded-xl border-2 transition-all duration-200 flex flex-col items-center gap-2",
                          equipment.includes(option.id)
                            ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                            : isDark
                              ? "border-gray-700 bg-gray-800 hover:border-gray-600"
                              : "border-gray-200 bg-white hover:border-gray-300"
                        )}
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <span className={cn(
                          "text-sm font-medium text-center",
                          equipment.includes(option.id)
                            ? "text-orange-600 dark:text-orange-400"
                            : isDark
                              ? "text-white"
                              : "text-gray-900"
                        )}>
                          {option.label}
                        </span>
                        {equipment.includes(option.id) && (
                          <Check className="w-4 h-4 text-orange-500" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 mb-6">
                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className={cn(
                      "flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3",
                      isDark
                        ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    )}
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                )}
                
                <button
                  onClick={handleContinue}
                  disabled={
                    (currentStep === 1 && !selectedGender) ||
                    (currentStep === 2 && !fitnessLevel) ||
                    (currentStep === 3 && fitnessGoals.length === 0) ||
                    (currentStep === 4 && workoutDays.length === 0) ||
                    (currentStep === 5 && !workoutTime) ||
                    (currentStep === 6 && equipment.length === 0)
                  }
                  className={cn(
                    "flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-3",
                    currentStep === 1 && selectedGender ||
                    currentStep === 2 && fitnessLevel ||
                    currentStep === 3 && fitnessGoals.length > 0 ||
                    currentStep === 4 && workoutDays.length > 0 ||
                    currentStep === 5 && workoutTime ||
                    currentStep === 6 && equipment.length > 0
                      ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg"
                      : isDark
                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  )}
                >
                  {currentStep === totalSteps ? 'Complete' : 'Continue'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Skip Option */}
              <div className="mt-6 text-center">
                <button className={cn(
                  "text-sm underline transition-colors",
                  isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-600"
                )}>
                  Skip for now
                </button>
              </div>
            </>
          ) : (
            /* Completion Screen */
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
              
              <h2 className={cn(
                "text-3xl font-bold mb-4",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Congratulations! 🎉
              </h2>
              
              <p className={cn(
                "text-lg mb-8",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                You've completed your onboarding! Your personalized fitness journey is ready to begin.
              </p>

              {/* Summary of selections */}
              <div className={cn(
                "p-6 rounded-xl mb-8 text-left",
                isDark ? "bg-gray-800" : "bg-gray-100"
              )}>
                <h3 className={cn("font-semibold mb-4", isDark ? "text-white" : "text-gray-900")}>
                  Your Profile Summary:
                </h3>
                <div className="space-y-2 text-sm">
                  <div className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
                    <strong>Gender:</strong> {selectedGender}
                  </div>
                  <div className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
                    <strong>Fitness Level:</strong> {fitnessLevel}
                  </div>
                  <div className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
                    <strong>Goals:</strong> {fitnessGoals.join(', ')}
                  </div>
                  <div className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
                    <strong>Workout Days:</strong> {workoutDays.join(', ')}
                  </div>
                  <div className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
                    <strong>Preferred Time:</strong> {workoutTime}
                  </div>
                  <div className={cn(isDark ? "text-gray-300" : "text-gray-700")}>
                    <strong>Equipment:</strong> {equipment.join(', ')}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <button
                  onClick={handleGoToDashboard}
                  className="w-full py-4 px-6 rounded-xl font-semibold text-lg bg-orange-500 text-white hover:bg-orange-600 shadow-lg transition-all duration-200 flex items-center justify-center gap-3"
                >
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={handleRestartOnboarding}
                  className={cn(
                    "w-full py-3 px-6 rounded-xl font-medium transition-all duration-200",
                    isDark
                      ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  )}
                >
                  Restart Onboarding
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingStep;
