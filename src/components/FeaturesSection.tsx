import { useState } from 'react'
import { FaUserTie, FaClock, FaLaptopHouse, FaChartLine, FaUserPlus } from 'react-icons/fa'
import RegisterModal from './RegisterModal'

const FeaturesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              {/* You can replace this with an actual image */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 flex items-center justify-center">
  <div className="w-full h-96 flex items-center justify-center">
    <img
      src="/images/shukriya.png"
      alt="Shikuyaa Learning Platform"
      className="w-full h-full object-contain"
    />
  </div>
</div>

            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                WHAT IS SHIKUYAA?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Shikuyaa promotes continuous learning proctored with a scientific approach 
                and state of art technology. We believe students are not required to waste their 
                time and money after graduation. Enrolling in various online courses with job 
                placement at Shikuyaa will help them to induce prerequisite skills simultaneously 
                during their academics.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaUserTie className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Faculties</h3>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Lifetime Access</h3>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaLaptopHouse className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Remote Learning</h3>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaChartLine className="w-6 h-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Career Growth</h3>
                </div>
              </div>
            </div>

            {/* Register Button */}
            <div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center space-x-3 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaUserPlus className="w-5 h-5" />
                <span>Register Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Registration Modal */}
      <RegisterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

export default FeaturesSection