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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
        {/* SVG Background/Decoration */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none" style={{ zIndex: 0 }}>
          <img src={loginSvg} alt="Login decoration" className="w-64 h-64" />
        </div>
        <div className="relative" style={{ zIndex: 1 }}>
          <div>
            <Text 
              as="h2" 
              fontSize="3xl" 
              fontWeight="extrabold" 
              textColor="text-gray-900" 
              align="text-center"
              className="mt-6"
            >
              Sign in to your account
            </Text>
            <Text 
              fontSize="sm" 
              textColor="text-gray-600" 
              align="text-center"
              className="mt-2"
            >
              Welcome back to our shop
            </Text>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <LabelInput
              id="email"
              name="email"
              type="email"
              label="Email address"
              autoComplete="email"
              required
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
            />
            <LabelInput
              id="password"
              name="password"
              type="password"
              label="Password"
              autoComplete="current-password"
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              showPasswordToggle={true}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                name="remember-me"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                label="Remember me"
              />
            </div>

            <div>
              <Link to="/forgot-password" className="hover:opacity-80">
                <Text 
                  fontSize="sm" 
                  fontWeight="medium" 
                  textColor="text-indigo-600"
                >
                  Forgot your password?
                </Text>
              </Link>
            </div>
          </div>

          <div>
            <Button type="submit"  bgColor="bg-black" textColor="text-green-500">
              Sign in
            </Button>
          </div>

          <div className="text-center">
            <Text fontSize="sm" textColor="text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="hover:opacity-80">
                <Text 
                  as="span" 
                  fontSize="sm" 
                  fontWeight="medium" 
                  textColor="text-indigo-600"
                >
                  Sign up
                </Text>
              </Link>
            </Text>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

