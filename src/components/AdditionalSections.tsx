import { Link } from 'react-router-dom'
import { FaDownload, FaMobile } from 'react-icons/fa'
import { collegeLogos } from '../data/mockData'

const AdditionalSections = () => {
  return (
    <>
      {/* Resume Builder Section */}
      <section className="section-padding bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Resume <span className="text-yellow-400">Builder</span>
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                We provide you a free resume designer with multiple themes which help you to 
                make your resume and prepare for your dream job. Take free trial of resume 
                designer by selecting your suitable theme as per your choice immediately.
              </p>
              <Link
                to="/resume"
                className="inline-flex items-center space-x-3 bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span>Build Resume</span>
                <FaDownload className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <div className="text-center text-white/80">
                  <div className="w-20 h-20 mx-auto mb-4 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📄</span>
                  </div>
                  <p className="text-lg">Resume Templates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="section-padding bg-gradient-to-br from-blue-500 to-purple-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaMobile className="text-3xl" />
                  </div>
                  <p className="text-lg">Mobile App Mockup</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <span className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  SHIKUYAA MOBILE APP
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Learning beyond <span className="text-primary-600">Classrooms</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Shikuyaa placement training online can bring you a super exciting experience 
                learning through online! You never face any negative experience while enjoying 
                your classes virtually by sitting in your comfort zone.
              </p>
              
              <div className="space-y-4">
                <Link
                  to="#"
                  className="inline-flex items-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <FaDownload className="w-5 h-5" />
                  <span>Download Mobile App</span>
                </Link>
                
                <div className="block">
                  <Link
                    to="#"
                    className="inline-flex items-center space-x-3 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <FaDownload className="w-5 h-5" />
                    <span>Download Desktop App (Beta)</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Associates Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              College <span className="text-primary-600">Associates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are proud to partner with leading educational institutions
            </p>
          </div>
          
          {/* College Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {collegeLogos.map((_logo, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center h-24"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">College {index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinar Section */}
      <section className="section-padding bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Anatomy of <span className="text-yellow-300">First Job</span>
              </h2>
              <p className="text-xl text-orange-100 mb-8 leading-relaxed">
                A power-packed 2 hours live session unfolding the journey of getting your first job. 
                This is the first of its kind session for undergraduates explaining all the important 
                factors of your career journey. Join us to know a proven system.
              </p>
              <button className="inline-flex items-center space-x-3 bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>JOIN FOR FREE</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <div className="text-center text-white/80">
                  <div className="w-20 h-20 mx-auto mb-4 bg-yellow-300 rounded-xl flex items-center justify-center">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <p className="text-lg">Webinar Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AdditionalSections