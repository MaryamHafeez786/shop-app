import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import Text from '../components/Text'
import Checkbox from '../components/Checkbox'

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    // Handle signup logic here
    console.log('Signup attempt:', formData)
    // For demo purposes, you can navigate after successful signup
    // navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl">
        <div>
          <Text 
            variant="h2"
            textColor="text-red-500" 
            align="text-center"
            className="mt-6"
          >
            Create your account
          </Text>
          <Text 
            fontSize="sm" 
            textColor="text-gray-600" 
            align="text-center"
            className="mt-2"
          >
            Join us and start shopping
          </Text>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                roundedType="b"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="agree-terms"
              name="agree-terms"
              checked={formData.agreeTerms || false}
              onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              label={
                <>
                  I agree to the{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Terms and Conditions
                  </a>
                </>
              }
              required
            />
          </div>

          <div>
            <Button type="submit">
              Sign up
            </Button>
          </div>

          <div className="text-center">
            <Text fontSize="sm" textColor="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="hover:opacity-80">
                <Text 
                  as="span" 
                  fontSize="sm" 
                  fontWeight="medium" 
                  textColor="text-indigo-600"
                >
                  Sign in
                </Text>
              </Link>
            </Text>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup

