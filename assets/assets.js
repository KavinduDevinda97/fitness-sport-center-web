import logo from "../assets/gym-logo.png";
import hero_image from "../assets/hero-image.jpg";
import image_one from "../assets/image-one.jpg";
import image_two from "../assets/image-two.jpg";
import image_three from "../assets/image-three.jpg";
import image_four from "../assets/image-four.jpg";
import image_five from "../assets/image-five.jpg";
import image_six from "../assets/image-six.jpg";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Crown, Star } from "lucide-react";
import {
  Dumbbell,
  Heart,
  User,
  Flower2,
  Zap,
  Bike,
  Users,
  Shield,
} from "lucide-react";

export const assets = {
  logo,
  hero_image,
  image_one,
  image_two,
  image_three,
  image_four,
  image_five,
  image_six,
};

export const galleryImages = [
  {
    src: image_one,
    alt: "Weight training area",
  },
  {
    src: image_two,
    alt: "Cardio section",
  },
  {
    src: image_three,
    alt: "CrossFit training",
  },
  {
    src: image_four,
    alt: "Yoga class",
  },
  {
    src: image_five,
    alt: "Group class",
  },
  {
    src: image_six,
    alt: "Personal training",
  },
];

export const testimonials = [
  {
    name: "Ashan Perera",
    role: "Software Engineer",
    text: "IronPeak completely transformed my body and mindset. Lost 18kg in 5 months with the personal training program. The coaches are phenomenal!",
    rating: 5,
    initials: "AP",
  },
  {
    name: "Dilini Fernando",
    role: "Marketing Manager",
    text: "The yoga and CrossFit combo classes are exactly what I needed. The facility is world-class and the community keeps me motivated every single day.",
    rating: 5,
    initials: "DF",
  },
  {
    name: "Kamal Jayawardena",
    role: "Entrepreneur",
    text: "Best investment I've made. The Premium membership gives me access to everything — sauna, nutrition coaching, unlimited classes. Absolutely worth it.",
    rating: 5,
    initials: "KJ",
  },
];

// Features
export const features = [
  {
    Icon: Zap,
    title: "Cutting-Edge Equipment",
    desc: "Over 300 pieces of state-of-the-art fitness equipment from world-leading brands.",
  },
  {
    Icon: Users,
    title: "Expert Coaches",
    desc: "Certified trainers with years of competitive and professional coaching experience.",
  },
  {
    Icon: Shield,
    title: "Safe Environment",
    desc: "24/7 monitored facility with certified first-aiders on every shift.",
  },
  {
    Icon: Heart,
    title: "Community Driven",
    desc: "A supportive community of like-minded individuals pushing each other to excel.",
  },
];

