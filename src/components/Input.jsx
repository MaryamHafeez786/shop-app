import React, { useState, forwardRef } from 'react'
import { MdEmail, MdLock } from 'react-icons/md'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const Input = forwardRef(function Input({ 
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  autoComplete,
  className = '',
  roundedType = 'md', // 'md', 't' (top), 'b' (bottom), 'none'
  // Styling props
  textColor = 'text-gray-900',
  bgColor = 'bg-white',
  borderColor = 'border-gray-300',
  focusBorderColor = 'focus:border-blue-700',
  focusRingColor = 'focus:ring-blue-700',
  placeholderColor = 'placeholder-gray-400',
  width = 'w-full',
  showPasswordToggle = false,
  ...props 
}, ref) {
  const [showPassword, setShowPassword] = useState(false)
  
  // Determine which icon to show based on input type
  const hasIcon = type === 'email' || type === 'password'
  
  // Determine if password toggle should be shown
  const showToggle = type === 'password' && showPasswordToggle
  
  // Adjust padding based on whether icon is present and if toggle is shown
  let paddingLeft = hasIcon ? "pl-10" : "pl-3"
  let paddingRight = showToggle ? "pr-10" : "pr-3"
  const paddingClasses = `${paddingLeft} ${paddingRight}`
  
  // Handle input type for password toggle
  const inputType = type === 'password' && showPassword ? 'text' : type
  
  const baseClasses = `appearance-none relative block w-full ${paddingClasses} py-2 ${bgColor} border ${borderColor} ${placeholderColor} ${textColor} focus:outline-none ${focusRingColor} ${focusBorderColor} sm:text-sm`
  
  // Handle rounded corners based on roundedType prop
  let roundedClass = "rounded-md"
  if (roundedType === 't') {
    roundedClass = "rounded-t-md"
  } else if (roundedType === 'b') {
    roundedClass = "rounded-b-md"
  } else if (roundedType === 'none') {
    roundedClass = ""
  }
  
  const combinedClasses = `${baseClasses} ${roundedClass} ${className}`.trim()

  const handleTogglePassword = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      {hasIcon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          {type === 'email' ? (
            <MdEmail className="h-5 w-5 text-gray-500 flex-shrink-0" style={{ display: 'block' }} aria-hidden="true" />
          ) : type === 'password' ? (
            <MdLock className="h-5 w-5 text-gray-500 flex-shrink-0" style={{ display: 'block' }} aria-hidden="true" />
          ) : null}
        </div>
      )}
      <input
        ref={ref}
        id={id}
        name={name}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className={combinedClasses}
        {...props}
      />
      {showToggle && (
        <button
          type="button"
          onClick={handleTogglePassword}
          className="absolute inset-y-0 right-0 pr-3 flex items-center z-10"
          tabIndex={-1}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <MdVisibilityOff className="h-5 w-5 text-gray-500 hover:text-gray-700 flex-shrink-0" aria-hidden="true" />
          ) : (
            <MdVisibility className="h-5 w-5 text-gray-500 hover:text-gray-700 flex-shrink-0" aria-hidden="true" />
          )}
        </button>
      )}
    </div>
  )
})

export default Input
