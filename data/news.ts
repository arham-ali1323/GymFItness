export interface NewsArticle {
  id: number;
  title: string;
  author: string;
  image: string;
  date: string;
  excerpt: string;
  summary: string;
  sections: { heading: string; body: string }[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "My Journey of Championship in Weight Lifting",
    author: "RACHEL MOOR",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    date: "AUGUST 27, 2025",
    excerpt:
      "How discipline, expert coaching, and a structured program at German Fitness transformed a beginner into a regional weight lifting champion.",
    summary:
      "Winning a championship is rarely the result of talent alone. It is built through years of consistent training, progressive overload, smart programming, and a coaching team that knows when to push and when to recover. This is the story of how our training system builds not just lifters, but champions.",
    sections: [
      {
        heading: "Starting with the Fundamentals",
        body: "Every great lifting career begins with the basics. Before touching heavy barbells, our athletes spend weeks perfecting their squat pattern, bracing technique, and hinge mechanics. Correct form is non-negotiable because it protects the joints, builds a strong foundation, and lets the body express its real strength safely. Our coaches break every lift down into drills so that progression happens without guesswork.",
      },
      {
        heading: "The Role of Progressive Overload",
        body: "Muscle and strength only grow when you give the body a reason to adapt. We apply progressive overload systematically, adding small, measurable increments over time. This means tracking every session, recording every working set, and following a periodized plan that cycles intensity and volume. The result is steady, sustainable gains with a much lower risk of injury or burnout.",
      },
      {
        heading: "Nutrition and Recovery Made Simple",
        body: "Training breaks the body down; nutrition and sleep build it back up stronger. Our championship program pairs each lifting plan with practical nutrition guidance focused on adequate protein, sensible calories, and consistent hydration. We emphasise recovery days and quality sleep because that is where the real adaptation happens. Champions do not train harder than everyone else every single day; they recover smarter.",
      },
      {
        heading: "What This Means for You",
        body: "You do not need to be aiming for a trophy to benefit from the same structure. The same coaching, periodization, and recovery principles apply whether you are starting your first week at the gym or preparing for your next competition. Book a free trial at German Fitness and let our expert team build a lifting plan that matches your level and your goals.",
      },
    ],
  },
  {
    id: 2,
    title: "How a Good Personal Trainer Can Change Your Life",
    author: "RACHEL MOOR",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
    date: "AUGUST 27, 2025",
    excerpt:
      "Beyond bicep curls and treadmill sessions, a great personal trainer brings accountability, structure, and a plan built around your body.",
    summary:
      "Walking into a gym without a plan is intimidating and, more often than not, unproductive. A personal trainer changes the entire experience by designing the right program, keeping you accountable, and motivating you through the plateaus and hard days that decide whether you stay consistent.",
    sections: [
      {
        heading: "Structure Beats Motivation",
        body: "Motivation is a feeling, and feelings come and go. Structure is a system that keeps you moving even on days when motivation is nowhere to be found. A good trainer writes your sessions in advance, tells you exactly what to do, and tracks your numbers from week to week. You never wonder what to train next because the plan is already laid out around your goals, schedule, and lifestyle.",
      },
      {
        heading: "Form, Safety, and Confidence",
        body: "Every exercise has a right way and a wrong way to do it. Beginners often cannot tell the difference until something hurts. Your trainer corrects your technique in real time, preventing injuries and teaching you the movement patterns that transfer to every other lift. That safety builds confidence, and confidence builds consistency.",
      },
      {
        heading: "Accountability That Lasts",
        body: "Most people quit gyms not because the exercises are hard, but because nobody expects them to show up. Knowing that your trainer is waiting for you changes the equation. A missed session becomes a conversation rather than a silent slip. This gentle accountability is one of the most powerful tools we have at German Fitness for keeping members on track for months and years.",
      },
      {
        heading: "Your First Step",
        body: "If you have been going it alone and struggling with results, a one-on-one session is the fastest way to reset. Our expert trainers at German Fitness will assess your current fitness, hear your goals, and show you a realistic roadmap to reach them. Take the first step and book your free trial today.",
      },
    ],
  },
  {
    id: 3,
    title: "Nutrition Tips for Maximum Muscle Growth",
    author: "JOHN SMITH",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    date: "AUGUST 25, 2025",
    excerpt:
      "Training hard is only half the battle. Fuel your workouts with these practical, science-backed nutrition habits for building muscle.",
    summary:
      "Muscle growth does not happen in the gym alone; it happens at the dinner table. The training session breaks the muscle fibers down and the food you eat after repairs and rebuilds them. Here are the nutrition habits that make the biggest difference for anyone serious about adding lean mass.",
    sections: [
      {
        heading: "Protein on Purpose",
        body: "Aim for roughly 1.6 to 2.2 grams of protein per kilogram of body weight spread across three to five meals. Reliable sources include chicken, eggs, fish, yogurt, and plant-based options like lentils and tofu. Hitting your daily protein target consistently matters far more than timing it perfectly around a workout.",
      },
      {
        heading: "Calories That Support Growth",
        body: "You cannot build significant muscle without a small calorie surplus. Eat slightly more than you burn so the body has the fuel required for repair. Keep the surplus modest, around 10 to 20 percent above maintenance, so you add muscle without excessive fat gain. Track your weight weekly and adjust your intake based on the trend.",
      },
      {
        heading: "Carbs Are Not the Enemy",
        body: "Carbohydrates fuel high-intensity training and refill muscle glycogen. Around training, quality carbs like rice, oats, potatoes, and fruit give you energy for your sessions and speed up recovery. How many you need depends on your goals, but skipping carbs entirely will hurt your gym performance and, in turn, your results.",
      },
      {
        heading: "Hydration and Consistency",
        body: "Dehydration by even two percent can reduce strength and endurance noticeably. Drink water throughout the day and keep a bottle on the gym floor. Above all, stay consistent. Two perfect days do not matter as much as three imperfect months, so build habits you can actually maintain.",
      },
    ],
  },
  {
    id: 4,
    title: "Top 10 Exercises for Building Core Strength",
    author: "SARAH JOHNSON",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop",
    date: "AUGUST 23, 2025",
    excerpt:
      "A strong core means a stronger squat, a healthier back, and everyday movements that feel effortless. Here are the ten best exercises.",
    summary:
      "The core is the connection between your upper and lower body. A strong midsection improves posture, protects the lower back, and makes every major lift stronger. These ten exercises, performed consistently, will build a functional and resilient core.",
    sections: [
      {
        heading: "Why Core Strength Matters",
        body: "Your core is involved in almost everything you do in the gym, from squats and deadlifts to overhead pressing and running. It is not just about visible abs; it is about stability, balance, and transferring force safely. Building it reduces the risk of lower back pain and helps you move better in daily life.",
      },
      {
        heading: "The Top Ten Exercises",
        body: "Plank, hanging leg raise, Russian twist, cable crunch, dead bug, ab wheel roll-out, bird dog, side plank, mountain climber, and pallof press. Rotate through these across your week rather than obsessing over a single movement. Progress them, as you would any exercise, by adding reps, time, or resistance.",
      },
      {
        heading: "Quality Over Quantity",
        body: "Core work is often done sloppily at the end of a workout. Slow the tempo down, keep the spine neutral, and control the movement through its full range. Ten controlled repetitions are worth fifty rushed ones. Add two or three of these exercises after your main training sessions, two to three times per week.",
      },
    ],
  },
];

export function getNewsArticle(id: number): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id);
}