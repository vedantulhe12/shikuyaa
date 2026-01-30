export interface Course {
  id: string
  title: string
  description: string
  price: string
  originalPrice?: string
  image: string
  lessons: number
  subscribers: number
  duration: string
  features: string[]
}

export interface Review {
  id: string
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

export interface Stats {
  enrollment: string
  tests: string
  questions: string
  videos: string
}

export const courses: Course[] = [
  {
    id: 'emp-grad-pro-2025',
    title: 'Emp Grad Pro 2025',
    description: 'Introducing EmpGrad 2025, a comprehensive and meticulously designed course presented by Shikuyaa. Our mission is to equip you with the essential skills and knowledge required to excel in IT company interviewing processes, both written and oral.',
    price: '₹ 1',
    originalPrice: '₹ 4999',
    image: '/course-1.jpg',
    lessons: 90,
    subscribers: 3863,
    duration: '60 Hours',
    features: [
      'Quantitative Aptitude (27 Hours)',
      'Logical Reasoning (18 Hours)', 
      'Verbal Ability (12 Hours)',
      'Soft Skills (4 Hours)',
      'Doubt Clearing Sessions (2 Hours)'
    ]
  },
  {
    id: 'hackathon-2025',
    title: 'Hackathon Course 2025',
    description: 'Hackathon 2025 – a high-energy, individual coding challenge where students solve real-world problems in just 4 hours. It\'s not just a test of your skills, but a platform to win prizes, land job opportunities, and showcase your talent.',
    price: 'Free',
    image: '/course-2.jpg',
    lessons: 0,
    subscribers: 72,
    duration: '4 Hours',
    features: [
      'Individual coding challenge',
      'Real-world problem solving',
      'Job opportunities',
      'Prize distribution',
      'Regional recognition'
    ]
  },
  {
    id: 'placement-pro',
    title: 'Shikuyaa Placement Pro',
    description: 'A complete course for preparation for top IT services companies. It covers the most frequently asked questions in TCS, Capgemini, and Wipro. It also covers a 20 Hrs course regarding C language.',
    price: '₹ 999',
    originalPrice: '₹ 2999',
    image: '/course-3.jpg',
    lessons: 45,
    subscribers: 1250,
    duration: '30 Hours',
    features: [
      'TCS, Capgemini, Wipro prep',
      'C Language (20 Hours)',
      'Most frequently asked questions',
      'Mock interviews',
      'Practice tests'
    ]
  }
]

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Ritika Herwade',
    role: 'Software Engineer',
    company: 'Capgemini',
    image: '/reviewer-1.jpg',
    content: 'Shikuyaa has been of great help in the development of my personality. The teachers are approachable and they have always been there to solve all of my problems, irrespective of it being related to the syllabus.',
    rating: 5
  },
  {
    id: '2',
    name: 'Prutha Pansare',
    role: 'Product Engineer',
    company: 'L&T Realty',
    image: '/reviewer-2.jpg',
    content: 'Shikuyaa is one of the best platforms for the practice of your upcoming drives. The organization covers all the points as per the upcoming particular drive with several video lectures and a lot of practice tests.',
    rating: 5
  },
  {
    id: '3',
    name: 'Aditi Samangade',
    role: 'Software Engineer',
    company: 'Emtec, Pune',
    image: '/reviewer-3.jpg',
    content: 'Shikuyaa is a great training institute for any engineering student as every engineering student want to get placed, they can help student very well. In short "Shikuyaa is BEST".',
    rating: 5
  },
  {
    id: '4',
    name: 'Satyajit Patil',
    role: 'Software Engineer',
    company: 'TCS, Pune',
    image: '/reviewer-4.jpg',
    content: 'Shikuyaa has played an important role in my placement journey by enhancing my Numerical and logical skills as well as mock interview which gave me a lot confidence.',
    rating: 5
  },
  {
    id: '5',
    name: 'Aditya Pawar',
    role: 'Software Engineer',
    company: 'TCS, Pune',
    image: '/reviewer-5.jpg',
    content: 'This platform gave me great ideas as well as a variety of learnings that were useful for career growth.',
    rating: 5
  }
]

export const stats: Stats = {
  enrollment: '100,000',
  tests: '5,000',
  questions: '250,000',
  videos: '5,580'
}

export const features = [
  {
    id: '1',
    title: 'Master Brains',
    description: 'Being in the same field for more than six years adds value to our expertise and exposure. While committing you anything, we stand in an optimum position to fulfil and value add our words.',
    icon: '🧠'
  },
  {
    id: '2',
    title: 'Holistic Approach',
    description: 'Recruitment trends and processes are tending to be more sophisticated & domain-specific for Industry Standards. Shikuyaa focuses on all the key dimensions of changing recruitment.',
    icon: '🎯'
  },
  {
    id: '3',
    title: 'Personalized Content',
    description: 'Shikuyaa brings you a personalized learning voyage providing self-paced learning, placement training courses online, customized study plans, chatbot enabled feedback.',
    icon: '📚'
  },
  {
    id: '4',
    title: 'Mobile Learning',
    description: 'Mobile devices have made the entire world accessible at the fingertip. Availability of all the necessities on the go, make our lives more convenient, productive and optimized.',
    icon: '📱'
  }
]

export const collegeLogos = [
  '/college-1.png',
  '/college-2.png', 
  '/college-3.png',
  '/college-4.png',
  '/college-5.png',
  '/college-6.png'
]