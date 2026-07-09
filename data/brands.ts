export interface Brand {
  id: string;
  slug: string;
  name: string;
  logo: string;
  shortDescription: string;
  productCategories: string[];
  about: string;
  history: string;
  featuredProducts: {
    name: string;
    description: string;
    image: string;
  }[];
  whyChoose: string[];
  gallery: string[];
}

export const brands: Brand[] = [
  {
    id: "1",
    slug: "matrix",
    name: "Matrix",
    logo: "/images/brands/matrix-logo.png",
    shortDescription: "Premium commercial fitness equipment known for innovation and durability.",
    productCategories: ["Cardio", "Strength", "Functional Training", "Group Fitness"],
    about: "Matrix Fitness is a global leader in commercial fitness equipment, renowned for combining cutting-edge technology with exceptional durability. Their equipment is designed for both commercial facilities and home gyms, offering premium experiences for users of all fitness levels.",
    history: "Founded in 2001, Matrix has grown from a small startup to one of the most respected names in the fitness industry. The company's commitment to innovation and quality has earned them numerous awards and a loyal customer base worldwide.",
    featuredProducts: [
      {
        name: "Matrix Treadmill",
        description: "Advanced console with immersive entertainment options and superior cushioning system.",
        image: "/images/products/matrix-treadmill.jpg"
      },
      {
        name: "Matrix Elliptical",
        description: "Smooth, natural motion with adjustable stride length and multiple resistance levels.",
        image: "/images/products/matrix-elliptical.jpg"
      },
      {
        name: "Matrix Strength Series",
        description: "Biomechanically engineered strength equipment for optimal muscle engagement.",
        image: "/images/products/matrix-strength.jpg"
      }
    ],
    whyChoose: [
      "Industry-leading warranty coverage",
      "Advanced touchscreen consoles",
      "Superior build quality and durability",
      "Innovative entertainment integration",
      "Comprehensive commercial solutions"
    ],
    gallery: [
      "/images/gallery/matrix-1.jpg",
      "/images/gallery/matrix-2.jpg",
      "/images/gallery/matrix-3.jpg"
    ]
  },
  {
    id: "2",
    slug: "vision-fitness",
    name: "Vision Fitness",
    logo: "/images/brands/vision-logo.png",
    shortDescription: "High-quality cardio and strength equipment for home and commercial use.",
    productCategories: ["Cardio", "Strength", "Ellipticals", "Treadmills"],
    about: "Vision Fitness is dedicated to providing high-quality fitness equipment that combines innovative technology with user-friendly design. Their products are engineered to deliver exceptional performance and durability for both home and commercial settings.",
    history: "Established in 1995, Vision Fitness has been at the forefront of fitness equipment innovation for over two decades. The company focuses on creating equipment that makes fitness accessible and enjoyable for everyone.",
    featuredProducts: [
      {
        name: "Vision Treadmill",
        description: "Quiet motor system with advanced cushioning technology.",
        image: "/images/products/vision-treadmill.jpg"
      },
      {
        name: "Vision Elliptical",
        description: "Natural stride pattern with multiple resistance programs.",
        image: "/images/products/vision-elliptical.jpg"
      },
      {
        name: "Vision Bike",
        description: "Comfortable seating with adjustable resistance and console options.",
        image: "/images/products/vision-bike.jpg"
      }
    ],
    whyChoose: [
      "Exceptional value for money",
      "Quiet and smooth operation",
      "User-friendly consoles",
      "Reliable performance",
      "Strong warranty support"
    ],
    gallery: [
      "/images/gallery/vision-1.jpg",
      "/images/gallery/vision-2.jpg",
      "/images/gallery/vision-3.jpg"
    ]
  },
  {
    id: "3",
    slug: "horizon-fitness",
    name: "Horizon Fitness",
    logo: "/images/brands/horizon-logo.png",
    shortDescription: "Affordable home fitness equipment with professional-grade features.",
    productCategories: ["Treadmills", "Ellipticals", "Bikes", "Rowing Machines"],
    about: "Horizon Fitness specializes in creating high-quality home fitness equipment that brings professional features to residential settings. Their products are designed to be accessible, reliable, and effective for users of all fitness levels.",
    history: "Since 1998, Horizon Fitness has been dedicated to making fitness equipment more accessible to home users. The brand is known for combining quality construction with affordable pricing.",
    featuredProducts: [
      {
        name: "Horizon Treadmill",
        description: "Folding design with powerful motor and advanced cushioning.",
        image: "/images/products/horizon-treadmill.jpg"
      },
      {
        name: "Horizon Elliptical",
        description: "Compact footprint with smooth, natural motion.",
        image: "/images/products/horizon-elliptical.jpg"
      },
      {
        name: "Horizon Rower",
        description: "Magnetic resistance with ergonomic design for comfortable workouts.",
        image: "/images/products/horizon-rower.jpg"
      }
    ],
    whyChoose: [
      "Space-saving designs",
      "Affordable pricing",
      "Easy assembly",
      "Quiet operation",
      "Family-friendly features"
    ],
    gallery: [
      "/images/gallery/horizon-1.jpg",
      "/images/gallery/horizon-2.jpg",
      "/images/gallery/horizon-3.jpg"
    ]
  },
  {
    id: "4",
    slug: "synca-wellness",
    name: "Synca Wellness",
    logo: "/images/brands/synca-logo.png",
    shortDescription: "Premium massage chairs and wellness equipment for ultimate relaxation.",
    productCategories: ["Massage Chairs", "Wellness Equipment", "Recovery Tools"],
    about: "Synca Wellness specializes in premium massage chairs and wellness equipment designed to provide therapeutic benefits and relaxation. Their products combine advanced technology with luxurious comfort for an exceptional wellness experience.",
    history: "Synca Wellness has been a pioneer in the massage chair industry, consistently introducing innovative features and technologies that enhance the user experience and provide genuine health benefits.",
    featuredProducts: [
      {
        name: "Synca Massage Chair",
        description: "4D massage technology with body scanning and zero gravity positioning.",
        image: "/images/products/synca-chair.jpg"
      },
      {
        name: "Synca Foot Massager",
        description: "Shiatsu massage with heat therapy for foot and calf relief.",
        image: "/images/products/synca-foot.jpg"
      },
      {
        name: "Synca Wellness System",
        description: "Complete wellness solution with multiple massage modes.",
        image: "/images/products/synca-system.jpg"
      }
    ],
    whyChoose: [
      "Advanced massage technology",
      "Premium build quality",
      "Therapeutic health benefits",
      "Customizable programs",
      "Luxurious comfort"
    ],
    gallery: [
      "/images/gallery/synca-1.jpg",
      "/images/gallery/synca-2.jpg",
      "/images/gallery/synca-3.jpg"
    ]
  },
  {
    id: "5",
    slug: "johnson",
    name: "Johnson",
    logo: "/images/brands/johnson-logo.png",
    shortDescription: "Comprehensive fitness solutions for commercial and home gyms.",
    productCategories: ["Cardio", "Strength", "Functional Training", "Accessories"],
    about: "Johnson Health Tech is a global leader in the fitness industry, offering a comprehensive range of fitness equipment for both commercial and residential use. Their products are known for quality, innovation, and reliability.",
    history: "Founded in 1975, Johnson Health Tech has grown into one of the world's largest fitness equipment manufacturers, with multiple brands serving different market segments.",
    featuredProducts: [
      {
        name: "Johnson Treadmill",
        description: "Commercial-grade performance for demanding environments.",
        image: "/images/products/johnson-treadmill.jpg"
      },
      {
        name: "Johnson Strength",
        description: "Durable strength equipment with biomechanical precision.",
        image: "/images/products/johnson-strength.jpg"
      },
      {
        name: "Johnson Functional",
        description: "Versatile functional training equipment for dynamic workouts.",
        image: "/images/products/johnson-functional.jpg"
      }
    ],
    whyChoose: [
      "Global manufacturing expertise",
      "Comprehensive product range",
      "Commercial-grade durability",
      "Innovative design",
      "Strong support network"
    ],
    gallery: [
      "/images/gallery/johnson-1.jpg",
      "/images/gallery/johnson-2.jpg",
      "/images/gallery/johnson-3.jpg"
    ]
  },
  {
    id: "6",
    slug: "giant",
    name: "Giant",
    logo: "/images/brands/giant-logo.png",
    shortDescription: "Leading fitness equipment manufacturer with innovative solutions.",
    productCategories: ["Cardio", "Strength", "Commercial Equipment", "Home Fitness"],
    about: "Giant Fitness is a renowned manufacturer of high-quality fitness equipment, serving both commercial facilities and home users. Their commitment to innovation and quality has made them a trusted name in the industry.",
    history: "With decades of experience in the fitness industry, Giant has established itself as a leader in equipment manufacturing, consistently delivering products that meet the evolving needs of fitness enthusiasts worldwide.",
    featuredProducts: [
      {
        name: "Giant Cardio Series",
        description: "State-of-the-art cardio equipment with advanced features.",
        image: "/images/products/giant-cardio.jpg"
      },
      {
        name: "Giant Strength Line",
        description: "Heavy-duty strength equipment for serious athletes.",
        image: "/images/products/giant-strength.jpg"
      },
      {
        name: "Giant Commercial",
        description: "Commercial-grade equipment designed for high-traffic facilities.",
        image: "/images/products/giant-commercial.jpg"
      }
    ],
    whyChoose: [
      "Proven reliability",
      "Innovative features",
      "Commercial durability",
      "Competitive pricing",
      "Global availability"
    ],
    gallery: [
      "/images/gallery/giant-1.jpg",
      "/images/gallery/giant-2.jpg",
      "/images/gallery/giant-3.jpg"
    ]
  },
  {
    id: "7",
    slug: "momentum",
    name: "Momentum",
    logo: "/images/brands/momentum-logo.png",
    shortDescription: "Dynamic fitness equipment designed for performance and results.",
    productCategories: ["Functional Training", "Cardio", "Strength", "Accessories"],
    about: "Momentum Fitness creates dynamic equipment designed to help users achieve their fitness goals through innovative design and superior performance. Their products are built for serious athletes and fitness enthusiasts.",
    history: "Momentum was founded with a mission to create equipment that matches the intensity and dedication of serious fitness enthusiasts. The brand continues to push boundaries in fitness equipment design.",
    featuredProducts: [
      {
        name: "Momentum Functional Trainer",
        description: "Versatile functional training system for complete body workouts.",
        image: "/images/products/momentum-functional.jpg"
      },
      {
        name: "Momentum Cardio",
        description: "High-performance cardio equipment with advanced tracking.",
        image: "/images/products/momentum-cardio.jpg"
      },
      {
        name: "Momentum Strength",
        description: "Precision-engineered strength equipment for maximum results.",
        image: "/images/products/momentum-strength.jpg"
      }
    ],
    whyChoose: [
      "Performance-focused design",
      "Innovative features",
      "Athlete-tested equipment",
      "Durable construction",
      "Results-oriented approach"
    ],
    gallery: [
      "/images/gallery/momentum-1.jpg",
      "/images/gallery/momentum-2.jpg",
      "/images/gallery/momentum-3.jpg"
    ]
  },
  {
    id: "8",
    slug: "sole-fitness",
    name: "Sole Fitness",
    logo: "/images/brands/sole-logo.png",
    shortDescription: "Premium home fitness equipment with commercial-grade quality.",
    productCategories: ["Treadmills", "Ellipticals", "Bikes", "Climbers"],
    about: "Sole Fitness is renowned for producing premium home fitness equipment that delivers commercial-grade quality at residential prices. Their products are designed for durability, performance, and user comfort.",
    history: "Sole Fitness has been a leader in home fitness equipment for over 20 years, initially gaining recognition through their partnership with major hotel chains and expanding into the residential market.",
    featuredProducts: [
      {
        name: "Sole Treadmill",
        description: "Commercial-grade treadmill with advanced cushioning system.",
        image: "/images/products/sole-treadmill.jpg"
      },
      {
        name: "Sole Elliptical",
        description: "Heavy-duty elliptical with adjustable stride and resistance.",
        image: "/images/products/sole-elliptical.jpg"
      },
      {
        name: "Sole Bike",
        description: "Premium exercise bike with comfortable seating and advanced console.",
        image: "/images/products/sole-bike.jpg"
      }
    ],
    whyChoose: [
      "Commercial-grade quality",
      "Outstanding warranty",
      "Proven durability",
      "User-friendly design",
      "Excellent value"
    ],
    gallery: [
      "/images/gallery/sole-1.jpg",
      "/images/gallery/sole-2.jpg",
      "/images/gallery/sole-3.jpg"
    ]
  },
  {
    id: "9",
    slug: "intenza",
    name: "Intenza",
    logo: "/images/brands/intenza-logo.png",
    shortDescription: "Premium commercial fitness equipment with elegant design.",
    productCategories: ["Cardio", "Strength", "Commercial Equipment"],
    about: "Intenza Fitness creates premium commercial fitness equipment that combines exceptional performance with elegant design. Their products are designed for high-end facilities that demand both functionality and aesthetics.",
    history: "Intenza has established itself as a premium brand in the commercial fitness market, known for equipment that delivers outstanding performance while enhancing the visual appeal of fitness facilities.",
    featuredProducts: [
      {
        name: "Intenza Cardio Series",
        description: "Premium cardio equipment with sophisticated design and advanced features.",
        image: "/images/products/intenza-cardio.jpg"
      },
      {
        name: "Intenza Strength",
        description: "Elegant strength equipment with biomechanical precision.",
        image: "/images/products/intenza-strength.jpg"
      },
      {
        name: "Intenza Commercial",
        description: "Commercial-grade equipment designed for luxury facilities.",
        image: "/images/products/intenza-commercial.jpg"
      }
    ],
    whyChoose: [
      "Elegant design aesthetics",
      "Premium build quality",
      "Advanced technology",
      "Commercial durability",
      "Luxury positioning"
    ],
    gallery: [
      "/images/gallery/intenza-1.jpg",
      "/images/gallery/intenza-2.jpg",
      "/images/gallery/intenza-3.jpg"
    ]
  },
  {
    id: "10",
    slug: "german-fitness",
    name: "German Fitness",
    logo: "/images/brands/german-fitness-logo.png",
    shortDescription: "Our flagship brand representing excellence in fitness equipment.",
    productCategories: ["Cardio", "Strength", "Functional Training", "Accessories"],
    about: "German Fitness represents excellence in fitness equipment, combining German engineering precision with innovative design. Our products are built to deliver exceptional performance and durability for both commercial and home use.",
    history: "German Fitness has been a trusted name in the fitness industry, building a reputation for quality and reliability. Our commitment to excellence has made us a preferred choice for fitness facilities and home users alike.",
    featuredProducts: [
      {
        name: "German Fitness Cardio",
        description: "Precision-engineered cardio equipment with advanced features.",
        image: "/images/products/german-cardio.jpg"
      },
      {
        name: "German Fitness Strength",
        description: "Heavy-duty strength equipment built for serious athletes.",
        image: "/images/products/german-strength.jpg"
      },
      {
        name: "German Fitness Functional",
        description: "Versatile functional training equipment for dynamic workouts.",
        image: "/images/products/german-functional.jpg"
      }
    ],
    whyChoose: [
      "German engineering quality",
      "Superior durability",
      "Innovative design",
      "Comprehensive warranty",
      "Local support and service"
    ],
    gallery: [
      "/images/gallery/german-1.jpg",
      "/images/gallery/german-2.jpg",
      "/images/gallery/german-3.jpg"
    ]
  },
  {
    id: "11",
    slug: "ffittech",
    name: "Ffittech",
    logo: "/images/brands/ffittech-logo.png",
    shortDescription: "Innovative fitness technology solutions for modern workouts.",
    productCategories: ["Smart Equipment", "Connected Fitness", "Digital Solutions"],
    about: "Ffittech specializes in innovative fitness technology that connects users to their workouts through smart equipment and digital solutions. Their products integrate seamlessly with modern fitness lifestyles.",
    history: "Ffittech emerged as a leader in connected fitness, focusing on technology integration that enhances the workout experience and provides comprehensive tracking and engagement features.",
    featuredProducts: [
      {
        name: "Ffittech Smart Equipment",
        description: "Connected equipment with app integration and real-time tracking.",
        image: "/images/products/ffittech-smart.jpg"
      },
      {
        name: "Ffittech Digital Platform",
        description: "Comprehensive digital platform for workout management and tracking.",
        image: "/images/products/ffittech-digital.jpg"
      },
      {
        name: "Ffittech Accessories",
        description: "Smart accessories that enhance workout connectivity and tracking.",
        image: "/images/products/ffittech-accessories.jpg"
      }
    ],
    whyChoose: [
      "Cutting-edge technology",
      "Seamless app integration",
      "Real-time tracking",
      "Modern connectivity",
      "Digital ecosystem"
    ],
    gallery: [
      "/images/gallery/ffittech-1.jpg",
      "/images/gallery/ffittech-2.jpg",
      "/images/gallery/ffittech-3.jpg"
    ]
  },
  {
    id: "12",
    slug: "first-degree-fitness",
    name: "First Degree Fitness",
    logo: "/images/brands/first-degree-logo.png",
    shortDescription: "Premium rowing machines and fluid resistance equipment.",
    productCategories: ["Rowing Machines", "Fluid Resistance", "Cardio Equipment"],
    about: "First Degree Fitness specializes in premium rowing machines and fluid resistance equipment. Their innovative fluid resistance technology provides smooth, natural motion that mimics real water rowing.",
    history: "First Degree Fitness has been a pioneer in fluid resistance technology, developing equipment that delivers exceptional performance and realistic rowing experiences for users of all levels.",
    featuredProducts: [
      {
        name: "First Degree Rower",
        description: "Fluid resistance rower with adjustable intensity levels.",
        image: "/images/products/first-degree-rower.jpg"
      },
      {
        name: "First Degree Fluid Trainer",
        description: "Versatile fluid resistance trainer for multiple exercise types.",
        image: "/images/products/first-degree-trainer.jpg"
      },
      {
        name: "First Degree Cardio",
        description: "Cardio equipment featuring fluid resistance technology.",
        image: "/images/products/first-degree-cardio.jpg"
      }
    ],
    whyChoose: [
      "Unique fluid resistance",
      "Smooth natural motion",
      "Adjustable intensity",
      "Low maintenance",
      "Realistic feel"
    ],
    gallery: [
      "/images/gallery/first-degree-1.jpg",
      "/images/gallery/first-degree-2.jpg",
      "/images/gallery/first-degree-3.jpg"
    ]
  },
  {
    id: "13",
    slug: "inspire",
    name: "Inspire",
    logo: "/images/brands/inspire-logo.png",
    shortDescription: "High-quality home fitness equipment with innovative features.",
    productCategories: ["Home Fitness", "Strength", "Cardio", "Functional Training"],
    about: "Inspire Fitness creates high-quality home fitness equipment designed to bring gym-quality workouts to residential settings. Their products combine innovation with durability for exceptional home fitness experiences.",
    history: "Inspire has been dedicated to home fitness innovation, developing equipment that meets the needs of serious home users who demand commercial-grade quality in their personal spaces.",
    featuredProducts: [
      {
        name: "Inspire Functional Trainer",
        description: "Versatile functional training system for complete home workouts.",
        image: "/images/products/inspire-functional.jpg"
      },
      {
        name: "Inspire Strength",
        description: "Home strength equipment with commercial-grade quality.",
        image: "/images/products/inspire-strength.jpg"
      },
      {
        name: "Inspire Cardio",
        description: "Compact cardio equipment designed for home use.",
        image: "/images/products/inspire-cardio.jpg"
      }
    ],
    whyChoose: [
      "Home-focused design",
      "Commercial-grade quality",
      "Space-efficient solutions",
      "Innovative features",
      "Excellent warranty"
    ],
    gallery: [
      "/images/gallery/inspire-1.jpg",
      "/images/gallery/inspire-2.jpg",
      "/images/gallery/inspire-3.jpg"
    ]
  },
  {
    id: "14",
    slug: "livepro",
    name: "Livepro",
    logo: "/images/brands/livepro-logo.png",
    shortDescription: "Functional training equipment and fitness accessories.",
    productCategories: ["Functional Training", "Accessories", "CrossFit Equipment"],
    about: "Livepro specializes in functional training equipment and fitness accessories designed for dynamic workouts. Their products are built for durability and performance in high-intensity training environments.",
    history: "Livepro has established itself as a go-to brand for functional training equipment, serving CrossFit boxes, functional training facilities, and home gyms with quality products.",
    featuredProducts: [
      {
        name: "Livepro Functional Equipment",
        description: "Versatile functional training tools for dynamic workouts.",
        image: "/images/products/livepro-functional.jpg"
      },
      {
        name: "Livepro Accessories",
        description: "Comprehensive range of fitness accessories for complete training.",
        image: "/images/products/livepro-accessories.jpg"
      },
      {
        name: "Livepro CrossFit",
        description: "CrossFit-specific equipment for high-intensity training.",
        image: "/images/products/livepro-crossfit.jpg"
      }
    ],
    whyChoose: [
      "Functional training focus",
      "Durable construction",
      "Versatile products",
      "Competitive pricing",
      "Wide product range"
    ],
    gallery: [
      "/images/gallery/livepro-1.jpg",
      "/images/gallery/livepro-2.jpg",
      "/images/gallery/livepro-3.jpg"
    ]
  },
  {
    id: "15",
    slug: "liveup",
    name: "Liveup",
    logo: "/images/brands/liveup-logo.png",
    shortDescription: "Affordable fitness equipment and accessories for home use.",
    productCategories: ["Home Fitness", "Accessories", "Yoga Equipment", "Strength Training"],
    about: "Liveup provides affordable fitness equipment and accessories designed for home users. Their products offer great value without compromising on quality, making fitness accessible to everyone.",
    history: "Liveup has been making fitness accessible by providing quality equipment at affordable prices. Their focus on value has made them a popular choice for home fitness enthusiasts.",
    featuredProducts: [
      {
        name: "Liveup Home Equipment",
        description: "Affordable home fitness equipment for various workout types.",
        image: "/images/products/liveup-home.jpg"
      },
      {
        name: "Liveup Accessories",
        description: "Comprehensive range of fitness accessories for home workouts.",
        image: "/images/products/liveup-accessories.jpg"
      },
      {
        name: "Liveup Yoga",
        description: "Yoga and flexibility equipment for home practice.",
        image: "/images/products/liveup-yoga.jpg"
      }
    ],
    whyChoose: [
      "Affordable pricing",
      "Good quality",
      "Wide variety",
      "Home-focused",
      "Value for money"
    ],
    gallery: [
      "/images/gallery/liveup-1.jpg",
      "/images/gallery/liveup-2.jpg",
      "/images/gallery/liveup-3.jpg"
    ]
  },
  {
    id: "16",
    slug: "panthera",
    name: "Panthera",
    logo: "/images/brands/panthera-logo.png",
    shortDescription: "Premium strength training equipment for serious athletes.",
    productCategories: ["Strength Training", "Powerlifting", "Commercial Equipment"],
    about: "Panthera specializes in premium strength training equipment designed for serious athletes and powerlifters. Their products are built to handle the most demanding training sessions.",
    history: "Panthera has been serving the strength training community with equipment that meets the highest standards of quality and performance, trusted by competitive athletes worldwide.",
    featuredProducts: [
      {
        name: "Panthera Power Racks",
        description: "Heavy-duty power racks for serious strength training.",
        image: "/images/products/panthera-racks.jpg"
      },
      {
        name: "Panthera Strength",
        description: "Premium strength equipment for competitive athletes.",
        image: "/images/products/panthera-strength.jpg"
      },
      {
        name: "Panthera Commercial",
        description: "Commercial-grade strength equipment for professional facilities.",
        image: "/images/products/panthera-commercial.jpg"
      }
    ],
    whyChoose: [
      "Heavy-duty construction",
      "Athlete-tested design",
      "Competitive focus",
      "Premium quality",
      "Specialized equipment"
    ],
    gallery: [
      "/images/gallery/panthera-1.jpg",
      "/images/gallery/panthera-2.jpg",
      "/images/gallery/panthera-3.jpg"
    ]
  },
  {
    id: "17",
    slug: "bison",
    name: "Bison",
    logo: "/images/brands/bison-logo.png",
    shortDescription: "Rugged fitness equipment built for durability and performance.",
    productCategories: ["Strength", "Functional Training", "Commercial Equipment"],
    about: "Bison Fitness creates rugged, durable equipment built to withstand the toughest training environments. Their products are designed for serious athletes who demand equipment that can handle intense workouts.",
    history: "Bison has built a reputation for producing equipment that combines rugged durability with functional design, making them a preferred choice for facilities that need equipment that lasts.",
    featuredProducts: [
      {
        name: "Bison Strength",
        description: "Rugged strength equipment built for heavy use.",
        image: "/images/products/bison-strength.jpg"
      },
      {
        name: "Bison Functional",
        description: "Durable functional training equipment for intense workouts.",
        image: "/images/products/bison-functional.jpg"
      },
      {
        name: "Bison Commercial",
        description: "Commercial equipment designed for high-traffic facilities.",
        image: "/images/products/bison-commercial.jpg"
      }
    ],
    whyChoose: [
      "Rugged durability",
      "Heavy-duty construction",
      "Intense training capability",
      "Long-lasting performance",
      "Commercial reliability"
    ],
    gallery: [
      "/images/gallery/bison-1.jpg",
      "/images/gallery/bison-2.jpg",
      "/images/gallery/bison-3.jpg"
    ]
  },
  {
    id: "18",
    slug: "oxygen-fitness",
    name: "Oxygen Fitness",
    logo: "/images/brands/oxygen-logo.png",
    shortDescription: "Cardio-focused fitness equipment for health and wellness.",
    productCategories: ["Cardio", "Wellness Equipment", "Recovery Tools"],
    about: "Oxygen Fitness specializes in cardio and wellness equipment designed to improve health and enhance recovery. Their products focus on cardiovascular health and overall wellness.",
    history: "Oxygen Fitness has been dedicated to creating equipment that promotes cardiovascular health and wellness, helping users achieve their fitness goals through effective cardio solutions.",
    featuredProducts: [
      {
        name: "Oxygen Cardio",
        description: "Advanced cardio equipment for cardiovascular health.",
        image: "/images/products/oxygen-cardio.jpg"
      },
      {
        name: "Oxygen Wellness",
        description: "Wellness equipment for recovery and relaxation.",
        image: "/images/products/oxygen-wellness.jpg"
      },
      {
        name: "Oxygen Recovery",
        description: "Recovery tools for post-workout muscle relief.",
        image: "/images/products/oxygen-recovery.jpg"
      }
    ],
    whyChoose: [
      "Cardio expertise",
      "Wellness focus",
      "Health-oriented design",
      "Recovery solutions",
      "Holistic approach"
    ],
    gallery: [
      "/images/gallery/oxygen-1.jpg",
      "/images/gallery/oxygen-2.jpg",
      "/images/gallery/oxygen-3.jpg"
    ]
  },
  {
    id: "19",
    slug: "daily-youth",
    name: "Daily Youth",
    logo: "/images/brands/daily-youth-logo.png",
    shortDescription: "Youth-focused fitness equipment for active lifestyles.",
    productCategories: ["Youth Fitness", "Active Lifestyle", "Light Equipment"],
    about: "Daily Youth creates fitness equipment designed for young people and active lifestyles. Their products focus on making fitness accessible and enjoyable for the next generation of fitness enthusiasts.",
    history: "Daily Youth has been dedicated to promoting fitness among young people, creating equipment that appeals to youth and encourages active, healthy lifestyles.",
    featuredProducts: [
      {
        name: "Daily Youth Equipment",
        description: "Youth-sized fitness equipment for young athletes.",
        image: "/images/products/daily-youth-equipment.jpg"
      },
      {
        name: "Daily Youth Active",
        description: "Active lifestyle equipment for everyday fitness.",
        image: "/images/products/daily-youth-active.jpg"
      },
      {
        name: "Daily Youth Accessories",
        description: "Accessories designed for young fitness enthusiasts.",
        image: "/images/products/daily-youth-accessories.jpg"
      }
    ],
    whyChoose: [
      "Youth-focused design",
      "Active lifestyle approach",
      "Encouraging fitness habits",
      "Age-appropriate equipment",
      "Fun and engaging"
    ],
    gallery: [
      "/images/gallery/daily-youth-1.jpg",
      "/images/gallery/daily-youth-2.jpg",
      "/images/gallery/daily-youth-3.jpg"
    ]
  },
  {
    id: "20",
    slug: "mx-select",
    name: "MX Select",
    logo: "/images/brands/mx-select-logo.png",
    shortDescription: "Selectable weight systems and compact strength solutions.",
    productCategories: ["Weight Systems", "Compact Strength", "Home Fitness"],
    about: "MX Select specializes in selectable weight systems and compact strength solutions perfect for home gyms. Their innovative designs maximize space efficiency without compromising workout variety.",
    history: "MX Select has been innovating in the space of compact strength equipment, developing selectable weight systems that revolutionize home strength training.",
    featuredProducts: [
      {
        name: "MX Select Weight System",
        description: "Innovative selectable weight system for compact home gyms.",
        image: "/images/products/mx-select-weight.jpg"
      },
      {
        name: "MX Select Compact",
        description: "Compact strength solutions for space-efficient home workouts.",
        image: "/images/products/mx-select-compact.jpg"
      },
      {
        name: "MX Select Accessories",
        description: "Accessories that enhance the MX Select training experience.",
        image: "/images/products/mx-select-accessories.jpg"
      }
    ],
    whyChoose: [
      "Space-efficient design",
      "Innovative weight systems",
      "Compact solutions",
      "Home-focused",
      "Versatile workouts"
    ],
    gallery: [
      "/images/gallery/mx-select-1.jpg",
      "/images/gallery/mx-select-2.jpg",
      "/images/gallery/mx-select-3.jpg"
    ]
  },
  {
    id: "21",
    slug: "slim-line",
    name: "Slim Line",
    logo: "/images/brands/slim-line-logo.png",
    shortDescription: "Space-saving fitness equipment for compact environments.",
    productCategories: ["Compact Equipment", "Home Fitness", "Space-Saving"],
    about: "Slim Line specializes in space-saving fitness equipment designed for compact environments. Their products are perfect for apartments, small homes, and anyone with limited space.",
    history: "Slim Line has been addressing the needs of space-conscious fitness enthusiasts, creating equipment that delivers full workouts in minimal footprint designs.",
    featuredProducts: [
      {
        name: "Slim Line Compact",
        description: "Space-saving cardio and strength equipment for small spaces.",
        image: "/images/products/slim-line-compact.jpg"
      },
      {
        name: "Slim Line Folding",
        description: "Folding equipment that stores easily when not in use.",
        image: "/images/products/slim-line-folding.jpg"
      },
      {
        name: "Slim Line Multi",
        description: "Multi-function equipment that maximizes workout variety.",
        image: "/images/products/slim-line-multi.jpg"
      }
    ],
    whyChoose: [
      "Space-saving design",
      "Compact footprint",
      "Folding options",
      "Multi-function capability",
      "Apartment-friendly"
    ],
    gallery: [
      "/images/gallery/slim-line-1.jpg",
      "/images/gallery/slim-line-2.jpg",
      "/images/gallery/slim-line-3.jpg"
    ]
  },
  {
    id: "22",
    slug: "american-fitness",
    name: "American Fitness",
    logo: "/images/brands/american-fitness-logo.png",
    shortDescription: "American-made fitness equipment with quality craftsmanship.",
    productCategories: ["Cardio", "Strength", "Commercial Equipment"],
    about: "American Fitness produces high-quality fitness equipment with American craftsmanship and attention to detail. Their products are built to last and perform at the highest level.",
    history: "American Fitness has been manufacturing equipment in the USA, maintaining a tradition of quality craftsmanship and reliable performance that has earned them a loyal customer base.",
    featuredProducts: [
      {
        name: "American Fitness Cardio",
        description: "American-made cardio equipment with quality craftsmanship.",
        image: "/images/products/american-cardio.jpg"
      },
      {
        name: "American Fitness Strength",
        description: "Strength equipment built with American quality standards.",
        image: "/images/products/american-strength.jpg"
      },
      {
        name: "American Fitness Commercial",
        description: "Commercial equipment manufactured in the USA.",
        image: "/images/products/american-commercial.jpg"
      }
    ],
    whyChoose: [
      "American-made quality",
      "Craftsmanship focus",
      "Domestic manufacturing",
      "Quality materials",
      "Reliable performance"
    ],
    gallery: [
      "/images/gallery/american-1.jpg",
      "/images/gallery/american-2.jpg",
      "/images/gallery/american-3.jpg"
    ]
  },
  {
    id: "23",
    slug: "royal-fitness",
    name: "Royal Fitness",
    logo: "/images/brands/royal-fitness-logo.png",
    shortDescription: "Premium fitness equipment for luxury facilities and homes.",
    productCategories: ["Luxury Equipment", "Commercial", "Home Fitness"],
    about: "Royal Fitness creates premium fitness equipment designed for luxury facilities and high-end homes. Their products combine exceptional performance with elegant design aesthetics.",
    history: "Royal Fitness has been serving the luxury fitness market, creating equipment that meets the exacting standards of premium facilities and discerning home users.",
    featuredProducts: [
      {
        name: "Royal Fitness Premium",
        description: "Premium equipment for luxury fitness facilities.",
        image: "/images/products/royal-premium.jpg"
      },
      {
        name: "Royal Fitness Home",
        description: "Luxury home fitness equipment for discerning users.",
        image: "/images/products/royal-home.jpg"
      },
      {
        name: "Royal Fitness Commercial",
        description: "Commercial equipment designed for luxury facilities.",
        image: "/images/products/royal-commercial.jpg"
      }
    ],
    whyChoose: [
      "Luxury positioning",
      "Elegant design",
      "Premium materials",
      "Exceptional performance",
      "High-end aesthetics"
    ],
    gallery: [
      "/images/gallery/royal-1.jpg",
      "/images/gallery/royal-2.jpg",
      "/images/gallery/royal-3.jpg"
    ]
  },
  {
    id: "24",
    slug: "hydro-fitness",
    name: "Hydro Fitness",
    logo: "/images/brands/hydro-fitness-logo.png",
    shortDescription: "Water-based fitness equipment for aquatic workouts.",
    productCategories: ["Aquatic Fitness", "Water Equipment", "Pool Fitness"],
    about: "Hydro Fitness specializes in water-based fitness equipment designed for aquatic workouts. Their products provide low-impact, high-resistance training perfect for rehabilitation and conditioning.",
    history: "Hydro Fitness has been pioneering aquatic fitness equipment, creating innovative solutions for water-based training that offer unique benefits for users of all fitness levels.",
    featuredProducts: [
      {
        name: "Hydro Fitness Equipment",
        description: "Water-based fitness equipment for pool workouts.",
        image: "/images/products/hydro-equipment.jpg"
      },
      {
        name: "Hydro Fitness Aquatic",
        description: "Aquatic training tools for rehabilitation and conditioning.",
        image: "/images/products/hydro-aquatic.jpg"
      },
      {
        name: "Hydro Fitness Pool",
        description: "Pool fitness equipment for complete aquatic workouts.",
        image: "/images/products/hydro-pool.jpg"
      }
    ],
    whyChoose: [
      "Aquatic expertise",
      "Low-impact training",
      "Water resistance benefits",
      "Rehabilitation focus",
      "Unique training modality"
    ],
    gallery: [
      "/images/gallery/hydro-1.jpg",
      "/images/gallery/hydro-2.jpg",
      "/images/gallery/hydro-3.jpg"
    ]
  },
  {
    id: "25",
    slug: "gold-star",
    name: "Gold Star",
    logo: "/images/brands/gold-star-logo.png",
    shortDescription: "Award-winning fitness equipment recognized for excellence.",
    productCategories: ["Cardio", "Strength", "Commercial Equipment"],
    about: "Gold Star Fitness produces award-winning fitness equipment recognized for excellence in design and performance. Their products consistently receive industry accolades for innovation and quality.",
    history: "Gold Star has earned its reputation through consistent delivery of exceptional products that have been recognized with numerous industry awards and certifications.",
    featuredProducts: [
      {
        name: "Gold Star Cardio",
        description: "Award-winning cardio equipment with innovative features.",
        image: "/images/products/gold-star-cardio.jpg"
      },
      {
        name: "Gold Star Strength",
        description: "Recognized strength equipment for performance excellence.",
        image: "/images/products/gold-star-strength.jpg"
      },
      {
        name: "Gold Star Commercial",
        description: "Commercial equipment with award-winning design.",
        image: "/images/products/gold-star-commercial.jpg"
      }
    ],
    whyChoose: [
      "Award-winning products",
      "Industry recognition",
      "Proven excellence",
      "Innovative design",
      "Quality assurance"
    ],
    gallery: [
      "/images/gallery/gold-star-1.jpg",
      "/images/gallery/gold-star-2.jpg",
      "/images/gallery/gold-star-3.jpg"
    ]
  },
  {
    id: "26",
    slug: "life-fitness",
    name: "Life Fitness",
    logo: "/images/brands/life-fitness-logo.png",
    shortDescription: "World-renowned commercial fitness equipment brand.",
    productCategories: ["Cardio", "Strength", "Commercial Equipment", "Home Fitness"],
    about: "Life Fitness is one of the world's most recognized and respected commercial fitness equipment brands. Their products are found in top fitness facilities worldwide and are known for innovation and reliability.",
    history: "Life Fitness has been a pioneer in the fitness industry since the 1970s, introducing groundbreaking innovations that have shaped modern fitness equipment design and functionality.",
    featuredProducts: [
      {
        name: "Life Fitness Cardio",
        description: "Industry-leading cardio equipment with advanced technology.",
        image: "/images/products/life-cardio.jpg"
      },
      {
        name: "Life Fitness Strength",
        description: "Premium strength equipment used in top facilities worldwide.",
        image: "/images/products/life-strength.jpg"
      },
      {
        name: "Life Fitness Commercial",
        description: "Commercial-grade equipment for professional facilities.",
        image: "/images/products/life-commercial.jpg"
      }
    ],
    whyChoose: [
      "Global brand recognition",
      "Industry leadership",
      "Innovation pioneer",
      "Commercial reliability",
      "Comprehensive solutions"
    ],
    gallery: [
      "/images/gallery/life-1.jpg",
      "/images/gallery/life-2.jpg",
      "/images/gallery/life-3.jpg"
    ]
  },
  {
    id: "27",
    slug: "apolo",
    name: "Apolo",
    logo: "/images/brands/apolo-logo.png",
    shortDescription: "Versatile fitness equipment for diverse training needs.",
    productCategories: ["Cardio", "Strength", "Functional Training", "Accessories"],
    about: "Apolo Fitness creates versatile equipment designed to meet diverse training needs. Their products offer flexibility and functionality for users with varied fitness goals and preferences.",
    history: "Apolo has been providing versatile fitness solutions that adapt to different training styles and user needs, making them a flexible choice for facilities and home users alike.",
    featuredProducts: [
      {
        name: "Apolo Cardio",
        description: "Versatile cardio equipment for various training styles.",
        image: "/images/products/apolo-cardio.jpg"
      },
      {
        name: "Apolo Strength",
        description: "Flexible strength equipment for diverse training needs.",
        image: "/images/products/apolo-strength.jpg"
      },
      {
        name: "Apolo Functional",
        description: "Versatile functional training equipment for dynamic workouts.",
        image: "/images/products/apolo-functional.jpg"
      }
    ],
    whyChoose: [
      "Versatile products",
      "Flexible solutions",
      "Diverse training options",
      "Adaptable design",
      "Multi-purpose equipment"
    ],
    gallery: [
      "/images/gallery/apolo-1.jpg",
      "/images/gallery/apolo-2.jpg",
      "/images/gallery/apolo-3.jpg"
    ]
  }
];

export const getBrandBySlug = (slug: string): Brand | undefined => {
  return brands.find(brand => brand.slug === slug);
};

export const getAllBrandSlugs = (): string[] => {
  return brands.map(brand => brand.slug);
};
