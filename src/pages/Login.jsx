import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import LabelInput from '../components/LabelInput'
import Checkbox from '../components/Checkbox'
import Text from '../components/Text'
import { loginSvg } from '../assets/svg'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
    // For demo purposes, you can navigate after successful login
    // navigate('/dashboard')
  }

  return (
    <div className="min-h-screen h-screen flex flex-col md:flex-row overflow-hidden bg-white">
      {/* Left side section - Login Form */}
      <div className="w-full md:w-2/5 lg:w-2/5 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12 overflow-y-auto">
        <div className="max-w-md w-full mx-auto space-y-4 sm:space-y-5 md:space-y-6">
          <div>
            <Text variant="h1" className="mb-2 text-3xl sm:text-4xl md:text-5xl">Sign In</Text>
            <Text variant="body" textColor="text-gray-600" className="text-sm sm:text-base">
              Enter your email and password to sign in!
            </Text>
          </div>

          {/* Social Login Buttons - Responsive Layout */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Button 
              showGoogleIcon={true} 
              bgColor="bg-white" 
              textColor="text-gray-900"
              hoverBgColor="hover:bg-gray-50" 
              focusRingColor="focus:ring-gray-300"
              className="border border-gray-300 flex-1 !text-xs sm:!text-sm"
            >
              <span className="hidden sm:inline">Sign in with </span>Google
            </Button>
            <Button 
              showAppleIcon={true} 
              bgColor="bg-white" 
              textColor="text-gray-900"
              hoverBgColor="hover:bg-gray-50" 
              focusRingColor="focus:ring-gray-300"
              className="border border-gray-300 flex-1 !text-xs sm:!text-sm"
            >
              <span className="hidden sm:inline">Sign in with </span>Apple
            </Button>
          </div>

          {/* Or Separator */}
          <div className="flex items-center gap-3">
            <div className="flex-1 border-t border-gray-300"></div>
            <Text fontSize="sm" textColor="text-gray-500">or</Text>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <LabelInput
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="info@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <LabelInput
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              showPasswordToggle={true}
              required
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
              <Checkbox
                id="remember-me"
                name="remember-me"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                label="keep me logged in"
              />
              <Link to="/forgot-password" className="hover:opacity-80 text-left sm:text-right">
                <Text fontSize="sm" fontWeight="medium" textColor="text-indigo-600">
                  Forgot password?
                </Text>
              </Link>
            </div>

            {/* Sign In Button */}
            <Button type="submit" bgColor="bg-blue-900" hoverBgColor="hover:bg-blue-950" focusRingColor="focus:ring-blue-700">
              Sign In
            </Button>
          </form>

          {/* Signup Link */}
          <div className="text-center">
            <Text variant="body" textColor="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="hover:opacity-80">
                <Text as="span" fontSize="base" fontWeight="medium" textColor="text-indigo-600">
                  Signup
                </Text>
              </Link>
            </Text>
          </div>
        </div>
      </div>

      {/* Right side section - Illustration */}
      <div className="hidden md:flex w-full md:w-3/5 lg:w-3/5 bg-pink-50 items-center justify-center p-4 md:p-6 lg:p-8 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <img 
            src={loginSvg} 
            alt="Login illustration" 
            className="w-full h-full object-contain max-h-screen"
            style={{ 
              maxWidth: '100%',
              maxHeight: '100vh',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Login

