import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'

const SubmissionSuccess = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Auto-redirect to dashboard after 5 seconds
    const timer = setTimeout(() => {
      navigate('/dashboard')
    }, 5000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-green-100 rounded-full p-6">
            <FaCheckCircle className="text-6xl text-green-500" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Assessment Submitted Successfully!
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Your assessment has been submitted and will be evaluated shortly. You will receive your results via email and on your dashboard.
        </p>
        
        <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-800 mb-2">What's Next?</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Your submission is being processed</li>
            <li>• Results will be available within 24-48 hours</li>
            <li>• Check your email for detailed feedback</li>
            <li>• Review your performance on the dashboard</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full px-8 py-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors text-lg"
          >
            Go to Dashboard
          </button>
          
          <button
            onClick={() => navigate('/dashboard/assessment')}
            className="w-full px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition-colors text-lg"
          >
            View All Assessments
          </button>
        </div>
        
        <p className="text-gray-500 text-sm mt-6">
          Redirecting to dashboard in 5 seconds...
        </p>
      </div>
    </div>
  )
}

export default SubmissionSuccess
