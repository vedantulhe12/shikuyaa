import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaClock, FaPlay, FaCheck } from 'react-icons/fa'
import SubmitConfirmationModal from '../components/SubmitConfirmationModal'

const AssessmentQuestion = () => {
  const navigate = useNavigate()
  const [selectedQuestion, setSelectedQuestion] = useState(1)
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [activeTab, setActiveTab] = useState<'code' | 'input' | 'output'>('code')
  const [questionStatus, setQuestionStatus] = useState<{[key: number]: string}>({})
  const [code, setCode] = useState('.data\nuserinput: .space 20 # reserve space to store user\'s input\n')
  const [selectedLanguage, setSelectedLanguage] = useState('Assembler 32 (Mars 4.5)')
  const [timeRemaining, setTimeRemaining] = useState(3600) // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(secs).padStart(2, '0')
    }
  }

  const time = formatTime(timeRemaining)

  const handleSubmitClick = () => {
    // Mark current question as solved when main screen submit is clicked
    setQuestionStatus(prev => ({ ...prev, [selectedQuestion]: 'solved' }))
  }

  const handlePanelSubmit = () => {
    // Show confirmation modal when panel submit button is clicked
    setShowSubmitModal(true)
  }

  const handleConfirmSubmit = () => {
    setShowSubmitModal(false)
    navigate('/dashboard/assessment')
  }

  const questions = [
    { id: 1, status: questionStatus[1] || 'not-attempted' }
  ]

  const getQuestionStats = () => {
    const total = questions.length
    const attempted = questions.filter(q => q.status === 'solved').length
    const notAttempted = questions.filter(q => q.status === 'not-attempted').length
    const reviewed = questions.filter(q => q.status === 'reviewed').length
    return { total, attempted, notAttempted, reviewed, reported: 0 }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'solved': return 'bg-pink-500'
      case 'reviewed': return 'bg-gray-400'
      default: return 'bg-white border-2 border-gray-300'
    }
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-white border-b px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img src="/images/logo.png" alt="Shikuyaa" className="h-10 w-auto" />
              <h1 className="text-xl font-bold text-gray-800">SEED Coding Assessment 1</h1>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-center px-3 py-1 border rounded">
                <div className="text-xl font-bold text-gray-800">{time.hours}</div>
              </div>
              <div className="text-center px-3 py-1 border rounded">
                <div className="text-xl font-bold text-gray-800">{time.minutes}</div>
              </div>
              <div className="text-center px-3 py-1 border rounded">
                <div className="text-xl font-bold text-gray-800">{time.seconds}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Coding Techniques Badge and Progress */}
        <div className="bg-white px-6 py-3 border-b">
          <span className="inline-block bg-pink-600 text-white text-sm px-4 py-1.5 rounded-full">
            Coding Techniques
          </span>
          <div className="mt-2 w-full bg-gray-200 h-1 rounded-full">
            <div className="bg-red-500 h-1 rounded-full" style={{ width: '33%' }}></div>
          </div>
        </div>

        {/* Question Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl">
            {/* Question Title and Info */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                SEED SIT Robotics TE Coding Pre Assessment 1
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-2">
                  <FaClock className="w-4 h-4" />
                  <span>Q: Lecture</span>
                </div>
                <div>
                  <span>M: 25/25/16</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">DESCRIPTION</h3>
              <div className="space-y-4 bg-white p-6 rounded-lg border">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Problem Statement</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Write a Python function that takes a list of integers and returns a new list containing only the unique elements from the input. 
                    A prime number is greater than 1, with no divisors other than 1 and itself.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Input Format</h4>
                  <p className="text-gray-700">
                    Single list of integers (can be empty or contain negative numbers/zero as well).
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Output Format</h4>
                  <p className="text-gray-700">
                    Return the list of unique elements in the same order they appear in the input.
                  </p>
                </div>
              </div>
            </div>

            {/* Execution Time Limit */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">EXECUTION TIME LIMIT</h3>
              <p className="text-gray-600">10 seconds</p>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Solution code</h3>
                  <p className="text-sm text-gray-500">Please choose a language and write your code.</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="inline-flex items-center px-3 py-1 border border-gray-300 rounded text-sm text-gray-600">
                    <FaClock className="w-3 h-3 mr-1" />
                    UNSOLVED
                  </span>
                  <button 
                    onClick={handleSubmitClick}
                    className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50"
                  >
                    <FaCheck className="w-4 h-4 text-gray-600" />
                    <span className="font-medium">SUBMIT</span>
                  </button>
                </div>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="flex items-center justify-between border-b bg-gray-50 px-4">
                  <div className="flex">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                        activeTab === 'code' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-gray-600'
                      }`}
                    >
                      CODE
                    </button>
                    <button
                      onClick={() => setActiveTab('input')}
                      className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                        activeTab === 'input' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-gray-600'
                      }`}
                    >
                      INPUT
                    </button>
                    <button
                      onClick={() => setActiveTab('output')}
                      className={`px-6 py-3 font-medium border-b-2 transition-colors ${
                        activeTab === 'output' ? 'border-blue-500 text-blue-600 bg-white' : 'border-transparent text-gray-600'
                      }`}
                    >
                      OUTPUT
                    </button>
                  </div>

                  <div className="flex items-center space-x-3 py-2">
                    <select
                      value={selectedLanguage}
                      onChange={(e) => setSelectedLanguage(e.target.value)}
                      className="px-3 py-1.5 border border-gray-300 rounded text-sm"
                    >
                     <option value="bash">Assembly 32 (MARS 4.5)</option>
