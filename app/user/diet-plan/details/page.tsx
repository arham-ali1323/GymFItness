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
  Clock,
  Flame,
  Star,
  ChefHat
} from 'lucide-react';

const DietDetails = () => {
  const { isDark } = useDashboardMode();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Breakfast');
  const [selectedMeal, setSelectedMeal] = useState(1);
  
  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];

  const meals = [
    {
      id: 1,
      name: 'Avocado Toast with Eggs',
      category: 'Breakfast',
      rating: 4.8,
      calories: 420,
      protein: 18,
      carbs: 35,
      fat: 24,
      fiber: 8,
      prepTime: 15,
      cookTime: 10,
      servings: 2,
      difficulty: 'Easy',
      description: 'A nutritious and delicious breakfast featuring creamy avocado spread on toasted whole grain bread, topped with perfectly poached eggs and a sprinkle of seasonings.',
      ingredients: [
        '2 slices whole grain bread',
        '1 ripe avocado',
        '2 large eggs',
        '1 tbsp olive oil',
        'Salt and pepper to taste',
        'Red pepper flakes',
        'Fresh parsley',
        'Lemon juice'
      ],
      instructions: [
        'Toast the whole grain bread until golden brown.',
        'Mash the avocado with lemon juice, salt, and pepper.',
        'Spread the avocado mixture on the toasted bread.',
        'Poach the eggs in simmering water for 3-4 minutes.',
        'Place the poached eggs on top of the avocado toast.',
        'Season with red pepper flakes and fresh parsley.',
        'Serve immediately while warm.'
      ],
      isFavorite: true
    },
    {
      id: 2,
      name: 'Greek Yogurt Parfait',
      category: 'Breakfast',
      rating: 4.6,
      calories: 320,
      protein: 22,
      carbs: 42,
      fat: 8,
      fiber: 6,
      prepTime: 10,
      cookTime: 0,
      servings: 1,
      difficulty: 'Easy',
      description: 'A refreshing and protein-packed breakfast layered with creamy Greek yogurt, fresh berries, and crunchy granola.',
      ingredients: [
        '1 cup Greek yogurt',
        '1/2 cup mixed berries',
        '1/4 cup granola',
        '1 tbsp honey',
        '1 tsp chia seeds',
        'Fresh mint leaves'
      ],
      instructions: [
        'Start with a layer of Greek yogurt at the bottom of a glass.',
        'Add a layer of mixed berries on top of the yogurt.',
        'Sprinkle granola over the berries.',
        'Drizzle with honey.',
        'Repeat layers until the glass is full.',
        'Top with chia seeds and fresh mint.',
        'Serve chilled.'
      ],
      isFavorite: false
    },
    {
      id: 3,
      name: 'Quinoa Buddha Bowl',
      category: 'Lunch',
      rating: 4.7,
      calories: 480,
      protein: 16,
      carbs: 58,
      fat: 18,
      fiber: 12,
      prepTime: 20,
      cookTime: 25,
      servings: 2,
      difficulty: 'Medium',
      description: 'A colorful and nutritious bowl packed with quinoa, roasted vegetables, and a tangy tahini dressing.',
      ingredients: [
        '1 cup quinoa',
        '1 cup chickpeas',
        '2 cups mixed vegetables',
        '1 tbsp olive oil',
        '2 tbsp tahini',
        '1 lemon',
        'Fresh herbs',
        'Salt and pepper'
      ],
      instructions: [
        'Cook quinoa according to package instructions.',
        'Roast vegetables with olive oil at 400°F for 20 minutes.',
        'Prepare tahini dressing with lemon juice.',
        'Assemble bowl with quinoa as base.',
        'Top with roasted vegetables and chickpeas.',
        'Drizzle with tahini dressing.',
        'Garnish with fresh herbs.'
      ],
      isFavorite: true
    },
    {
      id: 4,
      name: 'Grilled Chicken Salad',
      category: 'Lunch',
      rating: 4.9,
      calories: 380,
      protein: 35,
      carbs: 28,
      fat: 16,
      fiber: 8,
      prepTime: 15,
      cookTime: 20,
      servings: 2,
      difficulty: 'Medium',
      description: 'A hearty salad featuring tender grilled chicken breast, crisp greens, and a light vinaigrette dressing.',
      ingredients: [
        '2 chicken breasts',
        'Mixed greens',
        'Cherry tomatoes',
        'Cucumber',
        'Red onion',
        'Feta cheese',
        'Olive oil',
        'Balsamic vinegar'
      ],
      instructions: [
        'Season chicken breasts with salt and pepper.',
        'Grill chicken for 6-7 minutes per side.',
        'Let chicken rest for 5 minutes.',
        'Combine greens, tomatoes, cucumber, and onion.',
        'Slice chicken and add to salad.',
        'Top with feta cheese.',
        'Drizzle with vinaigrette.'
      ],
      isFavorite: false
    }
  ];

  const filteredMeals = meals.filter(meal => 
    meal.category === selectedCategory &&
    meal.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentMeal = meals.find(meal => meal.id === selectedMeal) || filteredMeals[0];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "w-4 h-4",
              star <= Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
            )}
          />
        ))}
        <span className={cn("text-sm ml-1", isDark ? "text-gray-400" : "text-gray-600")}>
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
                Diet Details
              </h2>
              <p className={cn(
                "text-sm",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                Select a meal category and choose your meal
              </p>
            </div>

            {/* Meal Categories */}
            <div className="space-y-2 mb-6">
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
                  <ChefHat className="w-4 h-4" />
                </button>
              ))}
            </div>

            {/* Meal List */}
            <div className="space-y-2">
              <h3 className={cn(
                "text-sm font-semibold mb-2",
                isDark ? "text-gray-300" : "text-gray-700"
              )}>
                Available Meals
              </h3>
              {filteredMeals.map(meal => (
                <button
                  key={meal.id}
                  onClick={() => setSelectedMeal(meal.id)}
                  className={cn(
                    "w-full text-left p-3 rounded-lg transition-colors border",
                    selectedMeal === meal.id
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : isDark
                        ? "border-slate-700 bg-slate-800 hover:bg-slate-700"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className={cn(
                        "text-sm font-medium",
                        isDark ? "text-gray-200" : "text-gray-800"
                      )}>
                        {meal.name}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Flame className={cn("w-3 h-3", isDark ? "text-gray-500" : "text-gray-400")} />
                        <span className={cn("text-xs", isDark ? "text-gray-400" : "text-gray-600")}>
                          {meal.calories} cal
                        </span>
                      </div>
                    </div>
                    <Heart className={cn(
                      "w-4 h-4",
                      meal.isFavorite ? "text-red-500 fill-current" : isDark ? "text-gray-500" : "text-gray-400"
                    )} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {currentMeal && (
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className={cn(
                      "text-3xl font-bold mb-2",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      {currentMeal.name}
                    </h1>
                    <div className="flex items-center gap-4">
                      {renderStars(currentMeal.rating)}
                      <div className="flex items-center gap-2">
                        <Flame className={cn("w-4 h-4", isDark ? "text-gray-400" : "text-gray-500")} />
                        <span className={cn("text-sm", isDark ? "text-gray-300" : "text-gray-700")}>
                          {currentMeal.calories} calories
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(currentMeal.id)}
                    className={cn(
                      "p-3 rounded-lg transition-colors",
                      currentMeal.isFavorite
                        ? "bg-red-500 text-white"
                        : isDark
                          ? "bg-slate-800 text-gray-400 hover:bg-slate-700"
                          : "bg-white text-gray-400 hover:bg-gray-100 border border-gray-200"
                    )}
                  >
                    <Heart className={cn("w-5 h-5", currentMeal.isFavorite ? "fill-current" : "")} />
                  </button>
                </div>
                
                <p className={cn(
                  "text-lg",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}>
                  {currentMeal.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Meal Image */}
                  <div className="relative">
                    <div className="h-64 lg:h-96 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                      <Apple className="w-24 h-24 text-white/80" />
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className={cn(
                    "rounded-xl p-6 border",
                    isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
                  )}>
                    <h3 className={cn(
                      "text-xl font-semibold mb-4",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      Ingredients
                    </h3>
                    <ul className="space-y-2">
                      {currentMeal.ingredients.map((ingredient, index) => (
                        <li
                          key={index}
                          className={cn(
                            "flex items-center gap-3",
                            isDark ? "text-gray-300" : "text-gray-700"
                          )}
                        >
                          <div className={cn(
                            "w-2 h-2 rounded-full",
                            "bg-orange-500"
                          )} />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div className={cn(
                    "rounded-xl p-6 border",
                    isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
                  )}>
                    <h3 className={cn(
                      "text-xl font-semibold mb-4",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      Instructions
                    </h3>
                    <ol className="space-y-3">
                      {currentMeal.instructions.map((instruction, index) => (
                        <li
                          key={index}
                          className={cn(
                            "flex gap-4",
                            isDark ? "text-gray-300" : "text-gray-700"
                          )}
                        >
                          <span className={cn(
                            "flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white text-sm flex items-center justify-center font-medium"
                          )}>
                            {index + 1}
                          </span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Nutrition Info */}
                  <div className={cn(
                    "rounded-xl p-6 border",
                    isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
                  )}>
                    <h3 className={cn(
                      "text-lg font-semibold mb-4",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      Nutrition Facts
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                          Calories
                        </span>
                        <span className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>
                          {currentMeal.calories}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                          Protein
                        </span>
                        <span className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>
                          {currentMeal.protein}g
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                          Carbs
                        </span>
                        <span className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>
                          {currentMeal.carbs}g
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                          Fat
                        </span>
                        <span className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>
                          {currentMeal.fat}g
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                          Fiber
                        </span>
                        <span className={cn("font-semibold", isDark ? "text-white" : "text-gray-900")}>
                          {currentMeal.fiber}g
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cooking Info */}
                  <div className={cn(
                    "rounded-xl p-6 border",
                    isDark ? "bg-slate-800 border-slate-700" : "bg-white border-gray-200"
                  )}>
                    <h3 className={cn(
                      "text-lg font-semibold mb-4",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      Cooking Info
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className={cn("w-4 h-4", isDark ? "text-gray-400" : "text-gray-500")} />
                        <div>
                          <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                            Prep Time
                          </p>
                          <p className={cn("font-medium", isDark ? "text-white" : "text-gray-900")}>
                            {currentMeal.prepTime} min
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Flame className={cn("w-4 h-4", isDark ? "text-gray-400" : "text-gray-500")} />
                        <div>
                          <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                            Cook Time
                          </p>
                          <p className={cn("font-medium", isDark ? "text-white" : "text-gray-900")}>
                            {currentMeal.cookTime} min
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <ChefHat className={cn("w-4 h-4", isDark ? "text-gray-400" : "text-gray-500")} />
                        <div>
                          <p className={cn("text-sm", isDark ? "text-gray-400" : "text-gray-600")}>
                            Difficulty
                          </p>
                          <p className={cn("font-medium", isDark ? "text-white" : "text-gray-900")}>
                            {currentMeal.difficulty}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

    </div>
  );
};

export default DietDetails;
