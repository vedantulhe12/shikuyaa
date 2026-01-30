import { useState, useRef } from 'react'
import { FaTimes } from 'react-icons/fa'

interface RegisterModalProps {
  isOpen: boolean
  onClose: () => void
}

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [mobileNumber, setMobileNumber] = useState('')
  const [step, setStep] = useState<'phone' | 'otp'>('phone')
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(178)
  const otpRefs = useRef<(HTMLInputElement | null)[]>([])

  if (!isOpen) return null

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle OTP sending logic here
    console.log('Sending OTP to:', mobileNumber)
    setStep('otp')
    // Start countdown
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return
    
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Verifying OTP:', otp.join(''))
    // Handle OTP verification logic here
    // Redirect to dashboard on success
    window.location.href = '/dashboard'
  }

  const handleEditNumber = () => {
    setStep('phone')
    setOtp(['', '', '', '', '', ''])
    setCountdown(178)
  }

  const handleResendOTP = () => {
    console.log('Resending OTP to:', mobileNumber)
    setCountdown(178)
    setOtp(['', '', '', '', '', ''])
  }

  const handleClose = () => {
    setStep('phone')
    setMobileNumber('')
    setOtp(['', '', '', '', '', ''])
    setCountdown(178)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FaTimes className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/images/logo.png" 
              alt="Shikuyaa Logo" 
              className="h-16 w-auto"
            />
          </div>

          {step === 'phone' ? (
            <>
              {/* Phone Number Step */}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
                Please Provide Your Mobile Number
              </h2>

              <form onSubmit={handleSendOTP} className="space-y-6">
                <div>
                  <input
                    type="tel"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                  />
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Preferably share your whatsapp number.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Send OTP
                </button>
              </form>
            </>
          ) : (
            <>
              {/* OTP Verification Step */}
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-6">
                Enter OTP
              </h2>

              <form onSubmit={handleVerifyOTP} className="space-y-6">
                {/* OTP Input Boxes */}
                <div className="flex justify-center gap-2 md:gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (otpRefs.current[index] = el)}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-12 md:w-14 md:h-14 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-colors"
                    />
                  ))}
                </div>

                {/* Edit Number & Resend OTP */}
                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleEditNumber}
                    className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
                  >
                    Edit Mobile Number !
                  </button>
                  <span className="mx-2 text-gray-400">|</span>
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={countdown > 0}
                    className={`font-medium transition-colors ${
                      countdown > 0 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-pink-600 hover:text-pink-700'
                    }`}
                  >
                    Resend OTP{countdown > 0 && `(${countdown})`}
                  </button>
                </div>

                {/* Verify Button */}
                <button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Verify & Login
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default RegisterModal