export const services = [
  {
    icon: Dumbbell,
    title: "Weight Training",
    tagline: "Build Raw Strength",
    description:
      "Access over 150 free weight stations and machine setups. Whether you're targeting hypertrophy, powerlifting, or functional strength, our weight floor has everything you need to reach peak performance.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=700&q=80",
    features: [
      "Olympic Lifting Platforms",
      "Full Free-Weight Range",
      "Guided Training Programs",
      "Video Library Access",
    ],
    duration: "45–90 min sessions",
    capacity: "Open floor access",
    color: "from-red-900/40",
  },
  {
    icon: Bike,
    title: "Cardio Training",
    tagline: "Ignite Your Engine",
    description:
      "Our 80-machine cardio floor features treadmills, ellipticals, rowing machines, air bikes, stair climbers and more. Track every metric in real-time with our integrated fitness displays.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",
    features: [
      "80+ Cardio Machines",
      "Heart Rate Monitoring",
      "Custom Cardio Plans",
      "Interval Training Zones",
    ],
    duration: "30–60 min sessions",
    capacity: "Open floor access",
    color: "from-orange-900/40",
  },
  {
    icon: User,
    title: "Personal Training",
    tagline: "Your Coach, Your Results",
    description:
      "Work 1-on-1 with our certified elite personal trainers who craft individualized programs tailored to your specific goals, fitness level, and schedule. The fastest route to your best self.",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=700&q=80",
    features: [
      "Certified Elite Trainers",
      "Custom Program Design",
      "Nutrition Guidance",
      "Progress Tracking",
    ],
    duration: "60 min sessions",
    capacity: "1-on-1 or 2-on-1",
    color: "from-blue-900/40",
  },
  {
    icon: Flower2,
    title: "Yoga Classes",
    tagline: "Balance & Breathe",
    description:
      "From power yoga to restorative flow, our certified yoga instructors guide you through practices that build flexibility, core strength, and mental clarity. Classes for all levels, every day.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80",
    features: [
      "Hot Yoga Studio",
      "All Skill Levels Welcome",
      "15+ Weekly Classes",
      "Meditation Sessions",
    ],
    duration: "60–75 min classes",
    capacity: "Max 20 per class",
    color: "from-purple-900/40",
  },
  {
    icon: Zap,
    title: "CrossFit",
    tagline: "Push Every Limit",
    description:
      "Sri Lanka's premier CrossFit facility. Our dedicated 3,000 sq ft box offers daily WODs coached by CF-L2 certified coaches. Build explosive power, endurance, and mental toughness.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80",
    features: [
      "Dedicated CrossFit Box",
      "CF-L2 Certified Coaches",
      "Daily WOD Programming",
      "Scaled Options Available",
    ],
    duration: "60 min classes",
    capacity: "Max 15 per class",
    color: "from-yellow-900/40",
  },
  {
    icon: Heart,
    title: "Group Fitness",
    tagline: "Energy in Numbers",
    description:
      "High-energy group classes including HIIT, Zumba, BodyPump, Spin, and more. Coached by motivating instructors, these classes are designed to challenge you while making fitness genuinely fun.",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=700&q=80",
    features: [
      "20+ Class Types Weekly",
      "Live DJ Sessions",
      "Community Challenges",
      "Beginner-Friendly Options",
    ],
    duration: "45–60 min classes",
    capacity: "Max 30 per class",
    color: "from-green-900/40",
  },
];
export const plans = [
  {
    name: "Basic",
    tagline: "Start Your Journey",
    price: 4900,
    period: "month",
    icon: Zap,
    popular: false,
    color: "border-white/10",
    accentColor: "text-white",
    bgAccent: "bg-white/5",
    features: [
      { text: "Gym Floor Access (Mon–Fri)", included: true },
      { text: "Cardio Zone Access", included: true },
      { text: "Free Weight Area", included: true },
      { text: "2 Group Classes / Month", included: true },
      { text: "Locker & Shower Facilities", included: true },
      { text: "Fitness Assessment (1x)", included: true },
      { text: "Personal Training Sessions", included: false },
      { text: "Weekend Access", included: false },
      { text: "Yoga & CrossFit Classes", included: false },
      { text: "Nutrition Coaching", included: false },
      { text: "Sauna & Recovery Lounge", included: false },
      { text: "Guest Passes", included: false },
    ],
  },
  {
    name: "Standard",
    tagline: "Most Popular Choice",
    price: 8900,
    period: "month",
    icon: Star,
    popular: true,
    color: "border-brand-red",
    accentColor: "text-brand-red",
    bgAccent: "bg-brand-red/10",
    features: [
      { text: "Full Gym Access (7 Days)", included: true },
      { text: "Cardio Zone Access", included: true },
      { text: "Free Weight Area", included: true },
      { text: "Unlimited Group Classes", included: true },
      { text: "Yoga & CrossFit Included", included: true },
      { text: "Fitness Assessment (2x)", included: true },
      { text: "4 Personal Training Sessions", included: true },
      { text: "Nutrition Consultation (1x)", included: true },
      { text: "Locker & Shower Facilities", included: true },
      { text: "2 Guest Passes / Month", included: true },
      { text: "Sauna & Recovery Lounge", included: false },
      { text: "Priority Class Booking", included: false },
    ],
  },
  {
    name: "Premium",
    tagline: "The Elite Experience",
    price: 14900,
    period: "month",
    icon: Crown,
    popular: false,
    color: "border-amber-500/30",
    accentColor: "text-amber-400",
    bgAccent: "bg-amber-500/10",
    features: [
      { text: "24/7 Full Gym Access", included: true },
      { text: "All Cardio & Weight Equipment", included: true },
      { text: "Unlimited All Classes", included: true },
      { text: "Yoga, CrossFit & Group Classes", included: true },
      { text: "Unlimited Personal Training", included: true },
      { text: "Monthly Nutrition Coaching", included: true },
      { text: "Sauna & Ice Bath Access", included: true },
      { text: "Priority Class Booking", included: true },
      { text: "Body Composition Analysis", included: true },
      { text: "4 Guest Passes / Month", included: true },
      { text: "Towel & Toiletry Service", included: true },
      { text: "Dedicated Locker", included: true },
    ],
  },
];

export const faqs = [
  {
    q: "Is there a joining fee?",
    a: "For our founding members (March 2025 launch), there is zero joining fee. After the launch period, a one-time Rs. 2,500 joining fee applies.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes, all plans can be frozen for up to 2 months per year for Rs. 500/month freeze fee.",
  },
  {
    q: "Are there family or corporate plans?",
    a: "Absolutely. We offer family bundles (15% off for 2+ members) and corporate packages. Contact us for custom pricing.",
  },
  {
    q: "What is the contract term?",
    a: "We offer month-to-month flexibility, or save with 6-month (10% off) and annual (20% off) commitments.",
  },
];

export const contactInfo = [
  {
    Icon: MapPin,
    label: "Location",
    lines: ["142 Steel Avenue, Fitness District", "Colombo 03, Sri Lanka"],
  },
  {
    Icon: Phone,
    label: "Phone",
    lines: ["+94 11 234 5678", "+94 77 890 1234"],
  },
  {
    Icon: Mail,
    label: "Email",
    lines: ["info@ironpeakgym.lk", "memberships@ironpeakgym.lk"],
  },
  {
    Icon: Clock,
    label: "Hours",
    lines: [
      "Mon–Fri: 5:00 AM – 11:00 PM",
      "Sat: 6:00 AM – 10:00 PM",
      "Sun: 7:00 AM – 8:00 PM",
    ],
  },
];
