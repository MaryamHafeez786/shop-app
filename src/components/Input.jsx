import React from 'react'
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline'

function Input({ 
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
  ...props 
}) {
  // Determine which icon to show based on input type
  const Icon = type === 'email' ? EnvelopeIcon : type === 'password' ? LockClosedIcon : null

  const hasIcon = type === 'email' || type === 'password'
  
  // Adjust padding based on whether icon is present
  const paddingClasses = hasIcon ? "pl-10 pr-3" : "px-3"
  const baseClasses = `appearance-none relative block w-full ${paddingClasses} py-2 bg-white border border-gray-300 placeholder-gray-400 text-gray-900 focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm`
  
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

  return (
    <div className="relative">
      {hasIcon && Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-500" aria-hidden="true" />
        </div>
      )}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        className={combinedClasses}
        {...props}
      />
    </div>
  )
}

export default Input