<option value="c">C</option>
<option value="csharp">C#</option>
<option value="cpp">C++</option>
<option value="java">Java</option>
<option value="python">Python 3</option>
<option value="javascript">JavaScript</option>
<option value="typescript">TypeScript</option>
<option value="asm">Bash</option>

                    </select>
                    <button className="flex items-center space-x-2 px-4 py-1.5 bg-gray-800 text-white rounded hover:bg-gray-700">
                      <FaPlay className="w-3 h-3" />
                      <span className="text-sm font-medium">RUN CODE</span>
                    </button>
                    <button className="px-4 py-1.5 border border-gray-300 rounded text-sm font-medium">
                      VERIFY
                    </button>
                  </div>
                </div>

                <div className="bg-white">
                  {activeTab === 'code' && (
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-12 h-96 bg-gray-100 border-r pt-4 text-center">
                        <div className="text-xs text-gray-500 leading-6">1</div>
                        <div className="text-xs text-gray-500 leading-6">2</div>
                      </div>
                      <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full h-96 p-4 pl-16 font-mono text-sm border-0 focus:outline-none resize-none"
                      />
                    </div>
                  )}
                  {activeTab === 'input' && (
                    <div className="p-4">
                      <textarea className="w-full h-96 p-4 font-mono text-sm border rounded" placeholder="Enter input..." />
                    </div>
                  )}
                  {activeTab === 'output' && (
                    <div className="p-4">
                      <div className="w-full h-96 p-4 bg-gray-50 border rounded font-mono text-sm">
                        <div className="text-gray-500">Output will appear here...</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <aside className="w-64 bg-white border-l p-6">
        <h3 className="font-bold text-gray-800 mb-4">Questions</h3>
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-200 border-2 border-gray-300 rounded flex items-center justify-center mb-2">
              <span className="text-xl font-semibold text-gray-700">{getQuestionStats().notAttempted}</span>
            </div>
            <span className="text-xs text-gray-600 text-center">Not<br/>Attempted</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-pink-500 rounded flex items-center justify-center mb-2">
              <span className="text-xl font-semibold text-white">{getQuestionStats().attempted}</span>
            </div>
            <span className="text-xs text-gray-600 text-center">Solved</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-400 rounded flex items-center justify-center mb-2">
              <span className="text-xl font-semibold text-white">{getQuestionStats().reviewed}</span>
            </div>
            <span className="text-xs text-gray-600 text-center">Reviewed</span>
          </div>
        </div>
        <button
          onClick={handlePanelSubmit}
          className="w-full mb-4 px-6 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
        >
          SUBMIT TEST
        </button>
        <div className="border-t pt-4">
          {questions.map((q) => (
            <button
              key={q.id}
              onClick={() => setSelectedQuestion(q.id)}
              className={`w-16 h-16 mb-3 rounded flex items-center justify-center text-xl font-semibold ${
                q.id === selectedQuestion 
                  ? 'border-2 border-pink-500 bg-white text-gray-800' 
                  : getStatusColor(q.status) + (q.status !== 'not-attempted' ? ' text-white' : ' text-gray-800')
              } hover:scale-105 transition-transform`}
            >
              {q.id}
            </button>
          ))}
        </div>
      </aside>

      <SubmitConfirmationModal
        isOpen={showSubmitModal}
        onClose={() => setShowSubmitModal(false)}
        onConfirm={handleConfirmSubmit}
        stats={getQuestionStats()}
      />
    </div>
  )
}

export default AssessmentQuestion
