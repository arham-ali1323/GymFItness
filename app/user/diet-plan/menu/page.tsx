"use client";

import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useDashboardMode } from "@/components/dashboard/dashboard-mode-provider";
import { 
  Apple, 
  Search, 
  Heart, 
  Moon, 
  Bell, 
  Globe, 
  User,
  Star,
  Flame
} from 'lucide-react';

const DietMenu = () => {
  const { isDark } = useDashboardMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  const meals = [
    {
      id: 1,
      name: 'Avocado Toast',
      category: 'Breakfast',
      calories: 320,
      rating: 4.8,
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 2,
      name: 'Greek Yogurt Parfait',
      category: 'Breakfast',
      calories: 280,
      rating: 4.6,
      image: '/api/placeholder/300/200',
      isFavorite: true
    },
    {
      id: 3,
      name: 'Quinoa Salad',
      category: 'Lunch',
      calories: 420,
      rating: 4.7,
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 4,
      name: 'Grilled Chicken Wrap',
      category: 'Lunch',
      calories: 380,
      rating: 4.9,
      image: '/api/placeholder/300/200',
      isFavorite: true
    },
    {
      id: 5,
      name: 'Salmon Teriyaki',
      category: 'Dinner',
      calories: 450,
      rating: 4.8,
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 6,
      name: 'Vegetable Stir Fry',
      category: 'Dinner',
      calories: 320,
      rating: 4.5,
      image: '/api/placeholder/300/200',
      isFavorite: true
    },
    {
      id: 7,
      name: 'Mixed Nuts',
      category: 'Snacks',
      calories: 180,
      rating: 4.4,
      image: '/api/placeholder/300/200',
      isFavorite: false
    },
    {
      id: 8,
      name: 'Protein Bar',
      category: 'Snacks',
      calories: 220,
      rating: 4.3,
      image: '/api/placeholder/300/200',
      isFavorite: false
    }
  ];

  const filteredMeals = meals.filter(meal => 
    meal.category === selectedCategory &&
    meal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "w-3 h-3",
              star <= Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
            )}
          />
        ))}
        <span className={cn("text-xs ml-1", isDark ? "text-gray-400" : "text-gray-600")}>
          {rating}
        </span>
      </div>
    );
  };

  const toggleFavorite = (id: number) => {
    // Toggle favorite logic here
  };

  return (
    <div className={cn("min-h-screen flex flex-col overflow-hidden", isDark ? "bg-black" : "bg-gray-50")}>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={cn(
          "w-80 border-r overflow-hidden",
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-gray-200"
        )}>
          <div className="p-6">
            {/* Title */}
            <div className="mb-6">
              <h2 className={cn(
                "text-xl font-bold mb-2",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Diet Menu
              </h2>
              <p className={cn(
                "text-sm",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                Choose a meal category to explore options
              </p>
            </div>

            {/* Meal Categories */}
            <div className="space-y-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between",
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : isDark
                        ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  )}
                >
                  <span className="font-medium">{category}</span>
                  <Flame className="w-4 h-4" />
                </button>
              ))}
            </div>

            {/* Meal Count */}
            <div className="mt-6 p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20">
              <p className={cn(
                "text-sm font-medium",
                isDark ? "text-orange-400" : "text-orange-700"
              )}>
                {filteredMeals.length} meals found
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className={cn(
              "text-2xl font-bold",
              isDark ? "text-white" : "text-gray-900"
            )}>
              {selectedCategory} Options
            </h1>
            <p className={cn(
              "text-sm mt-1",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              Healthy and delicious {selectedCategory.toLowerCase()} choices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMeals.map((meal) => (
              <div
                key={meal.id}
                className={cn(
                  "rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group",
                  isDark ? "bg-slate-800" : "bg-white"
                )}
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <Apple className="w-16 h-16 text-white/80" />
                  </div>
                  <button
                    onClick={() => toggleFavorite(meal.id)}
                    className={cn(
                      "absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                      meal.isFavorite
                        ? "bg-red-500 text-white"
                        : isDark
                          ? "bg-slate-900/80 text-gray-400 hover:text-red-400"
                          : "bg-white/80 text-gray-400 hover:text-red-500"
                    )}
                  >
                    <Heart className={cn("w-4 h-4", meal.isFavorite ? "fill-current" : "")} />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className={cn(
                    "font-semibold mb-2",
                    isDark ? "text-white" : "text-gray-900"
                  )}>
                    {meal.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-2">
                    {renderStars(meal.rating)}
                    <div className="flex items-center gap-1">
                      <Flame className={cn("w-3 h-3", isDark ? "text-gray-400" : "text-gray-500")} />
                      <span className={cn(
                        "text-xs font-medium",
                        isDark ? "text-gray-300" : "text-gray-700"
                      )}>
                        {meal.calories} cal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMeals.length === 0 && (
            <div className="text-center py-12">
              <Apple className={cn(
                "w-16 h-16 mx-auto mb-4",
                isDark ? "text-gray-600" : "text-gray-400"
              )} />
              <p className={cn(
                "text-lg font-medium mb-2",
                isDark ? "text-gray-300" : "text-gray-700"
              )}>
                No meals found
              </p>
              <p className={cn(
                "text-sm",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                Try searching for a different meal or category
              </p>
            </div>
          )}
        </main>
      </div>

    </div>
  );
};

export default DietMenu;
