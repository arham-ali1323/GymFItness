"use client";
import Bannersection from  '@/components/contact/Banner-section';
import SubscribeBanner from '@/components/contact/Subscribe-Banner';
import { useState } from 'react';
import ScrollToTopWaterFill from '@/components/ui/back-to-top';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [activityFactor, setActivityFactor] = useState('');
  const [goal, setGoal] = useState('');
const [result, setResult] = useState<{
  bmi: number;
  category: string;
  color: string;
  bmr: number;
  tdee: number;
  recommendedCalories: number;
  protein: number;
  fat: number;
  carbs: number;
} | null>(null);

  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Please enter height and weight');
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmi = parseFloat((weightInKg / (heightInMeters * heightInMeters)).toFixed(1));

    let category = '';
    let color = '';
    
    if (bmi < 18.5) {
      category = 'Underweight';
      color = 'text-blue-400';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
      color = 'text-green-400';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
      color = 'text-yellow-400';
    } else {
      category = 'Obese';
      color = 'text-red-400';
    }

    let bmr = 0;
    if (gender && age) {
      if (gender === 'male') {
        bmr = 10 * weightInKg + 6.25 * parseFloat(height) - 5 * parseFloat(age) + 5;
      } else if (gender === 'female') {
        bmr = 10 * weightInKg + 6.25 * parseFloat(height) - 5 * parseFloat(age) - 161;
      }
    }
const activityMultipliers: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9
};

const tdee = activityFactor
  ? Math.round(bmr * activityMultipliers[activityFactor])
  : 0;

// Goal calories
let recommendedCalories = tdee;

if (goal === "lose") recommendedCalories = tdee - 500;
if (goal === "gain") recommendedCalories = tdee + 300;
if (goal === "muscle") recommendedCalories = tdee + 400;

// MACROS (simple & realistic)
const protein = Math.round((recommendedCalories * 0.15) / 4);
const fat = Math.round((recommendedCalories * 0.25) / 9);
const carbs = Math.round((recommendedCalories * 0.6) / 4);

