import { useState } from 'react'
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook, FaUserPlus } from 'react-icons/fa'

interface Slide {
  title: string
  description: string
  buttonText: string
  image: string
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(2)

  const slides: Slide[] = [
  {
    title: 'Welcome to Shikuyaa',
    description: 'Shikuyaa is a democratized skilling, upskilling & hiring platform...',
    buttonText: 'JOIN FOR FREE',
    image: '/images/hero-person.png'
  },
  {
    title: 'Master Your Skills',
    description: 'Join thousands of students who are building successful careers...',
    buttonText: 'GET STARTED',
    image: '/images/hero-person.png'
  },
  {
    title: 'Anatomy of First Job',
    description: 'A power-packed 2 hours live session unfolding the journey of getting your first job. This is the first of its kind session for undergraduates explaining all the important factors of your career journey. Join us to know a proven system ',
    buttonText: 'JOIN FOR FREE',
    image: '/images/hero-person.png'
  },
  {
    title: 'Placement Guaranteed',
    description: 'Get guaranteed placement support...',
    buttonText: 'EXPLORE NOW',
    image: '/images/hero-person.png'
  }
]

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Social Media Sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-r-lg">
        <div className="flex flex-col">
          <a href="#" className="p-4 text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors border-b border-gray-200">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="#" className="p-4 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors border-b border-gray-200">
            <FaYoutube className="w-5 h-5" />
          </a>
          <a href="#" className="p-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-200">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="#" className="p-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
            <FaFacebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-12 lg:py-20">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-pink-600">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            
            <div>
              <button className="inline-flex items-center justify-center space-x-3 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                <FaUserPlus className="w-5 h-5" />
                <span>{slides[currentSlide].buttonText}</span>
              </button>
            </div>
          </div>

          {/* Right Content - Person Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-orange-50 to-yellow-50 rounded-full opacity-60 blur-3xl"></div>
              
              {/* Person image */}
              <div className="relative z-10 flex items-end justify-center">
                <img
                  src={slides[currentSlide].image}
                  alt="Hero Person"
                  className="w-full h-auto max-h-[500px] md:max-h-[600px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center items-center space-x-3 pb-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-3 h-3 bg-pink-600'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection