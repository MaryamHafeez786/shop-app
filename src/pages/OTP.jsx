import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Text from '../components/Text'
import { loginSvg } from '../assets/svg'

function OTP() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputRefs = useRef([])
  const navigate = useNavigate()

  const handleChange = (index, value) => {
    // Only allow single digit (0-9)
    if (value && !/^\d$/.test(value)) return
    if (value.length > 1) return
    
    // Update OTP array
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Auto-focus to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').trim().slice(0, 6)
    if (/^\d+$/.test(pastedData)) {
      const newOtp = [...otp]
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedData[i] || ''
      }
      setOtp(newOtp)
      // Focus the last filled input or first empty
      const lastIndex = Math.min(pastedData.length - 1, 5)
      inputRefs.current[lastIndex]?.focus()
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const otpCode = otp.join('')
    if (otpCode.length === 6) {
      console.log('OTP submitted:', otpCode)
      // Handle OTP verification logic here
      // navigate('/dashboard')
    } else {
      alert('Please enter all 6 digits')
    }
  }

  return (
    <div className="min-h-screen h-screen flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Left side section - Login Form */}


      {/* Right side section - Illustration */}
      <div className="hidden md:flex w-full md:w-3/5 lg:w-3/5 bg-pink-50 items-center justify-center p-4 md:p-6 lg:p-8 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={loginSvg} 
            alt="OTP illustration" 
            className="w-full h-full object-contain max-h-screen"
            style={{ 
              maxWidth: '100%',
              maxHeight: '100vh',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      <div className="w-full md:w-2/5 lg:w-2/5 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 overflow-y-auto">
        <div className="max-w-md w-full mx-auto space-y-4 sm:space-y-5 md:space-y-6">
          <div>
            <Text variant="h1" className="mb-2 text-3xl sm:text-4xl md:text-5xl">Two Step Verification</Text>
            <Text variant="body" textColor="text-gray-600" className="text-sm sm:text-base">
            A verification code has been sent to your mobile. Please enter it
 in the field below.
            </Text>
          </div>
          <div>
            <Text variant="h6" textColor="text-gray-600" className="mb-4">
              Type your 6 digits security code
            </Text>
            
            {/* OTP Input Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-2 sm:gap-3 justify-center">
                {otp.map((digit, index) => (
                  <Input
                    key={index}
                    id={`otp-${index}`}
                    name={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl font-semibold !px-0"
                    textColor="text-gray-900"
                    bgColor="bg-white"
                    borderColor="border-gray-300"
                    focusBorderColor="focus:border-blue-700"
                    focusRingColor="focus:ring-blue-700"
                    placeholder=""
                    required
                    ref={(el) => (inputRefs.current[index] = el)}
                  />
                ))}
              </div>
              
              {/* Sign Up Button */}
              <Button type="submit" bgColor="bg-blue-900" hoverBgColor="hover:bg-blue-950" focusRingColor="focus:ring-blue-700">
                Verify
              </Button>
            </form>
          </div>
      

          {/* Signup Link */}
          <div className="text-center">
            <Text variant="body" textColor="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="hover:opacity-80">
                <Text as="span" fontSize="base" fontWeight="medium" textColor="text-indigo-600">
                  SignIn
                </Text>
              </Link>
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OTP

