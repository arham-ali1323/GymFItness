"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { UserCircle2, Camera, Edit2, Mail, Phone, MapPin, Calendar, Award, Target, Shield } from 'lucide-react';

const Profile = () => {
  const { isDark } = useDashboardMode();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-01-15',
    location: 'New York, NY',
    bio: 'Fitness enthusiast passionate about health and wellness. Love lifting weights and running marathons.',
    height: '5\'10"',
    weight: '180 lbs',
    bodyFat: '18%',
    fitnessLevel: 'Intermediate',
    goals: ['Build muscle', 'Improve endurance', 'Maintain healthy lifestyle'],
    memberSince: '2023-01-15',
    membershipType: 'Premium',
    emergencyContact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '+1 (555) 987-6543'
    }
  });

  const stats = {
    totalWorkouts: 156,
    streak: 7,
    caloriesBurned: 45680,
    achievements: 12,
    personalRecords: 8
  };

  const recentActivity = [
    { date: '2024-03-24', activity: 'Completed Upper Body Workout', calories: 320 },
    { date: '2024-03-23', activity: '5K Morning Run', calories: 280 },
    { date: '2024-03-22', activity: 'Yoga Flow Session', calories: 180 },
    { date: '2024-03-21', activity: 'Leg Day Strength Training', calories: 380 },
    { date: '2024-03-20', activity: 'HIIT Cardio Blast', calories: 450 }
  ];

  const handleInputChange = (field: string, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, save to backend
    console.log('Profile saved:', profile);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values
  };

  return (
    <div className={cn("min-h-screen p-6 overflow-hidden", isDark ? "bg-black" : "bg-slate-100")}>
      <div className={cn("rounded-2xl p-6 shadow-lg border", isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200")}>
        <div className="mb-6">
          <h1 className={cn("text-2xl font-bold mb-2", isDark ? "text-slate-100" : "text-slate-900")}>
            Profile
          </h1>
          <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
            Manage your personal information and fitness profile
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === 'overview'
                ? "bg-orange-500 text-white"
                : isDark
                ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('personal')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === 'personal'
                ? "bg-orange-500 text-white"
                : isDark
                ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            Personal Info
          </button>
          <button
            onClick={() => setActiveTab('fitness')}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === 'fitness'
                ? "bg-orange-500 text-white"
                : isDark
                ? "bg-slate-800 text-slate-300 hover:bg-slate-700"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            )}
          >
            Fitness Profile
          </button>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
                <div className="text-center mb-4">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <UserCircle2 className="w-12 h-12 text-white" />
                  </div>
                  <h2 className={cn("text-xl font-bold mb-1", isDark ? "text-slate-100" : "text-slate-900")}>
                    {profile.firstName} {profile.lastName}
                  </h2>
                  <p className={cn("text-sm mb-2", isDark ? "text-slate-400" : "text-slate-600")}>
                    {profile.email}
                  </p>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium inline-block",
                    profile.membershipType === 'Premium' ? "bg-orange-100 text-orange-800" : "bg-gray-100 text-gray-800"
                  )}>
                    {profile.membershipType} Member
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      Member since {profile.memberSince}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      {profile.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Target className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <span className={cn(isDark ? "text-slate-300" : "text-slate-700")}>
                      {profile.fitnessLevel}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className={cn("text-sm", isDark ? "text-slate-400" : "text-slate-600")}>
                    {profile.bio}
                  </p>
                </div>

                <button
                  onClick={() => setIsEditing(true)}
                  className={cn(
                    "w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2",
                    "bg-orange-500 text-white hover:bg-orange-600"
                  )}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
            </div>

            {/* Stats & Activity */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className={cn("w-4 h-4 text-orange-500")} />
                    <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Workouts
                    </span>
                  </div>
                  <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {stats.totalWorkouts}
                  </p>
                </div>

                <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className={cn("w-4 h-4 text-green-500")} />
                    <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Streak
                    </span>
                  </div>
                  <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {stats.streak}
                  </p>
                  <p className={cn("text-xs", isDark ? "text-slate-500" : "text-slate-500")}>
                    days
                  </p>
                </div>

                <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className={cn("w-4 h-4 text-red-500")} />
                    <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Calories
                    </span>
                  </div>
                  <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {stats.caloriesBurned.toLocaleString()}
                  </p>
                </div>

                <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className={cn("w-4 h-4 text-purple-500")} />
                    <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      Achievements
                    </span>
                  </div>
                  <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {stats.achievements}
                  </p>
                </div>

                <div className={cn("p-4 rounded-xl border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className={cn("w-4 h-4 text-blue-500")} />
                    <span className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                      PRs
                    </span>
                  </div>
                  <p className={cn("text-2xl font-bold", isDark ? "text-slate-100" : "text-slate-900")}>
                    {stats.personalRecords}
                  </p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
                <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                  Recent Activity
                </h3>
                <div className="space-y-3">
                  {recentActivity.map((activity, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-center justify-between p-3 rounded-lg",
                        isDark ? "bg-slate-700" : "bg-slate-50"
                      )}
                    >
                      <div>
                        <p className={cn("font-medium text-sm", isDark ? "text-slate-100" : "text-slate-900")}>
                          {activity.activity}
                        </p>
                        <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                          {activity.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className={cn("text-sm font-medium", isDark ? "text-slate-100" : "text-slate-900")}>
                          {activity.calories}
                        </p>
                        <p className={cn("text-xs", isDark ? "text-slate-400" : "text-slate-600")}>
                          calories
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Personal Info Tab */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Basic Information
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                      First Name
                    </label>
                    <input
                      type="text"
                      value={profile.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      disabled={!isEditing}
                      className={cn(
                        "w-full px-3 py-2 border rounded-lg",
                        isEditing
                          ? "focus:outline-none focus:ring-2 focus:ring-orange-500"
                          : "bg-transparent",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                  </div>
                  <div>
                    <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={profile.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      disabled={!isEditing}
                      className={cn(
                        "w-full px-3 py-2 border rounded-lg",
                        isEditing
                          ? "focus:outline-none focus:ring-2 focus:ring-orange-500"
                          : "bg-transparent",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Email
                  </label>
                  <div className="flex items-center gap-2">
                    <Mail className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                      className={cn(
                        "flex-1 px-3 py-2 border rounded-lg",
                        isEditing
                          ? "focus:outline-none focus:ring-2 focus:ring-orange-500"
                          : "bg-transparent",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Phone
                  </label>
                  <div className="flex items-center gap-2">
                    <Phone className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <input
                      type="tel"
                      value={profile.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      disabled={!isEditing}
                      className={cn(
                        "flex-1 px-3 py-2 border rounded-lg",
                        isEditing
                          ? "focus:outline-none focus:ring-2 focus:ring-orange-500"
                          : "bg-transparent",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Date of Birth
                  </label>
                  <div className="flex items-center gap-2">
                    <Calendar className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <input
                      type="date"
                      value={profile.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      disabled={!isEditing}
                      className={cn(
                        "flex-1 px-3 py-2 border rounded-lg",
                        isEditing
                          ? "focus:outline-none focus:ring-2 focus:ring-orange-500"
                          : "bg-transparent",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Location
                  </label>
                  <div className="flex items-center gap-2">
                    <MapPin className={cn("w-4 h-4", isDark ? "text-slate-400" : "text-slate-500")} />
                    <input
                      type="text"
                      value={profile.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      disabled={!isEditing}
                      className={cn(
                        "flex-1 px-3 py-2 border rounded-lg",
                        isEditing
                          ? "focus:outline-none focus:ring-2 focus:ring-orange-500"
                          : "bg-transparent",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Emergency Contact
              </h3>
              <div className="space-y-4">
                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Contact Name
                  </label>
                  <input
                    type="text"
                    value={profile.emergencyContact.name}
                    disabled={!isEditing}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg",
                      !isEditing && "bg-transparent",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  />
                </div>
                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Relationship
                  </label>
                  <input
                    type="text"
                    value={profile.emergencyContact.relationship}
                    disabled={!isEditing}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg",
                      !isEditing && "bg-transparent",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  />
                </div>
                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={profile.emergencyContact.phone}
                    disabled={!isEditing}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg",
                      !isEditing && "bg-transparent",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  />
                </div>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={handleSave}
                    className={cn(
                      "flex-1 py-2 px-4 rounded-lg font-medium transition-colors",
                      "bg-orange-500 text-white hover:bg-orange-600"
                    )}
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className={cn(
                      "flex-1 py-2 px-4 rounded-lg font-medium transition-colors",
                      isDark
                        ? "border-slate-600 text-slate-300 hover:bg-slate-700"
                        : "border-slate-300 text-slate-700 hover:bg-slate-100"
                    )}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Fitness Profile Tab */}
        {activeTab === 'fitness' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Physical Stats
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                      Height
                    </label>
                    <input
                      type="text"
                      value={profile.height}
                      disabled={!isEditing}
                      className={cn(
                        "w-full px-3 py-2 border rounded-lg",
                        !isEditing && "bg-transparent",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                  </div>
                  <div>
                    <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                      Weight
                    </label>
                    <input
                      type="text"
                      value={profile.weight}
                      disabled={!isEditing}
                      className={cn(
                        "w-full px-3 py-2 border rounded-lg",
                        !isEditing && "bg-transparent",
                        isDark
                          ? "bg-slate-700 text-slate-100 border-slate-600"
                          : "bg-white text-slate-900 border-slate-300"
                      )}
                    />
                  </div>
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Body Fat Percentage
                  </label>
                  <input
                    type="text"
                    value={profile.bodyFat}
                    disabled={!isEditing}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg",
                      !isEditing && "bg-transparent",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  />
                </div>

                <div>
                  <label className={cn("block text-sm font-medium mb-2", isDark ? "text-slate-300" : "text-slate-700")}>
                    Fitness Level
                  </label>
                  <select
                    value={profile.fitnessLevel}
                    onChange={(e) => handleInputChange('fitnessLevel', e.target.value)}
                    disabled={!isEditing}
                    className={cn(
                      "w-full px-3 py-2 border rounded-lg",
                      !isEditing && "bg-transparent",
                      isDark
                        ? "bg-slate-700 text-slate-100 border-slate-600"
                        : "bg-white text-slate-900 border-slate-300"
                    )}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={cn("rounded-xl p-6 border", isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200")}>
              <h3 className={cn("text-lg font-semibold mb-4", isDark ? "text-slate-100" : "text-slate-900")}>
                Fitness Goals
              </h3>
              <div className="space-y-3">
                {profile.goals.map((goal, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-3 rounded-lg border",
                      isDark ? "bg-slate-700 border-slate-600" : "bg-slate-50 border-slate-200"
                    )}
                  >
                    <p className={cn("font-medium", isDark ? "text-slate-100" : "text-slate-900")}>
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
