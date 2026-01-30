import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaSearch, FaCalendarAlt, FaClock } from 'react-icons/fa'
import AssessmentStartModal from '../components/AssessmentStartModal'

const Assessment = () => {
  const [statusFilters, setStatusFilters] = useState({
    ongoing: true,
    upcoming: true,
    completed: true
  })
  const [dateFrom, setDateFrom] = useState('30-01-2026')
  const [dateTo, setDateTo] = useState('30-01-2026')
  const [searchQuery, setSearchQuery] = useState('')
  const [showAssessments, setShowAssessments] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAssessment, setSelectedAssessment] = useState<any>(null)

  const assessments = [
    {
      id: 1,
      title: '8TH Coding Assessment',
      status: 'LIVE',
      priority: 'PRIORITY',
      startTime: 'Yesterday - 09 : 00 : 00',
      endTime: 'Tomorrow - 22 : 00 : 00',
      duration: '1 Hrs',
      questions: 25
    }
  ]

  const handleApplyFilter = () => {
    // Check if both dates are 30-01-2026
    if (dateFrom === '30-01-2026' && dateTo === '30-01-2026') {
      setShowAssessments(true)
    } else {
      setShowAssessments(false)
    }
  }

  const handleStatusChange = (key: keyof typeof statusFilters) => {
    setStatusFilters(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const handleStartAssessment = (assessment: any) => {
    setSelectedAssessment(assessment)
    setIsModalOpen(true)
  }

  return (
    <div className="flex h-full">
      {/* Left Sidebar Filters */}
      <aside className="w-80 bg-white border-r p-6 overflow-y-auto">
        {/* Course Info */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
              <span className="text-xl">📚</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">EMP GRAD PRO 2025</h3>
            </div>
          </div>
        </div>

        {/* Status Filter */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-800 mb-4">STATUS</h4>
          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={statusFilters.ongoing}
                onChange={() => handleStatusChange('ongoing')}
                className="w-4 h-4 text-pink-600 rounded"
              />
              <span className="text-gray-700">Ongoing</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={statusFilters.upcoming}
                onChange={() => handleStatusChange('upcoming')}
                className="w-4 h-4 text-pink-600 rounded"
              />
              <span className="text-gray-700">Upcoming</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={statusFilters.completed}
                onChange={() => handleStatusChange('completed')}
                className="w-4 h-4 text-pink-600 rounded"
              />
              <span className="text-gray-700">Completed</span>
            </label>
          </div>
        </div>

        {/* Date Filter */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">DATE</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">From</label>
              <div className="relative">
                <input
                  type="text"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                />
                <FaCalendarAlt className="absolute right-3 top-3 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">To</label>
              <div className="relative">
                <input
                  type="text"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                />
                <FaCalendarAlt className="absolute right-3 top-3 text-gray-400 w-4 h-4" />
              </div>
            </div>
            <button 
              onClick={handleApplyFilter}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Breadcrumb and Search */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm">
              <Link to="/dashboard" className="flex items-center text-gray-600 hover:text-pink-600">
                <FaChevronLeft className="w-3 h-3 mr-1" />
                Dashboard
              </Link>
              <span className="text-gray-400">/</span>
              <button className="px-4 py-1.5 border border-gray-300 rounded-lg text-gray-600 hover:border-pink-500 hover:text-pink-600">
                Assessments
              </button>
            </div>
          </div>

          {/* Title and Search Bar */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Assessments</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400 w-4 h-4" />
              </div>
              <div className="text-sm text-gray-500">
                {showAssessments ? '1' : '0'} Assessments for you
              </div>
            </div>
          </div>
        </div>

        {/* Content Area - Assessments or Empty State */}
        {showAssessments ? (
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="max-w-4xl">
              {assessments.map((assessment) => (
                <div key={assessment.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  {/* Assessment Card Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
                          {assessment.status}
                        </span>
                        <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded">
                          {assessment.priority}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {assessment.title}
                      </h3>
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <FaClock className="w-4 h-4" />
                          <span>Start: {assessment.startTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaClock className="w-4 h-4" />
                          <span>End: {assessment.endTime}</span>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleStartAssessment(assessment)}
                      className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Start
                    </button>
                  </div>
                  
                  {/* Assessment Details */}
                  <div className="flex items-center space-x-6 text-sm text-gray-600 pt-4 border-t">
                    <div>
                      <span className="font-medium">Duration:</span> {assessment.duration}
                    </div>
                    <div>
                      <span className="font-medium">Questions:</span> {assessment.questions}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="inline-block w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center">
                  <div className="w-24 h-16 bg-blue-300 rounded-lg opacity-50"></div>
                </div>
              </div>
              <p className="text-xl text-gray-500 mb-2">No Assessments Found !!</p>
              <p className="text-sm text-gray-400">0 Assessments for you</p>
            </div>
          </div>
        )}
      </div>

      {/* Assessment Start Modal */}
      {selectedAssessment && (
        <AssessmentStartModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          assessmentTitle={selectedAssessment.title}
          duration={selectedAssessment.duration}
        />
      )}
    </div>
  )
}

export default Assessment
