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
    <div className="min-h-screen h-screen flex  md:flex-row overflow-hidden bg-white">
      {/* Left side section - Login Form */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center ">
        <div className=" mx-auto space-y-4 sm:space-y-5 md:space-y-6">
          <div>
            <Text variant="h1"  className="mb-2 text-3xl sm:text-4xl md:text-5xl  ">Forget Your Password?</Text>
            <Text variant="body" textColor="text-gray-600" className="text-sm sm:text-base max-w-md w-full">
            Enter the email address linked to your account, and we’ll send you a link
            to reset your password.
            </Text>
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
           

            {/* Remember Me & Forgot Password */}
           

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

