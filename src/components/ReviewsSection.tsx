import { useState } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import { reviews } from '../data/mockData'

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const currentReview = reviews[currentIndex]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Student <span className="text-primary-600">Reviews</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our learners share their valuable reviews with us, we are thankful to them and 
            best wishes for their future from our team.
          </p>
        </div>

        {/* Featured Review */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-primary-200">
              <FaQuoteLeft className="w-8 h-8" />
            </div>

            <div className="text-center">
              {/* Reviewer Image */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-2xl text-white">👤</span>
              </div>

              {/* Review Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed italic">
                "{currentReview.content}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center justify-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`w-5 h-5 ${
                      star <= currentReview.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* Reviewer Info */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900">{currentReview.name}</h4>
                <p className="text-primary-600 font-medium">{currentReview.role}</p>
                <p className="text-gray-500">{currentReview.company}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevReview}
                className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextReview}
                className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white">👤</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-primary-600 font-medium">{review.role}</p>
                  <p className="text-xs text-gray-500 mb-3">{review.company}</p>
                  
                  <div className="flex items-center space-x-1 mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`w-3 h-3 ${
                          star <= review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-sm text-gray-600 line-clamp-3">{review.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection