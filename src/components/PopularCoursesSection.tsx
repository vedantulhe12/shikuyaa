import { Link } from 'react-router-dom'
import { FaUsers, FaBook, FaClock, FaStar } from 'react-icons/fa'
import { courses } from '../data/mockData'

const PopularCoursesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-primary-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the proper course from the list.
          </p>
        </div>

        {/* Courses Grid */}
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

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <FaBook className="w-4 h-4" />
                    <span>{course.lessons} Lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUsers className="w-4 h-4" />
                    <span>{course.subscribers} Students</span>
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
                  {course.price === 'Free' ? 'Enroll Now' : 'Join Course'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Link
            to="/courses"
            className="inline-flex items-center space-x-2 bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <span>View All Courses</span>
            <FaStar className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PopularCoursesSection