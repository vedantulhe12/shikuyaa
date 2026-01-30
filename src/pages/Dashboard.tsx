import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa'

const Dashboard = () => {
  const [selectedCourse] = useState('EMP GRAD PRO 2025')
  const [progress] = useState(0)

  const liveClasses = [
    {
      id: 1,
      title: 'FUNDAMENTALS OF DATABASE',
      subtitle: 'Fundamentals of Database',
      questions: 279,
      status: 'Learned',
      image: '/images/database.jpg',
      tag: 'ONGOING PRO 3'
    },
    {
      id: 2,
      title: 'MOCK SYNONYMS & ANTONYMS',
      subtitle: 'Tenses',
      questions: 181,
      status: 'Learned',
      image: '/images/synonyms.jpg',
      tag: 'ONGOING PRO 3'
    },
    {
      id: 3,
      title: 'MOCK SYNONYMS & ANTONYMS',
      subtitle: 'Tenses',
      questions: 112,
      status: 'Learned',
      image: '/images/synonyms2.jpg',
      tag: 'ONGOING PRO 3'
    },
    {
      id: 4,
      title: 'MOCK DIRECTION SENSE',
      subtitle: 'Mock Direction Sense',
      questions: 103,
      status: 'Learned',
      image: '/images/direction.jpg',
      tag: 'ONGOING PRO 3'
    }
  ]

  const selfStudyTopics = [
    {
      id: 1,
      title: 'Computer Architecture',
      sections: 8,
      videos: 135,
      questions: 1923,
      color: 'bg-blue-400'
    },
    {
      id: 2,
      title: 'Verbal Reasoning',
      sections: 7,
      videos: 13,
      questions: 340,
      color: 'bg-red-300'
    },
    {
      id: 3,
      title: 'Analytical Reasoning',
      sections: 4,
      videos: 40,
      questions: 3179,
      color: 'bg-teal-400'
    },
    {
      id: 4,
      title: 'Coding',
      sections: 5,
      videos: 42,
      questions: 856,
      color: 'bg-pink-300'
    }
  ]

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Course Progress Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{selectedCourse}</h2>
                <p className="text-gray-500 text-sm">Course Progress: {progress}%</p>
              </div>
            </div>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              TRACK PROGRESS
            </button>
          </div>
        </div>

        {/* Live Learning Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Live Learning</h3>
            <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium">
              <span>See All</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50">
              <FaChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {liveClasses.map((classItem) => (
                <div key={classItem.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <div className="w-full h-40 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                      <span className="text-5xl">👨‍🏫</span>
                    </div>
                    <div className="absolute top-2 left-2">
                      <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">
                        {classItem.tag}
                      </span>
                    </div>
                    <div className="absolute top-2 right-2">
                      <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded">
                        {classItem.questions}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-pink-600 font-bold text-sm mb-1">{classItem.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{classItem.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs">{classItem.questions} | {classItem.status}</span>
                      <button className="text-pink-600 text-xs font-medium hover:underline">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50">
              <FaChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Self Study Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Self Study</h3>
            <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium">
              <span>See All</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50">
              <FaChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selfStudyTopics.map((topic) => (
                <div key={topic.id} className={`${topic.color} rounded-xl p-6 text-white hover:shadow-lg transition-shadow cursor-pointer`}>
                  <h4 className="font-bold text-lg mb-4">{topic.title}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Sections</span>
                      <span className="font-semibold">{topic.sections}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Videos</span>
                      <span className="font-semibold">{topic.videos}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Questions</span>
                      <span className="font-semibold">{topic.questions}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50">
              <FaChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Assessments Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gray-800">Assessments</h3>
            <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 font-medium">
              <span>See All</span>
              <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Assessment {item}</h4>
                      <p className="text-sm text-gray-500">Score: --</p>
                    </div>
                  </div>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-pink-600">
                    Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
