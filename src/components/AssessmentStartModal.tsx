import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

interface AssessmentStartModalProps {
  isOpen: boolean
  onClose: () => void
  assessmentTitle: string
  duration: string
}

const AssessmentStartModal = ({ isOpen, onClose, assessmentTitle, duration }: AssessmentStartModalProps) => {
  const [countdown, setCountdown] = useState(26)
  const [acknowledged, setAcknowledged] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) return

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [isOpen])

  if (!isOpen) return null

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${String(mins).padStart(2, '0')} : ${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
          <h2 className="text-2xl font-bold mb-2">{assessmentTitle}</h2>
          <p className="text-sm text-gray-300">DURATION {duration}</p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Test Details */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">TEST DETAILS</h3>
            <p className="text-gray-700">SEED 8T Recursive IT Coding Pro Assessment 1</p>
          </div>

          {/* Section Table */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">SECTION</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Name</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Questions</th>
                    <th className="text-left px-4 py-3 font-semibold text-gray-700">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-3 text-gray-700">Coding Techniques</td>
                    <td className="px-4 py-3 text-gray-700">1</td>
                    <td className="px-4 py-3 text-gray-700">20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h3 className="font-bold text-gray-800 mb-3">INSTRUCTIONS</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex items-start space-x-2">
                <span className="font-semibold">1)</span>
                <p>Wait for the compiler to load completely before writing the code.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-semibold">2)</span>
                <p>Read the instructions, failing to do so submit the code, there will be penalty.</p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="font-semibold">3)</span>
                <p>Always click the submit button, otherwise your work will be lost.</p>
              </div>
            </div>

            {/* Acknowledgement Checkbox */}
            <div className="mt-6">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-pink-600 rounded border-gray-300 focus:ring-pink-500"
                />
                <span className="text-sm text-gray-700">
                  Acknowledge : Have once and understand all the information mention above.
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer with Timer and Buttons */}
        <div className="border-t p-6 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <div className="text-4xl font-bold text-gray-800 mb-2">
                {formatTime(countdown)}
              </div>
              <p className="text-sm text-gray-600">
                {countdown > 0 ? 'Starting in...' : 'Ready to start!'}
              </p>
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (countdown === 0 && acknowledged) {
                    navigate('/assessment/question/1')
                  }
                }}
                className="px-8 py-2.5 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                disabled={countdown > 0 || !acknowledged}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AssessmentStartModal
