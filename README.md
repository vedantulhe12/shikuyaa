# Shikuyaa Website Clone

A modern, responsive frontend clone of the Shikuyaa placement training platform built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Landing Page**: Hero section with animated elements and call-to-actions
- **Course Catalog**: Browse popular courses with detailed information
- **Student Reviews**: Interactive testimonials carousel
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fake Authentication**: Demo login/signup functionality (no backend)
- **Interactive Components**: Smooth animations and hover effects
- **Statistics Dashboard**: Placement success metrics
- **Contact Form**: Functional contact page with form validation

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Animations**: Framer Motion

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shikuyaa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Layout.tsx       # Main layout wrapper
│   ├── HeroSection.tsx  # Landing page hero
│   ├── FeaturesSection.tsx
│   ├── PopularCoursesSection.tsx
│   ├── ReviewsSection.tsx
│   ├── StatsSection.tsx
│   └── AdditionalSections.tsx
├── pages/               # Page components
│   ├── Home.tsx        # Homepage
│   ├── Courses.tsx     # Course catalog
│   ├── Login.tsx       # Authentication
│   └── Contact.tsx     # Contact form
├── data/               # Mock data
│   └── mockData.ts     # Static content
├── App.tsx             # App router
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Design Features

### Color Palette
- **Primary**: Blue gradient (`#3b82f6` to `#2563eb`)
- **Secondary**: Cyan gradient (`#0ea5e9` to `#0284c7`)
- **Accent**: Yellow (`#fbbf24` to `#f59e0b`)

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family

### Components
- Responsive navigation with mobile menu
- Interactive course cards with hover effects
- Testimonial carousel with navigation
- Statistics counters with icons
- Contact form with validation
- Social media integration placeholders

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**:
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚨 Note

This is a **frontend-only** implementation for demonstration purposes. Features like authentication, course enrollment, and payment processing are simulated and do not connect to any backend services.

## 📄 License

This project is for educational purposes only.

## 🤝 Contributing

This is a demo project, but feel free to fork and modify as needed.