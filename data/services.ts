export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroBanner: {
    title: string;
    subtitle: string;
    backgroundImage: string;
  };
  description: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

export const services: Service[] = [
  {
    id: "1",
    slug: "maintenance-services",
    title: "Maintenance Services",
    shortDescription: "Professional gym equipment maintenance and repair services to keep your fitness facility running smoothly.",
    heroBanner: {
      title: "Maintenance Services",
      subtitle: "Expert Care for Your Gym Equipment",
      backgroundImage: "/images/maintenance-hero.jpg"
    },
    description: "Our comprehensive maintenance services ensure your gym equipment operates at peak performance. We provide regular inspections, preventive maintenance, and prompt repairs to minimize downtime and extend equipment lifespan. Our certified technicians are trained to work with all major brands and models.",
    features: [
      "Preventive Maintenance Programs",
      "Emergency Repair Services",
      "Equipment Inspection & Safety Checks",
      "Parts Replacement & Upgrades",
      "Technical Support & Consultation",
      "On-Site & Remote Services"
    ],
    benefits: [
      "Extended Equipment Lifespan",
      "Reduced Downtime & Disruptions",
      "Cost-Effective Maintenance Plans",
      "Enhanced Safety for Members",
      "Improved Equipment Performance",
      "Expert Technical Support"
    ],
    process: [
      {
        step: 1,
        title: "Initial Assessment",
        description: "Our technicians conduct a thorough inspection of your equipment to identify any issues and create a maintenance plan."
      },
      {
        step: 2,
        title: "Custom Maintenance Plan",
        description: "We develop a tailored maintenance schedule based on your equipment usage and facility requirements."
      },
      {
        step: 3,
        title: "Regular Maintenance",
        description: "Our team performs scheduled maintenance tasks including cleaning, lubrication, and component checks."
      },
      {
        step: 4,
        title: "Emergency Support",
        description: "24/7 emergency repair services available for urgent equipment failures to minimize facility downtime."
      }
    ],
    faq: [
      {
        question: "How often should gym equipment be maintained?",
        answer: "We recommend monthly inspections for high-use equipment and quarterly maintenance for all equipment. Heavy commercial facilities may need more frequent service."
      },
      {
        question: "Do you work with all equipment brands?",
        answer: "Yes, our technicians are certified to work with all major fitness equipment brands including Matrix, Life Fitness, Technogym, and more."
      },
      {
        question: "What's included in preventive maintenance?",
        answer: "Preventive maintenance includes cleaning, lubrication, safety checks, component inspection, calibration, and replacement of worn parts."
      },
      {
        question: "Do you offer emergency repair services?",
        answer: "Yes, we provide 24/7 emergency repair services with guaranteed response times based on your service level agreement."
      }
    ],
    cta: {
      title: "Keep Your Equipment in Peak Condition",
      description: "Contact us today for a free maintenance assessment and customized service plan.",
      buttonText: "Schedule Maintenance"
    }
  },
  {
    id: "2",
    slug: "delivery-installation",
    title: "Delivery & Installation Services",
    shortDescription: "Professional delivery and installation of gym equipment with expert setup and calibration.",
    heroBanner: {
      title: "Delivery & Installation",
      subtitle: "Professional Setup for Your Fitness Equipment",
      backgroundImage: "/images/delivery-hero.jpg"
    },
    description: "Our delivery and installation team ensures your gym equipment is set up correctly and safely. From commercial facilities to home gyms, we handle everything from logistics to final assembly and calibration. Our experienced technicians follow manufacturer specifications for optimal performance.",
    features: [
      "White Glove Delivery Service",
      "Professional Installation",
      "Equipment Assembly & Setup",
      "Calibration & Testing",
      "Debris Removal & Cleanup",
      "User Training & Orientation"
    ],
    benefits: [
      "Hassle-Free Setup Process",
      "Professional Installation Guaranteed",
      "Proper Equipment Calibration",
      "Safe & Secure Assembly",
      "Minimal Facility Disruption",
      "Comprehensive User Training"
    ],
    process: [
      {
        step: 1,
        title: "Site Assessment",
        description: "We evaluate your space to plan optimal equipment placement and identify any installation requirements."
      },
      {
        step: 2,
        title: "Delivery Coordination",
        description: "Our team coordinates delivery timing and prepares the installation area for equipment arrival."
      },
      {
        step: 3,
        title: "Professional Installation",
        description: "Certified technicians assemble and install equipment following manufacturer specifications."
      },
      {
        step: 4,
        title: "Testing & Training",
        description: "We test all equipment functionality and provide comprehensive user training for your staff."
      }
    ],
    faq: [
      {
        question: "What areas do you serve for delivery?",
        answer: "We provide delivery and installation services nationwide. Contact us for specific coverage areas and delivery timelines."
      },
      {
        question: "How long does installation typically take?",
        answer: "Installation time varies by equipment type and quantity. Single pieces typically take 1-2 hours, while full facility setups may require several days."
      },
      {
        question: "Do you remove old equipment?",
        answer: "Yes, we offer equipment removal and disposal services. We can also help with trade-in options for qualifying equipment."
      },
      {
        question: "Is installation included with equipment purchase?",
        answer: "Installation is available as an add-on service or included in our commercial packages. Contact us for package details."
      }
    ],
    cta: {
      title: "Professional Installation You Can Trust",
      description: "Let our experts handle your equipment setup with precision and care.",
      buttonText: "Request Installation Quote"
    }
  },
  {
    id: "3",
    slug: "gym-membership",
    title: "Gym Membership & Diet Plans",
    shortDescription: "Comprehensive gym membership options with personalized diet plans for optimal fitness results.",
    heroBanner: {
      title: "Gym Membership & Diet Plans",
      subtitle: "Your Complete Fitness Solution",
      backgroundImage: "/images/membership-hero.jpg"
    },
    description: "Transform your fitness journey with our comprehensive membership packages that include access to state-of-the-art equipment, expert trainers, and personalized nutrition plans. Our diet plans are crafted by certified nutritionists to complement your fitness goals and maximize results.",
    features: [
      "24/7 Gym Access",
      "Personal Training Sessions",
      "Customized Diet Plans",
      "Group Fitness Classes",
      "Progress Tracking",
      "Nutrition Counseling"
    ],
    benefits: [
      "Flexible Membership Options",
      "Expert Guidance & Support",
      "Personalized Nutrition Plans",
      "Access to Premium Equipment",
      "Community of Like-Minded Members",
      "Regular Fitness Assessments"
    ],
    process: [
      {
        step: 1,
        title: "Fitness Assessment",
        description: "We conduct a comprehensive fitness evaluation to understand your current condition and goals."
      },
      {
        step: 2,
        title: "Custom Plan Creation",
        description: "Our team designs a personalized workout and nutrition plan tailored to your specific needs."
      },
      {
        step: 3,
        title: "Implementation & Training",
        description: "You'll work with our trainers to learn proper techniques and establish your fitness routine."
      },
      {
        step: 4,
        title: "Ongoing Support",
        description: "Regular check-ins and plan adjustments ensure you stay on track and continue progressing."
      }
    ],
    faq: [
      {
        question: "What membership plans do you offer?",
        answer: "We offer monthly, quarterly, and annual membership plans with varying access levels and included services. Contact us for current pricing and promotions."
      },
      {
        question: "Are diet plans included in membership?",
        answer: "Basic nutrition guidance is included with all memberships. Premium plans include customized meal plans and regular nutrition consultations."
      },
      {
        question: "Can I freeze my membership?",
        answer: "Yes, we offer membership freeze options for medical reasons, travel, or other circumstances. Freeze terms vary by plan type."
      },
      {
        question: "Do you offer personal training sessions?",
        answer: "Personal training is available as an add-on or included in premium membership packages. All our trainers are certified professionals."
      }
    ],
    cta: {
      title: "Start Your Transformation Today",
      description: "Join our community and achieve your fitness goals with expert guidance and support.",
      buttonText: "Join Now"
    }
  },
  {
    id: "4",
    slug: "qualified-trainers",
    title: "Qualified Trainers",
    shortDescription: "Work with certified fitness professionals dedicated to helping you achieve your health and fitness goals.",
    heroBanner: {
      title: "Qualified Trainers",
      subtitle: "Expert Guidance for Your Fitness Journey",
      backgroundImage: "/images/trainers-hero.jpg"
    },
    description: "Our team of qualified trainers brings years of experience and diverse certifications to help you reach your fitness goals. From strength training to yoga, our experts specialize in various fitness disciplines to provide personalized guidance that works for you.",
    features: [
      "Certified Professional Trainers",
      "Personalized Training Programs",
      "One-on-One & Group Sessions",
      "Specialized Fitness Disciplines",
      "Progress Monitoring",
      "Motivation & Accountability"
    ],
    benefits: [
      "Expert Knowledge & Experience",
      "Customized Workout Plans",
      "Proper Technique & Form",
      "Injury Prevention Guidance",
      "Faster Results",
      "Ongoing Motivation & Support"
    ],
    process: [
      {
        step: 1,
        title: "Trainer Matching",
        description: "We match you with a trainer whose expertise aligns with your goals and preferences."
      },
      {
        step: 2,
        title: "Goal Setting",
        description: "Your trainer helps you set realistic, achievable goals with clear milestones and timelines."
      },
      {
        step: 3,
        title: "Program Development",
        description: "A customized training program is designed specifically for your fitness level and objectives."
      },
      {
        step: 4,
        title: "Training & Progress",
        description: "Regular training sessions with continuous monitoring and program adjustments for optimal results."
      }
    ],
    faq: [
      {
        question: "What certifications do your trainers hold?",
        answer: "Our trainers hold certifications from reputable organizations including ACSM, NASM, ACE, NSCA, and specialized certifications in various disciplines."
      },
      {
        question: "How do I choose the right trainer?",
        answer: "We offer complimentary consultations to help you find a trainer whose expertise and training style matches your preferences and goals."
      },
      {
        question: "Can I switch trainers if needed?",
        answer: "Yes, we understand the importance of the trainer-client relationship. We can facilitate trainer changes to ensure you're comfortable and motivated."
      },
      {
        question: "What training packages are available?",
        answer: "We offer single sessions, package bundles, and monthly training options. Group training and semi-private sessions are also available."
      }
    ],
    cta: {
      title: "Train with the Best",
      description: "Connect with a certified trainer who will guide you to achieve your fitness goals.",
      buttonText: "Find Your Trainer"
    }
  },
  {
    id: "5",
    slug: "gym-design",
    title: "Gym Design Solutions",
    shortDescription: "Complete gym design and layout services to create functional, attractive fitness spaces.",
    heroBanner: {
      title: "Gym Design Solutions",
      subtitle: "Create Your Perfect Fitness Space",
      backgroundImage: "/images/design-hero.jpg"
    },
    description: "Our gym design experts transform spaces into functional, inspiring fitness environments. From commercial facilities to home gyms, we handle everything from space planning and equipment selection to layout optimization and aesthetic design. We create spaces that maximize functionality while reflecting your brand identity.",
    features: [
      "Space Planning & Layout",
      "Equipment Selection & Placement",
      "3D Design Visualization",
      "Brand Integration",
      "Lighting & Atmosphere Design",
      "Traffic Flow Optimization"
    ],
    benefits: [
      "Optimized Space Utilization",
      "Enhanced User Experience",
      "Professional Aesthetic Design",
      "Functional Equipment Layout",
      "Brand Consistency",
      "Future-Proof Design"
    ],
    process: [
      {
        step: 1,
        title: "Consultation & Assessment",
        description: "We meet with you to understand your vision, requirements, budget, and target audience."
      },
      {
        step: 2,
        title: "Concept Development",
        description: "Our design team creates initial concepts and layout options based on your specifications."
      },
      {
        step: 3,
        title: "Design Refinement",
        description: "We work with you to refine the design, select equipment, and finalize all details."
      },
      {
        step: 4,
        title: "Implementation Support",
        description: "We provide detailed plans, specifications, and support throughout the installation process."
      }
    ],
    faq: [
      {
        question: "What types of gyms do you design?",
        answer: "We design all types of fitness spaces including commercial gyms, boutique studios, home gyms, corporate wellness centers, and rehabilitation facilities."
      },
      {
        question: "How long does the design process take?",
        answer: "Design timelines vary based on project scope. Simple home gyms may take 1-2 weeks, while large commercial facilities can take several months."
      },
      {
        question: "Do you provide 3D visualizations?",
        answer: "Yes, we provide detailed 3D renderings and virtual walkthroughs to help you visualize your space before construction begins."
      },
      {
        question: "Can you work within my budget?",
        answer: "Absolutely. We work with various budget ranges and can recommend solutions that maximize value while meeting your design goals."
      }
    ],
    cta: {
      title: "Design Your Dream Gym",
      description: "Let our experts create a fitness space that inspires and motivates.",
      buttonText: "Start Your Design"
    }
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};

export const getAllServiceSlugs = (): string[] => {
  return services.map(service => service.slug);
};