setResult({
  bmi,
  category,
  color,
  bmr: Math.round(bmr),
  tdee,
  recommendedCalories,
  protein,
  fat,
  carbs
});
  };

  return (
    <div className='bg-black'>
        <Bannersection />
       <div className="min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex gap-1 mb-6">
                <div className="w-12 h-1 bg-orange-600"></div>
                <div className="w-12 h-1 bg-orange-600"></div>
                <div className="w-12 h-1 bg-orange-600"></div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-wider mb-4">
                CALCULATE YOUR
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold tracking-wider mb-6">
                BMI NOW!!
              </h2>
              <p className="text-gray-400 leading-relaxed">
                Welcome to Hadkaur Fitness! We believe that true wellness encompasses mind, body & soul.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Height */}
              <div>
                <label className="block text-orange-600 text-sm font-semibold mb-2 tracking-wider">
                  HEIGHT / CM
                </label>
                <input
                  type="number"
                  placeholder="Height / cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                />
              </div>

              {/* Weight */}
              <div>
                <label className="block text-orange-600 text-sm font-semibold mb-2 tracking-wider">
                  WEIGHT / KG
                </label>
                <input
                  type="number"
                  placeholder="Weight / kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-orange-600 text-sm font-semibold mb-2 tracking-wider">
                  AGE OF YOU
                </label>
                <input
                  type="number"
                  placeholder="Age of you"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-600 transition"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-orange-600 text-sm font-semibold mb-2 tracking-wider">
                  GENDER
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-600 transition appearance-none cursor-pointer"
                >
                  <option value="">Select a gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              {/* Activity Factor */}
              <div>
                <label className="block text-orange-600 text-sm font-semibold mb-2 tracking-wider">
                  ACTIVITY FACTOR
                </label>
                <select
                  value={activityFactor}
                  onChange={(e) => setActivityFactor(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-600 transition appearance-none cursor-pointer"
                >
                  <option value="">Select an activity factor</option>
                  <option value="sedentary">Sedentary (little to no exercise)</option>
                  <option value="light">Light (exercise 1-3 days/week)</option>
                  <option value="moderate">Moderate (exercise 3-5 days/week)</option>
                  <option value="active">Active (exercise 6-7 days/week)</option>
                  <option value="veryActive">Very Active (intense exercise daily)</option>
                </select>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-orange-600 text-sm font-semibold mb-2 tracking-wider">
                  I WANT...
                </label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-black border border-gray-700 rounded px-4 py-3 text-white focus:outline-none focus:border-orange-600 transition appearance-none cursor-pointer"
                >
                  <option value="">I want (choose an option)</option>
                  <option value="lose">Lose weight</option>
                  <option value="maintain">Maintain weight</option>
                  <option value="gain">Gain weight</option>
                  <option value="muscle">Build muscle</option>
                </select>
              </div>

              {/* Calculate Button */}
              <button
                onClick={calculateBMI}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded tracking-wider text-lg transition transform hover:scale-105 mt-6"
              >
                CALCULATE BMI
              </button>
            </div>

            {/* Results */}
           {result && (
  <div className="mt-10 bg-gradient-to-b from-black to-zinc-900 border border-zinc-800 rounded-xl p-8 space-y-6">

    {/* RESULT */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rounded">
        📊
      </div>
      <h3 className="text-xl font-bold tracking-widest">RESULT</h3>
    </div>

    <p className="text-gray-300 leading-relaxed">
      Based on the data you gave us, your BMI is{" "}
      <span className={`font-bold ${result.color}`}>
        {result.bmi}
      </span>
      , the total energy expended for someone your stature is{" "}
      <span className="text-orange-500 font-bold">
        {result.bmr} Kcal
      </span>{" "}
      (BMR), this is the calories your body needs per day just to survive.
      Taking into account your physical activity, you will need{" "}
      <span className="text-orange-500 font-bold">
        {result.tdee} Kcal
      </span>{" "}
      (TDEE) per day to maintain your weight.
    </p>

    <p className="text-white font-semibold">
      ➜ To achieve your goal we recommend{" "}
      <span className="text-orange-500 font-bold">
        {result.recommendedCalories} Kcal
      </span>{" "}
      per day.
    </p>

    <hr className="border-zinc-800" />

    {/* FOOD */}
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rounded">
        🍎
      </div>
      <h3 className="text-xl font-bold tracking-widest">FOOD</h3>
    </div>

    <p className="text-gray-300">
      We recommend{" "}
      <span className="text-orange-500 font-bold">
        {result.protein} g
      </span>{" "}
      of protein,{" "}
      <span className="text-orange-500 font-bold">
        {result.fat} g
      </span>{" "}
      of fat, and{" "}
      <span className="text-orange-500 font-bold">
        {result.carbs} g
      </span>{" "}
      of carbohydrates.
    </p>

    <p className="text-gray-400 text-sm">
      Aim for a ratio of 1/3 saturated fat (meat, milk, etc.) and 2/3
      unsaturated fat (fish, avocado, coconut milk).
    </p>
  </div>
)}

          </div>

          {/* Right Side - Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Orange Circle Background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600 rounded-full opacity-80"></div>
              
              {/* Fitness Model Image */}
              <img
                src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop"
                alt="Fitness Model"
                className="relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Educational Content */}
        <div className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Understanding Your BMI and Daily Calorie Needs
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Body Mass Index (BMI) is a simple way to screen whether your weight falls
            within a healthy range for your height. A BMI between 18.5 and 24.9 is
            considered healthy, while values below or above that range can signal a need
            to focus on nutrition and strength training. Alongside BMI, we estimate your
            Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) so you
            know roughly how many calories your body burns each day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black">
              <h3 className="text-xl font-bold text-orange-500 mb-3">
                What Is a Healthy BMI?
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Under 18.5 is underweight, 18.5 to 24.9 is healthy, 25 to 29.9 is
                overweight, and 30 or above is obese. If your BMI is outside the healthy
                range, combining resistance training with a balanced nutrition plan is the
                most effective and sustainable way to shift it in the right direction.
                Our expert trainers can help you build a program that works for your body.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black">
              <h3 className="text-xl font-bold text-orange-500 mb-3">
                How We Calculate Your Macros
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Based on your calorie target, we recommend a protein-first split to protect
                muscle while you build or lose weight. Protein supports recovery and growth,
                fats keep hormones healthy, and carbohydrates fuel your workouts. These
                numbers are a starting point; track your progress for a few weeks and adjust
                based on how your body responds.
              </p>
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed">
            A BMI calculator is a useful starting point, but it is not the whole story.
            Muscle weighs more than fat, so highly trained athletes may show a higher BMI
            while being exceptionally healthy. For a full assessment that includes body
            composition, fitness testing, and a personalized training and nutrition plan,
            book a free consultation at German Fitness in Sahiwal today.
          </p>
        </div>
      </div>
    </div>
    <SubscribeBanner/>
    <ScrollToTopWaterFill />
     </div>

  );
}
