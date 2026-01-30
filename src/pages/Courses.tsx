import { courses } from '../data/mockData'
import { Link } from 'react-router-dom'
import { FaUsers, FaBook, FaClock, FaStar, FaFilter } from 'react-icons/fa'

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 via-pink-600 to-red-600 text-white py-20">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our <span className="text-yellow-400">Courses</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-2xl mx-auto">
              Discover our comprehensive placement training courses designed to help you land your dream job
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-0">
              All Courses ({courses.length})
            </h2>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg">
                <FaFilter className="w-4 h-4" />
                <span>Filter</span>
              </button>
              <select className="border border-gray-300 rounded-lg px-4 py-2">
                <option>Sort by: Popular</option>
                <option>Sort by: Price (Low to High)</option>
                <option>Sort by: Price (High to Low)</option>
                <option>Sort by: Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105">
                {/* Course Image */}
                <div className="relative h-48 bg-gradient-to-br from-pink-500 to-red-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📚</span>
                      </div>
                      <p className="text-sm opacity-75">Course Thumbnail</p>
                    </div>
                  </div>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold">
                    {course.price}
                  </div>
                  
                  {course.originalPrice && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                      <span className="line-through">{course.originalPrice}</span>
                    </div>
                  )}
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {course.description}
                  </p>

                  {/* Course Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <FaBook className="w-4 h-4" />
                      <span>{course.lessons} Lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUsers className="w-4 h-4" />
                      <span>{course.subscribers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaClock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} className="w-4 h-4 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2">(4.9/5)</span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to={`/courses/${course.id}`}
                    className="block w-full bg-primary-600 hover:bg-primary-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                  >
                    {course.price === 'Free' ? 'Enroll Now' : 'View Details'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-pink-600 to-red-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have successfully landed their dream jobs with our courses
          </p>
          <Link
            to="/login"
            className="inline-flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            <span>Get Started Today</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Courses