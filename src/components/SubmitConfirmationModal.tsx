interface SubmitConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  stats: {
    total: number
    notAttempted: number
    attempted: number
    reviewed: number
    reported: number
  }
}

const SubmitConfirmationModal = ({ isOpen, onClose, onConfirm, stats }: SubmitConfirmationModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-xl w-full mx-4 shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">SUBMIT</h2>
        
        {/* Statistics Table */}
        <div className="mb-6 border rounded-lg overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y">
              <tr>
                <td className="px-4 py-3 text-gray-700 font-medium border-r">Total Questions</td>
                <td className="px-4 py-3 text-gray-800 text-center">{stats.total}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700 font-medium border-r">Not Attempted Questions</td>
                <td className="px-4 py-3 text-gray-800 text-center">{stats.notAttempted}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700 font-medium border-r">Attempted Questions</td>
                <td className="px-4 py-3 text-gray-800 text-center">{stats.attempted}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700 font-medium border-r">Review Questions</td>
                <td className="px-4 py-3 text-gray-800 text-center">{stats.reviewed}</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-700 font-medium border-r">Reported Questions</td>
                <td className="px-4 py-3 text-gray-800 text-center">{stats.reported}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-pink-600 font-semibold text-center mb-6">
          Do you really want to submit assessment
        </p>

        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            RESUME
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  )
}

export default SubmitConfirmationModal
